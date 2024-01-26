"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[44741],{87694:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>x,toc:()=>p});var r=t(85893),l=t(11151),a=t(74866),s=t(85162);function i(e){const n={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( : ), x\n  type(string) :: astr\n  x = 0.0_DFP\n  n = 5\n  ans= Chebyshev1EvalAll( n=n, x=x )\n  astr = MdEncode( ans )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"P0"}),(0,r.jsx)(n.th,{children:"P1"}),(0,r.jsx)(n.th,{children:"P2"}),(0,r.jsx)(n.th,{children:"P3"}),(0,r.jsx)(n.th,{children:"P4"}),(0,r.jsx)(n.th,{children:"P5"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"-0"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]})})]})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function c(e){const n={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( :, : ), x( : )\n  type(string) :: astr\n  x = [-1.0, -0.5, 0.0, 0.5, 1.0]\n  n = 5\n  ans= Chebyshev1EvalAll( n=n, x=x )\n  astr = MdEncode( ans )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"P0"}),(0,r.jsx)(n.th,{children:"P1"}),(0,r.jsx)(n.th,{children:"P2"}),(0,r.jsx)(n.th,{children:"P3"}),(0,r.jsx)(n.th,{children:"P4"}),(0,r.jsx)(n.th,{children:"P5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"-0.5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"-0"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.5"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"-0.5"}),(0,r.jsx)(n.td,{children:"0.5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const h={},u="Chebyshev1EvalAll",x={id:"Chebyshev1PolynomialUtility/Chebyshev1EvalAll",title:"Chebyshev1EvalAll",description:"Evaluate Chebyshev1 polynomials from order = 0 to n at single or several points.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalAll.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1EvalAll",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalAll.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1Eval",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Eval"},next:{title:"Chebyshev1EvalSum",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalSum"}},b={},p=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"chebyshev1evalall",children:"Chebyshev1EvalAll"}),"\n",(0,r.jsx)(n.p,{children:"Evaluate Chebyshev1 polynomials from order = 0 to n at single or several points."}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1EvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! Highest order of polynomial.\n    !! Polynomials from 0 to n will be computed.\n    REAL(DFP), INTENT(IN) :: x\n    !! Point of evaluation, $x \\in [-1, 1]$\n    REAL(DFP) :: ans(n + 1)\n    !! Evaluate Chebyshev1 polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION Chebyshev1EvalAll\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1EvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! Highest order of polynomial.\n    !! Polynomials from 0 to n will be computed.\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! number of points, SIZE(x)=M\n    REAL(DFP) :: ans(SIZE(x), n + 1)\n    !! shape (M,N+1)\n  END FUNCTION Chebyshev1EvalAll\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(d,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(86010);const l={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>g});var r=t(67294),l=t(86010),a=t(12466),s=t(16550),i=t(20469),o=t(91980),c=t(67392),d=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:l}}=e;return{value:n,label:t,attributes:r,default:l}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const l=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(l.location.search);n.set(a,e),l.replace({...l.location,search:n.toString()})}),[a,l])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,a=u(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=b({queryString:t,groupId:l}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,a]=(0,d.Nk)(t);return[l,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:l}),f=(()=>{const e=c??p;return x({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),l=i[t].value;l!==r&&(c(n),s(l))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...a,className:(0,l.Z)("tabs__item",f.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:l}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function E(e){const n=p(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function g(e){const n=(0,m.Z)();return(0,v.jsx)(E,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const l={},a=r.createContext(l);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);