/* eslint-disable */
import { Material } from './three.module.js';

var keywords = {
  position: 'csm_Position',
  emissive: 'csm_Emissive',
  normal: 'csm_Normal',
  pointSize: 'csm_PointSize',
  diffuseColor: 'csm_DiffuseColor',
  fragColor: 'csm_FragColor'
};

const VERT = {
  [`${keywords.normal}`]: {
    '#include <defaultnormal_vertex>': `
    vec3 transformedNormal = ${keywords.normal};
    #ifdef USE_INSTANCING
    	// this is in lieu of a per-instance normal-matrix
    	// shear transforms in the instance matrix are not supported
    	mat3 m = mat3( instanceMatrix );
    	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
    	transformedNormal = m * transformedNormal;
    #endif
    transformedNormal = normalMatrix * transformedNormal;
    #ifdef FLIP_SIDED
    	transformedNormal = - transformedNormal;
    #endif
    #ifdef USE_TANGENT
    	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
    	#ifdef FLIP_SIDED
    		transformedTangent = - transformedTangent;
    	#endif
    #endif
    `
  },
  [`${keywords.position}`]: {
    '#include <project_vertex>': `
    transformed = ${keywords.position};
    #include <project_vertex>
    #ifdef SCREEN_SPACE_TRANSFORM
      screenSpaceTransform( gl_Position, mvPosition );
    #endif
  `
  },
  [`${keywords.pointSize}`]: {
    'gl_PointSize = size;': `gl_PointSize = ${keywords.pointSize};`
  }
};
const FRAG = {
  [`${keywords.diffuseColor}`]: {
    '#include <color_fragment>': `
    #include <color_fragment>
    diffuseColor = ${keywords.diffuseColor};
  `
  },
  [`${keywords.fragColor}`]: {
    '#include <output_fragment>': `
    #include <output_fragment>
    gl_FragColor  = ${keywords.fragColor};
  `
  },
  [`${keywords.emissive}`]: {
    'vec3 totalEmissiveRadiance = emissive;': `
    vec3 totalEmissiveRadiance = ${keywords.emissive};
    `
  }
};

class CustomShaderMaterial extends Material {
  constructor(baseMaterial, fragmentShader, vertexShader, uniforms, opts) {
    // @ts-ignore
    const base = new baseMaterial(opts);
    super();
    this.base = base;
    this.uniforms = uniforms || {};

    for (const key in this.base) {
      // @ts-ignore
      if (this[key] === undefined) this[key] = 0; // @ts-ignore

      this[key] = this.base[key];
    }

    this.update(fragmentShader, vertexShader, uniforms);
  }

  update(fragmentShader, vertexShader, uniforms) {
    this.generateMaterial(fragmentShader, vertexShader, uniforms);
  }

  generateMaterial(fragmentShader, vertexShader, uniforms) {
    const parsedFragmentShader = this.parseShader(fragmentShader);
    const parsedVertexShader = this.parseShader(vertexShader);
    this.uniforms = uniforms || {};

    this.customProgramCacheKey = () => {
      return this.uuid;
    };

    this.onBeforeCompile = shader => {
      if (parsedFragmentShader) {
        const patchedFragmentShader = this.patchShader(parsedFragmentShader, shader.fragmentShader, FRAG);
        shader.fragmentShader = patchedFragmentShader;
      }

      if (parsedVertexShader) {
        const patchedVertexShader = this.patchShader(parsedVertexShader, shader.vertexShader, VERT);
        shader.vertexShader = '#define IS_VERTEX;\n' + patchedVertexShader;
      }

      shader.uniforms = {
        ...shader.uniforms,
        ...this.uniforms
      };
      this.uniforms = shader.uniforms;
      this.needsUpdate = true;
    };
  }

  patchShader(customShader, shader, patchMap) {
    let patchedShader = shader;
    Object.keys(patchMap).forEach(name => {
      Object.keys(patchMap[name]).forEach(key => {
        if (customShader.main.includes(name)) {
          patchedShader = replaceAll(patchedShader, key, patchMap[name][key]);
        }
      });
    });
    patchedShader = patchedShader.replace('void main() {', `
          ${customShader.header}
          void main() {
            vec3 csm_Position;
            vec3 csm_Normal;
            vec3 csm_Emissive;

            #ifdef IS_VERTEX
              csm_Position = position;
            #endif

            #ifdef IS_VERTEX
              csm_Normal = normal;
            #endif
            
            #ifndef IS_VERTEX
              #ifdef STANDARD
                csm_Emissive = emissive;
              #endif
            #endif

            vec4 csm_DiffuseColor = vec4(1., 0., 0., 1.);
            vec4 csm_FragColor = vec4(1., 0., 0., 1.);
            float csm_PointSize = 1.;

            ${customShader.main}
          `);
    patchedShader = customShader.defines + patchedShader;
    return patchedShader;
  }

  parseShader(shader) {
    if (!shader) return;
    const parsedShader = {
      defines: '',
      header: '',
      main: ''
    };
    const main = shader.match(/void\s*main\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}/g);

    if (main != null && main.length) {
      const mainBody = main[0].match(/\{((.|\n)*?)\}/g);

      if (mainBody != null && mainBody.length) {
        parsedShader.main = mainBody[0];
      }

      const rest = shader.replace(main[0], '');
      const defines = rest.match(/#(.*?;)/g) || [];
      const header = defines.reduce((prev, curr) => prev.replace(curr, ''), rest);
      parsedShader.header = header;
      parsedShader.defines = defines.join('\n');
    }

    return parsedShader;
  }

}

const replaceAll = (str, find, rep) => str.split(find).join(rep);

export { CustomShaderMaterial as default };
