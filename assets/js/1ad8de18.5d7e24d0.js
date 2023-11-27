"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[88480],{50661:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>x,frontMatter:()=>m,metadata:()=>f,toc:()=>g});var t=r(85893),a=r(11151),l=r(74866),o=r(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Line\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"  ans (order=1)=  \n------------------\n-1.00000   1.00000\n 0.00000   0.00000\n 0.00000   0.00000\n \n \n       ans (order=2)=       \n----------------------------\n-1.00000   1.00000   0.00000\n 0.00000   0.00000   0.00000\n 0.00000   0.00000   0.00000\n \n \n            ans (order=3)=            \n--------------------------------------\n-1.00000   1.00000  -0.33333   0.33333\n 0.00000   0.00000   0.00000   0.00000\n 0.00000   0.00000   0.00000   0.00000\n"})})})]})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function c(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Triangle\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"      ans (order=1)=     \n-------------------------\n0.00000  1.00000  0.00000\n0.00000  0.00000  1.00000\n0.00000  0.00000  0.00000\n \n \n                   ans (order=2)=                   \n----------------------------------------------------\n0.00000  1.00000  0.00000  0.50000  0.50000  0.00000\n0.00000  0.00000  1.00000  0.00000  0.50000  0.50000\n0.00000  0.00000  0.00000  0.00000  0.00000  0.00000\n \n \n                                     ans (order=3)=                                     \n----------------------------------------------------------------------------------------\n0.00000  1.00000  0.00000  0.33333  0.66667  0.66667  0.33333  0.00000  0.00000  0.33333\n0.00000  0.00000  1.00000  0.00000  0.00000  0.33333  0.66667  0.66667  0.33333  0.33333\n0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000  0.00000\n"})})})]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function u(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2, order, elemType\n  real(dfp), allocatable :: ans( :, : ),  xij(:,:)\n\n  order=1; elemType=Quadrangle\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=2\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\n\n  order=3\n  ans = EquidistancePoint(order=order, elemType=elemType)\n  call display( ans, "ans (order="//tostring(order)//")=" )\n  call blanklines(nol=2)\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"            ans (order=1)=            \n--------------------------------------\n-1.00000   1.00000   1.00000  -1.00000\n-1.00000  -1.00000   1.00000   1.00000\n 0.00000   0.00000   0.00000   0.00000\n \n \n                                     ans (order=2)=                                     \n----------------------------------------------------------------------------------------\n-1.00000   1.00000   1.00000  -1.00000   0.00000   1.00000   0.00000  -1.00000   0.00000\n-1.00000  -1.00000   1.00000   1.00000  -1.00000   0.00000   1.00000   0.00000   0.00000\n 0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000\n \n \n                                                                        ans (order=3)=                        \n--------------------------------------------------------------------------------------------------------------\n------------------------------------------------\n-1.00000   1.00000   1.00000  -1.00000  -0.33333   0.33333   1.00000   1.00000   0.33333  -0.33333  -1.00000  \n-1.00000  -0.33333   0.33333   0.33333  -0.33333\n-1.00000  -1.00000   1.00000   1.00000  -1.00000  -1.00000  -0.33333   0.33333   1.00000   1.00000   0.33333  \n-0.33333  -0.33333  -0.33333   0.33333   0.33333\n 0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000   0.00000  \n 0.00000   0.00000   0.00000   0.00000   0.00000\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}const m={},h="EquidistancePoint",f={id:"LagrangePolynomialUtility/EquidistancePoint",title:"EquidistancePoint",description:"Returns the equidistance points on 1D/2D/3D elements.",source:"@site/docs/docs-api/LagrangePolynomialUtility/EquidistancePoint.md",sourceDirName:"LagrangePolynomialUtility",slug:"/LagrangePolynomialUtility/EquidistancePoint",permalink:"/docs-api/LagrangePolynomialUtility/EquidistancePoint",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LagrangePolynomialUtility/EquidistancePoint.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lagrange",permalink:"/docs-api/LagrangePolynomialUtility/"},next:{title:"InterpolationPoint",permalink:"/docs-api/LagrangePolynomialUtility/InterpolationPoint"}},b={},g=[{value:"Interface",id:"interface",level:2}];function y(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"equidistancepoint",children:"EquidistancePoint"}),"\n",(0,t.jsx)(n.p,{children:"Returns the equidistance points on 1D/2D/3D elements."}),"\n",(0,t.jsx)(n.p,{children:"The nodes are numbered as per the Gmsh convention."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION EquidistancePoint(order, xij, elemType) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    INTEGER(I4B), INTENT(IN) :: elemType\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n  END FUNCTION EquidistancePoint\nEND INTERFACE\n"})})}),(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(i,{})}),(0,t.jsx)(o.Z,{value:"example2",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(o.Z,{value:"example3",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(p,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(86010);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>E});var t=r(67294),a=r(86010),l=r(12466),o=r(16550),s=r(20469),i=r(91980),c=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=h({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),g=(()=>{const e=c??f;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,l]),tabValues:l}}var b=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(85893);function x(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),a=s[r].value;a!==t&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,a.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...e,...n}),(0,y.jsx)(j,{...e,...n})]})}function E(e){const n=(0,b.Z)();return(0,y.jsx)(v,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>o});var t=r(67294);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);