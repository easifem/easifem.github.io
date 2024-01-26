"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20351,17459],{64799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(85893),s=n(11151);const i={},o="GetPointer",a={id:"AbstractMeshField/GetPointer",title:"GetPointer",description:"Returns the pointer to fortran array stored inside AbstractMeshField",source:"@site/docs/docs-api/AbstractMeshField/GetPointer.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/GetPointer",permalink:"/docs-api/AbstractMeshField/GetPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/GetPointer.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/AbstractMeshField/Export"},next:{title:"GetPrefix",permalink:"/docs-api/AbstractMeshField/GetPrefix"}},d={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getpointer",children:"GetPointer"}),"\n",(0,r.jsxs)(t.p,{children:["Returns the pointer to fortran array stored inside ",(0,r.jsx)(t.code,{children:"AbstractMeshField"})]}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"You should not use this method, if you do not know what you are doing."})}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION obj_GetPointer(obj) RESULT(ans)\n    CLASS(AbstractMeshField_), TARGET, INTENT(IN) :: obj\n    REAL(DFP), POINTER :: ans(:, :)\n  END FUNCTION obj_GetPointer\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},43406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=n(85893),s=n(11151),i=n(64799);const o={},a="GetPointer",d={id:"TensorMeshField/GetPointer",title:"GetPointer",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/TensorMeshField/GetPointer.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/GetPointer",permalink:"/docs-api/TensorMeshField/GetPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TensorMeshField/GetPointer.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Get",permalink:"/docs-api/TensorMeshField/Get"},next:{title:"GetPrefix",permalink:"/docs-api/TensorMeshField/GetPrefix"}},c={},l=[];function h(e){const t={a:"a",h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getpointer",children:"GetPointer"}),"\n",(0,r.jsxs)(t.p,{children:["Inherited from ",(0,r.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,r.jsx)(i.default,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);