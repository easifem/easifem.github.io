"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99167],{86466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(85893),r=n(11151);const a={},o="SetPrecondition",c={id:"MatrixField/SetPrecondition",title:"SetPrecondition",description:"Interface",source:"@site/docs/docs-api/MatrixField/SetPrecondition.md",sourceDirName:"MatrixField",slug:"/MatrixField/SetPrecondition",permalink:"/docs-api/MatrixField/SetPrecondition",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/SetPrecondition.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetMatrixFieldPrecondParam",permalink:"/docs-api/MatrixField/SetMatrixFieldPrecondParam"},next:{title:"SetRectangleMatrixFieldParam",permalink:"/docs-api/MatrixField/SetRectangleMatrixFieldParam"}},d={},s=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"setprecondition",children:"SetPrecondition"}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setPrecondition(obj, param, dbcPtrs)\n    IMPORT :: AbstractMatrixField_, ParameterList_, I4B\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcPtrs(:)\n  END SUBROUTINE setPrecondition\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var i=n(67294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);