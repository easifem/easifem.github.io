"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33907],{65074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=n(85893),a=n(11151),s=n(74866),i=n(85162);function l(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\ncall Display(expmesh(rmin=1.0, rmax=100.0, a=10.0, N=10), "ans: ", full=.true. )\nend program main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-txt",metastring:'title="results"',children:" ans:  \n-------\n  1.000\n  3.422\n  6.551\n 10.592\n 15.810\n 22.551\n 31.256\n 42.500\n 57.021\n 75.777\n100.000\n"})})})]})]})}function o(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}const u={},c="ExpMesh",d={id:"GridPointUtility/ExpMesh",title:"ExpMesh",description:"Generates exponential mesh.",source:"@site/docs/docs-api/GridPointUtility/ExpMesh.md",sourceDirName:"GridPointUtility",slug:"/GridPointUtility/ExpMesh",permalink:"/docs-api/GridPointUtility/ExpMesh",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GridPointUtility/ExpMesh.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GridPointUtility",permalink:"/docs-api/GridPointUtility/"},next:{title:"LinSpace",permalink:"/docs-api/GridPointUtility/LinSpace"}},p={},m=[{value:"Interface",id:"interface",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"expmesh",children:"ExpMesh"}),"\n",(0,r.jsx)(t.p,{children:"Generates exponential mesh."}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE ExpMesh\n  MODULE PURE FUNCTION ExpMesh(rmin, rmax, a, N) RESULT(Ans)\n    REAL(REAL32), INTENT(IN) :: rmin\n    !! left end of 1D domain\n    REAL(REAL32), INTENT(IN) :: rmax\n    !! right end of 1D domain\n    REAL(REAL32), INTENT(IN) :: a\n    !! Ratio of largest to smallest element, a should be positive\n    !! a = 1, then we get uniform mesh\n    INTEGER(I4B), INTENT(IN) :: N\n    !! Number of elements present in mesh\n    REAL(REAL32) :: ans(N + 1)\n    !! Number of nodes in mesh\n  END FUNCTION ExpMesh\nEND INTERFACE ExpMesh\n"})})}),(0,r.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),a=n(86010),s=n(12466),i=n(16550),l=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function E(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function N(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(E,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,v.jsx)(N,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(67294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);