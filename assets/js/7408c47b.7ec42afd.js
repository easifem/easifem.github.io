"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94981],{92832:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(85893),r=n(11151);const a={},s="Initiate",o={id:"UserFunction/Initiate",title:"Initiate",description:"Initiate an instance of UserFunction",source:"@site/docs/docs-api/UserFunction/Initiate.md",sourceDirName:"UserFunction",slug:"/UserFunction/Initiate",permalink:"/docs-api/UserFunction/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UserFunction/Initiate.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetReturnType",permalink:"/docs-api/UserFunction/GetReturnType"},next:{title:"SetUserFunctionParam",permalink:"/docs-api/UserFunction/SetUserFunction"}},c={},d=[{value:"Interface",id:"interface",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsxs)(t.p,{children:["Initiate an instance of ",(0,i.jsx)(t.code,{children:"UserFunction"})]}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE auf_Initiate(obj, param)\n    CLASS(UserFunction_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE auf_Initiate\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);