"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[23937],{40617:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var n=t(85893),a=t(11151);const i={title:"ChebyshevFirst1D example 5",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["ChebyshevFirst1D/Initiate","ChebyshevFirst1D/Display","ChebyshevFirst1D/EvalGradient"]},r="ChebyshevFirst1D example 5",h={id:"ChebyshevFirst1D/ChebyshevFirst1D_test_5",title:"ChebyshevFirst1D example 5",description:"This example shows the usage of [[ChebyshevFirst1D_]] class. We test EvalGradient in this routine. the argument of EvalGradient is vector in this routine.",source:"@site/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_5.md",sourceDirName:"ChebyshevFirst1D",slug:"/ChebyshevFirst1D/ChebyshevFirst1D_test_5",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_5.md",tags:[{label:"ChebyshevFirst1D/Initiate",permalink:"/docs-api/tags/chebyshev-first-1-d-initiate"},{label:"ChebyshevFirst1D/Display",permalink:"/docs-api/tags/chebyshev-first-1-d-display"},{label:"ChebyshevFirst1D/EvalGradient",permalink:"/docs-api/tags/chebyshev-first-1-d-eval-gradient"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"ChebyshevFirst1D example 5",author:"Vikas Sharma, Ph.D.",date:"02 Aug 2022",tags:["ChebyshevFirst1D/Initiate","ChebyshevFirst1D/Display","ChebyshevFirst1D/EvalGradient"]},sidebar:"tutorialSidebar",previous:{title:"ChebyshevFirst1D example 4",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_4"},next:{title:"ChebyshevFirst1D example 6",permalink:"/docs-api/ChebyshevFirst1D/ChebyshevFirst1D_test_6"}},l={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2},{value:"n=1",id:"n1",level:3},{value:"n=2",id:"n2",level:3},{value:"n=3",id:"n3",level:3},{value:"n=4",id:"n4",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"chebyshevfirst1d-example-5",children:"ChebyshevFirst1D example 5"}),"\n",(0,n.jsxs)(s.p,{children:["This example shows the usage of [[ChebyshevFirst1D_]] class. We test ",(0,n.jsx)(s.code,{children:"EvalGradient"})," in this routine. the argument of ",(0,n.jsx)(s.code,{children:"EvalGradient"})," is vector in this routine."]}),"\n",(0,n.jsx)(s.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"[[ChebyshevFirst1D_]]"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(ChebyshevFirst1D_) :: obj\ntype(String) :: astr\ninteger(i4b) :: ii, n\nreal( dfp ), allocatable :: x(:), yexact(:), y(:)\nreal( dfp ) :: tol=1.0E-10\n"})}),"\n",(0,n.jsx)(s.h3,{id:"n1",children:"n=1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  x = linspace(0.0_DFP, 1.0_DFP, 11_I4B)\n  yexact = ones(11, 1)\n  n=1\n  obj = ChebyshevFirst1D(varname="x", n=n)\n  y = obj%EvalGradient( x )\n  call OK( ALL( y .APPROXEQ. yexact), "test-1:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n2",children:"n=2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 4.0*x\n  n=2\n  obj = ChebyshevFirst1D(varname="x", n=n)\n  y = obj%EvalGradient( x )\n  call OK(ALL(y .APPROXEQ. yexact), "test-2:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n3",children:"n=3"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 12.0*x**2 - 3.0\n  n=3\n  obj = ChebyshevFirst1D(varname="x", n=n)\n  y = obj%EvalGradient( x )\n  call OK(ALL( SOFTEQ( y, yexact, tol=tol )), "test-3:" )\n'})}),"\n",(0,n.jsx)(s.h3,{id:"n4",children:"n=4"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  yexact = 32.0*x**3 - 16.0*x\n  n=4\n  obj = ChebyshevFirst1D(varname="x", n=n)\n  y = obj%EvalGradient( x )\n  call OK(ALL( SOFTEQ( y, yexact, tol=tol )), "test-4:"  )\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function o(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>h,a:()=>r});var n=t(67294);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);