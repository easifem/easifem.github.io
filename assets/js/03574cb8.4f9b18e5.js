"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76421,83887],{4536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var s=r(85893),i=r(11151);const n={},a="GetPrefix",o={id:"AbstractMeshField/GetPrefix",title:"GetPrefix",description:"Get the prefix.",source:"@site/docs/docs-api/AbstractMeshField/GetPrefix.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/GetPrefix",permalink:"/docs-api/AbstractMeshField/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointer",permalink:"/docs-api/AbstractMeshField/GetPointer"},next:{title:"Import",permalink:"/docs-api/AbstractMeshField/Import"}},d={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,s.jsx)(t.p,{children:"Get the prefix."}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION GetPrefix(obj) RESULT(ans)\n    CLASS(AbstractMeshField_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION GetPrefix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},16611:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var s=r(85893),i=r(11151),n=r(4536);const a={},o="GetPrefix",d={id:"STTensorMeshField/GetPrefix",title:"GetPrefix",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/STTensorMeshField/GetPrefix.md",sourceDirName:"STTensorMeshField",slug:"/STTensorMeshField/GetPrefix",permalink:"/docs-api/STTensorMeshField/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STTensorMeshField/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointer",permalink:"/docs-api/STTensorMeshField/GetPointer"},next:{title:"Import",permalink:"/docs-api/STTensorMeshField/Import"}},c={},l=[];function f(e){const t={a:"a",h1:"h1",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,s.jsxs)(t.p,{children:["Inherited from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,s.jsx)(n.default,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>a});var s=r(67294);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);