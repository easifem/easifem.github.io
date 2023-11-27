"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38689],{44869:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(85893),o=n(11151);const a={},c="SetTolerance",i={id:"LinSolver/SetTolerance",title:"SetTolerance",description:"SEt the tolerance.",source:"@site/docs/docs-api/LinSolver/SetTolerance.md",sourceDirName:"LinSolver",slug:"/LinSolver/SetTolerance",permalink:"/docs-api/LinSolver/SetTolerance",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolver/SetTolerance.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetParam",permalink:"/docs-api/LinSolver/SetParam"},next:{title:"Solve",permalink:"/docs-api/LinSolver/Solve"}},s={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"settolerance",children:"SetTolerance"}),"\n",(0,r.jsx)(t.p,{children:"SEt the tolerance."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE SetTolerance(obj, atol, rtol)\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: atol\n    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol\n  END SUBROUTINE SetTolerance\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(67294);const o={},a=r.createContext(o);function c(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);