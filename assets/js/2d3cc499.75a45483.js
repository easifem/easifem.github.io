"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96632],{90792:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var t=n(85893),i=n(11151);const s={title:"Lapack95 example 13",date:new Date("2022-12-20T00:00:00.000Z"),update:new Date("2022-12-20T00:00:00.000Z"),status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymGetInv"]},o=void 0,p={id:"Lapack95/Lapack95_test_13",title:"Lapack95 example 13",description:"This example shows the use of SymGetLU  and SymGetInv method defined in Lapack95.",source:"@site/docs/docs-api/Lapack95/Lapack95_test_13.md",sourceDirName:"Lapack95",slug:"/Lapack95/Lapack95_test_13",permalink:"/docs-api/Lapack95/Lapack95_test_13",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Lapack95/Lapack95_test_13.md",tags:[{label:"Examples",permalink:"/docs-api/tags/examples"},{label:"Lapack95",permalink:"/docs-api/tags/lapack-95"},{label:"matrix",permalink:"/docs-api/tags/matrix"},{label:"SymGetLU",permalink:"/docs-api/tags/sym-get-lu"},{label:"SymGetInv",permalink:"/docs-api/tags/sym-get-inv"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Lapack95 example 13",date:"2022-12-20T00:00:00.000Z",update:"2022-12-20T00:00:00.000Z",status:"none",docs:"none",extpkgs:"none",category:["Examples","Lapack95","Matrix"],tags:["Examples","Lapack95","matrix","SymGetLU","SymGetInv"]},sidebar:"tutorialSidebar",previous:{title:"Lapack95 example 12",permalink:"/docs-api/Lapack95/Lapack95_test_12"},next:{title:"Lapack95 example 14",permalink:"/docs-api/Lapack95/Lapack95_test_14"}},c={},l=[];function r(e){const a={code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the use of ",(0,t.jsx)(a.code,{children:"SymGetLU"}),"  and ",(0,t.jsx)(a.code,{children:"SymGetInv"})," method defined in Lapack95."]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"We get LU decomposition of A in LU."}),"\n",(0,t.jsx)(a.li,{children:"We get inverse in invA"}),"\n",(0,t.jsx)(a.li,{children:'uplo = "U"'}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nreal(dfp), allocatable :: LU(:, :), A(:,:), invA(:, :)\ninteger(i4b) :: info\ninteger(i4b), allocatable :: ipiv(:)\ncharacter(len=1) :: uplo\n\nallocate(LU(3,3), A(3,3),  invA(3,3), ipiv(3))\nA(1, :) = [6, 15, 55]\nA(2, :) = [15, 55, 225]\nA(3, :) = [55, 225, 979]\n\nCALL Display( A, "A = " )\n\nuplo = "U"\n\nCALL SymGetLU(A=A, LU=LU, UPLO=uplo, IPIV=ipiv, INFO=info)\nCALL Display( info, "info from GETLU= " )\n\nCALL SymGetInv(A=LU, invA=invA, IPIV=ipiv, UPLO=uplo, INFO=info)\n\nCALL Display( info, "info from  SymGetInv = " )\n\nCALL Display( MATMUL(A, Sym(invA, UPLO) ), " I = " )\nend program main\n'})})]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>p,a:()=>o});var t=n(67294);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function p(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);