"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8485],{55640:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var a=r(85893),t=r(11151),l=r(74866),o=r(85162);function i(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  integer( i4b ), allocatable :: degree(:,:)\n  type(string) :: astr\n\n  order=3; elemType=Tetrahedron\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = (order-1)*(order-2)*(order-3)/6\n  call IS( i1, i2 )\n  order=4; elemType=Tetrahedron\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = (order-1)*(order-2)*(order-3)/6\n  call IS( i1, i2 )\n\n  order=2; elemType=Triangle\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = 0\n  call IS( i1, i2 )\n  order=3; elemType=Triangle\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = 1\n  call IS( i1, i2 )\n\n  order=1; elemType=Line\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = 0\n  call IS( i1, i2 )\n  order=2; elemType=Line\n  i1 = LagrangeInDOF(order=order, elemType=elemType)\n  i2 = 1\n  call IS( i1, i2 )\n\nend program main \n"})})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const u={},c="LagrangeInDOF",d={id:"LagrangePolynomialUtility/LagrangeInDOF",title:"LagrangeInDOF",description:"Returns the number of internal dofs for lagrange polynomial.",source:"@site/docs/docs-api/LagrangePolynomialUtility/LagrangeInDOF.md",sourceDirName:"LagrangePolynomialUtility",slug:"/LagrangePolynomialUtility/LagrangeInDOF",permalink:"/docs-api/LagrangePolynomialUtility/LagrangeInDOF",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LagrangePolynomialUtility/LagrangeInDOF.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LagrangeDegree",permalink:"/docs-api/LagrangePolynomialUtility/LagrangeDegree"},next:{title:"LagrangeVandermonde",permalink:"/docs-api/LagrangePolynomialUtility/LagrangeVandermonde"}},m={},p=[{value:"Interface",id:"interface",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"lagrangeindof",children:"LagrangeInDOF"}),"\n",(0,a.jsx)(n.p,{children:"Returns the number of internal dofs for lagrange polynomial."}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LagrangeInDOF(order, elemType) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order\n    INTEGER(I4B), INTENT(IN) :: elemType\n    INTEGER(I4B) :: ans\n    !! number of degree of freedom\n  END FUNCTION LagrangeInDOF\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(s,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(g,{...e})}):g(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>L});var a=r(67294),t=r(86010),l=r(12466),o=r(16550),i=r(20469),s=r(91980),u=r(67392),c=r(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=m(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,d]=g({queryString:r,groupId:t}),[f,h]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),b=(()=>{const e=u??f;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,l]),tabValues:l}}var h=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function I(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const n=e.currentTarget,r=s.indexOf(n),t=i[r].value;t!==a&&(u(n),o(t))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...l,className:(0,t.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function T(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(I,{...e,...n}),(0,y.jsx)(v,{...e,...n})]})}function L(e){const n=(0,h.Z)();return(0,y.jsx)(T,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var a=r(67294);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);