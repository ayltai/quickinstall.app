import{_ as pe,j as v,c as J,v as ke}from"./useTheme-BlgjukAR.js";import{_ as d}from"./extends-DCeRLDon.js";import{r as l}from"./index-B8v4ui00.js";import{a as Be,g as Fe,c as se}from"./generateUtilityClasses-Bt1hkMzr.js";import{s as fe,c as Ee}from"./styled-DiKmFtHj.js";import{u as We}from"./useThemeProps-d5D-3UEo.js";import{u as me}from"./useForkRef-DmN6nj6Q.js";import{u as Q}from"./useEnhancedEffect-BQ6nKucK.js";import{o as de,d as Pe}from"./ownerWindow-Du-g-nGR.js";import{i as ue}from"./isHostComponent-BISCXPu1.js";import{G as He}from"./GlobalStyles-DVU9jDMi.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="9a630bd7-2937-41c2-9dc8-971f9c51ebf4",e._sentryDebugIdIdentifier="sentry-dbid-9a630bd7-2937-41c2-9dc8-971f9c51ebf4")}catch{}})();const Me=["onChange","maxRows","minRows","style","value"];function _(e){return parseInt(e,10)||0}const Te={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function Le(e){return e==null||Object.keys(e).length===0||e.outerHeightStyle===0&&!e.overflowing}const Oe=l.forwardRef(function(t,o){const{onChange:s,maxRows:r,minRows:u=1,style:z,value:I}=t,F=pe(t,Me),{current:S}=l.useRef(I!=null),h=l.useRef(null),A=me(o,h),b=l.useRef(null),w=l.useCallback(()=>{const c=h.current,n=de(c).getComputedStyle(c);if(n.width==="0px")return{outerHeightStyle:0,overflowing:!1};const p=b.current;p.style.width=n.width,p.value=c.value||t.placeholder||"x",p.value.slice(-1)===`
`&&(p.value+=" ");const k=n.boxSizing,C=_(n.paddingBottom)+_(n.paddingTop),H=_(n.borderBottomWidth)+_(n.borderTopWidth),M=p.scrollHeight;p.value="x";const g=p.scrollHeight;let m=M;u&&(m=Math.max(Number(u)*g,m)),r&&(m=Math.min(Number(r)*g,m)),m=Math.max(m,g);const T=m+(k==="border-box"?C+H:0),L=Math.abs(m-M)<=1;return{outerHeightStyle:T,overflowing:L}},[r,u,t.placeholder]),y=l.useCallback(()=>{const c=w();if(Le(c))return;const R=h.current;R.style.height=`${c.outerHeightStyle}px`,R.style.overflow=c.overflowing?"hidden":""},[w]);Q(()=>{const c=()=>{y()};let R;const n=Pe(c),p=h.current,k=de(p);k.addEventListener("resize",n);let C;return typeof ResizeObserver<"u"&&(C=new ResizeObserver(c),C.observe(p)),()=>{n.clear(),cancelAnimationFrame(R),k.removeEventListener("resize",n),C&&C.disconnect()}},[w,y]),Q(()=>{y()});const E=c=>{S||y(),s&&s(c)};return v.jsxs(l.Fragment,{children:[v.jsx("textarea",d({value:I,onChange:E,ref:A,rows:u,style:z},F)),v.jsx("textarea",{"aria-hidden":!0,className:t.className,readOnly:!0,ref:b,tabIndex:-1,style:d({},Te.shadow,z,{paddingTop:0,paddingBottom:0})})]})});function Ne({props:e,states:t,muiFormControl:o}){return t.reduce((s,r)=>(s[r]=e[r],o&&typeof e[r]>"u"&&(s[r]=o[r]),s),{})}const $e=l.createContext(void 0),he=$e;function _e(){return l.useContext(he)}function ce(e){return e!=null&&!(Array.isArray(e)&&e.length===0)}function De(e,t=!1){return e&&(ce(e.value)&&e.value!==""||t&&ce(e.defaultValue)&&e.defaultValue!=="")}function ut(e){return e.startAdornment}function Ve(e){return Fe("MuiInputBase",e)}const je=Be("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"]),X=je,Ue=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],Ge=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,o.size==="small"&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${J(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},Ke=(e,t)=>{const{ownerState:o}=e;return[t.input,o.size==="small"&&t.inputSizeSmall,o.multiline&&t.inputMultiline,o.type==="search"&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},qe=e=>{const{classes:t,color:o,disabled:s,error:r,endAdornment:u,focused:z,formControl:I,fullWidth:F,hiddenLabel:S,multiline:h,readOnly:A,size:b,startAdornment:w,type:y}=e,E={root:["root",`color${J(o)}`,s&&"disabled",r&&"error",F&&"fullWidth",z&&"focused",I&&"formControl",b&&b!=="medium"&&`size${J(b)}`,h&&"multiline",w&&"adornedStart",u&&"adornedEnd",S&&"hiddenLabel",A&&"readOnly"],input:["input",s&&"disabled",y==="search"&&"inputTypeSearch",h&&"inputMultiline",b==="small"&&"inputSizeSmall",S&&"inputHiddenLabel",w&&"inputAdornedStart",u&&"inputAdornedEnd",A&&"readOnly"]};return Ee(E,Ve,t)},Ze=fe("div",{name:"MuiInputBase",slot:"Root",overridesResolver:Ge})(({theme:e,ownerState:t})=>d({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${X.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&d({padding:"4px 0 5px"},t.size==="small"&&{paddingTop:1}),t.fullWidth&&{width:"100%"})),Je=fe("input",{name:"MuiInputBase",slot:"Input",overridesResolver:Ke})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light",s=d({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),r={opacity:"0 !important"},u=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return d({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":s,"&::-moz-placeholder":s,"&:-ms-input-placeholder":s,"&::-ms-input-placeholder":s,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${X.formControl} &`]:{"&::-webkit-input-placeholder":r,"&::-moz-placeholder":r,"&:-ms-input-placeholder":r,"&::-ms-input-placeholder":r,"&:focus::-webkit-input-placeholder":u,"&:focus::-moz-placeholder":u,"&:focus:-ms-input-placeholder":u,"&:focus::-ms-input-placeholder":u},[`&.${X.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},t.size==="small"&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},t.type==="search"&&{MozAppearance:"textfield"})}),Qe=v.jsx(He,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),Xe=l.forwardRef(function(t,o){var s;const r=We({props:t,name:"MuiInputBase"}),{"aria-describedby":u,autoComplete:z,autoFocus:I,className:F,components:S={},componentsProps:h={},defaultValue:A,disabled:b,disableInjectingGlobalStyles:w,endAdornment:y,fullWidth:E=!1,id:c,inputComponent:R="input",inputProps:n={},inputRef:p,maxRows:k,minRows:C,multiline:H=!1,name:M,onBlur:g,onChange:m,onClick:T,onFocus:L,onKeyDown:be,onKeyUp:ye,placeholder:ge,readOnly:D,renderSuffix:Y,rows:O,slotProps:ee={},slots:te={},startAdornment:W,type:oe="text",value:xe}=r,we=pe(r,Ue),N=n.value!=null?n.value:xe,{current:V}=l.useRef(N!=null),B=l.useRef(),Ce=l.useCallback(i=>{},[]),ve=me(B,p,n.ref,Ce),[j,U]=l.useState(!1),a=_e(),f=Ne({props:r,muiFormControl:a,states:["color","disabled","error","hiddenLabel","size","required","filled"]});f.focused=a?a.focused:j,l.useEffect(()=>{!a&&b&&j&&(U(!1),g&&g())},[a,b,j,g]);const G=a&&a.onFilled,K=a&&a.onEmpty,P=l.useCallback(i=>{De(i)?G&&G():K&&K()},[G,K]);Q(()=>{V&&P({value:N})},[N,P,V]);const Se=i=>{if(f.disabled){i.stopPropagation();return}L&&L(i),n.onFocus&&n.onFocus(i),a&&a.onFocus?a.onFocus(i):U(!0)},Re=i=>{g&&g(i),n.onBlur&&n.onBlur(i),a&&a.onBlur?a.onBlur(i):U(!1)},ze=(i,...ae)=>{if(!V){const le=i.target||B.current;if(le==null)throw new Error(ke(1));P({value:le.value})}n.onChange&&n.onChange(i,...ae),m&&m(i,...ae)};l.useEffect(()=>{P(B.current)},[]);const Ie=i=>{B.current&&i.currentTarget===i.target&&B.current.focus(),T&&T(i)};let q=R,x=n;H&&q==="input"&&(O?x=d({type:void 0,minRows:O,maxRows:O},x):x=d({type:void 0,maxRows:k,minRows:C},x),q=Oe);const Ae=i=>{P(i.animationName==="mui-auto-fill-cancel"?B.current:{value:"x"})};l.useEffect(()=>{a&&a.setAdornedStart(!!W)},[a,W]);const $=d({},r,{color:f.color||"primary",disabled:f.disabled,endAdornment:y,error:f.error,focused:f.focused,formControl:a,fullWidth:E,hiddenLabel:f.hiddenLabel,multiline:H,size:f.size,startAdornment:W,type:oe}),ne=qe($),re=te.root||S.Root||Ze,Z=ee.root||h.root||{},ie=te.input||S.Input||Je;return x=d({},x,(s=ee.input)!=null?s:h.input),v.jsxs(l.Fragment,{children:[!w&&Qe,v.jsxs(re,d({},Z,!ue(re)&&{ownerState:d({},$,Z.ownerState)},{ref:o,onClick:Ie},we,{className:se(ne.root,Z.className,F,D&&"MuiInputBase-readOnly"),children:[W,v.jsx(he.Provider,{value:null,children:v.jsx(ie,d({ownerState:$,"aria-invalid":f.error,"aria-describedby":u,autoComplete:z,autoFocus:I,defaultValue:A,disabled:f.disabled,id:c,onAnimationStart:Ae,name:M,placeholder:ge,readOnly:D,required:f.required,rows:O,value:N,onKeyDown:be,onKeyUp:ye,type:oe},x,!ue(ie)&&{as:q,ownerState:d({},$,x.ownerState)},{ref:ve,className:se(ne.input,x.className,D&&"MuiInputBase-readOnly"),onBlur:Re,onChange:ze,onFocus:Se}))}),y,Y?Y(d({},f,{startAdornment:W})):null]}))]})}),ct=Xe;export{he as F,Ze as I,Je as a,Ke as b,ct as c,ut as d,De as e,Ne as f,X as i,Ge as r,_e as u};
