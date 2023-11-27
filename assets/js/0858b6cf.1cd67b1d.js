"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80570],{49950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(85893),i=t(11151);const c={},a="Initiate",o={id:"ReferenceElement/Initiate",title:"Initiate",description:"Initiates an instance of ReferenceElement.",source:"@site/docs/docs-api/ReferenceElement/Initiate.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/Initiate",permalink:"/docs-api/ReferenceElement/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceElement/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetVTKElementType",permalink:"/docs-api/ReferenceElement/GetVTKElementType"},next:{title:"IsHexahedron",permalink:"/docs-api/ReferenceElement/IsHexahedron"}},s={},l=[{value:"Interface",id:"interface",level:2},{value:"ASSIGNMENT(=)",id:"assignment",level:2},{value:"ReferenceElement_Pointer",id:"referenceelement_pointer",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(n.p,{children:"Initiates an instance of ReferenceElement."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE Initiate(obj, Anotherobj)\n    CLASS(ReferenceElement_), INTENT(INOUT) :: obj\n    CLASS(ReferenceElement_), INTENT(IN) :: Anotherobj\n  END SUBROUTINE Initiate\n"})}),"\n",(0,r.jsx)(n.p,{children:"Copy one reference element into another reference element."}),"\n",(0,r.jsx)(n.h2,{id:"assignment",children:"ASSIGNMENT(=)"}),"\n",(0,r.jsx)(n.p,{children:"Copy one reference element into another reference element."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE Initiate(obj, Anotherobj)\n    CLASS(ReferenceElement_), INTENT(INOUT) :: obj\n    CLASS(ReferenceElement_), INTENT(IN) :: Anotherobj\n  END SUBROUTINE Initiate\n"})}),"\n",(0,r.jsx)(n.h2,{id:"referenceelement_pointer",children:"ReferenceElement_Pointer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE FUNCTION refelem_Constructor_1(xidim, nsd, elemType) RESULT(Ans)\n    INTEGER(I4B), INTENT(IN) :: xidim, nsd, elemType\n    CLASS(ReferenceElement_), POINTER :: ans\n  END FUNCTION refelem_Constructor_1\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE FUNCTION refelem_Constructor_2( refelem ) RESULT( ans )\n    CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem\n    CLASS( ReferenceElement_ ), POINTER :: ans\n  END FUNCTION refelem_Constructor_2\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const i={},c=r.createContext(i);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);