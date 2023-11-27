"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[66924],{48882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(85893),o=n(11151);const s={},a="Solve",c={id:"AbstractLinSolver/Solve",title:"Solve",description:"Solve the system of linear equation.",source:"@site/docs/docs-api/AbstractLinSolver/Solve.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/Solve",permalink:"/docs-api/AbstractLinSolver/Solve",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractLinSolver/Solve.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetTolerance",permalink:"/docs-api/AbstractLinSolver/SetTolerance"},next:{title:"AbstractMaterial",permalink:"/docs-api/AbstractMaterial/"}},i={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"solve",children:"Solve"}),"\n",(0,r.jsx)(t.p,{children:"Solve the system of linear equation."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Solve(obj, sol, rhs)\n    IMPORT :: AbstractLinSolver_, AbstractNodeField_\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: sol\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: rhs\n  END SUBROUTINE Solve\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(67294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);