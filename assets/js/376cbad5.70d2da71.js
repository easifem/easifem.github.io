"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[59570],{84076:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>h,toc:()=>x});var t=n(85893),s=n(11151),l=n(74866),r=n(85162);function i(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiGradientEvalAll"})," method."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"module-and-classes",children:"Module and classes"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n, ii\n  real( dfp ), allocatable :: exact(:), ans(:)\n  real( dfp ) :: x\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  !!\n  n=5\n  x = 0.25\n  exact = LegendreGradientEvalAll(n=n, x=x)\n  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)\n  call OK( ALL(SOFTEQ( exact, ans, tol)), "")\n  !!\n  n=10\n  x = 0.25\n  exact = LegendreGradientEvalAll(n=n, x=x)\n  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)\n  call OK( ALL(SOFTEQ( exact, ans, tol)), "")\n  !!\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiGradientEvalAll"})," method."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n, ii\n  real( dfp ), allocatable :: exact(:,:), ans(:,:), x(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  !!\n  n=5\n  x = [-0.1, 0.0, 0.1]\n  exact = LegendreGradientEvalAll(n=n, x=x)\n  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)\n  call OK( ALL(SOFTEQ( exact, ans, tol)), "")\n  !!\n  n=10\n  x = [-0.1, 0.0, 0.1]\n  exact = LegendreGradientEvalAll(n=n, x=x)\n  ans = JacobiGradientEvalAll(n=n, alpha=alpha, beta=beta, x=x)\n  call OK( ALL(SOFTEQ( exact, ans, tol)), "")\n  !!\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const d={},u="JacobiGradientEvalAll",h={id:"JacobiPolynomialUtility/JacobiGradientEvalAll",title:"JacobiGradientEvalAll",description:"Evaluate gradient of Jacobi polynomials.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiGradientEvalAll.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiGradientEvalAll",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGradientEvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiGradientEvalAll.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiGradientEval",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGradientEval"},next:{title:"JacobiGradientEvalSum",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGradientEvalSum"}},p={},x=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Examples",id:"examples",level:2}];function b(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"jacobigradientevalall",children:"JacobiGradientEvalAll"}),"\n",(0,t.jsx)(a.p,{children:"Evaluate gradient of Jacobi polynomials."}),"\n",(0,t.jsx)(a.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiGradientEvalAll(n, alpha, beta, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha > -1.0\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta > -1.0\n    REAL(DFP), INTENT(IN) :: x\n    !! point\n    REAL(DFP) :: ans(n + 1)\n    !! Derivative of Jacobi polynomial of order n at point x\n  END FUNCTION JacobiGradientEvalAll\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiGradientEvalAll(n, alpha, beta, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: alpha\n    REAL(DFP), INTENT(IN) :: beta\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(SIZE(x), n + 1)\n    !! Derivative of Jacobi polynomial of order n at x\n  END FUNCTION JacobiGradientEvalAll\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(m,{})}),(0,t.jsx)(r.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function f(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>r});n(67294);var t=n(86010);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function r(e){let{children:a,hidden:n,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,r),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>E});var t=n(67294),s=n(86010),l=n(12466),r=n(16550),i=n(20469),o=n(91980),c=n(67392),m=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const s=(0,r.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(s.location.search);a.set(l,e),s.replace({...s.location,search:a.toString()})}),[l,s])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,l=u(e),[r,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,d]=p({queryString:n,groupId:s}),[x,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,l]=(0,m.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),f=(()=>{const e=c??x;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){let{className:a,block:n,selectedValue:t,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const a=e.currentTarget,n=o.indexOf(a),s=i[n].value;s!==t&&(c(a),r(s))},d=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:d,onClick:m,...l,className:(0,s.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function N(e){let{lazy:a,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function v(e){const a=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(g,{...e,...a}),(0,j.jsx)(N,{...e,...a})]})}function E(e){const a=(0,b.Z)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var t=n(67294);const s={},l=t.createContext(s);function r(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);