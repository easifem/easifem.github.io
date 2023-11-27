"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85182],{15796:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var t=a(85893),r=a(11151),l=a(74866),o=a(85162);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"LegendreGradientEval"})," method."]}),"\n",(0,t.jsx)(n.p,{children:"This routine evaluates gradient of Legendre polynomial of order n, at single point."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ) :: ans, x, exact\n  real( dfp ), parameter :: tol=1.0E-10\n  n = 3\n  x = -1.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = 0.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  x = +1.0_DFP; call callme\n  exact = 0.5_DFP*(3*5.0 * x**2 - 3.0)\n  call ok( SOFTEQ(ans, exact, tol ))\n  contains\n  subroutine callme\n    ans= LegendreGradientEval( n=n, x=x )\n  end subroutine callme\nend program main\n"})})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},u="LegendreGradientEval",d={id:"LegendrePolynomialUtility/LegendreGradientEval",title:"LegendreGradientEval",description:"Evaluate gradient of Legendre polynomials.",source:"@site/docs/docs-api/LegendrePolynomialUtility/LegendreGradientEval.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/LegendreGradientEval",permalink:"/docs-api/LegendrePolynomialUtility/LegendreGradientEval",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/LegendreGradientEval.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LegendreGradientCoeff",permalink:"/docs-api/LegendrePolynomialUtility/LegendreGradientCoeff"},next:{title:"LegendreGradientEvalAll",permalink:"/docs-api/LegendrePolynomialUtility/LegendreGradientEvalAll"}},p={},f=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"legendregradienteval",children:"LegendreGradientEval"}),"\n",(0,t.jsx)(n.p,{children:"Evaluate gradient of Legendre polynomials."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreGradientEval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans\n  END FUNCTION LegendreGradientEval\nEND INTERFACE\n"})})}),(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(s,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreGradientEval(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(1:SIZE(x))\n  END FUNCTION LegendreGradientEval\nEND INTERFACE\n"})})}),(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(n.p,{children:"See above example."})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>N});var t=a(67294),r=a(86010),l=a(12466),o=a(16550),i=a(20469),s=a(91980),c=a(67392),u=a(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,l=p(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:a,groupId:r}),[h,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(a);return[r,(0,t.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),g=(()=>{const e=c??h;return f({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),v(e)}),[d,v,l]),tabValues:l}}var v=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,a=s.indexOf(n),r=i[a].value;r!==t&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function E(e){let{lazy:n,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=h(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(E,{...e,...n})]})}function N(e){const n=(0,v.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>o});var t=a(67294);const r={},l=t.createContext(r);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);