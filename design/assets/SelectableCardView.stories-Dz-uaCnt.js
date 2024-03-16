import{j as t}from"./useTheme-BlgjukAR.js";import{r as y}from"./index-B8v4ui00.js";import{S as u}from"./SelectableCardView-ZKkDSe5Y.js";import"./iframe-CAFMPHJt.js";import{S as x}from"./Stack-CM3tbJY2.js";import{B as s}from"./Box-CEWEJJLI.js";import{T as n}from"./Typography-pnPGBOAX.js";import{L as b}from"./Link-BZH9QD7r.js";import{c as S}from"./createSvgIcon-D9r0IoHX.js";import"./extends-DCeRLDon.js";import"./createSvgIcon-BGX0Ng63.js";import"./generateUtilityClasses-Bt1hkMzr.js";import"./ownerWindow-Du-g-nGR.js";import"./useControlled-BLkA-84f.js";import"./useForkRef-DmN6nj6Q.js";import"./useEnhancedEffect-BQ6nKucK.js";import"./useEventCallback-B2e7cEsY.js";import"./useIsFocusVisible-DaJFNZTp.js";import"./DeleteForever-DFs1ISRG.js";import"./ToggleButton-BmxOUbFj.js";import"./MaterialButton-B6SHXbjE.js";import"./styled-DiKmFtHj.js";import"./useThemeProps-d5D-3UEo.js";import"./ButtonBase-DB5tx4ME.js";import"./assertThisInitialized-JNA2pt04.js";import"./inheritsLoose-D9gYxgQu.js";import"./TransitionGroupContext-CqYiLpIN.js";import"./DialogView-DGLzIzFt.js";import"./useTranslation-CSn3qglU.js";import"./context-pRJcWO9r.js";import"./i18nInstance-DtMpzgZE.js";import"./useTheme-C5hLunsB.js";import"./Backdrop-DfAPPLpu.js";import"./utils-CjhFWKAk.js";import"./index-C62N0sIa.js";import"./Modal-Bd7klfBb.js";import"./useSlotProps-B7eaAxse.js";import"./isHostComponent-BISCXPu1.js";import"./Portal-p5KjR-_u.js";import"./Paper-CXN2jwlL.js";import"./IconButton-B3B9m9Eb.js";import"./CardView-C0E-qGtZ.js";import"./TruncatedTypography-DmrDd2oe.js";import"./Tooltip-BINYJuEt.js";import"./index-BHz6K919.js";import"./Grow-Ddp49Qv2.js";import"../sb-preview/runtime.js";import"./styled-BGNPDvrT.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},r=new Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="4159a935-737e-46c1-a4f3-18263b6cd1d2",e._sentryDebugIdIdentifier="sentry-dbid-4159a935-737e-46c1-a4f3-18263b6cd1d2")}catch{}})();const T=S(t.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),ut={component:u,title:"Components/Data Presentations/Selectable Card",tags:["autodocs"],argTypes:{selected:{description:"Whether the card is selected."},color:{description:"Color of the card. Defaults to `inherit`."},dialogAction:{description:"The primary action to show in the action area."},actionText:{description:"Text to show in the action area."},actionIcon:{description:"Icon to show in the action area."},children:{description:"The detailed content of the component"},onChange:{description:"Function to call when the card selection state is changed."}}},c="Explain more about the topic shown in the headline and subheader through supporting text.",p="https://nodejs.org",o={args:{description:c,color:"primary",title:"Headline",subtitle:"Subheader",children:t.jsxs(x,{spacing:2,children:[t.jsxs(s,{children:[t.jsx(n,{variant:"h5",fontWeight:"bold",children:"Description"}),t.jsx(n,{children:c})]}),t.jsxs(s,{children:[t.jsx(n,{variant:"h5",fontWeight:"bold",children:"Website"}),t.jsx(b,{href:p,target:"_blank",children:t.jsx(n,{children:p})})]})]})},render:e=>{const[r,a]=y.useState(!1);return t.jsx(u,{...e,selected:r,onChange:a})}},i={args:{...o.args,actionText:"Configure",actionIcon:t.jsx(T,{})}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    description,
    color: 'primary',
    title: 'Headline',
    subtitle: 'Subheader',
    children: <Stack spacing={2}>
                <Box>
                    <Typography variant='h5' fontWeight='bold'>
                        Description
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant='h5' fontWeight='bold'>
                        Website
                    </Typography>
                    <Link href={infoUrl} target='_blank'>
                        <Typography>
                            {infoUrl}
                        </Typography>
                    </Link>
                </Box>
            </Stack>
  },
  render: props => {
    const [selected, setSelected] = useState(false);
    return <SelectableCardView {...props} selected={selected} onChange={setSelected} />;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,g,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    actionText: 'Configure',
    actionIcon: <Settings />
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const yt=["Default","WithAction"];export{o as Default,i as WithAction,yt as __namedExportsOrder,ut as default};
