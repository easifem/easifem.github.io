"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82103],{83194:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>C,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=t(85893),o=t(11151);function a(n){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifemBase\nUSE SuperLUInterface, ONLY: SuperMatrix\nIMPLICIT NONE\n\nTYPE(SuperMatrix), TARGET :: A, B\nINTEGER(I4B) :: m, n, nnz\nREAL(DFP), ALLOCATABLE :: nzval(:)\nINTEGER(I4B), ALLOCATABLE :: rowind(:)\nINTEGER(I4B), ALLOCATABLE :: colptr(:)\n\nm = 5; n = 5; nnz = 12\n\nnzval = [19, 12, 12, 21, 12, 12, 21, 16, 21, 5, 21, 18]\nrowind = [0, 1, 4, 1, 2, 4, 0, 2, 0, 3, 3, 4]\ncolptr = [0, 3, 6, 8, 10, 12]\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Let us create Suermatrix A in ",(0,r.jsx)(e.code,{children:"NCformat"}),"."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"CALL dCreate_CompCol_Matrix( &\n  & A, m, n, nnz, nzval, rowind, colptr, &\n  & stype_t%SLU_NC, dtype_t%SLU_D, mtype_t%SLU_GE)\n"})}),"\n",(0,r.jsx)(e.p,{children:"The content is of this matrix is give below:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'CALL dPrint_CompCol_Matrix(CString("A before "), A)\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"CompCol matrix A before:\nStype 0, Dtype 1, Mtype 0\nnrow 5, ncol 5, nnz 12\nnzval: 19.000000  12.000000  12.000000  21.000000  12.000000  12.000000  21.000000  16.000000  21.000000  5.000000  21.000000  18.000000  \nrowind: 0  1  4  1  2  4  0  2  0  3  3  4  \ncolptr: 0  3  6  8  10  12\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Now, let us change the contents of ",(0,r.jsx)(e.code,{children:"nzval"})]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"nzval = 10.0_DFP\n"})}),"\n",(0,r.jsx)(e.p,{children:"Let us print this matrix, you will notice that the contents of A has been updated."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'CALL dPrint_CompCol_Matrix(CString("A after changing nzval "), A)\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",metastring:"{4}",children:"CompCol matrix A after changing nzval:\nStype 0, Dtype 1, Mtype 0\nnrow 5, ncol 5, nnz 12\nnzval: 10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  \nrowind: 0  1  4  1  2  4  0  2  0  3  3  4  \ncolptr: 0  3  6  8  10  12\n"})}),"\n",(0,r.jsx)(e.p,{children:"Let us temper with the colptr, and see its impact on A."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'colptr(2) = 2\nCALL dPrint_CompCol_Matrix(CString("A after changing colptr "), A)\n'})}),"\n",(0,r.jsx)(e.p,{children:"You can see that in Line number 6, colptr is changed."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",metastring:"{6}",children:"CompCol matrix A after changing colptr:\nStype 0, Dtype 1, Mtype 0\nnrow 5, ncol 5, nnz 12\nnzval: 10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  10.000000  \nrowind: 0  1  4  1  2  4  0  2  0  3  3  4  \ncolptr: 0  2  6  8  10  12\n"})}),"\n",(0,r.jsxs)(e.p,{children:["If you destroy A and try to print ",(0,r.jsx)(e.code,{children:"nzval"}),", then the behavior is undetermined. Therefore, it is better to assume that deallocating A means deallocating nzval."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'CALL Destroy_CompCol_Matrix(A)\nCALL Display(nzval, "nzval = ")\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}const c={},s="dCreate_CompCol_Matrix",l={id:"SuperLU/dCrete_CompoCol_Matrix",title:"dCreate_CompCol_Matrix",description:"A%Store points to nzval, rowind, and colptr, therefore, if you change nzval etc., then changes will be reflected in A.",source:"@site/docs/docs-api/SuperLU/dCrete_CompoCol_Matrix.md",sourceDirName:"SuperLU",slug:"/SuperLU/dCrete_CompoCol_Matrix",permalink:"/docs-api/SuperLU/dCrete_CompoCol_Matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SuperLU/dCrete_CompoCol_Matrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperLU",permalink:"/docs-api/SuperLU/"},next:{title:"dCreate_Dense_Matrix",permalink:"/docs-api/SuperLU/dCrete_Dense_Matrix"}},d={},p=[];function m(n){const e={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"dcreate_compcol_matrix",children:"dCreate_CompCol_Matrix"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:'! extern void\n! dCreate_CompCol_Matrix(SuperMatrix *, int, int, int, double *,\n!                        int *, int *, Stype_t, Dtype_t, Mtype_t);\nINTERFACE\n  SUBROUTINE dCreate_CompCol_Matrix(A, m, n, nnz, nzval, rowind, colptr, &\n    & stype, dtype, mtype) BIND(C, name="dCreate_CompCol_Matrix")\n    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix\n    TYPE(SuperMatrix), INTENT(INOUT) :: A\n    INTEGER(C_INT), VALUE, INTENT(IN) :: m\n    INTEGER(C_INT), VALUE, INTENT(IN) :: n\n    INTEGER(C_INT), VALUE, INTENT(IN) :: nnz\n    REAL(C_DOUBLE), INTENT(INOUT) :: nzval(*)\n    INTEGER(C_INT), INTENT(INOUT) :: rowind(*)\n    INTEGER(C_INT), INTENT(INOUT) :: colptr(*)\n    INTEGER(C_INT), VALUE, INTENT(IN) :: stype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype\n  END SUBROUTINE dCreate_CompCol_Matrix\nEND INTERFACE\n'})}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"A%Store"})," points to ",(0,r.jsx)(e.code,{children:"nzval"}),", ",(0,r.jsx)(e.code,{children:"rowind"}),", and ",(0,r.jsx)(e.code,{children:"colptr"}),", therefore, if you change ",(0,r.jsx)(e.code,{children:"nzval"})," etc., then changes will be reflected in A."]})}),"\n","\n","\n",(0,r.jsx)(i,{})]})}function C(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>i});var r=t(67294);const o={},a=r.createContext(o);function i(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);