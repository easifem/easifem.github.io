"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41148],{96812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(85893),s=n(11151);const i={},o="IsConverged",c={id:"AbstractKernel/IsConverged",title:"IsConverged",description:"This subroutine returns true if the iteration in the kernel is converged.",source:"@site/docs/docs-api/AbstractKernel/IsConverged.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/IsConverged",permalink:"/docs-api/AbstractKernel/IsConverged",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/IsConverged.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InitiateFields",permalink:"/docs-api/AbstractKernel/InitiateFields"},next:{title:"KernelAddDirichletBC",permalink:"/docs-api/AbstractKernel/KernelAddDirichletBC"}},a={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"isconverged",children:"IsConverged"}),"\n",(0,r.jsx)(t.p,{children:"This subroutine returns true if the iteration in the kernel is converged."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION isConverged(obj) RESULT(Ans)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    LOGICAL(LGT) :: Ans\n  END FUNCTION isConverged\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);