"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30651],{41359:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var i=n(85893),s=n(11151);const o={title:"Jacobi1D example 7",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["Jacobi1D/Initiate","Jacobi1D/Display","Jacobi1D/Zeros"]},t="Jacobi1D example 7",l={id:"Jacobi1D/Jacobi1D_test_7",title:"Jacobi1D example 7",description:"This example shows the usage of [[Jacobi1D_]] class. We test Zeros function in this routine, which returns the zeros of Jacobi polynomial.",source:"@site/docs/docs-api/Jacobi1D/Jacobi1D_test_7.md",sourceDirName:"Jacobi1D",slug:"/Jacobi1D/Jacobi1D_test_7",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Jacobi1D/Jacobi1D_test_7.md",tags:[{label:"Jacobi1D/Initiate",permalink:"/docs-api/tags/jacobi-1-d-initiate"},{label:"Jacobi1D/Display",permalink:"/docs-api/tags/jacobi-1-d-display"},{label:"Jacobi1D/Zeros",permalink:"/docs-api/tags/jacobi-1-d-zeros"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Jacobi1D example 7",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["Jacobi1D/Initiate","Jacobi1D/Display","Jacobi1D/Zeros"]},sidebar:"tutorialSidebar",previous:{title:"Jacobi1D example 6",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_6"},next:{title:"Jacobi1D example 8",permalink:"/docs-api/Jacobi1D/Jacobi1D_test_8"}},c={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function d(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"jacobi1d-example-7",children:"Jacobi1D example 7"}),"\n",(0,i.jsxs)(a.p,{children:["This example shows the usage of [[Jacobi1D_]] class. We test ",(0,i.jsx)(a.code,{children:"Zeros"})," function in this routine, which returns the zeros of Jacobi polynomial."]}),"\n",(0,i.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"[[Jacobi1D_]]"}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Jacobi1D_) :: obj\nreal( dfp ), allocatable :: x( : )\ninteger( i4b ) :: n\nreal( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP\n"})}),"\n",(0,i.jsx)(a.h3,{id:"n1",children:"n=1"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'  n = 1\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%zeros()\n  call display( x, "zeros for n="//tostring(n), orient="ROW" )\n'})}),"\n",(0,i.jsx)(a.h3,{id:"n2",children:"n=2"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'  n = 2\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%zeros()\n  call display( x, "zeros for n="//tostring(n), orient="ROW" )\n'})}),"\n",(0,i.jsx)(a.h3,{id:"n3",children:"n=3"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'  n = 3\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%zeros()\n  call display( x, "zeros for n="//tostring(n), orient="ROW" )\n'})}),"\n",(0,i.jsx)(a.h3,{id:"n4",children:"n=4"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'  n = 4\n  obj=Jacobi1D(varname="x", n=n, alpha=alpha, beta=beta)\n  x = obj%zeros()\n  call display( x, "zeros for n="//tostring(n), orient="ROW" )\n'})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function p(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>t});var i=n(67294);const s={},o=i.createContext(s);function t(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);