"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[32641],{81388:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>h,default:()=>p,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var n=a(85893),r=a(11151),t=a(74866),l=a(85162);function i(e){const s={blockquote:"blockquote",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This example shows the usage of ",(0,n.jsx)(s.code,{children:"UltrasphericalGaussRadauQuadrature"})," method."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Note that this routine returns n+1 quadrature points and one of the points will be end point."}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: pt( : ), wt( : )\n  real( dfp ), parameter :: left=-1.0, right=1.0, lambda=0.5_DFP\n  type(string) :: msg, astr\n  real( dfp ) :: a\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",metastring:'title "left, order=1"',children:"  n = 1; a=left; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Ultraspherical Gauss Radau points, n+1 = 2"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-1"}),(0,n.jsx)(s.td,{children:"0.5"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.33333"}),(0,n.jsx)(s.td,{children:"1.5"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",metastring:'title "left, order=2"',children:"  n = 2; a=left; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Ultraspherical Gauss Radau points, n+1 = 3"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-1"}),(0,n.jsx)(s.td,{children:"0.22222"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.2899"}),(0,n.jsx)(s.td,{children:"1.025"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.6899"}),(0,n.jsx)(s.td,{children:"0.75281"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",metastring:'title "left, order=3"',children:"  n = 3; a=left; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Ultraspherical Gauss Radau points, n+1 = 4"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-1"}),(0,n.jsx)(s.td,{children:"0.125"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.57532"}),(0,n.jsx)(s.td,{children:"0.65769"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.18107"}),(0,n.jsx)(s.td,{children:"0.77639"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.82282"}),(0,n.jsx)(s.td,{children:"0.44092"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",metastring:'title "left, order=4"',children:"  n = 4; a=left; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Ultraspherical Gauss Radau points, n+1 = 5"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-1"}),(0,n.jsx)(s.td,{children:"8E-02"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.72048"}),(0,n.jsx)(s.td,{children:"0.44621"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.16718"}),(0,n.jsx)(s.td,{children:"0.62365"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.44631"}),(0,n.jsx)(s.td,{children:"0.56271"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.88579"}),(0,n.jsx)(s.td,{children:"0.28743"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",metastring:'title "right, order=1"',children:"  n = 4; a=right; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Ultraspherical Gauss Radau points, n+1 = 5"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.88579"}),(0,n.jsx)(s.td,{children:"0.28743"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.44631"}),(0,n.jsx)(s.td,{children:"0.56271"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.16718"}),(0,n.jsx)(s.td,{children:"0.62365"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.72048"}),(0,n.jsx)(s.td,{children:"0.44621"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"1"}),(0,n.jsx)(s.td,{children:"8E-02"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    call reallocate( pt, n+1, wt, n+1 )\n    call UltrasphericalGaussRadauQuadrature( a=a, n=n, &\n      & pt=pt, wt=wt, lambda=lambda )\n    msg="Ultraspherical Gauss Radau points, n+1 = " &\n        & // tostring( n+1 )\n    call display(msg%chars())\n    astr = MdEncode( pt .COLCONCAT. wt )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}const d={},h="UltrasphericalGaussRadauQuadrature",o={id:"UltrasphericalPolynomialUtility/UltrasphericalGaussRadauQuadrature",title:"UltrasphericalGaussRadauQuadrature",description:"This routine returns the $n+1$ Quadrature points and weights.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGaussRadauQuadrature.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalGaussRadauQuadrature",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGaussRadauQuadrature",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGaussRadauQuadrature.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalGaussQuadrature",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGaussQuadrature"},next:{title:"UltrasphericalGradientCoeff",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientCoeff"}},m={},u=[{value:"Interface",id:"interface",level:2}];function x(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"ultrasphericalgaussradauquadrature",children:"UltrasphericalGaussRadauQuadrature"}),"\n",(0,n.jsxs)(s.p,{children:["This routine returns the ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n+1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," Quadrature points and weights."]}),"\n",(0,n.jsxs)(s.p,{children:["The Gauss-Radau quadrature points consists one of the end points denoted by ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"a"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"})]})})]}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["So ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"a"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"a"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"})]})})]})," can be ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{children:"\xb1"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\pm 1"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord",children:"\xb1"}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The remaining ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsx)(s.mi,{children:"n"})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"n"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"n"})]})})]})," points are internal to ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(-1, +1)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:"+"}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]}),", and they are n-zeros of Ultraspherical  polynomial of order n."]}),"\n",(0,n.jsx)(s.p,{children:"Here n is the order of Ultraspherical polynomial."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"a=1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," then n+1 quadrature point will be +1."]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"a=-1"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mord",children:"1"})]})]})]})," then 1st quadrature point will be -1."]}),"\n"]}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE UltrasphericalGaussRadauQuadrature(a, n, lambda, pt, wt)\n    REAL(DFP), INTENT(IN) :: a\n    !! the value of one of the end points\n    !! it should be either -1 or +1\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Ultraspherical polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(OUT) :: pt(:)\n    !! n+1 quadrature points from 1 to n+1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)\n    !! n+1 weights from 1 to n+1\n  END SUBROUTINE UltrasphericalGaussRadauQuadrature\nEND INTERFACE\n"})})}),(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(c,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},85162:(e,s,a)=>{a.d(s,{Z:()=>l});a(67294);var n=a(86010);const r={tabItem:"tabItem_Ymn6"};var t=a(85893);function l(e){let{children:s,hidden:a,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:s})}},74866:(e,s,a)=>{a.d(s,{Z:()=>w});var n=a(67294),r=a(86010),t=a(12466),l=a(16550),i=a(20469),c=a(91980),d=a(67392),h=a(50012);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return o(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:r}}=e;return{value:s,label:a,attributes:n,default:r}}))}(a);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function u(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:a}=e;const r=(0,l.k6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c._X)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function p(e){const{defaultValue:s,queryString:a=!1,groupId:r}=e,t=m(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[d,o]=x({queryString:a,groupId:r}),[p,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,h.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),f=(()=>{const e=d??p;return u({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),j(e)}),[o,j,t]),tabValues:t}}var j=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function N(e){let{className:s,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,t.o5)(),h=e=>{const s=e.currentTarget,a=c.indexOf(s),r=i[a].value;r!==n&&(d(s),l(r))},o=e=>{let s=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:o,onClick:h,...t,className:(0,r.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function b(e){let{lazy:s,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=p(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(N,{...e,...s}),(0,g.jsx)(b,{...e,...s})]})}function w(e){const s=(0,j.Z)();return(0,g.jsx)(y,{...e,children:o(e.children)},String(s))}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>l});var n=a(67294);const r={},t=n.createContext(r);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);