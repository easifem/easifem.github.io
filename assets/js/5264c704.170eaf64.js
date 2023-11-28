"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43923],{20749:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var l=a(85893),t=a(11151);const s={},i="Set",c={id:"ElemshapeData/Set",title:"Set",description:"This subroutine set parameters defined on physical element.",source:"@site/docs/docs-api/ElemshapeData/Set.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/Set",permalink:"/docs-api/ElemshapeData/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/Set.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LocalGradient",permalink:"/docs-api/ElemshapeData/LocalGradient"},next:{title:"SetBarycentricCoord",permalink:"/docs-api/ElemshapeData/SetBarycentricCoord"}},d={},r=[{value:"Interface1",id:"interface1",level:2},{value:"Interface2",id:"interface2",level:2},{value:"Interface3",id:"interface3",level:2},{value:"Interface4",id:"interface4",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,l.jsx)(n.p,{children:"This subroutine set parameters defined on physical element."}),"\n",(0,l.jsx)(n.h2,{id:"interface1",children:"Interface1"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"val"})," denotes nodal coordinates of element in ",(0,l.jsx)(n.code,{children:"xiJ"})," format"]}),"\n",(0,l.jsxs)(n.li,{children:["This subroutine will call","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setJacobian"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setJs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setdNdXt"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setBarycentricCoord"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["The facility of ",(0,l.jsx)(n.code,{children:"N"})," and ",(0,l.jsx)(n.code,{children:"dNdXi"})," allow us to handle non-isoparametric elements"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["In case ",(0,l.jsx)(n.code,{children:"obj"})," is instance of [[stelemshapedata_]] then ",(0,l.jsx)(n.code,{children:"val"})," will denotes coordinates of spatial nodes at some time in [tn, tn+1]."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE set1(obj, val, N, dNdXi)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: val(:, :)\n    !! Spatial nodal coordinates\n    REAL(DFP), INTENT(IN) :: N(:, :)\n    !! Shape function for geometry\n    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)\n    !! Local derivative of shape functions for geometry\n  END SUBROUTINE set1\n"})}),"\n",(0,l.jsx)(n.p,{children:"The following subroutine set parameters defined on physical element."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"val"})," denotes coordinates of the space-time element in ",(0,l.jsx)(n.code,{children:"xiJa"})," format"]}),"\n",(0,l.jsxs)(n.li,{children:["The facility of supplying ",(0,l.jsx)(n.code,{children:"N"}),", ",(0,l.jsx)(n.code,{children:"T"}),", and ",(0,l.jsx)(n.code,{children:"dNdXi"})," allows us to handle non-isoparametric element"]}),"\n",(0,l.jsxs)(n.li,{children:["This subroutine will call","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"setJacobian"})," uses ",(0,l.jsx)(n.code,{children:"dNdXi"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setJs"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setdNdXt"})}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"setBarycentricCoord"})," uses ",(0,l.jsx)(n.code,{children:"N"})," and ",(0,l.jsx)(n.code,{children:"T"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setdNTdXt"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"setdNTdt"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"interface2",children:"Interface2"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE elemsd_set2(facetobj, cellobj, cellval, cellN, &\n    & celldNdXi, facetN, facetdNdXi)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: facetobj\n    CLASS(ElemshapeData_), INTENT(INOUT) :: cellobj\n    REAL(DFP), INTENT(IN) :: cellval(:, :)\n    !! Spatial nodal coordinates of cell\n    REAL(DFP), INTENT(IN) :: cellN(:, :)\n    !! shape function for cell\n    REAL(DFP), INTENT(IN) :: facetN(:, :)\n    !! Shape function for geometry\n    REAL(DFP), INTENT(IN) :: celldNdXi(:, :, :)\n    REAL(DFP), INTENT(IN) :: facetdNdXi(:, :, :)\n    !! Local derivative of shape functions for geometry\n  END SUBROUTINE elemsd_set2\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(n.h2,{id:"interface3",children:"Interface3"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE elemsd_set3( &\n    & masterFacetobj, &\n    & masterCellobj, &\n    & masterCellval, &\n    & masterCellN, &\n    & masterCelldNdXi, &\n    & masterFacetN, &\n    & masterFacetdNdXi, &\n    & slaveFacetobj, &\n    & slaveCellobj, &\n    & slaveCellval, &\n    & slaveCellN, &\n    & slaveCelldNdXi, &\n    & slaveFacetN, &\n    & slaveFacetdNdXi)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: masterFacetobj\n    CLASS(ElemshapeData_), INTENT(INOUT) :: masterCellobj\n    REAL(DFP), INTENT(IN) :: masterCellval(:, :)\n    !! Spatial nodal coordinates\n    REAL(DFP), INTENT(IN) :: masterCellN(:, :)\n    REAL(DFP), INTENT(IN) :: masterFacetN(:, :)\n    !! Shape function for geometry\n    REAL(DFP), INTENT(IN) :: masterCelldNdXi(:, :, :)\n    REAL(DFP), INTENT(IN) :: masterFacetdNdXi(:, :, :)\n    !! Local derivative of shape functions for geometry\n    CLASS(ElemshapeData_), INTENT(INOUT) :: slaveFacetobj\n    CLASS(ElemshapeData_), INTENT(INOUT) :: slaveCellobj\n    REAL(DFP), INTENT(IN) :: slaveCellval(:, :)\n    !! Spatial nodal coordinates\n    REAL(DFP), INTENT(IN) :: slaveCellN(:, :)\n    REAL(DFP), INTENT(IN) :: slaveFacetN(:, :)\n    !! Shape function for geometry\n    REAL(DFP), INTENT(IN) :: slaveCelldNdXi(:, :, :)\n    REAL(DFP), INTENT(IN) :: slaveFacetdNdXi(:, :, :)\n    !! Local derivative of shape functions for geometry\n  END SUBROUTINE elemsd_set3\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(n.h2,{id:"interface4",children:"Interface4"}),"\n",(0,l.jsxs)(n.p,{children:["In case of [[stelemshapedata_]] ",(0,l.jsx)(n.code,{children:"val"})," denotes nodal coordinate at some intermediate space-time slab."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE stset1(obj, val, N, T, dNdXi)\n    CLASS(STElemshapeData_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: val(:, :, :)\n    !! Spatial nodal coordinates\n    REAL(DFP), INTENT(IN) :: N(:, :)\n    REAL(DFP), INTENT(IN) :: T(:)\n    REAL(DFP), INTENT(IN) :: dNdXi(:, :, :)\n  END SUBROUTINE stset1\n"})})]})}function N(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>i});var l=a(67294);const t={},s=l.createContext(t);function i(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);