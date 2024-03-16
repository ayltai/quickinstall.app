import{j as t}from"./useTheme-BlgjukAR.js";import{r as l}from"./index-B8v4ui00.js";import{M as p}from"./MaterialButton-B6SHXbjE.js";import"./iframe-CAFMPHJt.js";import{D as c}from"./DialogView-DGLzIzFt.js";import{T as u}from"./Typography-pnPGBOAX.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="0ca239c1-c7a4-4495-9c97-098c30386421",e._sentryDebugIdIdentifier="sentry-dbid-0ca239c1-c7a4-4495-9c97-098c30386421")}catch{}})();const d={component:c,title:"Components/Overlays/Dialog",argTypes:{title:{description:"The title of the dialog"},action:{description:"The primary action of the dialog"},onClose:{description:"Function to call when the close button is clicked"}}},o={args:{title:"Dialog title",children:t.jsx(u,{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})},render:e=>{const[r,s]=l.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(p,{onClick:()=>s(!0),children:"Open dialog"}),t.jsx(c,{...e,open:r,onClose:()=>s(!1)})]})}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Dialog title',
    children: <Typography>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</Typography>
  },
  render: props => {
    const [open, setOpen] = useState(false);
    return <>
                <MaterialButton onClick={() => setOpen(true)}>Open dialog</MaterialButton>
                <DialogView {...props} open={open} onClose={() => setOpen(false)} />
            </>;
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const m=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:m,default:d},Symbol.toStringTag,{value:"Module"}));export{D as C};
