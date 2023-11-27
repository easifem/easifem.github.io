"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65170],{6138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(85893),s=a(11151);const i={},r="GetQuadraturePoints",o={id:"QuadraturePoint/GetQuadraturePoints",title:"GetQuadraturePoints",description:"This subroutine returns the quadrature points stored inside QuadraturePoint_ object.",source:"@site/docs/docs-api/QuadraturePoint/GetQuadraturePoints.md",sourceDirName:"QuadraturePoint",slug:"/QuadraturePoint/GetQuadraturePoints",permalink:"/docs-api/QuadraturePoint/GetQuadraturePoints",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/QuadraturePoint/GetQuadraturePoints.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GaussLegendreRadauRight",permalink:"/docs-api/QuadraturePoint/GaussLegendreRadauRightQuadrature"},next:{title:"GetTotalQuadraturePoints",permalink:"/docs-api/QuadraturePoint/GetTotalQuadraturePoints"}},l={},c=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function d(e){const t={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getquadraturepoints",children:"GetQuadraturePoints"}),"\n",(0,n.jsx)(t.p,{children:"This subroutine returns the quadrature points stored inside QuadraturePoint_ object."}),"\n",(0,n.jsx)(t.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE GetQuadraturePoints( obj, point, weight, num )\n  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( INOUT ) :: point( 3 )\n    !! [xi, eta, zeta]\n  REAL( DFP ), INTENT( INOUT ) :: weight\n    !! weights\n  INTEGER( I4B ), INTENT( IN ) :: num\n    !! quadrature number\nEND SUBROUTINE GetQuadraturePoints\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.code,{children:"point"})}),(0,n.jsxs)(t.p,{children:["Point contains the ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mo,{stretchy:"false",children:"("}),(0,n.jsx)(t.mi,{children:"\u03be"}),(0,n.jsx)(t.mo,{separator:"true",children:","}),(0,n.jsx)(t.mi,{children:"\u03b7"}),(0,n.jsx)(t.mo,{separator:"true",children:","}),(0,n.jsx)(t.mi,{children:"\u03b6"}),(0,n.jsx)(t.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"(\\xi, \\eta, \\zeta)"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(t.span,{className:"mopen",children:"("}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.04601em"},children:"\u03be"}),(0,n.jsx)(t.span,{className:"mpunct",children:","}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03b7"}),(0,n.jsx)(t.span,{className:"mpunct",children:","}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.07378em"},children:"\u03b6"}),(0,n.jsx)(t.span,{className:"mclose",children:")"})]})})]})," coordinate of a quadrature point."]})]}),"\n",(0,n.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE GetQuadraturePoints( obj, point, weight )\n  CLASS( QuadraturePoint_ ), INTENT( IN ) :: obj\n  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: point( :, : )\n    !! Point( :, j ) = [xi, eta, zeta] of jth quadrature point\n  REAL( DFP ), ALLOCATABLE, INTENT( INOUT ) :: weight( : )\n    !! Weight(j) weight of jth quadrature point\nEND SUBROUTINE GetQuadraturePoints\n"})}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsx)(t.mdxAdmonitionTitle,{children:(0,n.jsx)(t.code,{children:"point"})}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Point denotes the quadrature points."}),"\n",(0,n.jsxs)(t.li,{children:["Point always has three rows. The first row corresponds to the first local coordinate, ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsx)(t.mrow,{children:(0,n.jsx)(t.mi,{children:"\u03be"})}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\xi"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.04601em"},children:"\u03be"})]})})]}),", the second to second local coordiante, ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsx)(t.mrow,{children:(0,n.jsx)(t.mi,{children:"\u03b7"})}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\eta"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"\u03b7"})]})})]}),", and the third to the third local coordinate, ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsx)(t.mrow,{children:(0,n.jsx)(t.mi,{children:"\u03b6"})}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"\\zeta"})]})})}),(0,n.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",style:{marginRight:"0.07378em"},children:"\u03b6"})]})})]}),"."]}),"\n",(0,n.jsx)(t.li,{children:"The number of col of Point equals to the total number of quadrature points."}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(67294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);