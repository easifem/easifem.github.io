"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[90143],{20312:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>L,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=n(85893),s=n(11151);const r={title:"Lapack95 example 15",date:new Date("2022-12-18T00:00:00.000Z"),update:new Date("2022-12-18T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLDL"]},i=void 0,c={id:"Lapack95/Lapack95_test_15",title:"Lapack95 example 15",description:"This example shows the use of SymGetLDL method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_15.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_15",permalink:"/docs-api/Lapack95/Lapack95_test_15",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_15.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetLDL",permalink:"/docs-api/tags/sym-get-ldl"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 15",date:"2022-12-18T00:00:00.000Z",update:"2022-12-18T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLDL"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 14",permalink:"/docs-api/Lapack95/Lapack95_test_14"},next:{title:"Lapack95 example 16",permalink:"/docs-api/Lapack95/Lapack95_test_16"}},o={},p=[];function l(e){const a={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the use of ",(0,t.jsx)(a.code,{children:"SymGetLDL"})," method defined in Lapack95."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifemBase\n  implicit none\n  real(dfp), allocatable :: LU(:, :), A(:,:), E(:), D(:), DD(:,:)\n  real(dfp) :: error\n  integer(i4b), allocatable :: ipiv(:)\n  integer(i4b) :: info, n\n  character(len=1) :: uplo\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  n = 10\n  allocate(LU(n,n), A(n,n), D(n), E(n), ipiv(n))\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-comment",children:"  CALL random_number(A)\n  A = A * 10\n  A = SYM(A)\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'A = RESHAPE( &\n    &[3.71, 2.18, 1.75, 4.93, 1.77, 8.82, 3.01, 8.06, 1.19, 2.87, &\n    & 2.18, 5.26, 0.68, 7.23, 4.78, 2.99, 2.75, 9.47, 2.4 , 2.43, &\n    & 1.75, 0.68, 4.4 , 2.46, 8.68, 8.71, 2.31, 3.77, 9.18, 2.04, &\n    & 4.93, 7.23, 2.46, 8.22, 4.45, 3.58, 9.73, 2.68, 6.14, 4.2 , &\n    & 1.77, 4.78, 8.68, 4.45, 2.85, 4.51, 7.61, 6.66, 2.71, 7.44, &\n    & 8.82, 2.99, 8.71, 3.58, 4.51, 7.68, 2.5 , 7.  , 5.91, 8.46, &\n    & 3.01, 2.75, 2.31, 9.73, 7.61, 2.5 , 6.99, 1.42, 0.89, 1.41, &\n    & 8.06, 9.47, 3.77, 2.68, 6.66, 7.  , 1.42, 4.65, 7.12, 6.34, &\n    & 1.19, 2.4 , 9.18, 6.14, 2.71, 5.91, 0.89, 7.12, 2.36, 1.06, &\n    & 2.87, 2.43, 2.04, 4.2 , 7.44, 8.46, 1.41, 6.34, 1.06, 8.48  &\n    & ], &\n    [10,10] &\n)\n\n!CALL Display(A, "A = ")\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  uplo = "L"\n\n  CALL SymGetLDL(A=A, LU=LU, D=D, E=E, UPLO=uplo, IPIV=ipiv, INFO=info)\n\n  IF( info .NE. 0 ) THEN\n    CALL Display( "Error in SymGetLDL error code = " // tostring(info)  )\n    STOP\n  ELSE\n    CALL Display( "Success in SymGetLDL " )\n  END IF\n\n  !CALL Display( D, "D = " )\n  !CALL Display( E, "E = " )\n  !CALL Display( LU, "LU = " )\n  !CALL Display( ipiv, "permutation = " )\n\n  error = MAXVAL(ABS(A - MATMUL(MATMUL( LU, Tridiag(d, e, e) ), TRANSPOSE(LU))))\n  CALL OK( SOFTEQ(error, zero, REAL(1.0E-10, DFP) ), " " )\n\nend program main\n'})})]})}function L(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);