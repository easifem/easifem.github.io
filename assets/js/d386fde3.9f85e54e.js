"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[9595],{5487:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var s=n(85893),i=n(11151);const t={title:"Jacobi1D example 9",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["Jacobi1D/Initiate","Jacobi1D/Display","Jacobi1D/GaussRadauQuadrature"]},o="Jacobi1D example 9",r={id:"Jacobi1D/Jacobi1D_test_9",title:"Jacobi1D example 9",description:"This example shows the usage of [[Jacobi1D_]] class. We test GaussRadauQuadrature function in this routine, which returns the GaussRadauQuadrature points for Jacobi polynomial.",source:"@site/docs/docs-api/Jacobi1D/Jacobi1D_test_9.md",sourceDirName:"Jacobi1D",slug:"/Jacobi1D/Jacobi1D_test_9",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_9",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Jacobi1D/Jacobi1D_test_9.md",tags:[{label:"Jacobi1D/Initiate",permalink:"/docs-api/tags/jacobi-1-d-initiate"},{label:"Jacobi1D/Display",permalink:"/docs-api/tags/jacobi-1-d-display"},{label:"Jacobi1D/GaussRadauQuadrature",permalink:"/docs-api/tags/jacobi-1-d-gauss-radau-quadrature"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Jacobi1D example 9",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["Jacobi1D/Initiate","Jacobi1D/Display","Jacobi1D/GaussRadauQuadrature"]},sidebar:"tutorialSidebar",previous:{title:"Jacobi1D example 8",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_8"},next:{title:"Jacobi",permalink:"/docs-api/JacobiPolynomialUtility/"}},l={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function d(a){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...a.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"jacobi1d-example-9",children:"Jacobi1D example 9"}),"\n",(0,s.jsxs)(e.p,{children:["This example shows the usage of [[Jacobi1D_]] class. We test ",(0,s.jsx)(e.code,{children:"GaussRadauQuadrature"})," function in this routine, which returns the GaussRadauQuadrature points for Jacobi polynomial."]}),"\n",(0,s.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"[[Jacobi1D_]]"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Jacobi1D_) :: obj\nreal( dfp ), allocatable :: x( :, : )\ninteger( i4b ) :: n\nreal( dfp ), parameter :: a = -1.0_DFP, alpha=0.0_DFP, beta=0.0_DFP\n"})}),"\n",(0,s.jsx)(e.h3,{id:"n1",children:"n=1"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:'  n = 1\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,s.jsx)(e.h3,{id:"n2",children:"n=2"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:'  n = 2\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,s.jsx)(e.h3,{id:"n3",children:"n=3"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:'  n = 3\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,s.jsx)(e.h3,{id:"n4",children:"n=4"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:'  n = 4\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%GaussRadauQuadrature(a)\n  call display( x, "pt | wt for n="//tostring(n) )\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function u(a={}){const{wrapper:e}={...(0,i.a)(),...a.components};return e?(0,s.jsx)(e,{...a,children:(0,s.jsx)(d,{...a})}):d(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var s=n(67294);const i={},t=s.createContext(i);function o(a){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function r(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(i):a.components||i:o(a.components),s.createElement(t.Provider,{value:e},a.children)}}}]);