"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76085],{17507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(85893),i=n(11151);const r={},s="GetPointerOfComponent",c={id:"STVectorFieldLis/GetPointerOfComponent",title:"GetPointerOfComponent",description:"Get pointer of a component.",source:"@site/docs/docs-api/STVectorFieldLis/GetPointerOfComponent.md",sourceDirName:"STVectorFieldLis",slug:"/STVectorFieldLis/GetPointerOfComponent",permalink:"/docs-api/STVectorFieldLis/GetPointerOfComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorFieldLis/GetPointerOfComponent.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointer",permalink:"/docs-api/STVectorFieldLis/GetPointer"},next:{title:"Import",permalink:"/docs-api/STVectorFieldLis/Import"}},a={},d=[{value:"Interface",id:"interface",level:2}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getpointerofcomponent",children:"GetPointerOfComponent"}),"\n",(0,o.jsx)(t.p,{children:"Get pointer of a component."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["This method is only available for ",(0,o.jsx)(t.code,{children:"NATIVE_SERIAL"})," engine."]})}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION GetPointerOfComponent(obj, spaceCompo, timeCompo) &\n    & RESULT(ans)\n    CLASS(STVectorFieldLis_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), POINTER :: ans(:)\n  END FUNCTION GetPointerOfComponent\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var o=n(67294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);