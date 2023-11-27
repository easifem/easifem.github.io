"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30406],{74244:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(85893),i=a(11151);const r={},o="GetDiagonal",s={id:"AbstractMatrixField/GetDiagonal",title:"GetDiagonal",description:"Returns the diagonal",source:"@site/docs/docs-api/AbstractMatrixField/GetDiagonal.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/GetDiagonal",permalink:"/docs-api/AbstractMatrixField/GetDiagonal",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractMatrixField/GetDiagonal.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetColumn",permalink:"/docs-api/AbstractMatrixField/GetColumn"},next:{title:"GetPrecondition",permalink:"/docs-api/AbstractMatrixField/GetPrecondition"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"getdiagonal",children:"GetDiagonal"}),"\n",(0,n.jsx)(e.p,{children:"Returns the diagonal"}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE GetDiagonal(obj, diag)\n    IMPORT :: AbstractMatrixField_, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)\n  END SUBROUTINE GetDiagonal\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>s,a:()=>o});var n=a(67294);const i={},r=n.createContext(i);function o(t){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),n.createElement(r.Provider,{value:e},t.children)}}}]);