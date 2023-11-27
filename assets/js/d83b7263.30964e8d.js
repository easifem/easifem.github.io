"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76558],{5981:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var t=a(85893),s=a(11151);const i={title:"Lapack95 example 9",date:new Date("2022-12-20T00:00:00.000Z"),update:new Date("2022-12-20T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},o=void 0,c={id:"Lapack95/Lapack95_test_9",title:"Lapack95 example 9",description:"This example shows the use of SymGetLU  and SymLUSolve method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_9.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_9",permalink:"/docs-api/Lapack95/Lapack95_test_9",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_9.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetLU",permalink:"/docs-api/tags/sym-get-lu"},{label:"SymLUSolve",permalink:"/docs-api/tags/sym-lu-solve"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 9",date:"2022-12-20T00:00:00.000Z",update:"2022-12-20T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymLUSolve"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 8",permalink:"/docs-api/Lapack95/Lapack95_test_8"},next:{title:"LeftCauchyGreen",permalink:"/docs-api/LeftCauchyGreen/"}},l={},r=[];function p(e){const n={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example shows the use of ",(0,t.jsx)(n.code,{children:"SymGetLU"}),"  and ",(0,t.jsx)(n.code,{children:"SymLUSolve"})," method defined in Lapack95."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We get LU decomposition of A in LU."}),"\n",(0,t.jsx)(n.li,{children:"In this example there is only one rhs"}),"\n",(0,t.jsx)(n.li,{children:"The result is obtained in x, not in rhs"}),"\n",(0,t.jsx)(n.li,{children:'uplo = "U"'}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nreal(dfp), allocatable :: LU(:, :), A(:,:), RHS(:), X(:), xexact( : )\nreal(dfp) :: error\ninteger(i4b) :: info\ninteger(i4b), allocatable :: ipiv(:)\ncharacter(len=1) :: uplo\n\nallocate(LU(3,3), A(3,3),  RHS(3), X(3), xexact(3), ipiv(3))\nA(1, :) = [6, 15, 55]\nA(2, :) = [15, 55, 225]\nA(3, :) = [55, 225, 979]\nCALL RANDOM_NUMBER(xexact)\nxexact = xexact * 10.0\nRHS = MATMUL( A, xexact )\n\nCALL Display( A, "A = " )\nCALL Display( xexact, "xexact = " )\nCALL Display( RHS, "RHS = " )\n\nuplo = "U"\n\nCALL SymGetLU(A=A, LU=LU, UPLO=uplo, IPIV=ipiv, INFO=info)\nCALL Display( info, "info from GETLU= " )\n\nCALL SymLUSolve(A=LU, X=X, B=RHS, IPIV=ipiv, UPLO=uplo, INFO=info)\n\nCALL Display( X, " X = " )\nCALL Display( info, "info from LUSOLVE = " )\nCALL Display(MAXVAL(ABS(X - xexact ) ), "Error = ")\n\nend program main\n'})}),"\n",(0,t.jsx)(n.p,{children:"Results"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"           A =\n-------------------------\n  6.000   15.000   55.000\n 15.000   55.000  225.000\n 55.000  225.000  979.000\n\nxexact =\n---------\n 4.36801\n 2.67817\n 0.09787\n\n RHS =\n-------\n 71.764\n234.841\n938.646\n\ninfo from GETLU= 0\n\n  X =\n-------\n4.36801\n2.67817\n0.09787\n\ninfo from LUSOLVE = 0\n\nError = 9.32587E-15\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var t=a(67294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);