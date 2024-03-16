import{r as A}from"./index-B8v4ui00.js";import{I as Z}from"./context-pRJcWO9r.js";import"./iframe-CAFMPHJt.js";import"../sb-preview/runtime.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[n]="3165ad53-d26f-43f3-b78a-537c0551367e",r._sentryDebugIdIdentifier="sentry-dbid-3165ad53-d26f-43f3-b78a-537c0551367e")}catch{}})();function ee(r){let{i18n:n,defaultNS:c,children:d}=r;const p=A.useMemo(()=>({i18n:n,defaultNS:c}),[n,c]);return A.createElement(Z.Provider,{value:p},d)}const{useGlobals:te,useEffect:re}=__STORYBOOK_MODULE_PREVIEW_API__;var ne=(r,n)=>{let[c,d]=te();return re(()=>{let{parameters:{locale:p}}=n;p&&d({locale:p})},[]),r(n)},ue={decorators:[ne],globals:{locale:"",locales:{}}},F=ue;const{useGlobals:oe,useState:ae,useEffect:L}=__STORYBOOK_MODULE_PREVIEW_API__;var ce=Object.create,N=Object.defineProperty,le=Object.getOwnPropertyDescriptor,ie=Object.getOwnPropertyNames,fe=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty,q=(r,n)=>()=>(n||r((n={exports:{}}).exports,n),n.exports),pe=(r,n,c,d)=>{if(n&&typeof n=="object"||typeof n=="function")for(let p of ie(n))!se.call(r,p)&&p!==c&&N(r,p,{get:()=>n[p],enumerable:!(d=le(n,p))||d.enumerable});return r},ye=(r,n,c)=>(c=r!=null?ce(fe(r)):{},pe(n||!r||!r.__esModule?N(c,"default",{value:r,enumerable:!0}):c,r)),de=q(r=>{var n=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),B=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),k=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,I={};function m(e,t,u){this.props=e,this.context=t,this.refs=I,this.updater=u||P}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x(){}x.prototype=m.prototype;function S(e,t,u){this.props=e,this.context=t,this.refs=I,this.updater=u||P}var w=S.prototype=new x;w.constructor=S,C(w,m.prototype),w.isPureReactComponent=!0;var D=Array.isArray,T=Object.prototype.hasOwnProperty,O={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function M(e,t,u){var a,o={},i=null,s=null;if(t!=null)for(a in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)T.call(t,a)&&!V.hasOwnProperty(a)&&(o[a]=t[a]);var f=arguments.length-2;if(f===1)o.children=u;else if(1<f){for(var l=Array(f),_=0;_<f;_++)l[_]=arguments[_+2];o.children=l}if(e&&e.defaultProps)for(a in f=e.defaultProps,f)o[a]===void 0&&(o[a]=f[a]);return{$$typeof:n,type:e,key:i,ref:s,props:o,_owner:O.current}}function K(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return typeof e=="object"&&e!==null&&e.$$typeof===n}function J(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(u){return t[u]})}var U=/\/+/g;function $(e,t){return typeof e=="object"&&e!==null&&e.key!=null?J(""+e.key):t.toString(36)}function b(e,t,u,a,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case c:s=!0}}if(s)return s=e,o=o(s),e=a===""?"."+$(s,0):a,D(o)?(u="",e!=null&&(u=e.replace(U,"$&/")+"/"),b(o,t,u,"",function(_){return _})):o!=null&&(R(o)&&(o=K(o,u+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(U,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=a===""?".":a+":",D(e))for(var f=0;f<e.length;f++){i=e[f];var l=a+$(i,f);s+=b(i,t,u,l,o)}else if(l=H(e),typeof l=="function")for(e=l.call(e),f=0;!(i=e.next()).done;)i=i.value,l=a+$(i,f++),s+=b(i,t,u,l,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function v(e,t,u){if(e==null)return e;var a=[],o=0;return b(e,a,"","",function(i){return t.call(u,i,o++)}),a}function Q(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(u){(e._status===0||e._status===-1)&&(e._status=1,e._result=u)},function(u){(e._status===0||e._status===-1)&&(e._status=2,e._result=u)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var y={current:null},h={transition:null},X={ReactCurrentDispatcher:y,ReactCurrentBatchConfig:h,ReactCurrentOwner:O};r.Children={map:v,forEach:function(e,t,u){v(e,function(){t.apply(this,arguments)},u)},count:function(e){var t=0;return v(e,function(){t++}),t},toArray:function(e){return v(e,function(t){return t})||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=m,r.Fragment=d,r.Profiler=g,r.PureComponent=S,r.StrictMode=p,r.Suspense=W,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,r.cloneElement=function(e,t,u){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=C({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=O.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(l in t)T.call(t,l)&&!V.hasOwnProperty(l)&&(a[l]=t[l]===void 0&&f!==void 0?f[l]:t[l])}var l=arguments.length-2;if(l===1)a.children=u;else if(1<l){f=Array(l);for(var _=0;_<l;_++)f[_]=arguments[_+2];a.children=f}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:s}},r.createContext=function(e){return e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E,_context:e},e.Consumer=e},r.createElement=M,r.createFactory=function(e){var t=M.bind(null,e);return t.type=e,t},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:G,render:e}},r.isValidElement=R,r.lazy=function(e){return{$$typeof:z,_payload:{_status:-1,_result:e},_init:Q}},r.memo=function(e,t){return{$$typeof:Y,type:e,compare:t===void 0?null:t}},r.startTransition=function(e){var t=h.transition;h.transition={};try{e()}finally{h.transition=t}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,t){return y.current.useCallback(e,t)},r.useContext=function(e){return y.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return y.current.useDeferredValue(e)},r.useEffect=function(e,t){return y.current.useEffect(e,t)},r.useId=function(){return y.current.useId()},r.useImperativeHandle=function(e,t,u){return y.current.useImperativeHandle(e,t,u)},r.useInsertionEffect=function(e,t){return y.current.useInsertionEffect(e,t)},r.useLayoutEffect=function(e,t){return y.current.useLayoutEffect(e,t)},r.useMemo=function(e,t){return y.current.useMemo(e,t)},r.useReducer=function(e,t,u){return y.current.useReducer(e,t,u)},r.useRef=function(e){return y.current.useRef(e)},r.useState=function(e){return y.current.useState(e)},r.useSyncExternalStore=function(e,t,u){return y.current.useSyncExternalStore(e,t,u)},r.useTransition=function(){return y.current.useTransition()},r.version="18.2.0"}),_e=q((r,n)=>{n.exports=de()}),j=ye(_e(),1),me=(r,n)=>{let{parameters:{i18n:c}}=n,d=c==null?void 0:c.language,[{locale:p}]=oe(),[g,E]=ae(0);return L(()=>{if(c)return c.on("languageChanged",()=>{E(Date.now())}),()=>c.off("languageChanged")},[c]),L(()=>{c&&p&&d&&p!==d&&c.changeLanguage(p)},[d,p,c]),j.default.createElement(j.Fragment,{key:g},j.default.createElement(ee,{i18n:c},r(n)))},be=F.decorators||[],ve={...F,decorators:[...be,me]},we=ve;/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/export{we as default};
