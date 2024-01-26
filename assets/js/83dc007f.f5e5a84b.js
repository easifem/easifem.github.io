"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75206],{8197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var s=t(85893),l=t(11151);const r={title:"ReferenceElement example 2"},c="ReferenceElement example 2",a={id:"ReferenceElement/ReferenceElement_test_2",title:"ReferenceElement example 2",description:"Modules and classes",source:"@site/docs/docs-api/ReferenceElement/ReferenceElement_test_2.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/ReferenceElement_test_2",permalink:"/docs-api/ReferenceElement/ReferenceElement_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceElement/ReferenceElement_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"ReferenceElement example 2"},sidebar:"tutorialSidebar",previous:{title:"ReferenceElement example 1",permalink:"/docs-api/ReferenceElement/ReferenceElement_test_1"},next:{title:"ReferenceTopology",permalink:"/docs-api/ReferenceElement/ReferenceTopology"}},i={},o=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"referenceelement-example-2",children:"ReferenceElement example 2"}),"\n",(0,s.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[[ReferenceTopology_]]"}),"\n",(0,s.jsx)(n.li,{children:"[[ReferenceElement_]]"}),"\n",(0,s.jsx)(n.li,{children:"[[ReferenceTriangle_]]"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  TYPE( ReferenceTriangle_ ) :: obj\n  TYPE( ReferenceElement_ ), ALLOCATABLE :: facetElems( : )\n  INTEGER( I4B ) :: ii\n  CALL initiate( obj, nsd = 2 )\n  facetElems = FacetElements( obj )\n  DO ii = 1, SIZE( facetElems )\n    CALL display( facetElems( ii ), "facetElements( " // str( ii, .TRUE.) // " ) = " )\n    CALL Blanklines( NOL = 4 )\n  END DO\nPROGRAM main\n'})})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var s=t(67294);const l={},r=s.createContext(l);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);