"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80399],{61122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(85893),r=a(11151);const o={},i="SetData",s={id:"LinearElasticModel/SetData",title:"SetData",description:"Set the data.",source:"@site/docs/docs-api/LinearElasticModel/SetData.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/SetData",permalink:"/docs-api/LinearElasticModel/SetData",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/SetData.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImportFromToml",permalink:"/docs-api/LinearElasticModel/ImportFromToml"},next:{title:"SetLinearElasticParam",permalink:"/docs-api/LinearElasticModel/SetLinearElasticModelParam"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setdata",children:"SetData"}),"\n",(0,n.jsx)(t.p,{children:"Set the data."}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetData(obj, DATA)\n    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(IN) :: DATA(:)\n  END SUBROUTINE SetData\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);