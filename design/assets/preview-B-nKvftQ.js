import{d as M}from"./index-BWTWe0Km.js";(function(){try{var r=typeof $<"u"?$:typeof y<"u"?y:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="ea543252-63be-4a5a-b1fd-c6db7ae9ab3a",r._sentryDebugIdIdentifier="sentry-dbid-ea543252-63be-4a5a-b1fd-c6db7ae9ab3a")}catch{}})();const{useMemo:m,useEffect:k}=__STORYBOOK_MODULE_PREVIEW_API__,{global:y}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var p="backgrounds",{document:l,window:$}=y,x=()=>$.matchMedia("(prefers-reduced-motion: reduce)").matches,O=(r,e=[],a)=>{if(r==="transparent")return"transparent";if(e.find(n=>n.value===r))return r;let d=e.find(n=>n.name===a);if(d)return d.value;if(a){let n=e.map(o=>o.name).join(", ");B.warn(M`
        Backgrounds Addon: could not find the default color "${a}".
        These are the available colors for your story based on your configuration:
        ${n}.
      `)}return"transparent"},E=r=>{(Array.isArray(r)?r:[r]).forEach(S)},S=r=>{var a;let e=l.getElementById(r);e&&((a=e.parentElement)==null||a.removeChild(e))},w=(r,e)=>{let a=l.getElementById(r);if(a)a.innerHTML!==e&&(a.innerHTML=e);else{let d=l.createElement("style");d.setAttribute("id",r),d.innerHTML=e,l.head.appendChild(d)}},I=(r,e,a)=>{var n;let d=l.getElementById(r);if(d)d.innerHTML!==e&&(d.innerHTML=e);else{let o=l.createElement("style");o.setAttribute("id",r),o.innerHTML=e;let i=`addon-backgrounds-grid${a?`-docs-${a}`:""}`,t=l.getElementById(i);t?(n=t.parentElement)==null||n.insertBefore(o,t):l.head.appendChild(o)}},A=(r,e)=>{var c;let{globals:a,parameters:d}=e,n=(c=a[p])==null?void 0:c.value,o=d[p],i=m(()=>o.disable?"transparent":O(n,o.values,o.default),[o,n]),t=m(()=>i&&i!=="transparent",[i]),s=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",u=m(()=>`
      ${s} {
        background: ${i} !important;
        ${x()?"":"transition: background-color 0.3s;"}
      }
    `,[i,s]);return k(()=>{let g=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!t){E(g);return}I(g,u,e.viewMode==="docs"?e.id:null)},[t,u,e]),r()},L=(r,e)=>{var _;let{globals:a,parameters:d}=e,n=d[p].grid,o=((_=a[p])==null?void 0:_.grid)===!0&&n.disable!==!0,{cellAmount:i,cellSize:t,opacity:s}=n,u=e.viewMode==="docs",c=d.layout===void 0||d.layout==="padded"?16:0,g=n.offsetX??(u?20:c),b=n.offsetY??(u?20:c),v=m(()=>{let f=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${t*i}px ${t*i}px`,`${t*i}px ${t*i}px`,`${t}px ${t}px`,`${t}px ${t}px`].join(", ");return`
      ${f} {
        background-size: ${h} !important;
        background-position: ${g}px ${b}px, ${g}px ${b}px, ${g}px ${b}px, ${g}px ${b}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${s/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${s/2}) 1px, transparent 1px) !important;
      }
    `},[t]);return k(()=>{let f=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){E(f);return}w(f,v)},[o,v,e]),r()},C=[L,A],D={[p]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[p]:null};export{C as decorators,R as globals,D as parameters};
