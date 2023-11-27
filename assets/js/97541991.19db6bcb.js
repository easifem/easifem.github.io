"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41117],{96847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(85893),i=n(11151);const o={},r="GetDiagonal",s={id:"MatrixField/GetDiagonal",title:"GetDiagonal",description:"Returns the diagonal",source:"@site/docs/docs-api/MatrixField/GetDiagonal.md",sourceDirName:"MatrixField",slug:"/MatrixField/GetDiagonal",permalink:"/docs-api/MatrixField/GetDiagonal",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/GetDiagonal.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetColumn",permalink:"/docs-api/MatrixField/GetColumn"},next:{title:"GetPrecondition",permalink:"/docs-api/MatrixField/GetPrecondition"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getdiagonal",children:"GetDiagonal"}),"\n",(0,a.jsx)(t.p,{children:"Returns the diagonal"}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE GetDiagonal(obj, diag)\n    IMPORT :: AbstractMatrixField_, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)\n  END SUBROUTINE GetDiagonal\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(67294);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);