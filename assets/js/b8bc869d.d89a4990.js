"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21886],{19773:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>m,default:()=>b,frontMatter:()=>h,metadata:()=>u,toc:()=>x});var t=n(85893),s=n(11151),l=n(74866),r=n(85162);function i(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiEvalAll"})," method.\nThis routine evaluates Jacobi polynomial upto order n, for many points."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( :, : ), x( : )\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP\n  type(string) :: astr\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title "Jacobi-Gauss"',children:"  x = [-1.0, 0.0, 1.0]\n  n = 3; call callme\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"P0"}),(0,t.jsx)(a.th,{children:"P1"}),(0,t.jsx)(a.th,{children:"P2"}),(0,t.jsx)(a.th,{children:"P3"})]})}),(0,t.jsxs)(a.tbody,{children:[(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"-1"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"0"}),(0,t.jsx)(a.td,{children:"-0.5"}),(0,t.jsx)(a.td,{children:"-0"})]}),(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"1"})]})]})]})})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= JacobiEvalAll( n=n, alpha=alpha, beta=beta, x=x )\n    astr = MdEncode( ans )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiEvalAll"})," method.\nThis routine evaluates Jacobi polynomial upto order n, for many points"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( : ), x\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP\n  type(string) :: astr\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title "Jacobi-Gauss"',children:"  x = -1.0_DFP\n  n = 3; call callme\n"})}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"P0"}),(0,t.jsx)(a.th,{children:"P1"}),(0,t.jsx)(a.th,{children:"P2"}),(0,t.jsx)(a.th,{children:"P3"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"-1"}),(0,t.jsx)(a.td,{children:"1"}),(0,t.jsx)(a.td,{children:"-1"})]})})]})})]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= JacobiEvalAll( n=n, alpha=alpha, beta=beta, x=x )\n    astr = MdEncode( ans )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const h={},m="JacobiEvalAll",u={id:"JacobiPolynomialUtility/JacobiEvalAll",title:"JacobiEvalAll",description:"Evaluate Jacobi polynomials from order = 0 to n at single or several points.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiEvalAll.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiEvalAll",permalink:"/docs-api/JacobiPolynomialUtility/JacobiEvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiEvalAll.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiEval",permalink:"/docs-api/JacobiPolynomialUtility/JacobiEval"},next:{title:"JacobiEvalSum",permalink:"/docs-api/JacobiPolynomialUtility/JacobiEvalSum"}},p={},x=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Examples",id:"examples",level:2}];function j(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"jacobievalall",children:"JacobiEvalAll"}),"\n",(0,t.jsx)(a.p,{children:"Evaluate Jacobi polynomials from order = 0 to n at single or several points."}),"\n","\n","\n",(0,t.jsx)(a.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiEvalAll(n, alpha, beta, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans(n + 1)\n    !! Evaluate Jacobi polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION JacobiEvalAll\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.p,{children:"Evaluate Jacobi polynomials from order = 0 to n at single points"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"N, the highest order polynomial to compute. Note that polynomials 0 through N will be computed."}),"\n",(0,t.jsx)(a.li,{children:"alpha, beta are parameters"}),"\n",(0,t.jsx)(a.li,{children:"x: the point at which the polynomials are to be evaluated."}),"\n",(0,t.jsxs)(a.li,{children:["ans(1",":N","+1), the values of the first N+1 Jacobi polynomials at x"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiEvalAll(n, alpha, beta, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(SIZE(x), n + 1)\n    !! Evaluate Jacobi polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION JacobiEvalAll\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.p,{children:"Evaluate Jacobi polynomials from order = 0 to n at several points"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"N, the highest order polynomial to compute. Note that polynomials 0 through N will be computed."}),"\n",(0,t.jsx)(a.li,{children:"alpha, beta are parameters"}),"\n",(0,t.jsx)(a.li,{children:"x: the point at which the polynomials are to be evaluated."}),"\n",(0,t.jsxs)(a.li,{children:["ans(M,1",":N","+1), the values of the first N+1 Jacobi polynomials at the point"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>r});n(67294);var t=n(86010);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function r(e){let{children:a,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(67294),s=n(86010),l=n(12466),r=n(16550),i=n(20469),o=n(91980),c=n(67392),d=n(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function u(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const s=(0,r.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(s.location.search);a.set(l,e),s.replace({...s.location,search:a.toString()})}),[l,s])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,l=m(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!u({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,h]=p({queryString:n,groupId:s}),[x,j]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,l]=(0,d.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),b=(()=>{const e=c??x;return u({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!u({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),j(e)}),[h,j,l]),tabValues:l}}var j=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function g(e){let{className:a,block:n,selectedValue:t,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),s=i[n].value;s!==t&&(c(a),r(s))},h=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function N(e){let{lazy:a,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function v(e){const a=x(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(g,{...e,...a}),(0,f.jsx)(N,{...e,...a})]})}function y(e){const a=(0,j.Z)();return(0,f.jsx)(v,{...e,children:h(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var t=n(67294);const s={},l=t.createContext(s);function r(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);