"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96642],{20382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(85893),a=n(11151);const o={},r="GetDiagonal",s={id:"MatrixFieldLis/GetDiagonal",title:"GetDiagonal",description:"Returns the diagonal",source:"@site/docs/docs-api/MatrixFieldLis/GetDiagonal.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/GetDiagonal",permalink:"/docs-api/MatrixFieldLis/GetDiagonal",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/GetDiagonal.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetColumn",permalink:"/docs-api/MatrixFieldLis/GetColumn"},next:{title:"GetPrecondition",permalink:"/docs-api/MatrixFieldLis/GetPrecondition"}},d={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"getdiagonal",children:"GetDiagonal"}),"\n",(0,i.jsx)(t.p,{children:"Returns the diagonal"}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE GetDiagonal(obj, diag)\n    IMPORT :: AbstractMatrixField_, DFP\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)\n  END SUBROUTINE GetDiagonal\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(67294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);