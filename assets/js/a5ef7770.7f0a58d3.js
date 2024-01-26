"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45421,1594],{88566:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var r=a(85893),s=a(11151);const n={},i="CheckEssentialParam",c={id:"AbstractBC/CheckEssentialParam",title:"CheckEssentialParam",description:"Check essential parameters required for constructing the AbstractBC",source:"@site/docs/docs-api/AbstractBC/CheckEssentialParam.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/CheckEssentialParam",permalink:"/docs-api/AbstractBC/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetAbstractBCParam",permalink:"/docs-api/AbstractBC/SetAbstractBCParam"},next:{title:"Deallocate",permalink:"/docs-api/AbstractBC/Deallocate"}},o={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,r.jsxs)(t.p,{children:["Check essential parameters required for constructing the ",(0,r.jsx)(t.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC"})]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"This routine is for internal use only."})}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE CheckEssentialParam(obj, param)\n    IMPORT :: AbstractBC_, ParameterList_\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},32616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=a(85893),s=a(11151),n=a(88566);const i={},c="CheckEssentialParam",o={id:"DirichletBC/CheckEssentialParam",title:"CheckEssentialParam",description:"",source:"@site/docs/docs-api/DirichletBC/CheckEssentialParam.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/CheckEssentialParam",permalink:"/docs-api/DirichletBC/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DirichletBC/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddDirichletBC",permalink:"/docs-api/DirichletBC/AddDirichletBC"},next:{title:"Deallocate",permalink:"/docs-api/DirichletBC/Deallocate"}},l={},d=[];function h(e){const t={h1:"h1",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n","\n","\n",(0,r.jsx)(n.default,{})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var r=a(67294);const s={},n=r.createContext(s);function i(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);