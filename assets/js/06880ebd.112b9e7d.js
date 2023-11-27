"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[56228],{40637:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>r});var l=n(85893),s=n(11151);const c={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D","Jacobi1D/BasisEval"]},o="Jacobi1D example 13",i={id:"Jacobi1D/Jacobi1D_test_13",title:"Jacobi1D example 13",description:"This example shows the usage of [[Jacobi1D]] class. We test BasisEval(). This is a developer level routine designed for [[JacobiSpace1D]]. Users should not use this subroutine.",source:"@site/docs/docs-api/Jacobi1D/Jacobi1D_test_13.md",sourceDirName:"Jacobi1D",slug:"/Jacobi1D/Jacobi1D_test_13",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_13",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Jacobi1D/Jacobi1D_test_13.md",tags:[{label:"Jacobi1D",permalink:"/docs-api/tags/jacobi-1-d"},{label:"Jacobi1D/BasisEval",permalink:"/docs-api/tags/jacobi-1-d-basis-eval"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D","Jacobi1D/BasisEval"]},sidebar:"tutorialSidebar",previous:{title:"Jacobi1D example 12",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_12"},next:{title:"Jacobi1D example 14",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_14"}},t={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3}];function d(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"jacobi1d-example-13",children:"Jacobi1D example 13"}),"\n",(0,l.jsxs)(e.p,{children:["This example shows the usage of [[Jacobi1D_]] class. We test ",(0,l.jsx)(e.code,{children:"BasisEval()"}),". This is a developer level routine designed for [[JacobiSpace1D_]]. Users should not use this subroutine."]}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Jacobi1D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Jacobi1D_) :: obj\ntype(String) :: astr\ninteger(i4b) :: ii, n\nreal( dfp ), parameter :: alpha=0.0, beta=0.0\nlogical( lgt ), parameter :: isOrthonormal = .FALSE., isMonic=.FALSE.\nreal( dfp ), allocatable :: coeff(:,:), scale(:,:), y( : )\nreal( dfp ) :: x\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n1",children:"n=1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=1\n  x = 1.0_DFP\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=1, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  call display( coeff, "coeff = ")\n  call display( scale, "scale = ")\n  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=1, alpha=0.0, beta=0.0) :=\n    coeff =\n----------------\n0.00000  2.00000\n    scale =\n----------------\n1.00000  0.70711\n  y =\n-------\n1.00000\n1.00000\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n2",children:"n=2"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=2\n  x = 0.0_DFP\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  call display( coeff, "coeff = ")\n  call display( scale, "scale = ")\n  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=2, alpha=0.0, beta=0.0) :=\n    coeff =\n----------------\n0.00000  2.00000\n0.00000  0.33333\n    scale =\n----------------\n1.00000  0.70711\n1.50000  1.50000\n  y =\n--------\n 1.00000\n 0.00000\n-0.50000\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n3",children:"n=3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=3\n  x = 0.0_DFP\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  call display( coeff, "coeff = ")\n  call display( scale, "scale = ")\n  y = obj%BasisEval( x=x, coeff=coeff, scale=scale )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=3, alpha=0.0, beta=0.0) :=\n    coeff =\n----------------\n0.00000  2.00000\n0.00000  0.33333\n0.00000  0.26667\n    scale =\n----------------\n1.00000  0.70711\n1.50000  1.50000\n1.66667  2.50000\n  y =\n--------\n 1.00000\n 0.00000\n-0.50000\n-0.00000\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>i,a:()=>o});var l=n(67294);const s={},c=l.createContext(s);function o(a){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function i(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:o(a.components),l.createElement(c.Provider,{value:e},a.children)}}}]);