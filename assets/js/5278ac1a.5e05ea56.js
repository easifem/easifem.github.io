"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43854],{47814:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=a(85893),r=a(11151);const s={},n="WriteData",c={id:"AbstractSTDBE/WriteData",title:"WriteData",description:"This routine writes the simulation data in the hdf5 file HDF5File.",source:"@site/docs/docs-api/AbstractSTDBE/WriteData.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/WriteData",permalink:"/docs-api/AbstractSTDBE/WriteData",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/WriteData.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UpdateIteration",permalink:"/docs-api/AbstractSTDBE/UpdateIteration"},next:{title:"AbstractSolidMech",permalink:"/docs-api/AbstractSolidMechanicsModel/"}},o={},d=[];function l(t){const e={a:"a",code:"code",h1:"h1",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"writedata",children:"WriteData"}),"\n",(0,i.jsxs)(e.p,{children:["This routine writes the simulation data in the hdf5 file ",(0,i.jsx)(e.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE STDBE_WriteData_hdf5(obj, hdf5, group)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(LEN=*), INTENT(IN) :: group\n  END SUBROUTINE STDBE_WriteData_hdf5\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(e.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(e.li,{className:"task-list-item",children:[(0,i.jsx)(e.input,{type:"checkbox",disabled:!0})," ","TODO Add ",(0,i.jsx)(e.code,{children:"WriteData"})," for ",(0,i.jsx)(e.a,{href:"/docs-api/VTKFile/VTKFile_",children:"VTKFile_"})," in ",(0,i.jsx)(e.a,{href:"/docs-api/AbstractSTDBE/AbstractSTDBE_",children:"AbstractSTDBE_"}),"."]}),"\n"]})]})}function p(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(l,{...t})}):l(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>c,a:()=>n});var i=a(67294);const r={},s=i.createContext(r);function n(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:n(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);