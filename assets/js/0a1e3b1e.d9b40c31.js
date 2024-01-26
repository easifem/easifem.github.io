"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45581],{71003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>d,toc:()=>f});var a=n(85893),r=n(11151),l=n(74866),i=n(85162);function s(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\n\tREAL( DFP ), ALLOCATABLE :: mat(:,:), w(:), exact(:)\n\tREAL( DFP ), PARAMETER :: tol= 1.0E-2\n\t\n\tmat =RESHAPE( &\n\t\t[   1.96, -6.49, -0.47, -7.20, -0.65, &\n\t\t\t& -6.49, 3.80, -6.39, 1.50, -6.34, &\n\t\t\t& -0.47,-6.39, 4.17, -1.51, 2.67, &\n\t\t\t& -7.20, 1.50,-1.51, 5.70, 1.80, &\n\t\t\t& -0.65,-6.34, 2.67, 1.80,-7.10 &\n\t\t], [5,5])\n\t!!\n\tw = SymEigenValues(mat)\n\t!!\n\texact = [-11.07, -6.23, 0.86, 8.87, 16.09]\n\t!!\n\tCALL OK( ALL(SOFTEQ(w, exact, tol)), "")\nEND PROGRAM main\n'})})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const u={},c="SymEigenValues",d={id:"EigenUtility/SymEigenValues",title:"SymEigenValues",description:"This function calculates eigenvalues of a symmetric matrix.",source:"@site/docs/docs-api/EigenUtility/SymEigenValues.md",sourceDirName:"EigenUtility",slug:"/EigenUtility/SymEigenValues",permalink:"/docs-api/EigenUtility/SymEigenValues",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/EigenUtility/SymEigenValues.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSymEigenValues_",permalink:"/docs-api/EigenUtility/GetSymEigenValues_"},next:{title:"SymEigenValues2by2",permalink:"/docs-api/EigenUtility/SymEigenValues2by2"}},m={},f=[];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"symeigenvalues",children:"SymEigenValues"}),"\n",(0,a.jsx)(t.p,{children:"This function calculates eigenvalues of a symmetric matrix."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.code,{children:"n=2"})," it calls ",(0,a.jsx)(t.a,{href:"/docs-api/EigenUtility/SymEigenValues2by2",children:"SymEigenValues2y2"})]}),"\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.code,{children:"n=3"})," it calls ",(0,a.jsx)(t.a,{href:"/docs-api/EigenUtility/SymEigenValues3by3",children:"SymEigenValues3by3"})]}),"\n",(0,a.jsxs)(t.li,{children:["For ",(0,a.jsx)(t.code,{children:"n>=4"})," it calls ",(0,a.jsx)(t.code,{children:"SYEV"})," routine from Lapack95"]}),"\n"]})}),"\n","\n","\n",(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION SymEigenValues(mat) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: mat(:, :)\n    !! for n=2, we call SymEigenValues2by2\n    !! for n=3, we call SymEigenValues3by3\n    !! for n>=4, we call Lapack or JacobiMethod\n    REAL(DFP) :: ans(SIZE(mat, 1))\n  END FUNCTION SymEigenValues\nEND INTERFACE\n"})})}),(0,a.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(o,{})}),(0,a.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>V});var a=n(67294),r=n(86010),l=n(12466),i=n(16550),s=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=p({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=u??h;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function E(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=s[n].value;r!==a&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(E,{...e,...t}),(0,y.jsx)(v,{...e,...t})]})}function V(e){const t=(0,b.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const r={},l=a.createContext(r);function i(e){const t=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);