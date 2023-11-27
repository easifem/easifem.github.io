"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[70477],{35189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var s=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:'! In this program CSRMatrix is transferred to SuperLU\n! in NRFormat. `dgssv` is used to solve and factored the matrix\n\nPROGRAM main\nUSE easifemBase\nUSE SuperLUInterface, ONLY: SuperMatrix, superlu_options_t, &\n  & SuperLUStat_t, DNFormat\n\nTYPE(CSRMatrix_) :: csrmat\nREAL(DFP), ALLOCATABLE :: val(:), dense_csrmat(:, :), rhs(:), exact_sol(:)\nINTEGER(I4B), ALLOCATABLE :: ia(:), ja(:), perm_c(:), perm_r(:)\nREAL(DFP), PARAMETER :: s = 19, u = 21, p = 16, e = 5, r = 18, l = 12\n\nTYPE(SuperMatrix), TARGET :: sluA, sluB, sluL, sluU\nTYPE(superlu_options_t) :: options\nTYPE(SuperLUStat_t) :: stat\nTYPE(DNFormat), POINTER :: dnformat_ptr\nINTEGER(i4b) :: nrhs\nREAL(DFP), POINTER :: sol(:)\n\nval = [s, u, u, l, u, l, p, e, u, l, l, r]\nja = [1, 3, 4, 1, 2, 2, 3, 4, 5, 1, 2, 5]\nia = [1, 4, 6, 8, 10, 13]\n\nCALL Initiate(obj=csrmat, A=val, ia=ia, ja=ja, MatrixProp="SYM")\ndense_csrmat = csrmat\nCALL display(dense_csrmat, "dense csr matrix = ")\n\nja = ja - 1\nia = ia - 1\nCALL dCreate_CompRow_Matrix( &\n  & sluA, SIZE(csrmat, 1), SIZE(csrmat, 2), GetNNZ(csrmat), val, &\n  & ja, ia, stype_t%SLU_NR, dtype_t%SLU_D, mtype_t%SLU_GE)\n\nnrhs = 1; rhs = ones(SIZE(csrmat, 1) * nrhs, 1.0_DFP)\nexact_sol = arange(1.0, 5.0, 1.0)\nCALL MatVec(obj=csrmat, x=exact_sol, y=rhs)\n\nCALL dCreate_Dense_Matrix(sluB, SIZE(csrmat, 1), nrhs, rhs, SIZE(csrmat, 1), &\n  & stype_t%SLU_DN, dtype_t%SLU_D, mtype_t%SLU_GE); \nCALL Reallocate(perm_r, SIZE(rhs, 1), perm_c, SIZE(sol, 1))\nCALL display(perm_c, "perm_c")\nCALL set_default_options(options)\noptions%ColPerm = colperm_t%COLAMD\n\nCALL StatInit(stat)\n\nCALL dgssv(options, sluA, perm_c, perm_r, sluL, sluU, sluB, stat, info); \nIF (info .EQ. 0) THEN\n  CALL display("success in dgssv")\n  CALL dPrint_CompCol_Matrix(CString("A "), sluA)\n  CALL dPrint_Dense_Matrix(CString("B "), sluB)\n  CALL Display(perm_r, "perm_r = ")\n  CALL Display(perm_c, "perm_c = ")\n  !\n  ! extract solution\n  !\n  CALL C_F_POINTER(sluB%Store, dnformat_ptr)\n  CALL C_F_POINTER(dnformat_ptr%nzval, sol, [SIZE(csrmat, 1)])\n  CALL Display(sol, "sol = ")\nELSE\n  CALL display("error in dgssv")\nEND IF\n!!\nCALL Destroy_CompCol_Matrix(sluA)\nCALL Destroy_Dense_Matrix(sluB)\nEND PROGRAM main\n'})})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const o={},c="dgssv",l={id:"SuperLU/dgssv",title:"dgssv",description:"DGSSV solves the system of linear equations A*X=B, using the LU factorization from DGSTRF.",source:"@site/docs/docs-api/SuperLU/dgssv.md",sourceDirName:"SuperLU",slug:"/SuperLU/dgssv",permalink:"/docs-api/SuperLU/dgssv",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SuperLU/dgssv.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dCreate_Dense_Matrix",permalink:"/docs-api/SuperLU/dCrete_Dense_Matrix"},next:{title:"dgssvx",permalink:"/docs-api/SuperLU/dgssvx"}},p={},m=[{value:"A is <code>SLU_NC</code>",id:"a-is-slu_nc",level:2},{value:"A is <code>SLU_NR</code>",id:"a-is-slu_nr",level:2},{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dgssv",children:"dgssv"}),"\n",(0,s.jsxs)(n.p,{children:["DGSSV solves the system of linear equations ",(0,s.jsx)(n.code,{children:"A*X=B"}),", using the LU factorization from ",(0,s.jsx)(n.code,{children:"DGSTRF"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This routine cannot solve ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsxs)(n.msup,{children:[(0,s.jsx)(n.mi,{children:"A"}),(0,s.jsx)(n.mi,{children:"T"})]}),(0,s.jsx)(n.mi,{children:"X"}),(0,s.jsx)(n.mo,{children:"="}),(0,s.jsx)(n.mi,{children:"B"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"A^{T}X=B"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.8413em"}}),(0,s.jsxs)(n.span,{className:"mord",children:[(0,s.jsx)(n.span,{className:"mord mathnormal",children:"A"}),(0,s.jsx)(n.span,{className:"msupsub",children:(0,s.jsx)(n.span,{className:"vlist-t",children:(0,s.jsx)(n.span,{className:"vlist-r",children:(0,s.jsx)(n.span,{className:"vlist",style:{height:"0.8413em"},children:(0,s.jsxs)(n.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,s.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,s.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,s.jsx)(n.span,{className:"mord mtight",children:(0,s.jsx)(n.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})})})]})})})})})]}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.jsx)(n.span,{className:"mrel",children:"="}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,s.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"})]})]})]}),"."]})}),"\n",(0,s.jsxs)(n.h2,{id:"a-is-slu_nc",children:["A is ",(0,s.jsx)(n.code,{children:"SLU_NC"})]}),"\n",(0,s.jsxs)(n.p,{children:["If A is stored column-wise, that is ",(0,s.jsx)(n.code,{children:"A->Stype = SLU_NC"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permute the columns of A, forming ",(0,s.jsx)(n.code,{children:"A*Pc"}),", where Pc is a permutation matrix. For more details of this step, see ",(0,s.jsx)(n.code,{children:"sp_preorder.c"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Factor A as ",(0,s.jsx)(n.code,{children:"Pr*A*Pc=L*U"})," with the permutation Pr determined by Gaussian elimination with partial pivoting. L is unit lower triangular with offdiagonal entries bounded by 1 in magnitude, and U is upper triangular."]}),"\n",(0,s.jsxs)(n.li,{children:["Solve the system of equations ",(0,s.jsx)(n.code,{children:"A*X=B"})," using the factored form of A."]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"a-is-slu_nr",children:["A is ",(0,s.jsx)(n.code,{children:"SLU_NR"})]}),"\n",(0,s.jsxs)(n.p,{children:["If A is stored row-wise (",(0,s.jsx)(n.code,{children:"A->Stype = SLU_NR"}),"), apply the above algorithm to the transpose of A:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Permute columns of transpose(A) (rows of A), forming ",(0,s.jsx)(n.code,{children:"transpose(A)*Pc"}),", where Pc is a permutation matrix. For more details of this step, see ",(0,s.jsx)(n.code,{children:"sp_preorder.c"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Factor A as ",(0,s.jsx)(n.code,{children:"Pr*transpose(A)*Pc=L*U"})," with the permutation Pr determined by Gaussian elimination with partial pivoting. L is unit lower triangular with offdiagonal entries bounded by 1 in magnitude, and U is upper triangular."]}),"\n",(0,s.jsxs)(n.li,{children:["Solve the system of equations ",(0,s.jsx)(n.code,{children:"A*X=B"})," using the factored form of A."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.code,{children:"supermatrix.h"})," for the definition of 'SuperMatrix' structure."]})}),"\n",(0,s.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE dgssv(options, A, perm_c, perm_r, L, U, B, stat, info) &\n    & BIND(C, name=\"dgssv\")\n    IMPORT :: superlu_options_t, SuperLUStat_t, C_INT, C_PTR, &\n    & SuperMatrix\n    TYPE(superlu_options_t), INTENT(INOUT) :: options\n    ! options (input) superlu_options_t*\n    !         The structure defines the input parameters to control\n    !         how the LU decomposition will be performed and how the\n    !         system will be solved.\n    TYPE(SuperMatrix), INTENT(INOUT) :: A\n    ! A       (input) SuperMatrix*\n    !         Matrix A in A*X=B, of dimension (A->nrow, A->ncol). The number\n    !         of linear equations is A->nrow. Currently, the type of A can be:\n    !         Stype = SLU_NC or SLU_NR; Dtype = SLU_D; Mtype = SLU_GE.\n    !         In the future, more general A may be handled.\n    INTEGER(C_INT), INTENT(INOUT) :: perm_c(*)\n    ! perm_c  (input/output) int*\n    !         If A->Stype = SLU_NC, column permutation vector of size A->ncol\n    !         which defines the permutation matrix Pc; perm_c[i] = j means\n    !         column i of A is in position j in A*Pc.\n    !         If A->Stype = SLU_NR, column permutation vector of size A->nrow\n    !         which describes permutation of columns of transpose(A)\n    !         (rows of A) as described above.\n    !\n    !         If options->ColPerm = MY_PERMC or options->Fact = SamePattern or\n    !            options->Fact = SamePattern_SameRowPerm, it is an input argument.\n    !            On exit, perm_c may be overwritten by the product of the input\n    !            perm_c and a permutation that postorders the elimination tree\n    !            of Pc'*A'*A*Pc; perm_c is not changed if the elimination tree\n    !            is already in postorder.\n    !         Otherwise, it is an output argument.\n    INTEGER(C_INT), INTENT(INOUT) :: perm_r(*)\n    ! perm_r  (input/output) int*\n    !         If A->Stype = SLU_NC, row permutation vector of size A->nrow,\n    !         which defines the permutation matrix Pr, and is determined\n    !         by partial pivoting.  perm_r[i] = j means row i of A is in\n    !         position j in Pr*A.\n    !         If A->Stype = SLU_NR, permutation vector of size A->ncol, which\n    !         determines permutation of rows of transpose(A)\n    !         (columns of A) as described above.\n    !\n    !         If options->RowPerm = MY_PERMR or\n    !            options->Fact = SamePattern_SameRowPerm, perm_r is an\n    !            input argument.\n    !         otherwise it is an output argument.\n    TYPE(SuperMatrix), INTENT(INOUT) :: L\n    ! L       (output) SuperMatrix*\n    !         The factor L from the factorization\n    !             Pr*A*Pc=L*U              (if A->Stype = SLU_NC) or\n    !             Pr*transpose(A)*Pc=L*U   (if A->Stype = SLU_NR).\n    !         Uses compressed row subscripts storage for supernodes, i.e.,\n    !         L has types: Stype = SLU_SC, Dtype = SLU_D, Mtype = SLU_TRLU.\n    TYPE(SuperMatrix), INTENT(INOUT) :: U\n    ! U       (output) SuperMatrix*\n    !           The factor U from the factorization\n    !             Pr*A*Pc=L*U              (if A->Stype = SLU_NC) or\n    !             Pr*transpose(A)*Pc=L*U   (if A->Stype = SLU_NR).\n    !         Uses column-wise storage scheme, i.e., U has types:\n    !         Stype = SLU_NC, Dtype = SLU_D, Mtype = SLU_TRU.\n    TYPE(SuperMatrix), INTENT(INOUT) :: B\n    ! B       (input/output) SuperMatrix*\n    !         B has types: Stype = SLU_DN, Dtype = SLU_D, Mtype = SLU_GE.\n    !         On entry, the right hand side matrix.\n    !         On exit, the solution matrix if info = 0;\n    TYPE(SuperLUStat_t), INTENT(INOUT) :: stat\n    ! stat   (output) SuperLUStat_t*\n    !        Record the statistics on runtime and floating-point operation count.\n    !        See util.h for the definition of 'SuperLUStat_t'.\n    INTEGER(C_INT), INTENT(INOUT) :: info\n    ! info    (output) int*\n    !           = 0: successful exit\n    !         > 0: if info = i, and i is\n    !             <= A->ncol: U(i,i) is exactly zero. The factorization has\n    !                been completed, but the factor U is exactly singular,\n    !                so the solution could not be computed.\n    !             > A->ncol: number of bytes allocated when memory allocation\n    !                failure occurred, plus A->ncol.\n  END SUBROUTINE dgssv\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n","\n",(0,s.jsx)(a,{})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);