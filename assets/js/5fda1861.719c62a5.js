"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[662],{92306:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(85893),s=n(11151);const r={title:"RealMatrix example 71",author:"Vikas Sharma, Ph. D.",date:"31 Jan 2022",update:"31 Jan 2022",tags:["RealMatrix/CG"]},i="RealVector example 71",l={id:"RealMatrix/RealMatrix_test_71",title:"RealMatrix example 71",description:'!!! note ""',source:"@site/docs/docs-api/RealMatrix/RealMatrix_test_71.md",sourceDirName:"RealMatrix",slug:"/RealMatrix/RealMatrix_test_71",permalink:"/docs-api/RealMatrix/RealMatrix_test_71",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/RealMatrix/RealMatrix_test_71.md",tags:[{label:"RealMatrix/CG",permalink:"/docs-api/tags/real-matrix-cg"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"RealMatrix example 71",author:"Vikas Sharma, Ph. D.",date:"31 Jan 2022",update:"31 Jan 2022",tags:["RealMatrix/CG"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/RealMatrix/RealMatrix_"},next:{title:"ex-1",permalink:"/docs-api/RealMatrix/ex-1"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"realvector-example-71",children:"RealVector example 71"}),"\n",(0,t.jsxs)(a.p,{children:['!!! note ""\nThis example show how to USE ',(0,t.jsx)(a.code,{children:"CG"})," method to solve ",(0,t.jsx)(a.code,{children:"Ax=b"})]}),"\n",(0,t.jsx)(a.h2,{id:"use-association",children:"Use association"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"[[RealMatrix_]]"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a.p,{children:'!!! note "Start the PROGRAM"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note "Declare variables"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"    REAL(DFP), ALLOCATABLE :: mat(:,:)\n    REAL(DFP), ALLOCATABLE :: rhs(:), sol(:), ans(:)\n    INTEGER(I4B) :: ii, n\n    REAL(DFP), PARAMETER :: tol=1.0E-6\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note "Make mat, and rhs"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"    n = 4\n    CALL Reallocate( mat, n, n )\n    DO ii = 1, n\n        mat(ii,ii)=1.0_DFP+sqrt(REAL(ii))\n    END DO\n    CALL display( mat, 'mat: ', advance='NO' )\n    CALL Reallocate( sol, n, rhs, n, ans, n )\n    CALL random_NUMBER( ans )\n    ans = ans*10.0_DFP\n    rhs = MATMUL(mat, ans)\n    CALL display( rhs, 'rhs: ', advance='NO' )\n    CALL display( ans, 'ans: ', advance='YES' )\n"})}),"\n",(0,t.jsx)(a.p,{children:'!!! note "LinearSolver_CG"'}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"    CALL LinearSolver_CG( mat=mat, sol=sol, rhs=rhs )\n    CALL OK( ALL( ABS(sol-ans) .LE. tol ) , 'CG: ' )\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function x(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>i});var t=n(67294);const s={},r=t.createContext(s);function i(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);