"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15629],{17677:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>r});var l=n(85893),s=n(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D","Jacobi1D/BasisEvalGradient"]},c="Jacobi1D example 16",o={id:"Jacobi1D/Jacobi1D_test_16",title:"Jacobi1D example 16",description:"This example shows the usage of [[Jacobi1D]] class. We test BasisEvalGradient(). This is a developer level routine designed for [[JacobiSpace1D]]. Users should not use this subroutine.",source:"@site/docs/docs-api/Jacobi1D/Jacobi1D_test_16.md",sourceDirName:"Jacobi1D",slug:"/Jacobi1D/Jacobi1D_test_16",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_16",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Jacobi1D/Jacobi1D_test_16.md",tags:[{label:"Jacobi1D",permalink:"/docs-api/tags/jacobi-1-d"},{label:"Jacobi1D/BasisEvalGradient",permalink:"/docs-api/tags/jacobi-1-d-basis-eval-gradient"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Jacobi1D","Jacobi1D/BasisEvalGradient"]},sidebar:"tutorialSidebar",previous:{title:"Jacobi1D example 15",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_15"},next:{title:"Jacobi1D example 2",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_2"}},t={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3}];function d(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...a.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"jacobi1d-example-16",children:"Jacobi1D example 16"}),"\n",(0,l.jsxs)(e.p,{children:["This example shows the usage of [[Jacobi1D_]] class. We test ",(0,l.jsx)(e.code,{children:"BasisEvalGradient()"}),". This is a developer level routine designed for [[JacobiSpace1D_]]. Users should not use this subroutine."]}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Jacobi1D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Jacobi1D_) :: obj\ntype(String) :: astr\ninteger(i4b) :: ii, n\nreal( dfp ), parameter :: alpha=0.0, beta=0.0\nlogical( lgt ), parameter :: isOrthonormal = .FALSE., isMonic=.FALSE.\nreal( dfp ), allocatable :: coeff(:,:), scale(:,:), y( : )\nreal( dfp ) :: x\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n1",children:"n=1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=1\n  x = -1.0_DFP\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=1, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  y = obj%BasisEvalGradient( x=x, coeff=coeff, scale=scale, n=n )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=1, alpha=0.0, beta=0.0) :=\n  y =\n-------\n0.00000\n1.00000\n\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n2",children:"n=2"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=2\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=2, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  y = obj%BasisEvalGradient( x=x, coeff=coeff, scale=scale, n=n )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=2, alpha=0.0, beta=0.0) :=\n  y =\n--------\n 0.00000\n 1.00000\n-3.00000\n\n"})}),"\n",(0,l.jsx)(e.h3,{id:"n3",children:"n=3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  n=3\n  obj = Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta, &\n    & isOrthonormal=isOrthonormal, isMonic=isMonic )\n  call Display( "J(n=3, alpha=0.0, beta=0.0) := " )\n  call reallocate( coeff, n, 2)\n  call reallocate( scale, n, 2)\n  call obj%getCoeffScale( n=n, coeff=coeff, scale=scale, &\n    & isMonic=isMonic, isOrthonormal=isOrthonormal )\n  y = obj%BasisEvalGradient( x=x, coeff=coeff, scale=scale, n=n )\n  call display( y, "y = ")\n  call obj%Deallocate()\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nJ(n=3, alpha=0.0, beta=0.0) :=\n  y =\n--------\n 0.00000\n 1.00000\n-3.00000\n 6.00000\n\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(a={}){const{wrapper:e}={...(0,s.a)(),...a.components};return e?(0,l.jsx)(e,{...a,children:(0,l.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>o,a:()=>c});var l=n(67294);const s={},i=l.createContext(s);function c(a){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(s):a.components||s:c(a.components),l.createElement(i.Provider,{value:e},a.children)}}}]);