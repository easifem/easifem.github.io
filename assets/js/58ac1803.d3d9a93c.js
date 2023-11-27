"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[24169],{99206:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>h,toc:()=>u});var n=a(85893),t=a(11151),r=a(74866),l=a(85162);function i(e){const s={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This example shows the usage of ",(0,n.jsx)(s.code,{children:"JacobiGaussQuadrature"})," method.\nThis routine returns the quadrature points for Jacobi weights."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["In this example ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"\u03b1"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mi,{children:"\u03b2"}),(0,n.jsx)(s.mo,{children:"="}),(0,n.jsx)(s.mn,{children:"0.0"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(s.span,{className:"mrel",children:"="}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(s.span,{className:"mord",children:"0.0"})]})]})]})," (that is, Legendre polynomial)"]}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: pt( : ), wt( : )\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP\n  type(string) :: msg, astr\n"})}),"\n",(0,n.jsx)(s.p,{children:"order = 1"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  n = 1; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Zeros of J(x), n = 1 alpha=0 beta=0"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"pt"}),(0,n.jsx)(s.th,{children:"wt"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"2"})]})})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"order = 2"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  n = 2; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Zeros of J(x), n = 1 alpha=0 beta=0"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"pt"}),(0,n.jsx)(s.th,{children:"wt"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.57735"}),(0,n.jsx)(s.td,{children:"1"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.57735"}),(0,n.jsx)(s.td,{children:"1"})]})]})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"order = 5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  n = 5; call callme\n"})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.p,{children:"Zeros of J(x), n = 5 alpha=0 beta=0"}),(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"pt"}),(0,n.jsx)(s.th,{children:"wt"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.90618"}),(0,n.jsx)(s.td,{children:"0.23693"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-0.53847"}),(0,n.jsx)(s.td,{children:"0.47863"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"-1.56541E-16"}),(0,n.jsx)(s.td,{children:"0.56889"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.53847"}),(0,n.jsx)(s.td,{children:"0.47863"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0.90618"}),(0,n.jsx)(s.td,{children:"0.23693"})]})]})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    call reallocate( pt, n, wt, n )\n    call JacobiGaussQuadrature( n=n, alpha=alpha, beta=beta, pt=pt, wt=wt )\n    msg = "Zeros of J(x), n = " &\n        & // tostring( n ) // " alpha="//tostring( alpha ) // &\n        & " beta="//tostring( beta )\n    call display(msg%chars())\n    astr = MdEncode( pt .COLCONCAT. wt )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}const o={},d="JacobiGaussQuadrature",h={id:"JacobiPolynomialUtility/JacobiGaussQuadrature",title:"JacobiGaussQuadrature",description:"This routine computes the n Gauss-Quadrature points.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiGaussQuadrature.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiGaussQuadrature",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGaussQuadrature",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiGaussQuadrature.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiGaussLobattoQuadrature",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGaussLobattoQuadrature"},next:{title:"JacobiGaussRadauQuadrature",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGaussRadauQuadrature"}},m={},u=[{value:"Interface",id:"interface",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"jacobigaussquadrature",children:"JacobiGaussQuadrature"}),"\n",(0,n.jsx)(s.p,{children:"This routine computes the n Gauss-Quadrature points."}),"\n",(0,n.jsxs)(s.p,{children:["They are n zeros of a jacobi polynomial defined with respect to the weight ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mi,{children:"\u03b1"})]}),(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{children:"+"}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:")"}),(0,n.jsx)(s.mi,{children:"\u03b2"})]})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(1-x)^{\\alpha} (1+x)^{\\beta}"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsxs)(s.span,{className:"mclose",children:[(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.6644em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"+"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1.0991em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsxs)(s.span,{className:"mclose",children:[(0,n.jsx)(s.span,{className:"mclose",children:")"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8491em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05278em"},children:"\u03b2"})})})]})})})})})]})]})]})]}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["All Gauss-Quadrature points are inside ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mo,{stretchy:"false",children:"("}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{separator:"true",children:","}),(0,n.jsx)(s.mn,{children:"1"}),(0,n.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"(-1, 1)"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,n.jsx)(s.span,{className:"mopen",children:"("}),(0,n.jsx)(s.span,{className:"mord",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mpunct",children:","}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(s.span,{className:"mord",children:"1"}),(0,n.jsx)(s.span,{className:"mclose",children:")"})]})})]})]}),"\n",(0,n.jsx)(s.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE JacobiGaussQuadrature(n, alpha, beta, pt, wt)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! It represents the order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(OUT) :: pt(:)\n    !! the size is 1 to n\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(:)\n    !! the size is 1 to n\n  END SUBROUTINE JacobiGaussQuadrature\nEND INTERFACE\n"})}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(c,{})}),(0,n.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function x(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,s,a)=>{a.d(s,{Z:()=>l});a(67294);var n=a(86010);const t={tabItem:"tabItem_Ymn6"};var r=a(85893);function l(e){let{children:s,hidden:a,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t.tabItem,l),hidden:a,children:s})}},74866:(e,s,a)=>{a.d(s,{Z:()=>v});var n=a(67294),t=a(86010),r=a(12466),l=a(16550),i=a(20469),c=a(91980),o=a(67392),d=a(50012);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:t}}=e;return{value:s,label:a,attributes:n,default:t}}))}(a);return function(e){const s=(0,o.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function u(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:a}=e;const t=(0,l.k6)(),r=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,c._X)(r),(0,n.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(t.location.search);s.set(r,e),t.replace({...t.location,search:s.toString()})}),[r,t])]}function x(e){const{defaultValue:s,queryString:a=!1,groupId:t}=e,r=m(e),[l,c]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:r}))),[o,h]=p({queryString:a,groupId:t}),[x,j]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,r]=(0,d.Nk)(a);return[t,(0,n.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),b=(()=>{const e=o??x;return u({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function N(e){let{className:s,block:a,selectedValue:n,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const s=e.currentTarget,a=c.indexOf(s),t=i[a].value;t!==n&&(o(s),l(t))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;s=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;s=c[a]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>c.push(e),onKeyDown:h,onClick:d,...r,className:(0,t.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function f(e){let{lazy:s,children:a,selectedValue:t}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function y(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(N,{...e,...s}),(0,g.jsx)(f,{...e,...s})]})}function v(e){const s=(0,j.Z)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(s))}},11151:(e,s,a)=>{a.d(s,{Z:()=>i,a:()=>l});var n=a(67294);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);