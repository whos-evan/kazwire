// Lego Junkbot by Isaiah Odhner - 2020-11-9
// https://glslsandbox.com/e#79774.3
// https://www.shadertoy.com/view/wdcfDH (featuring tilt shift effect)
// Based on "Go Go LegoMan !" by sebastien durand - 01/2014
// https://www.shadertoy.com/view/MsB3zK
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

// For antialiasing, uncomment #define ANTIALIASING below.

// Possible Improvements:
// - Get brick proportions just right; I think the sloped brick is a little too tall, and maybe the square brick is a little short?
// - Add rubbish in bins. Work started - uncomment #define RUBBISH to see.
// - It would be nice if the ground was made of lego.
// - Prevent feet clipping into ground when walking.
// - Also the animation could be a lot more dynamic,
//   by bending the legs like in Junkbot and other lego video games / animations,
//   maybe moving junkbot forward relative to the camera for part of the walk cycle.
//   Note that texturing the legs currently duplicates code for rotation based on the animation.
// - Better camera control
// - Of course other elements from the game could be added, even interactivity.

#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

//#define ANTIALIASING
const float AA = 3.; // Anti-Aliasing Level (uncomment #define ANTIALIASING to use)

//#define DYNAMIC_WRAP_INTERVAL
//#define RUBBISH
//#define DEBUG_RECYCLING_SYMBOL

#define TAU 6.28318530718
#define NB_ITER 120
#define MAX_DIST 400.
#define PRECISION .002

#define R(p, a) p=cos(a)*p+sin(a)*vec2(p.y, -p.x)

const vec2 
    V01 = vec2(0,1),
    Ve = vec2(.001,0),
    leg1 = vec2(0,-.1),
    leg2 = vec2(0,-.8),
    hand2 = vec2(-.1,.25);	

const vec3
    bHat = vec3(.47*4.*.392,.14,.45),
    bBody = vec3(.47*4.*.392,.14*3.,.45*2.),
    bBody1 = vec3(.75,.6,1.),
    v0 = vec3(0),
    body0 = vec3(0,-.15,0),
    head0 = vec3(0,body0.y-1.05,0),
    hat0 = vec3(0,head0.y-.77,0),
    middle1 = vec3(0,.44,0),
    middle2 = vec3(.65,.1,.325),
    middle3 = vec3(.76,0,0),
    arm0 = vec3(.7,-.55,0),
    hand0 = vec3(.4,1.,.5),
    arm1 = vec3(-.25,-.5,0),
    arm2 = vec3(-.4,-1.,-.5),
    hand1 = vec3(.02,.15,0);

const vec3 recycling_bin_offset =
    #ifdef DYNAMIC_WRAP_INTERVAL
    vec3(1., 0., 0.)
    #else
    vec3(-1., 0., -.5)
    #endif
    ;

const lowp float 
    legH = 1., 
    legE=.34, 
    legX=.31, 
    handA = -.7;
//face_a = 1.1;
//face_r = 27.;

const float 
    face_x = 30.,    //27.*0.453596121, //face_r*cos(a); // precalculated
    face_y = -27.*0.89120736; //face_r*sin(a); // precalculated

// Global variables
float time420simultaneousEarthRotation;
vec3 sunLight, deltaMan;//, armN;
//mat2 handMat;
vec2 fCoord;
int scene;
float anim;

#ifdef DYNAMIC_WRAP_INTERVAL
    float wrapInterval;
#else
    #define wrapInterval 5.
#endif


float hash( const in vec3 p ) {
    float h = dot(p,vec3(127.1,311.7,758.5453123));	
    return fract(sin(h)*43758.5453123);
}
float hashSym( const in vec3 p ) {
    return hash(p) * 2.0 - 1.0;
}

float dot2( in vec2 v ) { return dot(v,v); }
float dot2( in vec3 v ) { return dot(v,v); }
float nDot( in vec2 a, in vec2 b ) { return a.x*b.x - a.y*b.y; }

float udTriangle( vec3 p, vec3 a, vec3 b, vec3 c )
{
    vec3 ba = b - a; vec3 pa = p - a;
    vec3 cb = c - b; vec3 pb = p - b;
    vec3 ac = a - c; vec3 pc = p - c;
    vec3 nor = cross( ba, ac );

    return sqrt(
        (sign(dot(cross(ba,nor),pa)) +
         sign(dot(cross(cb,nor),pb)) +
         sign(dot(cross(ac,nor),pc))<2.0)
        ?
        min( min(
            dot2(ba*clamp(dot(ba,pa)/dot2(ba),0.0,1.0)-pa),
            dot2(cb*clamp(dot(cb,pb)/dot2(cb),0.0,1.0)-pb) ),
            dot2(ac*clamp(dot(ac,pc)/dot2(ac),0.0,1.0)-pc) )
        :
        dot(nor,pa)*dot(nor,pa)/dot2(nor) );
}
float udQuad( vec3 p, vec3 a, vec3 b, vec3 c, vec3 d )
{
    vec3 ba = b - a; vec3 pa = p - a;
    vec3 cb = c - b; vec3 pb = p - b;
    vec3 dc = d - c; vec3 pc = p - c;
    vec3 ad = a - d; vec3 pd = p - d;
    vec3 nor = cross( ba, ad );

    return sqrt(
        (sign(dot(cross(ba,nor),pa)) +
         sign(dot(cross(cb,nor),pb)) +
         sign(dot(cross(dc,nor),pc)) +
         sign(dot(cross(ad,nor),pd))<3.0)
        ?
        min( min( min(
            dot2(ba*clamp(dot(ba,pa)/dot2(ba),0.0,1.0)-pa),
            dot2(cb*clamp(dot(cb,pb)/dot2(cb),0.0,1.0)-pb) ),
            dot2(dc*clamp(dot(dc,pc)/dot2(dc),0.0,1.0)-pc) ),
            dot2(ad*clamp(dot(ad,pd)/dot2(ad),0.0,1.0)-pd) )
        :
        dot(nor,pa)*dot(nor,pa)/dot2(nor) );
}
float sdTriangle( in vec2 p, in vec2 p0, in vec2 p1, in vec2 p2 )
{
    vec2 e0 = p1-p0, e1 = p2-p1, e2 = p0-p2;
    vec2 v0 = p -p0, v1 = p -p1, v2 = p -p2;
    vec2 pq0 = v0 - e0*clamp( dot(v0,e0)/dot(e0,e0), 0.0, 1.0 );
    vec2 pq1 = v1 - e1*clamp( dot(v1,e1)/dot(e1,e1), 0.0, 1.0 );
    vec2 pq2 = v2 - e2*clamp( dot(v2,e2)/dot(e2,e2), 0.0, 1.0 );
    float s = sign( e0.x*e2.y - e0.y*e2.x );
    vec2 d = min(min(vec2(dot(pq0,pq0), s*(v0.x*e0.y-v0.y*e0.x)),
                     vec2(dot(pq1,pq1), s*(v1.x*e1.y-v1.y*e1.x))),
                     vec2(dot(pq2,pq2), s*(v2.x*e2.y-v2.y*e2.x)));
    return -sqrt(d.x)*sign(d.y);
}
float udQuad( vec2 p, vec2 a, vec2 b, vec2 c, vec2 d )
{
    // TODO: delete me, use sdBox
    return udQuad( vec3(p, 0), vec3(a, 0), vec3(b, 0), vec3(c, 0), vec3(d, 0) );
}

float sdBox( in vec2 p, in vec2 b )
{
    vec2 d = abs(p)-b;
    return length(max(d,0.0)) + min(max(d.x,d.y),0.0);
}

float sdCapsule(in vec3 p, in vec3 a, in vec3 b, in float r0, in float r1 ) {
    vec3 pa = p - a, ba = b - a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0., 1.);
    return length( pa - ba*h ) - mix(r0,r1,h);
}

float smin(in float a, in float b, in float k ) {
    float h = clamp( .5+.5*(b-a)/k, 0., 1. );
    return mix( b, a, h ) - k*h*(1.-h);
}

float onion( in float d, in float h )
{
    return abs(d)-h;
}

// h = .5, //  half of height
// r1 = 1., //main rayon
// r2 = .2, // top border
float roundCylinder(in vec3 p, in float h, in float r1, in float r2) {
    float
        a = abs(p.y)-(h-r2),
        b = length(p.xz)-r1;
    return min(min(max(a, b), max(a-r2, b+r2)), length(vec2(b+r2,a))-r2);
}

float sdCappedCylinder( vec3 p, vec2 h )
{
    vec2 d = abs(vec2(length(p.xz),p.y)) - h;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}

float hat(in vec3 p) {
    // yellow topper

    vec3 vd = abs(p) - bBody1;
    p.x = abs(p.x);
    float d = length(max(abs(p)-bHat,0.0));//-.05;
    return max(abs(p.z)-.392, d);
}

float head(in vec3 p) {
    // orange sloped brick

    vec3 vd = abs(p) - bBody1;
    vd.z -= 0.16;
    float d = min(max(vd.x,max(vd.y,vd.z)),0.0) + length(max(vd,0.0));
    p.z = -p.z;
    p.z -= .392;
    p.y *= 4.6;
    d = max(dot(p.zy, vec2(.5, .08))-.25,d);
    return max(abs(p.z)-2.*.392, d);
}

float body(in vec3 p) {
    // orange square brick

    vec3 vd = abs(p) - bBody1;
    p.x = abs(p.x);
    p.z += .392;
    float d = length(max(abs(p)-bBody,0.0))-.025;
    return max(abs(p.z)-2.*.392, d);
}

float faceSticker(in vec3 p) {
    // sticker thickness is needed especially in scene where body rotates,
    // to avoid the face going black or darkening when it should actually get lighter (when facing into the light more)
    float stickerThickness = .03;
    float width = 4.0*.392 - stickerThickness * 2. - .05;
    float height = 1.1 - stickerThickness * 2.;
    vec3 offset = vec3(width/2., 0.4, 1.2 - stickerThickness);
    return udQuad(p+offset,
                  vec3(0., 0., 0.),
                  vec3(0., height, 0.),
                  vec3(width, height, 0.),
                  vec3(width, 0., 0.)
                 ) - stickerThickness;
}

float leg(in vec3 p) {
    float d = length(p.zy)-legE;
    d = min(d, length(max(abs(p+vec3(0.,legH*.5,-.08))-vec3(legX,legH*.5,legE-.08),0.)));
    d = min(d, length(max(abs(p+vec3(0.,legH,.02))-vec3(legX,.15,legE+.02),0.)));
    d = max(abs(p.x)-legX, d)-.02;
    vec3 dd = abs(p+vec3(0.,legH,-.08))-vec3(legX-.1,legH+.2,legE-.18);
    float d2 = min(max(dd.x,max(dd.y,dd.z)),0.) + length(max(dd,0.));
    dd = abs(p+vec3(0.,legH+.1,.02))-vec3(legX-.1,.15,legE-.98);
    d2 = min(d2, min(max(dd.x,max(dd.y,dd.z)),0.0) + length(max(dd,0.)));
    d2 = min(d2, max(-p.z-.05, length(p.xy-leg1)-.24));
    d2 = min(d2, max(-p.z-.05, length(p.xy-leg2)-.24));
    return max(-d2,d);
}

vec2 minObj(in vec2 o1, in vec2 o2) {
    return (o1.x<o2.x) ? o1 : o2;
}

ivec2 getId(in vec3 p) {
    return ivec2(
        (wrapInterval*100.+p.x)/wrapInterval,
        (wrapInterval*100.+p.z)/wrapInterval
    )-100;
}

vec2 minifig(in vec3 p, in ivec2 id) {

    float a, bodyA;
    vec3 p0 = p;
    float sa,ca;//, anim=0.;

    if (scene!=1) {
        anim = -1.1+cos(float(-id.y)*.7 + 6.*time);
    } else { // walking
        anim = (p0.x<0.?1.:-1.)*cos(6.*time-4.);
    }

    if (scene==1) {
        p += deltaMan;
    }
    else if(scene==2) {
        bodyA = .12*anim;
        R(p.yz, -bodyA);
    }

    vec2 dHat = vec2(hat(p+hat0),0.);
    vec2 dHead = vec2(head(p+head0),1.);
    vec2 dBody = vec2(body(p+body0),2.);
    vec2 dFaceSticker = vec2(faceSticker(p+body0),2.);

    float middle = length(max(abs(p+middle1)- middle2,0.0))-.05;
    middle = min(middle,roundCylinder(p.yxz+middle3,.06,.39,.02));
    vec2 dMiddle = vec2(middle,3.);   
    p.x = -abs(p.x);

    vec3 p1 = p;
    p1.y +=.77;

    if (scene==1) { // id.x==0 && id.y==0) {
        R(p1.yz, .4*anim); 
    } else if (scene == 2) {
        R(p1.yz, 2.*bodyA); 
    }

    vec2 dLeg = vec2(leg(p1+vec3(.38,.77-.77,0)),4.);

    p += arm0;

    if (scene!=0 || id.x==0 && id.y==0) {
        R(p.yz, .5 - anim);
    }

    //vec2 dArm = vec2(arm(p),5.);
    //vec2 dHand = vec2(hand(p+hand0),6.);

    return minObj(
        minObj(
            minObj(
                minObj(
                    minObj(
                        dBody,
                        dFaceSticker
                    ),
                    dHead
                ),
                dHat
            ),
            dMiddle
        ),
        dLeg
    );
}

float recycling_bin(in vec3 pos, ivec2 id) {
    vec3 q = pos - vec3(-1.0,0.0,1.0);
    float d = onion( sdCappedCylinder( q, vec2(0.6,1.8) ), 0.05);
    d = max( d, pos.y ); // cut off top

    // add papers (debris, rubbish, trash, refuse)
    #ifdef RUBBISH
    float paperThickness = 0.02;
    for (float i = 0.; i < 5.; i += 1.) {
        d = min(d,
                udQuad(
                    q - vec3(
                        hashSym(vec3(i, id)) * 0.1,
                        hashSym(vec3(i+30., id)) * 0.1 - 0.2,
                        hashSym(vec3(i+60., id)) * 0.1
                    ),
                    vec3(hashSym(vec3(i+0.1, id)), hashSym(vec3(i+0.2, id)), hashSym(vec3(i+0.3, id))) * 0.4,
                    vec3(hashSym(vec3(i+0.4, id))*0.1, hashSym(vec3(i+0.5, id)), hashSym(vec3(i+0.6, id))) * 0.4,
                    vec3(hashSym(vec3(i+0.7, id))*0.1, hashSym(vec3(i-0.1, id))*0.1, hashSym(vec3(i-0.2, id))) * 0.4,
                    vec3(hashSym(vec3(i-0.3, id)), hashSym(vec3(i-0.4, id))*0.1, hashSym(vec3(i-0.5, id))) * 0.4
                ) - paperThickness
               );
    }
    #endif
    
    return d;
}

vec2 DE(in vec3 p) {
    ivec2 id = getId(p);
    p.xz = mod(p.xz, wrapInterval)-0.5*wrapInterval;
    vec2 obj = minObj(minifig(p, id), vec2(p.y+1.93,10.));
    if (hash(vec3(id, 0.)) < 0.2 && scene != 1) {
        obj = minObj(obj, vec2(recycling_bin(p + recycling_bin_offset, id), 333.));
    }
    return obj;
}


vec3 Normal(in vec3 p, in vec3 ray, in float t) {
    float pitch = .2 * t / resolution.x;


    vec2 d = vec2(-1,1) * pitch;

    vec3 p0 = p+d.xxx; // tetrahedral offsets
    vec3 p1 = p+d.xyy;
    vec3 p2 = p+d.yxy;
    vec3 p3 = p+d.yyx;

    float f0 = DE(p0).x;
    float f1 = DE(p1).x;
    float f2 = DE(p2).x;
    float f3 = DE(p3).x;

    vec3 grad = p0*f0+p1*f1+p2*f2+p3*f3 - p*(f0+f1+f2+f3);
    //return normalize(grad);	// prevent normals pointing away from camera (caused by precision errors)
    return normalize(grad - max(.0,dot (grad,ray ))*ray);
}



float softShadow(in vec3 ro, in vec3 rd, in float minT, in float maxT, in float k) {
    float res = 1.0, h, t = minT+.1*hash(ro+rd);
    for( int i=0; i<48; i++ ) {
        //  if (t < maxT) {
        h = DE( ro + rd*t ).x;
        res = min( res, k*h/t );
        t += .1;
        //  }
    }
    return clamp(res, 0., 1.);
}

float calcAO(in vec3 pos, in vec3 nor) {
    float dd, hr=.01, totalAO=.0, sca=1.;
    for(int aoi=0; aoi<5; aoi++ ) {
        dd = DE(nor * hr + pos).x;
        totalAO += -(dd-hr)*sca;
        sca *= .7;
        hr += .05;
    }
    return clamp(1.-4.*totalAO, 0., 1.);
}

float recycling_symbol(in vec2 p, bool reverse_arrow_direction) {
    p *= 100.;
    // this offset is for junkbot's benefit, could be factored out
    p.x += 35.;
    p.y -= 15.;
    
    if (reverse_arrow_direction) {
        p.xy = p.yx;   
    }

    // flip depending on quadrant
    if (p.x < 0.) {
        if (p.y < 0.) {
            p.x = -p.x;
        } else {
            p.xy = p.yx;
        }
    } else if (p.y < 0.) {
        p.xy = p.yx;
        p.x = -p.x;
        p.y = -p.y;
    } else {
    	p.y = -p.y;
    }

    const vec2 arrow_point = vec2(0., -30.); // tip
    const float arrow_head_width = 30.; // width at base
    const float arrow_head_length = 15.; // tip to base distance
    const float arrow_shaft_width = 14.; // line thickness
    const float arrow_shaft_1_length = 19.5; // length of line adjacent to arrow head
    const float arrow_shaft_2_length = 32.; // length of tail line (away from arrow head)
    const vec2 arrow_base_point = vec2(arrow_point.x + arrow_head_length, arrow_point.y);
    const vec2 arrow_elbow_point = arrow_base_point + vec2(arrow_shaft_1_length, 0.);

    float d = min(
        sdTriangle(p,
                   arrow_point,
                   arrow_base_point + vec2(0, -arrow_head_width/2.),
                   arrow_base_point + vec2(0, arrow_head_width/2.)
                  ),
        min(
            sdBox(
                p - arrow_base_point - vec2(arrow_shaft_1_length/2., 0.),
                vec2(arrow_shaft_1_length/2., arrow_shaft_width/2.)
            ),
            sdBox(
                p - arrow_elbow_point - vec2(
                    arrow_shaft_1_length/2. - arrow_shaft_width,
                    arrow_shaft_2_length/2. - arrow_shaft_width/2.
                ),
                vec2(arrow_shaft_width/2., arrow_shaft_2_length/2.)
            )
        )
    );
    
    #ifdef DEBUG_RECYCLING_SYMBOL
    const float debug_grid_thickness = 0.5;
    const float debug_grid_interval = 5.;
    if (
        mod(p.x + debug_grid_thickness/2., debug_grid_interval) < debug_grid_thickness ||
        mod(p.y + debug_grid_thickness/2., debug_grid_interval) < debug_grid_thickness
    ) {
        d /= 10.;
    }
    #endif
    
    return d;
}

vec3 getTexture(in vec3 p, in float m) {
    ivec2 id = getId(p);

    vec3 p0 = p;
    p.xz = mod(p.xz, wrapInterval)-0.5*wrapInterval;

    if (m != 333.) {
        if (scene==1) {
            p += deltaMan;
        } else if (scene == 2) {

            float anim = -1.1+cos(float(-id.y)*.7 + 6.*time);

            float bodyA = .12*anim;
            float sa=sin(bodyA); 
            float ca=cos(bodyA);
            p.yz *= mat2(ca, -sa, sa, ca);
        }
    }
    vec3 c;   

    if (m==1. || m==2.) {
        // head or body (orange bricks)
        c = vec3(1.,.5,0.);

        // Draw blinds/grate/breadbox texture
        vec2 p2 = p.xy;
        p2.y -= 1.46;
        p2 *= 100.;
        float px = abs(p2.x);
        float e = 4.-.08*px;
        float v =
            p.y < 1.73 && p.y > 0.95 && p.x > -0.5 && p.x < 0.5 ?
            mod(p.y+.1, .15) * mod(e, 5.) * 15.
            : 5000.; // ~infinity
        v = clamp(v, 0., 1.);
        c = mix(vec3(.3, .1, 0.), c, v);

        float g = mod(time, TAU*3.);
        //if (id.x==0 && id.y==0 && g > 2.5*TAU) {
        //    R(p.xz, -.8*cos(2.*g+1.57));
        //}
        if (p.z<-1.1) {
            // Draw face
            vec2 p2 = p.xy;
            p2.y -= 0.4;
            p2 *= 100.;
            float mouth_y = -0.;
            float mouth_thickness = 2.;
            float mouth_width = 40.;
            float eye_spacing = face_x;
            float eye_y = -face_y*1.1;
            float eye_gaze_x = -7.;
            if (id.x==0 && id.y==0 && g > 2.5*TAU) {
                eye_gaze_x = -7. * cos(2.*g+1.57);
            }
            float px = abs(p2.x);
            float e = 4.-.08*px;
            float vw = // distance to white
                // whites of the eyes
                abs(p2.y-eye_y) < 5. ? 
                length(vec2(px,p2.y)-vec2(eye_spacing,eye_y))-5.8*e
                : 5000.; // ~infinity 
            vw = clamp(vw, 0., 1.);
            float pupil_x = abs(p2.x + eye_gaze_x);
            float vb = // distance to black
                // mouth
                (px<mouth_width && abs(p2.y-mouth_y)<mouth_thickness) ? 0. :
            // pupils
            abs(p2.y-eye_y) < 5. ? 
                length(vec2(pupil_x,p2.y)-vec2(eye_spacing-5.5,eye_y))-5.8
                : 5000.; // ~infinity 
            vb = clamp(vb, 0., 1.);
            c = mix(vec3(2), c, vw);
            c = mix(vec3(0), c, vb);
        } else {
            // Draw recycling symbol
            float vb = recycling_symbol(p.zy, p.x < 0.);
            vb = clamp(vb, 0., 1.);
            c = mix(vec3(.6, .2, 0.), c, vb);
        }
    } else if (m==10.) {
        // ground
        if (scene!=1) time420simultaneousEarthRotation = 0.;
        float d = .3*sin(2.2+time420simultaneousEarthRotation);
        c = vec3(.75-.25*(mod(floor(p0.x),2.)+mod(floor(p0.z+d-time420simultaneousEarthRotation*.18),2.)));
        //c = vec3(.5+.5*smin(mod(floor(p0.x),2.),mod(floor(p0.z+d-time420simultaneousEarthRotation*.18),2.),1.));
    } else if(m == 3.) {
        // pants crotch/hinge
        c = vec3(.6,.6,.6);
        //} else if(m == 6.) {
        // hands, I guess
        //c = vec3(1.,1.,0);
    } else if(m == 4.) {
        // legs
        c = vec3(.6,.6,.6);

        vec2 p2 = p.zy * 100.;

        //float vg = mod(distance(p2, vec2(0., -80.)), 16.) - 4.;
        vec2 center = vec2(0., -80.); // center of rotation of hinge joint

        // rotate around center
        p2 -= center;
        if (scene == 1) {
            R(p2, -.4*anim);
        }else if (scene == 2) {
            R(p2, -.25*anim);
        }
        p2 += center;

        float dist_to_center = distance(p2, center);
        // using onion technique described here https://www.iquilezles.org/www/articles/distfunctions/distfunctions.htm
        float vg = abs(abs(dist_to_center - 13.) - 5.) - 2.;

        vg = min(vg,
                 udQuad(p2,
                        center + vec2(-2., -85.),
                        center + vec2(+2., -85.),
                        center + vec2(+2., -20.),
                        center + vec2(-2., -20.)
                       )
                );
        float flare_width = 5.;
        float flare_length = 6.;
        for (float i = 0.; i < 4.; i+=1.) {
            vg = min(vg,
                     udQuad(p2,
                            center + vec2(-flare_length, -85.+flare_width*(i*2.+1.)),
                            center + vec2(+flare_length, -85.+flare_width*(i*2.+1.)),
                            center + vec2(+flare_length, -85.+flare_width*(i*2.+0.)),
                            center + vec2(-flare_length, -85.+flare_width*(i*2.+0.))
                           )
                    );
        }
        vg = clamp(vg, 0., 1.);
        c = mix(vec3(.2, .2, .2), c, vg);
    } else if(m == 0.) {
        c = vec3(1.2,1.2,0); // hat (yellow topper)
    } else if(m == 333.) {
        c = vec3(0.,0.,1.); // recycling bin (blue and white)

        vec3 p2 = p + recycling_bin_offset;
        if (length(p2.xz + vec2(1., -1.)) < .55) {
            // inside + rubbish
            c = vec3(1.);
        } else {
            float vb = recycling_symbol(p2.zy + vec2(-1.3, 1.), true);
            vb = clamp(vb, 0., 1.);
            c = mix(vec3(1.), c, vb);
        }
    } else {
        c = vec3(1);
    }
    if (m==10. || !(id.x==0 && id.y==0)) {
        // black & white
        float a = (c.r+c.g+c.b)*.33;
        c = vec3(1.,.95,.85)*a;
    }

    return c;
}


vec3 Render(in vec3 p, in vec3 rd, in float t, in float m) {
    vec3  col = getTexture(p, m),
        nor = Normal(p, rd, t);
    float sh = 1.,
        ao = calcAO(p, nor ),
        amb = clamp(.5+.5*nor.y, .0, 1.),
        dif = clamp(dot( nor, sunLight ), 0., 1.),
        bac = clamp(dot( nor, normalize(vec3(-sunLight.x,0.,-sunLight.z))), 0., 1.)*clamp( 1.0-p.y,0.0,1.0);

    if( dif>.02 ) { sh = softShadow( p, sunLight, .02, 10., 12.); dif *= (.1+sh); }

    vec3 brdf = vec3(0.0);
    brdf += .2*ao*amb*vec3(0.10,0.11,0.13);
    brdf += .2*ao*bac*vec3(0.15);
    brdf += 1.2*dif*vec3(1.,.9,.7);

    float pp = /*1.1**/clamp( dot(reflect(rd,nor), sunLight ), 0.0, 1.);
    float spe = 1.2*sh*pow(pp,16.0);
    float fre = .2*ao*pow(clamp(1.0+dot(nor,rd),0.0,1.0), 2.0 );

    col = col*(brdf + spe) + .2*fre*(0.5+0.5*col);
    return col;
}


mat3 lookAt(in vec3 ro, in vec3 up){
    vec3 fw=normalize(ro),
        rt=normalize(cross(fw,up));
    return mat3(rt, cross(rt,fw),fw);
}

vec3 RD(in vec3 ro, in vec3 cp) {
    // return lookAt(cp-ro, V01.xyx)*normalize(vec3(((mouse.z > 0. ? 1. : 2.)*fCoord-resolution.xy)/resolution.y, 12.0));
    return lookAt(cp-ro, V01.xyx)*normalize(vec3((1.*fCoord-resolution.xy)/resolution.y, 12.0));
} 

void main() {

    #ifdef DEBUG_RECYCLING_SYMBOL
    float vb = recycling_symbol(gl_FragCoord.xy/resolution.y - vec2(1.2, 0.35), mouse.z < 0.);
    vb = clamp(vb, 0., 1.);
    gl_FragColor = mix(vec4(1.), vec4(0.,0.,1.,1.), vb);
    return;
    #endif

    // - Precalculate global variables ------------------------------
    time420simultaneousEarthRotation = 3.14+12.*time;
    sunLight = normalize(vec3(-10.25,30.33,-7.7));
    deltaMan = vec3(0,.05*sin(1.72+time420simultaneousEarthRotation),0);
    //armN = normalize(arm2 - arm1);
    //handMat = mat2(cos(handA), -sin(handA), sin(handA), cos(handA));

    float tAnim = mod(time, 3.14*9.);  
    scene = tAnim > 3.14*9. ? 1:
    tAnim > 3.14*7. ? 2:
    tAnim > 3.14*6. ? 0 : 1;
    // The way the wrapping works, objects can't be near the boundary without artifacts,
    // and the animations aren't continuous anyways,
    // so space things out more while showing recycling bins
    // and hide recycling bins during the walking animation
    // (also avoiding animating the bins moving along the ground)
    #ifdef DYNAMIC_WRAP_INTERVAL
        wrapInterval = scene == 1 ? 5. : 10.;
    #endif


    //------------------------------------------------------------

    vec2 
        obj, 
        mousePos = (mouse.xy)*6.28,
        q = gl_FragCoord.xy/resolution.xy;

    vec3 
        ro = 45.*vec3(-cos(mousePos.x), max(.8,mousePos.x-2.+sin(mousePos.x)*cos(mousePos.y)), -.5-sin(mousePos.y)),
        rd, cp = V01.xxx;

    vec3 cTotal = vec3(0);
    float tTotal = 0.;

    #ifdef ANTIALIASING 
    for (float i=0.;i<AA;i++) 
    {
        fCoord = gl_FragCoord.xy+.4*vec2(cos(6.28*i/AA),sin(6.28*i/AA));	
        //   	fCoord = gl_FragCoord.xy+.5*mod(vec2(iFrame/2, iFrame),2.);	
        #else
        fCoord = gl_FragCoord.xy;
        #endif
        // Camera origin (o) and direction (d)
        rd = RD(ro, cp);

        // Ray marching
        float m=0.;
        float t=0.,d=1.;

        for(int i=0;i<NB_ITER;i++){
            if (abs(d)<PRECISION || t>MAX_DIST) break;
            obj = DE(ro+rd*t);
            t+=d=obj.x *.85;
            if (abs(d)<PRECISION) {
                m=obj.y;
            }
        }

        // Render colors
        if(t<MAX_DIST){// if we hit a surface color it
            cTotal += Render(ro + rd*t, rd,t, m);
            tTotal += t;
        }
        #ifdef ANTIALIASING 		
    }
    cTotal /= AA;
    tTotal /= AA;
    #endif 
    cTotal = pow(cTotal, vec3(.6));
    cTotal *= pow(16.*q.x*q.y*(1.-q.x)*(1.-q.y), .11); // vignetting
    gl_FragColor = vec4(cTotal,tTotal);

}