"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[54858],{91501:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const i={},s="Import",a={id:"AbstractKernel/Import",title:"Import",description:"This routine initiates the kernel from input file",source:"@site/docs/docs-api/AbstractKernel/Import.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/Import",permalink:"/docs-api/AbstractKernel/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/Import.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/AbstractKernel/Export"},next:{title:"Initiate",permalink:"/docs-api/AbstractKernel/Initiate"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.p,{children:"This routine initiates the kernel from input file"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hdf5"})," contains the parameters for kernel in hdf5file format, the main content depends upon the type of kernel"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"dom"})," is the domain of computation. If ",(0,r.jsx)(t.code,{children:"dom"})," is present then we point to this domain, otherwise, we allocate memory for the domain, and use the mesh file information given in the hdf5 file to generate that domain."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Import(obj, hdf5, group, dom)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    !! Kernel object\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    !! Parameter list\n    CHARACTER(LEN=*), INTENT(IN) :: group\n    !! group or directory\n    CLASS(Domain_), TARGET, INTENT(INOUT) :: dom\n    !! Domain of computation\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE KernelImport\n  MODULE PROCEDURE Import\nEND INTERFACE KernelImport\n"})})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);