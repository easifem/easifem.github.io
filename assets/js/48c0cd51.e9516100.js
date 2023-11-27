"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[57420],{10681:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>m,toc:()=>r});var l=a(85893),n=a(11151);const i={title:"Polynomial1D example 3",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial1D","Polynomial1D/GetCoeff","Polynomial1D/GetDegree","Polynomial1D/Grad"]},t="Polynomial1D example 3",m={id:"Polynomial1D/Polynomial1D_test_3",title:"Polynomial1D example 3",description:"- This example shows the usage of [[Polynomial1D_]] class.",source:"@site/docs/docs-api/Polynomial1D/Polynomial1D_test_3.md",sourceDirName:"Polynomial1D",slug:"/Polynomial1D/Polynomial1D_test_3",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial1D/Polynomial1D_test_3.md",tags:[{label:"Polynomial1D",permalink:"/docs-api/tags/polynomial-1-d"},{label:"Polynomial1D/GetCoeff",permalink:"/docs-api/tags/polynomial-1-d-get-coeff"},{label:"Polynomial1D/GetDegree",permalink:"/docs-api/tags/polynomial-1-d-get-degree"},{label:"Polynomial1D/Grad",permalink:"/docs-api/tags/polynomial-1-d-grad"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"Polynomial1D example 3",author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial1D","Polynomial1D/GetCoeff","Polynomial1D/GetDegree","Polynomial1D/Grad"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial1D example 2",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_2"},next:{title:"Polynomial1D example 4",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_4"}},c={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function o(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"polynomial1d-example-3",children:"Polynomial1D example 3"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"This example shows the usage of [[Polynomial1D_]] class."}),"\n",(0,l.jsx)(e.li,{children:"In this example we test following routines"}),"\n",(0,l.jsx)(e.li,{children:"[[Polynomial1D_#GetCoeff]]"}),"\n",(0,l.jsx)(e.li,{children:"[[Polynomial1D_#GetDegree]]"}),"\n",(0,l.jsx)(e.li,{children:"[[Polynomial1D_#Grad]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Polynomial1D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial1D_) :: f1, f2\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( : )\n"})}),"\n",(0,l.jsx)(e.p,{children:"Initiate the object."}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"2"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"3"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"3"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+x+x^2+x^3+x^3"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"  coeff = [1,1,1,1,1]\n  degree = [0,1,2,3,3]\n  f1=Polynomial1D( coeff=coeff, degree=degree, varname=\"x\" )\n  call f1%display( 'f(x)=' )\n"})}),"\n",(0,l.jsxs)(e.p,{children:["Note that we have repeated degree 3 two times. But the routine takes care of it. It will store only single monomial ",(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsx)(e.mrow,{children:(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"3"})]})}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"x^3"})]})})}),(0,l.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})})]})," and its coefficient 2."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nf(x)=+1+x+x^2+0.2E+1*(x)^3\n"})}),"\n",(0,l.jsx)(e.p,{children:"Getting the coefficients and degrees."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  call display( f1%getCoeff(), "coeff = ", orient="ROW")\n  call display( f1%getDegree(), "degree = ", orient="ROW")\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\n             coeff =\n----------------------------------\n1.00000  1.00000  1.00000  2.00000\n\n degree =\n----------\n0  1  2  3\n"})}),"\n",(0,l.jsx)(e.p,{children:"Getting the gradient in polynomial."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  f2 = f1%Grad()\n  CALL f2%Display( "f2 = " )\n'})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-txt",children:">result\nf2 =+1x^0+2x^1+6x^2\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(o,{...s})}):o(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var l=a(67294);const n={},i=l.createContext(n);function t(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:t(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);