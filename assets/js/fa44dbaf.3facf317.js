"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35895],{29034:(e,r,l)=>{l.r(r),l.d(r,{assets:()=>x,contentTitle:()=>h,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=l(85893),a=l(11151),t=l(74866),s=l(85162);function i(e){const r={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:l}=r;return l||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["This example shows the usage of ",(0,n.jsx)(r.code,{children:"UltrasphericalEvalAll"})," method."]}),"\n",(0,n.jsx)(r.p,{children:"This routine evaluates Ultraspherical polynomial upto order n, for many points"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( :, : ), x( : )\n  real( dfp ), parameter :: lambda=0.5_DFP\n  type(string) :: astr\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",metastring:'title "Ultraspherical-Gauss"',children:"  x = [-1.0, -0.5, 0.0, 0.5, 1.0]\n  n = 5; call callme\n"})}),"\n",(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"P0"}),(0,n.jsx)(r.th,{children:"P1"}),(0,n.jsx)(r.th,{children:"P2"}),(0,n.jsx)(r.th,{children:"P3"}),(0,n.jsx)(r.th,{children:"P4"}),(0,n.jsx)(r.th,{children:"P5"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"-1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"-1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"-1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"-0.5"}),(0,n.jsx)(r.td,{children:"-0.125"}),(0,n.jsx)(r.td,{children:"0.4375"}),(0,n.jsx)(r.td,{children:"-0.28906"}),(0,n.jsx)(r.td,{children:"-8.98438E-02"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"-0.5"}),(0,n.jsx)(r.td,{children:"-0"}),(0,n.jsx)(r.td,{children:"0.375"}),(0,n.jsx)(r.td,{children:"0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0.5"}),(0,n.jsx)(r.td,{children:"-0.125"}),(0,n.jsx)(r.td,{children:"-0.4375"}),(0,n.jsx)(r.td,{children:"-0.28906"}),(0,n.jsx)(r.td,{children:"8.98438E-02"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"})]})]})]})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= UltrasphericalEvalAll( n=n, x=x, lambda=lambda )\n    astr = MdEncode( ans )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"end program main\n"})})]})}function c(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(i,{...e})}):i(e)}function o(e){const r={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:l}=r;return l||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:["This example shows the usage of ",(0,n.jsx)(r.code,{children:"UltrasphericalEvalAll"})," method."]}),"\n",(0,n.jsx)(r.p,{children:"This routine evaluates Ultraspherical polynomial upto order n, at a single point"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real( dfp ), allocatable :: ans( : ), x\n  real( dfp ), parameter :: lambda=0.5_DFP\n  type(string) :: astr\n"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",metastring:'title "Ultraspherical-Gauss"',children:"  x = 0.5_DFP\n  n = 5; call callme\n"})}),"\n",(0,n.jsxs)(l,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"P0"}),(0,n.jsx)(r.th,{children:"P1"}),(0,n.jsx)(r.th,{children:"P2"}),(0,n.jsx)(r.th,{children:"P3"}),(0,n.jsx)(r.th,{children:"P4"}),(0,n.jsx)(r.th,{children:"P5"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0.5"}),(0,n.jsx)(r.td,{children:"-0.125"}),(0,n.jsx)(r.td,{children:"-0.4375"}),(0,n.jsx)(r.td,{children:"-0.28906"}),(0,n.jsx)(r.td,{children:"8.98438E-02"})]})})]})})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    ans= UltrasphericalEvalAll( n=n, x=x, lambda=lambda )\n    astr = MdEncode( ans )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}const u={},h="UltrasphericalEvalAll",p={id:"UltrasphericalPolynomialUtility/UltrasphericalEvalAll",title:"UltrasphericalEvalAll",description:"Evaluate Ultraspherical polynomials from order = 0 to n at single or several points.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalEvalAll.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalEvalAll",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalEvalAll",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalEvalAll.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalEval",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalEval"},next:{title:"UltrasphericalEvalSum",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalEvalSum"}},x={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function j(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"ultrasphericalevalall",children:"UltrasphericalEvalAll"}),"\n",(0,n.jsx)(r.p,{children:"Evaluate Ultraspherical polynomials from order = 0 to n at single or several points."}),"\n","\n","\n",(0,n.jsx)(r.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalEvalAll(n, lambda, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans(n + 1)\n    !! Evaluate Ultraspherical polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION UltrasphericalEvalAll\nEND INTERFACE\n"})})}),(0,n.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(c,{})}),(0,n.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,n.jsx)(r.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,n.jsxs)(t.Z,{children:[(0,n.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalEvalAll(n, lambda, x) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP) :: ans(SIZE(x), n + 1)\n    !! Evaluate Ultraspherical polynomial of order = 0 to n (total n+1)\n    !! at point x\n  END FUNCTION UltrasphericalEvalAll\nEND INTERFACE\n"})})}),(0,n.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(d,{})}),(0,n.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},85162:(e,r,l)=>{l.d(r,{Z:()=>s});l(67294);var n=l(86010);const a={tabItem:"tabItem_Ymn6"};var t=l(85893);function s(e){let{children:r,hidden:l,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,s),hidden:l,children:r})}},74866:(e,r,l)=>{l.d(r,{Z:()=>y});var n=l(67294),a=l(86010),t=l(12466),s=l(16550),i=l(20469),c=l(91980),o=l(67392),d=l(50012);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:l}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return u(e).map((e=>{let{props:{value:r,label:l,attributes:n,default:a}}=e;return{value:r,label:l,attributes:n,default:a}}))}(l);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,l])}function p(e){let{value:r,tabValues:l}=e;return l.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:l}=e;const a=(0,s.k6)(),t=function(e){let{queryString:r=!1,groupId:l}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:r,groupId:l});return[(0,c._X)(t),(0,n.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(a.location.search);r.set(t,e),a.replace({...a.location,search:r.toString()})}),[t,a])]}function m(e){const{defaultValue:r,queryString:l=!1,groupId:a}=e,t=h(e),[s,c]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:t}))),[o,u]=x({queryString:l,groupId:a}),[m,j]=function(e){let{groupId:r}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,t]=(0,d.Nk)(l);return[a,(0,n.useCallback)((e=>{l&&t.set(e)}),[l,t])]}({groupId:a}),f=(()=>{const e=o??m;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),j(e)}),[u,j,t]),tabValues:t}}var j=l(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=l(85893);function v(e){let{className:r,block:l,selectedValue:n,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),d=e=>{const r=e.currentTarget,l=c.indexOf(r),a=i[l].value;a!==n&&(o(r),s(a))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;r=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;r=c[l]??c[c.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},r),children:i.map((e=>{let{value:r,label:l,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>c.push(e),onKeyDown:u,onClick:d,...t,className:(0,a.Z)("tabs__item",f.tabItem,t?.className,{"tabs__item--active":n===r}),children:l??r},r)}))})}function E(e){let{lazy:r,children:l,selectedValue:a}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=m(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(E,{...e,...r})]})}function y(e){const r=(0,j.Z)();return(0,b.jsx)(g,{...e,children:u(e.children)},String(r))}},11151:(e,r,l)=>{l.d(r,{Z:()=>i,a:()=>s});var n=l(67294);const a={},t=n.createContext(a);function s(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);