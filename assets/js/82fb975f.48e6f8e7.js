"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93961],{82015:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=a(85893),r=a(11151),i=a(74866),s=a(85162);function l(n){const e={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["In this example we show the usage of ",(0,t.jsx)(e.a,{href:"/docs-api/DiagUtility/DiagIndx",children:"DiagIndx"}),"\nroutine."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"program main\n  use easifemBase\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  call Display( DiagIndx(4, 4, 0), "(4,4), main diagonal = " )\n  call Display( DiagIndx(4, 4, 1), "(4,4), first superdiagonal = " )\n  call Display( DiagIndx(4, 4, 2), "(4,4), second superdiagonal = " )\n'})}),"\n",(0,t.jsx)(e.p,{children:"Results:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",children:"(4,4), main diagonal =\n-----------------------\n         1  1\n         2  2\n         3  3\n         4  4\n\n(4,4), first superdiagonal =\n-----------------------------\n            1  2\n            2  3\n            3  4\n\n(4,4), second superdiagonal =\n------------------------------\n             1  3\n             2  4\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  call Display( DiagIndx(4, 4, -1), "(4,4), first subdiagonal = " )\n  call Display( DiagIndx(4, 4, -2), "(4,4), second subdiagonal = " )\n'})}),"\n",(0,t.jsx)(e.p,{children:"Results:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",children:"(4,4), first subdiagonal =\n---------------------------\n           2  1\n           3  2\n           4  3\n\n(4,4), second subdiagonal =\n----------------------------\n            3  1\n            4  2\n\n"})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["Let us now test ",(0,t.jsx)(e.code,{children:"DiagIndx"})," for ",(0,t.jsx)("span",{class:"badge badge--success",children:"  RECTANGLE "}),"  matrix."]})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:'  call Display( DiagIndx(4, 7, 0), "(4, 7), main diagonal = " )\n  call Display( DiagIndx(4, 7, 1), "(4, 7), first superdiagonal = " )\n  call Display( DiagIndx(4, 7, 2), "(4, 7), second superdiagonal = " )\n  call Display( DiagIndx(4, 7, 3), "(4,7), third superdiagonal = " )\n  call Display( DiagIndx(4, 7, 4), "(4,7), fourth superdiagonal = " )\n  call Display( DiagIndx(4, 7, 5), "(4,7), fifth superdiagonal = " )\n  call Display( DiagIndx(4, 7, 6), "(4,7), sixth superdiagonal = " )\n'})}),"\n",(0,t.jsx)(e.p,{children:"Results:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",metastring:'title="results"',children:"(4, 7), main diagonal =\n------------------------\n          1  1\n          2  2\n          3  3\n          4  4\n\n(4, 7), first superdiagonal =\n------------------------------\n             1  2\n             2  3\n             3  4\n             4  5\n\n(4, 7), second superdiagonal =\n-------------------------------\n             1  3\n             2  4\n             3  5\n             4  6\n\n(4,7), third superdiagonal =\n-----------------------------\n            1  4\n            2  5\n            3  6\n            4  7\n\n(4,7), fourth superdiagonal =\n------------------------------\n             1  5\n             2  6\n             3  7\n\n(4,7), fifth superdiagonal =\n-----------------------------\n            1  6\n            2  7\n\n(4,7), sixth superdiagonal =\n-----------------------------\n            1  7\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",metastring:'title="(4,7) 1:3 subdiagonal"',children:'  call Display( DiagIndx(4, 7, -1), "(4,7), first subdiagonal = " )\n  call Display( DiagIndx(4, 7, -2), "(4,7), second subdiagonal = " )\n  call Display( DiagIndx(4, 7, -3), "(4,7), thrid subdiagonal = " )\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-txt",metastring:'title="results"',children:"(4,7), first subdiagonal =\n---------------------------\n           2  1\n           3  2\n           4  3\n(4,7), second subdiagonal =\n----------------------------\n            3  1\n            4  2\n(4,7), thrid subdiagonal =\n---------------------------\n           4  1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"end program\n"})})]})}function o(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}const c={},u="DiagIndx",d={id:"DiagUtility/DiagIndx",title:"DiagIndx",description:"DiagIndx returns the indices of elements along a diagonal of a square or rectangle matrix. The indices are returned a two dimensional array of integers.",source:"@site/docs/docs-api/DiagUtility/DiagIndx.md",sourceDirName:"DiagUtility",slug:"/DiagUtility/DiagIndx",permalink:"/docs-api/DiagUtility/DiagIndx",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DiagUtility/DiagIndx.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Diag",permalink:"/docs-api/DiagUtility/Diag"},next:{title:"DiagSize",permalink:"/docs-api/DiagUtility/DiagSize"}},g={},p=[];function h(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"diagindx",children:"DiagIndx"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"DiagIndx"})," returns the indices of elements along a diagonal of a square or rectangle matrix. The indices are returned a two dimensional array of integers.\nThis array has two columns. First column stands for the row index and second column stands for column index."]}),"\n","\n","\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",metastring:'title="Interface"',children:"INTERFACE\n  MODULE PURE FUNCTION DiagIndx(m, n, diagNo) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: m\n    !! number of rows in matrix\n    INTEGER(I4B), INTENT(IN) :: n\n    !! number of columns in a matrix\n    INTEGER(I4B), INTENT(IN) :: diagNo\n    !! diagonal number\n    INTEGER(I4B), ALLOCATABLE :: ans(:, :)\n    !! size of diagonal\n  END FUNCTION DiagIndx\nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 Example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 Close"})]})]})}function f(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},85162:(n,e,a)=>{a.d(e,{Z:()=>s});a(67294);var t=a(86010);const r={tabItem:"tabItem_Ymn6"};var i=a(85893);function s(n){let{children:e,hidden:a,className:s}=n;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:a,children:e})}},74866:(n,e,a)=>{a.d(e,{Z:()=>y});var t=a(67294),r=a(86010),i=a(12466),s=a(16550),l=a(20469),o=a(91980),c=a(67392),u=a(50012);function d(n){return t.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,t.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(n){const{values:e,children:a}=n;return(0,t.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:a,attributes:t,default:r}}=n;return{value:e,label:a,attributes:t,default:r}}))}(a);return function(n){const e=(0,c.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,a])}function p(n){let{value:e,tabValues:a}=n;return a.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:a}=n;const r=(0,s.k6)(),i=function(n){let{queryString:e=!1,groupId:a}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(i),(0,t.useCallback)((n=>{if(!i)return;const e=new URLSearchParams(r.location.search);e.set(i,n),r.replace({...r.location,search:e.toString()})}),[i,r])]}function f(n){const{defaultValue:e,queryString:a=!1,groupId:r}=n,i=g(n),[s,o]=(0,t.useState)((()=>function(n){let{defaultValue:e,tabValues:a}=n;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const t=a.find((n=>n.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:e,tabValues:i}))),[c,d]=h({queryString:a,groupId:r}),[f,m]=function(n){let{groupId:e}=n;const a=function(n){return n?`docusaurus.tab.${n}`:null}(e),[r,i]=(0,u.Nk)(a);return[r,(0,t.useCallback)((n=>{a&&i.set(n)}),[a,i])]}({groupId:r}),x=(()=>{const n=c??f;return p({value:n,tabValues:i})?n:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((n=>{if(!p({value:n,tabValues:i}))throw new Error(`Can't select invalid tab value=${n}`);o(n),d(n),m(n)}),[d,m,i]),tabValues:i}}var m=a(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function I(n){let{className:e,block:a,selectedValue:t,selectValue:s,tabValues:l}=n;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=n=>{const e=n.currentTarget,a=o.indexOf(e),r=l[a].value;r!==t&&(c(e),s(r))},d=n=>{let e=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":{const a=o.indexOf(n.currentTarget)+1;e=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(n.currentTarget)-1;e=o[a]??o[o.length-1];break}}e?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e),children:l.map((n=>{let{value:e,label:a,attributes:i}=n;return(0,b.jsx)("li",{role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:n=>o.push(n),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":t===e}),children:a??e},e)}))})}function D(n){let{lazy:e,children:a,selectedValue:r}=n;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const n=i.find((n=>n.props.value===r));return n?(0,t.cloneElement)(n,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((n,e)=>(0,t.cloneElement)(n,{key:e,hidden:n.props.value!==r})))})}function j(n){const e=f(n);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(I,{...n,...e}),(0,b.jsx)(D,{...n,...e})]})}function y(n){const e=(0,m.Z)();return(0,b.jsx)(j,{...n,children:d(n.children)},String(e))}},11151:(n,e,a)=>{a.d(e,{Z:()=>l,a:()=>s});var t=a(67294);const r={},i=t.createContext(r);function s(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);