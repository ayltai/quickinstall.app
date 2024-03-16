import{j as l,_ as w,c as k,H as ee,i as ne}from"./useTheme-BlgjukAR.js";import"./iframe-CAFMPHJt.js";import{r as te}from"./createSvgIcon-BGX0Ng63.js";import{r as d}from"./index-B8v4ui00.js";import{h as oe}from"./index-CX4Jgc7D.js";import{s as R,c as M}from"./styled-DiKmFtHj.js";import{O as re}from"./OutlinedInput-Ct1ki9DM.js";import{u as se}from"./useTranslation-CSn3qglU.js";import{_ as b}from"./extends-DCeRLDon.js";import{a as I,g as j,c as N}from"./generateUtilityClasses-Bt1hkMzr.js";import{u as ae,F as ie}from"./InputBase-CDyvdhbn.js";import{u as O}from"./useThemeProps-d5D-3UEo.js";import{T as ce}from"./Typography-pnPGBOAX.js";import{T as le}from"./Tooltip-BINYJuEt.js";import{I as ue}from"./IconButton-B3B9m9Eb.js";import{u as de}from"./useTheme-C5hLunsB.js";import{e as H,u as pe}from"./useSlotProps-B7eaAxse.js";import{u as me}from"./useIsFocusVisible-DaJFNZTp.js";import{u as T}from"./useEventCallback-B2e7cEsY.js";import{P as fe}from"./Paper-CXN2jwlL.js";import{G as he}from"./Grow-Ddp49Qv2.js";import{u as ge}from"./useForkRef-DmN6nj6Q.js";import{o as S}from"./useControlled-BLkA-84f.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="81884b88-3d40-4765-9e27-00b10e62e4e3",e._sentryDebugIdIdentifier="sentry-dbid-81884b88-3d40-4765-9e27-00b10e62e4e3")}catch{}})();function D(e){return e.substring(2).toLowerCase()}function ve(e,n){return n.documentElement.clientWidth<e.clientX||n.documentElement.clientHeight<e.clientY}function be(e){const{children:n,disableReactTree:o=!1,mouseEvent:t="onClick",onClickAway:s,touchEvent:i="onTouchEnd"}=e,p=d.useRef(!1),u=d.useRef(null),h=d.useRef(!1),m=d.useRef(!1);d.useEffect(()=>(setTimeout(()=>{h.current=!0},0),()=>{h.current=!1}),[]);const g=ge(n.ref,u),v=T(c=>{const f=m.current;m.current=!1;const x=S(u.current);if(!h.current||!u.current||"clientX"in c&&ve(c,x))return;if(p.current){p.current=!1;return}let r;c.composedPath?r=c.composedPath().indexOf(u.current)>-1:r=!x.documentElement.contains(c.target)||u.current.contains(c.target),!r&&(o||!f)&&s(c)}),y=c=>f=>{m.current=!0;const x=n.props[c];x&&x(f)},E={ref:g};return i!==!1&&(E[i]=y(i)),d.useEffect(()=>{if(i!==!1){const c=D(i),f=S(u.current),x=()=>{p.current=!0};return f.addEventListener(c,v),f.addEventListener("touchmove",x),()=>{f.removeEventListener(c,v),f.removeEventListener("touchmove",x)}}},[v,i]),t!==!1&&(E[t]=y(t)),d.useEffect(()=>{if(t!==!1){const c=D(t),f=S(u.current);return f.addEventListener(c,v),()=>{f.removeEventListener(c,v)}}},[v,t]),l.jsx(d.Fragment,{children:d.cloneElement(n,E)})}function Ce(e={}){const{autoHideDuration:n=null,disableWindowBlurListener:o=!1,onClose:t,open:s,resumeHideDuration:i}=e,p=me();d.useEffect(()=>{if(!s)return;function r(a){a.defaultPrevented||(a.key==="Escape"||a.key==="Esc")&&(t==null||t(a,"escapeKeyDown"))}return document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}},[s,t]);const u=T((r,a)=>{t==null||t(r,a)}),h=T(r=>{!t||r==null||p.start(r,()=>{u(null,"timeout")})});d.useEffect(()=>(s&&h(n),p.clear),[s,n,h,p]);const m=r=>{t==null||t(r,"clickaway")},g=p.clear,v=d.useCallback(()=>{n!=null&&h(i??n*.5)},[n,i,h]),y=r=>a=>{const C=r.onBlur;C==null||C(a),v()},E=r=>a=>{const C=r.onFocus;C==null||C(a),g()},c=r=>a=>{const C=r.onMouseEnter;C==null||C(a),g()},f=r=>a=>{const C=r.onMouseLeave;C==null||C(a),v()};return d.useEffect(()=>{if(!o&&s)return window.addEventListener("focus",v),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",v),window.removeEventListener("blur",g)}},[o,s,v,g]),{getRootProps:(r={})=>{const a=b({},H(e),H(r));return b({role:"presentation"},r,a,{onBlur:y(a),onFocus:E(a),onMouseEnter:c(a),onMouseLeave:f(a)})},onClickAway:m}}function ye(e){return j("MuiInputAdornment",e)}const xe=I("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),F=xe;var $;const Ee=["children","className","component","disablePointerEvents","disableTypography","position","variant"],ke=(e,n)=>{const{ownerState:o}=e;return[n.root,n[`position${k(o.position)}`],o.disablePointerEvents===!0&&n.disablePointerEvents,n[o.variant]]},Re=e=>{const{classes:n,disablePointerEvents:o,hiddenLabel:t,position:s,size:i,variant:p}=e,u={root:["root",o&&"disablePointerEvents",s&&`position${k(s)}`,p,t&&"hiddenLabel",i&&`size${k(i)}`]};return M(u,ye,n)},we=R("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:ke})(({theme:e,ownerState:n})=>b({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(e.vars||e).palette.action.active},n.variant==="filled"&&{[`&.${F.positionStart}&:not(.${F.hiddenLabel})`]:{marginTop:16}},n.position==="start"&&{marginRight:8},n.position==="end"&&{marginLeft:8},n.disablePointerEvents===!0&&{pointerEvents:"none"})),Le=d.forwardRef(function(n,o){const t=O({props:n,name:"MuiInputAdornment"}),{children:s,className:i,component:p="div",disablePointerEvents:u=!1,disableTypography:h=!1,position:m,variant:g}=t,v=w(t,Ee),y=ae()||{};let E=g;g&&y.variant,y&&!E&&(E=y.variant);const c=b({},t,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:u,position:m,variant:E}),f=Re(c);return l.jsx(ie.Provider,{value:null,children:l.jsx(we,b({as:p,ownerState:c,className:N(f.root,i),ref:o},v,{children:typeof s=="string"&&!h?l.jsx(ce,{color:"text.secondary",children:s}):l.jsxs(d.Fragment,{children:[m==="start"?$||($=l.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})}),Pe=Le;function Se(e){return j("MuiSnackbarContent",e)}I("MuiSnackbarContent",["root","message","action"]);const Te=["action","className","message","role"],Me=e=>{const{classes:n}=e;return M({root:["root"],action:["action"],message:["message"]},Se,n)},Ie=R(fe,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,n)=>n.root})(({theme:e})=>{const n=e.palette.mode==="light"?.8:.98,o=ee(e.palette.background.default,n);return b({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(o),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:o,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),je=R("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,n)=>n.message})({padding:"8px 0"}),Oe=R("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,n)=>n.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Ae=d.forwardRef(function(n,o){const t=O({props:n,name:"MuiSnackbarContent"}),{action:s,className:i,message:p,role:u="alert"}=t,h=w(t,Te),m=t,g=Me(m);return l.jsxs(Ie,b({role:u,square:!0,elevation:6,className:N(g.root,i),ownerState:m,ref:o},h,{children:[l.jsx(je,{className:g.message,ownerState:m,children:p}),s?l.jsx(Oe,{className:g.action,ownerState:m,children:s}):null]}))}),_e=Ae;function ze(e){return j("MuiSnackbar",e)}I("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const He=["onEnter","onExited"],De=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],Fe=e=>{const{classes:n,anchorOrigin:o}=e,t={root:["root",`anchorOrigin${k(o.vertical)}${k(o.horizontal)}`]};return M(t,ze,n)},B=R("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.root,n[`anchorOrigin${k(o.anchorOrigin.vertical)}${k(o.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:n})=>{const o={left:"50%",right:"auto",transform:"translateX(-50%)"};return b({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},n.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},n.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},n.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:b({},n.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},n.anchorOrigin.horizontal==="center"&&o,n.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},n.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),$e=d.forwardRef(function(n,o){const t=O({props:n,name:"MuiSnackbar"}),s=de(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{action:p,anchorOrigin:{vertical:u,horizontal:h}={vertical:"bottom",horizontal:"left"},autoHideDuration:m=null,children:g,className:v,ClickAwayListenerProps:y,ContentProps:E,disableWindowBlurListener:c=!1,message:f,open:x,TransitionComponent:r=he,transitionDuration:a=i,TransitionProps:{onEnter:C,onExited:_}={}}=t,W=w(t.TransitionProps,He),q=w(t,De),L=b({},t,{anchorOrigin:{vertical:u,horizontal:h},autoHideDuration:m,disableWindowBlurListener:c,TransitionComponent:r,transitionDuration:a}),G=Fe(L),{getRootProps:V,onClickAway:X}=Ce(b({},L)),[K,z]=d.useState(!0),Y=pe({elementType:B,getSlotProps:V,externalForwardedProps:q,ownerState:L,additionalProps:{ref:o},className:[G.root,v]}),J=P=>{z(!0),_&&_(P)},Q=(P,Z)=>{z(!1),C&&C(P,Z)};return!x&&K?null:l.jsx(be,b({onClickAway:X},y,{children:l.jsx(B,b({},Y,{children:l.jsx(r,b({appear:!0,in:x,timeout:a,direction:u==="top"?"down":"up",onEnter:Q,onExited:J},W,{children:g||l.jsx(_e,b({message:f,action:p},E))}))}))}))}),Be=$e;var A={},Ne=ne;Object.defineProperty(A,"__esModule",{value:!0});var U=A.default=void 0,Ue=Ne(te()),We=l;U=A.default=(0,Ue.default)((0,We.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");const qe=R(re)({paddingLeft:"0.5rem",paddingRight:"1.5rem",borderRadius:"2rem",fontFamily:"monospace"}),Ge=({value:e,onCopy:n,...o})=>{const[t,s]=d.useState(!1),{t:i}=se(),p=()=>{e&&navigator.clipboard.writeText(e).catch(oe),s(!0),n&&n()},u=m=>m.target.select(),h=()=>s(!1);return l.jsxs(l.Fragment,{children:[l.jsx(qe,{...o,value:e,endAdornment:navigator.clipboard&&l.jsx(Pe,{position:"end",children:l.jsx(le,{title:i("action.copy"),children:l.jsx(ue,{edge:"end",onClick:p,children:l.jsx(U,{})})})}),onFocus:u}),l.jsx(Be,{open:t,anchorOrigin:{horizontal:"center",vertical:"bottom"},autoHideDuration:2500,message:i("common.copied"),onClose:h})]})};Ge.__docgenInfo={description:`An input field that allows a user to copy information to the clipboard.
@param value The value to copy
@param onCopy Function to call when the copy button is clicked
@param rest Other props`,methods:[],displayName:"CopyableInput",props:{value:{required:!0,tsType:{name:"string"},description:""},onCopy:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["InputBaseProps"]};export{Ge as C};