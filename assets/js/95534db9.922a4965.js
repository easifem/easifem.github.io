"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38378],{93679:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>j,frontMatter:()=>u,metadata:()=>p,toc:()=>x});var t=r(85893),a=r(11151),s=r(74866),l=r(85162);function i(e){const n={annotation:"annotation",blockquote:"blockquote",code:"code",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"LegendreInvTransform"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"This routine performs the inverse Legendre transform at a single point."}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In this example ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"\u03bb"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mn,{children:"0.5"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\lambda=0.5"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"\u03bb"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0.5"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), error(:,:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  real( dfp ) :: x, ans, exact\n  call reallocate(error, 30, 2)\n  do n = 1, size(error,1)\n    call reallocate( pt, n+1, wt, n+1 )\n    call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )\n    u = SIN(4.0_DFP * pi * pt)\n    uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)\n    x = 0.1\n    exact = SIN(4.0_DFP * pi * x)\n    ans = LegendreInvTransform(n=n, x=x, coeff=uhat)\n    error(n,1) = n\n    error(n,2) = ABS(exact-ans)\n  end do\n  !!\n  call display(MdEncode(error), "error"//CHAR_LF )\nend program main\n'})}),"\n",(0,t.jsx)(n.p,{children:"error"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"n"}),(0,t.jsx)(n.th,{children:"error"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"0.95106"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"0.95106"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"1.1214"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"0.70458"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"1.1275"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"0.9554"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"0.73555"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"1.7623"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"0.30871"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"10"}),(0,t.jsx)(n.td,{children:"1.478"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"1.71167E-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"20"}),(0,t.jsx)(n.td,{children:"5.05284E-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"25"}),(0,t.jsx)(n.td,{children:"4.1741E-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"30"}),(0,t.jsx)(n.td,{children:"5.07981E-11"})]})]})]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This example shows the usage of ",(0,t.jsx)(n.code,{children:"LegendreInvTransform"})," method."]}),"\n",(0,t.jsx)(n.li,{children:"This routine performs the inverse Legendre transform at several points."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: ii, n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &\n    & x(:), ans(:), exact(:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  type(PlPlot_) :: aplot\n  character( len=* ), parameter :: fname = "./results/test24"\n  CALL aplot%Initiate()\n  CALL aplot%Set( &\n    & device="svg", &\n    & filename=fname//"-%n.svg")\n  CALL aplot%figure()\n  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)\n  ii = 0\n  do n = 5,25,5\n    ii = ii + 1\n    CALL aplot%subplot(5,1,ii)\n    CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -2.0_DFP, 2.0_DFP])\n    CALL aplot%setTicks()\n    call reallocate( pt, n+1, wt, n+1 )\n    call LegendreQuadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )\n    u = SIN(4.0_DFP * pi * pt)\n    uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)\n    exact = SIN(4.0_DFP * pi * x)\n    ans = LegendreInvTransform(n=n, x=x, coeff=uhat)\n    CALL aplot%plot2D( x=x,y=ans)\n    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )\n    CALL aplot%setLabels("x","u(x)","n="//tostring(n))\n  end do\n  CALL aplot%Show()\n  CALL aplot%deallocate()\nend program main\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const u={},h="LegendreInvTransform",p={id:"LegendrePolynomialUtility/LegendreInvTransform",title:"LegendreInvTransform",description:"Discrete Inverse Legendre transform.",source:"@site/docs/docs-api/LegendrePolynomialUtility/LegendreInvTransform.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/LegendreInvTransform",permalink:"/docs-api/LegendrePolynomialUtility/LegendreInvTransform",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/LegendreInvTransform.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LegendreGradientEvalSum",permalink:"/docs-api/LegendrePolynomialUtility/LegendreGradientEvalSum"},next:{title:"LegendreJacobiLobattoMatrix",permalink:"/docs-api/LegendrePolynomialUtility/LegendreJacobiLobattoMatrix"}},m={},x=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"legendreinvtransform",children:"LegendreInvTransform"}),"\n",(0,t.jsx)(n.p,{children:"Discrete Inverse Legendre transform."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreInvTransform(n, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x\n    !! x point in physical space\n    REAL(DFP) :: ans\n    !! value in physical space\n  END FUNCTION LegendreInvTransform\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(s.Z,{children:[(0,t.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION LegendreInvTransform(n, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! x point in physical space\n    REAL(DFP) :: ans(SIZE(x))\n    !! value in physical space\n  END FUNCTION LegendreInvTransform\nEND INTERFACE\n"})})}),(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(d,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function j(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(86010);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){let{children:n,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),a=r(86010),s=r(12466),l=r(16550),i=r(20469),o=r(91980),c=r(67392),d=r(50012);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:r,groupId:a}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),j=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=r(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function b(e){let{className:n,block:r,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=o.indexOf(n),a=i[r].value;a!==t&&(c(n),l(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function L(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,g.jsx)(L,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>l});var t=r(67294);const a={},s=t.createContext(a);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);