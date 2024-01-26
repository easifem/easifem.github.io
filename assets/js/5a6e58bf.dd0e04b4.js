"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[7184],{66913:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>x,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=s(85893),r=s(11151),l=s(74866),d=s(85162);function i(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Note that this routine returns n+2 points, the first point is -1 and last point is +1"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: pt( : ), wt( : )\n  type(string) :: msg, astr\n  n = 3\n  call reallocate( pt, n+2, wt, n+2 )\n  call Chebyshev1GaussLobattoQuadrature( n=n, &\n    & pt=pt, wt=wt )\n  msg="Chebyshev1 Gauss Lobatto points, n+2 = " &\n      & // tostring( n+2 )\n  call display(msg%chars())\n  astr = MdEncode( pt .COLCONCAT. wt )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,n.jsx)(t.p,{children:"Chebyshev1 Gauss Lobatto points, n+2 = 4"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"pt"}),(0,n.jsx)(t.th,{children:"wt"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.70711"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.03412E-13"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.70711"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.3927"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}const c={},h="Chebyshev1GaussLobattoQuadrature",o={id:"Chebyshev1PolynomialUtility/Chebyshev1GaussLobattoQuadrature",title:"Chebyshev1GaussLobattoQuadrature",description:"This routine returns the $n+2$ Quadrature points and weights.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1GaussLobattoQuadrature.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1GaussLobattoQuadrature",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1GaussLobattoQuadrature",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1GaussLobattoQuadrature.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1EvalSum",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalSum"},next:{title:"Chebyshev1GaussQuadrature",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1GaussQuadrature"}},x={},u=[{value:"Interface",id:"interface",level:2},{value:"Some Chebyshev Gauss Lobatto Quadrature points",id:"some-chebyshev-gauss-lobatto-quadrature-points",level:2},{value:"n+2 = 3",id:"n2--3",level:3},{value:"n+2 = 4",id:"n2--4",level:3},{value:"n+2 = 5",id:"n2--5",level:3},{value:"n+2 = 6",id:"n2--6",level:3},{value:"n+2 = 7",id:"n2--7",level:3},{value:"n+2 = 8",id:"n2--8",level:3},{value:"n+2 = 9",id:"n2--9",level:3},{value:"n+2 = 10",id:"n2--10",level:3}];function j(e){const t={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"chebyshev1gausslobattoquadrature",children:"Chebyshev1GaussLobattoQuadrature"}),"\n",(0,n.jsxs)(t.p,{children:["This routine returns the ",(0,n.jsxs)(t.span,{className:"katex",children:[(0,n.jsx)(t.span,{className:"katex-mathml",children:(0,n.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(t.semantics,{children:[(0,n.jsxs)(t.mrow,{children:[(0,n.jsx)(t.mi,{children:"n"}),(0,n.jsx)(t.mo,{children:"+"}),(0,n.jsx)(t.mn,{children:"2"})]}),(0,n.jsx)(t.annotation,{encoding:"application/x-tex",children:"n+2"})]})})}),(0,n.jsxs)(t.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(t.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(t.span,{className:"mbin",children:"+"}),(0,n.jsx)(t.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(t.span,{className:"base",children:[(0,n.jsx)(t.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(t.span,{className:"mord",children:"2"})]})]})]})," Quadrature points and weights."]}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(d.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Chebyshev1GaussLobattoQuadrature(n, pt, wt)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Chebyshev1 polynomials\n    REAL(DFP), INTENT(OUT) :: pt(:)\n    !! n+2 quad points indexed from 1 to n+2\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)\n    !! n+2 weights, index from 1 to n+2\n  END SUBROUTINE Chebyshev1GaussLobattoQuadrature\nEND INTERFACE\n"})})}),(0,n.jsx)(d.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(a,{})}),(0,n.jsx)(d.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,n.jsx)(t.h2,{id:"some-chebyshev-gauss-lobatto-quadrature-points",children:"Some Chebyshev Gauss Lobatto Quadrature points"}),"\n",(0,n.jsx)(t.h3,{id:"n2--3",children:"n+2 = 3"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.03412E-13"}),(0,n.jsx)(t.td,{children:"1.5708"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.7854"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--4",children:"n+2 = 4"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.5"}),(0,n.jsx)(t.td,{children:"1.0472"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.5"}),(0,n.jsx)(t.td,{children:"1.0472"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.5236"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--5",children:"n+2 = 5"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.70711"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.03412E-13"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.70711"}),(0,n.jsx)(t.td,{children:"0.7854"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.3927"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--6",children:"n+2 = 6"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.31416"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.80902"}),(0,n.jsx)(t.td,{children:"0.62832"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.30902"}),(0,n.jsx)(t.td,{children:"0.62832"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.30902"}),(0,n.jsx)(t.td,{children:"0.62832"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.80902"}),(0,n.jsx)(t.td,{children:"0.62832"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.31416"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--7",children:"n+2 = 7"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.2618"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.86603"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.5"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.03412E-13"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.5"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.86603"}),(0,n.jsx)(t.td,{children:"0.5236"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.2618"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--8",children:"n+2 = 8"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.2244"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.90097"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.62349"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.22252"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.22252"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.62349"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.90097"}),(0,n.jsx)(t.td,{children:"0.4488"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.2244"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--9",children:"n+2 = 9"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.19635"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.92388"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.70711"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.38268"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1.03412E-13"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.38268"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.70711"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.92388"}),(0,n.jsx)(t.td,{children:"0.3927"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.19635"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"n2--10",children:"n+2 = 10"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"0.17453"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.93969"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.76604"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.5"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"-0.17365"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.17365"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.5"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.76604"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0.93969"}),(0,n.jsx)(t.td,{children:"0.34907"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"1"}),(0,n.jsx)(t.td,{children:"0.17453"})]})]})]})]})}function b(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},85162:(e,t,s)=>{s.d(t,{Z:()=>d});s(67294);var n=s(86010);const r={tabItem:"tabItem_Ymn6"};var l=s(85893);function d(e){let{children:t,hidden:s,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,d),hidden:s,children:t})}},74866:(e,t,s)=>{s.d(t,{Z:()=>C});var n=s(67294),r=s(86010),l=s(12466),d=s(16550),i=s(20469),a=s(91980),c=s(67392),h=s(50012);function o(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return o(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function u(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:s}=e;const r=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,a._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function b(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,l=x(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,o]=j({queryString:s,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,h.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),p=(()=>{const e=c??b;return u({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{p&&a(p)}),[p]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),o(e),m(e)}),[o,m,l]),tabValues:l}}var m=s(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(85893);function f(e){let{className:t,block:s,selectedValue:n,selectValue:d,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=e=>{const t=e.currentTarget,s=a.indexOf(t),r=i[s].value;r!==n&&(c(t),d(r))},o=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;t=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;t=a[s]??a[a.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>a.push(e),onKeyDown:o,onClick:h,...l,className:(0,r.Z)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",p.tabList),children:[(0,v.jsx)(f,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function C(e){const t=(0,m.Z)();return(0,v.jsx)(g,{...e,children:o(e.children)},String(t))}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>d});var n=s(67294);const r={},l=n.createContext(r);function d(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);