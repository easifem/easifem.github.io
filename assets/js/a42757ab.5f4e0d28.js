"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[83083],{42422:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>c});var a=r(85893),o=r(11151);const s={},i="AddPorousMaterial",n={id:"AbstractSTDBE/AddPorousMaterial",title:"AddPorousMaterial",description:"- This routine adds porous material to the [AbstractSTDBE_",source:"@site/docs/docs-api/AbstractSTDBE/AddPorousMaterial.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/AddPorousMaterial",permalink:"/docs-api/AbstractSTDBE/AddPorousMaterial",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractSTDBE/AddPorousMaterial.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddFluidMaterial",permalink:"/docs-api/AbstractSTDBE/AddFluidMaterial"},next:{title:"AddPressureDirichletBC",permalink:"/docs-api/AbstractSTDBE/AddPressureDirichletBC"}},d={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"addporousmaterial",children:"AddPorousMaterial"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This routine adds porous material to the [AbstractSTDBE_"}),"\n",(0,a.jsxs)(t.li,{children:["This routine prepares ",(0,a.jsx)(t.code,{children:"obj%PorousMaterialToMesh(materialNo)"})," and ",(0,a.jsx)(t.code,{children:"obj%porousMaterial(materialNo)"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"param"})," contains the parameters for constructing a PorousMaterial."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"materialName"})," is the name of material, it should be ",(0,a.jsx)(t.code,{children:"porousMaterial"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"region"})," is an instance of ",(0,a.jsx)(t.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection_"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"materialNo"})," should be lesser than or equal to the total number of porous materials, i.e., ",(0,a.jsx)(t.code,{children:"tPorousMaterials"})]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_AddPorousMaterial(obj, materialNo, materialName, &\n    & param, region)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: materialNo\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region\n  END SUBROUTINE STDBE_AddPorousMaterial\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>n,a:()=>i});var a=r(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);