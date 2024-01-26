"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58726],{53614:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),a=t(11151),o=t(74866),s=t(85162);function l(e){const r={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"In this example we test ArgIntroSort."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\n  REAL(REAL64) :: avec(10)\n  INTEGER( I4B ) :: arg(10)\n  CALL RANDOM_NUMBER(avec)\n  avec = avec * 10\n  arg=arange(1,10,1)\n  CALL Display( avec, msg="unsorted array", advance="NO", full=.true. )\n  CALL ArgIntroSort(avec, arg )\n  CALL Display( arg, msg="arg", advance="NO", full=.true. )\n  CALL Display( avec(arg), msg="sorted array", full=.true. )\n  CALL blanklines()\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-txt",metastring:'title="results"',children:"\nunsorted array,  arg,  sorted array\n--------------,  ---,  ------------\n   5.54368    ,   3 ,    0.81292   \n   6.02586    ,  10 ,    2.87233   \n   0.81292    ,   9 ,    3.91444   \n   7.37413    ,   1 ,    5.54368   \n   7.36096    ,   2 ,    6.02586   \n   9.06920    ,   5 ,    7.36096   \n   9.95400    ,   4 ,    7.37413   \n   8.88093    ,   8 ,    8.88093   \n   3.91444    ,   6 ,    9.06920   \n   2.87233    ,   7 ,    9.95400   \n"})})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function i(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const c={},u="ArgIntroSort",d={id:"SortUtility/ArgIntroSort",title:"ArgIntroSort",description:"This routine performs an indirect sort on an array.",source:"@site/docs/docs-api/SortUtility/ArgIntroSort.md",sourceDirName:"SortUtility",slug:"/SortUtility/ArgIntroSort",permalink:"/docs-api/SortUtility/ArgIntroSort",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SortUtility/ArgIntroSort.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArgInsertionSort",permalink:"/docs-api/SortUtility/ArgInsertionSort"},next:{title:"ArgQuickSort",permalink:"/docs-api/SortUtility/ArgQuickSort"}},h={},p=[{value:"Interface",id:"interface",level:2}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"argintrosort",children:"ArgIntroSort"}),"\n",(0,n.jsx)(r.p,{children:"This routine performs an indirect sort on an array."}),"\n",(0,n.jsxs)(r.p,{children:["Reference: ",(0,n.jsx)(r.a,{href:"https://github.com/leonfoks/coretran/blob/master/src/sorting/m_sort.f90",children:"Coretran"})]}),"\n",(0,n.jsx)(r.p,{children:"It returns the integer array which can be used for obtaining the sorted array."}),"\n",(0,n.jsx)(r.p,{children:"Calling example:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"CALL ArgIntroSort(array, arg)\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Then, ",(0,n.jsx)(r.code,{children:"array(arg)"})," will be sorted in increasing order."]}),"\n",(0,n.jsx)(r.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsxs)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE ArgIntroSort(array, arg)\n    INTEGER(Int8| Int16 | Int32 | Int64) | REAL(Real32| Real64), INTENT(IN) :: array(:)\n    INTEGER(I4B), INTENT(OUT) :: arg(0:)\n  END SUBROUTINE ArgIntroSort\n"})}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Here, entries of ",(0,n.jsx)(r.code,{children:"array"})," are NOT modified by the routine."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"arg"})," should be allocated by the user"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"array(arg)"})," returns the sorted array."]}),"\n"]})]}),(0,n.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(i,{})}),(0,n.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},85162:(e,r,t)=>{t.d(r,{Z:()=>s});t(67294);var n=t(86010);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:r,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:t,children:r})}},74866:(e,r,t)=>{t.d(r,{Z:()=>I});var n=t(67294),a=t(86010),o=t(12466),s=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(a.location.search);r.set(o,e),a.replace({...a.location,search:r.toString()})}),[o,a])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,d]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,o]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:r,block:t,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),a=l[t].value;a!==n&&(c(r),s(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function y(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function j(e){const r=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...r}),(0,x.jsx)(y,{...e,...r})]})}function I(e){const r=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(r))}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>s});var n=t(67294);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);