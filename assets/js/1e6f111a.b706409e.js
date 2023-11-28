"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13499],{5314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=a(85893),n=a(11151),l=a(74866),o=a(85162);function i(e){const t={code:"code",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\nCALL Display(UltrasphericalNormSQRRatio(5, 0.5_DFP), "ans: " )\nend program main\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",metastring:'title="results"',children:"ans: 0.846154\n"})})]})}function s(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},u="JacobiNormSQRRatio",d={id:"UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio",title:"JacobiNormSQRRatio",description:"This function returns the ratio of Square norm of Jacobi polynomial n+1/n",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalNormSQR2",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQR2"},next:{title:"UltrasphericalQuadrature",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalQuadrature"}},p={},m=[{value:"Interface",id:"interface",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"jacobinormsqrratio",children:"JacobiNormSQRRatio"}),"\n",(0,r.jsxs)(t.p,{children:["This function returns the ratio of Square norm of Jacobi polynomial ",(0,r.jsx)(t.code,{children:"n+1/n"})]}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalNormSQRRatio(n, lambda) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP) :: ans\n  END FUNCTION UltrasphericalNormSQRRatio\nEND INTERFACE\n"})})}),(0,r.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(s,{})}),(0,r.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>o});a(67294);var r=a(86010);const n={tabItem:"tabItem_Ymn6"};var l=a(85893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>U});var r=a(67294),n=a(86010),l=a(12466),o=a(16550),i=a(20469),s=a(91980),c=a(67392),u=a(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=h({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),v=(()=>{const e=c??f;return m({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(85893);function g(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=i[a].value;n!==r&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=f(e);return(0,y.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(N,{...e,...t})]})}function U(e){const t=(0,b.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var r=a(67294);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);