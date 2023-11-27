"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[40620],{39205:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>j,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>g});var r=n(85893),a=n(11151),t=n(74866),l=n(85162);function i(e){const s={annotation:"annotation",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifembase\nIMPLICIT NONE\nINTEGER(i4b) :: i1, i2, order\nTYPE(string) :: astr\nINTEGER(I4B), ALLOCATABLE :: deg(:, :)\norder = 1\ndeg = LagrangeDegree_Hexahedron(order=order)\n\nCALL display(mdencode(deg), "degrees: ")\n\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.p,{children:"degrees:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"a"}),(0,r.jsx)(s.th,{children:"b"}),(0,r.jsx)(s.th,{children:"c"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]})]})]}),(0,r.jsx)(s.span,{className:"katex-display",children:(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"z"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mi,{children:"z"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mi,{children:"z"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mi,{children:"z"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"1, x, y, xy, z, xz, yz, xyz "})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"yz"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"yz"})]})})]})})]})]})]})}function c(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function d(e){const s={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifembase\nIMPLICIT NONE\nINTEGER(i4b) :: i1, i2, order\nTYPE(string) :: astr\nINTEGER(I4B), ALLOCATABLE :: deg(:, :)\norder = 2\ndeg = LagrangeDegree_Hexahedron(order=order)\n\nCALL display(mdencode(deg), "degrees: ")\n\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.p,{children:"degrees:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"a"}),(0,r.jsx)(s.th,{children:"b"}),(0,r.jsx)(s.th,{children:"c"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"2"})]})]})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function m(e){const s={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifembase\nIMPLICIT NONE\nINTEGER(i4b) :: i1, i2, p, q, r\nTYPE(string) :: astr\nINTEGER(I4B), ALLOCATABLE :: deg(:, :)\np = 2; q = 1; r = 1\ndeg = LagrangeDegree_Hexahedron(p, q, r)\n\nCALL display(mdencode(deg), "degrees: ")\n\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(s.p,{children:"degrees:"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"a"}),(0,r.jsx)(s.th,{children:"b"}),(0,r.jsx)(s.th,{children:"c"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:"1"})]})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}const o={},j="LagrangeDegree",p={id:"HexahedronInterpolationUtility/LagrangeDegree_Hexahedron",title:"LagrangeDegree",description:"This subroutine returns the monomial degrees (basis) for lagrange polynomials.",source:"@site/docs/docs-api/HexahedronInterpolationUtility/LagrangeDegree_Hexahedron.md",sourceDirName:"HexahedronInterpolationUtility",slug:"/HexahedronInterpolationUtility/LagrangeDegree_Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/LagrangeDegree_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HexahedronInterpolationUtility/LagrangeDegree_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LagrangeDOF",permalink:"/docs-api/HexahedronInterpolationUtility/LagrangeDOF_Hexahedron"},next:{title:"LagrangeInDOF",permalink:"/docs-api/HexahedronInterpolationUtility/LagrangeInDOF_Hexahedron"}},u={},g=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function N(e){const s={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"lagrangedegree",children:"LagrangeDegree"}),"\n",(0,r.jsx)(s.p,{children:"This subroutine returns the monomial degrees (basis) for lagrange polynomials."}),"\n",(0,r.jsxs)(s.p,{children:["Lagrange polynomial of order ",(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"p"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"q"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"r"})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"p,q,r"})]})})}),(0,r.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"})]})})]})," is given by"]}),"\n",(0,r.jsx)(s.span,{className:"katex-display",children:(0,r.jsxs)(s.span,{className:"katex",children:[(0,r.jsx)(s.span,{className:"katex-mathml",children:(0,r.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,r.jsxs)(s.semantics,{children:[(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mi,{children:"l"}),(0,r.jsx)(s.mo,{stretchy:"false",children:"("}),(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"z"}),(0,r.jsx)(s.mo,{stretchy:"false",children:")"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mtext,{children:"span"}),(0,r.jsxs)(s.mrow,{children:[(0,r.jsx)(s.mo,{fence:"true",children:"{"}),(0,r.jsxs)(s.msup,{children:[(0,r.jsx)(s.mi,{children:"x"}),(0,r.jsx)(s.mi,{children:"a"})]}),(0,r.jsxs)(s.msup,{children:[(0,r.jsx)(s.mi,{children:"y"}),(0,r.jsx)(s.mi,{children:"b"})]}),(0,r.jsxs)(s.msup,{children:[(0,r.jsx)(s.mi,{children:"z"}),(0,r.jsx)(s.mi,{children:"c"})]}),(0,r.jsx)(s.mi,{mathvariant:"normal",children:"\u2223"}),(0,r.jsx)(s.mi,{children:"a"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mo,{children:"\u22ef"}),(0,r.jsx)(s.mtext,{children:"\u2009"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"p"}),(0,r.jsx)(s.mo,{separator:"true",children:";"}),(0,r.jsx)(s.mi,{children:"b"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mo,{children:"\u22ef"}),(0,r.jsx)(s.mtext,{children:"\u2009"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"q"}),(0,r.jsx)(s.mo,{separator:"true",children:";"}),(0,r.jsx)(s.mi,{children:"c"}),(0,r.jsx)(s.mo,{children:"="}),(0,r.jsx)(s.mn,{children:"0"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mn,{children:"1"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mo,{children:"\u22ef"}),(0,r.jsx)(s.mtext,{children:"\u2009"}),(0,r.jsx)(s.mo,{separator:"true",children:","}),(0,r.jsx)(s.mi,{children:"r"}),(0,r.jsx)(s.mo,{fence:"true",children:"}"})]})]}),(0,r.jsx)(s.annotation,{encoding:"application/x-tex",children:"l(x,y,z) = \\text{span} \\left\\{  x^{a} y^{b} z^{c} \\vert a=0,1,\\cdots, p; b=0, 1, \\cdots, q; c=0,1,\\cdots, r \\right\\}"})]})})}),(0,r.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(s.span,{className:"mopen",children:"("}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,r.jsx)(s.span,{className:"mclose",children:")"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,r.jsxs)(s.span,{className:"base",children:[(0,r.jsx)(s.span,{className:"strut",style:{height:"1.2491em",verticalAlign:"-0.35em"}}),(0,r.jsx)(s.span,{className:"mord text",children:(0,r.jsx)(s.span,{className:"mord",children:"span"})}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsxs)(s.span,{className:"minner",children:[(0,r.jsx)(s.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,r.jsx)(s.span,{className:"delimsizing size1",children:"{"})}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsx)(s.span,{className:"vlist-t",children:(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.7144em"},children:(0,r.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mathnormal mtight",children:"a"})})})]})})})})})]}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsx)(s.span,{className:"vlist-t",children:(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.8991em"},children:(0,r.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mathnormal mtight",children:"b"})})})]})})})})})]}),(0,r.jsxs)(s.span,{className:"mord",children:[(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"}),(0,r.jsx)(s.span,{className:"msupsub",children:(0,r.jsx)(s.span,{className:"vlist-t",children:(0,r.jsx)(s.span,{className:"vlist-r",children:(0,r.jsx)(s.span,{className:"vlist",style:{height:"0.7144em"},children:(0,r.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,r.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,r.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsx)(s.span,{className:"mord mtight",children:(0,r.jsx)(s.span,{className:"mord mathnormal mtight",children:"c"})})})]})})})})})]}),(0,r.jsx)(s.span,{className:"mord",children:"\u2223"}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"minner",children:"\u22ef"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,r.jsx)(s.span,{className:"mpunct",children:";"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"minner",children:"\u22ef"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,r.jsx)(s.span,{className:"mpunct",children:";"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mrel",children:"="}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.jsx)(s.span,{className:"mord",children:"0"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord",children:"1"}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"minner",children:"\u22ef"}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mpunct",children:","}),(0,r.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(s.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,r.jsx)(s.span,{className:"delimsizing size1",children:"}"})})]})]})]})]})}),"\n",(0,r.jsx)(s.p,{children:"Calling example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"degree = LagrangeDegree_Hexahedron(order)\ndegree = LagrangeDegree_Hexahedron(p, q, r)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"INTERFACE LagrangeDegree_Hexahedron\n  MODULE PURE FUNCTION LagrangeDegree_Hexahedron1(order) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n  END FUNCTION LagrangeDegree_Hexahedron1\nEND INTERFACE LagrangeDegree_Hexahedron\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,r.jsx)(c,{})}),(0,r.jsx)(l.Z,{value:"example2",label:"\u0700 Example 2",children:(0,r.jsx)(h,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(s.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-fortran",children:"INTERFACE LagrangeDegree_Hexahedron\n  MODULE PURE FUNCTION LagrangeDegree_Hexahedron2(p, q, r) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: p\n    INTEGER(I4B), INTENT(IN) :: q\n    INTEGER(I4B), INTENT(IN) :: r\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n  END FUNCTION LagrangeDegree_Hexahedron2\nEND INTERFACE LagrangeDegree_Hexahedron\n"})}),(0,r.jsxs)(s.admonition,{type:"note",children:[(0,r.jsx)(s.mdxAdmonitionTitle,{children:(0,r.jsx)(s.code,{children:"p, q, r"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"p"})," is order in x direction"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"q"})," is order in y direction"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"r"})," is order in z direction"]}),"\n"]})]})]}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(x,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function y(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(N,{...e})}):N(e)}},85162:(e,s,n)=>{n.d(s,{Z:()=>l});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var t=n(85893);function l(e){let{children:s,hidden:n,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:s})}},74866:(e,s,n)=>{n.d(s,{Z:()=>R});var r=n(67294),a=n(86010),t=n(12466),l=n(16550),i=n(20469),c=n(91980),d=n(67392),h=n(50012);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return m(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:a}}=e;return{value:s,label:n,attributes:r,default:a}}))}(n);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function o(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const a=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(t),(0,r.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(a.location.search);s.set(t,e),a.replace({...a.location,search:s.toString()})}),[t,a])]}function p(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,t=x(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!o({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:t}))),[d,m]=j({queryString:n,groupId:a}),[p,u]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,t]=(0,h.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:a}),g=(()=>{const e=d??p;return o({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!o({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),m(e),u(e)}),[m,u,t]),tabValues:t}}var u=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=n(85893);function y(e){let{className:s,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{const s=e.currentTarget,n=c.indexOf(s),a=i[n].value;a!==r&&(d(s),l(a))},m=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>c.push(e),onKeyDown:m,onClick:h,...t,className:(0,a.Z)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:a}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function f(e){const s=p(e);return(0,N.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,N.jsx)(y,{...e,...s}),(0,N.jsx)(b,{...e,...s})]})}function R(e){const s=(0,u.Z)();return(0,N.jsx)(f,{...e,children:m(e.children)},String(s))}},11151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>l});var r=n(67294);const a={},t=r.createContext(a);function l(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);