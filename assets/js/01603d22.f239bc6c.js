"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21823],{1531:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(85893),r=i(11151);const a={},o="SetPrecondition",s={id:"MatrixFieldLis/SetPrecondition",title:"SetPrecondition",description:"Interface",source:"@site/docs/docs-api/MatrixFieldLis/SetPrecondition.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/SetPrecondition",permalink:"/docs-api/MatrixFieldLis/SetPrecondition",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/SetPrecondition.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetMatrixFieldPrecondParam",permalink:"/docs-api/MatrixFieldLis/SetMatrixFieldPrecondParam"},next:{title:"SetRectangleMatrixFieldParam",permalink:"/docs-api/MatrixFieldLis/SetRectangleMatrixFieldParam"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setprecondition",children:"SetPrecondition"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE setPrecondition(obj, param, dbcPtrs)\n    IMPORT :: AbstractMatrixField_, ParameterList_, I4B\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcPtrs(:)\n  END SUBROUTINE setPrecondition\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(67294);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);