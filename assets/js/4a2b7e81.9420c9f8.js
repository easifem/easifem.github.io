"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65414],{26274:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var l=a(85893),n=a(11151);const i={author:"Vikas Sharma, Ph.D.",date:"12 Aug 2022",tags:["Polynomial2D","Polynomial2D/Grad"]},m="Polynomial2D example 6",c={id:"Polynomial3D/Polynomial3D_test_6",title:"Polynomial2D example 6",description:"This example shows the usage of [[Polynomial2D_]] class. In this example we test Assign method. Following operations are allowed.",source:"@site/docs/docs-api/Polynomial3D/Polynomial3D_test_6.md",sourceDirName:"Polynomial3D",slug:"/Polynomial3D/Polynomial3D_test_6",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_6",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial3D/Polynomial3D_test_6.md",tags:[{label:"Polynomial2D",permalink:"/docs-api/tags/polynomial-2-d"},{label:"Polynomial2D/Grad",permalink:"/docs-api/tags/polynomial-2-d-grad"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"12 Aug 2022",tags:["Polynomial2D","Polynomial2D/Grad"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial2D example 5",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_5"},next:{title:"Polynomial2D example 7",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_7"}},t={},r=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"polynomial2d-example-6",children:"Polynomial2D example 6"}),"\n",(0,l.jsxs)(e.p,{children:["This example shows the usage of [[Polynomial2D_]] class. In this example we test ",(0,l.jsx)(e.code,{children:"Assign"})," method. Following operations are allowed."]}),"\n",(0,l.jsxs)(e.ul,{className:"contains-task-list",children:["\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","obj=obj"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","obj=mono2"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","obj=1"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{className:"task-list-item",children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.input,{type:"checkbox",checked:!0,disabled:!0})," ","obj=1.0"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"obj"})," is an instance of [[Polynomial2D_]]"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"mono"})," is an instance of [[Monomial2D_]]"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Polynomial2D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial2D_) :: f1\ntype(Monomial2D_) :: m1\n"})}),"\n",(0,l.jsx)(e.p,{children:'!!! note "Initiate"\nInitiate the [[Monomial2D_]] object.'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"m"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mi,{children:"y"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"m=xy"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"m"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  m1 = Monomial2D( 1,1,"x","y" )\n  f1 = m1\n  call f1%display( \'f(x,y)=\' )\n'})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+1x^1*y^1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:'!!! note "Initiate"\nNow we assign a polynomial a scalar value.'}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"  f1 = 2\n  call f1%display( 'f(x,y)=')\n"})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"0"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+2x^0*y^0"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"  f1 = 2.0\n  call f1%display( 'f(x,y)=')\n"})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"0"})]}),(0,l.jsx)(e.mo,{children:"\u2217"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"0"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+2x^0*y^0"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"0"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>m});var l=a(67294);const n={},i=l.createContext(n);function m(s){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:m(s.components),l.createElement(i.Provider,{value:e},s.children)}}}]);