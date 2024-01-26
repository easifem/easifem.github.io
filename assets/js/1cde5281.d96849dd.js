"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15402],{32335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=a(85893),r=a(11151);const c={},s="GetFacetMatrix",i={id:"AbstractRefElement/GetFacetMatrix",title:"GetFacetMatrix",description:"Get the facet matrix",source:"@site/docs/docs-api/AbstractRefElement/GetFacetMatrix.md",sourceDirName:"AbstractRefElement",slug:"/AbstractRefElement/GetFacetMatrix",permalink:"/docs-api/AbstractRefElement/GetFacetMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractRefElement/GetFacetMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetFacetElements",permalink:"/docs-api/AbstractRefElement/GetFacetElements"},next:{title:"GetNNE",permalink:"/docs-api/AbstractRefElement/GetNNE"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getfacetmatrix",children:"GetFacetMatrix"}),"\n",(0,n.jsx)(t.p,{children:"Get the facet matrix"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetFacetMatrix(obj) RESULT(ans)\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n  END FUNCTION GetFacetMatrix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(67294);const r={},c=n.createContext(r);function s(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);