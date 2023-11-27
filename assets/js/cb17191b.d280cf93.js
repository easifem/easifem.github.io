"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75366],{60770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var a=n(85893),l=n(11151),r=n(74866),s=n(85162);function o(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example shows the usage of ",(0,a.jsx)(t.code,{children:"UnscaledLobattoGradientEvalAll"})," method."]}),"\n",(0,a.jsx)(t.p,{children:"This routine evaluates the first derivative of UnscaledLobatto polynomial upto order n, for many points"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( :, : ), x( : )\n  type(string) :: astr\n  x = [-1.0, 0.0, 1.0]\n  n = 5; call callme\n  contains\n  subroutine callme\n    ans= UnscaledLobattoGradientEvalAll( n=n, x=x )\n    astr = MdEncode( ans )\n    call display( astr%chars(), "" )\n  end subroutine callme\nend program main\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"-1"}),(0,a.jsx)(t.td,{children:"1"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"-0"}),(0,a.jsx)(t.td,{children:"0.375"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"})]})]})]})]})}function i(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}function c(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example shows the usage of ",(0,a.jsx)(t.code,{children:"UnscaledLobattoGradientEvalAll"})," method."]}),"\n",(0,a.jsx)(t.p,{children:"This routine evaluates UnscaledLobatto polynomial upto order n, at a given point."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( : ), x\n  type(string) :: astr\n  x = 1.0_DFP\n  n = 5\n  ans= UnscaledLobattoGradientEvalAll( n=n, x=x )\n  astr = MdEncode( ans )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"-0.5"}),(0,a.jsx)(t.td,{children:"0.5"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"1"})]})})]})]})}function d(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}const u={},h="UnscaledLobattoGradientEvalAll",p={id:"UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEvalAll",title:"UnscaledLobattoGradientEvalAll",description:"Evaluate gradient of UnscaledLobatto polynomials upto order n.",source:"@site/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEvalAll.md",sourceDirName:"UnscaledLobattoPolynomialUtility",slug:"/UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEvalAll",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEvalAll.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnscaledLobattoGradientEval",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoGradientEval"},next:{title:"UnscaledLobattoKernelEvalAll",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoKernelEvalAll"}},b={},x=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"unscaledlobattogradientevalall",children:"UnscaledLobattoGradientEvalAll"}),"\n",(0,a.jsx)(t.p,{children:"Evaluate gradient of UnscaledLobatto polynomials upto order n."}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoGradientEvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans(1:n + 1)\n  END FUNCTION UnscaledLobattoGradientEvalAll\nEND INTERFACE\n"})})}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoGradientEvalAll(n, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(1:SIZE(x), 1:n + 1)\n  END FUNCTION UnscaledLobattoGradientEvalAll\nEND INTERFACE\n"})})}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(d,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(86010);const l={tabItem:"tabItem_Ymn6"};var r=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),l=n(86010),r=n(12466),s=n(16550),o=n(20469),i=n(91980),c=n(67392),d=n(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const l=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=h(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,u]=b({queryString:n,groupId:l}),[x,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,d.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),f=(()=>{const e=c??x;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=i.indexOf(t),l=o[n].value;l!==a&&(c(t),s(l))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,l.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function y(e){const t=x(e);return(0,j.jsxs)("div",{className:(0,l.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(v,{...e,...t}),(0,j.jsx)(E,{...e,...t})]})}function g(e){const t=(0,m.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const l={},r=a.createContext(l);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);