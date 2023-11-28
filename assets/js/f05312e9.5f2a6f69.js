"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58739],{82706:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>x,frontMatter:()=>d,metadata:()=>h,toc:()=>f});var t=n(85893),r=n(11151),l=n(74866),s=n(85162);function i(e){const a={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UltrasphericalGradientEval"})," method."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ) :: ans, x, exact\n  real( dfp ), parameter :: tol=1.0E-10, lambda=0.5_DFP\n  n = 3\n  x = -1.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = 0.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = +1.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  contains\n  subroutine callme\n    ans= UltrasphericalGradientEval( n=n, x=x, &\n      & lambda=lambda )\n  end subroutine callme\nend program main\n"})})]})}function o(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const a={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UltrasphericalGradientEval"})," method."]}),"\n",(0,t.jsx)(a.p,{children:"This routine evaluates gradient of Ultraspherical polynomial of order n, at several points."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:), x(:), exact(:)\n  real( dfp ), parameter :: tol=1.0E-10, lambda=0.5_DFP\n  type(string) :: astr\n  n = 3\n  x = [-1.0, 0.0, 1.0]; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\n  contains\n  subroutine callme\n    ans= UltrasphericalGradientEval( n=n, x=x, &\n      & lambda=lambda )\n  end subroutine callme\nend program main\n"})})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const d={},p="UltrasphericalGradientEval",h={id:"UltrasphericalPolynomialUtility/UltrasphericalGradientEval",title:"UltrasphericalGradientEval",description:"Evaluate gradient of Ultraspherical polynomials.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientEval.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalGradientEval",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientEval",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientEval.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalGradientCoeff",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientCoeff"},next:{title:"UltrasphericalGradientEvalAll",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientEvalAll"}},m={},f=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function b(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"ultrasphericalgradienteval",children:"UltrasphericalGradientEval"}),"\n",(0,t.jsx)(a.p,{children:"Evaluate gradient of Ultraspherical polynomials."}),"\n",(0,t.jsx)(a.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalGradientEval(n, lambda, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans\n  END FUNCTION UltrasphericalGradientEval\nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalGradientEval(n, lambda, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(1:SIZE(x))\n  END FUNCTION UltrasphericalGradientEval\nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>s});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>N});var t=n(67294),r=n(86010),l=n(12466),s=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,d]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),x=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function E(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const a=e.currentTarget,n=o.indexOf(a),r=i[n].value;r!==t&&(c(a),s(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function U(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(E,{...e,...a}),(0,v.jsx)(g,{...e,...a})]})}function N(e){const a=(0,b.Z)();return(0,v.jsx)(U,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>s});var t=n(67294);const r={},l=t.createContext(r);function s(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);