"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97701],{20834:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>d,toc:()=>x});var t=n(85893),s=n(11151),r=n(74866),l=n(85162);function i(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiInvTransform"})," method.\nThis routine performs the inverse Jacobi transform at a single point."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto, maxN=50\n  real( dfp ) :: x, ans, exact\n  type(csvfile_) :: afile\n  character( len=* ), parameter :: fname = "./results/test17"\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  CALL afile%initiate(filename=fname // ".csv", &\n    & status="NEW", action="WRITE")\n  CALL afile%open()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'  do n = 1, maxN\n  !!n = 10\n  call reallocate( pt, n+1, wt, n+1 )\n  call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n    & pt=pt, wt=wt, quadType=quadType )\n  u = SIN(4.0_DFP * pi * pt)\n  uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, coeff=u, &\n    & x=pt, w=wt, quadType=quadType)\n  x = 0.1\n  exact = SIN(4.0_DFP * pi * x)\n  ans = JacobiInvTransform(n=n, alpha=alpha, beta=beta, &\n    & x=x, coeff=uhat)\n  CALL afile%write( val=n, advance="NO")\n  CALL afile%write( val=ABS(exact-ans), advance="YES")\n  end do\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  CALL afile%deallocate()\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}function c(e){const a={annotation:"annotation",blockquote:"blockquote",code:"code",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["This example shows the usage of ",(0,t.jsx)(a.code,{children:"JacobiInvTransform"})," method."]}),"\n",(0,t.jsxs)(a.blockquote,{children:["\n",(0,t.jsxs)(a.p,{children:["In this example ",(0,t.jsxs)(a.span,{className:"katex",children:[(0,t.jsx)(a.span,{className:"katex-mathml",children:(0,t.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(a.semantics,{children:[(0,t.jsxs)(a.mrow,{children:[(0,t.jsx)(a.mi,{children:"\u03b1"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mi,{children:"\u03b2"}),(0,t.jsx)(a.mo,{children:"="}),(0,t.jsx)(a.mn,{children:"0.0"})]}),(0,t.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\alpha=\\beta=0.0"})]})})}),(0,t.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.05278em"},children:"\u03b2"}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(a.span,{className:"mrel",children:"="}),(0,t.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(a.span,{className:"base",children:[(0,t.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(a.span,{className:"mord",children:"0.0"})]})]})]})," (that is, proportional to Legendre polynomial)"]}),"\n"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:'program main\n  use easifembase\n  use easifemclasses\n  implicit none\n  integer( i4b ) :: ii, n\n  real(dfp), allocatable :: uhat(:), u( : ), pt( : ), wt(:), &\n    & x(:), ans(:), exact(:)\n  real( dfp ), parameter :: alpha=0.0_DFP, beta=0.0_DFP, tol=1.0E-10\n  type(string) :: astr\n  integer( i4b ), parameter :: quadType = GaussLobatto\n  type(csvfile_) :: afile\n  type(PlPlot_) :: aplot\n  character( len=* ), parameter :: fname = "./results/test18"\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title "Open file"',children:'  CALL afile%initiate(filename=fname // ".csv", &\n    & status="NEW", action="WRITE")\n  CALL afile%open()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title "Plot settings"',children:'  CALL aplot%Initiate()\n  CALL aplot%Set( &\n    & device="svg", &\n    & filename=fname//"-%n.svg")\n  CALL aplot%figure()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",metastring:'title "Test"',children:'  x = linspace(-1.0_DFP, 1.0_DFP, 101_I4B)\n  ii = 0\n  do n = 5,25,5\n    ii = ii + 1\n    CALL aplot%subplot(5,1,ii)\n    CALL aplot%setXYLim([-1.0_DFP, 1.0_DFP], [ -2.0_DFP, 2.0_DFP])\n    CALL aplot%setTicks()\n    call reallocate( pt, n+1, wt, n+1 )\n    call JacobiQuadrature( n=n+1, alpha=alpha, beta=beta, &\n      & pt=pt, wt=wt, quadType=quadType )\n    u = SIN(4.0_DFP * pi * pt)\n    uhat = JacobiTransform(n=n, alpha=alpha, beta=beta, coeff=u, &\n      & x=pt, w=wt, quadType=quadType)\n    exact = SIN(4.0_DFP * pi * x)\n    ans = JacobiInvTransform(n=n, alpha=alpha, beta=beta, &\n      & x=x, coeff=uhat)\n    CALL afile%write( val=n, advance="NO")\n    CALL afile%write( val=MAXVAL(ABS(exact-ans)), advance="YES")\n    CALL aplot%plot2D( x=x,y=ans)\n    CALL aplot%plot2D( x=x,y=exact, pointType=PS_DOT, lineWidth=0.0_DFP )\n    CALL aplot%setLabels("x","u(x)","n="//tostring(n))\n  end do\n  CALL aplot%Show()\n'})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  CALL afile%deallocate()\n  CALL aplot%deallocate()\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"end program main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}const p={},u="JacobiInvTransform",d={id:"JacobiPolynomialUtility/JacobiInvTransform",title:"JacobiInvTransform",description:"Discrete Inverse Jacobi transform.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiInvTransform.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiInvTransform",permalink:"/docs-api/JacobiPolynomialUtility/JacobiInvTransform",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiInvTransform.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiGradientEvalSum",permalink:"/docs-api/JacobiPolynomialUtility/JacobiGradientEvalSum"},next:{title:"JacobiJacobiLobattoMatrix",permalink:"/docs-api/JacobiPolynomialUtility/JacobiJacobiLobattoMatrix"}},h={},x=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Examples",id:"examples",level:2}];function f(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"jacobiinvtransform",children:"JacobiInvTransform"}),"\n",(0,t.jsx)(a.p,{children:"Discrete Inverse Jacobi transform."}),"\n",(0,t.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiInvTransform(n, alpha, beta, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x\n    !! x point in physical space\n    REAL(DFP) :: ans\n    !! value in physical space\n  END FUNCTION JacobiInvTransform\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiInvTransform(n, alpha, beta, coeff, x) &\n        & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of Jacobi polynomial > -1.0_DFP\n    REAL(DFP), INTENT(IN) :: coeff(0:n)\n    !! n+1  coefficient (modal values)\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! x point in physical space\n    REAL(DFP) :: ans(SIZE(x))\n    !! value in physical space\n  END FUNCTION JacobiInvTransform\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(m,{})}),(0,t.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function b(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);var t=n(86010);const s={tabItem:"tabItem_Ymn6"};var r=n(85893);function l(e){let{children:a,hidden:n,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,l),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>y});var t=n(67294),s=n(86010),r=n(12466),l=n(16550),i=n(20469),o=n(91980),c=n(67392),m=n(50012);function p(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return p(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function h(e){let{queryString:a=!1,groupId:n}=e;const s=(0,l.k6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function x(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,r=u(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[c,p]=h({queryString:n,groupId:s}),[x,f]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,m.Nk)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=c??x;return d({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,r]),tabValues:r}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){let{className:a,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),m=e=>{const a=e.currentTarget,n=o.indexOf(a),s=i[n].value;s!==t&&(c(a),l(s))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},a),children:i.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>o.push(e),onKeyDown:p,onClick:m,...r,className:(0,s.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":t===a}),children:n??a},a)}))})}function N(e){let{lazy:a,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function v(e){const a=x(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...a}),(0,j.jsx)(N,{...e,...a})]})}function y(e){const a=(0,f.Z)();return(0,j.jsx)(v,{...e,children:p(e.children)},String(a))}},11151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>l});var t=n(67294);const s={},r=t.createContext(s);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);