"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[95477],{7165:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=t(85893),s=t(11151);function a(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE SuperLUInterface, ONLY: SuperMatrix\nIMPLICIT NONE\nTYPE(SuperMatrix), TARGET :: B\nINTEGER(I4B) :: m, n, nrhs\nREAL(DFP), ALLOCATABLE, TARGET:: rhs(:)\n\nm = 5; n = 5; nrhs = 1\nrhs = arange(1.0, 5.0)\n\nCALL dCreate_Dense_Matrix(B, m, nrhs, rhs, m, stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); \nCALL dPrint_Dense_Matrix(CString("B before "), B)\n'})}),"\n",(0,r.jsx)(n.p,{children:"The result is given below"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"Dense matrix B before:\nStype 6, Dtype 1, Mtype 0\nnrow 5, ncol 1, lda 5\n\nnzval: 1.000000  2.000000  3.000000  4.000000  5.000000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now lets changes the ",(0,r.jsx)(n.code,{children:"rhs"})," and print ",(0,r.jsx)(n.code,{children:"B"}),". Please note that the contents of ",(0,r.jsx)(n.code,{children:"B"})," will change."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'rhs = 10.0_DFP\nCALL dPrint_Dense_Matrix(CString("B after changing nzval "), B)\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",children:"Dense matrix B after changing nzval:\nStype 6, Dtype 1, Mtype 0\nnrow 5, ncol 1, lda 5\n\nnzval: 10.000000  10.000000  10.000000  10.000000  10.000000\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If you call ",(0,r.jsx)(n.code,{children:"Destroy_CompCol_Matrix()"})," then ",(0,r.jsx)(n.code,{children:"rhs"})," will be deallocated too. So you cannot access ",(0,r.jsx)(n.code,{children:"rhs"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["If you call ",(0,r.jsx)(n.code,{children:"Destroy_Dense_Matrix()"})," then ",(0,r.jsx)(n.code,{children:"rhs"})," will not be deallocated. But you cannot rely on the entries of ",(0,r.jsx)(n.code,{children:"rhs"}),", so do not use these entries."]}),"\n",(0,r.jsxs)(n.li,{children:["However, if you call ",(0,r.jsx)(n.code,{children:"Destroy_SuperMatrix_Store()"}),", then ",(0,r.jsx)(n.code,{children:"rhs"})," will not be deallocated, but you cannot access the entries of ",(0,r.jsx)(n.code,{children:"rhs"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In summary, please use ",(0,r.jsx)(n.code,{children:"Destroy_SuperMatrix_Store"})," to deallocate B, then deallocate or use ",(0,r.jsx)(n.code,{children:"rhs"})," the way you want."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"CALL Destroy_SuperMatrix_Store(B)\n!CALL Destroy_CompCol_Matrix(B)\n!CALL Destroy_Dense_Matrix(B)\nDeallocate(rhs)\nEND PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}const i={},c="dCreate_Dense_Matrix",d={id:"SuperLU/dCrete_Dense_Matrix",title:"dCreate_Dense_Matrix",description:"",source:"@site/docs/docs-api/SuperLU/dCrete_Dense_Matrix.md",sourceDirName:"SuperLU",slug:"/SuperLU/dCrete_Dense_Matrix",permalink:"/docs-api/SuperLU/dCrete_Dense_Matrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SuperLU/dCrete_Dense_Matrix.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dCreate_CompCol_Matrix",permalink:"/docs-api/SuperLU/dCrete_CompoCol_Matrix"},next:{title:"dgssv",permalink:"/docs-api/SuperLU/dgssv"}},l={},p=[];function x(e){const n={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dcreate_dense_matrix",children:"dCreate_Dense_Matrix"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'! void\n! dCreate_Dense_Matrix(SuperMatrix *X, int m, int n, double *x, int ldx,\n!                     Stype_t stype, Dtype_t dtype, Mtype_t mtype)\nINTERFACE\n  SUBROUTINE dCreate_Dense_Matrix(A, m, n, x, ldx, stype, dtype, mtype) &\n    & BIND(C, name="dCreate_Dense_Matrix")\n    IMPORT :: C_PTR, C_INT, C_DOUBLE, SuperMatrix\n    TYPE(SuperMatrix), INTENT(INOUT) :: A\n    INTEGER(C_INT), VALUE, INTENT(IN) :: m\n    INTEGER(C_INT), VALUE, INTENT(IN) :: n\n    REAL(C_DOUBLE), INTENT(INOUT) :: x(*)\n    INTEGER(C_INT), VALUE, INTENT(IN) :: ldx\n    INTEGER(C_INT), VALUE, INTENT(IN) :: stype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: dtype\n    INTEGER(C_INT), VALUE, INTENT(IN) :: mtype\n  END SUBROUTINE dCreate_Dense_Matrix\nEND INTERFACE\n\nPUBLIC :: dCreate_Dense_Matrix\n\n'})}),"\n","\n","\n",(0,r.jsx)(o,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);