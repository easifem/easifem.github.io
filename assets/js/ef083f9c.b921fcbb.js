"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[29841],{27711:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>f,default:()=>b,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var t=r(85893),a=r(11151),l=r(74866),o=r(85162);function c(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: alphacoeff(:)\nreal(dfp), allocatable :: betacoeff(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(alphacoeff, n, betacoeff, n)\n\ncall GetLegendreRecurrenceCoeff(n=n, &\n& alphacoeff=alphacoeff, betacoeff=betacoeff)\n\ncall display( alphacoeff .colconcat. betacoeff, "ans = ")\n\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"     ans =      \n----------------\n0.00000  2.00000\n0.00000  0.33333\n0.00000  0.26667\n0.00000  0.25714\n0.00000  0.25397\n"})})})]})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function i(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: A(:)\nreal(dfp), allocatable :: B(:)\nreal(dfp), allocatable :: C(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(A, n, B, n, C, n)\n\ncall GetLegendreRecurrenceCoeff2(n=n, &\n& A=A, B=B, C=C)\n\ncall display( A .colconcat. B .colconcat. C, "ans = ")\n\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"          ans =          \n-------------------------\n1.00000  0.00000  0.00000\n1.50000  0.00000  0.50000\n1.66667  0.00000  0.66667\n1.75000  0.00000  0.75000\n1.80000  0.00000  0.80000\n"})})})]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},f="GetLegendreRecurrenceCoeff",p={id:"LegendrePolynomialUtility/GetLegendreRecurrenceCoeff",title:"GetLegendreRecurrenceCoeff",description:"Recurrence coefficients are for monic and nonmonic Legendre polynomials.",source:"@site/docs/docs-api/LegendrePolynomialUtility/GetLegendreRecurrenceCoeff.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/GetLegendreRecurrenceCoeff",permalink:"/docs-api/LegendrePolynomialUtility/GetLegendreRecurrenceCoeff",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/GetLegendreRecurrenceCoeff.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Legendre",permalink:"/docs-api/LegendrePolynomialUtility/"},next:{title:"LegendreAlpha",permalink:"/docs-api/LegendrePolynomialUtility/LegendreAlpha"}},m={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"GetLegendreRecurrenceCoeff2",id:"getlegendrerecurrencecoeff2",level:2}];function g(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getlegendrerecurrencecoeff",children:"GetLegendreRecurrenceCoeff"}),"\n",(0,t.jsx)(n.p,{children:"Recurrence coefficients are for monic and nonmonic Legendre polynomials."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(n.p,{children:"Monic polynomials"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetLegendreRecurrenceCoeff(n, alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Legendre polynomial, it should be greater than 1\n    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)\n    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)\n  END SUBROUTINE GetLegendreRecurrenceCoeff\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(s,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"getlegendrerecurrencecoeff2",children:"GetLegendreRecurrenceCoeff2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetLegendreRecurrenceCoeff2(n, A, B, C)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Legendre polynomial, it should be greater than 1\n    REAL(DFP), INTENT(OUT) :: A(0:n - 1)\n    !! size is n\n    REAL(DFP), INTENT(OUT) :: B(0:n - 1)\n    !! this coefficient is zero\n    REAL(DFP), INTENT(OUT) :: C(0:n - 1)\n    !! size is n\n  END SUBROUTINE GetLegendreRecurrenceCoeff2\nEND INTERFACE\n"})}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(o.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var t=r(86010);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>j});var t=r(67294),a=r(86010),l=r(12466),o=r(16550),c=r(20469),s=r(91980),i=r(67392),u=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,s._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=f(e),[o,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[i,d]=m({queryString:r,groupId:a}),[h,g]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),b=(()=>{const e=i??h;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:o,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=s.indexOf(n),a=c[r].value;a!==t&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=s.indexOf(e.currentTarget)+1;n=s[r]??s[0];break}case"ArrowLeft":{const r=s.indexOf(e.currentTarget)-1;n=s[r]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function E(e){const n=h(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function j(e){const n=(0,g.Z)();return(0,x.jsx)(E,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(67294);const a={},l=t.createContext(a);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);