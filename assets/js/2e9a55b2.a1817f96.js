"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97327,43778],{88254:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=s(85893),i=s(11151);const n={},r="Display",o={id:"AbstractMeshField/Display",title:"Display",description:"Display the content of AbstractMeshField.",source:"@site/docs/docs-api/AbstractMeshField/Display.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Display",permalink:"/docs-api/AbstractMeshField/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Display.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/AbstractMeshField/Deallocate"},next:{title:"Export",permalink:"/docs-api/AbstractMeshField/Export"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,a.jsxs)(t.p,{children:["Display the content of ",(0,a.jsx)(t.code,{children:"AbstractMeshField"}),"."]}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @IOMethod "}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Display(obj, msg, unitNo)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},46423:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=s(85893),i=s(11151),n=s(88254);const r={},o="Display",c={id:"TensorMeshField/Display",title:"Display",description:"Inheritated from AbstractMeshField.",source:"@site/docs/docs-api/TensorMeshField/Display.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/Display",permalink:"/docs-api/TensorMeshField/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TensorMeshField/Display.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/TensorMeshField/Deallocate"},next:{title:"Export",permalink:"/docs-api/TensorMeshField/Export"}},d={},l=[];function p(e){const t={a:"a",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,a.jsxs)(t.p,{children:["Inheritated from ",(0,a.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"}),"."]}),"\n","\n","\n",(0,a.jsx)(n.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>r});var a=s(67294);const i={},n=a.createContext(i);function r(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);