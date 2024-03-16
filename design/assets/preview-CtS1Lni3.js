(function(){try{var e=typeof window<"u"?window:typeof o<"u"?o:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="67f99017-f0e3-47dc-a3e3-1330741fdee5",e._sentryDebugIdIdentifier="sentry-dbid-67f99017-f0e3-47dc-a3e3-1330741fdee5")}catch{}})();const{global:o}=__STORYBOOK_MODULE_GLOBAL__,{addons:a}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:g}=__STORYBOOK_MODULE_CORE_EVENTS__;var s="storybook/highlight",_="storybookHighlight",f=`${s}/add`,O=`${s}/reset`,{document:i}=o,y=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,E=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),l=a.getChannel(),I=e=>{let t=_;r();let d=Array.from(new Set(e.elements)),n=i.createElement("style");n.setAttribute("id",t),n.innerHTML=d.map(h=>`${h}{
          ${y(e.color,e.style)}
         }`).join(" "),i.head.appendChild(n)},r=()=>{var d;let e=_,t=i.getElementById(e);t&&((d=t.parentNode)==null||d.removeChild(t))};l.on(g,r);l.on(O,r);l.on(f,I);export{E as highlightObject,y as highlightStyle};
