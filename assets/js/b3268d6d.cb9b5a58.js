"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49643],{95119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(85893),r=n(11151),i=n(74866),o=n(85162);const l={},s="GetDiagonal",c={id:"CSRMatrix/GetDiagonal",title:"GetDiagonal",description:"This routine returns the diagonal entries of sparse MATRIX.",source:"@site/docs/docs-api/CSRMatrix/GetDiagonal.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/GetDiagonal",permalink:"/docs-api/CSRMatrix/GetDiagonal",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/GetDiagonal.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetColumn",permalink:"/docs-api/CSRMatrix/GetColumn"},next:{title:"GetILUD",permalink:"/docs-api/CSRMatrix/GetILUD"}},u={},d=[{value:"Interface",id:"interface",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getdiagonal",children:"GetDiagonal"}),"\n",(0,a.jsx)(t.p,{children:"This routine returns the diagonal entries of sparse MATRIX."}),"\n","\n","\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(o.Z,{value:"interface",label:"\ud83d\udcdd Interface 1",default:!0,children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetDiagonal(obj, diag, idiag, offset)\n    TYPE(CSRMatrix_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)\n    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: idiag(:)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: offset\n  END SUBROUTINE GetDiagonal\nEND INTERFACE\n"})}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"This subroutine returns the diagonal entries of sparse matrix."}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"offset"})," containing the offset of the wanted diagonal the diagonal extracted is the one corresponding to the entries ",(0,a.jsx)(t.code,{children:"a(i,j)"})," with ",(0,a.jsx)(t.code,{children:"j-i = ioff"}),". Thus ",(0,a.jsx)(t.code,{children:"ioff = 0"})," means the main diagonal"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"diag"})," is an array of reals of length nrow containing the wanted diagonal. diag contains the diagonal (",(0,a.jsx)(t.code,{children:"a(i,j),j-i = ioff"}),") as defined above."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"idiag"})," is an array of integer of length ",(0,a.jsx)(t.code,{children:"len"}),", containing the poisitions in the original arrays ",(0,a.jsx)(t.code,{children:"a"})," and ",(0,a.jsx)(t.code,{children:"ja"})," of the diagonal elements collected in ",(0,a.jsx)(t.code,{children:"diag"}),". A zero entry in ",(0,a.jsx)(t.code,{children:"idiag(i)"})," means that there was no entry found in row i belonging to the diagonal."]}),"\n"]})]}),(0,a.jsxs)(o.Z,{value:"iface2",label:"Interface 2",children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE GetDiagonal(obj, diag, offset)\n    TYPE(CSRMatrix_), INTENT(INOUT) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: diag(:)\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: offset\n  END SUBROUTINE GetDiagonal\nEND INTERFACE\n"})}),(0,a.jsxs)(t.p,{children:["This routine is like interface-1, but in this routine we do not get ",(0,a.jsx)(t.code,{children:"idiag"})]})]}),(0,a.jsx)(o.Z,{value:"close",label:"\u25c9 Close"})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(67294),r=n(86010),i=n(12466),o=n(16550),l=n(20469),s=n(91980),c=n(67392),u=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[c,d]=p({queryString:n,groupId:r}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=c??g;return f({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function T(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),r=l[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(T,{...e,...t}),(0,x.jsx)(I,{...e,...t})]})}function N(e){const t=(0,m.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);