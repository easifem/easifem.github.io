"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63608],{79054:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var a=r(85893),o=r(11151);const n={},s="Export",i={id:"AbstractMaterialModel/Export",title:"Export",description:"Export the data to HDF5File.",source:"@site/docs/docs-api/AbstractMaterialModel/Export.md",sourceDirName:"AbstractMaterialModel",slug:"/AbstractMaterialModel/Export",permalink:"/docs-api/AbstractMaterialModel/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterialModel/Export.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/AbstractMaterialModel/Display"},next:{title:"GetFromToml",permalink:"/docs-api/AbstractMaterialModel/GetFromToml"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"export",children:"Export"}),"\n",(0,a.jsx)(e.p,{children:"Export the data to HDF5File."}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Export(obj, hdf5, group)\n    IMPORT :: AbstractMaterialModel_, HDF5File_\n    CLASS(AbstractMaterialModel_), INTENT(IN) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>i,a:()=>s});var a=r(67294);const o={},n=a.createContext(o);function s(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);