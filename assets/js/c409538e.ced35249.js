"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[31758],{20571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>d,toc:()=>p});var r=n(85893),a=n(11151),l=n(74866),s=n(85162);function i(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example shows the usage of ",(0,r.jsx)(t.code,{children:"StringToUID"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  call display( StringToUID( "A" ), "A = " )\n  call display( StringToUID( "a" ), "a = " )\n  call display( StringToUID( "Z" ), "Z = " )\n  call display( StringToUID( "z" ), "z = " )\n  call display( StringToUID( "x**2" ), "x**2 = " )\n  call display( StringToUID( "x**12" ), "x**12 = " )\n  call display( StringToUID( "x-2" ), "x^2 = " )\n  call display( StringToUID( "x-12" ), "x^12 = " )\nend program main\n'})}),"\n",(0,r.jsx)(t.h2,{id:"results",children:"Results"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"A = 1\na = 33\nZ = 26\nz = 58\nx**2 = -147168\nx**12 = -761789\nx^2 = -40277\nx^12 = -127346\n"})})]})}function o(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const u={},c="StringToUID",d={id:"HashingUtility/StringToUID",title:"StringToUID",description:"This function returns a unique number for a given string.",source:"@site/docs/docs-api/HashingUtility/StringToUID.md",sourceDirName:"HashingUtility",slug:"/HashingUtility/StringToUID",permalink:"/docs-api/HashingUtility/StringToUID",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HashingUtility/StringToUID.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HashingUtility",permalink:"/docs-api/HashingUtility/"},next:{title:"HeadUtility",permalink:"/docs-api/HeadUtility/"}},h={},p=[{value:"Interface",id:"interface",level:2}];function f(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"stringtouid",children:"StringToUID"}),"\n",(0,r.jsx)(t.p,{children:"This function returns a unique number for a given string."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://cp-algorithms.com/string/string-hashing.html",children:"Reference"})}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION StringToUID_PolyRoll(charVar) RESULT(Ans)\n    CHARACTER(*), INTENT(IN) :: charVar\n    INTEGER(I4B) :: ans\n  END FUNCTION StringToUID_PolyRoll\nEND INTERFACE\n"})})}),(0,r.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),a=n(86010),l=n(12466),s=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=f({queryString:n,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(I,{...e,...t})]})}function T(e){const t=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(67294);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);