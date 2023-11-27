"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[64048],{60717:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>t,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var n=e(85893),l=e(11151);const i={title:"Polynomial1D example 5",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial1D","Polynomial1D/OPERATOR(-)"]},o="Polynomial1D example 6",c={id:"Polynomial1D/Polynomial1D_test_6",title:"Polynomial1D example 5",description:"- This example shows the usage of [[Polynomial1D_]] class.",source:"@site/docs/docs-api/Polynomial1D/Polynomial1D_test_6.md",sourceDirName:"Polynomial1D",slug:"/Polynomial1D/Polynomial1D_test_6",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_6",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial1D/Polynomial1D_test_6.md",tags:[{label:"Polynomial1D",permalink:"/docs-api/tags/polynomial-1-d"},{label:"Polynomial1D/OPERATOR(-)",permalink:"/docs-api/tags/polynomial-1-d-operator"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Polynomial1D example 5",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial1D","Polynomial1D/OPERATOR(-)"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial1D example 5",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_5"},next:{title:"Polynomial2D",permalink:"/docs-api/Polynomial2D/"}},t={},m=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function r(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"polynomial1d-example-6",children:"Polynomial1D example 6"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"This example shows the usage of [[Polynomial1D_]] class."}),"\n",(0,n.jsx)(a.li,{children:"In this example, we test subtraction operators."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Polynomial1D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial1D_) :: f1, f2, f3\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( : )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Mono- Mono"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f1=Monomial1D(1,"x") -  Monomial1D(2,"x")\n  call f1%display( \'f(x)=\' )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! example "result"'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"f"}),(0,n.jsx)(a.mo,{stretchy:"false",children:"("}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{stretchy:"false",children:")"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"1"})]}),(0,n.jsx)(a.mo,{children:"\u2212"}),(0,n.jsxs)(a.msup,{children:[(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mn,{children:"2"})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"f(x)=x^1- x^2"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,n.jsx)(a.span,{className:"mopen",children:"("}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mclose",children:")"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.8641em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"msupsub",children:(0,n.jsx)(a.span,{className:"vlist-t",children:(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(a.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(a.span,{className:"mord mtight",children:"2"})})]})})})})})]})]})]})]})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Mono- Scalar"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f1 = Monomial1D(1,"x") -  1\n  call f1%display("f(x)=")\n  !!\n  f1 = Monomial1D(1,"x") -  1.0\n  call f1%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Scalar- Mono"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f1 = 1 -  Monomial1D(1,"x")\n  call f1%display("f(x)=")\n  !!\n  f1 = 1.0 -  Monomial1D(1,"x")\n  call f1%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Poly- Mono"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f2 = f1 -  Monomial1D(2,"x")\n  call f2%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Mono- Poly"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f2 = Monomial1D(2,"x") -  f1\n  call f2%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Poly- Poly"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f2 = f2 -  f1\n  call f2%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Poly- Scalar"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f2 = f1 -  1\n  call f2%display("f(x)=")\n  !!\n  f2 = f1 -  1.0\n  call f2%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Scalar- Poly"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  f2 = 1 -  f1\n  call f2%display("f(x)=")\n  !!\n  f2 = 1.0 -  f1\n  call f2%display("f(x)=")\n  !!\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:a}={...(0,l.a)(),...s.components};return a?(0,n.jsx)(a,{...s,children:(0,n.jsx)(r,{...s})}):r(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>c,a:()=>o});var n=e(67294);const l={},i=n.createContext(l);function o(s){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function c(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:o(s.components),n.createElement(i.Provider,{value:a},s.children)}}}]);