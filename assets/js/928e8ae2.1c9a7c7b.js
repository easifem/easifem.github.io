"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94710],{16379:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=t(85893),n=t(11151),l=t(74866),o=t(85162);function s(e){const r={code:"code",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\nCALL Display(UltrasphericalNormSQR2(5, 0.5_DFP), "ans: " )\nend program main\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-txt",metastring:'title="results"',children:" ans:  \n-------\n2.00000\n0.66667\n0.40000\n0.28571\n0.22222\n0.18182\n"})})]})}function i(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const c={},u="UltrasphericalNormSQR2",d={id:"UltrasphericalPolynomialUtility/UltrasphericalNormSQR2",title:"UltrasphericalNormSQR2",description:"Square norm of Ultraspherical polynomial.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQR2.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalNormSQR2",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQR2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQR2.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalNormSQR",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQR"},next:{title:"JacobiNormSQRRatio",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalNormSQRRatio"}},p={},m=[{value:"Interface",id:"interface",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"ultrasphericalnormsqr2",children:"UltrasphericalNormSQR2"}),"\n",(0,a.jsx)(r.p,{children:"Square norm of Ultraspherical polynomial."}),"\n",(0,a.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalNormSQR2(n, lambda) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP) :: ans(0:n)\n  END FUNCTION UltrasphericalNormSQR2\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>o});t(67294);var a=t(86010);const n={tabItem:"tabItem_Ymn6"};var l=t(85893);function o(e){let{children:r,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>x});var a=t(67294),n=t(86010),l=t(12466),o=t(16550),s=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:a,default:n}}=e;return{value:r,label:t,attributes:a,default:n}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.k6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})}),[l,n])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,l=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:l}))),[c,d]=h({queryString:t,groupId:n}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,l]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),v=(()=>{const e=c??f;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(85893);function N(e){let{className:r,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),n=s[t].value;n!==a&&(c(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},r),children:s.map((e=>{let{value:r,label:t,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,n.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":a===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:n}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function U(e){const r=f(e);return(0,y.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(N,{...e,...r}),(0,y.jsx)(g,{...e,...r})]})}function x(e){const r=(0,b.Z)();return(0,y.jsx)(U,{...e,children:d(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>o});var a=t(67294);const n={},l=a.createContext(n);function o(e){const r=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(l.Provider,{value:r},e.children)}}}]);