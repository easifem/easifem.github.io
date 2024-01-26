"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99896],{6930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>N,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(85893),a=r(11151);const o={},i="GetAbstractLinSolverParam",s={id:"LinSolver/GetAbstractLinSolverParam",title:"GetAbstractLinSolverParam",description:"Get the essential parameters required to construct an instance of abstract linear solver.",source:"@site/docs/docs-api/LinSolver/GetAbstractLinSolverParam.md",sourceDirName:"LinSolver",slug:"/LinSolver/GetAbstractLinSolverParam",permalink:"/docs-api/LinSolver/GetAbstractLinSolverParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinSolver/GetAbstractLinSolverParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/LinSolver/Export"},next:{title:"GetLinSolverNameFromCode",permalink:"/docs-api/LinSolver/GetLinSolverCodeFromName"}},c={},l=[{value:"Interface",id:"interface",level:2}];function T(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getabstractlinsolverparam",children:"GetAbstractLinSolverParam"}),"\n",(0,n.jsx)(t.p,{children:"Get the essential parameters required to construct an instance of abstract linear solver."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE getAbstractLinSolverParam(param, prefix, &\n    & engine, solverName, preconditionOption, &\n    & maxIter, atol, rtol, convergenceIn, convergenceType, &\n    & relativeToRHS, KrylovSubspaceSize)\n    TYPE(ParameterList_), INTENT(IN) :: param\n    CHARACTER(*), INTENT(IN) :: prefix\n    CHARACTER(*), OPTIONAL, INTENT(OUT) :: engine\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: solverName\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: preconditionOption\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: maxIter\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: atol\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: rtol\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: convergenceIn\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: convergenceType\n    LOGICAL(LGT), OPTIONAL, INTENT(OUT) :: relativeToRHS\n    INTEGER(I4B), OPTIONAL, INTENT(OUT) :: KrylovSubspaceSize\n  END SUBROUTINE getAbstractLinSolverParam\nEND INTERFACE\n"})})]})}function N(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(T,{...e})}):T(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(67294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);