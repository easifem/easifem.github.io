"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[91357],{71328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=t(85893),r=t(11151),s=t(74866),l=t(85162);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"program main\nuse easifemBase\nimplicit none\n\ninteger(I4B), allocatable :: aintvec(:)\ninteger(I4B) :: n, val\n"})}),"\n",(0,a.jsx)(n.p,{children:"First call\nWe set n = 0, as aintvec is not allocated."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'val = 1\nn = 0\nCALL Expand(vec=aintvec, n=n, chunk_size=10_I4B, val=val, finished=.FALSE.)\n\nCALL Display(aintvec, "aintvec = ")\nCALL Display(n, "n = ")\nCALL Display(size(aintvec), "size of aintvec = " )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"n = 1\nsize of aintvec = 10\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's finish."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'val = 2\nCALL Expand(vec=aintvec, n=n, chunk_size=10_I4B, val=val, finished=.TRUE.)\n\nCALL Display(aintvec, "aintvec= ")\nCALL Display(n, "n = ")\nCALL Display(size(aintvec), "size of aintvec = " )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"aintvec= \n---------\n    1    \n    2    \n\nn = 2\n\nsize of aintvec = 2\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const o={},u="Expand",d={id:"AppendUtility/Expand",title:"Expand",description:"Expand method expands a vector (if necessary) and add an element to it.",source:"@site/docs/docs-api/AppendUtility/Expand.md",sourceDirName:"AppendUtility",slug:"/AppendUtility/Expand",permalink:"/docs-api/AppendUtility/Expand",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AppendUtility/Expand.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ColConcat",permalink:"/docs-api/AppendUtility/ColConcat"},next:{title:"RowConcat",permalink:"/docs-api/AppendUtility/RowConcat"}},p={},h=[{value:"Interface",id:"interface",level:2}];function f(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"expand",children:"Expand"}),"\n",(0,a.jsx)(n.p,{children:"Expand method expands a vector (if necessary) and add an element to it."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/jacobwilliams/fortran-csv-module/blob/master/src/csv_utilities.f90",children:"Reference"})}),"\n",(0,a.jsx)(n.p,{children:"Calling example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"CALL Expand(vec, n=0, chunk_size)\nCALL Expand(vec, n, chunk_size, finished=.TRUE.)\n"})}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE Expand(vec, n, chunk_size, val, finished)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), ALLOCATABLE, INTENT(INOUT) :: vec(:)\n    INTEGER(I4B), INTENT(INOUT) :: n\n    !! counter for last element added to `vec`.\n    !! must be initialized to `size(vec)`\n    !! (or 0 if not allocated) before first call\n    INTEGER(I4B), INTENT(IN) :: chunk_size\n    !! allocate `vec` in blocks of this size (>0)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), OPTIONAL, INTENT(IN) :: val\n    !! the value to add to `vec`\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: finished\n    !! set to true to return `vec`\n    !! as its correct size (`n`)\n  END SUBROUTINE Expand\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(c,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var a=t(67294),r=t(86010),s=t(12466),l=t(16550),i=t(20469),c=t(91980),o=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[l,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[o,d]=f({queryString:t,groupId:r}),[m,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=o??m;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(o(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function E(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(I,{...e,...n})]})}function j(e){const n=(0,v.Z)();return(0,x.jsx)(E,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(67294);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);