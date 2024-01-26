"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37227],{36155:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>i,default:()=>d,frontMatter:()=>m,metadata:()=>c,toc:()=>r});var n=a(85893),l=a(11151);const m={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D"]},i="Polynomial2D example 2",c={id:"Polynomial3D/Polynomial3D_test_2",title:"Polynomial2D example 2",description:"This example shows the usage of [[Polynomial2D_]] class.",source:"@site/docs/docs-api/Polynomial3D/Polynomial3D_test_2.md",sourceDirName:"Polynomial3D",slug:"/Polynomial3D/Polynomial3D_test_2",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Polynomial3D/Polynomial3D_test_2.md",tags:[{label:"Polynomial2D",permalink:"/docs-api/tags/polynomial-2-d"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial3D example 1",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_1"},next:{title:"Polynomial2D example 3",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_3"}},t={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"polynomial2d-example-2",children:"Polynomial2D example 2"}),"\n",(0,n.jsx)(e.p,{children:"This example shows the usage of [[Polynomial2D_]] class."}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[Polynomial2D_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial2D_) :: f1\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( :, : )\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+x+y+xy"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,1,1,1]\n  call reallocate( degree, 4, 2 )\n  degree(:,1) = [0,1,0,1]\n  degree(:,2) = [0,0,1,1]\n  f1=Polynomial2D( coeff=coeff, &\n    & degree=degree, name1="x", name2="y" )\n  call f1%display( \'f(x,y)=\' )\n  call f1%deallocate()\n'})}),"\n",(0,n.jsxs)(e.p,{children:['!!! example "result"\nf(x,y)=+1x^0',(0,n.jsx)(e.em,{children:"y^1+1x^0"}),"y^0+1x^1",(0,n.jsx)(e.em,{children:"y^1+1x^1"}),"y^0"]}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+2x+3y+4xy"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,2,3,4]\n  call reallocate( degree, 4, 2 )\n  degree(:,1) = [0,1,0,1]\n  degree(:,2) = [0,0,1,1]\n  f1=Polynomial2D( coeff=coeff, degree=degree, &\n    & name1="x", name2="y" )\n  call f1%display( \'f(x,y)=\' )\n  call f1%deallocate()\n'})}),"\n",(0,n.jsxs)(e.p,{children:['!!! example "result"\nf(x,y)=+1x^0',(0,n.jsx)(e.em,{children:"y^1+1x^0"}),"y^0+1x^1",(0,n.jsx)(e.em,{children:"y^1+1x^1"}),"y^0"]}),"\n",(0,n.jsx)(e.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"3"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsx)(e.mn,{children:"4"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+2x+3y+4xy"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord",children:"2"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"3"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(e.span,{className:"mord",children:"4"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,2,3,2,2]\n  call reallocate( degree, 5, 2 )\n  degree(:,1) = [0,1,0,1,1]\n  degree(:,2) = [0,0,1,1,1]\n  f1=Polynomial2D( coeff=coeff, degree=degree, &\n    & name1="x", name2="y" )\n  call f1%display( \'f(x,y)=\' )\n  call f1%deallocate()\n'})}),"\n",(0,n.jsxs)(e.p,{children:['!!! example "result"\nf(x,y)=+1x^0',(0,n.jsx)(e.em,{children:"y^1+1x^0"}),"y^0+1x^1",(0,n.jsx)(e.em,{children:"y^1+1x^1"}),"y^0"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>i});var n=a(67294);const l={},m=n.createContext(l);function i(s){const e=n.useContext(m);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(m.Provider,{value:e},s.children)}}}]);