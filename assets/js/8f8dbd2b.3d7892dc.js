"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[65311],{54467:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=n(85893),r=n(11151),l=n(74866),i=n(85162);const s={},o="DiagonalScaling",c={id:"CSRMatrix/DiagonalScaling",title:"DiagonalScaling",description:"DiagonalScaling performs diagonal scaling on CSRMatrix.",source:"@site/docs/docs-api/CSRMatrix/DiagonalScaling.md",sourceDirName:"CSRMatrix",slug:"/CSRMatrix/DiagonalScaling",permalink:"/docs-api/CSRMatrix/DiagonalScaling",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/CSRMatrix/DiagonalScaling.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/CSRMatrix/Deallocate"},next:{title:"Display",permalink:"/docs-api/CSRMatrix/Display"}},u={},d=[];function p(e){const a={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"diagonalscaling",children:"DiagonalScaling"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"DiagonalScaling"})," performs diagonal scaling on CSRMatrix."]}),"\n",(0,t.jsx)(a.p,{children:"Calling example:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"CALL DiagonalScaling(obj, side, OPERATOR)\nCALL DiagonalScaling(obj, side, diag, OPERATOR)\n"})}),"\n","\n","\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE DiagonalScaling(obj, side, OPERATOR)\n    CLASS(CSRMatrix_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: side\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR\n  END SUBROUTINE DiagonalScaling\nEND INTERFACE\n"})}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"side"}),' can have any value from ("LEFT", "RIGHT", "BOTH")']}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"operator"}),', can be "SQRT" (default) and "NONE".']}),"\n"]})]}),(0,t.jsx)(i.Z,{value:"example1",label:"\ufe0f\u0700 Example 1"}),(0,t.jsx)(i.Z,{value:"example2",label:"\ufe0f\u0700 Example 2"}),(0,t.jsx)(i.Z,{value:"example3",label:"\ufe0f\u0700 Example 3"}),(0,t.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",children:[(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE DiagonalScaling(obj, side, diag, OPERATOR)\n    CLASS(CSRMatrix_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: side\n    REAL(DFP), INTENT(IN) :: diag(:)\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: OPERATOR\n  END SUBROUTINE DiagonalScaling\nEND INTERFACE\n"})}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"side"}),' can have any value from ("LEFT", "RIGHT", "BOTH")']}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"operator"}),', can be "SQRT" (default) and "NONE".']}),"\n"]})]}),(0,t.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example"}),(0,t.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function f(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>i});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){let{children:a,hidden:n,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>N});var t=n(67294),r=n(86010),l=n(12466),i=n(16550),s=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function f(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function m(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,d]=h({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=c??m;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function v(e){let{className:a,block:n,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const a=e.currentTarget,n=o.indexOf(a),r=s[n].value;r!==t&&(c(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function T(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function E(e){const a=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...a}),(0,x.jsx)(T,{...e,...a})]})}function N(e){const a=(0,b.Z)();return(0,x.jsx)(E,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>i});var t=n(67294);const r={},l=t.createContext(r);function i(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);