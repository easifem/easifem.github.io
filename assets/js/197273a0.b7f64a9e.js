"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58583],{83222:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>t,contentTitle:()=>m,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(85893),l=a(11151);const i={author:"Vikas Sharma, Ph.D.",date:"14 Aug 2022"},m="Lagrange2D",r={id:"Lagrange2D/Lagrange2D_",title:"Lagrange2D",description:"Introduction",source:"@site/docs/docs-api/Lagrange2D/Lagrange2D_.md",sourceDirName:"Lagrange2D",slug:"/Lagrange2D/Lagrange2D_",permalink:"/docs-api/Lagrange2D/Lagrange2D_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Lagrange2D/Lagrange2D_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{author:"Vikas Sharma, Ph.D.",date:"14 Aug 2022"},sidebar:"tutorialSidebar",previous:{title:"Lagrange2D",permalink:"/docs-api/Lagrange2D/"},next:{title:"Lagrange2D example 1",permalink:"/docs-api/Lagrange2D/Lagrange2D_test_1"}},t={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Structure",id:"structure",level:2},{value:"Constructor Methods",id:"constructor-methods",level:2},{value:"Lagrange2D function",id:"lagrange2d-function",level:3}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"lagrange2d",children:"Lagrange2D"}),"\n",(0,n.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(e.p,{children:"Lagrange2D is a class for constructing lagrange polynomials in 2D. The polynomials set is extracted from Pascal's triangle. There are two possibility."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"P"}),(0,n.jsx)(e.mi,{children:"k"})]}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"{"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{children:"\u2264"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{fence:"true",children:"}"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"P_{k} := Span{\\left \\lbrace x_{1}^{p_1}x_{2}^{p_2}; p_{1}+p_{2} \\le k \\right \\rbrace }"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0486em",verticalAlign:"-0.2663em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Sp"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.7823em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4337em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.1809em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2663em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.7823em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4337em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.1809em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2663em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})})]})]})]})}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"Q"}),(0,n.jsx)(e.mi,{children:"k"})]}),(0,n.jsx)(e.mo,{children:":"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"S"}),(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"{"}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.mo,{separator:"true",children:";"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"1"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"\u2264"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mo,{fence:"true",children:"}"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"Q_{k} := Span{\\left \\lbrace x_{1}^{p_1}x_{2}^{p_2}; max(p_{1},p_{2}) \\le k \\right \\rbrace }"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8778em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Q"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:":="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0486em",verticalAlign:"-0.2663em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"Sp"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"{"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.7823em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4337em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.1809em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2663em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.7823em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4337em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.1809em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3173em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"0em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2663em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:";"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"ma"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2264"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:"}"})]})})]})]})]})}),"\n",(0,n.jsx)(e.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(e.p,{children:"[[Lagrange2D_]] is a child of [[Polynomial2D_]]."}),"\n",(0,n.jsx)(e.h2,{id:"constructor-methods",children:"Constructor Methods"}),"\n",(0,n.jsx)(e.h3,{id:"lagrange2d-function",children:"Lagrange2D function"}),"\n",(0,n.jsxs)(e.p,{children:["There is a generic function called ",(0,n.jsx)(e.code,{children:"Lagrange2D"}),". Currently, it has 3 interfaces."]}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Interface-1:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'INTERFACE\nMODULE FUNCTION Lagrange2D( i, x, order, name1, name2, pType ) &\n  & RESULT( ans )\n  INTEGER( I4B ), INTENT( IN ) :: i\n  !! ith lagrange polynomial\n  REAL( DFP ), INTENT( IN ) :: x( :, : )\n  !! interpolation points in $x_{iJ}$ format\n  INTEGER( I4B ), INTENT( IN ) :: order\n  !! order\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: pType\n  !! "P" or "Triangle"\n  !! "Q" or "Quadrangle"\n  TYPE( Lagrange2D_ ) :: ans\n  !! Polynomial in 2D\nEND FUNCTION Lagrange2D\nEND INTERFACE\n'})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"x(:,:)"})," is nodal coordinates in ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"J"})]})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x_{iJ}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3283em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," format."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Interface-2:"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'INTERFACE\nMODULE FUNCTION Lagrange2D( i, v, order, name1, name2, pType, &\n  & isVandermonde ) RESULT( ans )\n  INTEGER( I4B ), INTENT( IN ) :: i\n  !! ith lagrange polynomial\n  REAL( DFP ), INTENT( IN ) :: v( :, : )\n  !! Vandermonde matrix\n  INTEGER( I4B ), INTENT( IN ) :: order\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: pType\n  !! "P" or "Triangle"\n  !! "Q" or "Quadrangle"\n  LOGICAL( LGT ), INTENT( IN ) :: isVandermonde\n  !! This is just to resolve interface issue\n  TYPE( Lagrange2D_ ) :: ans\nEND FUNCTION Lagrange2D\nEND INTERFACE\n'})}),"\n",(0,n.jsx)(e.p,{children:(0,n.jsx)(e.strong,{children:"Interface-3:"})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'INTERFACE\nMODULE FUNCTION Lagrange2D( i, v, order, ipiv, name1, name2, pType) &\n  & RESULT( ans )\n  INTEGER( I4B ), INTENT( IN ) :: i\n  !! ith lagrange polynomial\n  REAL( DFP ), INTENT( INOUT ) :: v( :, : )\n  !! LU decomposition of Vandermonde matrix\n  INTEGER( I4B ), INTENT( IN ) :: order\n  INTEGER( I4B ), INTENT( IN ) :: ipiv( : )\n  !! inverse pivoting mapping, compes from LU decomposition\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n  !! variable name\n  CHARACTER( LEN = * ), INTENT( IN ) :: pType\n  !! "P" or "Triangle"\n  !! "Q" or "Quadrangle"\n  TYPE( Lagrange2D_ ) :: ans\nEND FUNCTION Lagrange2D\nEND INTERFACE\n'})})]})}function d(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>m});var n=a(67294);const l={},i=n.createContext(l);function m(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:m(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);