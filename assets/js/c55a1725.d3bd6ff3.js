"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35648],{15961:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(85893),o=a(11151);const i={},r="Deallocate",c={id:"LinSolverLis/Deallocate",title:"Deallocate",description:"Deallocate the memory occupied by the abstract lin solver.",source:"@site/docs/docs-api/LinSolverLis/Deallocate.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/Deallocate",permalink:"/docs-api/LinSolverLis/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/LinSolverLis/CheckEssentialParam"},next:{title:"Display",permalink:"/docs-api/LinSolverLis/Display"}},s={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,n.jsx)(t.p,{children:"Deallocate the memory occupied by the abstract lin solver."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Deallocate(obj)\n    CLASS(LinSolverLis_), INTENT(INOUT) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var n=a(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);