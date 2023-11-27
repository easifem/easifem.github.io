"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[81472],{96690:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=i(85893),r=i(11151);const c={},o="SetDirichletBCIndices",s={id:"LinSolver/SetDirichletBCIndices",title:"SetDirichletBCIndices",description:"Set the Dirichlet boundary condition indices.",source:"@site/docs/docs-api/LinSolver/SetDirichletBCIndices.md",sourceDirName:"LinSolver",slug:"/LinSolver/SetDirichletBCIndices",permalink:"/docs-api/LinSolver/SetDirichletBCIndices",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolver/SetDirichletBCIndices.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetAbstractLinSolverParam",permalink:"/docs-api/LinSolver/SetAbstractLinSolverParam"},next:{title:"SetLinSolverParam",permalink:"/docs-api/LinSolver/SetLinSolverParam"}},a={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setdirichletbcindices",children:"SetDirichletBCIndices"}),"\n",(0,n.jsx)(t.p,{children:"Set the Dirichlet boundary condition indices."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE SetDirichletBCIndices(obj, indx)\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: indx(:)\n  END SUBROUTINE SetDirichletBCIndices\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(67294);const r={},c=n.createContext(r);function o(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);