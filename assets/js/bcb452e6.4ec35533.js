"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[47793,53688],{76133:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>o});var d=a(85893),s=a(11151);const r={id:"Add",aliases:["Add"],tags:[],sidebar_position:5},i="Add",n={id:"AbstractMeshField/Add",title:"Add",description:"Add data to AbstractMeshField.",source:"@site/docs/docs-api/AbstractMeshField/Add.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Add",permalink:"/docs-api/AbstractMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:5,frontMatter:{id:"Add",aliases:["Add"],tags:[],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/AbstractMeshField/Set"},next:{title:"Get",permalink:"/docs-api/AbstractMeshField/Get"}},c={},o=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,d.jsxs)(t.p,{children:["Add data to ",(0,d.jsx)(t.code,{children:"AbstractMeshField"}),"."]}),"\n",(0,d.jsx)("span",{class:"badge badge--secondary",children:" @SetMethods "}),"\n",(0,d.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Add(obj, globalElement, scale, fevar)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement\n    REAL(DFP), INTENT(IN) :: scale\n    TYPE(FEVariable_), INTENT(IN) :: fevar\n  END SUBROUTINE Add\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},27664:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=a(85893),s=a(11151),r=a(76133);const i={},n="Add",c={id:"STScalarMeshField/Add",title:"Add",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/STScalarMeshField/Add.md",sourceDirName:"STScalarMeshField",slug:"/STScalarMeshField/Add",permalink:"/docs-api/STScalarMeshField/Add",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STScalarMeshField/Add.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetSTScalarMeshFieldParam",permalink:"/docs-api/STScalarMeshField/SetSTScalarMeshFieldParam"},next:{title:"CheckEssentialParam",permalink:"/docs-api/STScalarMeshField/CheckEssentialParam"}},o={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"add",children:"Add"}),"\n",(0,d.jsxs)(t.p,{children:["Inheritated from ",(0,d.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,d.jsx)(r.default,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>n,a:()=>i});var d=a(67294);const s={},r=d.createContext(s);function i(e){const t=d.useContext(r);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),d.createElement(r.Provider,{value:t},e.children)}}}]);