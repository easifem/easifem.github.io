"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45589],{43659:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>x,contentTitle:()=>d,default:()=>j,frontMatter:()=>m,metadata:()=>h,toc:()=>o});var n=a(85893),l=a(11151),r=a(74866),t=a(85162);function i(s){const e={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...s.components},{Details:a}=e;return a||function(s,e){throw new Error("Expected "+(e?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order\n  integer( i4b ), allocatable :: ans( :, : )\n  order=1\n  ans = LagrangeDegree_Triangle( order=order )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blankLines(nol=2)\n  order=2\n  ans = LagrangeDegree_Triangle( order=order )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blankLines(nol=2)\n  order=3\n  ans = LagrangeDegree_Triangle( order=order )\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blankLines(nol=2)\nend program main\n'})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(e.p,{children:"ans (order=1)="}),(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"n1"}),(0,n.jsx)(e.th,{children:"n2"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"1"})]})]})]}),(0,n.jsx)(e.p,{children:"ans (order=2)="}),(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"n1"}),(0,n.jsx)(e.th,{children:"n2"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"2"})]})]})]}),(0,n.jsx)(e.p,{children:"ans (order=3)="}),(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"n1"}),(0,n.jsx)(e.th,{children:"n2"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"3"})]})]})]}),(0,n.jsx)(e.p,{children:'!!! settings "cleanup"'})]})]})]})}function c(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(i,{...s})}):i(s)}const m={},d="LagrangeDegree",h={id:"TriangleInterpolationUtility/LagrangeDegree_Triangle",title:"LagrangeDegree",description:"Returns the polynomial space for constructing the Lagrange polynomials.",source:"@site/docs/docs-api/TriangleInterpolationUtility/LagrangeDegree_Triangle.md",sourceDirName:"TriangleInterpolationUtility",slug:"/TriangleInterpolationUtility/LagrangeDegree_Triangle",permalink:"/docs-api/TriangleInterpolationUtility/LagrangeDegree_Triangle",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TriangleInterpolationUtility/LagrangeDegree_Triangle.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LagrangeDOF",permalink:"/docs-api/TriangleInterpolationUtility/LagrangeDOF_Triangle"},next:{title:"LagrangeEvalAll",permalink:"/docs-api/TriangleInterpolationUtility/LagrangeEvalAll_Triangle"}},x={},o=[{value:"Interface",id:"interface",level:2}];function p(s){const e={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",munder:"munder",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"lagrangedegree",children:"LagrangeDegree"}),"\n",(0,n.jsx)(e.p,{children:"Returns the polynomial space for constructing the Lagrange polynomials."}),"\n",(0,n.jsx)(e.p,{children:"A Lagrange polynomial is given by"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"p"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"0"})]})]}),(0,n.jsxs)(e.munder,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"b"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"0"})]})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"a"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"b"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"p(x,y) = \\sum_{a=0}\\sum_{b=0} x^{a} y^{b}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"p"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.3521em",verticalAlign:"-1.3021em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8829em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2671em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.05em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8479em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.3021em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.7144em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8991em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})})]})})})})})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["Here span of ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"a"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mi,{children:"b"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x^{a}y^{b}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0435em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.6644em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"b"})})})]})})})})})]})]})})]})," is called the LagrangeDegree."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"as are given by first column of ans."}),"\n",(0,n.jsx)(e.li,{children:"bs are given by second column of ans."}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"For example for order = 3, we have the following degrees:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"3"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"2"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"y"}),(0,n.jsx)(e.mn,{children:"3"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"x^{0}y^{0}, x, x^2, x^3, y, xy, x^2 y, y^2, x y^2, y^3"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0585em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})})})]})})})})})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8641em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})})]})}),"\n",(0,n.jsx)(e.p,{children:"which is representd by:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"a"}),(0,n.jsx)(e.th,{children:"b"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"3"}),(0,n.jsx)(e.td,{children:"0"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"2"}),(0,n.jsx)(e.td,{children:"1"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"1"}),(0,n.jsx)(e.td,{children:"2"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"0"}),(0,n.jsx)(e.td,{children:"3"})]})]})]}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsxs)(t.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LagrangeDegree_Triangle(order) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n  END FUNCTION LagrangeDegree_Triangle\nEND INTERFACE\n"})}),(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.mdxAdmonitionTitle,{children:(0,n.jsx)(e.code,{children:"order"})}),(0,n.jsx)(e.p,{children:"Order of Lagrange polynomial"})]}),(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsx)(e.mdxAdmonitionTitle,{children:(0,n.jsx)(e.code,{children:"ans"})}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["The first col of ",(0,n.jsx)(e.code,{children:"ans"})," denotes the exponent of ",(0,n.jsx)(e.code,{children:"x"})]}),"\n",(0,n.jsxs)(e.li,{children:["The second col of ",(0,n.jsx)(e.code,{children:"ans"})," denotes the exponent of ",(0,n.jsx)(e.code,{children:"y"})]}),"\n"]})]})]}),(0,n.jsx)(t.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(c,{})}),(0,n.jsx)(t.Z,{value:"close",label:"\u21a2 "})]})]})}function j(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(p,{...s})}):p(s)}},85162:(s,e,a)=>{a.d(e,{Z:()=>t});a(67294);var n=a(86010);const l={tabItem:"tabItem_Ymn6"};var r=a(85893);function t(s){let{children:e,hidden:a,className:t}=s;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,t),hidden:a,children:e})}},74866:(s,e,a)=>{a.d(e,{Z:()=>f});var n=a(67294),l=a(86010),r=a(12466),t=a(16550),i=a(20469),c=a(91980),m=a(67392),d=a(50012);function h(s){return n.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,n.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(s){const{values:e,children:a}=s;return(0,n.useMemo)((()=>{const s=e??function(s){return h(s).map((s=>{let{props:{value:e,label:a,attributes:n,default:l}}=s;return{value:e,label:a,attributes:n,default:l}}))}(a);return function(s){const e=(0,m.l)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,a])}function o(s){let{value:e,tabValues:a}=s;return a.some((s=>s.value===e))}function p(s){let{queryString:e=!1,groupId:a}=s;const l=(0,t.k6)(),r=function(s){let{queryString:e=!1,groupId:a}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,c._X)(r),(0,n.useCallback)((s=>{if(!r)return;const e=new URLSearchParams(l.location.search);e.set(r,s),l.replace({...l.location,search:e.toString()})}),[r,l])]}function j(s){const{defaultValue:e,queryString:a=!1,groupId:l}=s,r=x(s),[t,c]=(0,n.useState)((()=>function(s){let{defaultValue:e,tabValues:a}=s;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!o({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((s=>s.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[m,h]=p({queryString:a,groupId:l}),[j,u]=function(s){let{groupId:e}=s;const a=function(s){return s?`docusaurus.tab.${s}`:null}(e),[l,r]=(0,d.Nk)(a);return[l,(0,n.useCallback)((s=>{a&&r.set(s)}),[a,r])]}({groupId:l}),g=(()=>{const s=m??j;return o({value:s,tabValues:r})?s:null})();(0,i.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:t,selectValue:(0,n.useCallback)((s=>{if(!o({value:s,tabValues:r}))throw new Error(`Can't select invalid tab value=${s}`);c(s),h(s),u(s)}),[h,u,r]),tabValues:r}}var u=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(85893);function y(s){let{className:e,block:a,selectedValue:n,selectValue:t,tabValues:i}=s;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,r.o5)(),d=s=>{const e=s.currentTarget,a=c.indexOf(e),l=i[a].value;l!==n&&(m(e),t(l))},h=s=>{let e=null;switch(s.key){case"Enter":d(s);break;case"ArrowRight":{const a=c.indexOf(s.currentTarget)+1;e=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(s.currentTarget)-1;e=c[a]??c[c.length-1];break}}e?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e),children:i.map((s=>{let{value:e,label:a,attributes:r}=s;return(0,N.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:s=>c.push(s),onKeyDown:h,onClick:d,...r,className:(0,l.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===e}),children:a??e},e)}))})}function b(s){let{lazy:e,children:a,selectedValue:l}=s;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const s=r.find((s=>s.props.value===l));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:r.map(((s,e)=>(0,n.cloneElement)(s,{key:e,hidden:s.props.value!==l})))})}function v(s){const e=j(s);return(0,N.jsxs)("div",{className:(0,l.Z)("tabs-container",g.tabList),children:[(0,N.jsx)(y,{...s,...e}),(0,N.jsx)(b,{...s,...e})]})}function f(s){const e=(0,u.Z)();return(0,N.jsx)(v,{...s,children:h(s.children)},String(e))}},11151:(s,e,a)=>{a.d(e,{Z:()=>i,a:()=>t});var n=a(67294);const l={},r=n.createContext(l);function t(s){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:t(s.components),n.createElement(r.Provider,{value:e},s.children)}}}]);