"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[481],{78537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(85893),s=n(11151);const i={},o="Display",r={id:"Mesh/Display",title:"Display",description:"Interface",source:"@site/docs/docs-api/Mesh/Display.md",sourceDirName:"Mesh",slug:"/Mesh/Display",permalink:"/docs-api/Mesh/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/Display.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BoundaryFacetData",permalink:"/docs-api/Mesh/BoundaryFacetData_"},next:{title:"DisplayBoundaryFacetData",permalink:"/docs-api/Mesh/DisplayBoundaryFacetData"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE mesh_display(obj, msg, UnitNo)\n    CLASS(Mesh_), INTENT(INOUT) :: obj\n    !! mesh object\n    CHARACTER(*), INTENT(IN) :: msg\n    !! message on screen\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: UnitNo\n    !! unit number of ouput file\n  END SUBROUTINE mesh_display\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);