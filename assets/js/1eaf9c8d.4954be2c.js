"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17043],{85408:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(85893),c=o(11151);const r={},a="FacetTopology",s={id:"ReferenceElement/FacetTopology",title:"FacetTopology",description:"Returns the facet topology of the given element type",source:"@site/docs/docs-api/ReferenceElement/FacetTopology.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/FacetTopology",permalink:"/docs-api/ReferenceElement/FacetTopology",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceElement/FacetTopology.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FacetMatrix",permalink:"/docs-api/ReferenceElement/FacetMatrix"},next:{title:"GetConnectivity",permalink:"/docs-api/ReferenceElement/GetConnectivity"}},i={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"facettopology",children:"FacetTopology"}),"\n",(0,n.jsx)(t.p,{children:"Returns the facet topology of the given element type"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION RefElem_FacetTopology(ElemType, Nptrs) RESULT(Ans)\n    INTEGER(I4B), INTENT(IN) :: ElemType\n    INTEGER(I4B), INTENT(IN) :: Nptrs(:)\n    TYPE(ReferenceTopology_), ALLOCATABLE :: ans(:)\n  END FUNCTION RefElem_FacetTopology\n"})})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var n=o(67294);const c={},r=n.createContext(c);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);