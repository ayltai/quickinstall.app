import{e as b,_ as O,j as r}from"./useTheme-BlgjukAR.js";import{_ as n}from"./extends-DCeRLDon.js";import{r as p}from"./index-B8v4ui00.js";import{a as _,g as F,c as I}from"./generateUtilityClasses-Bt1hkMzr.js";import{L as $,a as nt}from"./List-CV36kZW1.js";import{u as V}from"./useThemeProps-d5D-3UEo.js";import{s as j,r as it,c as D}from"./styled-DiKmFtHj.js";import{T as w}from"./Typography-pnPGBOAX.js";import{d as rt}from"./DeleteForever-DFs1ISRG.js";import"./iframe-CAFMPHJt.js";import{D as ct}from"./Divider-D-WlYzIr.js";import{u as K}from"./useEnhancedEffect-BQ6nKucK.js";import{i as lt}from"./ownerWindow-Du-g-nGR.js";import{u as Q}from"./useForkRef-DmN6nj6Q.js";import{i as Y}from"./isHostComponent-BISCXPu1.js";import{B as X}from"./ButtonBase-DB5tx4ME.js";import{I as dt}from"./IconButton-B3B9m9Eb.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="a9abe12b-1913-44fe-8198-0468890c51db",t._sentryDebugIdIdentifier="sentry-dbid-a9abe12b-1913-44fe-8198-0468890c51db")}catch{}})();function pt(t){return F("MuiListItem",t)}const ut=_("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),P=ut;function mt(t){return F("MuiListItemButton",t)}const yt=_("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),T=yt,ft=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],gt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters]},bt=t=>{const{alignItems:e,classes:s,dense:o,disabled:i,disableGutters:c,divider:a,selected:u}=t,l=D({root:["root",o&&"dense",!c&&"gutters",a&&"divider",i&&"disabled",e==="flex-start"&&"alignItemsFlexStart",u&&"selected"]},mt,s);return n({},s,l)},vt=j(X,{shouldForwardProp:t=>it(t)||t==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:gt})(({theme:t,ownerState:e})=>n({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${T.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${T.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${T.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity)}},[`&.${T.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${T.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.alignItems==="flex-start"&&{alignItems:"flex-start"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.dense&&{paddingTop:4,paddingBottom:4})),xt=p.forwardRef(function(e,s){const o=V({props:e,name:"MuiListItemButton"}),{alignItems:i="center",autoFocus:c=!1,component:a="div",children:u,dense:m=!1,disableGutters:l=!1,divider:v=!1,focusVisibleClassName:L,selected:h=!1,className:k}=o,d=O(o,ft),y=p.useContext($),f=p.useMemo(()=>({dense:m||y.dense||!1,alignItems:i,disableGutters:l}),[i,y.dense,m,l]),g=p.useRef(null);K(()=>{c&&g.current&&g.current.focus()},[c]);const B=n({},o,{alignItems:i,dense:f.dense,disableGutters:l,divider:v,selected:h}),A=bt(B),S=Q(g,s);return r.jsx($.Provider,{value:f,children:r.jsx(vt,n({ref:S,href:d.href||d.to,component:(d.href||d.to)&&a==="div"?"button":a,focusVisibleClassName:I(A.focusVisible,L),ownerState:B,className:I(A.root,k)},d,{classes:A,children:u}))})}),Ct=xt;function It(t){return F("MuiListItemSecondaryAction",t)}_("MuiListItemSecondaryAction",["root","disableGutters"]);const $t=["className"],Lt=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},It,s)},ht=j("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>n({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Z=p.forwardRef(function(e,s){const o=V({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=o,c=O(o,$t),a=p.useContext($),u=n({},o,{disableGutters:a.disableGutters}),m=Lt(u);return r.jsx(ht,n({className:I(m.root,i),ownerState:u,ref:s},c))});Z.muiName="ListItemSecondaryAction";const kt=Z,Rt=["className"],Pt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Tt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},At=t=>{const{alignItems:e,button:s,classes:o,dense:i,disabled:c,disableGutters:a,disablePadding:u,divider:m,hasSecondaryAction:l,selected:v}=t;return D({root:["root",i&&"dense",!a&&"gutters",!u&&"padding",m&&"divider",c&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",l&&"secondaryAction",v&&"selected"],container:["container"]},pt,o)},Nt=j("div",{name:"MuiListItem",slot:"Root",overridesResolver:Tt})(({theme:t,ownerState:e})=>n({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&n({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${T.root}`]:{paddingRight:48}},{[`&.${P.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${P.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${P.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${P.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${P.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:b(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:b(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),Ot=j("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),jt=p.forwardRef(function(e,s){const o=V({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:c=!1,button:a=!1,children:u,className:m,component:l,components:v={},componentsProps:L={},ContainerComponent:h="li",ContainerProps:{className:k}={},dense:d=!1,disabled:y=!1,disableGutters:f=!1,disablePadding:g=!1,divider:B=!1,focusVisibleClassName:A,secondaryAction:S,selected:tt=!1,slotProps:et={},slots:st={}}=o,ot=O(o.ContainerProps,Rt),at=O(o,Pt),q=p.useContext($),U=p.useMemo(()=>({dense:d||q.dense||!1,alignItems:i,disableGutters:f}),[i,q.dense,d,f]),E=p.useRef(null);K(()=>{c&&E.current&&E.current.focus()},[c]);const R=p.Children.toArray(u),W=R.length&&lt(R[R.length-1],["ListItemSecondaryAction"]),M=n({},o,{alignItems:i,autoFocus:c,button:a,dense:U.dense,disabled:y,disableGutters:f,disablePadding:g,divider:B,hasSecondaryAction:W,selected:tt}),z=At(M),H=Q(E,s),G=st.root||v.Root||Nt,N=et.root||L.root||{},x=n({className:I(z.root,N.className,m),disabled:y},at);let C=l||"li";return a&&(x.component=l||"div",x.focusVisibleClassName=I(P.focusVisible,A),C=X),W?(C=!x.component&&!l?"div":C,h==="li"&&(C==="li"?C="div":x.component==="li"&&(x.component="div")),r.jsx($.Provider,{value:U,children:r.jsxs(Ot,n({as:h,className:I(z.container,k),ref:H,ownerState:M},ot,{children:[r.jsx(G,n({},N,!Y(G)&&{as:C,ownerState:n({},M,N.ownerState)},x,{children:R})),R.pop()]}))})):r.jsx($.Provider,{value:U,children:r.jsxs(G,n({},N,{as:C,ref:H},!Y(G)&&{ownerState:n({},M,N.ownerState)},x,{children:[R,S&&r.jsx(kt,{children:S})]}))})}),Bt=jt;function St(t){return F("MuiListItemText",t)}const Mt=_("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),J=Mt,Gt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],wt=t=>{const{classes:e,inset:s,primary:o,secondary:i,dense:c}=t;return D({root:["root",s&&"inset",c&&"dense",o&&i&&"multiline"],primary:["primary"],secondary:["secondary"]},St,e)},_t=j("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[{[`& .${J.primary}`]:e.primary},{[`& .${J.secondary}`]:e.secondary},e.root,s.inset&&e.inset,s.primary&&s.secondary&&e.multiline,s.dense&&e.dense]}})(({ownerState:t})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})),Ft=p.forwardRef(function(e,s){const o=V({props:e,name:"MuiListItemText"}),{children:i,className:c,disableTypography:a=!1,inset:u=!1,primary:m,primaryTypographyProps:l,secondary:v,secondaryTypographyProps:L}=o,h=O(o,Gt),{dense:k}=p.useContext($);let d=m??i,y=v;const f=n({},o,{disableTypography:a,inset:u,primary:!!d,secondary:!!y,dense:k}),g=wt(f);return d!=null&&d.type!==w&&!a&&(d=r.jsx(w,n({variant:k?"body2":"body1",className:g.primary,component:l!=null&&l.variant?void 0:"span",display:"block"},l,{children:d}))),y!=null&&y.type!==w&&!a&&(y=r.jsx(w,n({variant:"body2",className:g.secondary,color:"text.secondary",display:"block"},L,{children:y}))),r.jsxs(_t,n({className:I(g.root,c),ownerState:f,ref:s},h,{children:[d,y]}))}),ae=Ft,Vt=({children:t,onClick:e,onDelete:s,...o})=>r.jsx(nt,{disablePadding:!0,...o,children:p.Children.toArray(t).map((i,c)=>{const a=i.key.substring(2),u=()=>e&&e(a),m=()=>s&&s(a);return r.jsxs(p.Fragment,{children:[c!==0&&r.jsx(ct,{},`divider-${a}`),r.jsx(Bt,{disablePadding:!0,secondaryAction:r.jsx(dt,{"data-testid":"delete-button",edge:"end",onClick:m,children:r.jsx(rt,{})}),children:r.jsx(Ct,{onClick:u,children:i})},`listitem-${a}`)]},a)})});Vt.__docgenInfo={description:`A list displays one or more list items vertically.
@param children The content of the component
@param onClick Function to call when the list item is clicked
@param onDelete Function to call when the delete button is clicked
@param rest Other props`,methods:[],displayName:"ListView",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(key : string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(key : string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:""}}};export{Vt as L,ae as a};
