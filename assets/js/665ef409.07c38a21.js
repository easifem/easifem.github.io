"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[56655],{9139:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var a=t(85893),o=t(11151),r=t(74866),l=t(85162);function s(e){const n={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: coeff(:, :)\n  type(string) :: astr\n  n = 5\n  astr = MdEncode( LobattoMonomialExpansion( n=n ) )\n  call display( astr%chars(), "" )\nend program main\n'})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"x0"}),(0,a.jsx)(n.th,{children:"x1"}),(0,a.jsx)(n.th,{children:"x2"}),(0,a.jsx)(n.th,{children:"x3"}),(0,a.jsx)(n.th,{children:"x4"}),(0,a.jsx)(n.th,{children:"x5"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"0.7955"}),(0,a.jsx)(n.td,{children:"-0"}),(0,a.jsx)(n.td,{children:"-2.6517"}),(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"1.8562"})]})})]})]})}function i(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const c={},u="UnscaledLobattoMonomialExpansion",d={id:"UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansion",title:"UnscaledLobattoMonomialExpansion",description:"Returns all the monomial expansion of a UnscaledLobatto polynomials.",source:"@site/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansion.md",sourceDirName:"UnscaledLobattoPolynomialUtility",slug:"/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansion",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansion",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansion.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnscaledLobattoMassMatrix",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMassMatrix"},next:{title:"UnscaledLobattoMonomialExpansionAll",permalink:"/docs-api/UnscaledLobattoPolynomialUtility/UnscaledLobattoMonomialExpansionAll"}},h={},m=[{value:"Interface",id:"interface",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"unscaledlobattomonomialexpansion",children:"UnscaledLobattoMonomialExpansion"}),"\n",(0,a.jsx)(n.p,{children:"Returns all the monomial expansion of a UnscaledLobatto polynomials."}),"\n","\n","\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UnscaledLobattoMonomialExpansion(n) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP) :: ans(1:n + 1)\n  END FUNCTION UnscaledLobattoMonomialExpansion\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"n : is the order of the polynomial"}),"\n",(0,a.jsx)(n.li,{children:"ans(:) contains the coefficient of monomials for polynomial order=n"}),"\n"]})]})}function b(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(86010);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>U});var a=t(67294),o=t(86010),r=t(12466),l=t(16550),s=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:t,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),x=(()=>{const e=c??b;return m({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=s[t].value;o!==a&&(c(n),l(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function g(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function U(e){const n=(0,f.Z)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var a=t(67294);const o={},r=a.createContext(o);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);