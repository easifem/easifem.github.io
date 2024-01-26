"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76310],{30677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var r=n(85893),a=n(11151),s=n(74866),l=n(85162);function i(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this example we show the usage of ",(0,r.jsx)(t.a,{href:"/docs-api/DiagUtility/SetTriDiag",children:"SetTriDiag"})," routine."]}),"\n",(0,r.jsx)(t.p,{children:"We will set the three diagonal of a tridiagonal matrix."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="header"',children:"program main\n  use easifemBase\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="variables"',children:"  real( DFP ), allocatable :: mat(:, :)\n  real( DFP ), allocatable :: d(:), da(:), db(:)\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="form main diagonal"',children:'  mat = zeros(5,5,1.0_DFP)\n  call reallocate(d, size(mat,1))\n  call random_number(d)\n  d = d * 10\n  call display( MdEncode(d), "d = "// CHAR_LF )\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="super diagonal"',children:'  call reallocate(da, size(mat,1)-1)\n  call random_number(da)\n  da = da * 10\n  call display( MdEncode(da), "da = "// CHAR_LF )\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="subdigonal"',children:'  call reallocate(db, size(mat,1)-1)\n  call random_number(db)\n  db = db * 10\n  call display( MdEncode(db), "db = "// CHAR_LF )\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="set tridiagonal"',children:'  call SetTriDiag(mat=mat, d=d, da=da, db=db)\n  call Display( MdEncode(mat), "mat = " // CHAR_LF)\n'})}),"\n",(0,r.jsx)(t.h3,{id:"results",children:"Results"}),"\n",(0,r.jsx)(t.p,{children:"d ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5.0829"}),(0,r.jsx)(t.td,{children:"9.4562"}),(0,r.jsx)(t.td,{children:"4.3419"}),(0,r.jsx)(t.td,{children:"7.7858"}),(0,r.jsx)(t.td,{children:"3.9234"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"da ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4.9034"}),(0,r.jsx)(t.td,{children:"3.8319"}),(0,r.jsx)(t.td,{children:"0.60738"}),(0,r.jsx)(t.td,{children:"5.3554"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"db ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4.7704"}),(0,r.jsx)(t.td,{children:"0.58276"}),(0,r.jsx)(t.td,{children:"7.87791E-02"}),(0,r.jsx)(t.td,{children:"8.1903"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"mat ="}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"5.0829"}),(0,r.jsx)(t.td,{children:"4.9034"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"4.7704"}),(0,r.jsx)(t.td,{children:"9.4562"}),(0,r.jsx)(t.td,{children:"3.8319"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0.58276"}),(0,r.jsx)(t.td,{children:"4.3419"}),(0,r.jsx)(t.td,{children:"0.60738"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"7.87791E-02"}),(0,r.jsx)(t.td,{children:"7.7858"}),(0,r.jsx)(t.td,{children:"5.3554"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"8.1903"}),(0,r.jsx)(t.td,{children:"3.9234"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title="cleanup"',children:"end program\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},o="SetTriDiag",u={id:"DiagUtility/SetTriDiag",title:"SetTriDiag",description:"SetTriDiag routine can be used for setting the three diagonals (main, sub",source:"@site/docs/docs-api/DiagUtility/SetTriDiag.md",sourceDirName:"DiagUtility",slug:"/DiagUtility/SetTriDiag",permalink:"/docs-api/DiagUtility/SetTriDiag",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DiagUtility/SetTriDiag.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetDiag",permalink:"/docs-api/DiagUtility/SetDiag"},next:{title:"TriDiag",permalink:"/docs-api/DiagUtility/TriDiag"}},h={},x=[];function j(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"settridiag",children:"SetTriDiag"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"SetTriDiag"})," routine can be used for setting the three diagonals (main, sub\ndiagonal, superdiagonal) of a square dense matrix."]}),"\n",(0,r.jsx)(t.p,{children:"The generic call is given below."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"CALL SetTriDiag( mat, d, da, db)\n"})}),"\n",(0,r.jsx)(t.p,{children:"where,"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"mat(:,:)"})," is a square matrix of ",(0,r.jsx)(t.code,{children:"Real(DFP)"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"d(:)"})," is a vector of ",(0,r.jsx)(t.code,{children:"Real32 | Real64 | Int8 | Int16 | Int32 | Int64"}),", and it stands for main diagonal"]}),"\n",(0,r.jsxs)(t.li,{children:["If size of ",(0,r.jsx)(t.code,{children:"d"})," is 1, then it means the diagonal values are constant, otherwise the size of ",(0,r.jsx)(t.code,{children:"d"})," should be same as the main diagonal of matrix ",(0,r.jsx)(t.code,{children:"mat"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"da(:) is a vector of"}),"Real32 | Real64 | Int8 | Int16 | Int32 | Int64`, and it stands for first superdiagonal. Its size should be (n-1)."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"db(:) is a vector of"}),"Real32 | Real64 | Int8 | Int16 | Int32 | Int64`, and it stands for first subdiagonal. Its size should be (n-1)."]}),"\n"]}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 Example",children:(0,r.jsx)(d,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(67294),a=n(86010),s=n(12466),l=n(16550),i=n(20469),d=n(91980),c=n(67392),o=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=j({queryString:n,groupId:a}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=c??m;return x({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:u,onClick:o,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function D(e){const t=(0,p.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);