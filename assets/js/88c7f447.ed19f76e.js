"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85151],{74727:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(85893),n=r(11151);const o={},i="Import",s={id:"AbstractMaterial/Import",title:"Import",description:"Initiate an instance of AbstractMaterial_ by using HDF5File.",source:"@site/docs/docs-api/AbstractMaterial/Import.md",sourceDirName:"AbstractMaterial",slug:"/AbstractMaterial/Import",permalink:"/docs-api/AbstractMaterial/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMaterial/Import.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrefix",permalink:"/docs-api/AbstractMaterial/GetPrefix"},next:{title:"ImportFromToml",permalink:"/docs-api/AbstractMaterial/ImportFromToml"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,a.jsxs)(e.p,{children:["Initiate an instance of ",(0,a.jsx)(e.code,{children:"AbstractMaterial_"})," by using ",(0,a.jsx)(e.code,{children:"HDF5File"}),"."]}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE AbstractMaterialImport\n  MODULE SUBROUTINE Import(obj, hdf5, group)\n    CLASS(AbstractMaterial_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Import\nEND INTERFACE AbstractMaterialImport\n"})})]})}function p(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var a=r(67294);const n={},o=a.createContext(n);function i(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);