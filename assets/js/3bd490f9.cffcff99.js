"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71758],{58901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(85893),r=n(11151);const i={},a="GetPointerOfComponent",c={id:"STScalarField/GetPointerOfComponent",title:"GetPointerOfComponent",description:"Get pointer of component.",source:"@site/docs/docs-api/STScalarField/GetPointerOfComponent.md",sourceDirName:"STScalarField",slug:"/STScalarField/GetPointerOfComponent",permalink:"/docs-api/STScalarField/GetPointerOfComponent",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STScalarField/GetPointerOfComponent.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointer",permalink:"/docs-api/STScalarField/GetPointer"},next:{title:"Import",permalink:"/docs-api/STScalarField/Import"}},s={},d=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getpointerofcomponent",children:"GetPointerOfComponent"}),"\n",(0,o.jsx)(t.p,{children:"Get pointer of component."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION  getPointerOfComponent(obj, timeCompo) RESULT(ans)\n    CLASS(STScalarField_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    REAL(DFP), POINTER :: ans(:)\n  END FUNCTION  getPointerOfComponent\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(67294);const r={},i=o.createContext(r);function a(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);