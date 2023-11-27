"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2498],{74148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=t(85893),r=t(11151),l=t(74866),o=t(85162);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This example shows the usage of ",(0,a.jsx)(n.code,{children:"LegendreEvalSum"})," method."]}),"\n",(0,a.jsx)(n.p,{children:"This routine evaluates the finite sum of the Legendre polynomials of order upto n, at several points."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:), x(:), exact(:), &\n    & coeff(:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  n = 3\n  x = [-0.5, 0.5, 0.25]\n  coeff = [1, 0, 0, 0]\n  ans = LegendreEvalSum( n=n, x=x, coeff=coeff )\n  exact = LegendreEval( n=0_I4B, x=x )\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\n  n = 3\n  x = [-0.5, 0.5, 0.25]\n  coeff = [0, 0, 0, 1]\n  ans = LegendreEvalSum( n=n, x=x, coeff=coeff )\n  exact = LegendreEval( n=3_I4B, x=x)\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\n  n = 100\n  x = [-0.5, 0.5, 0.25]\n  coeff = zeros(n+1, 0.0_DFP)\n  coeff( n+1 ) = 1.0_DFP\n  ans = LegendreEvalSum( n=n, x=x, coeff=coeff )\n  exact = LegendreEval( n=n, x=x )\n  call ok( ALL(SOFTEQ(ans, exact, tol )))\nend program main\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const u={},c="LegendreEvalSum",d={id:"LegendrePolynomialUtility/LegendreEvalSum",title:"LegendreEvalSum",description:"Evaluate the finite sum of Legendre polynomials at point x.",source:"@site/docs/docs-api/LegendrePolynomialUtility/LegendreEvalSum.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/LegendreEvalSum",permalink:"/docs-api/LegendrePolynomialUtility/LegendreEvalSum",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/LegendreEvalSum.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LegendreEvalAll",permalink:"/docs-api/LegendrePolynomialUtility/LegendreEvalAll"},next:{title:"LegendreGaussLobattoQuadrature",permalink:"/docs-api/LegendrePolynomialUtility/LegendreGaussLobattoQuadrature"}},f={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"legendreevalsum",children:"LegendreEvalSum"}),"\n",(0,a.jsx)(n.p,{children:"Evaluate the finite sum of Legendre polynomials at point x."}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreEvalSum(n, x, coeff) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: x\n    !! point\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! Coefficient of finite sum, size = n+1\n    REAL(DFP) :: ans\n    !! Evaluate Legendre polynomial of order n at point x\n  END FUNCTION LegendreEvalSum\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreEvalSum(n, x, coeff) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! point\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! Coefficient of finite sum, size = n+1\n    REAL(DFP) :: ans(SIZE(x))\n    !! Evaluate Legendre polynomial of order n at point x\n  END FUNCTION LegendreEvalSum\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(n.p,{children:"See above example."})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var l=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(67294),r=t(86010),l=t(12466),o=t(16550),s=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=f(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=p({queryString:t,groupId:r}),[h,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),x=(()=>{const e=u??h;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function b(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==a&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function E(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function L(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(E,{...e,...n})]})}function N(e){const n=(0,v.Z)();return(0,g.jsx)(L,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);