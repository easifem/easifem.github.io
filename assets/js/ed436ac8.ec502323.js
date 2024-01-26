"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[2434],{14370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>j,contentTitle:()=>u,default:()=>b,frontMatter:()=>h,metadata:()=>x,toc:()=>p});var r=n(85893),s=n(11151),a=n(74866),l=n(85162);function i(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"By using this subroutine we can get Chebyshev1-Gauss, Chebyshev1-Gauss-Radau, Chebyshev1-Gauss-Lobatto quadrature points"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n, quadType\n  real( dfp ), allocatable :: pt( : ), wt( : )\n  type(string) :: msg, astr\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Gauss"',children:"  n = 2; quadType=Gauss; call callme\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.70711"}),(0,r.jsx)(t.td,{children:"1.5708"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.70711"}),(0,r.jsx)(t.td,{children:"1.5708"})]})]})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Radau-Left"',children:"  n = 3; quadType=GaussRadauLeft; call callme\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"0.31416"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.30902"}),(0,r.jsx)(t.td,{children:"0.62832"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.80902"}),(0,r.jsx)(t.td,{children:"0.62832"})]})]})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Radau-Right"',children:"  n = 3; quadType=GaussRadauRight; call callme\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.80902"}),(0,r.jsx)(t.td,{children:"0.31416"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.30902"}),(0,r.jsx)(t.td,{children:"0.62832"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"0.62832"})]})]})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Lobatto"',children:"  n = 4; quadType=GaussLobatto; call callme\n"})}),"\n",(0,r.jsxs)(n,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-1"}),(0,r.jsx)(t.td,{children:"0.5236"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.5"}),(0,r.jsx)(t.td,{children:"1.0472"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.5"}),(0,r.jsx)(t.td,{children:"1.0472"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"0.5236"})]})]})]})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    call reallocate( pt, n, wt, n )\n    call Chebyshev1Quadrature( n=n, pt=pt, wt=wt, &\n      & quadType=quadType )\n    msg = "| pt | wt |"\n    call display(msg%chars())\n    astr = MdEncode( pt .COLCONCAT. wt )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}function c(e){const t={code:"code",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"program main\n  use easifembase\n  implicit none\n  integer( i4b ) :: n, quadType\n  real( dfp ), allocatable :: pt( : ), wt( : )\n  type(string) :: msg, astr\n  logical(lgt), parameter :: onlyInside=.true.\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Gauss"',children:"  n = 2; quadType=Gauss; call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.70711"}),(0,r.jsx)(t.td,{children:"1.5708"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.70711"}),(0,r.jsx)(t.td,{children:"1.5708"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Radau-Left"',children:"  n = 2; quadType=GaussRadauLeft; call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.30902"}),(0,r.jsx)(t.td,{children:"0.62832"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.80902"}),(0,r.jsx)(t.td,{children:"0.62832"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Radau-Right"',children:"  n = 2; quadType=GaussRadauRight; call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.80902"}),(0,r.jsx)(t.td,{children:"0.31416"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.30902"}),(0,r.jsx)(t.td,{children:"0.62832"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",metastring:'title "Chebyshev1-Lobatto"',children:"  n = 2; quadType=GaussLobatto; call callme\n"})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"pt"}),(0,r.jsx)(t.th,{children:"wt"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"-0.5"}),(0,r.jsx)(t.td,{children:"1.0472"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"0.5"}),(0,r.jsx)(t.td,{children:"1.0472"})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:'  contains\n  subroutine callme\n    call reallocate( pt, n, wt, n )\n    call Chebyshev1Quadrature( n=n, pt=pt, wt=wt, &\n      & quadType=quadType, onlyInside=onlyInside )\n    msg = "| pt | wt |"\n    call display(msg%chars())\n    astr = MdEncode( pt .COLCONCAT. wt )\n    call display( astr%chars(), "" )\n  end subroutine callme\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"end program main\n"})})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}const h={},u="Chebyshev1Quadrature",x={id:"Chebyshev1PolynomialUtility/Chebyshev1Quadrature",title:"Chebyshev1Quadrature",description:"This routine returns the Quadrature point of Chebyshev1 polynomial.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Quadrature.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1Quadrature",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Quadrature",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Quadrature.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1NormSQRRatio",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1NormSQRRatio"},next:{title:"Chebyshev1Transform",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1Transform"}},j={},p=[{value:"Interface",id:"interface",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"chebyshev1quadrature",children:"Chebyshev1Quadrature"}),"\n",(0,r.jsx)(t.p,{children:"This routine returns the Quadrature point of Chebyshev1 polynomial."}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Chebyshev1Quadrature(n, pt, wt, quadType, onlyInside)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! number of quadrature points, the order will be computed as follows\n    !! for quadType = Gauss, n is same as order of Chebyshev1 polynomial\n    !! for quadType = GaussRadauLeft or GaussRadauRight n is order+1\n    !! for quadType = GaussLobatto, n = order+2\n    REAL(DFP), INTENT(OUT) :: pt(n)\n    !! n+1 quadrature points from 1 to n+1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: wt(n)\n    !! n+1 weights from 1 to n+1\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! Gauss\n    !! GaussRadauLeft\n    !! GaussRadauRight\n    !! GaussLobatto\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: onlyInside\n    !! only inside\n  END SUBROUTINE Chebyshev1Quadrature\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(d,{})}),(0,r.jsx)(l.Z,{value:"example2",label:"Example 2",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(86010);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(67294),s=n(86010),a=n(12466),l=n(16550),i=n(20469),d=n(91980),c=n(67392),o=n(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const s=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=u(e),[l,d]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,h]=j({queryString:n,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,o.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),b=(()=>{const e=c??p;return x({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&d(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function f(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),o=e=>{const t=e.currentTarget,n=d.indexOf(t),s=i[n].value;s!==r&&(c(t),l(s))},h=e=>{let t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>d.push(e),onKeyDown:h,onClick:o,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,y.jsx)(f,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function T(e){const t=(0,m.Z)();return(0,y.jsx)(v,{...e,children:h(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var r=n(67294);const s={},a=r.createContext(s);function l(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);