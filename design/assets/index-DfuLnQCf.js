import{R as t}from"./index-B8v4ui00.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9512f85b-0279-4b17-9432-4074930d715e",e._sentryDebugIdIdentifier="sentry-dbid-9512f85b-0279-4b17-9432-4074930d715e")}catch{}})();const o={},f=t.createContext(o);function s(e){const n=t.useContext(f);return t.useMemo(function(){return typeof e=="function"?e(n):{...n,...e}},[n,e])}function r(e){let n;return e.disableParentContext?n=typeof e.components=="function"?e.components(o):e.components||o:n=s(e.components),t.createElement(f.Provider,{value:n},e.children)}export{r as M,s as u};
