"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[4539],{71033:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=n(85893),r=n(11151),s=n(74866),l=n(85162);function i(e){const a={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: i1, i2\n  i1 = LagrangeInDOF_Quadrangle(order=1)\n  i2 = 0\n  call IS( i1, i2 )\n  i1 = LagrangeInDOF_Quadrangle(order=2)\n  i2 = 1\n  call IS( i1, i2 )\n  i1 = LagrangeInDOF_Quadrangle(order=3)\n  i2 = 4\n  call IS( i1, i2 )\nend program main\n"})})}function o(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const c={},u="LagrangeInDOF",d={id:"QuadrangleInterpolationUtility/LagrangeInDOF_Quadrangle",title:"LagrangeInDOF",description:"Returns the total number of degree of freedom for a lagrange polynomial in cell/face of triangle.",source:"@site/docs/docs-api/QuadrangleInterpolationUtility/LagrangeInDOF_Quadrangle.md",sourceDirName:"QuadrangleInterpolationUtility",slug:"/QuadrangleInterpolationUtility/LagrangeInDOF_Quadrangle",permalink:"/docs-api/QuadrangleInterpolationUtility/LagrangeInDOF_Quadrangle",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/QuadrangleInterpolationUtility/LagrangeInDOF_Quadrangle.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LagrangeEvalAll",permalink:"/docs-api/QuadrangleInterpolationUtility/LagrangeEvalAll_Quadrangle"},next:{title:"QuadraturePoint",permalink:"/docs-api/QuadrangleInterpolationUtility/QuadraturePoint_Quadrangle"}},m={},p=[{value:"Interface 1",id:"interface-1",level:2}];function h(e){const a={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"lagrangeindof",children:"LagrangeInDOF"}),"\n",(0,t.jsx)(a.p,{children:"Returns the total number of degree of freedom for a lagrange polynomial in cell/face of triangle."}),"\n",(0,t.jsx)(a.admonition,{title:"The dof are strictly inside the triangle.",type:"note"}),"\n",(0,t.jsx)(a.p,{children:"The total number of DOF inside the triangle is given by:"}),"\n",(0,t.jsx)(a.span,{className:"katex-display",children:(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mo,{stretchy:"false",children:"("}),(0,t.jsx)(a.mi,{children:"p"}),(0,t.jsx)(a.mo,{children:"\u2212"}),(0,t.jsx)(a.mn,{children:"1"}),(0,t.jsx)(a.mo,{stretchy:"false",children:")"}),(0,t.jsx)(a.mo,{children:"\u2217"}),(0,t.jsx)(a.mo,{stretchy:"false",children:"("}),(0,t.jsx)(a.mi,{children:"q"}),(0,t.jsx)(a.mo,{children:"\u2212"}),(0,t.jsx)(a.mn,{children:"1"}),(0,t.jsx)(a.mo,{stretchy:"false",children:")"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"(p-1)*(q-1)"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mopen",children:"("}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"p"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"}),(0,t.jsx)(a.span,{className:"mclose",children:")"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mopen",children:"("}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"q"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(a.span,{className:"mbin",children:"\u2212"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,t.jsx)(a.span,{className:"mord",children:"1"}),(0,t.jsx)(a.span,{className:"mclose",children:")"})]})]})]})}),"\n",(0,t.jsx)(a.h2,{id:"interface-1",children:"Interface 1"}),"\n","\n","\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LagrangeInDOF_Quadrangle(order) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    INTEGER(I4B) :: ans\n  END FUNCTION LagrangeInDOF_Quadrangle\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function g(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:a,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>N});var t=n(67294),r=n(86010),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,l.k6)(),s=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function g(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,s=m(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:s}))),[c,d]=h({queryString:n,groupId:r}),[g,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const a=e.currentTarget,n=o.indexOf(a),r=i[n].value;r!==t&&(c(a),l(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function v(e){let{lazy:a,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=g(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...a}),(0,b.jsx)(v,{...e,...a})]})}function N(e){const a=(0,f.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var t=n(67294);const r={},s=t.createContext(r);function l(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);