"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[4186],{13151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);const i={},o="GetNNZ",u={id:"CSRSparsity/GetNNZ",title:"GetNNZ",description:"This function returns the number of non zeros.",source:"@site/docs/docs-api/CSRSparsity/GetNNZ.md",sourceDirName:"CSRSparsity",slug:"/CSRSparsity/GetNNZ",permalink:"/docs-api/CSRSparsity/GetNNZ",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRSparsity/GetNNZ.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDiagonal",permalink:"/docs-api/CSRSparsity/GetDiagonal"},next:{title:"GetSym",permalink:"/docs-api/CSRSparsity/GetSym"}},c={},d=[{value:"Interface",id:"interface",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getnnz",children:"GetNNZ"}),"\n",(0,r.jsx)(n.p,{children:"This function returns the number of non zeros."}),"\n",(0,r.jsx)(n.p,{children:"Calling example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'ans = GetNNZ(obj)\nans = GetNNZ(obj, from="U"|"L"|"D"|"A" )\nans(1:3) = GetNNZ(obj, from=[""] )\n'})}),"\n",(0,r.jsx)(n.p,{children:"This routine has three interfaces as shown below."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(l.Z,{value:"interface",label:"\u0700 GetNNZ( obj )",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE PURE FUNCTION GetNNZ( obj ) RESULT( Ans )\n  TYPE( CSRSparsity_ ), INTENT( IN ) :: obj\n  INTEGER( I4B ) :: Ans\nEND FUNCTION GetNNZ\n"})}),(0,r.jsx)(n.p,{children:"In this case we get all the number of nonzeros in the sparse matrix."})]}),(0,r.jsxs)(l.Z,{value:"interface2",label:"\u0700 GetNNZ( obj, from )",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetNNZ(obj, from) RESULT(Ans)\n    TYPE(CSRSparsity_), INTENT(IN) :: obj\n    CHARACTER(1), INTENT(IN) :: from\n    INTEGER(I4B) :: Ans\n  END FUNCTION GetNNZ\nEND INTERFACE\n"})}),(0,r.jsx)(n.p,{children:"In this case we can get number of nonzeros in upper triangular, lowertriangular, diagonal part of the sparse matrix."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'"U" nnz in upper triangular part, j > i.'}),"\n",(0,r.jsx)(n.li,{children:'"L" nnz in lower triangular part, i > j.'}),"\n",(0,r.jsx)(n.li,{children:'"D" nnz in diagonal part, i=j.'}),"\n",(0,r.jsx)(n.li,{children:'"A" nnz in whole matrix, L+U+D.'}),"\n"]})]}),(0,r.jsxs)(l.Z,{value:"interface3",label:"\u0700 GetNNZ( obj, from )",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetNNZ(obj, from) RESULT(Ans)\n    TYPE(CSRSparsity_), INTENT(IN) :: obj\n    CHARACTER(1), INTENT(IN) :: from(1)\n    INTEGER(I4B) :: Ans(3)\n  END FUNCTION GetNNZ\nEND INTERFACE\n\n"})}),(0,r.jsx)(n.p,{children:"This function can return number of nonzeros in upper triangular, lowertriangular, diagonal part of the sparse matrix."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"ans(1) nnz in U."}),"\n",(0,r.jsx)(n.li,{children:"ans(2) nnz in L."}),"\n",(0,r.jsx)(n.li,{children:"ans(3) nnz in D."}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"from"})," is a dummy argument which is not referred (used by this routine), it is used here to create a unique interface."]}),"\n"]})]}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2"})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(67294),a=t(86010),s=t(12466),l=t(16550),i=t(20469),o=t(91980),u=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=f({queryString:t,groupId:a}),[m,N]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),N(e)}),[d,N,s]),tabValues:s}}var N=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function E(e){const n=(0,N.Z)();return(0,j.jsx)(v,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);