"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2219],{24218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(85893),r=t(11151),s=t(74866),i=t(85162);function o(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nREAL(DFP), ALLOCATABLE :: xxx(:, :, :), yyy(:, :, :), zzz(:, :, :), &\n& x(:), y(:), z(:), basisValue(:, :), val(:, :, :)\nTYPE(VTKPlot_) :: avtk\nTYPE(string) :: label(8)\nINTEGER(I4B) :: ii\n\nx = linspace(-1.0_DFP, 1.0_DFP, 11)\ny = linspace(-1.0_DFP, 1.0_DFP, 11)\nz = linspace(-1.0_DFP, 1.0_DFP, 11)\nCALL MeshGrid(xxx, yyy, zzz, x, y, z)\nx = RESHAPE(xxx, [SIZE(xxx)])\ny = RESHAPE(yyy, [SIZE(yyy)])\nz = RESHAPE(zzz, [SIZE(zzz)])\n\nbasisValue = VertexBasis_Hexahedron(x, y, z)\n\nDO ii = 1, SIZE(label)\n  label(ii) = tostring(ii)\nEND DO\n\nCALL avtk%Plot(xxx, yyy, zzz, basisValue, label, "vertexBasis.vts")\n\nEND PROGRAM main\n'})})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}const c={},u="VertexBasis",d={id:"HexahedronInterpolationUtility/VertexBasis_Hexahedron",title:"VertexBasis",description:"Returns the vertex basis.",source:"@site/docs/docs-api/HexahedronInterpolationUtility/VertexBasis_Hexahedron.md",sourceDirName:"HexahedronInterpolationUtility",slug:"/HexahedronInterpolationUtility/VertexBasis_Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/VertexBasis_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HexahedronInterpolationUtility/VertexBasis_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"QuadraturePoint",permalink:"/docs-api/HexahedronInterpolationUtility/QuadraturePoint_Hexahedron"},next:{title:"xEdgeBasis",permalink:"/docs-api/HexahedronInterpolationUtility/xEdgeBasis_Hexahedron"}},x={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"vertexbasis",children:"VertexBasis"}),"\n",(0,a.jsx)(n.p,{children:"Returns the vertex basis."}),"\n",(0,a.jsx)("iframe",{src:"/elements/hexahedron/vertexBasis.html",height:"600",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)("iframe",{src:"/elements/hexahedron/vertexBasis2.html",height:"600",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE VertexBasis_Hexahedron\n MODULE PURE FUNCTION VertexBasis_Hexahedron1(x, y, z) &\n    & RESULT(ans)\n   REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)\n   !! point of evaluation\n   REAL(DFP) :: ans(SIZE(x), 8)\n   !! ans(:,v1) basis function of vertex v1 at all points\n END FUNCTION VertexBasis_Hexahedron1\nEND INTERFACE VertexBasis_Hexahedron\n"})}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"x"})})}),(0,a.jsx)(n.p,{children:"x coordinate of all points."}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"y"})})}),(0,a.jsx)(n.p,{children:"y coordinate of all points."}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"z"})})}),(0,a.jsx)(n.p,{children:"z coordinate of all points."})]}),(0,a.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(l,{})}),(0,a.jsx)(i.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE VertexBasis_Hexahedron\n  MODULE PURE FUNCTION VertexBasis_Hexahedron3(xij) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: xij(:, :)\n    !! point of evaluation\n    REAL(DFP) :: ans(SIZE(xij, 2), 8)\n    !! ans(:,v1) basis function of vertex v1 at all points\n  END FUNCTION VertexBasis_Hexahedron3\nEND INTERFACE VertexBasis_Hexahedron\n"})})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>g});var a=t(67294),r=t(86010),s=t(12466),i=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=x(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=c??f;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function E(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(E,{...e,...n})]})}function g(e){const n=(0,m.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var a=t(67294);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);