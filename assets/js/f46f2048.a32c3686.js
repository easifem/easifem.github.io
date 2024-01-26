"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[26510],{16285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>h,toc:()=>b});var a=n(85893),r=n(11151),o=n(74866),l=n(85162);function s(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nINTEGER( I4B ), parameter :: n = 5\nREAL( DFP ) :: D(n), E(n), alphaCoeff(n), betaCoeff(n)\nCALL Chebyshev1JacobiMatrix(n,D, E, alphaCoeff, betaCoeff)\nCALL Display(D, "D: ")\nCALL Display(E, "E: ")\nCALL Display(alphaCoeff, "alphaCoeff: ")\nCALL Display(betaCoeff, "betaCoeff: ")\nend program main\n'})}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-txt",metastring:'title="results"',children:"  D:   \n-------\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n  E:   \n-------\n0.70711\n0.50000\n0.50000\n0.50000\n0.00000\nalphaCoeff: \n------------\n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \nbetaCoeff: \n-----------\n  3.14159  \n  0.50000  \n  0.25000  \n  0.25000  \n  0.25000  \n\n"})})})]})]})}function i(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}const u={},c="Chebyshev1JacobiMatrix",h={id:"Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix",title:"Chebyshev1JacobiMatrix",description:"Chebyshev1 matrix for Jacobi polynomials.",source:"@site/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix.md",sourceDirName:"Chebyshev1PolynomialUtility",slug:"/Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chebyshev1JacobiLobattoMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiLobattoMatrix"},next:{title:"Chebyshev1JacobiRadauMatrix",permalink:"/docs-api/Chebyshev1PolynomialUtility/Chebyshev1JacobiRadauMatrix"}},d={},b=[{value:"Examples",id:"examples",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"chebyshev1jacobimatrix",children:"Chebyshev1JacobiMatrix"}),"\n",(0,a.jsx)(t.p,{children:"Chebyshev1 matrix for Jacobi polynomials."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE Chebyshev1JacobiMatrix(n, D, E, alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! n should be greater than or equal to 1\n    REAL(DFP), INTENT(OUT) :: D(:)\n    !! the size should be 1:n\n    REAL(DFP), INTENT(OUT) :: E(:)\n    !! the size should be 1:n-1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)\n    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)\n    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1\n  END SUBROUTINE Chebyshev1JacobiMatrix\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var a=n(86010);const r={tabItem:"tabItem_Ymn6"};var o=n(85893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),r=n(86010),o=n(12466),l=n(16550),s=n(20469),i=n(91980),u=n(67392),c=n(50012);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,h]=f({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??p;return b({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=s[n].value;r!==a&&(u(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:h,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function C(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function E(e){const t=p(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(x,{...e,...t}),(0,y.jsx)(C,{...e,...t})]})}function g(e){const t=(0,m.Z)();return(0,y.jsx)(E,{...e,children:h(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>l});var a=n(67294);const r={},o=a.createContext(r);function l(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);