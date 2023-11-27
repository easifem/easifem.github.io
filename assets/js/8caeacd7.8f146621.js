"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43093],{93997:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=s(85893),t=s(11151),r=s(74866),i=s(85162);function l(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nREAL(DFP), ALLOCATABLE :: xxx(:, :, :), yyy(:, :, :), zzz(:, :, :), &\n& x(:), y(:), z(:), basisValue(:, :), val(:, :, :)\nTYPE(VTKPlot_) :: avtk\nTYPE(string) :: label(2)\nINTEGER(I4B) :: ii\n\nx = linspace(-1.0_DFP, 1.0_DFP, 11)\ny = linspace(-1.0_DFP, 1.0_DFP, 11)\nz = linspace(-1.0_DFP, 1.0_DFP, 11)\nCALL MeshGrid(xxx, yyy, zzz, x, y, z)\nx = RESHAPE(xxx, [SIZE(xxx)])\ny = RESHAPE(yyy, [SIZE(yyy)])\nz = RESHAPE(zzz, [SIZE(zzz)])\n\nbasisValue = FacetBasis_Hexahedron(2, 2, x, y, z, dim1=1_I4B, dim2=3_I4B)\n\nDO ii = 1, SIZE(label)\n  label(ii) = tostring(ii)\nEND DO\n\nCALL avtk%Plot(xxx, yyy, zzz, basisValue, label, "xzFacetBasis.vts")\n\nEND PROGRAM main\n'})})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}const c={},d="xzFacetBasis",u={id:"HexahedronInterpolationUtility/xzFacetBasis_Hexahedron",title:"xzFacetBasis",description:"Returns the basis on facets which are parallel to xz-plane.",source:"@site/docs/docs-api/HexahedronInterpolationUtility/xzFacetBasis_Hexahedron.md",sourceDirName:"HexahedronInterpolationUtility",slug:"/HexahedronInterpolationUtility/xzFacetBasis_Hexahedron",permalink:"/docs-api/HexahedronInterpolationUtility/xzFacetBasis_Hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/HexahedronInterpolationUtility/xzFacetBasis_Hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"xyFacetBasis",permalink:"/docs-api/HexahedronInterpolationUtility/xyFacetBasis_Hexahedron"},next:{title:"yEdgeBasis",permalink:"/docs-api/HexahedronInterpolationUtility/yEdgeBasis_Hexahedron"}},m={},h=[{value:"Interface 1",id:"interface-1",level:2}];function x(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"xzfacetbasis",children:"xzFacetBasis"}),"\n",(0,a.jsx)(n.p,{children:"Returns the basis on facets which are parallel to xz-plane."}),"\n",(0,a.jsx)("iframe",{src:"/elements/hexahedron/xzFacetBasis.html",height:"600",width:"100%",scrolling:"no"}),"\n",(0,a.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(i.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE yzFacetBasis_Hexahedron\n MODULE PURE FUNCTION yzFacetBasis_Hexahedron1(  &\n   & n1, &\n   & n2, &\n   & x,   &\n   & y,   &\n   & z)   &\n   & RESULT(ans)\n   INTEGER(I4B), INTENT(IN) :: n1\n   !! order along axis 1 of yz face\n   INTEGER(I4B), INTENT(IN) :: n2\n   !! order along axis 2 of yz face\n   REAL(DFP), INTENT(IN) :: x(:), y(:), z(:)\n   !! point of evaluation\n   !! these points should be between [-1, 1].\n   REAL(DFP) :: ans( &\n     & SIZE(x), &\n     & (n1 - 1_I4B) * (n2 - 1_I4B) * 2_I4B)\n END FUNCTION yzFacetBasis_Hexahedron1\nEND INTERFACE yzFacetBasis_Hexahedron\n"})}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"n1, n2"})})}),(0,a.jsxs)(n.p,{children:["These are order of approximations along the ",(0,a.jsx)(n.code,{children:"x"})," and ",(0,a.jsx)(n.code,{children:"z"})," axis."]}),(0,a.jsx)(n.span,{className:"katex-display",children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mn,{children:"1"})]}),(0,a.jsx)(n.mo,{separator:"true",children:","}),(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"n"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.mo,{children:"\u2265"}),(0,a.jsx)(n.mn,{children:"2"})]}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"n_{1}, n_{2} \\ge 2"})]})})}),(0,a.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8304em",verticalAlign:"-0.1944em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"1"})})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]}),(0,a.jsx)(n.span,{className:"mpunct",children:","}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.3011em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:"2"})})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,a.jsx)(n.span,{className:"mrel",children:"\u2265"}),(0,a.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,a.jsx)(n.span,{className:"mord",children:"2"})]})]})]})}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"x"})})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"x"})," coordinate of all points."]}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"y"})})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"y"})," coordinate of all points."]}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.mdxAdmonitionTitle,{children:(0,a.jsx)(n.code,{children:"z"})})}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"z"})," coordinate of all points."]})]}),(0,a.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(o,{})}),(0,a.jsx)(i.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}},85162:(e,n,s)=>{s.d(n,{Z:()=>i});s(67294);var a=s(86010);const t={tabItem:"tabItem_Ymn6"};var r=s(85893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,i),hidden:s,children:n})}},74866:(e,n,s)=>{s.d(n,{Z:()=>v});var a=s(67294),t=s(86010),r=s(12466),i=s(16550),l=s(20469),o=s(91980),c=s(67392),d=s(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:t}}=e;return{value:n,label:s,attributes:a,default:t}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=x({queryString:s,groupId:t}),[p,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,d.Nk)(s);return[t,(0,a.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),j=(()=>{const e=c??p;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=s(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(85893);function y(e){let{className:n,block:s,selectedValue:a,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=l[s].value;t!==a&&(c(n),i(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,t.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function N(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function g(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(y,{...e,...n}),(0,b.jsx)(N,{...e,...n})]})}function v(e){const n=(0,f.Z)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var a=s(67294);const t={},r=a.createContext(t);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);