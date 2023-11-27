"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69216],{79280:(a,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var n=s(85893),l=s(11151);const i={author:"Vikas Sharma, Ph.D.",date:"18 Aug 2022",update:"18 Aug 2022",tags:["Monomial3D","Monomial3D/Display","Monomial3D/EvalGradient"]},t="Monomial3D example 4",m={id:"Monomial3D/Monomial3D_test_4",title:"Monomial3D example 4",description:"- This example shows the usage of [[Monomial3D_]] class. Following methods are tested.",source:"@site/docs/docs-api/Monomial3D/Monomial3D_test_4.md",sourceDirName:"Monomial3D",slug:"/Monomial3D/Monomial3D_test_4",permalink:"/docs-api/Monomial3D/Monomial3D_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Monomial3D/Monomial3D_test_4.md",tags:[{label:"Monomial3D",permalink:"/docs-api/tags/monomial-3-d"},{label:"Monomial3D/Display",permalink:"/docs-api/tags/monomial-3-d-display"},{label:"Monomial3D/EvalGradient",permalink:"/docs-api/tags/monomial-3-d-eval-gradient"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"18 Aug 2022",update:"18 Aug 2022",tags:["Monomial3D","Monomial3D/Display","Monomial3D/EvalGradient"]},sidebar:"tutorialSidebar",previous:{title:"Monomial3D example 3",permalink:"/docs-api/Monomial3D/Monomial3D_test_3"},next:{title:"Monomial3D example 5",permalink:"/docs-api/Monomial3D/Monomial3D_test_5"}},o={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(a){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"monomial3d-example-4",children:"Monomial3D example 4"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"This example shows the usage of [[Monomial3D_]] class. Following methods are tested."}),"\n",(0,n.jsx)(e.li,{children:"[[Monomial3D_#EvalGradient]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[Monomial3D_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Monomial3D_) :: obj\ninteger(I4B) :: n1, n2, n3\ncharacter(len=*), parameter :: varname1="x", varname2="y", varname3="z"\nreal( dfp ) :: x, y, z, ans, avar\nreal( dfp ), parameter :: tol=1.0E-10\n'})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nInitiate the following monomial.'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"f"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"z"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=x^2 y z"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"yz"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"  n1=2; n2=1; n3=1\n  obj=Monomial3D( n1=n1, n2=n2, n3=n3, varname1=varname1, &\n    & varname2=varname2, varname3=varname3 )\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "EvalGradient"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  x = 2.0; y = 3.0; z = 4.0\n  ans = 2 * x * y * z\n  avar = obj%EvalGradient(x,y,z, dim=1)\n  CALL OK( SOFTEQ(ans, avar, tol), "test-4" )\n  !!\n  ans = x**2 * z\n  avar = obj%EvalGradient(x,y,z, dim=2)\n  CALL OK( SOFTEQ(ans, avar, tol), "test-4" )\n  !!\n  ans = x**2 * y\n  avar = obj%EvalGradient(x,y,z, dim=3)\n  CALL OK( SOFTEQ(ans, avar, tol), "test-4" )\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(a={}){const{wrapper:e}={...(0,l.a)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(c,{...a})}):c(a)}},11151:(a,e,s)=>{s.d(e,{Z:()=>m,a:()=>t});var n=s(67294);const l={},i=n.createContext(l);function t(a){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function m(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(l):a.components||l:t(a.components),n.createElement(i.Provider,{value:e},a.children)}}}]);