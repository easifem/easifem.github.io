"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[82323],{76356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=t(85893),a=t(11151),i=t(74866),l=t(85162);function o(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nREAL(dfp) :: xij(2, 3)\nxij = RefCoord_Triangle("unit")\nCALL display(xij, "unit triangle : ")\nCALL display(FromUnitTriangle2BiUnitTriangle(xij), "biunit triangle: ")\nEND PROGRAM main\n'})})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const u={},c="FromUnitTriangleToBiUnitTriangle",d={id:"MappingUtility/FromUnitTriangle2BiUnitTriangle",title:"FromUnitTriangleToBiUnitTriangle",description:"This routine provides a biunit triangle to unit triangle mapping.",source:"@site/docs/docs-api/MappingUtility/FromUnitTriangle2BiUnitTriangle.md",sourceDirName:"MappingUtility",slug:"/MappingUtility/FromUnitTriangle2BiUnitTriangle",permalink:"/docs-api/MappingUtility/FromUnitTriangle2BiUnitTriangle",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MappingUtility/FromUnitTriangle2BiUnitTriangle.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FromUnitTriangleToBiUnitQuadrangle",permalink:"/docs-api/MappingUtility/FromUnitTriangle2BiUnitQuadrangle"},next:{title:"FromUnitTriangleToTriangle",permalink:"/docs-api/MappingUtility/FromUnitTriangle2Triangle"}},p={},m=[{value:"Interface",id:"interface",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"fromunittriangletobiunittriangle",children:"FromUnitTriangleToBiUnitTriangle"}),"\n",(0,r.jsx)(n.p,{children:"This routine provides a biunit triangle to unit triangle mapping."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION FromUnitTriangle2BiUnitTriangle(xin) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: xin(:, :)\n    REAL(DFP) :: ans(2, SIZE(xin, 2))\n  END FUNCTION FromUnitTriangle2BiUnitTriangle\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(s,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(86010),i=t(12466),l=t(16550),o=t(20469),s=t(91980),u=t(67392),c=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[u,d]=f({queryString:t,groupId:a}),[g,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=u??g;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,i]),tabValues:i}}var h=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var T=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,T.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,T.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:d,onClick:c,...i,className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function U(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,T.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function x(e){const n=g(e);return(0,T.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,T.jsx)(v,{...e,...n}),(0,T.jsx)(U,{...e,...n})]})}function y(e){const n=(0,h.Z)();return(0,T.jsx)(x,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);