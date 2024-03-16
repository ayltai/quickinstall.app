import{q as y,e as A,c as h,_ as B,j as I}from"./useTheme-BlgjukAR.js";import{_ as a}from"./extends-DCeRLDon.js";import{r as g}from"./index-B8v4ui00.js";import{a as j,g as w,c as M}from"./generateUtilityClasses-Bt1hkMzr.js";import{s as N,c as P}from"./styled-DiKmFtHj.js";import{u as U}from"./useThemeProps-d5D-3UEo.js";import{T as z}from"./Typography-pnPGBOAX.js";import{a as E}from"./useIsFocusVisible-DaJFNZTp.js";import{u as W}from"./useForkRef-DmN6nj6Q.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="22938573-fd6b-4acc-b97c-3d3a46060afd",e._sentryDebugIdIdentifier="sentry-dbid-22938573-fd6b-4acc-b97c-3d3a46060afd")}catch{}})();function H(e){return w("MuiLink",e)}const q=j("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),O=q,x={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=e=>x[e]||e,J=({theme:e,ownerState:o})=>{const n=G(o.color),r=y(e,`palette.${n}`,!1)||o.color,s=y(e,`palette.${n}Channel`);return"vars"in e&&s?`rgba(${s} / 0.4)`:A(r,.4)},K=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],Q=e=>{const{classes:o,component:n,focusVisible:r,underline:s}=e,t={root:["root",`underline${h(s)}`,n==="button"&&"button",r&&"focusVisible"]};return P(t,H,o)},S=N(z,{name:"MuiLink",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,o[`underline${h(n.underline)}`],n.component==="button"&&o.button]}})(({theme:e,ownerState:o})=>a({},o.underline==="none"&&{textDecoration:"none"},o.underline==="hover"&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},o.underline==="always"&&a({textDecoration:"underline"},o.color!=="inherit"&&{textDecorationColor:J({theme:e,ownerState:o})},{"&:hover":{textDecorationColor:"inherit"}}),o.component==="button"&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${O.focusVisible}`]:{outline:"auto"}})),X=g.forwardRef(function(o,n){const r=U({props:o,name:"MuiLink"}),{className:s,color:t="primary",component:c="a",onBlur:u,onFocus:d,TypographyClasses:k,underline:C="always",variant:f="inherit",sx:l}=r,D=B(r,K),{isFocusVisibleRef:p,onBlur:L,onFocus:V,ref:v}=E(),[F,m]=g.useState(!1),R=W(n,v),_=i=>{L(i),p.current===!1&&m(!1),u&&u(i)},T=i=>{V(i),p.current===!0&&m(!0),d&&d(i)},b=a({},r,{color:t,component:c,focusVisible:F,underline:C,variant:f}),$=Q(b);return I.jsx(S,a({color:t,className:M($.root,s),classes:k,component:c,onBlur:_,onFocus:T,ref:R,ownerState:b,variant:f,sx:[...Object.keys(x).includes(t)?[]:[{color:t}],...Array.isArray(l)?l:[l]]},D))}),ae=X;export{ae as L};