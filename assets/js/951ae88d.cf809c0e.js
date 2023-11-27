"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45302],{65874:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>T,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>N,toc:()=>I});var t=r(85893),o=r(11151);const i={},a="GetParam",N={id:"LinSolverLis/GetParam",title:"GetParam",description:"Get the field parameters of linear solver.",source:"@site/docs/docs-api/LinSolverLis/GetParam.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/GetParam",permalink:"/docs-api/LinSolverLis/GetParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/GetParam.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetLinSolverParam",permalink:"/docs-api/LinSolverLis/GetLinSolverParam"},next:{title:"GetPreconditionOption",permalink:"/docs-api/LinSolverLis/GetPreconditionOption"}},T={},I=[{value:"Interface",id:"interface",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getparam",children:"GetParam"}),"\n",(0,t.jsx)(n.p,{children:"Get the field parameters of linear solver."}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetParam(obj, isInitiated, engine, solverName, &\n      & ierr, preconditionOption, iter, maxIter, atol, rtol, tol, normRes, &\n      & error0, error, convergenceIn, convergenceType, relativeToRHS, &\n      & KrylovSubspaceSize, globalNumRow, globalNumColumn, &\n      & localNumRow, localNumColumn, dbcIndx, RES, Amat)\n    CLASS(AbstractLinSolver_), INTENT(IN) :: obj\n    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: isInitiated\n    !! is object initiated?\n    CHARACTER(*), OPTIONAL, INTENT(INOUT) :: engine\n    !! Name of the engine\n    !! NATIVE-SERIAL\n    !! NATIVE-OMP\n    !! NATIVE-ACC\n    !! NATIVE-MPI\n    !! PETSC\n    !! LIS-OMP\n    !! LIS-MPI\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: solverName\n    !! Solver name\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: ierr\n    !! Error code returned by the solver\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: preconditionOption\n    !! Name of preconditioner;\n    !! NO_PRECONDITION\n    !! LEFT_PRECONDITION\n    !! RIGHT_PRECONDITION\n    !! LEFT_RIGHT_PRECONDITON\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: iter\n    !! Current iteration number\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: maxIter\n    !! Maximum iteration number\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: atol\n    !! absolute tolerance\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: rtol\n    !! relative tolerance\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: tol\n    !! Tolerance for testing convergence\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: normRes\n    !! norm Residual\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error0\n    !! initial error res or sol\n    REAL(DFP), OPTIONAL, INTENT(INOUT) :: error\n    !! final error in res of sol\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceIn\n    !! convergence in residual or solution\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: convergenceType\n    !! relative/ absolute convergence\n    LOGICAL(LGT), OPTIONAL, INTENT(INOUT) :: relativeToRHS\n    !! In case of relative convergence\n    !! is convergence\n    !! is relative to\n    !! right hand side\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: KrylovSubspaceSize\n    !! Useful for GMRES type algorithm\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: globalNumRow, globalNumColumn\n    !! Size of the global problem;\n    INTEGER(I4B), OPTIONAL, INTENT(INOUT) :: localNumRow, localNumColumn\n    !! Size of the problem on a single process\n    INTEGER(I4B), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: dbcIndx(:)\n    !! Indices where Dirichlet boundary conditions is prescribed\n    REAL(DFP), ALLOCATABLE, OPTIONAL, INTENT(INOUT) :: RES(:)\n    !! Residual in each iteration\n    CLASS(AbstractMatrixField_), OPTIONAL, POINTER, INTENT(INOUT) :: Amat\n    !! Pointer to child of [[AbstractMatrixField_]]\n  END SUBROUTINE GetParam\nEND INTERFACE\n"})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>N,a:()=>a});var t=r(67294);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function N(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);