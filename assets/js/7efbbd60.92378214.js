"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35243],{52142:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>I,contentTitle:()=>o,default:()=>s,frontMatter:()=>t,metadata:()=>N,toc:()=>l});var r=i(85893),a=i(11151);const t={},o="SetLinSolverParam",N={id:"LinSolverLis/SetLinSolverParam",title:"SetLinSolverParam",description:"Set the essential parameters required to construct an instance of linear solver.",source:"@site/docs/docs-api/LinSolverLis/SetLinSolverParam.md",sourceDirName:"LinSolverLis",slug:"/LinSolverLis/SetLinSolverParam",permalink:"/docs-api/LinSolverLis/SetLinSolverParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinSolverLis/SetLinSolverParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/LinSolverLis/Set"},next:{title:"SetParam",permalink:"/docs-api/LinSolverLis/SetParam"}},I={},l=[{value:"Interface",id:"interface",level:2}];function T(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setlinsolverparam",children:"SetLinSolverParam"}),"\n",(0,r.jsx)(n.p,{children:"Set the essential parameters required to construct an instance of linear solver."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setLinSolverParam( &\n    & param, &\n    & solverName, &\n    & preconditionOption, &\n    & convergenceIn, &\n    & convergenceType, &\n    & maxIter, &\n    & relativeToRHS, &\n    & KrylovSubspaceSize, &\n    & rtol, &\n    & atol, &\n    & scale, &\n    & initx_zeros, &\n    & bicgstab_ell, &\n    & sor_omega, &\n    & p_name, &\n    & p_ilu_lfil, &\n    & p_ilu_mbloc, &\n    & p_ilu_droptol, &\n    & p_ilu_permtol, &\n    & p_ilu_alpha, &\n    & p_ilu_fill, &\n    & p_ssor_omega, &\n    & p_hybrid_i, &\n    & p_hybrid_maxiter, &\n    & p_hybrid_tol, &\n    & p_hybrid_omega, &\n    & p_hybrid_ell, &\n    & p_hybrid_restart, &\n    & p_is_alpha, &\n    & p_is_m, &\n    & p_sainv_drop, &\n    & p_saamg_unsym, &\n    & p_saamg_theta, &\n    & p_iluc_drop, &\n    & p_iluc_rate, &\n    & p_adds, &\n    & p_adds_iter &\n    & )\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: solverName\n    !! Solver name\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: preconditionOption\n    !! precondition option\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceIn\n    !! convergenceInRes\n    !! convergenceInSol\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: convergenceType\n    !! relativeConvergence\n    !! absoluteConvergence\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: maxIter\n    !! maximum iteration\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: relativeToRHS\n    !! relative to RHS\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: KrylovSubspaceSize\n    !! KrylovSubspaceSize\n    REAL(DFP), OPTIONAL, INTENT(IN) :: rtol\n    !! relative tolerance\n    REAL(DFP), OPTIONAL, INTENT(IN) :: atol\n    !! absolute tolerance\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: scale\n    !! LIS, Solver digonal scaling\n    !! scale_none: No scaling\n    !! scale_jacobi: jacobi scaling inv(D)Ax = inv(D)b\n    !! scale_symm_diag: sqrt(inv(D)) A sqrt(inv(D)) x = sqrt(inv(D))b\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: initx_zeros\n    !! if True, then we set sol=0.0 as initial guess.\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: bicgstab_ell\n    !! Needed for solver BiCGSTABL\n    REAL(DFP), OPTIONAL, INTENT(IN) :: sor_omega\n    !! The relaxation coefficient\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_name\n    !! Name of preconditioner\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_lfil\n    !! Sparsekit, ilu\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_mbloc\n    !! Sparsekit, ilu\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_droptol\n    !! Sparsekit, ilu\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_permtol\n    !! Sparsekit, ilu\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ilu_alpha\n    !! Sparsekit, ilu, alpha\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_ilu_fill\n    !! ILU, fill-in\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_ssor_omega\n    !! The relaxation coefficient omega in (0.0, 2.0)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_i\n    !! Hybrid, the linear solver, for example, SSOR, GMRES,\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_maxiter\n    !! Hybrid, maximum number of iterations\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_hybrid_tol\n    !! Hybrid, convergence tolerance\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_hybrid_omega\n    !! Hybrid, The relaxation coefficient omega of the SOR\n    !! omega should be in (0.0, 2.0)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_ell\n    !!Hybrid, The degree l of the BiCGSTAB(l)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_hybrid_restart\n    !! Hybrid, The restart value of GMRES and Orthomin\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_is_alpha\n    !! I+S, The parameter alpha of $I + \\alpha {S}^{m}$\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_is_m\n    !! I+S, The parameter m of $I + \\alpha {S}^{m}$\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_sainv_drop\n    !! SA-AMG, The drop criteria\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: p_saamg_unsym\n    !! SA-AMG, Select the unsymmetric version\n    !! The matrix structure must be symmetric\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_saamg_theta\n    !! SA-AMG, The drop criteria\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_iluc_drop\n    !! Crout ILU, default is 0.05, The drop criteria\n    REAL(DFP), OPTIONAL, INTENT(IN) :: p_iluc_rate\n    !! Crout ILU, The ratio of the maximum fill-in\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: p_adds\n    !! ilut Additive Schwarz, default is true\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: p_adds_iter\n    !! default value is 1\n    !! ILUT Additive Schwarz number of iteration\n  END SUBROUTINE setLinSolverParam\nEND INTERFACE\n"})})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(T,{...e})}):T(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>N,a:()=>o});var r=i(67294);const a={},t=r.createContext(a);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function N(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);