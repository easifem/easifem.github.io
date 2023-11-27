"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[33193],{28837:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>h,default:()=>m,frontMatter:()=>o,metadata:()=>x,toc:()=>u});var r=t(85893),s=t(11151),i=t(74866),l=t(85162);function d(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:t,TabItem:i,Tabs:l}=n;return t||c("Details",!0),i||c("TabItem",!0),l||c("Tabs",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(RefTriangle_) :: obj\n\nCALL obj%Initiate(nsd=2, baseInterpol="Lagrange", baseContinuity="H1")\nCALL Display(obj%MdEncode(), "")\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Triangle3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"NSD"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tPoints"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tLines"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tSurfaces"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tVolumes"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseContinuity"}),(0,r.jsx)(n.td,{children:"H1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseInterpolation"}),(0,r.jsx)(n.td,{children:"LagrangeInterpolation"})]})]})]}),(0,r.jsx)(n.p,{children:"Nodal Coordinates:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"y"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),(0,r.jsxs)(l,{children:[(0,r.jsx)(i,{value:"1",label:"PointTopology( 1 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Point1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"1"})]})]})]})}),(0,r.jsx)(i,{value:"2",label:"PointTopology( 2 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Point1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"2"})]})]})]})}),(0,r.jsx)(i,{value:"3",label:"PointTopology( 3 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Point1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"3"})]})]})]})})]}),(0,r.jsxs)(l,{children:[(0,r.jsx)(i,{value:"1",label:"EdgeTopology( 1 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Line2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"2"})]})]})]})}),(0,r.jsx)(i,{value:"2",label:"EdgeTopology( 2 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Line2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"3"})]})]})]})}),(0,r.jsx)(i,{value:"3",label:"EdgeTopology( 3 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Line2"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"1"})]})]})]})})]}),(0,r.jsx)(l,{children:(0,r.jsx)(i,{value:"1",label:"FaceTopology( 1 ) :",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Element type"}),(0,r.jsx)(n.td,{children:"Triangle3"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Xidimension"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Nptrs"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"3"})]})]})]})})}),(0,r.jsx)(n.p,{children:"|  |"})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}function c(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}const o={sidebar_position:4},h="Initiate",x={id:"RefTriangle/Initiate",title:"Initiate",description:"Initiate an instance of reference element",source:"@site/docs/docs-api/RefTriangle/Initiate.md",sourceDirName:"RefTriangle",slug:"/RefTriangle/Initiate",permalink:"/docs-api/RefTriangle/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/RefTriangle/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/RefTriangle/Display"},next:{title:"Copy",permalink:"/docs-api/RefTriangle/Copy"}},j={},u=[{value:"Interface",id:"interface",level:2}];function p(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(n.p,{children:"Initiate an instance of reference element"}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE refelem_Initiate(obj, nsd, baseContinuity, baseInterpol)\n    CLASS(AbstractRefElement_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nsd\n      !! Spatial dimension of element\n    CHARACTER(*), INTENT(IN) :: baseContinuity\n      !! Continuity or Conformity of basis function.\n      !! H1 * Default\n      !! HDiv\n      !! HCurl\n      !! DG\n    CHARACTER(*), INTENT(IN) :: baseInterpol\n      !! Basis function family used for interpolation\n      !! LagrangeInterpolation, LagrangePolynomial\n      !! SerendipityInterpolation, SerendipityPolynomial\n      !! HierarchyInterpolation, HierarchyPolynomial\n      !! OrthogonalInterpolation, OrthogonalPolynomial\n      !! HermitInterpolation, HermitPolynomial\n  END SUBROUTINE refelem_Initiate\nEND INTERFACE\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.mdxAdmonitionTitle,{children:(0,r.jsx)(n.code,{children:"baseInterpol"})})}),(0,r.jsx)(n.p,{children:"It represents the basis function family used for interpolation. Following values are possible:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"LagrangeInterpolation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"LagrangePolynomial"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Lagrange"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"SerendipityInterpolation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Serendipity"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HierarchyInterpolation"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HierarchyPolynomial"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Hierarchy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"OrthogonalInterpolation "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"OrthogonalPolynomial"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Orthogonal"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HermitInterpolation "})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"HermitPolynomial"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Hermit"})}),"\n"]})]}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(a,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>v});var r=t(67294),s=t(86010),i=t(12466),l=t(16550),d=t(20469),a=t(91980),c=t(67392),o=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function u(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=x(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=u({queryString:t,groupId:s}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,o.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),b=(()=>{const e=c??p;return j({value:e,tabValues:i})?e:null})();(0,d.Z)((()=>{b&&a(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:d}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),o=e=>{const n=e.currentTarget,t=a.indexOf(n),s=d[t].value;s!==r&&(c(n),l(s))},h=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:d.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:o,...i,className:(0,s.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function I(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function v(e){const n=(0,m.Z)();return(0,f.jsx)(I,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>l});var r=t(67294);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);