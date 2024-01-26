"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[90965],{84111:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>p,default:()=>b,frontMatter:()=>m,metadata:()=>d,toc:()=>f});var t=n(85893),r=n(11151),l=n(74866),s=n(85162);function i(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UltrasphericalInvTransform"})," method."]}),"\n",(0,t.jsx)(a.li,{children:"This routine performs the inverse Ultraspherical transform at a single point."}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03bb"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.5"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\lambda=0.5"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"\u03bb"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.5"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)\n  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto, maxN=50\n  real( dfp ) :: x, ans, exact\n  type(csvfile_) :: afile\n  character( len=* ), parameter :: fname = "./results/test23"\n  CALL afile%initiate(filename=fname // ".csv", &\n    & status="NEW", action="WRITE")\n  CALL afile%open()\n  do n = 1, maxN\n    !!n = 10\n    call reallocate( pt, n+1, wt, n+1 )\n    call UltrasphericalQuadrature( n=n+1, lambda=lambda, &\n      & pt=pt, wt=wt, quadType=quadType )\n    u = SIN(4.0_DFP * pi * pt)\n    uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &\n      & x=pt, w=wt, quadType=quadType)\n    x = 0.1\n    exact = SIN(4.0_DFP * pi * x)\n    ans = UltrasphericalInvTransform(n=n, lambda=lambda, &\n      & x=x, coeff=uhat)\n    CALL afile%write( val=n, advance="NO")\n    CALL afile%write( val=ABS(exact-ans), advance="YES")\n  end do\n  CALL afile%deallocate()\nend program main\n'})})]})}function o(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"UltrasphericalInvTransform"})," method."]}),"\n",(0,t.jsx)(a.li,{children:"This routine performs the inverse Ultraspherical transform at several points."}),"\n"]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03bb"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.5"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\lambda=0.5"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",children:"\u03bb"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.5"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: ii, n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &\n    & x(:), ans(:), exact(:)\n  real( dfp ), parameter :: lambda=0.5_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  type(csvfile_) :: afile\n  type(PlPlot_) :: aplot\n  character( len=* ), parameter :: fname = "./results/test24"\n  CALL afile%initiate(filename=fname // ".csv", &\n    & status="NEW", action="WRITE")\n  CALL afile%open()\n  CALL aplot%Initiate()\n  CALL aplot%Set( &\n    & device="svg", &\n    & filename=fname//"-%n.svg")\n  CALL aplot%figure()\n  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)\n  ii = 0\n  do n = 5,25,5\n    ii = ii + 1\n    CALL aplot%subplot(5,1,ii)\n    CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -2.0_DFP, 2.0_DFP])\n    CALL aplot%setTicks()\n    call reallocate( pt, n+1, wt, n+1 )\n    call UltrasphericalQuadrature( n=n+1, lambda=lambda, &\n      & pt=pt, wt=wt, quadType=quadType )\n    u = SIN(4.0_DFP * pi * pt)\n    uhat = UltrasphericalTransform(n=n, lambda=lambda, coeff=u, &\n      & x=pt, w=wt, quadType=quadType)\n    exact = SIN(4.0_DFP * pi * x)\n    ans = UltrasphericalInvTransform(n=n, lambda=lambda, &\n      & x=x, coeff=uhat)\n    CALL afile%write( val=n, advance="NO")\n    CALL afile%write( val=MAXVAL(ABS(exact-ans)), advance="YES")\n    CALL aplot%plot2D( x=x,y=ans)\n    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )\n    CALL aplot%setLabels("x","u(x)","n="//tostring(n))\n  end do\n  CALL aplot%Show()\n  CALL afile%deallocate()\n  CALL aplot%deallocate()\nend program main\n'})})]})}function u(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const m={},p="UltrasphericalInvTransform",d={id:"UltrasphericalPolynomialUtility/UltrasphericalInvTransform",title:"UltrasphericalInvTransform",description:"Discrete Inverse Ultraspherical transform.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalInvTransform.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/UltrasphericalInvTransform",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalInvTransform",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/UltrasphericalInvTransform.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UltrasphericalGradientEvalSum",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalGradientEvalSum"},next:{title:"UltrasphericalJacobiLobattoMatrix",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalJacobiLobattoMatrix"}},h={},f=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function x(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"ultrasphericalinvtransform",children:"UltrasphericalInvTransform"}),"\n",(0,t.jsx)(a.p,{children:"Discrete Inverse Ultraspherical transform."}),"\n","\n","\n",(0,t.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalInvTransform(n, lambda, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! $\\lambda > -0.5, \\lambda \\ne 0.0$\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x\n    !! x point in physical space\n    REAL(DFP) :: ans\n    !! value in physical space\n  END FUNCTION UltrasphericalInvTransform\nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(s.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION UltrasphericalInvTransform(n, lambda, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: lambda\n    !! $\\lambda > -0.5, \\lambda \\ne 0.0$\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! x point in physical space\n    REAL(DFP) :: ans(SIZE(x))\n    !! value in physical space\n  END FUNCTION UltrasphericalInvTransform\nEND INTERFACE\n"})})}),(0,t.jsx)(s.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(s.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>s});n(67294);var t=n(86010);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){let{children:a,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,s),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>T});var t=n(67294),r=n(86010),l=n(12466),s=n(16550),i=n(20469),o=n(91980),c=n(67392),u=n(50012);function m(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return m(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(r.location.search);a.set(l,e),r.replace({...r.location,search:a.toString()})}),[l,r])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:r}=e,l=p(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[c,m]=h({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,l]=(0,u.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),b=(()=>{const e=c??f;return d({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),m(e),x(e)}),[m,x,l]),tabValues:l}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function N(e){let{className:a,block:n,selectedValue:t,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const a=e.currentTarget,n=o.indexOf(a),r=i[n].value;r!==t&&(c(a),s(r))},m=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:l}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:m,onClick:u,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function j(e){let{lazy:a,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function I(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(N,{...e,...a}),(0,v.jsx)(j,{...e,...a})]})}function T(e){const a=(0,x.Z)();return(0,v.jsx)(I,{...e,children:m(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>s});var t=n(67294);const r={},l=t.createContext(r);function s(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);