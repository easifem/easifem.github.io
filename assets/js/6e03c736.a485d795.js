"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22585],{60890:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=t(85893),n=t(11151),l=t(74866),s=t(85162),i=t(36225);const o={},c="UltrasphericalAlpha",u={id:"UltrasphericalPolynomialUtility/UltrasphericalAlpha",title:"UltrasphericalAlpha",description:"Recurrence coeff for Ultraspherical polynomial.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalAlpha.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalAlpha",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalAlpha",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalAlpha.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetUltrasphericalRecurrenceCoeff",permalink:"/docs-api/UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff"},next:{title:"UltrasphericalBeta",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalBeta"}},d={},p=[{value:"Interface",id:"interface",level:2}];function h(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"ultrasphericalalpha",children:"UltrasphericalAlpha"}),"\n",(0,r.jsx)(a.p,{children:"Recurrence coeff for Ultraspherical polynomial."}),"\n","\n","\n",(0,r.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalAlpha(n, lambda) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Ultraspherical polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP) :: ans\n    !! answer\n  END FUNCTION UltrasphericalAlpha\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(i.ZP,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},36225:(e,a,t)=>{t.d(a,{ZP:()=>s});var r=t(85893),n=t(11151);function l(e){const a={code:"code",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\nCALL Display(UltrasphericalAlpha(n=5, lambda=0.5_DFP), "ans:" )\nCALL Display(UltrasphericalBeta(n=5, lambda=0.5_DFP), "ans:" )\nend program main\n'})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"ans:0.00000\nans:0.252525\n"})})]})}function s(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>s});t(67294);var r=t(86010);const n={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){let{children:a,hidden:t,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,s),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>I});var r=t(67294),n=t(86010),l=t(12466),s=t(16550),i=t(20469),o=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.k6)(),l=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,l=p(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:l}))),[c,d]=m({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,u.Nk)(t);return[n,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),v=(()=>{const e=c??f;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function U(e){let{className:a,block:t,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const a=e.currentTarget,t=o.indexOf(a),n=i[t].value;n!==r&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},a),children:i.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===a}),children:t??a},a)}))})}function g(e){let{lazy:a,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function x(e){const a=f(e);return(0,y.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(U,{...e,...a}),(0,y.jsx)(g,{...e,...a})]})}function I(e){const a=(0,b.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>s});var r=t(67294);const n={},l=r.createContext(n);function s(e){const a=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);