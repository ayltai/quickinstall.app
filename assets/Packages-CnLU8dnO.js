import{r as o,q as l}from"./vendor-CVH3TwW2.js";import{u as y,a as $,H as g,b as x,c as L,d as N,M as R,e as O,f as Q,g as j,r as G,D as P,h as V,R as q,I as B}from"./index-CwKxGuCQ.js";import{u as W}from"./i18next-Da9Dc5rh.js";import{C as z,a as J}from"./CatalogueItem-DDDpQuat.js";import{f as K}from"./react-router-DNNtZ2TV.js";import"./firebase-DU60cgGU.js";import"./redux-wMq8PnbF.js";import"./sentry-C7EKwdMQ.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[r]="0b5b6613-e956-4ba6-83cb-f083879dd101",s._sentryDebugIdIdentifier="sentry-dbid-0b5b6613-e956-4ba6-83cb-f083879dd101")}catch{}})();const te=()=>{const{platform:s}=K(),[r,h]=o.useState(""),[D,S]=o.useState([]),{product:n}=y(e=>e.preference),{ingredients:f}=y(e=>e.recipe),{data:_,error:m}=$(void 0,{pollingInterval:g}),{data:i,error:E}=x(void 0,{skip:s==="win",pollingInterval:g}),{data:d,error:I}=L(void 0,{skip:s==="win",pollingInterval:g}),{data:u,error:b,isFetching:H,isLoading:U}=N(r,{skip:s==="win"||r.length<R}),{data:p,error:k,isFetching:v,isLoading:A}=O(r,{skip:s==="mac"||r.length<R}),w=Q(),{t}=W(),F=o.useCallback(e=>({id:e.id,name:e.name,description:e.description,imageUrl:e.imageUrl,infoUrl:e.infoUrl,author:e.author,source:e.source}),[]),M=e=>h(e??""),C=o.useCallback((e,a)=>w(a?j(e):G(e)),[w]),T=o.useCallback(e=>l.jsx(z,{selected:f.some(a=>a.id===e.id),item:e,detailsView:l.jsx(P,{color:n==="win/packages"?"info":"primary",description:e.description,infoUrl:e.infoUrl,source:e.source}),onSelectionChange:C},e.id),[n,C,f]),c=o.useCallback(e=>{e&&("status"in e&&(e.status===404||e.status==="FETCH_ERROR"||e.status==="TIMEOUT_ERROR")?console.error(e):V(e))},[]);return o.useEffect(()=>{const e=[];i&&e.push(...i.map(a=>({...a,id:`${a.source}/${a.id}`}))),d&&e.push(...d.map(a=>({...a,id:`${a.source}/${a.id}`}))),u&&e.push(...u.map(a=>({...a,id:`${a.source}/${a.id}`}))),p&&e.push(...p.map(a=>({...a,id:`${a.source}/${a.id}`}))),S(e)},[i,d,u,p]),o.useEffect(()=>{c(m),c(E),c(I),c(b),c(k)},[c,m,E,I,b,k]),l.jsx(J,{searching:H||U||v||A,suggestedItems:(_??[]).filter(e=>s==="win"?e.source==="Chocolatey":e.source==="Homebrew"||e.source==="Homebrew (Cask)"||e.source==="App Store"),downloadedItems:D,tagLine:t(n==="win/packages"?"packages.tagline.win":"packages.tagline.mac"),searchHint:t("packages.search.hint"),title:t("packages.about.title"),description:t(n==="win/packages"?"packages.about.description.win":"packages.about.description.mac"),commands:q,categories:B,itemFields:["id","name","description","imageUrl","infoUrl","author","source"],loadingMessage:t("packages.loading"),renderCatalogueItem:T,searchResultMapper:F,onSearch:M})};export{te as Packages};
//# sourceMappingURL=Packages-CnLU8dnO.js.map
