"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15938],{13558:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>N,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=n(85893),s=n(11151);const t={title:"ReferencePrism"},c="ReferencePrism",a={id:"ReferencePrism/ReferencePrism_",title:"ReferencePrism",description:"Introduction",source:"@site/docs/docs-api/ReferencePrism/ReferencePrism_.md",sourceDirName:"ReferencePrism",slug:"/ReferencePrism/ReferencePrism_",permalink:"/docs-api/ReferencePrism/ReferencePrism_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferencePrism/ReferencePrism_.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"ReferencePrism"},sidebar:"tutorialSidebar",previous:{title:"ReferencePrism",permalink:"/docs-api/ReferencePrism/"},next:{title:"ReferencePrism example 1",permalink:"/docs-api/ReferencePrism/ReferencePrism_test_1"}},m={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"ReferencePrism (Constructor)",id:"referenceprism-constructor",level:3},{value:"ReferencePrism_Pointer",id:"referenceprism_pointer",level:3},{value:"LagrangeElement_Prism",id:"lagrangeelement_prism",level:3},{value:"Measure_Simplex_Prism",id:"measure_simplex_prism",level:3},{value:"Prism_Quality",id:"prism_quality",level:3}];function o(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"referenceprism",children:"ReferencePrism"}),"\n",(0,i.jsx)(r.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(r.p,{children:"A reference element for Prism, and a child of [[ReferenceElement_]]."}),"\n",(0,i.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(r.h3,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE initiate_ref_Prism( obj, NSD, XiJ )\n  CLASS( ReferencePrism_ ), INTENT( INOUT ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ( :, : )\nEND SUBROUTINE initiate_ref_Prism\n"})}),"\n",(0,i.jsx)(r.h3,{id:"referenceprism-constructor",children:"ReferencePrism (Constructor)"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE FUNCTION reference_Prism( NSD, XiJ ) RESULT( obj )\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)\n  TYPE( ReferencePrism_ ) :: obj\nEND FUNCTION reference_Prism\n"})}),"\n",(0,i.jsx)(r.h3,{id:"referenceprism_pointer",children:"ReferencePrism_Pointer"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE FUNCTION reference_Prism_Pointer( NSD, XiJ ) RESULT( obj )\n  INTEGER( I4B ), INTENT( IN ) :: NSD\n  REAL( DFP ), INTENT( IN ), OPTIONAL :: XiJ(:,:)\n  CLASS( ReferencePrism_ ), POINTER :: obj\nEND FUNCTION reference_Prism_Pointer\n"})}),"\n",(0,i.jsx)(r.h3,{id:"lagrangeelement_prism",children:"LagrangeElement_Prism"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE LagrangeElement_Prism( RefElem, Order, obj )\n  CLASS( ReferenceElement_), INTENT( IN ) :: RefElem\n  INTEGER( I4B ), INTENT( IN ) :: Order\n  CLASS ( ReferenceElement_ ), INTENT( INOUT ) :: obj\nEND SUBROUTINE LagrangeElement_Prism\n"})}),"\n",(0,i.jsx)(r.h3,{id:"measure_simplex_prism",children:"Measure_Simplex_Prism"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE FUNCTION Measure_Simplex_Prism( RefElem, XiJ ) RESULT( Ans )\n  CLASS( ReferencePrism_ ), INTENT( IN ) :: RefElem\n  REAL( DFP ), INTENT( IN ) :: XiJ( :, : )\n  REAL( DFP ) :: Ans\nEND FUNCTION Measure_Simplex_Prism\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(r.h3,{id:"prism_quality",children:"Prism_Quality"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-fortran",children:"MODULE FUNCTION Prism_Quality( refelem, xij, measure ) RESULT( Ans )\n  CLASS( ReferencePrism_ ), INTENT( IN ) :: refelem\n  REAL( DFP ) , INTENT( IN ) :: xij(:,:)\n  INTEGER( I4B ), INTENT( IN ) :: measure\n  REAL( DFP ) :: Ans\nEND FUNCTION Prism_Quality\n"})})]})}function N(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>c});var i=n(67294);const s={},t=i.createContext(s);function c(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);