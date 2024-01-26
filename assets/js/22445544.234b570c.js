"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[48856],{3105:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(85893),n=t(11151);const s={},i="CheckEssentialParam",o={id:"SolidMaterial/CheckEssentialParam",title:"CheckEssentialParam",description:"Check the essential parameters in the ParameterList_.",source:"@site/docs/docs-api/SolidMaterial/CheckEssentialParam.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/CheckEssentialParam",permalink:"/docs-api/SolidMaterial/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddSolidMaterial",permalink:"/docs-api/SolidMaterial/AddSolidMaterial"},next:{title:"Deallocate",permalink:"/docs-api/SolidMaterial/Deallocate"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,r.jsxs)(a.p,{children:["Check the essential parameters in the ",(0,r.jsx)(a.code,{children:"ParameterList_"}),"."]}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,r.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE CheckEssentialParam(obj, param)\n    CLASS(SolidMaterial_), INTENT(IN) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>i});var r=t(67294);const n={},s=r.createContext(n);function i(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);