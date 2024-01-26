"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[24816,41540],{94687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(85893),n=r(11151);const o={},i="Import",a={id:"AbstractMeshField/Import",title:"Import",description:"Import data from HDF5 file.",source:"@site/docs/docs-api/AbstractMeshField/Import.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Import",permalink:"/docs-api/AbstractMeshField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Import.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrefix",permalink:"/docs-api/AbstractMeshField/GetPrefix"},next:{title:"Shape",permalink:"/docs-api/AbstractMeshField/Shape"}},d={},c=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,s.jsx)(t.p,{children:"Import data from HDF5 file."}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Import(obj, hdf5, group, mesh)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Mesh_), TARGET, OPTIONAL, INTENT(IN) :: mesh\n  END SUBROUTINE Import\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},76043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var s=r(85893),n=r(11151),o=r(94687);const i={},a="Import",d={id:"TensorMeshField/Import",title:"Import",description:"Inherited from AbstractMeshField",source:"@site/docs/docs-api/TensorMeshField/Import.md",sourceDirName:"TensorMeshField",slug:"/TensorMeshField/Import",permalink:"/docs-api/TensorMeshField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TensorMeshField/Import.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrefix",permalink:"/docs-api/TensorMeshField/GetPrefix"},next:{title:"Set",permalink:"/docs-api/TensorMeshField/Set"}},c={},p=[];function l(e){const t={a:"a",h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,s.jsxs)(t.p,{children:["Inherited from ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractMeshField",children:"AbstractMeshField"})]}),"\n","\n","\n",(0,s.jsx)(o.default,{})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>i});var s=r(67294);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);