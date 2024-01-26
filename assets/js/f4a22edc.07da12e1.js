"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99100],{67289:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>v,frontMatter:()=>d,metadata:()=>p,toc:()=>b});var t=a(85893),r=a(11151),l=a(74866),s=a(85162);function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ) :: ans, x, exact\n  real( dfp ), parameter :: tol=1.0E-10\n  n = 5\n  x = -1.0_DFP; call callme\n  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = 0.0_DFP; call callme\n  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = +1.0_DFP; call callme\n  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x\n  call ok( SOFTEQ(ans, exact, tol ))\n  contains\n  subroutine callme\n    ans= Chebyshev1Eval( n=n, x=x )\n  end subroutine callme\nend program main\n"})})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function c(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:), x(:), exact(:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  n = 5\n  x = [-1.0, -0.5, 0.0, 0.5, 1.0]; call callme\n  exact = 16.0_DFP * x**5 - 20.0_DFP * x**3 + 5.0_DFP * x\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\n  contains\n  subroutine callme\n    ans= Chebyshev1Eval( n=n, x=x )\n  end subroutine callme\nend program main\n"})})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const d={},h="Chebyshev1Eval",p={id:"Chebyshev1PolynomialUtility/Chebyshev1Eval",title:"Chebyshev1Eval",description:"Evaluate Chebyshev1 polynomials of order n at single or several points.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Eval.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1Eval",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Eval",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Eval.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1DMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1DMatrix"},next:{title:"Chebyshev1EvalAll",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1EvalAll"}},m={},b=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"chebyshev1eval",children:"Chebyshev1Eval"}),"\n",(0,t.jsx)(n.p,{children:"Evaluate Chebyshev1 polynomials of order n at single or several points."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1Eval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: x\n    !! point of evaluation, it should be between -1 and 1\n    REAL(DFP) :: ans\n    !! Evaluate Chebyshev1 polynomial of order n at point x\n  END FUNCTION Chebyshev1Eval \nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(i,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1Eval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! several points of evaluation\n    REAL(DFP) :: ans(SIZE(x))\n    !! Evaluate Chebyshev1 polynomial of order n at points x\n  END FUNCTION Chebyshev1Eval \nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function v(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>s});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function s(e){let{children:n,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>C});var t=a(67294),r=a(86010),l=a(12466),s=a(16550),o=a(20469),i=a(91980),c=a(67392),u=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=h(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:a,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),v=(()=>{const e=c??b;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(85893);function y(e){let{className:n,block:a,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,a=i.indexOf(n),r=o[a].value;r!==t&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;n=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;n=i[a]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function E(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(y,{...e,...n}),(0,x.jsx)(E,{...e,...n})]})}function C(e){const n=(0,f.Z)();return(0,x.jsx)(g,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);