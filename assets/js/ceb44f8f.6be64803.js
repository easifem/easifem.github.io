"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[52209],{28593:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=n(85893),i=n(11151);const s={},l="Import",c={id:"DirichletBC/Import",title:"Import",description:"Import DirichletBC by reading a HDF5File",source:"@site/docs/docs-api/DirichletBC/Import.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/Import",permalink:"/docs-api/DirichletBC/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DirichletBC/Import.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetMeshID",permalink:"/docs-api/DirichletBC/GetMeshID"},next:{title:"Initiate",permalink:"/docs-api/DirichletBC/Initiate"}},d={},o=[{value:"Interface",id:"interface",level:2}];function h(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,r.jsxs)(e.p,{children:["Import ",(0,r.jsx)(e.a,{href:"/docs-api/DirichletBC/DirichletBC_",children:"DirichletBC_"})," by reading a ",(0,r.jsx)(e.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})]}),"\n",(0,r.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Import(obj, hdf5, group, dom)\n    CLASS(DirichletBC_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Template"})," is given below."]}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Variable"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Data type"}),(0,r.jsx)(e.th,{style:{textAlign:"center"},children:"Value"}),(0,r.jsx)(e.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"name"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"idof"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"nodalValueType"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsxs)(e.td,{style:{textAlign:"center"},children:[(0,r.jsx)(e.code,{children:"CONSTANT"}),", ",(0,r.jsx)(e.code,{children:"SPACE"}),", ",(0,r.jsx)(e.code,{children:"TIME"}),", ",(0,r.jsx)(e.code,{children:"SPACETIME"})]}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"UseFunction"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"BOOL"}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"Boundary"})}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"Group"}),(0,r.jsx)(e.td,{style:{textAlign:"center"},children:"\\"}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"center"}}),(0,r.jsx)(e.td,{style:{textAlign:"right"}})]})]})]})]})}function a(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(h,{...t})}):h(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:l(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);