"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15814],{65961:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(85893),o=n(11151);const i={},r="IsUseFunction",c={id:"AbstractBC/IsUseFunction",title:"IsUseFunction",description:"Returns true if use function option is set to true.",source:"@site/docs/docs-api/AbstractBC/IsUseFunction.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/IsUseFunction",permalink:"/docs-api/AbstractBC/IsUseFunction",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/IsUseFunction.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/AbstractBC/Initiate"},next:{title:"Set",permalink:"/docs-api/AbstractBC/Set"}},a={},u=[{value:"Interface",id:"interface",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"isusefunction",children:"IsUseFunction"}),"\n",(0,s.jsx)(e.p,{children:"Returns true if use function option is set to true."}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,s.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isUseFunction(obj) RESULT(ans)\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isUseFunction\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);