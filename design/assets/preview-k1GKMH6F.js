function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-BD4hB-El.js","./iframe-CAFMPHJt.js","./index-B8v4ui00.js","./react-18-DdI-Irm5.js","./client-CmBjjFNk.js","./index-C62N0sIa.js","./index-CVrl399t.js","./extends-DCeRLDon.js","./assertThisInitialized-JNA2pt04.js","./inheritsLoose-D9gYxgQu.js","./index-BT3KeYUm.js","./index-BWTWe0Km.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-CAFMPHJt.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof d<"u"?d:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="74b6e6b6-648d-40ca-a898-3169cc186acc",e._sentryDebugIdIdentifier="sentry-dbid-74b6e6b6-648d-40ca-a898-3169cc186acc")}catch{}})();const{global:d}=__STORYBOOK_MODULE_GLOBAL__;var o=Object.entries(d.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,n]=r;return n.excludeFromDocsStories&&(e[t]=!0),e},{}),c={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BD4hB-El.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>o[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{c as parameters};
