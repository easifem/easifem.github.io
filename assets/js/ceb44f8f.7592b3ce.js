"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[52209,817],{68120:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=r(85893),n=r(11151);const a={},i="Import",s={id:"AbstractBC/Import",title:"Import",description:"Import AbstractBC by reading a HDF5File",source:"@site/docs/docs-api/AbstractBC/Import.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Import",permalink:"/docs-api/AbstractBC/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/Import.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrefix",permalink:"/docs-api/AbstractBC/GetPrefix"},next:{title:"ImportFromToml",permalink:"/docs-api/AbstractBC/ImportFromToml"}},c={},d=[{value:"Interface",id:"interface",level:2}];function p(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,o.jsxs)(e.p,{children:["Import ",(0,o.jsx)(e.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC_"})," by reading a ",(0,o.jsx)(e.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})]}),"\n",(0,o.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,o.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Import(obj, hdf5, group, dom)\n    IMPORT :: AbstractBC_, HDF5File_, Domain_\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE Import\nEND INTERFACE\n"})})]})}function m(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},50297:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=r(85893),n=r(11151),a=r(68120);const i={},s="Import",c={id:"DirichletBC/Import",title:"Import",description:"",source:"@site/docs/docs-api/DirichletBC/Import.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/Import",permalink:"/docs-api/DirichletBC/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DirichletBC/Import.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetMeshID",permalink:"/docs-api/DirichletBC/GetMeshID"},next:{title:"Display_Method",permalink:"/docs-api/Display_Method/"}},d={},p=[];function m(t){const e={h1:"h1",...(0,n.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"import",children:"Import"}),"\n","\n","\n",(0,o.jsx)(a.default,{})]})}function l(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var o=r(67294);const n={},a=o.createContext(n);function i(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);