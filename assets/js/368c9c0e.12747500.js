"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96099],{22676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var a=n(85893),l=n(11151),s=n(74866),r=n(85162);function i(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["This example shows the usage of ",(0,a.jsx)(t.a,{href:"/docs-api/Display_Method/Display",children:"Display"})," method."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'module test_Display\nuse easifemBase\nimplicit none\n\ncontains\n\nsubroutine test1\n  call display(msg="msg = ", unitno=stdout)\n  call display( "test-1 [OK!]")\nend subroutine test1\n\nsubroutine test2\n  call display( msg="hello", val=" world!", unitno=stdout)\n  call display( "test-2 [OK!]")\nend subroutine test2\n\nsubroutine test3\n  call display( val=1.0_DFP, msg="REAL-SCALAR", unitno=stdout)\n  call display( "test-3 [OK!]")\nend subroutine test3\n\nsubroutine test4\n  call display( val=1_I4B, msg="INT-SCALAR", unitno=stdout)\n  call display( "test-4 [OK!]")\nend subroutine test4\n\nsubroutine test5\n  call display( val=.TRUE., msg="LOGICAL-scalar", unitno=stdout)\n  call display( "test-5 [OK!]")\nend subroutine test5\n\nsubroutine test6\n  real( dfp ) :: vec(10)\n  call RANDOM_NUMBER(vec)\n  call display( val=vec, msg="Vector-default", unitno=stdout)\n  call display( val=vec, msg="Vector-col", unitno=stdout, orient="col")\n  call display( "test-6 [OK!]")\nend subroutine test6\n\nsubroutine test7\n  integer( i4b ) :: vec(10)\n  vec(1:5) = 1; vec(6:)=2\n  call display( val=vec, msg="Vector-default", unitno=stdout)\n  call display( val=vec, msg="Vector-row", unitno=stdout, orient="row")\n  call display( "test-7 [OK!]")\nend subroutine test7\n\nsubroutine test8\n  real( dfp ) :: mat(10, 10)\n  call RANDOM_NUMBER(mat)\n  call display( val=mat, msg="Rank2 Array", unitno=stdout)\n  call display( "test-8 [OK!]")\nend subroutine test8\n\nsubroutine test9\n  real( dfp ) :: mat(5, 5, 2)\n  call RANDOM_NUMBER(mat)\n  call display( val=mat, msg="Rank3 Array", unitno=stdout)\n  call display( "test-9 [OK!]")\nend subroutine test9\n\nsubroutine test10\n  real( dfp ) :: mat(3, 3, 2, 2)\n  call RANDOM_NUMBER(mat)\n  call display( val=mat, msg="Rank4 Array", unitno=stdout)\n  call display( "test-10 [OK!]")\nend subroutine test10\n\nsubroutine test11\n  call display( TOSTRING( 1 ) )\n  call display( TOSTRING( 1.0 ) )\n  call display( TOSTRING( [1,2,3] ) )\n  call display( TOSTRING( [1.0, 2.0, 3.0] ) )\n  call display( "test-10 [OK!]")\nend subroutine\n\nend module test_Display\n\n\nprogram main\n  use test_Display\n  implicit none\n  call TIMESTAMP()\n  call setDisplayProfile( DisplayProfileTerminal )\n  call test1; call test2; call test3; call test4\n  call test5; call test6; call test7; call test8\n  call test9; call test10; call test11; \nend program main\n'})})]})}function o(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const u={},c="Display",d={id:"Display_Method/Display",title:"Display",description:"Display function prints  variable on the screen.",source:"@site/docs/docs-api/Display_Method/Display.md",sourceDirName:"Display_Method",slug:"/Display_Method/Display",permalink:"/docs-api/Display_Method/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Display_Method/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display_Method",permalink:"/docs-api/Display_Method/"},next:{title:"SetDisplayProfile",permalink:"/docs-api/Display_Method/SetDisplayProfile"}},p={},m=[];function f(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,a.jsx)(t.p,{children:"Display function prints  variable on the screen."}),"\n","\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"interface",label:"\u0700 Scalar",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"SUBROUTINE Display(msg, unitno, advance)\n  ! Dummt arguments\n  CHARACTER(*), INTENT(IN) :: msg\n  !! input message\n  INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno\n  !! unit no\n  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: advance\n  ! Internal variables\nEND SUBROUTINE\n"})})}),(0,a.jsx)(r.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(o,{})}),(0,a.jsx)(r.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(86010);const l={tabItem:"tabItem_Ymn6"};var s=n(85893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,r),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(67294),l=n(86010),s=n(12466),r=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const l=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(l.location.search);t.set(s,e),l.replace({...l.location,search:t.toString()})}),[s,l])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,s=p(e),[r,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:l}),[b,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,s]=(0,c.Nk)(n);return[l,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:l}),y=(()=>{const e=u??b;return m({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{y&&o(y)}),[y]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=n(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function g(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),l=i[n].value;l!==a&&(u(t),r(l))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,l.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function D(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function N(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,l.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(D,{...e,...t})]})}function T(e){const t=(0,h.Z)();return(0,v.jsx)(N,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const l={},s=a.createContext(l);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);