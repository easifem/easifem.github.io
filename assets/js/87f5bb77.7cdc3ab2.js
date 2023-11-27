"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86671],{47199:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>T,default:()=>N,frontMatter:()=>r,metadata:()=>o,toc:()=>E});var i=t(85893),a=t(11151);const r={},T="InitiateElemSD",o={id:"Mesh/InitiateElemSD",title:"InitiateElemSD",description:"",source:"@site/docs/docs-api/Mesh/InitiateElemSD.md",sourceDirName:"Mesh",slug:"/Mesh/InitiateElemSD",permalink:"/docs-api/Mesh/InitiateElemSD",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/InitiateElemSD.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InitiateBoundaryData",permalink:"/docs-api/Mesh/InitiateBoundaryData"},next:{title:"InitiateElementToElements",permalink:"/docs-api/Mesh/InitiateElementToElements"}},p={},E=[];function c(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"initiateelemsd",children:"InitiateElemSD"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE InitiateElemSD(obj, &\n    & orderSpace,  &\n    & linSpaceElem, &\n    & spaceElem, &\n    & quadTypeForSpace, &\n    & continuityTypeForSpace, &\n    & interpolTypeForSpace )\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: orderSpace\n      !! integrand order in space\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem\n      !! linear (simplex) space element\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem\n      !! space element\n    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace\n      !! quadrature for space\n    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace\n      !! continuity for base in space\n    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace\n      !! interpolation type for base in space\n  END SUBROUTINE InitiateElemSD\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE mesh_initiateElemSD2(obj, &\n    & orderSpace,  &\n    & linSpaceElem, &\n    & spaceElem, &\n    & quadTypeForSpace, &\n    & continuityTypeForSpace, &\n    & interpolTypeForSpace, &\n    & orderTime, &\n    & linTimeElem, &\n    & timeElem, &\n    & quadTypeForTime, &\n    & continuityTypeForTime, &\n    & interpolTypeForTime, &\n    & tvec)\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: orderSpace\n      !! integrand order in space\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem\n      !! linear space element\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem\n      !! space element\n    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace\n      !! quadrature type for space\n    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace\n      !! continuity type of base in space\n    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace\n      !! interpol type of base in space\n    INTEGER(I4B), INTENT(IN) :: orderTime\n      !! integrand order in time\n    TYPE(ReferenceLine_), INTENT(IN) :: linTimeElem\n      !! linear time element\n    TYPE(ReferenceLine_), INTENT(IN) :: timeElem\n      !! time element\n    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForTime\n      !! quadrature type of base in time\n    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForTime\n      !! continuity type of base in time\n    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForTime\n      !! interpol type of base in time\n    REAL(DFP), INTENT(IN) :: tvec(:)\n  END SUBROUTINE mesh_initiateElemSD2\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  MODULE SUBROUTINE mesh_initiateElemSD3(obj, &\n    & orderSpace,  &\n    & linSpaceElem, &\n    & spaceElem, &\n    & quadTypeForSpace, &\n    & continuityTypeForSpace, &\n    & interpolTypeForSpace, &\n    & orderTime, &\n    & linTimeElem, &\n    & timeElem, &\n    & quadTypeForTime, &\n    & continuityTypeForTime, &\n    & interpolTypeForTime )\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: orderSpace\n      !! integrand order in space\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: linSpaceElem\n      !! linear space element\n    CLASS(ReferenceElement_), TARGET, INTENT(IN) :: spaceElem\n      !! space element\n    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForSpace\n      !! quadrature type of base in space\n    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForSpace\n      !! continuity type of base in space\n    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForSpace\n      !! interpolation type of base in space\n    INTEGER(I4B), INTENT(IN) :: orderTime\n      !! integrand order in time\n    TYPE(ReferenceLine_), INTENT(IN) :: linTimeElem\n      !! linear time element\n    TYPE(ReferenceLine_), INTENT(IN) :: timeElem\n      !! time element\n    CHARACTER(LEN=*), INTENT(IN) :: quadTypeForTime\n      !! quadrature type of base in time\n    CHARACTER(LEN=*), INTENT(IN) :: continuityTypeForTime\n      !! continuity type of base in time\n    CHARACTER(LEN=*), INTENT(IN) :: interpolTypeForTime\n      !! interpolation type of base in time\n  END SUBROUTINE mesh_initiateElemSD3\n"})})]})}function N(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>T});var i=t(67294);const a={},r=i.createContext(a);function T(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:T(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);