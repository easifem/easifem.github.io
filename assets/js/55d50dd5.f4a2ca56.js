"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[52935],{21634:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(85893),l=a(11151),t=a(74866),i=a(85162);const r={},c="GetILUD",m={id:"CSRMatrix/GetILUD",title:"GetILUD",description:"This routine computes the ILU factorization with standard threshold dropping",source:"@site/docs/docs-api/CSRMatrix/GetILUD.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/GetILUD",permalink:"/docs-api/CSRMatrix/GetILUD",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/GetILUD.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDiagonal",permalink:"/docs-api/CSRMatrix/GetDiagonal"},next:{title:"GetILUDP",permalink:"/docs-api/CSRMatrix/GetILUDP"}},h={},d=[{value:"Interface",id:"interface",level:2}];function o(s){const e={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msub:"msub",mtext:"mtext",munderover:"munderover",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,l.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"getilud",children:"GetILUD"}),"\n",(0,n.jsxs)(e.p,{children:["This routine computes the ILU factorization with standard threshold dropping: at ith step of elimination, an element ",(0,n.jsx)(e.code,{children:"a(i,j)"})," in row i is dropped if it satisfies the following criterion:"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mtext,{children:"\xa0tol\xa0"}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{children:"~"})]}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{separator:"true",children:","})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\vert a(i,j) \\vert < \\text{ tol } \\times  \\tilde{a}_{i},"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord text",children:(0,n.jsx)(e.span,{className:"mord",children:"\xa0tol\xa0"})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8623em",verticalAlign:"-0.1944em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"})]}),(0,n.jsxs)(e.span,{style:{top:"-3.35em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.25em"},children:(0,n.jsx)(e.span,{className:"mord",children:"~"})})]})]})})})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mpunct",children:","})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["where ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{children:"~"})]}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\tilde{a}_{i}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8179em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"})]}),(0,n.jsxs)(e.span,{style:{top:"-3.35em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.25em"},children:(0,n.jsx)(e.span,{className:"mord",children:"~"})})]})]})})})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," is average magnitude of elements in row i of ",(0,n.jsx)(e.code,{children:"A"}),", which is given by:"]}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{children:"~"})]}),(0,n.jsx)(e.mi,{children:"i"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mn,{children:"1"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"z"})]}),(0,n.jsx)(e.mi,{children:"i"})]})]}),(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"z"}),(0,n.jsx)(e.mi,{children:"i"})]})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{separator:"true",children:","}),(0,n.jsx)(e.mi,{children:"j"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2223"})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\tilde{a}_{i} = \\frac{1}{{nnz}_{i}}\\sum_{j}^{nnz_{i}}{\\vert a(i,j) \\vert}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8179em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6679em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"})]}),(0,n.jsxs)(e.span,{style:{top:"-3.35em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.25em"},children:(0,n.jsx)(e.span,{className:"mord",children:"~"})})]})]})})})}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.0763em",verticalAlign:"-1.4138em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"nn"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord",children:(0,n.jsx)(e.span,{className:"mord",children:"1"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.836em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.6625em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05724em"},children:"j"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3111em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"nn"}),(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3281em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.357em",marginLeft:"-0.044em",marginRight:"0.0714em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.143em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.4138em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",children:"\u2223"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mpunct",children:","}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05724em"},children:"j"}),(0,n.jsx)(e.span,{className:"mclose",children:")"}),(0,n.jsx)(e.span,{className:"mord",children:"\u2223"})]})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["where, ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"z"})]}),(0,n.jsx)(e.mi,{children:"i"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"{nnz}_{i}"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5806em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"nn"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]})," is the number of nonzeros in ith row."]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"There is no control on memory size required for the factors as is done in ILUT."}),"\n",(0,n.jsxs)(e.li,{children:["This routine computes also various diagonal compensation ILU's such, MILU. These are defined through the parameter ",(0,n.jsx)(e.code,{children:"alpha"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.admonition,{type:"caution",children:(0,n.jsx)(e.p,{children:"All diagonal elements of the input matrix must be nonzero."})}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface 1",default:!0,children:[(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE GetILUD(obj, ALU, JLU, JU, alpha, droptol)\nTYPE(CSRMatrix*), INTENT(INOUT) :: obj\nREAL(DFP), ALLOCATABLE, INTENT(INOUT) :: ALU(:)\nINTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JLU(:)\nINTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: JU(:)\nREAL(DFP), INTENT(IN) :: alpha\nREAL(DFP), INTENT(IN) :: droptol\nEND SUBROUTINE GetILUD\nEND INTERFACE\n"})}),(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"alpha"})," = diagonal compensation parameter, alpha ",(0,n.jsx)(e.code,{children:"*"})," (sum of all dropped out elements in a given row) is added to the diagonal element of U of the factorization, therefore:"]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"alph = 0"})," means the scheme is ILU with threshold, that is, no compensation"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.code,{children:"alph = 1"})," means the scheme is MILU with threshold."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"droptol"})," = Threshold parameter for dropping small terms in the factorization. During the elimination, a term ",(0,n.jsx)(e.code,{children:"a(i,j)"})," is dropped whenever ",(0,n.jsx)(e.code,{children:"abs (a(i,j)) .lt. tol"})]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"nnz"})," the number of NNZ elements in the row."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"obj"})," matrix stored in Compressed Sparse Row format."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"ALU,JLU"}),", matrix stored in Modified Sparse Row (MSR) Format containing the L and U factors together. The diagonal (stored in ALU(1",":n",") ) is inverted. Each ith row of the ALU,JLU matrix contains the ith row of L (excluding the diagonal entry=1) followed by the ith row of U."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"JU"})," = integer array of length n containing the pointers to the beginning of each row of U in the matrix ALU,JLU."]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"droptol"})," it governs the theresholding in L and U. Any element whose MAGNITUDE is less than some tolerance (relative to the abs value of diagonal element in U) is dropped."]}),"\n"]}),"\n"]})]}),(0,n.jsxs)(i.Z,{value:"iface2",label:"\u0700 Interface 2",children:[(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetILUD(obj, Pmat, alpha, droptol)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    TYPE(CSRMatrix_), INTENT(INOUT) :: Pmat\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: droptol\n  END SUBROUTINE GetILUD\nEND INTERFACE\n"})}),(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.p,{children:["This routine call interface 1, and returns ILU factorization in Pmat, which is an instance of ",(0,n.jsx)(e.code,{children:"CSRMatrix_"})]})})]}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function p(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(o,{...s})}):o(s)}},85162:(s,e,a)=>{a.d(e,{Z:()=>i});a(67294);var n=a(86010);const l={tabItem:"tabItem_Ymn6"};var t=a(85893);function i(s){let{children:e,hidden:a,className:i}=s;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a,children:e})}},74866:(s,e,a)=>{a.d(e,{Z:()=>b});var n=a(67294),l=a(86010),t=a(12466),i=a(16550),r=a(20469),c=a(91980),m=a(67392),h=a(50012);function d(s){return n.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,n.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(s){const{values:e,children:a}=s;return(0,n.useMemo)((()=>{const s=e??function(s){return d(s).map((s=>{let{props:{value:e,label:a,attributes:n,default:l}}=s;return{value:e,label:a,attributes:n,default:l}}))}(a);return function(s){const e=(0,m.l)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,a])}function p(s){let{value:e,tabValues:a}=s;return a.some((s=>s.value===e))}function x(s){let{queryString:e=!1,groupId:a}=s;const l=(0,i.k6)(),t=function(s){let{queryString:e=!1,groupId:a}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,c._X)(t),(0,n.useCallback)((s=>{if(!t)return;const e=new URLSearchParams(l.location.search);e.set(t,s),l.replace({...l.location,search:e.toString()})}),[t,l])]}function j(s){const{defaultValue:e,queryString:a=!1,groupId:l}=s,t=o(s),[i,c]=(0,n.useState)((()=>function(s){let{defaultValue:e,tabValues:a}=s;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((s=>s.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:t}))),[m,d]=x({queryString:a,groupId:l}),[j,u]=function(s){let{groupId:e}=s;const a=function(s){return s?`docusaurus.tab.${s}`:null}(e),[l,t]=(0,h.Nk)(a);return[l,(0,n.useCallback)((s=>{a&&t.set(s)}),[a,t])]}({groupId:l}),N=(()=>{const s=m??j;return p({value:s,tabValues:t})?s:null})();(0,r.Z)((()=>{N&&c(N)}),[N]);return{selectedValue:i,selectValue:(0,n.useCallback)((s=>{if(!p({value:s,tabValues:t}))throw new Error(`Can't select invalid tab value=${s}`);c(s),d(s),u(s)}),[d,u,t]),tabValues:t}}var u=a(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function v(s){let{className:e,block:a,selectedValue:n,selectValue:i,tabValues:r}=s;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,t.o5)(),h=s=>{const e=s.currentTarget,a=c.indexOf(e),l=r[a].value;l!==n&&(m(e),i(l))},d=s=>{let e=null;switch(s.key){case"Enter":h(s);break;case"ArrowRight":{const a=c.indexOf(s.currentTarget)+1;e=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(s.currentTarget)-1;e=c[a]??c[c.length-1];break}}e?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e),children:r.map((s=>{let{value:e,label:a,attributes:t}=s;return(0,g.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:s=>c.push(s),onKeyDown:d,onClick:h,...t,className:(0,l.Z)("tabs__item",N.tabItem,t?.className,{"tabs__item--active":n===e}),children:a??e},e)}))})}function f(s){let{lazy:e,children:a,selectedValue:l}=s;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const s=t.find((s=>s.props.value===l));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((s,e)=>(0,n.cloneElement)(s,{key:e,hidden:s.props.value!==l})))})}function y(s){const e=j(s);return(0,g.jsxs)("div",{className:(0,l.Z)("tabs-container",N.tabList),children:[(0,g.jsx)(v,{...s,...e}),(0,g.jsx)(f,{...s,...e})]})}function b(s){const e=(0,u.Z)();return(0,g.jsx)(y,{...s,children:d(s.children)},String(e))}},11151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>i});var n=a(67294);const l={},t=n.createContext(l);function i(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:i(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);