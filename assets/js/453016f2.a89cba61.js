"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20403],{17253:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>b,toc:()=>p});var n=t(85893),o=t(11151),r=t(74866),i=t(85162);function l(e){const a={code:"code",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\nINTEGER( I4B ), parameter :: n = 5\nREAL( DFP ) :: D(n+2), E(n+2), alphaCoeff(n+2), betaCoeff(n+2)\nCALL JacobiJacobiLobattoMatrix(n, 0.0_DFP, 0.0_DFP, D, E, alphaCoeff, betaCoeff)\nCALL Display(D, "D: ")\nCALL Display(E, "E: ")\nCALL Display(alphaCoeff, "alphaCoeff: ")\nCALL Display(betaCoeff, "betaCoeff: ")\nend program main\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"See results"}),(0,n.jsx)("div",{children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"  D:   \n-------\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n0.00000\n  E:   \n-------\n0.57735\n0.51640\n0.50709\n0.50395\n0.50252\n0.73855\n0.00000\nalphaCoeff: \n------------\n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \n  0.00000   \nbetaCoeff: \n-----------\n  2.00000  \n  0.33333  \n  0.26667  \n  0.25714  \n  0.25397  \n  0.25253  \n  0.00000  \n"})})})]})]})}function s(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const c={},u="JacobiJacobiLobattoMatrix",b={id:"JacobiPolynomialUtility/JacobiJacobiLobattoMatrix",title:"JacobiJacobiLobattoMatrix",description:"Jacobi Lobatto matrix for Jacobi polynomial.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiJacobiLobattoMatrix.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiJacobiLobattoMatrix",permalink:"/docs-api/JacobiPolynomialUtility/JacobiJacobiLobattoMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiJacobiLobattoMatrix.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiInvTransform",permalink:"/docs-api/JacobiPolynomialUtility/JacobiInvTransform"},next:{title:"JacobiJacobiMatrix",permalink:"/docs-api/JacobiPolynomialUtility/JacobiJacobiMatrix"}},d={},p=[{value:"Examples",id:"examples",level:2}];function f(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"jacobijacobilobattomatrix",children:"JacobiJacobiLobattoMatrix"}),"\n",(0,n.jsx)(a.p,{children:"Jacobi Lobatto matrix for Jacobi polynomial."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE JacobiJacobiLobattoMatrix(n, alpha, beta, D, &\n    & E, alphaCoeff, betaCoeff)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! n should be greater than or equal to 1\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha of jacobu poly\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta of jacobi poly\n    REAL(DFP), INTENT(OUT) :: D(:)\n    !! the size should be 1:n+2\n    REAL(DFP), INTENT(OUT) :: E(:)\n    !! the size should be 1:n+1\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)\n    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)\n  END SUBROUTINE JacobiJacobiLobattoMatrix\nEND INTERFACE\n\n"})}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,n.jsxs)(r.Z,{children:[(0,n.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(s,{})}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function m(e={}){const{wrapper:a}={...(0,o.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var n=t(86010);const o={tabItem:"tabItem_Ymn6"};var r=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(67294),o=t(86010),r=t(12466),i=t(16550),l=t(20469),s=t(91980),c=t(67392),u=t(50012);function b(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return b(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:o}}=e;return{value:a,label:t,attributes:n,default:o}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const o=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(o.location.search);a.set(r,e),o.replace({...o.location,search:a.toString()})}),[r,o])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:o}=e,r=d(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[c,b]=f({queryString:t,groupId:o}),[m,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[o,r]=(0,u.Nk)(t);return[o,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),x=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),b(e),h(e)}),[b,h,r]),tabValues:r}}var h=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const a=e.currentTarget,t=s.indexOf(a),o=l[t].value;o!==n&&(c(a),i(o))},b=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>s.push(e),onKeyDown:b,onClick:u,...r,className:(0,o.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function E(e){let{lazy:a,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==o})))})}function g(e){const a=m(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...e,...a}),(0,v.jsx)(E,{...e,...a})]})}function N(e){const a=(0,h.Z)();return(0,v.jsx)(g,{...e,children:b(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>i});var n=t(67294);const o={},r=n.createContext(o);function i(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);