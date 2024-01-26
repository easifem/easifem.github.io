"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20801],{37573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=r(85893),a=r(11151),l=r(74866),o=r(85162);const s={},i="LUSolve",u={id:"CSRMatrix/LUSolve",title:"LUSolve",description:"This routine solves the system LU x = y, given an LU decomposition of a matrix stored in (ALU, JLU, JU) modified sparse row format (MSR).",source:"@site/docs/docs-api/CSRMatrix/LUSolve.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/LUSolve",permalink:"/docs-api/CSRMatrix/LUSolve",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/CSRMatrix/LUSolve.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/CSRMatrix/Initiate"},next:{title:"LUTSolve",permalink:"/docs-api/CSRMatrix/LUTSolve"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"lusolve",children:"LUSolve"}),"\n",(0,n.jsxs)(t.p,{children:["This routine solves the system ",(0,n.jsx)(t.code,{children:"LU x = y"}),", given an LU decomposition of a matrix stored in (",(0,n.jsx)(t.code,{children:"ALU, JLU, JU"}),") modified sparse row format (MSR)."]}),"\n",(0,n.jsx)(t.p,{children:"This ALU, JLU, JU are created by calling ILU Methods."}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(o.Z,{value:"interface",label:"\ud83d\udcdd See Interface",default:!0}),(0,n.jsx)(o.Z,{value:"close",label:"\u25c9 Close",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE LUSOLVE(sol, rhs, alu, jlu, ju)\n    REAL(DFP), INTENT(INOUT) :: sol(:)\n    REAL(DFP), INTENT(IN) :: rhs(:)\n    REAL(DFP), INTENT(IN) :: alu(:)\n    INTEGER(I4B), INTENT(IN) :: jlu(:)\n    INTEGER(I4B), INTENT(IN) :: ju(:)\nEND SUBROUTINE LUSOLVE\nEND INTERFACE\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"TODO"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>o});r(67294);var n=r(86010);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(67294),a=r(86010),l=r(12466),o=r(16550),s=r(20469),i=r(91980),u=r(67392),c=r(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=f(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),v=(()=>{const e=u??m;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function I(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=s[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function E(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(I,{...e,...t}),(0,x.jsx)(g,{...e,...t})]})}function N(e){const t=(0,b.Z)();return(0,x.jsx)(E,{...e,children:d(e.children)},String(t))}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const a={},l=n.createContext(a);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);