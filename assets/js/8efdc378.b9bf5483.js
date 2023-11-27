"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[54355],{22043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(85893),a=n(11151);const i={},s="Get",o={id:"CSRMatrix/Get",title:"Get",description:"This function returns a single value from the sparse MATRIX.",source:"@site/docs/docs-api/CSRMatrix/Get.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/Get",permalink:"/docs-api/CSRMatrix/Get",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/Get.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DropEntry",permalink:"/docs-api/CSRMatrix/DropEntry"},next:{title:"GetBlockColumn",permalink:"/docs-api/CSRMatrix/GetBlockColumn"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"get",children:"Get"}),"\n",(0,r.jsx)(t.p,{children:"This function returns a single value from the sparse MATRIX."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="Interface"',children:"INTERFACE\n  MODULE FUNCTION Get(obj, i, j) RESULT(Ans)\n    TYPE(CSRMatrix_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: i, j\n    REAL(DFP) :: Ans\n  END FUNCTION Get\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);