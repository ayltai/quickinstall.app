import{r as t}from"./index-B8v4ui00.js";import{r as p}from"./index-C62N0sIa.js";import{j as u}from"./useTheme-BlgjukAR.js";import{u as b,s as a}from"./useForkRef-DmN6nj6Q.js";import{u as l}from"./useEnhancedEffect-BQ6nKucK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f=new Error().stack;f&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[f]="0428a6ef-9426-4e73-92f7-7351d4e52b94",e._sentryDebugIdIdentifier="sentry-dbid-0428a6ef-9426-4e73-92f7-7351d4e52b94")}catch{}})();function y(e){return typeof e=="function"?e():e}const D=t.forwardRef(function(f,o){const{children:n,container:i,disablePortal:s=!1}=f,[r,d]=t.useState(null),c=b(t.isValidElement(n)?n.ref:null,o);if(l(()=>{s||d(y(i)||document.body)},[i,s]),l(()=>{if(r&&!s)return a(o,r),()=>{a(o,null)}},[o,r,s]),s){if(t.isValidElement(n)){const m={ref:c};return t.cloneElement(n,m)}return u.jsx(t.Fragment,{children:n})}return u.jsx(t.Fragment,{children:r&&p.createPortal(n,r)})});export{D as P};