import{_ as A}from"./extends-DCeRLDon.js";import{_ as ee,j as _,n as te}from"./useTheme-BlgjukAR.js";import{r as a,R as W}from"./index-B8v4ui00.js";import{c as C,a as me,g as Ne}from"./generateUtilityClasses-Bt1hkMzr.js";import{s as ne,c as je}from"./styled-DiKmFtHj.js";import{u as be}from"./useThemeProps-d5D-3UEo.js";import{u as Ue,a as ze}from"./useIsFocusVisible-DaJFNZTp.js";import{_ as Oe}from"./assertThisInitialized-JNA2pt04.js";import{_ as Ke}from"./inheritsLoose-D9gYxgQu.js";import{T as ue}from"./TransitionGroupContext-CqYiLpIN.js";import{u as ce}from"./useForkRef-DmN6nj6Q.js";import{u as H}from"./useEventCallback-B2e7cEsY.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4c3eb57f-1c24-4492-a1dd-e11440b7f652",e._sentryDebugIdIdentifier="sentry-dbid-4c3eb57f-1c24-4492-a1dd-e11440b7f652")}catch{}})();function oe(e,o){var s=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ae(e,o){e=e||{},o=o||{};function s(f){return f in o?o[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<n.length;i++)c[n[i]]=s(n[i]);return c}function I(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Xe(e,o){return oe(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:I(s,"appear",e),enter:I(s,"enter",e),exit:I(s,"exit",e)})})}function Ye(e,o,s){var l=oe(e.children),n=Ae(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(a.isValidElement(i)){var c=t in o,u=t in l,p=o[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:I(i,"exit",e),enter:I(i,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:I(i,"exit",e),enter:I(i,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},He={component:"div",childFactory:function(o){return o}},ie=function(e){Ke(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,i,c),firstRender:!1}},s.handleExited=function(n,t){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},o}(W.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:o,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=C(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),E={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=C(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),_.jsx("span",{className:b,style:E,children:_.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Je=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Qe=80,Ze=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),et=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),tt=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),nt=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),ot=ne(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,tt,({theme:e})=>e.transitions.easing.easeInOut),it=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=l,c=ee(l,Je),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=Ue(),h=a.useRef(null),R=a.useRef(null),j=a.useCallback(d=>{const{pulsate:y,rippleX:M,rippleY:L,rippleSize:N,cb:z}=d;p(x=>[...x,_.jsx(ot,{classes:{ripple:C(t.ripple,m.ripple),rippleVisible:C(t.rippleVisible,m.rippleVisible),ripplePulsate:C(t.ripplePulsate,m.ripplePulsate),child:C(t.child,m.child),childLeaving:C(t.childLeaving,m.childLeaving),childPulsate:C(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:y,rippleX:M,rippleY:L,rippleSize:N},f.current)]),f.current+=1,g.current=z},[t]),$=a.useCallback((d={},y={},M=()=>{})=>{const{pulsate:L=!1,center:N=n||y.pulsate,fakeElement:z=!1}=y;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const x=z?null:R.current,P=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,D,w;if(N||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(P.width/2),D=Math.round(P.height/2);else{const{clientX:S,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(S-P.left),D=Math.round(V-P.top)}if(N)w=Math.sqrt((2*P.width**2+P.height**2)/3),w%2===0&&(w+=1);else{const S=Math.max(Math.abs((x?x.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((x?x.clientHeight:0)-D),D)*2+2;w=Math.sqrt(S**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{j({pulsate:L,rippleX:v,rippleY:D,rippleSize:w,cb:M})},E.start(Qe,()=>{h.current&&(h.current(),h.current=null)})):j({pulsate:L,rippleX:v,rippleY:D,rippleSize:w,cb:M})},[n,j,E]),U=a.useCallback(()=>{$({},{pulsate:!0})},[$]),F=a.useCallback((d,y)=>{if(E.clear(),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,E.start(0,()=>{F(d,y)});return}h.current=null,p(M=>M.length>0?M.slice(1):M),g.current=y},[E]);return a.useImperativeHandle(s,()=>({pulsate:U,start:$,stop:F}),[U,$,F]),_.jsx(nt,A({className:C(m.root,t.root,i),ref:R},c,{children:_.jsx(Ge,{component:null,exit:!0,children:u})}))}),rt=it;function st(e){return Ne("MuiButtonBase",e)}const at=me("MuiButtonBase",["root","disabled","focusVisible"]),lt=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],ut=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:n}=e,i=je({root:["root",o&&"disabled",s&&"focusVisible"]},st,n);return s&&l&&(i.root+=` ${l}`),i},ct=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${at.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),pt=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:j,onDragLeave:$,onFocus:U,onFocusVisible:F,onKeyDown:d,onKeyUp:y,onMouseDown:M,onMouseLeave:L,onMouseUp:N,onTouchEnd:z,onTouchMove:x,onTouchStart:P,tabIndex:v=0,TouchRippleProps:D,touchRippleRef:w,type:S}=l,V=ee(l,lt),O=a.useRef(null),T=a.useRef(null),ge=ce(T,w),{isFocusVisibleRef:re,onFocus:Re,onBlur:ye,ref:Me}=ze(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const Te=q&&!f&&!p;a.useEffect(()=>{k&&b&&!f&&q&&T.current.pulsate()},[f,b,k,q]);function B(r,ae,Fe=g){return H(le=>(ae&&ae(le),!Fe&&T.current&&T.current[r](le),!0))}const Ce=B("start",M),Ee=B("stop",j),ve=B("stop",$),Ve=B("stop",N),Be=B("stop",r=>{k&&r.preventDefault(),L&&L(r)}),Pe=B("start",P),De=B("stop",z),we=B("stop",x),Le=B("stop",r=>{ye(r),re.current===!1&&X(!1),h&&h(r)},!1),Se=H(r=>{O.current||(O.current=r.currentTarget),Re(r),re.current===!0&&(X(!0),F&&F(r)),U&&U(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),ke=H(r=>{b&&!Q.current&&k&&T.current&&r.key===" "&&(Q.current=!0,T.current.stop(r,()=>{T.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),d&&d(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),Ie=H(r=>{b&&r.key===" "&&T.current&&k&&!r.defaultPrevented&&(Q.current=!1,T.current.stop(r,()=>{T.current.pulsate(r)})),y&&y(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let Y=u;Y==="button"&&(V.href||V.to)&&(Y=E);const K={};Y==="button"?(K.type=S===void 0?"button":S,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const _e=ce(s,Me,O),se=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),$e=ut(se);return _.jsxs(ct,A({as:Y,className:C($e.root,c),ownerState:se,onBlur:Le,onClick:R,onContextMenu:Ee,onFocus:Se,onKeyDown:ke,onKeyUp:Ie,onMouseDown:Ce,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:De,onTouchMove:we,onTouchStart:Pe,ref:_e,tabIndex:p?-1:v,type:S},K,V,{children:[i,Te?_.jsx(rt,A({ref:ge,center:t},D)):null]}))}),vt=pt;export{vt as B};
