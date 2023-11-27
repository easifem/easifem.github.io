"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12438],{1051:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>a,toc:()=>s});var t=n(85893),r=n(11151);const d={},c="LocalNodeCoord",a={id:"ReferenceElement/LocalNodeCoord",title:"LocalNodeCoord",description:"Returns the local NodeCoord of an element",source:"@site/docs/docs-api/ReferenceElement/LocalNodeCoord.md",sourceDirName:"ReferenceElement",slug:"/ReferenceElement/LocalNodeCoord",permalink:"/docs-api/ReferenceElement/LocalNodeCoord",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceElement/LocalNodeCoord.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsVolume",permalink:"/docs-api/ReferenceElement/IsVolume"},next:{title:"MeasureSimplex",permalink:"/docs-api/ReferenceElement/MeasureSimplex"}},l={},s=[];function i(e){const o={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"localnodecoord",children:"LocalNodeCoord"}),"\n",(0,t.jsx)(o.p,{children:"Returns the local NodeCoord of an element"}),"\n",(0,t.jsx)(o.p,{children:"This routine will be removed in near future. This routine is not included in generic LocalNodeCoord routine"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE Local_NodeCoord(NodeCoord, ElemType)\n    ! Define intent of dummy variables\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: NodeCoord(:, :)\n    INTEGER(I4B), INTENT(IN) :: ElemType\n  END SUBROUTINE Local_NodeCoord\n"})}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Local_NodeCoord_RefElem(RefElem) RESULT(NodeCoord)\n    CLASS(ReferenceElement_), INTENT(IN) :: RefElem\n    REAL(DFP), ALLOCATABLE :: NodeCoord(:, :)\n  END FUNCTION Local_NodeCoord_RefElem\n"})})]})}function m(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>c});var t=n(67294);const r={},d=t.createContext(r);function c(e){const o=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(d.Provider,{value:o},e.children)}}}]);