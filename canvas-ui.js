var CanvasUI=(()=>{var L=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var oe=Object.prototype.hasOwnProperty;var ae=(l,a)=>{for(var i in a)L(l,i,{get:a[i],enumerable:!0})},se=(l,a,i,c)=>{if(a&&typeof a=="object"||typeof a=="function")for(let u of ie(a))!oe.call(l,u)&&u!==i&&L(l,u,{get:()=>a[u],enumerable:!(c=re(a,u))||c.enumerable});return l};var ue=l=>se(L({},"__esModule",{value:!0}),l);var he={};ae(he,{createRipple:()=>pe,supportsHtmlInCanvas:()=>me});var le={amplitude:.5,speed:.65,wavelength:80,rings:2,decay:1,refraction:100,dispersion:.5,shine:.5,trigger:"click",interval:0},F=12,K=340,ce=`#version 300 es
precision highp float;
layout(location = 0) in vec2 aPos;
out vec2 vUv;
void main () {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,fe=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
uniform sampler2D uContent;
uniform vec2 uResolution;
uniform vec4 uRipples[12];
uniform int uCount;
uniform float uSpeed;
uniform float uWavelength;
uniform float uWidth;
uniform float uDecay;
uniform float uRefraction;
uniform float uDispersion;
uniform float uShine;
uniform float uHasContent;
uniform float uMaxX;

vec4 page (vec2 p) {
  p.x = clamp(p.x, 0.0005, uMaxX - 0.0005);
  p.y = clamp(p.y, 0.0005, 0.9995);
  return texture(uContent, p);
}

void main () {
  vec2 pUv = vec2(vUv.x, 1.0 - vUv.y);
  vec2 frag = pUv * uResolution;

  vec2 grad = vec2(0.0);
  float k = 6.28318530718 / uWavelength;
  float w2 = uWidth * uWidth;

  for (int i = 0; i < 12; i++) {
    if (i >= uCount) break;
    vec4 rp = uRipples[i];
    vec2 dv = frag - rp.xy;
    float r = length(dv);
    float front = uSpeed * rp.z;
    float s = r - front;
    float env = exp(-s * s / w2) * exp(-uDecay * rp.z) * rp.w;
    env *= smoothstep(0.0, 0.08, rp.z);
    env *= inversesqrt(1.0 + front / max(uWavelength, 1.0) * 0.2);
    if (env < 0.0015) continue;
    float dh = (k * cos(s * k) - 2.0 * s / w2 * sin(s * k)) * env;
    grad += dv / max(r, 1.0) * dh * uWavelength * 0.16;
  }

  float g = dot(grad, vec2(-0.55, -0.8));
  float glint = pow(clamp(g * 2.2, 0.0, 1.0), 2.0) * uShine;
  float shade = pow(clamp(-g * 1.6, 0.0, 1.0), 2.0) * uShine * 0.3;

  if (uHasContent < 0.5) {
    float a = clamp(glint * 0.9 + shade * 0.5, 0.0, 0.85);
    outColor = vec4(vec3(glint * 0.9), a);
    return;
  }

  vec2 offs = grad * uRefraction / uResolution;
  vec3 col;
  if (uDispersion > 0.001) {
    float d = uDispersion * 0.35;
    col = vec3(
      page(pUv + offs * (1.0 + d)).r,
      page(pUv + offs).g,
      page(pUv + offs * (1.0 - d)).b
    );
  } else {
    col = page(pUv + offs).rgb;
  }
  col += glint;
  col *= 1.0 - shade;
  outColor = vec4(col, 1.0);
}`;function me(){if(typeof document>"u")return!1;let l=document.createElement("canvas"),a=l.getContext("2d");return!!(a&&typeof a.drawElementImage=="function"&&typeof l.requestPaint=="function")}function pe(l,a={}){let i={...le,...a},{source:c,content:u,output:o}=l,e=o.getContext("webgl2",{alpha:!0,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!0});if(!e||e.isContextLost())return null;let E=c.getContext("2d"),R=c,d=!!(E&&typeof E.drawElementImage=="function"&&typeof R.requestPaint=="function"),x=!1,W=()=>{};d&&(R.onpaint=()=>{try{E.reset(),E.drawElementImage(u,0,0),x=!0,W()}catch{}});function X(t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)||console.error("Ripple shader error:",e.getShaderInfoLog(r)),r}let B=X(e.VERTEX_SHADER,ce),O=X(e.FRAGMENT_SHADER,fe),m=e.createProgram();e.attachShader(m,B),e.attachShader(m,O),e.linkProgram(m);let s={},Z=e.getProgramParameter(m,e.ACTIVE_UNIFORMS);for(let t=0;t<Z;t++){let n=e.getActiveUniform(m,t);s[n.name.replace("[0]","")]=e.getUniformLocation(m,n.name)}let H=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,H),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0);let T=e.createTexture();e.bindTexture(e.TEXTURE_2D,T),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,0]));let G=1;function P(){let t=Math.min(window.devicePixelRatio||1,2),n=Math.max(1,Math.round(o.clientWidth*t)),r=Math.max(1,Math.round(o.clientHeight*t));if((o.width!==n||o.height!==r)&&(o.width=n,o.height=r),G=Math.min(1,Math.max(.05,u.clientWidth/Math.max(o.clientWidth,1))),d){let y=Math.max(1,Math.round(c.clientWidth)),h=Math.max(1,Math.round(c.clientHeight));(c.width!==y*t||c.height!==h*t)&&(c.width=y*t,c.height=h*t),R.requestPaint()}}P();function $(){!d||!x||(x=!1,e.bindTexture(e.TEXTURE_2D,T),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,c))}let f=[],v=new Float32Array(F*4);function b(t,n,r=1){g||(f.length>=F&&f.shift(),f.push({x:t,y:n,age:0,amp:r}),p())}function ee(t){let n=Math.hypot(o.clientWidth,o.clientHeight),r=K*Math.max(i.speed,.05),y=i.wavelength*Math.max(i.rings,1)*.5;for(let h=f.length-1;h>=0;h--){let C=f[h];C.age+=t,(C.age*r>n+y*3||Math.exp(-Math.max(i.decay,.05)*C.age)*C.amp<.012)&&f.splice(h,1)}}function k(){$();let t=o.width/Math.max(o.clientWidth,1);e.useProgram(m),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,T),e.uniform1i(s.uContent,0),e.uniform2f(s.uResolution,o.width,o.height);for(let n=0;n<F;n++){let r=f[n];v[n*4]=r?r.x*t:0,v[n*4+1]=r?r.y*t:0,v[n*4+2]=r?r.age:0,v[n*4+3]=r?r.amp*Math.max(i.amplitude,0):0}e.uniform4fv(s.uRipples,v),e.uniform1i(s.uCount,f.length),e.uniform1f(s.uSpeed,K*Math.max(i.speed,.05)*t),e.uniform1f(s.uWavelength,Math.max(i.wavelength,4)*t),e.uniform1f(s.uWidth,Math.max(i.wavelength,4)*Math.max(i.rings,1)*.5*t),e.uniform1f(s.uDecay,Math.max(i.decay,.05)),e.uniform1f(s.uRefraction,Math.max(i.refraction,0)*t),e.uniform1f(s.uDispersion,Math.max(i.dispersion,0)),e.uniform1f(s.uShine,Math.max(i.shine,0)),e.uniform1f(s.uHasContent,d?1:0),e.uniform1f(s.uMaxX,G),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,o.width,o.height),e.drawArrays(e.TRIANGLE_STRIP,0,4)}function te(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,o.width,o.height),d?k():(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT))}let U=0,_=performance.now(),S=!1,M=!1,w=!0,D=0,A=window.matchMedia("(prefers-reduced-motion: reduce)"),g=A.matches;function ne(){let t=o.clientWidth,n=o.clientHeight;t<10||n<10||b(t*(.15+Math.random()*.7),n*(.15+Math.random()*.7),.6+Math.random()*.5)}function N(t){if(S)return;if(!w){M=!1;return}let n=Math.min(Math.max((t-_)/1e3,0),1/30);if(_=t,g||(ee(n),i.interval>0&&(D+=n,D>=i.interval&&(D=0,ne()))),f.length>0)k();else if(te(),!x&&(i.interval<=0||g)){M=!1;return}U=requestAnimationFrame(N)}function p(){S||M||!w||(M=!0,_=performance.now(),U=requestAnimationFrame(N))}W=p,p();function q(t){let n=o.getBoundingClientRect();return[t.clientX-n.left,t.clientY-n.top]}let z=-1e5,Y=-1e5;function V(t){if(i.trigger==="none")return;let[n,r]=q(t);b(n,r,1)}function j(t){if(i.trigger!=="hover")return;let[n,r]=q(t);Math.hypot(n-z,r-Y)<56||(z=n,Y=r,b(n,r,.3))}u.addEventListener("pointerdown",V,{passive:!0}),u.addEventListener("pointermove",j,{passive:!0});function Q(){g=A.matches,g&&(f.length=0),p()}A.addEventListener("change",Q);let I=new ResizeObserver(()=>{P(),p()});I.observe(o),I.observe(u);let J=new IntersectionObserver(t=>{w=t[t.length-1]?.isIntersecting??!0,w&&p()});return J.observe(o),{setOptions(t){Object.entries(t).some(([n,r])=>i[n]!==r)&&(Object.assign(i,t),p())},splash:b,resize(){P(),p()},destroy(){S=!0,cancelAnimationFrame(U),u.removeEventListener("pointerdown",V),u.removeEventListener("pointermove",j),I.disconnect(),J.disconnect(),A.removeEventListener("change",Q),e.deleteTexture(T),e.deleteProgram(m),e.deleteShader(B),e.deleteShader(O),e.deleteBuffer(H),d&&(R.onpaint=null)}}}return ue(he);})();

;window.addEventListener("load", function () {
  var source = document.getElementById("liquid-source");
  var content = document.getElementById("liquid-content");
  var output = document.getElementById("liquid-output");
  if (!source || !content || !output) return;
  CanvasUI.createRipple(
    { source: source, content: content, output: output },
    { amplitude: 0.45, speed: 0.6, wavelength: 100, rings: 2, decay: 1.7, shine: 0.4, trigger: "click", interval: 0 }
  );
});
