"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[67366],{1707:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>p,toc:()=>m});var r=t(85893),a=t(11151),s=t(74866),l=t(85162);function o(e){const n={code:"code",li:"li",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This example shows the usage of ",(0,r.jsx)(n.code,{children:"Chebyshev1InvTransform"})," method."]}),"\n",(0,r.jsx)(n.li,{children:"This routine performs the inverse Chebyshev1 transform at a single point."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), error(:,:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  real( dfp ) :: x, ans, exact\n  call reallocate(error, 30, 2)\n  do n = 1, size(error,1)\n    call reallocate( pt, n+1, wt, n+1 )\n    call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )\n    u = 1.0 / (1.0 + 16.0 * pt**2)\n    uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)\n    x = 0.1\n    exact = 1.0 / (1.0 + 16.0 * x**2)\n    ans = Chebyshev1InvTransform(n=n, x=x, coeff=uhat)\n    error(n,1) = n\n    error(n,2) = ABS(exact-ans)\n  end do\n  call display(MdEncode(error), "error"//CHAR_LF )\nend program main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"n"}),(0,r.jsx)(n.th,{children:"error"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"0.80325"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"0.12852"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"0.61689"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"0.11195"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"0.3907"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"10"}),(0,r.jsx)(n.td,{children:"4.75496E-02"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"15"}),(0,r.jsx)(n.td,{children:"2.77239E-03"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20"}),(0,r.jsx)(n.td,{children:"4.28428E-03"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"25"}),(0,r.jsx)(n.td,{children:"2.75076E-03"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"30"}),(0,r.jsx)(n.td,{children:"5.40866E-05"})]})]})]})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}function c(e){const n={code:"code",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["This example shows the usage of ",(0,r.jsx)(n.code,{children:"Chebyshev1InvTransform"})," method."]}),"\n",(0,r.jsx)(n.li,{children:"This routine performs the inverse Chebyshev1 transform at several points."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: ii, n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &\n    & x(:), ans(:), exact(:)\n  real( dfp ), parameter :: tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  type(PlPlot_) :: aplot\n  character( len=* ), parameter :: fname = "./results/test24"\n  CALL aplot%Initiate()\n  CALL aplot%Set( &\n    & device="svg", &\n    & filename=fname//"-%n.svg")\n  CALL aplot%figure()\n  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)\n  ii = 0\n  do n = 5,25,5\n    ii = ii + 1\n    CALL aplot%subplot(5,1,ii)\n    CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -2.0_DFP, 2.0_DFP])\n    CALL aplot%setTicks()\n    call reallocate( pt, n+1, wt, n+1 )\n    call Chebyshev1Quadrature( n=n+1, pt=pt, wt=wt, quadType=quadType )\n    u = 1.0/(1.0 + 16.0 * pt**2)\n    uhat = Chebyshev1Transform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)\n    exact = 1.0/(1.0 + 16.0 * x**2)\n    ans = Chebyshev1InvTransform(n=n, x=x, coeff=uhat)\n    CALL aplot%plot2D( x=x,y=ans)\n    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )\n    CALL aplot%setLabels("x","u(x)","n="//tostring(n))\n  end do\n  CALL aplot%Show()\n  CALL aplot%deallocate()\nend program main\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const d={},h="Chebyshev1InvTransform",p={id:"Chebyshev1PolynomialUtility/Chebyshev1InvTransform",title:"Chebyshev1InvTransform",description:"Discrete Inverse Chebyshev1 transform.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1InvTransform.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1InvTransform",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1InvTransform",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1InvTransform.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1GradientEvalSum",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1GradientEvalSum"},next:{title:"Chebyshev1JacobiLobattoMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiLobattoMatrix"}},f={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function b(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"chebyshev1invtransform",children:"Chebyshev1InvTransform"}),"\n",(0,r.jsx)(n.p,{children:"Discrete Inverse Chebyshev1 transform."}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1InvTransform(n, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x\n    !! x point in physical space\n    REAL(DFP) :: ans\n    !! value in physical space\n  END FUNCTION Chebyshev1InvTransform\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(i,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Chebyshev1InvTransform(n, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! x point in physical space\n    REAL(DFP) :: ans(SIZE(x))\n    !! value in physical space\n  END FUNCTION Chebyshev1InvTransform\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(u,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var r=t(86010);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(67294),a=t(86010),s=t(12466),l=t(16550),o=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function T(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function I(e){const n=(0,b.Z)();return(0,v.jsx)(T,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(67294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);