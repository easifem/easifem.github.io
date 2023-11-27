"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71649],{35490:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>I,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>N,toc:()=>c});var t=r(85893),o=r(11151);const a={},i="SetParam",N={id:"AbstractLinSolver/SetParam",title:"SetParam",description:"Set the fields of linear solver.",source:"@site/docs/docs-api/AbstractLinSolver/SetParam.md",sourceDirName:"AbstractLinSolver",slug:"/AbstractLinSolver/SetParam",permalink:"/docs-api/AbstractLinSolver/SetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractLinSolver/SetParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetDirichletBCIndices",permalink:"/docs-api/AbstractLinSolver/SetDirichletBCIndices"},next:{title:"SetTolerance",permalink:"/docs-api/AbstractLinSolver/SetTolerance"}},I={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"setparam",children:"SetParam"}),"\n",(0,t.jsx)(n.p,{children:"Set the fields of linear solver."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetParam(obj, isInitiated, engine, solverName, &\n      & ierr, preconditionOption, iter, maxIter, atol, rtol, tol, normRes, &\n      & error0, error, convergenceIn, convergenceType, relativeToRHS, &\n      & KrylovSubspaceSize, globalNumRow, globalNumColumn, &\n      & localNumRow, localNumColumn, dbcIndx, RES, Amat)\n    CLASS(AbstractLinSolver_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isInitiated\n    !! is object initiated?\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine\n    !! Name of the engine\n    !! NATIVE-SERIAL\n    !! NATIVE-OMP\n    !! NATIVE-ACC\n    !! NATIVE-MPI\n    !! PETSC\n    !! LIS-OMP\n    !! LIS-MPI\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: solverName\n    !! Solver name\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ierr\n    !! Error code returned by the solver\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: preconditionOption\n    !! Name of preconditioner;\n    !! NO_PRECONDITION\n    !! LEFT_PRECONDITION\n    !! RIGHT_PRECONDITION\n    !! LEFT_RIGHT_PRECONDITON\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: iter\n    !! Current iteration number\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! Maximum iteration number\n    REAL(DFP), OPTIONAL, INTENT(IN) :: atol\n    !! absolute tolerance\n    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol\n    !! relative tolerance\n    REAL(DFP), OPTIONAL, INTENT(IN) :: tol\n    !! Tolerance for testing convergence\n    REAL(DFP), OPTIONAL, INTENT(IN) :: normRes\n    !! norm Residual\n    REAL(DFP), OPTIONAL, INTENT(IN) :: error0\n    !! initial error res or sol\n    REAL(DFP), OPTIONAL, INTENT(IN) :: error\n    !! final error in res of sol\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceIn\n    !! convergence in residual or solution\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceType\n    !! relative/ absolute convergence\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: relativeToRHS\n    !! In case of relative convergence\n    !! is convergence\n    !! is relative to\n    !! right hand side\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: KrylovSubspaceSize\n    !! Useful for GMRES type algorithm\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalNumRow, globalNumColumn\n    !! Size of the global problem;\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: localNumRow, localNumColumn\n    !! Size of the problem on a single process\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dbcIndx(:)\n    !! Indices where Dirichlet boundary conditions is prescribed\n    REAL(DFP), OPTIONAL, INTENT(IN) :: RES(:)\n    !! Residual in each iteration\n    CLASS(AbstractMatrixField_), OPTIONAL, TARGET, INTENT(IN) :: Amat\n    !! Pointer to child of [[AbstractMatrixField_]]\n  END SUBROUTINE SetParam\nEND INTERFACE\n\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>N,a:()=>i});var t=r(67294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function N(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);