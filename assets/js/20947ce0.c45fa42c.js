"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71702],{30878:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var n=t(85893),r=t(11151),o=t(74866),i=t(85162);function l(e){const a={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'program main\nuse easifembase\nimplicit none\nCALL Display(JacobiLeadingCoeff(5, 0.0_DFP, 0.0_DFP), "ans: " )\nend program main\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-txt",metastring:'title="results"',children:"ans: 7.87500\n"})})]})}function s(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}const c={},u="JacobiLeadingCoeff",d={id:"JacobiPolynomialUtility/JacobiLeadingCoeff",title:"JacobiLeadingCoeff",description:"Leading coefficient of Jacobi polynomials.",source:"@site/docs/docs-api/JacobiPolynomialUtility/JacobiLeadingCoeff.md",sourceDirName:"JacobiPolynomialUtility",slug:"/JacobiPolynomialUtility/JacobiLeadingCoeff",permalink:"/docs-api/JacobiPolynomialUtility/JacobiLeadingCoeff",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/JacobiPolynomialUtility/JacobiLeadingCoeff.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"JacobiJacobiRadauMatrix",permalink:"/docs-api/JacobiPolynomialUtility/JacobiJacobiRadauMatrix"},next:{title:"JacobiLeadingCoeffRatio",permalink:"/docs-api/JacobiPolynomialUtility/JacobiLeadingCoeffRatio"}},f={},p=[{value:"Examples",id:"examples",level:2}];function b(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"jacobileadingcoeff",children:"JacobiLeadingCoeff"}),"\n",(0,n.jsx)(a.p,{children:"Leading coefficient of Jacobi polynomials."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION JacobiLeadingCoeff(n, alpha, beta) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: n\n    !! order of Jacobi polynomial\n    REAL(DFP), INTENT(IN) :: alpha\n    !! alpha in Jacobi poly\n    REAL(DFP), INTENT(IN) :: beta\n    !! beta in Jacobi poly\n    REAL(DFP) :: ans\n    !! answer\n  END FUNCTION JacobiLeadingCoeff\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(a.h2,{id:"examples",children:"Examples"}),"\n","\n","\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,n.jsx)(s,{})}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]})]})}function m(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}},85162:(e,a,t)=>{t.d(a,{Z:()=>i});t(67294);var n=t(86010);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:a,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:t,children:a})}},74866:(e,a,t)=>{t.d(a,{Z:()=>E});var n=t(67294),r=t(86010),o=t(12466),i=t(16550),l=t(20469),s=t(91980),c=t(67392),u=t(50012);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function b(e){let{queryString:a=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(r.location.search);a.set(o,e),r.replace({...r.location,search:a.toString()})}),[o,r])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,o=f(e),[i,s]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[c,d]=b({queryString:t,groupId:r}),[m,h]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,o]=(0,u.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(e){let{className:a,block:t,selectedValue:n,selectValue:i,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const a=e.currentTarget,t=s.indexOf(a),r=l[t].value;r!==n&&(c(a),i(r))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;a=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;a=s[t]??s[s.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a),children:l.map((e=>{let{value:a,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>s.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function x(e){let{lazy:a,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function N(e){const a=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...a}),(0,v.jsx)(x,{...e,...a})]})}function E(e){const a=(0,h.Z)();return(0,v.jsx)(N,{...e,children:d(e.children)},String(a))}},11151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>i});var n=t(67294);const r={},o=n.createContext(r);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);