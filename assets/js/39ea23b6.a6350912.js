"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[26050],{48392:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>x,frontMatter:()=>d,metadata:()=>f,toc:()=>m});var t=r(85893),a=r(11151),l=r(74866),c=r(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: alphacoeff(:)\nreal(dfp), allocatable :: betacoeff(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(alphacoeff, n, betacoeff, n)\n\ncall GetUltrasphericalRecurrenceCoeff(n=n, &\n& lambda=0.5_DFP, &\n& alphacoeff=alphacoeff, betacoeff=betacoeff)\n\ncall display( alphacoeff .colconcat. betacoeff, "ans = ")\n\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"     ans =      \n----------------\n0.00000  2.00000\n0.00000  0.33333\n0.00000  0.26667\n0.00000  0.25714\n0.00000  0.25397\n"})})})]})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(s,{...e})}):s(e)}function i(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\n\nreal(dfp), allocatable :: A(:)\nreal(dfp), allocatable :: B(:)\nreal(dfp), allocatable :: C(:)\ninteger(i4b) :: n\n\nn = 5; call reallocate(A, n, B, n, C, n)\n\ncall GetUltrasphericalRecurrenceCoeff2(n=n, &\n& lambda=0.5_DFP, &\n& A=A, B=B, C=C)\n\ncall display( mdencode(A .colconcat. B .colconcat. C), "ans = ")\n\nend program main\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"ans ="}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"0"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.5"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"0.5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.6667"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"0.66667"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.75"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"0.75"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.8"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"0.8"})]})]})]})]})]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}const d={},h="GetUltrasphericalRecurrenceCoeff",f={id:"UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff",title:"GetUltrasphericalRecurrenceCoeff",description:"Recurrence coefficients are for monic and nonmonic Ultraspherical polynomials.",source:"@site/docs/docs-api/UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff.md",sourceDirName:"UltrasphericalPolynomialUtility",slug:"/UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff",permalink:"/docs-api/UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/UltrasphericalPolynomialUtility/GetUltrasphericalRecurrenceCoeff.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ultraspherical",permalink:"/docs-api/UltrasphericalPolynomialUtility/"},next:{title:"UltrasphericalAlpha",permalink:"/docs-api/UltrasphericalPolynomialUtility/UltrasphericalAlpha"}},p={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function b(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"getultrasphericalrecurrencecoeff",children:"GetUltrasphericalRecurrenceCoeff"}),"\n",(0,t.jsx)(n.p,{children:"Recurrence coefficients are for monic and nonmonic Ultraspherical polynomials."}),"\n","\n","\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(n.p,{children:"Monic polynomials:"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetUltrasphericalRecurrenceCoeff(n, &\n    & lambda, alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Ultraspherical polynomial, it should be greater than 1\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    !! lambda should not be zero\n    REAL(DFP), INTENT(OUT) :: alphaCoeff(0:n - 1)\n    REAL(DFP), INTENT(OUT) :: betaCoeff(0:n - 1)\n  END SUBROUTINE GetUltrasphericalRecurrenceCoeff\nEND INTERFACE\n"})})}),(0,t.jsx)(c.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(o,{})}),(0,t.jsx)(c.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(c.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE GetUltrasphericalRecurrenceCoeff2(n, lambda, &\n    & A, B, C)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of jacobi polynomial, it should be greater than 1\n    REAL(DFP), INTENT(IN) :: lambda\n    !! lambda should be greater than -0.5\n    !! lambda should not be 0.0\n    REAL(DFP), INTENT(OUT) :: A(0:n - 1)\n    !! size is n\n    REAL(DFP), INTENT(OUT) :: B(0:n - 1)\n    !! this coefficient is zero\n    REAL(DFP), INTENT(OUT) :: C(0:n - 1)\n    !! size is n\n  END SUBROUTINE GetUltrasphericalRecurrenceCoeff2\nEND INTERFACE\n"})})}),(0,t.jsx)(c.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(u,{})}),(0,t.jsx)(c.Z,{value:"close",label:"\u21a2 "})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>c});r(67294);var t=r(86010);const a={tabItem:"tabItem_Ymn6"};var l=r(85893);function c(e){let{children:n,hidden:r,className:c}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,c),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>U});var t=r(67294),a=r(86010),l=r(12466),c=r(16550),s=r(20469),o=r(91980),i=r(67392),u=r(50012);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const a=(0,c.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,l=h(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[i,d]=p({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(r);return[a,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),x=(()=>{const e=i??m;return f({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(85893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(i(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...l,className:(0,a.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function U(e){const n=(0,b.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(67294);const a={},l=t.createContext(a);function c(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);