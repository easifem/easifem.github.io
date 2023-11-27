"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49102],{70452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>j,frontMatter:()=>d,metadata:()=>f,toc:()=>b});var a=t(85893),r=t(11151),s=t(74866),o=t(85162);function i(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( CSRMatrix_ ) :: obj\n  TYPE( DOF_ ) :: dofobj\n  REAL(DFP), ALLOCATABLE :: m2(:,:)\n  INTEGER( I4B ) :: i, unitNo\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Initiate( obj=dofobj, tNodes=[5], names=['K'], &\n    & spaceCompo=[1], timeCompo=[1], storageFMT=FMT_NODES )\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Initiate( obj, ncol=(.tnodes. dofobj), &\n    & nrow=(.tnodes. dofobj), idof=dofobj, jdof=dofobj )\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Setsparsity( obj, 1, [1,2,3,5] )\n  CALL Setsparsity( obj, 2, [2,1,3] )\n  CALL Setsparsity( obj, 3, [3,1,2,4,5] )\n  CALL Setsparsity( obj, 4, [4,3,5] )\n  CALL Setsparsity( obj, 5, [5,1,3,4] )\n  CALL SetSparsity(obj)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  obj = 2.0_DFP\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL Display( obj, "obj" )\n  m2=obj\n  CALL Display(m2, "test-5:")\n  CALL SPY( obj, "test_5", ".svg" )\n'})}),"\n",(0,a.jsx)(n.p,{children:'!!! example "result"'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(54396).Z+"",width:"960",height:"720"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL Deallocate( obj )\nEND PROGRAM main\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}function c(e){const n={code:"code",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  IMPLICIT NONE\n  TYPE( CSRMatrix_ ) :: obj\n  TYPE( DOF_ ) :: dofobj\n  INTEGER( I4B ) :: i, unitNo\n\n  CALL Initiate( obj=dofobj, tNodes=[5], names=[\'K\'], &\n    & spaceCompo=[2], timeCompo=[1], storageFMT=FMT_DOF )\n\n  CALL Initiate( obj, ncol=(.tnodes. dofobj), &\n    & nrow=(.tnodes. dofobj), idof=dofobj, jdof=dofobj )\n\n  CALL Setsparsity( obj, 1, [1,2,3,5] )\n  CALL Setsparsity( obj, 2, [2,1,3] )\n  CALL Setsparsity( obj, 3, [3,1,2,4,5] )\n  CALL Setsparsity( obj, 4, [4,3,5] )\n  CALL Setsparsity( obj, 5, [5,1,3,4] )\n  CALL SetSparsity(obj)\n\n  obj = 2.0_DFP\n\n  CALL SPY( obj, "test_6", ".svg" )\n\n  CALL Deallocate( obj )\nEND PROGRAM main\n'})}),"\n",(0,a.jsx)(n.p,{children:'!!! example "result"'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:t(70312).Z+"",width:"960",height:"720"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}const d={},p="SPY",f={id:"CSRMatrix/SPY",title:"SPY",description:"Use SPY() method to generate a PDF/PNG/SVG file for visualizing the sparsity patterns in CSRMatrix_.",source:"@site/docs/docs-api/CSRMatrix/SPY.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/SPY",permalink:"/docs-api/CSRMatrix/SPY",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/SPY.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RemoveDuplicates",permalink:"/docs-api/CSRMatrix/RemoveDuplicates"},next:{title:"Set",permalink:"/docs-api/CSRMatrix/Set"}},m={},b=[{value:"Interface",id:"interface",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"spy",children:"SPY"}),"\n",(0,a.jsxs)(n.p,{children:["Use ",(0,a.jsx)(n.code,{children:"SPY()"})," method to generate a PDF/PNG/SVG file for visualizing the sparsity patterns in ",(0,a.jsx)(n.code,{children:"CSRMatrix_"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SPY(obj, filename, ext)\n    TYPE(CSRMatrix_), INTENT(IN) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: filename\n    CHARACTER(LEN=*), INTENT(IN) :: ext\n  END SUBROUTINE SPY\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example1",label:"\u0700 Example 1",children:(0,a.jsx)(l,{})}),(0,a.jsx)(o.Z,{value:"example2",label:"\u0700 Example 2",children:(0,a.jsx)(u,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(67294),r=t(86010),s=t(12466),o=t(16550),i=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:t,groupId:r}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??b;return f({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=i[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function S(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function C(e){const n=(0,h.Z)();return(0,x.jsx)(S,{...e,children:d(e.children)},String(n))}},54396:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/test_5-4d388e3d0f29a8fce771d1ee2963acc3.svg"},70312:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/test_6-bd54cf20bebc5946bf4e737d5adcd8ff.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(67294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);