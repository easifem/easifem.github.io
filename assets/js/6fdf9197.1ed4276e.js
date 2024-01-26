"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[77865],{26408:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>f,contentTitle:()=>x,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>j});var r=a(85893),t=a(11151),s=a(74866),l=a(85162);function c(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n"})}),"\n",(0,r.jsx)(n.p,{children:"Concat two integer vectors"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=[1,2], b=[3,4]), "RowConcat=" )\n    call ok( all( RowConcat(a=[1,2], b=[3,4]) &\n        & .eq. reshape([1,3,2,4], [2,2])), "RowConcat" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n   1  2   \n   3  4   \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Concat two integer vectors of different length"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=[1,2], b=[3,4,5]), "RowConcat=" )\n    call ok( all( RowConcat(a=[1,2], b=[3,4,5]) &\n        & .eq. reshape([1,3,2,4,0,5], [2,3])), "RowConcat" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n 1  2  0  \n 3  4  5  \n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}function i(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n"})}),"\n",(0,r.jsx)(n.p,{children:"Concat columns of a rank2 array and rank 1 array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=reshape([1,2,4,5], [2,2]), &\n        & b=[3,6]), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n   1  4   \n   2  5   \n   3  6   \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"RowConcat works fine even when number of columns in rank-2 array is not the same as the size of rank-1 array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=reshape([1,2,4,5], [2,2]), &\n        & b=[3,6, 7]), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n 1  4  0  \n 2  5  0  \n 3  6  7  \n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"We can also concat the columns of a vector and a matrix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(b=reshape([1,2,4,5], [2,2]), &\n        & a=[3,6]), "RowConcat=" )\n    call display( RowConcat(b=reshape([1,2,4,5], [2,2]), &\n        & a=[3,6,7]), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n   3  6   \n   1  4   \n   2  5   \n\nRowConcat=\n----------\n 3  6  7  \n 1  4  0  \n 2  5  0  \n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function u(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can also concat the columns of two matrices."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=reshape([1,2,3,4], [2,2]), &\n        & b=reshape([5,6,7,8], [2,2]) ), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n   1  3   \n   2  4   \n   5  7   \n   6  8   \n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=reshape(arange(1,9), [3,3]), &\n        & b=reshape(arange(10,13), [2,2]) ), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n 1   4   7\n 2   5   8\n 3   6   9\n10  12   0\n11  13   0\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'    call display( RowConcat(a=reshape(arange(1,4), [2,2]), &\n        & b=reshape(arange(5,13), [3,3]) ), "RowConcat=" )\n'})}),"\n",(0,r.jsxs)(a,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"RowConcat=\n----------\n 1   3   0\n 2   4   0\n 5   8  11\n 6   9  12\n 7  10  13\n"})})})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}const p={},x="RowConcat",m={id:"AppendUtility/RowConcat",title:"RowConcat",description:"This function concates the rows of array (of rank 1 or 2).",source:"@site/docs/docs-api/AppendUtility/RowConcat.md",sourceDirName:"AppendUtility",slug:"/AppendUtility/RowConcat",permalink:"/docs-api/AppendUtility/RowConcat",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AppendUtility/RowConcat.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Expand",permalink:"/docs-api/AppendUtility/Expand"},next:{title:"ApproxUtility",permalink:"/docs-api/ApproxUtility/"}},f={},j=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rowconcat",children:"RowConcat"}),"\n",(0,r.jsx)(n.p,{children:"This function concates the rows of array (of rank 1 or 2)."}),"\n",(0,r.jsx)(n.p,{children:"Calling example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"c(:,:) = a(:) .RowConcat. b(:)\nc(:,:) = a(:,:) .RowConcat. b(:)\nc(:,:) = a(:) .RowConcat. b(:,:)\nc(:,:) = a(:,:) .RowConcat. b(:,:)\n"})}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)\n    REAL(REAL32), INTENT(IN) :: a(:)\n    REAL(REAL32), INTENT(IN) :: b(:)\n    REAL(REAL32), ALLOCATABLE :: ans(:, :)\n  END FUNCTION rowConcat\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)\n    REAL(REAL32), INTENT(IN) :: a(:, :)\n    REAL(REAL32), INTENT(IN) :: b(:)\n    REAL(REAL32), ALLOCATABLE :: ans(:, :)\n  END FUNCTION rowConcat\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(d,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)\n    REAL(REAL32), INTENT(IN) :: a(:)\n    REAL(REAL32), INTENT(IN) :: b(:, :)\n    REAL(REAL32), ALLOCATABLE :: ans(:, :)\n  END FUNCTION rowConcat\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(d,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION rowConcat(a, b) RESULT(ans)\n    REAL(REAL32), INTENT(IN) :: a(:, :)\n    REAL(REAL32), INTENT(IN) :: b(:, :)\n    REAL(REAL32), ALLOCATABLE :: ans(:, :)\n  END FUNCTION rowConcat\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(h,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>l});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,l),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>R});var r=a(67294),t=a(86010),s=a(12466),l=a(16550),c=a(20469),o=a(91980),i=a(67392),d=a(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[i,u]=x({queryString:a,groupId:t}),[m,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),j=(()=>{const e=i??m;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=a(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function b(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=o.indexOf(n),t=c[a].value;t!==r&&(i(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:c.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function N(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(N,{...e,...n})]})}function R(e){const n=(0,f.Z)();return(0,g.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>l});var r=a(67294);const t={},s=r.createContext(t);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);