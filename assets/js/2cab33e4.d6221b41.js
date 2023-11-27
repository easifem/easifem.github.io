"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[1834],{94348:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(85893),r=a(11151);const i={},o="WriteData",s={id:"SteadyStokes221/WriteData",title:"WriteData",description:"This routine writes the data in the hdf5 file.",source:"@site/docs/docs-api/SteadyStokes221/WriteData.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/WriteData",permalink:"/docs-api/SteadyStokes221/WriteData",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes221/WriteData.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UpdateIteration",permalink:"/docs-api/SteadyStokes221/UpdateIteration"},next:{title:"String",permalink:"/docs-api/String/"}},d={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"writedata",children:"WriteData"}),"\n",(0,n.jsx)(t.p,{children:"This routine writes the data in the hdf5 file."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE WriteData(obj, hdf5, group)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE WriteData\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE WriteData(obj, vtk, group)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    TYPE(VTKFile_), INTENT(INOUT) :: vtk\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE WriteData\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>o});var n=a(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);