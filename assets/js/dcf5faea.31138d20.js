"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88505],{31962:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(85893),i=n(11151);const o={},r="InitiateBoundaryData",s={id:"Domain/InitiateBoundaryData",title:"InitiateBoundaryData",description:"- This routine sets the boundary-data information in each mesh of domain.",source:"@site/docs/docs-api/Domain/InitiateBoundaryData.md",sourceDirName:"Domain",slug:"/Domain/InitiateBoundaryData",permalink:"/docs-api/Domain/InitiateBoundaryData",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Domain/InitiateBoundaryData.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/Domain/Initiate"},next:{title:"InitiateElementToElements",permalink:"/docs-api/Domain/InitiateElementToElements"}},d={},c=[];function l(t){const e={a:"a",code:"code",h1:"h1",li:"li",pre:"pre",ul:"ul",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"initiateboundarydata",children:"InitiateBoundaryData"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"This routine sets the boundary-data information in each mesh of domain."}),"\n",(0,a.jsxs)(e.li,{children:["For information please read ",(0,a.jsx)(e.a,{href:"/docs-api/Mesh/InitiateBoundaryData",children:"InitiateBoundaryData"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["After calling, ",(0,a.jsx)(e.code,{children:"InitiateBoundaryData()"})," on each mesh, this routine makes an internal call to ",(0,a.jsx)(e.code,{children:"SetFacetElementType"}),", for information see ",(0,a.jsx)(e.a,{href:"/docs-api/Domain/SetFacetElementType",children:"SetFacetElementType"}),"."]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Domain_InitiateBoundaryData(obj)\n    CLASS(Domain_), INTENT(INOUT) :: obj\n  END SUBROUTINE Domain_InitiateBoundaryData\nEND INTERFACE\n"})})]})}function m(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var a=n(67294);const i={},o=a.createContext(i);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);