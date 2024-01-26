"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38225],{96535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(85893),s=n(11151);const a={},c="GetFacetElements",o={id:"AbstractRefElement/GetFacetElements",title:"GetFacetElements",description:"This routine returns the facet elements of reference element.",source:"@site/docs/docs-api/AbstractRefElement/GetFacetElements.md",sourceDirName:"AbstractRefElement",slug:"/AbstractRefElement/GetFacetElements",permalink:"/docs-api/AbstractRefElement/GetFacetElements",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractRefElement/GetFacetElements.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetElementTopology",permalink:"/docs-api/AbstractRefElement/GetElementTopology"},next:{title:"GetFacetMatrix",permalink:"/docs-api/AbstractRefElement/GetFacetMatrix"}},i={},l=[{value:"Interface",id:"interface",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getfacetelements",children:"GetFacetElements"}),"\n",(0,r.jsx)(t.p,{children:"This routine returns the facet elements of reference element."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE GetFacetElements(obj, ans)\n    IMPORT AbstractRefElement_, AbstractRefElementPointer_\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    TYPE(AbstractRefElementPointer_), ALLOCATABLE :: ans(:)\n  END SUBROUTINE GetFacetElements\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var r=n(67294);const s={},a=r.createContext(s);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);