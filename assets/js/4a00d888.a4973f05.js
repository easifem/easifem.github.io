"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[26495],{14248:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151);const o={},a="SetPrecondition",c={id:"AbstractMatrixField/SetPrecondition",title:"SetPrecondition",description:"Interface",source:"@site/docs/docs-api/AbstractMatrixField/SetPrecondition.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/SetPrecondition",permalink:"/docs-api/AbstractMatrixField/SetPrecondition",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMatrixField/SetPrecondition.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetColumn",permalink:"/docs-api/AbstractMatrixField/SetColumn"},next:{title:"SetRow",permalink:"/docs-api/AbstractMatrixField/SetRow"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"setprecondition",children:"SetPrecondition"}),"\n",(0,r.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setPrecondition(obj, param, dbcPtrs)\n    IMPORT :: AbstractMatrixField_, ParameterList_, I4B\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcPtrs(:)\n  END SUBROUTINE setPrecondition\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var r=n(67294);const i={},o=r.createContext(i);function a(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);