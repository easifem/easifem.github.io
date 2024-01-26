"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35843],{9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>N,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>T});var r=n(85893),o=n(11151);const i={},N="Utility",a={id:"SuperLU/dutil",title:"Utility",description:"dCreateCompColMatrix",source:"@site/docs/docs-api/SuperLU/dutil.md",sourceDirName:"SuperLU",slug:"/SuperLU/dutil",permalink:"/docs-api/SuperLU/dutil",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SuperLU/dutil.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dgstrf",permalink:"/docs-api/SuperLU/dgstrf"},next:{title:"Formats",permalink:"/docs-api/SuperLU/formats"}},d={},T=[{value:"<code>dCreate_CompCol_Matrix</code>",id:"dcreate_compcol_matrix",level:2},{value:"<code>dCreate_CompRow_Matrix</code>",id:"dcreate_comprow_matrix",level:2}];function E(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"utility",children:"Utility"}),"\n",(0,r.jsx)(t.h2,{id:"dcreate_compcol_matrix",children:(0,r.jsx)(t.code,{children:"dCreate_CompCol_Matrix"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'! extern void\n! dCreate_CompCol_Matrix(SuperMatrix *, int, int, int, double *,\n!                        int *, int *, Stype_t, Dtype_t, Mtype_t);\n\nINTERFACE\n  SUBROUTINE dCreate_CompCol_Matrix(A, m, n, nnz, nzval, rowind, colptr, &\n    & stype, dtype, mtype) BIND(C, name="dCreate_CompCol_Matrix")\n    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix\n    TYPE(SuperMatrix), INTENT(INOUT) :: A\n    INTEGER(C_INT), VALUE, INTENT(IN) :: m\n    INTEGER(C_INT), VALUE, INTENT(IN) :: n\n    INTEGER(C_INT), VALUE, INTENT(IN) :: nnz\n    REAL(C_DOUBLE), INTENT(INOUT) :: nzval(*)\n    INTEGER(C_INT), INTENT(INOUT) :: rowind(*)\n    INTEGER(C_INT), INTENT(INOUT) :: colptr(*)\n    INTEGER(C_INT), VALUE, INTENT(IN) :: stype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype\n  END SUBROUTINE dCreate_CompCol_Matrix\nEND INTERFACE\n'})}),"\n",(0,r.jsx)(t.h2,{id:"dcreate_comprow_matrix",children:(0,r.jsx)(t.code,{children:"dCreate_CompRow_Matrix"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'! void\n! dCreate_CompRow_Matrix(SuperMatrix *A, int m, int n, int nnz,\n!                        double *nzval, int *colind, int *rowptr,\n!                        Stype_t stype, Dtype_t dtype, Mtype_t mtype)\n\nINTERFACE\n  SUBROUTINE dCreate_CompRow_Matrix(A, m, n, nnz, nzval, colind, rowptr, &\n    & stype, dtype, mtype) BIND(C, name="dCreate_CompRow_Matrix")\n    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix\n    TYPE(SuperMatrix), INTENT(INOUT) :: A\n    INTEGER(C_INT), VALUE, INTENT(IN) :: m\n    INTEGER(C_INT), VALUE, INTENT(IN) :: n\n    INTEGER(C_INT), VALUE, INTENT(IN) :: nnz\n    REAL(C_DOUBLE), INTENT(IN) :: nzval(*)\n    INTEGER(C_INT), INTENT(IN) :: colind(*)\n    INTEGER(C_INT), INTENT(IN) :: rowptr(*)\n    INTEGER(C_INT), VALUE, INTENT(IN) :: stype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype\n  END SUBROUTINE dCreate_CompRow_Matrix\nEND INTERFACE\n\nPUBLIC :: dCreate_CompRow_Matrix\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(E,{...e})}):E(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>N});var r=n(67294);const o={},i=r.createContext(o);function N(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:N(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);