"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[55158],{96399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var a=t(85893),r=t(11151),o=t(74866),l=t(85162);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nINTEGER( I4B ), parameter :: n = 5\nREAL( DFP ) :: D(n), E(n), alphaCoeff(n), betaCoeff(n)\nCALL JacobiJacobiMatrix(n, 0.0_DFP, 0.0_DFP, D, E, alphaCoeff, betaCoeff)\nCALL Display(D, "D: ")\nCALL Display(E, "E: ")\nCALL Display(alphaCoeff, "alphaCoeff: ")\nCALL Display(betaCoeff, "betaCoeff: ")\nend program main\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"See results"}),(0,a.jsx)("div",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",metastring:'title="results"',children:"  D:   \n-------\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n\n  E:   \n-------\n0.57735\n0.51640\n0.50709\n0.50395\n0.00000\n\nalphaCoeff: \n------------\n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n\nbetaCoeff: \n-----------\n  2.00000  \n  0.33333  \n  0.26667  \n  0.25714  \n  0.25397  \n"})})})]})]})}function s(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const c={},u="LegendreJacobiMatrix",d={id:"LegendrePolynomialUtility/LegendreJacobiMatrix",title:"LegendreJacobiMatrix",description:"Legendre matrix for Jacobi polynomials.",source:"@site/docs/docs-api/LegendrePolynomialUtility/LegendreJacobiMatrix.md",sourceDirName:"LegendrePolynomialUtility",slug:"/LegendrePolynomialUtility/LegendreJacobiMatrix",permalink:"/docs-api/LegendrePolynomialUtility/LegendreJacobiMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LegendrePolynomialUtility/LegendreJacobiMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LegendreJacobiLobattoMatrix",permalink:"/docs-api/LegendrePolynomialUtility/LegendreJacobiLobattoMatrix"},next:{title:"LegendreJacobiRadauMatrix",permalink:"/docs-api/LegendrePolynomialUtility/LegendreJacobiRadauMatrix"}},f={},p=[{value:"Examples",id:"examples",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"legendrejacobimatrix",children:"LegendreJacobiMatrix"}),"\n",(0,a.jsx)(n.p,{children:"Legendre matrix for Jacobi polynomials."}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE LegendreJacobiMatrix(n, D, E, alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! n should be greater than or equal to 1\n    REAL(DFP), INTENT(OUT) :: D(:)\n    !! the size should be 1:n\n    REAL(DFP), INTENT(OUT) :: E(:)\n    !! the size should be 1:n-1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)\n    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)\n    !! recurrence coefficient of monic legendre polynomial, from 0 to n-1\n  END SUBROUTINE LegendreJacobiMatrix\nEND INTERFACE\n"})})}),(0,a.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(s,{})}),(0,a.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(86010);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>E});var a=t(67294),r=t(86010),o=t(12466),l=t(16550),i=t(20469),s=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=f(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:r}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=i[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function L(e){const n=b(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function E(e){const n=(0,h.Z)();return(0,x.jsx)(L,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(67294);const r={},o=a.createContext(r);function l(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);