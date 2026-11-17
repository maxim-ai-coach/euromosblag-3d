import{z as g,k as u,bD as p,a3 as w,n as S,P as h,S as T,W as b,ab as C}from"./three-Dm5wDShI.js";let l,c,i,s;function F(e,m=1/0,n=null){c||(c=new g(2,2,1,1)),i||(i=new u({uniforms:{blitTexture:new p(e)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = sRGBTransferOETF( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),i.uniforms.blitTexture.value=e,i.defines.IS_SRGB=e.colorSpace==w,i.needsUpdate=!0,s||(s=new S(c,i),s.frustumCulled=!1);const d=new h,v=new T;v.add(s),n===null&&(n=l=new b({antialias:!1}));const o=Math.min(e.image.width,m),r=Math.min(e.image.height,m);n.setSize(o,r),n.clear(),n.render(v,d);const t=document.createElement("canvas"),f=t.getContext("2d");t.width=o,t.height=r,f.drawImage(n.domElement,0,0,o,r);const a=new C(t);return a.minFilter=e.minFilter,a.magFilter=e.magFilter,a.wrapS=e.wrapS,a.wrapT=e.wrapT,a.colorSpace=e.colorSpace,a.name=e.name,l&&(l.forceContextLoss(),l.dispose(),l=null),a}export{F as d};
