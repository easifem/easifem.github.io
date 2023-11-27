"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[53436],{27467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>h,toc:()=>j});var r=n(85893),s=n(11151),l=n(74866),d=n(85162);function i(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(RefTriangle_) :: obj\nREAL(DFP) :: avar, xij(1, 2)\nCALL obj%Initiate(nsd=1, baseInterpol="Lagrange", baseContinuity="H1")\nCALL Display(obj%ReactEncode(), \'\')\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Triangle3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"2"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"NSD"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tPoints"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tLines"}),(0,r.jsx)(t.td,{children:"3"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tSurfaces"}),(0,r.jsx)(t.td,{children:"1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tVolumes"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseContinuity"}),(0,r.jsx)(t.td,{children:"H1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BaseInterpolation"}),(0,r.jsx)(t.td,{children:"LagrangeInterpolation"})]})]})]}),(0,r.jsx)(t.p,{children:"Nodal Coordinates:"}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"y"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"1"})]})]})]}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{value:"1",label:"PointTopology( 1 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"1"})]})]})]})}),(0,r.jsx)(d.Z,{value:"2",label:"PointTopology( 2 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"2"})]})]})]})}),(0,r.jsx)(d.Z,{value:"3",label:"PointTopology( 3 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Point1"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"3"})]})]})]})})]}),(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{value:"1",label:"EdgeTopology( 1 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Line2"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"2"})]})]})]})}),(0,r.jsx)(d.Z,{value:"2",label:"EdgeTopology( 2 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Line2"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"3"})]})]})]})}),(0,r.jsx)(d.Z,{value:"3",label:"EdgeTopology( 3 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Line2"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"1"})]})]})]})})]}),(0,r.jsx)(l.Z,{children:(0,r.jsx)(d.Z,{value:"1",label:"FaceTopology( 1 ) :",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Element type"}),(0,r.jsx)(t.td,{children:"Triangle3"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Xidimension"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Nptrs"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"3"})]})]})]})})})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},o="ReactEncode",h={id:"RefTriangle/ReactEncode",title:"ReactEncode",description:"This method converts the data into an react element.",source:"@site/docs/docs-api/RefTriangle/ReactEncode.md",sourceDirName:"RefTriangle",slug:"/RefTriangle/ReactEncode",permalink:"/docs-api/RefTriangle/ReactEncode",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/RefTriangle/ReactEncode.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetTopology",permalink:"/docs-api/RefTriangle/GetTopology"},next:{title:"RefCoord",permalink:"/docs-api/RefTriangle/RefCoord"}},x={},j=[{value:"Interface",id:"interface",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"reactencode",children:"ReactEncode"}),"\n",(0,r.jsx)(t.p,{children:"This method converts the data into an react element."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(d.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION refelem_ReactEncode(obj) RESULT(ans)\n    CLASS(AbstractRefElement_), INTENT(IN) :: obj\n    TYPE(String) :: ans\n  END FUNCTION refelem_ReactEncode\nEND INTERFACE\n"})})}),(0,r.jsx)(d.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(a,{})}),(0,r.jsx)(d.Z,{value:"close",label:"\u21a2 "})]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>d});n(67294);var r=n(86010);const s={tabItem:"tabItem_Ymn6"};var l=n(85893);function d(e){let{children:t,hidden:n,className:d}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,d),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(67294),s=n(86010),l=n(12466),d=n(16550),i=n(20469),a=n(91980),c=n(67392),o=n(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function j(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:n}=e;const s=(0,d.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(s.location.search);t.set(l,e),s.replace({...s.location,search:t.toString()})}),[l,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,l=x(e),[d,a]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[c,h]=u({queryString:n,groupId:s}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,l]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:s}),m=(()=>{const e=c??p;return j({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:d,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,l]),tabValues:l}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:d,tabValues:i}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),o=e=>{const t=e.currentTarget,n=a.indexOf(t),s=i[n].value;s!==r&&(c(t),d(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>a.push(e),onKeyDown:h,onClick:o,...l,className:(0,s.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function E(e){const t=(0,b.Z)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>d});var r=n(67294);const s={},l=r.createContext(s);function d(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);