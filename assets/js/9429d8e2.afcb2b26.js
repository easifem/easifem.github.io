"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97412],{2502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(85893),r=a(11151);const i={},c="GetFacetMatrix",s={id:"RefTriangle/GetFacetMatrix",title:"GetFacetMatrix",description:"Get the facet matrix",source:"@site/docs/docs-api/RefTriangle/GetFacetMatrix.md",sourceDirName:"RefTriangle",slug:"/RefTriangle/GetFacetMatrix",permalink:"/docs-api/RefTriangle/GetFacetMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefTriangle/GetFacetMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetFacetElements",permalink:"/docs-api/RefTriangle/GetFacetElements"},next:{title:"GetNNE",permalink:"/docs-api/RefTriangle/GetNNE"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getfacetmatrix",children:"GetFacetMatrix"}),"\n",(0,n.jsx)(t.p,{children:"Get the facet matrix"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetFacetMatrix(obj) RESULT(ans)\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n  END FUNCTION GetFacetMatrix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>c});var n=a(67294);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);