"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[59426],{86220:(s,a,e)=>{e.r(a),e.d(a,{assets:()=>c,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>r});var l=e(85893),n=e(11151);const i={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D","Polynomial2D/Eval","Polynomial2D/EvalGradiend"]},m="Polynomial2D example 3",t={id:"Polynomial2D/Polynomial2D_test_3",title:"Polynomial2D example 3",description:"This example shows the usage of [[Polynomial2D_]] class.",source:"@site/docs/docs-api/Polynomial2D/Polynomial2D_test_3.md",sourceDirName:"Polynomial2D",slug:"/Polynomial2D/Polynomial2D_test_3",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial2D/Polynomial2D_test_3.md",tags:[{label:"Polynomial2D",permalink:"/docs-api/tags/polynomial-2-d"},{label:"Polynomial2D/Eval",permalink:"/docs-api/tags/polynomial-2-d-eval"},{label:"Polynomial2D/EvalGradiend",permalink:"/docs-api/tags/polynomial-2-d-eval-gradiend"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial2D","Polynomial2D/Eval","Polynomial2D/EvalGradiend"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial2D example 2",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_2"},next:{title:"Polynomial2D example 4",permalink:"/docs-api/Polynomial2D/Polynomial2D_test_4"}},c={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.h1,{id:"polynomial2d-example-3",children:"Polynomial2D example 3"}),"\n",(0,l.jsx)(a.p,{children:"This example shows the usage of [[Polynomial2D_]] class."}),"\n",(0,l.jsx)(a.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"[[Polynomial2D_]]"}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial2D_) :: f1, f2\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( :, : )\nreal(dfp) :: exact, ans, x, y\nreal(dfp) :: tol=1.0E-10\n"})}),"\n",(0,l.jsx)(a.p,{children:'!!! note "Initiate"\nInitiate the object.'}),"\n",(0,l.jsx)(a.span,{className:"katex-display",children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mi,{children:"x"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mi,{children:"y"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mi,{children:"x"}),(0,l.jsx)(a.mi,{children:"y"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"y=1+x+y+xy"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:'  coeff = [1,1,1,1]\n  call reallocate( degree, 4, 2 )\n  degree(:,1) = [0,1,0,1]\n  degree(:,2) = [0,0,1,1]\n  call f1%initiate( coeff, degree, "x", "y" )\n  call f1%display( \'f(x,y)=\' )\n'})}),"\n",(0,l.jsx)(a.p,{children:'!!! note "Eval"'}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  x = 1.0; y=1.0\n  ans = f1%Eval( x, y )\n  exact = 1+x+y+x*y\n  CALL ISABS( ans, exact, tol )\n  !!\n  x = 1.0; y=0.0\n  ans = f1%Eval( x, y )\n  exact = 1+x+y+x*y\n  CALL ISABS( ans, exact, tol)\n"})}),"\n",(0,l.jsxs)(a.p,{children:['!!! note "EvalGradient"\nGetting the value ',(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsxs)(a.mfrac,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"f"})]}),(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"x"})]})]})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dx}"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1.2772em",verticalAlign:"-0.345em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(a.span,{className:"mfrac",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsxs)(a.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,l.jsxs)(a.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(a.span,{className:"mord mtight",children:[(0,l.jsx)(a.span,{className:"mord mathnormal mtight",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal mtight",children:"x"})]})})]}),(0,l.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(a.span,{style:{top:"-3.4461em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"df"})})})]})]}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(a.span,{})})})]})}),(0,l.jsx)(a.span,{className:"mclose nulldelimiter"})]})]})})]}),"."]}),"\n",(0,l.jsx)(a.span,{className:"katex-display",children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsxs)(a.mfrac,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"f"})]}),(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"x"})]})]}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mi,{children:"y"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dx} = 1+y"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"2.0574em",verticalAlign:"-0.686em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(a.span,{className:"mfrac",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsxs)(a.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,l.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]}),(0,l.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"mord",children:(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.686em"},children:(0,l.jsx)(a.span,{})})})]})}),(0,l.jsx)(a.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  x=1.0; y=1.0\n  ans = f1%EvalGradient( x, y, dim=1_I4B )\n  exact = 1+y\n  CALL ISABS( ans, exact, tol)\n"})}),"\n",(0,l.jsxs)(a.p,{children:['!!! note "EvalGradient"\nGetting the value ',(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsx)(a.mrow,{children:(0,l.jsxs)(a.mfrac,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"f"})]}),(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"y"})]})]})}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dy}"})]})})}),(0,l.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"1.4133em",verticalAlign:"-0.4811em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(a.span,{className:"mfrac",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsxs)(a.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,l.jsxs)(a.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(a.span,{className:"mord mtight",children:[(0,l.jsx)(a.span,{className:"mord mathnormal mtight",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})]})})]}),(0,l.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(a.span,{style:{top:"-3.4461em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(a.span,{className:"mord mtight",children:(0,l.jsx)(a.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"df"})})})]})]}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.4811em"},children:(0,l.jsx)(a.span,{})})})]})}),(0,l.jsx)(a.span,{className:"mclose nulldelimiter"})]})]})})]}),"."]}),"\n",(0,l.jsx)(a.span,{className:"katex-display",children:(0,l.jsxs)(a.span,{className:"katex",children:[(0,l.jsx)(a.span,{className:"katex-mathml",children:(0,l.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(a.semantics,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsxs)(a.mfrac,{children:[(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"f"})]}),(0,l.jsxs)(a.mrow,{children:[(0,l.jsx)(a.mi,{children:"d"}),(0,l.jsx)(a.mi,{children:"y"})]})]}),(0,l.jsx)(a.mo,{children:"="}),(0,l.jsx)(a.mn,{children:"1"}),(0,l.jsx)(a.mo,{children:"+"}),(0,l.jsx)(a.mi,{children:"x"})]}),(0,l.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dy} = 1+x"})]})})}),(0,l.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"2.2519em",verticalAlign:"-0.8804em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(a.span,{className:"mfrac",children:(0,l.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(a.span,{className:"vlist-r",children:[(0,l.jsxs)(a.span,{className:"vlist",style:{height:"1.3714em"},children:[(0,l.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsxs)(a.span,{className:"mord",children:[(0,l.jsx)(a.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]}),(0,l.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,l.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(a.span,{className:"mord",children:(0,l.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"df"})})]})]}),(0,l.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(a.span,{className:"vlist-r",children:(0,l.jsx)(a.span,{className:"vlist",style:{height:"0.8804em"},children:(0,l.jsx)(a.span,{})})})]})}),(0,l.jsx)(a.span,{className:"mclose nulldelimiter"})]}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(a.span,{className:"mrel",children:"="}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(a.span,{className:"mord",children:"1"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(a.span,{className:"mbin",children:"+"}),(0,l.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(a.span,{className:"base",children:[(0,l.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(a.span,{className:"mord mathnormal",children:"x"})]})]})]})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"  x=1.0; y=0.0\n  ans = f1%EvalGradient( x, y, dim=2_I4B )\n  exact = 1+x\n  CALL ISABS( ans, exact, tol)\n"})}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:a}={...(0,n.a)(),...s.components};return a?(0,l.jsx)(a,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},11151:(s,a,e)=>{e.d(a,{Z:()=>t,a:()=>m});var l=e(67294);const n={},i=l.createContext(n);function m(s){const a=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(a):{...a,...s}}),[a,s])}function t(s){let a;return a=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:m(s.components),l.createElement(i.Provider,{value:a},s.children)}}}]);