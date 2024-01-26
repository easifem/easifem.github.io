"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41142],{16107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(85893),i=a(11151);const r={},s="UpdateData",o={id:"LinearElasticModel/UpdateData",title:"UpdateData",description:"Update constitutive data.",source:"@site/docs/docs-api/LinearElasticModel/UpdateData.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/UpdateData",permalink:"/docs-api/LinearElasticModel/UpdateData",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/UpdateData.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetLinearElasticParam",permalink:"/docs-api/LinearElasticModel/SetLinearElasticModelParam"},next:{title:"LinearStaticCDR",permalink:"/docs-api/LinearStaticCDR/"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"updatedata",children:"UpdateData"}),"\n",(0,n.jsx)(t.p,{children:"Update constitutive data."}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE UpdateData(obj, DATA)\n    CLASS(LinearElasticModel_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(INOUT) :: DATA(:)\n  END SUBROUTINE UpdateData\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(67294);const i={},r=n.createContext(i);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);