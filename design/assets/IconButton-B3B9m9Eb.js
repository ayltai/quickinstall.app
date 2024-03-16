import{c as s,e as u,_ as m,j as y}from"./useTheme-BlgjukAR.js";import{_ as t}from"./extends-DCeRLDon.js";import{r as z}from"./index-B8v4ui00.js";import{a as I,g as R,c as x}from"./generateUtilityClasses-Bt1hkMzr.js";import{s as B,c as C}from"./styled-DiKmFtHj.js";import{u as $}from"./useThemeProps-d5D-3UEo.js";import{B as _}from"./ButtonBase-DB5tx4ME.js";(function(){try{var o=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(o._sentryDebugIds=o._sentryDebugIds||{},o._sentryDebugIds[e]="8947c534-66f5-41d7-8690-e00fb4c7bbca",o._sentryDebugIdIdentifier="sentry-dbid-8947c534-66f5-41d7-8690-e00fb4c7bbca")}catch{}})();function h(o){return R("MuiIconButton",o)}const k=I("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),E=["edge","children","className","color","disabled","disableFocusRipple","size"],M=o=>{const{classes:e,disabled:r,color:a,edge:i,size:n}=o,l={root:["root",r&&"disabled",a!=="default"&&`color${s(a)}`,i&&`edge${s(i)}`,`size${s(n)}`]};return C(l,h,e)},j=B(_,{name:"MuiIconButton",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:r}=o;return[e.root,r.color!=="default"&&e[`color${s(r.color)}`],r.edge&&e[`edge${s(r.edge)}`],e[`size${s(r.size)}`]]}})(({theme:o,ownerState:e})=>t({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})`:u(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:o,ownerState:e})=>{var r;const a=(r=(o.vars||o).palette)==null?void 0:r[e.color];return t({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&t({color:a==null?void 0:a.main},!e.disableRipple&&{"&:hover":t({},a&&{backgroundColor:o.vars?`rgba(${a.mainChannel} / ${o.vars.palette.action.hoverOpacity})`:u(a.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:o.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:o.typography.pxToRem(28)},{[`&.${k.disabled}`]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})}),D=z.forwardRef(function(e,r){const a=$({props:e,name:"MuiIconButton"}),{edge:i=!1,children:n,className:l,color:g="default",disabled:c=!1,disableFocusRipple:d=!1,size:f="medium"}=a,b=m(a,E),p=t({},a,{edge:i,color:g,disabled:c,disableFocusRipple:d,size:f}),v=M(p);return y.jsx(j,t({className:x(v.root,l),centerRipple:!0,focusRipple:!d,disabled:c,ref:r},b,{ownerState:p,children:n}))}),W=D;export{W as I};
