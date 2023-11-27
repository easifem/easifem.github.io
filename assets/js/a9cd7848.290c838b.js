"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[51580],{20915:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=s(85893),l=s(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D","Polynomial2D/GetStringForUID","Polynomial2D/GetCoeff","Polynomial2D/GetDegree"]},t="Polynomial2D example 4",r={id:"Polynomial2D/Polynomial2D_test_4",title:"Polynomial2D example 4",description:"This example shows the usage of [[Polynomial2D_]] class.",source:"@site/docs/docs-api/Polynomial2D/Polynomial2D_test_4.md",sourceDirName:"Polynomial2D",slug:"/Polynomial2D/Polynomial2D_test_4",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_4",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial2D/Polynomial2D_test_4.md",tags:[{label:"Polynomial2D",permalink:"/docs-api/tags/polynomial-2-d"},{label:"Polynomial2D/GetStringForUID",permalink:"/docs-api/tags/polynomial-2-d-get-string-for-uid"},{label:"Polynomial2D/GetCoeff",permalink:"/docs-api/tags/polynomial-2-d-get-coeff"},{label:"Polynomial2D/GetDegree",permalink:"/docs-api/tags/polynomial-2-d-get-degree"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D","Polynomial2D/GetStringForUID","Polynomial2D/GetCoeff","Polynomial2D/GetDegree"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial2D example 3",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_3"},next:{title:"Polynomial2D example 5",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_5"}},o={},m=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function c(e){const a={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"polynomial2d-example-4",children:"Polynomial2D example 4"}),"\n",(0,n.jsx)(a.p,{children:"This example shows the usage of [[Polynomial2D_]] class."}),"\n",(0,n.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[Polynomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial2D_) :: f1, f2\ntype(string) :: astr\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( :, : )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsx)(a.mn,{children:"1"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"y"}),(0,n.jsx)(a.mo,{children:"+"}),(0,n.jsx)(a.mi,{children:"x"}),(0,n.jsx)(a.mi,{children:"y"})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=1+x+y+xy"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord",children:"1"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(a.span,{className:"mbin",children:"+"}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  coeff = [1,1,1,1]\n  call reallocate( degree, 4, 2 )\n  degree(:,1) = [0,1,0,1]\n  degree(:,2) = [0,0,1,1]\n  call f1%initiate( coeff, degree, "x", "y" )\n  call f1%display( \'f(x,y)=\' )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetStringForUID"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  astr = f1%GetStringForUID()\n  CALL Display( astr, "astr = " )\n'})}),"\n",(0,n.jsxs)(a.p,{children:['!!! example "result"\nastr =x^0',(0,n.jsx)(a.em,{children:"y^0x^0"}),"y^1x^1",(0,n.jsx)(a.em,{children:"y^0x^1"}),"y^1"]}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetDegree"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  degree = f1%getDegree()\n  call display( degree, "degree = " )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetDisplayString"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  astr = f1%getDisplayString()\n  call display( astr, "display string = ")\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetCoeff"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  coeff = f1%getCoeff()\n  call display( coeff, "coeff = ")\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "GetOrder"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  call display( f1%getOrder(), "order = " )\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>r,a:()=>t});var n=s(67294);const l={},i=n.createContext(l);function t(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);