"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43210],{82158:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(85893),r=n(11151);const o={},a="GetPrecondition",c={id:"AbstractMatrixField/GetPrecondition",title:"GetPrecondition",description:"Interface",source:"@site/docs/docs-api/AbstractMatrixField/GetPrecondition.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/GetPrecondition",permalink:"/docs-api/AbstractMatrixField/GetPrecondition",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMatrixField/GetPrecondition.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDiagonal",permalink:"/docs-api/AbstractMatrixField/GetDiagonal"},next:{title:"GetRow",permalink:"/docs-api/AbstractMatrixField/GetRow"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"getprecondition",children:"GetPrecondition"}),"\n",(0,i.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE getPrecondition(obj, Pmat)\n    IMPORT :: AbstractMatrixField_\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: Pmat\n  END SUBROUTINE getPrecondition\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var i=n(67294);const r={},o=i.createContext(r);function a(t){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:a(t.components),i.createElement(o.Provider,{value:e},t.children)}}}]);