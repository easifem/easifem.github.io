"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76249],{65125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>x});var r=n(85893),a=n(11151),s=n(74866),l=n(85162);function i(e){const t={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["This example shows the usage of ",(0,r.jsx)(t.code,{children:"LobattoMassMatrix"})," method."]}),"\n",(0,r.jsx)(t.p,{children:"This routine evaluates mass matrix for lobatto polynomials."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans(:,:)\n  type(string) :: astr\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  n = 0\n  call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.th,{})})}),(0,r.jsx)(t.tbody,{children:(0,r.jsx)(t.tr,{children:(0,r.jsx)(t.td,{children:"0.66667"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  n = 1\n  call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"0.33333"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"0.66667"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  n = 2\n  call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"-0.40825"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"-0.40825"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"0.4"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  n = 3\n  call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"0.10541"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"-0.10541"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"0.4"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.10541"}),(0,r.jsx)(t.td,{children:"-0.10541"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"9.52381E-02"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"  n = 4\n  call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"0.10541"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.33333"}),(0,r.jsx)(t.td,{children:"0.66667"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"-0.10541"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"-0.40825"}),(0,r.jsx)(t.td,{children:"0.4"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-4.36436E-02"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.10541"}),(0,r.jsx)(t.td,{children:"-0.10541"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"9.52381E-02"}),(0,r.jsx)(t.td,{children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"-4.36436E-02"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"4.44444E-02"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= LobattoMassMatrix( n=n )\n    astr = MdEncode(ans)\n    CALL Display( "Lobatto mass matrix = " )\n    CALL Display(astr, "" )\n    call blanklines(nol=2)\n  end subroutine callme\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},d="LobattoMassMatrix",u={id:"LobattoPolynomialUtility/LobattoMassMatrix",title:"LobattoMassMatrix",description:"Returns the Mass matrix for Lobatto polynomials.",source:"@site/docs/docs-api/LobattoPolynomialUtility/LobattoMassMatrix.md",sourceDirName:"LobattoPolynomialUtility",slug:"/LobattoPolynomialUtility/LobattoMassMatrix",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMassMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LobattoPolynomialUtility/LobattoMassMatrix.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LobattoLeadingCoeff",permalink:"/docs-api/LobattoPolynomialUtility/LobattoLeadingCoeff"},next:{title:"LobattoMonomialExpansion",permalink:"/docs-api/LobattoPolynomialUtility/LobattoMonomialExpansion"}},h={},x=[{value:"Interface",id:"interface",level:2}];function j(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"lobattomassmatrix",children:"LobattoMassMatrix"}),"\n",(0,r.jsx)(t.p,{children:"Returns the Mass matrix for Lobatto polynomials."}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LobattoMassMatrix(n) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    REAL(DFP) :: ans(n + 1, n + 1)\n  END FUNCTION LobattoMassMatrix\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>L});var r=n(67294),a=n(86010),s=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=j({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),p=(()=>{const e=c??m;return x({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{p&&o(p)}),[p]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),a=i[n].value;a!==r&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",p.tabList),children:[(0,f.jsx)(g,{...e,...t}),(0,f.jsx)(y,{...e,...t})]})}function L(e){const t=(0,b.Z)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);