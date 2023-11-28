"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30301],{29616:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>l});var t=n(85893),a=n(11151);n(74866),n(85162);const u={},s="GaussLegendre",o={id:"QuadraturePoint/GaussLegendreQuadrature",title:"GaussLegendre",description:"This function returns GaussLegendre quadrature points of a given order.",source:"@site/docs/docs-api/QuadraturePoint/GaussLegendreQuadrature.md",sourceDirName:"QuadraturePoint",slug:"/QuadraturePoint/GaussLegendreQuadrature",permalink:"/docs-api/QuadraturePoint/GaussLegendreQuadrature",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/QuadraturePoint/GaussLegendreQuadrature.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GaussLegendreLobatto",permalink:"/docs-api/QuadraturePoint/GaussLegendreLobattoQuadrature"},next:{title:"GaussLegendreRadauLeft",permalink:"/docs-api/QuadraturePoint/GaussLegendreRadauLeftQuadrature"}},i={},l=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2}];function c(e){const r={admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"gausslegendre",children:"GaussLegendre"}),"\n",(0,t.jsx)(r.p,{children:"This function returns GaussLegendre quadrature points of a given order."}),"\n",(0,t.jsx)("span",{class:"badge badge--warning",children:" Generic name:  GaussLegendreQuadrature "}),"\n","\n","\n",(0,t.jsx)(r.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE FUNCTION GaussLegendreQuadrature( refelem, Order ) RESULT( obj )\n  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem\n  INTEGER( I4B ), INTENT( IN ) :: Order\n  TYPE( QuadraturePoint_ ) :: obj\nEND FUNCTION GaussLegendreQuadrature\n"})}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.mdxAdmonitionTitle,{children:(0,t.jsx)(r.code,{children:"refelem"})}),(0,t.jsx)(r.p,{children:"Reference element."})]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.mdxAdmonitionTitle,{children:(0,t.jsx)(r.code,{children:"Order"})}),(0,t.jsx)(r.p,{children:"Order of integrand, that is, accuracy of quadrature points."})]}),"\n",(0,t.jsx)(r.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-fortran",children:"MODULE PURE FUNCTION GaussLegendreQuadrature( refelem, nips ) RESULT( obj )\n  CLASS( ReferenceElement_ ), INTENT( IN ) :: refelem\n  INTEGER( I4B ), INTENT( IN ) :: nips( 1 )\n  TYPE( QuadraturePoint_ ) :: obj\nEND FUNCTION GaussLegendreQuadrature\n"})}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsx)(r.p,{children:"This function initiates quadrature point based on given nips (number of integration points)."})}),"\n",(0,t.jsx)(r.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION GaussLegendreQuadrature(refelem, p, q, r) RESULT(obj)\n    CLASS(ReferenceElement_), INTENT(IN) :: refelem\n    INTEGER(I4B), INTENT(IN) :: p\n    !! order of accuracy in x1 direction\n    INTEGER(I4B), INTENT(IN) :: q\n    !! order of accuracy in x2 direction\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: r\n    !! order of accuracy in x3 direction\n    TYPE(QuadraturePoint_) :: obj\n  END FUNCTION GaussLegendreQuadrature\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>s});n(67294);var t=n(86010);const a={tabItem:"tabItem_Ymn6"};var u=n(85893);function s(e){let{children:r,hidden:n,className:s}=e;return(0,u.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>E});var t=n(67294),a=n(86010),u=n(12466),s=n(16550),o=n(20469),i=n(91980),l=n(67392),c=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:r,children:n}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:n,attributes:t,default:a}}=e;return{value:r,label:n,attributes:t,default:a}}))}(n);return function(e){const r=(0,l.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,n])}function m(e){let{value:r,tabValues:n}=e;return n.some((e=>e.value===r))}function p(e){let{queryString:r=!1,groupId:n}=e;const a=(0,s.k6)(),u=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n});return[(0,i._X)(u),(0,t.useCallback)((e=>{if(!u)return;const r=new URLSearchParams(a.location.search);r.set(u,e),a.replace({...a.location,search:r.toString()})}),[u,a])]}function h(e){const{defaultValue:r,queryString:n=!1,groupId:a}=e,u=f(e),[s,i]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:u}))),[l,d]=p({queryString:n,groupId:a}),[h,b]=function(e){let{groupId:r}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,u]=(0,c.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&u.set(e)}),[n,u])]}({groupId:a}),g=(()=>{const e=l??h;return m({value:e,tabValues:u})?e:null})();(0,o.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:u}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,u]),tabValues:u}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=n(85893);function I(e){let{className:r,block:n,selectedValue:t,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,u.o5)(),c=e=>{const r=e.currentTarget,n=i.indexOf(r),a=o[n].value;a!==t&&(l(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;r=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;r=i[n]??i[i.length-1];break}}r?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:o.map((e=>{let{value:r,label:n,attributes:u}=e;return(0,N.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>i.push(e),onKeyDown:d,onClick:c,...u,className:(0,a.Z)("tabs__item",g.tabItem,u?.className,{"tabs__item--active":t===r}),children:n??r},r)}))})}function v(e){let{lazy:r,children:n,selectedValue:a}=e;const u=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){const e=u.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:u.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function T(e){const r=h(e);return(0,N.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,N.jsx)(I,{...e,...r}),(0,N.jsx)(v,{...e,...r})]})}function E(e){const r=(0,b.Z)();return(0,N.jsx)(T,{...e,children:d(e.children)},String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>s});var t=n(67294);const a={},u=t.createContext(a);function s(e){const r=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(u.Provider,{value:r},e.children)}}}]);