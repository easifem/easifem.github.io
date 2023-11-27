"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12845],{22067:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>x,frontMatter:()=>m,metadata:()=>c,toc:()=>t});var l=a(85893),n=a(11151);const m={author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial3D"]},i="Polynomial3D example 1",c={id:"Polynomial3D/Polynomial3D_test_1",title:"Polynomial3D example 1",description:"This example shows the usage of [[Polynomial3D_]] class.",source:"@site/docs/docs-api/Polynomial3D/Polynomial3D_test_1.md",sourceDirName:"Polynomial3D",slug:"/Polynomial3D/Polynomial3D_test_1",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial3D/Polynomial3D_test_1.md",tags:[{label:"Polynomial3D",permalink:"/docs-api/tags/polynomial-3-d"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"26 July 2022",tags:["Polynomial3D"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/Polynomial3D/Polynomial3D_"},next:{title:"Polynomial2D example 2",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_2"}},r={},t=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,n.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"polynomial3d-example-1",children:"Polynomial3D example 1"}),"\n",(0,l.jsx)(e.p,{children:"This example shows the usage of [[Polynomial3D_]] class."}),"\n",(0,l.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[[Polynomial3D_]]"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nuse easifemBase\nuse easifemClasses\nimplicit none\ntype(Polynomial3D_) :: f1\nreal(dfp), allocatable :: coeff( : )\ninteger(i4b), allocatable :: degree( :, : )\n"})}),"\n",(0,l.jsx)(e.p,{children:'!!! note "Initiate"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mi,{children:"z"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+x+y+z"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,1,1,1]\n  call reallocate( degree, 4, 3 )\n  degree(:,1) = [0,1,0,0]\n  degree(:,2) = [0,0,1,0]\n  degree(:,3) = [0,0,0,1]\n  f1=Polynomial3D( coeff, degree, "x", "y", "z" )\n  call f1%display( \'f(x,y)=\' )\n'})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+1+1 y^1+1 z^1+1x^1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8641em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:'!!! note "Initiate"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsx)(e.mi,{children:"z"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+2x+3y+4z"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,2,3,4]\n  call reallocate( degree, 4, 3 )\n  degree(:,1) = [0,1,0,0]\n  degree(:,2) = [0,0,1,0]\n  degree(:,3) = [0,0,0,1]\n  f1=Polynomial3D( coeff, degree, "x", "y", "z" )\n  call f1%display( \'f(x,y)=\' )\n  call f1%deallocate()\n'})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"4"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+1+3 y^1+4 z^1+2x^1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"4"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8641em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.p,{children:'!!! note "Initiate"\nCheck duplicates.'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsx)(e.mi,{children:"z"})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"y=1+2x+3y+2z+2z"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:'  coeff = [1,2,3,2,2]\n  call reallocate( degree, 5, 3 )\n  degree(:,1) = [0,1,0,0,0]\n  degree(:,2) = [0,0,1,0,0]\n  degree(:,3) = [0,0,0,1,1]\n  f1=Polynomial3D( coeff, degree, "x", "y", "z" )\n  call f1%display( \'f(x,y)=\' )\n  call f1%deallocate()\n'})}),"\n",(0,l.jsx)(e.p,{children:'!!! example "result"'}),"\n",(0,l.jsx)(e.span,{className:"katex-display",children:(0,l.jsxs)(e.span,{className:"katex",children:[(0,l.jsx)(e.span,{className:"katex-mathml",children:(0,l.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(e.semantics,{children:[(0,l.jsxs)(e.mrow,{children:[(0,l.jsx)(e.mi,{children:"f"}),(0,l.jsx)(e.mo,{stretchy:"false",children:"("}),(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mo,{separator:"true",children:","}),(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mo,{stretchy:"false",children:")"}),(0,l.jsx)(e.mo,{children:"="}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"1"}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"3"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"y"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"z"}),(0,l.jsx)(e.mn,{children:"1"})]}),(0,l.jsx)(e.mo,{children:"+"}),(0,l.jsx)(e.mn,{children:"2"}),(0,l.jsxs)(e.msup,{children:[(0,l.jsx)(e.mi,{children:"x"}),(0,l.jsx)(e.mn,{children:"1"})]})]}),(0,l.jsx)(e.annotation,{encoding:"application/x-tex",children:"f(x,y)=+1+2 z^1+3 y^1+2 z^1+2x^1"})]})})}),(0,l.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,l.jsx)(e.span,{className:"mopen",children:"("}),(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"mpunct",children:","}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"mclose",children:")"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(e.span,{className:"mrel",children:"="}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"+"}),(0,l.jsx)(e.span,{className:"mord",children:"1"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(e.span,{className:"mord",children:"3"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(e.span,{className:"mbin",children:"+"}),(0,l.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,l.jsxs)(e.span,{className:"base",children:[(0,l.jsx)(e.span,{className:"strut",style:{height:"0.8641em"}}),(0,l.jsx)(e.span,{className:"mord",children:"2"}),(0,l.jsxs)(e.span,{className:"mord",children:[(0,l.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,l.jsx)(e.span,{className:"msupsub",children:(0,l.jsx)(e.span,{className:"vlist-t",children:(0,l.jsx)(e.span,{className:"vlist-r",children:(0,l.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,l.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,l.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(e.span,{className:"mord mtight",children:"1"})})]})})})})})]})]})]})]})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function x(s={}){const{wrapper:e}={...(0,n.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>c,a:()=>i});var l=a(67294);const n={},m=l.createContext(n);function i(s){const e=l.useContext(m);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(n):s.components||n:i(s.components),l.createElement(m.Provider,{value:e},s.children)}}}]);