import{j as e}from"./useTheme-BlgjukAR.js";import"./iframe-CAFMPHJt.js";import{u as p}from"./useTranslation-CSn3qglU.js";import{S as m}from"./Stack-CM3tbJY2.js";import{B as a}from"./Box-CEWEJJLI.js";import{T as n}from"./Typography-pnPGBOAX.js";import{L as f}from"./Link-BZH9QD7r.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},i=new Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="d451e290-871a-4200-842a-2c15e7ed9d20",r._sentryDebugIdIdentifier="sentry-dbid-d451e290-871a-4200-842a-2c15e7ed9d20")}catch{}})();const h=({color:r="primary",description:i,infoUrl:o,source:s,...d})=>{const{children:l,...c}=d,{t}=p();return e.jsxs(m,{spacing:2,...c,children:[e.jsxs(a,{children:[e.jsx(n,{variant:"overline",fontWeight:"bold",children:t("common.description")}),e.jsx(n,{children:i})]}),o&&e.jsxs(a,{children:[e.jsx(n,{variant:"overline",fontWeight:"bold",children:t("common.website")}),e.jsx(f,{color:r==="info"?"info.main":r,href:o,target:"_blank",children:e.jsx(n,{children:o})})]}),e.jsxs(a,{children:[e.jsx(n,{variant:"overline",fontWeight:"bold",children:t("common.source")}),e.jsx(n,{children:s})]}),l]})};h.__docgenInfo={description:`A details view is a container for displaying a description and optionally a URL for additional information and other arbitrary content.
@param color The color of the component
@param description The description of the component
@param infoUrl The URL of the information
@param source The source of the information
@param props Other props`,methods:[],displayName:"DetailsView",props:{color:{required:!1,tsType:{name:"union",raw:"'info' | 'primary' | 'secondary'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},infoUrl:{required:!1,tsType:{name:"string"},description:""},source:{required:!0,tsType:{name:"string"},description:""}}};export{h as D};