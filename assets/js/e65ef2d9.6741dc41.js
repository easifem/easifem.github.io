"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[84514],{84555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(85893),r=n(11151);const i={},s="Solve",a={id:"LinSolver/Solve",title:"Solve",description:"Solve the system of linear equation.",source:"@site/docs/docs-api/LinSolver/Solve.md",sourceDirName:"LinSolver",slug:"/LinSolver/Solve",permalink:"/docs-api/LinSolver/Solve",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolver/Solve.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetTolerance",permalink:"/docs-api/LinSolver/SetTolerance"},next:{title:"LinSolverLis",permalink:"/docs-api/LinSolverLis/"}},l={},c=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"solve",children:"Solve"}),"\n",(0,o.jsx)(t.p,{children:"Solve the system of linear equation."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Solve(obj, sol, rhs)\n    IMPORT :: AbstractLinSolver_, AbstractNodeField_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: sol\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: rhs\n  END SUBROUTINE Solve\nEND INTERFACE\n"})})]})}function v(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(67294);const r={},i=o.createContext(r);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);