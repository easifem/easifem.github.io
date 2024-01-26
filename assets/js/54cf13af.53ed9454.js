"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[47486],{26089:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>N,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var a=r(85893),t=r(11151),o=r(74866),s=r(85162);function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This example initiates an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( RealVector_ ) :: obj\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Generate a random vector by using ",(0,a.jsx)(n.a,{href:"/docs-api/RealVector/Random_Number",children:"Random_Number"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL Random_Number(obj, 5)\n  CALL Display( obj, "obj: ")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}function u(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This example initiates an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/RealVector/RealVector_",children:"RealVector_"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( RealVector_ ), ALLOCATABLE :: obj(:)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Generate several random vectors by using ",(0,a.jsx)(n.a,{href:"/docs-api/RealVector/Random_Number",children:"Random_Number"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL Random_Number(obj, [3,4,5])\n  CALL Display( obj, "obj: ")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}const d={},m="Random_Number",p={id:"RealVector/Random_Number",title:"Random_Number",description:"Generate a random realvector.",source:"@site/docs/docs-api/RealVector/Random_Number.md",sourceDirName:"RealVector",slug:"/RealVector/Random_Number",permalink:"/docs-api/RealVector/Random_Number",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RealVector/Random_Number.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsPresent",permalink:"/docs-api/RealVector/IsPresent"},next:{title:"Structure",permalink:"/docs-api/RealVector/RealVector_"}},f={},h=[{value:"Interfaces",id:"interfaces",level:2}];function b(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"random_number",children:"Random_Number"}),"\n",(0,a.jsx)(n.p,{children:"Generate a random realvector."}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(s.Z,{value:"interface",label:"\u0700 Interface 1",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Random_Number(obj, tsize)\n    CLASS(RealVector_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: tsize\n  END SUBROUTINE Random_Number\nEND INTERFACE\n"})})}),(0,a.jsx)(s.Z,{value:"interface2",label:"\u0700 Interface 2",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Random_Number(obj, tsize)\n    TYPE(RealVector_), ALLOCATABLE, INTENT(INOUT) :: obj(:)\n    INTEGER(I4B), INTENT(IN) :: tsize(:)\n  END SUBROUTINE Random_Number\nEND INTERFACE\n"})})}),(0,a.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 Example 1",children:(0,a.jsx)(c,{})}),(0,a.jsx)(s.Z,{value:"example 2",label:"\ufe0f\u0700 Example 2",children:(0,a.jsx)(i,{})}),(0,a.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function N(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var o=r(85893);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>g});var a=r(67294),t=r(86010),o=r(12466),s=r(16550),l=r(20469),c=r(91980),u=r(67392),i=r(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=m(e),[s,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[u,d]=f({queryString:r,groupId:t}),[h,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,i.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),N=(()=>{const e=u??h;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{N&&c(N)}),[N]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(72389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function j(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),i=e=>{const n=e.currentTarget,r=c.indexOf(n),t=l[r].value;t!==a&&(u(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:i,...o,className:(0,t.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function R(e){const n=h(e);return(0,x.jsxs)("div",{className:(0,t.Z)("tabs-container",N.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function g(e){const n=(0,b.Z)();return(0,x.jsx)(R,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var a=r(67294);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);