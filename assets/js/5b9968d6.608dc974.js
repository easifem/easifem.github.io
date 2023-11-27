"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43733],{27939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(85893),a=r(11151);const i={},s="WriteData",o={id:"AbstractKernel/WriteData",title:"WriteData",description:"This routine writes the data in the HDF5File",source:"@site/docs/docs-api/AbstractKernel/WriteData.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/WriteData",permalink:"/docs-api/AbstractKernel/WriteData",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/WriteData.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UpdateIteration",permalink:"/docs-api/AbstractKernel/UpdateIteration"},next:{title:"AbstractLinSolver",permalink:"/docs-api/AbstractLinSolver/"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writedata",children:"WriteData"}),"\n",(0,n.jsxs)(t.p,{children:["This routine writes the data in the ",(0,n.jsx)(t.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE WriteData_hdf5(obj, hdf5, group)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(len=*), INTENT(IN) :: group\n  END SUBROUTINE WriteData_hdf5\nEND INTERFACE\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This routine writes the data in the ",(0,n.jsx)(t.a,{href:"/docs-api/VTKFile/VTKFile_",children:"VTKFile_"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE WriteData_vtk(obj, vtk, group)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    TYPE(VTKFile_), INTENT(INOUT) :: vtk\n    CHARACTER(len=*), INTENT(IN) :: group\n  END SUBROUTINE WriteData_vtk\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var n=r(67294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);