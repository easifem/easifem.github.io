"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[31717,53688],{76133:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var d=s(85893),a=s(11151);const n={id:"Add",aliases:["Add"],tags:[],sidebar_position:5},r="Add",i={id:"AbstractMeshField/Add",title:"Add",description:"Add data to AbstractMeshField.",source:"@site/docs/docs-api/AbstractMeshField/Add.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Add",permalink:"/docs-api/AbstractMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:5,frontMatter:{id:"Add",aliases:["Add"],tags:[],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/AbstractMeshField/Set"},next:{title:"Get",permalink:"/docs-api/AbstractMeshField/Get"}},o={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,d.jsxs)(t.p,{children:["Add data to ",(0,d.jsx)(t.code,{children:"AbstractMeshField"}),"."]}),"\n",(0,d.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,d.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Add(obj, globalElement, scale, fevar)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    REAL(DFP), INTENT(IN) :: scale\n    TYPE(FEVariable_), INTENT(IN) :: fevar\n  END SUBROUTINE Add\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},47066:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var d=s(85893),a=s(11151),n=s(76133);const r={},i="Add",o={id:"TensorMeshField/Add",title:"Add",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/TensorMeshField/Add.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/Add",permalink:"/docs-api/TensorMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TensorMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/TensorMeshField/Initiate"},next:{title:"CheckEssentialParam",permalink:"/docs-api/TensorMeshField/CheckEssentialParam"}},c={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,d.jsxs)(t.p,{children:["Inheritated from ",(0,d.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,d.jsx)(n.default,{})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>r});var d=s(67294);const a={},n=d.createContext(a);function r(e){const t=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),d.createElement(n.Provider,{value:t},e.children)}}}]);