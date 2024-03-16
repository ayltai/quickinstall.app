import{j as o}from"./useTheme-BlgjukAR.js";import{M as i}from"./MaterialButton-B6SHXbjE.js";import"./iframe-CAFMPHJt.js";import{C as p}from"./CardView-C0E-qGtZ.js";(function(){try{var n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[r]="df19bc82-b817-4026-a358-fd1236655147",n._sentryDebugIdIdentifier="sentry-dbid-df19bc82-b817-4026-a358-fd1236655147")}catch{}})();const h={component:p,title:"Components/Data Presentations/Card",argTypes:{title:{description:"Title of the card"},subtitle:{description:"Subtitle of the card"},description:{description:"Description of the card"},onClick:{description:"Function to call when the button is clicked"},children:{description:"One or more buttons"}}},t={args:{title:"Headline",subtitle:"Subheader",description:"Explain more about the topic shown in the headline and subheader through supporting text."}},e={args:{...t.args,children:[o.jsx(i,{variant:"outlined",children:"Action 1"},"1"),o.jsx(i,{variant:"contained",children:"Action 2"},"2")]}};var a,s,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Headline',
    subtitle: 'Subheader',
    description: 'Explain more about the topic shown in the headline and subheader through supporting text.'
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,l,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: [<MaterialButton key='1' variant='outlined'>
                Action 1
            </MaterialButton>, <MaterialButton key='2' variant='contained'>
                Action 2
            </MaterialButton>]
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const b=["Default","WithButtons"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:t,WithButtons:e,__namedExportsOrder:b,default:h},Symbol.toStringTag,{value:"Module"}));export{_ as C};
