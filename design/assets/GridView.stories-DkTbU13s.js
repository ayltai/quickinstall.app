import{j as i}from"./useTheme-BlgjukAR.js";import{r as c}from"./index-B8v4ui00.js";import"./CardView-C0E-qGtZ.js";import{S as p}from"./SelectableCardView-ZKkDSe5Y.js";import"./iframe-CAFMPHJt.js";import{G as f}from"./GridView-BhZHNWnk.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="eb241488-4e28-43f0-9567-a43517d09686",t._sentryDebugIdIdentifier="sentry-dbid-eb241488-4e28-43f0-9567-a43517d09686")}catch{}})();const u={component:f,title:"Components/Layouts/Grid",argTypes:{children:{description:"The content of the component"}}},m=t=>{const[e,o]=c.useState(!1),d=l=>o(l);return i.jsx(p,{...t,selected:e,onChange:d})},r={args:{children:Array.from(Array(10)).map((t,e)=>i.jsx(m,{title:`Card ${e+1}`,subtitle:`Subtitle ${e+1}`,description:`Description ${e+1}`},e))}};var n,s,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{\n  args: {\n    children: Array.from(Array(10)).map((_, index) => <StatefulSelectableCardView key={index} title={`Card ${index + 1}`} subtitle={`Subtitle ${index + 1}`} description={`Description ${index + 1}`} />)\n  }\n}",...(a=(s=r.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const b=["Default"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:u},Symbol.toStringTag,{value:"Module"}));export{w as C};