"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[27276],{86429:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>L,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(85893),i=t(11151);const s={title:"Lapack95 example 12",date:new Date("2022-12-20T00:00:00.000Z"),update:new Date("2022-12-20T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},o=void 0,c={id:"Lapack95/Lapack95_test_12",title:"Lapack95 example 12",description:"This example shows the use of SymGetLU  and SymLUSolve method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_12.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_12",permalink:"/docs-api/Lapack95/Lapack95_test_12",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_12.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetLU",permalink:"/docs-api/tags/sym-get-lu"},{label:"SymLUSolve",permalink:"/docs-api/tags/sym-lu-solve"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 12",date:"2022-12-20T00:00:00.000Z",update:"2022-12-20T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 11",permalink:"/docs-api/Lapack95/Lapack95_test_11"},next:{title:"Lapack95 example 13",permalink:"/docs-api/Lapack95/Lapack95_test_13"}},p={},l=[];function r(e){const a={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["This example shows the use of ",(0,n.jsx)(a.code,{children:"SymGetLU"}),"  and ",(0,n.jsx)(a.code,{children:"SymLUSolve"})," method defined in Lapack95."]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"We get LU decomposition of A in LU."}),"\n",(0,n.jsx)(a.li,{children:"In this example there are many rhs"}),"\n",(0,n.jsx)(a.li,{children:"The result is obtained in x, not in rhs"}),"\n",(0,n.jsx)(a.li,{children:'uplo = "U"'}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nreal(dfp), allocatable :: LU(:, :), A(:,:), RHS(:,:), X(:,:), xexact( :,: )\nreal(dfp) :: error\ninteger(i4b) :: info\ninteger(i4b), allocatable :: ipiv(:)\ncharacter(len=1) :: uplo\n\nallocate(LU(3,3), A(3,3),  RHS(3,4), X(3,4), xexact(3,4), ipiv(3))\nA(1, :) = [6, 15, 55]\nA(2, :) = [15, 55, 225]\nA(3, :) = [55, 225, 979]\nCALL RANDOM_NUMBER(xexact)\nxexact = xexact * 10.0\nRHS = MATMUL( A, xexact )\n\nCALL Display( A, "A = " )\nCALL Display( xexact, "xexact = " )\nCALL Display( RHS, "RHS = " )\n\nuplo = "U"\n\nCALL SymGetLU(A=A, LU=LU, UPLO=uplo, IPIV=ipiv, INFO=info)\nCALL Display( info, "info from GETLU= " )\n\nCALL SymLUSolve(A=LU, X=X, B=RHS, IPIV=ipiv, UPLO=uplo, INFO=info)\n\nCALL Display( X, " X = " )\nCALL Display( info, "info from LUSOLVE = " )\nCALL Display(MAXVAL(ABS(X - xexact ) ), "Error = ")\n\nend program main\n'})})]})}function L(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(r,{...e})}):r(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>o});var n=t(67294);const i={},s=n.createContext(i);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);