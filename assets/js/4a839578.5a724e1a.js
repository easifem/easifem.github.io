"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21203],{66633:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(85893),o=a(11151);const r={},c="Deallocate",l={id:"LinSolver/Deallocate",title:"Deallocate",description:"Deallocate the memory occupied by the abstract lin solver.",source:"@site/docs/docs-api/LinSolver/Deallocate.md",sourceDirName:"LinSolver",slug:"/LinSolver/Deallocate",permalink:"/docs-api/LinSolver/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinSolver/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/LinSolver/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/LinSolver/Display"}},i={},s=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,n.jsx)(t.p,{children:"Deallocate the memory occupied by the abstract lin solver."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Deallocate(obj)\n    IMPORT :: AbstractLinSolver_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>c});var n=a(67294);const o={},r=n.createContext(o);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);