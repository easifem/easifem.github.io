"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96504],{49958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(85893),s=n(11151);const a={},i="GetPrefix",o={id:"AbstractBC/GetPrefix",title:"GetPrefix",description:"Get the prefix.",source:"@site/docs/docs-api/AbstractBC/GetPrefix.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/GetPrefix",permalink:"/docs-api/AbstractBC/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetParam",permalink:"/docs-api/AbstractBC/GetParam"},next:{title:"Import",permalink:"/docs-api/AbstractBC/Import"}},c={},d=[{value:"Interface",id:"interface",level:2}];function f(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,r.jsx)(t.p,{children:"Get the prefix."}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["This method must be implemented by the subclass of ",(0,r.jsx)(t.code,{children:"AbstractBC_"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION bc_GetPrefix(obj) RESULT(ans)\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION bc_GetPrefix\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(67294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);