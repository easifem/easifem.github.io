"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[75687],{33803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var r=n(85893),a=n(11151),l=n(74866),o=n(85162);function s(e){const t={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example we test ",(0,r.jsx)(t.code,{children:"InsertionSort"})," method."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer(i4b), allocatable :: intvec( : )\n  real(dfp), allocatable :: realvec( : )\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'  intvec = [ 5, 4, 3, 2, 1 ]\n  call InsertionSort(array=intvec, low=1, high=SIZE(intvec) )\n  call display( intvec, "intvec = " )\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"intvec =\n---------\n1\n2\n3\n4\n5\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'  realvec = [ 5, 4, 3, 2, 1 ]\n  call InsertionSort( realvec, 1, SIZE( realvec ) )\n  call display( realvec, "realvec = " )\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",children:"realvec = \n----------\n 1.00000  \n 2.00000  \n 3.00000  \n 4.00000  \n 5.00000  \n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function i(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},u="InsertionSort",d={id:"SortUtility/InsertionSort",title:"InsertionSort",description:"Insertion sort (in-place) algorithm.",source:"@site/docs/docs-api/SortUtility/InsertionSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/InsertionSort",permalink:"/docs-api/SortUtility/InsertionSort",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SortUtility/InsertionSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HeapSort",permalink:"/docs-api/SortUtility/HeapSort"},next:{title:"IntroSort",permalink:"/docs-api/SortUtility/IntroSort"}},h={},p=[{value:"Interface",id:"interface",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"insertionsort",children:"InsertionSort"}),"\n",(0,r.jsx)(t.p,{children:"Insertion sort (in-place) algorithm."}),"\n",(0,r.jsxs)(t.p,{children:["Reference: ",(0,r.jsx)(t.a,{href:"https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90",children:"coretran"})]}),"\n",(0,r.jsx)(t.p,{children:"Calling example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"CALL InsertionSort(array, low, high)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE InsertionSort(array, low, high)\n  INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(INOUT) :: array(:)\n  INTEGER(I4B), INTENT(IN) :: low\n  INTEGER(I4B), INTENT(IN) :: high\nEND SUBROUTINE InsertionSort\n"})})}),(0,r.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(i,{})}),(0,r.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),l=n(12466),o=n(16550),s=n(20469),i=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(I,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(67294);const a={},l=r.createContext(a);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);