"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14024],{34059:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=t(85893),s=t(11151);const r={},o="DisplayBoundaryFacetData",i={id:"Mesh/DisplayBoundaryFacetData",title:"DisplayBoundaryFacetData",description:"Interface",source:"@site/docs/docs-api/Mesh/DisplayBoundaryFacetData.md",sourceDirName:"Mesh",slug:"/Mesh/DisplayBoundaryFacetData",permalink:"/docs-api/Mesh/DisplayBoundaryFacetData",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Mesh/DisplayBoundaryFacetData.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/Mesh/Display"},next:{title:"DisplayElementData",permalink:"/docs-api/Mesh/DisplayElementData"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"displayboundaryfacetdata",children:"DisplayBoundaryFacetData"}),"\n",(0,n.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE mesh_DisplayBoundaryFacetData(obj, msg, unitno)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno\n  END SUBROUTINE mesh_DisplayBoundaryFacetData\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var n=t(67294);const s={},r=n.createContext(s);function o(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);