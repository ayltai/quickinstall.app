(function(){try{var t=typeof window<"u"?window:typeof y<"u"?y:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="88815761-0247-4073-9557-49f142bd67b3",t._sentryDebugIdIdentifier="sentry-dbid-88815761-0247-4073-9557-49f142bd67b3")}catch{}})();let l;const D=new Uint8Array(16);function w(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(D)}const c=[];for(let t=0;t<256;++t)c.push((t+256).toString(16).slice(1));function A(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),R={randomUUID:S};function T(t,e,n){if(R.randomUUID&&!e&&!t)return R.randomUUID();t=t||{};const i=t.random||(t.rng||w)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=i[r];return e}return A(i)}const{addons:U}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:j}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var x="storybook/actions",V=`${x}/action-event`,P={depth:10,clearOnStoryChange:!0,limit:50},h=(t,e)=>{let n=Object.getPrototypeOf(t);return!n||e(n)?n:h(n,e)},F=t=>!!(typeof t=="object"&&t&&h(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),M=t=>{if(F(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let n=Object.getOwnPropertyDescriptor(e,"view"),i=n==null?void 0:n.value;return typeof i=="object"&&(i==null?void 0:i.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...n,value:Object.create(i.constructor.prototype)}),e}return t},v=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?T():Date.now().toString(36)+Math.random().toString(36).substring(2);function g(t,e={}){let n={...P,...e},i=function(...r){var u,_;if(e.implicit){let O=(u="__STORYBOOK_PREVIEW__"in y?y.__STORYBOOK_PREVIEW__:void 0)==null?void 0:u.storyRenders.find(p=>p.phase==="playing"||p.phase==="rendering");if(O){let p=!((_=window==null?void 0:window.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),m=new j({phase:O.phase,name:t,deprecated:p});if(p)console.warn(m);else throw m}}let o=U.getChannel(),d=v(),s=5,a=r.map(M),I=r.length>1?a:a[0],f={id:d,count:0,data:{name:t,args:I},options:{...n,maxDepth:s+(n.depth||3),allowFunction:n.allowFunction||!1}};o.emit(V,f)};return i.isAction=!0,i.implicit=e.implicit,i}var E=(t,e)=>typeof e[t]>"u"&&!(t in e),B=t=>{let{initialArgs:e,argTypes:n,id:i,parameters:{actions:r}}=t;if(!r||r.disable||!r.argTypesRegex||!n)return{};let o=new RegExp(r.argTypesRegex);return Object.entries(n).filter(([d])=>!!o.test(d)).reduce((d,[s,a])=>(E(s,e)&&(d[s]=g(s,{implicit:!0,id:i})),d),{})},k=t=>{let{initialArgs:e,argTypes:n,parameters:{actions:i}}=t;return i!=null&&i.disable||!n?{}:Object.entries(n).filter(([r,o])=>!!o.action).reduce((r,[o,d])=>(E(o,e)&&(r[o]=g(typeof d.action=="string"?d.action:o)),r),{})},L=[k,B],b=Symbol.for("tinyspy:spy"),K=t=>{let{args:e,parameters:{actions:n}}=t;n!=null&&n.disable||Object.entries(e).filter(([,i])=>typeof i=="function"&&"_isMockFunction"in i&&i._isMockFunction).forEach(([i,r])=>{var d;let o=r.getMockImplementation()??(b in r?(d=r[b])==null?void 0:d.getOriginal():void 0);if((o==null?void 0:o._actionAttached)!==!0&&(o==null?void 0:o.isAction)!==!0){let s=(...a)=>(g(i)(...a),o==null?void 0:o(...a));s._actionAttached=!0,r.mockImplementation(s)}})},W=[K];export{L as argsEnhancers,W as loaders,b as tinySpyInternalState};
