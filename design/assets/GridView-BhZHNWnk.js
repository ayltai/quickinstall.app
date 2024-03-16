import{_ as R,j as $,r as v,h as k}from"./useTheme-BlgjukAR.js";import{r as b}from"./index-B8v4ui00.js";import"./iframe-CAFMPHJt.js";import{_ as x}from"./extends-DCeRLDon.js";import{g as T,a as D,e as O,c as K}from"./generateUtilityClasses-Bt1hkMzr.js";import{s as L,c as A}from"./styled-DiKmFtHj.js";import{u as U}from"./useThemeProps-d5D-3UEo.js";import{u as Z}from"./useTheme-C5hLunsB.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="0235bbca-6664-4071-a122-eeaa3a754dfa",e._sentryDebugIdIdentifier="sentry-dbid-0235bbca-6664-4071-a122-eeaa3a754dfa")}catch{}})();const F=b.createContext(),j=F;function q(e){return T("MuiGrid",e)}const X=[0,1,2,3,4,5,6,7,8,9,10],H=["column-reverse","column","row-reverse","row"],J=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=D("MuiGrid",["root","container","item","zeroMinWidth",...X.map(e=>`spacing-xs-${e}`),...H.map(e=>`direction-xs-${e}`),...J.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),Q=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}function Y({theme:e,ownerState:n}){let r;return e.breakpoints.keys.reduce((i,t)=>{let o={};if(n[t]&&(r=n[t]),!r)return i;if(r===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(r==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=v({values:n.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[t]:a;if(u==null)return i;const p=`${Math.round(r/u*1e8)/1e6}%`;let c={};if(n.container&&n.item&&n.columnSpacing!==0){const s=e.spacing(n.columnSpacing);if(s!=="0px"){const l=`calc(${p} + ${m(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:p,flexGrow:0,maxWidth:p},c)}return e.breakpoints.values[t]===0?Object.assign(i,o):i[e.breakpoints.up(t)]=o,i},{})}function ee({theme:e,ownerState:n}){const r=v({values:n.direction,breakpoints:e.breakpoints.values});return k({theme:e},r,i=>{const t={flexDirection:i};return i.indexOf("column")===0&&(t[`& > .${h.item}`]={maxWidth:"none"}),t})}function B({breakpoints:e,values:n}){let r="";Object.keys(n).forEach(t=>{r===""&&n[t]!==0&&(r=t)});const i=Object.keys(e).sort((t,o)=>e[t]-e[o]);return i.slice(0,i.indexOf(r))}function ne({theme:e,ownerState:n}){const{container:r,rowSpacing:i}=n;let t={};if(r&&i!==0){const o=v({values:i,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),t=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${h.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{marginTop:0,[`& > .${h.item}`]:{paddingTop:0}}})}return t}function re({theme:e,ownerState:n}){const{container:r,columnSpacing:i}=n;let t={};if(r&&i!==0){const o=v({values:i,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),t=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${h.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${h.item}`]:{paddingLeft:0}}})}return t}function te(e,n,r={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[r[`spacing-xs-${String(e)}`]];const i=[];return n.forEach(t=>{const o=e[t];Number(o)>0&&i.push(r[`spacing-${t}-${String(o)}`])}),i}const ie=L("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e,{container:i,direction:t,item:o,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=r;let s=[];i&&(s=te(a,c,n));const l=[];return c.forEach(d=>{const f=r[d];f&&l.push(n[`grid-${d}-${String(f)}`])}),[n.root,i&&n.container,o&&n.item,p&&n.zeroMinWidth,...s,t!=="row"&&n[`direction-xs-${String(t)}`],u!=="wrap"&&n[`wrap-xs-${String(u)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ee,ne,re,Y);function oe(e,n){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const r=[];return n.forEach(i=>{const t=e[i];if(Number(t)>0){const o=`spacing-${i}-${String(t)}`;r.push(o)}}),r}const se=e=>{const{classes:n,container:r,direction:i,item:t,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:p}=e;let c=[];r&&(c=oe(o,p));const s=[];p.forEach(d=>{const f=e[d];f&&s.push(`grid-${d}-${String(f)}`)});const l={root:["root",r&&"container",t&&"item",u&&"zeroMinWidth",...c,i!=="row"&&`direction-xs-${String(i)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return A(l,q,n)},ae=b.forwardRef(function(n,r){const i=U({props:n,name:"MuiGrid"}),{breakpoints:t}=Z(),o=O(i),{className:a,columns:u,columnSpacing:p,component:c="div",container:s=!1,direction:l="row",item:d=!1,rowSpacing:f,spacing:y=0,wrap:V="wrap",zeroMinWidth:_=!1}=o,S=R(o,Q),M=f||y,E=p||y,I=b.useContext(j),G=s?u||12:I,C={},W=x({},S);t.keys.forEach(w=>{S[w]!=null&&(C[w]=S[w],delete W[w])});const N=x({},o,{columns:G,container:s,direction:l,item:d,rowSpacing:M,columnSpacing:E,wrap:V,zeroMinWidth:_,spacing:y},C,{breakpoints:t.keys}),P=se(N);return $.jsx(j.Provider,{value:G,children:$.jsx(ie,x({ownerState:N,className:K(P.root,a),as:c,ref:r},W))})}),z=ae,ce=({children:e,...n})=>$.jsx(z,{container:!0,rowSpacing:2,justifyContent:"flex-start",...n,children:b.Children.toArray(e).map(r=>$.jsx(z,{item:!0,paddingX:1,xs:12,sm:6,lg:4,children:r},r.key))});ce.__docgenInfo={description:`A grid provides a visual structuring system for a homogeneous and balanced content placement.
@param children The content of the component
@param rest Other props`,methods:[],displayName:"GridView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{ce as G};