// See "Buffer A" tab for main code, info, and configuration
//
// This shader is a postprocessing step that adds a tilt-shift defocus effect,
// based on the color (RGB) and depth information stored in the alpha channel.
//
// https://en.wikipedia.org/wiki/Depth_of_field




// Created by sebastien durand - 05/2017
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

//---------------------------------------------------
// The depth of field process:
// For each of the neighboring pixels, the algorithm calculates if the
// reconstructed 3D point of a pixel is effectively in the
// 3D cone (circle) of confusion of the pixel. Otherwise it is ignored.
// This avoids artifacts on the edges of objects.
// The valid neighboring pixels are averaged together.
//
// Inspired by Dave Hoskins bokeh disc [https://www.shadertoy.com/view/4d2Xzw]
//---------------------------------------------------



#define WITH_DOF
#define WITH_CONE_TEST


#ifdef WITH_DOF

const float fov = 12.;
const float aperture = 1.;

const float cosAngle = cos(radians(aperture/2.));
const float GA = 2.399;  // golden angle = 2pi/(1+phi)
const mat2 rot = mat2(cos(GA),sin(GA),-sin(GA),cos(GA));

vec2 res;
    


bool inCone(vec3 p, vec3 o, vec3 n, float side) {
	return side*dot(normalize(o-p), n) >= cosAngle;
}

vec3 RD(const vec2 q) {
    return normalize(vec3((2.* q.x - 1.) * res.x/res.y,  (2.* q.y - 1.), fov));
}

//--------------------------------------------------------------------------
// eiffie's code for calculating the aperture size for a given distance...
float coc(float t) {
	return max(t*.04, (2./iResolution.y) * (1.+t));
}

vec3 dof(sampler2D tex, vec2 uv, float fDist) {
    
	vec4 colMain = texture(tex, uv);
    
    const float amount = 1.;
    
    float rad = min(.3, coc(abs(colMain.w-fDist)));//.3; // TODO calculate this for Max distance on picture
    
    float r=1.;
    
    vec3 cn = RD(uv),    // Cone axis    
         co = cn*fDist,  // Cone origin
         sum = vec3(0.),  
     	 bokeh = vec3(1),
         acc = vec3(0),
         pixPos;
    

    vec2 pixScreen,
         pixel = 1./iResolution.xy,        
         angle = vec2(0, rad);
    
    vec4 pixCol;
    
    bool isInCone = false;
	for (int j=0;j<120;j++) {  
        r += 1./r;
	    angle *= rot;
        
        pixScreen = uv + pixel*(r-1.)*angle; // Neighboring Pixel
        pixCol = texture(tex, pixScreen);    // Color of pixel (w is depth)      
        pixPos = pixCol.w * RD(pixScreen);   // Position of 3D point in camera base
#ifdef WITH_CONE_TEST
        if (inCone(pixPos, co, cn, sign(fDist - pixCol.w))) 
#endif            
        {        // true if the point is effectively in the cone
            bokeh = pow(pixCol.xyz, vec3(9.)) * amount +.4;
            acc += pixCol.xyz * bokeh;			
            sum += bokeh;
            isInCone = true;
        }
	}
        
    
 	return (!isInCone) ? colMain.xyz : // Enable to deal with problem of precision when at thin beginning of the cone
       acc.xyz/sum;
}



void mainImage(out vec4 fragColor,in vec2 fragCoord) {
    
    res = iResolution.xy;
    vec2 mouse = (iMouse.xy/iResolution.xy)*6.28;
    vec3 ro = 45.*vec3(-cos(mouse.x), max(.8,mouse.x-2.+sin(mouse.x)*cos(mouse.y)), -.5-sin(mouse.y));

    float fDist = length(ro);//; 64.;
    
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
	fragColor=vec4(dof(iChannel0,uv,fDist),2.);
}

#else 


void mainImage(out vec4 fragColor,in vec2 fragCoord)
{
	vec2 uv = gl_FragCoord.xy / iResolution.xy;
	fragColor= texture(iChannel0,uv);
}


#endif