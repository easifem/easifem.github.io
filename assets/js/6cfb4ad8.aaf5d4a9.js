"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[52898],{43764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(85893),s=n(11151);const o={},a="GetBoundaryNptrs",d={id:"Mesh/GetBoundaryNptrs",title:"GetBoundaryNptrs",description:"Interface",source:"@site/docs/docs-api/Mesh/GetBoundaryNptrs.md",sourceDirName:"Mesh",slug:"/Mesh/GetBoundaryNptrs",permalink:"/docs-api/Mesh/GetBoundaryNptrs",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Mesh/GetBoundaryNptrs.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetBoundaryElementData",permalink:"/docs-api/Mesh/GetBoundaryElementData"},next:{title:"GetBoundingBox",permalink:"/docs-api/Mesh/GetBoundingBox"}},i={},c=[{value:"Interface",id:"interface",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getboundarynptrs",children:"GetBoundaryNptrs"}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION getBoundaryNptrs(obj) RESULT(ans)\n    CLASS(Mesh_), INTENT(IN) :: obj\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION getBoundaryNptrs\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>a});var r=n(67294);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);