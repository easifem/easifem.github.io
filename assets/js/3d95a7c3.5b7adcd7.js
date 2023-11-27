"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[25609],{95123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var r=n(85893),i=n(11151);const s={},d="Import",l={id:"VectorField/Import",title:"Import",description:"Initiate an instance of vector field by import.",source:"@site/docs/docs-api/VectorField/Import.md",sourceDirName:"VectorField",slug:"/VectorField/Import",permalink:"/docs-api/VectorField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorField/Import.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointer",permalink:"/docs-api/VectorField/GetPointer"},next:{title:"Initiate",permalink:"/docs-api/VectorField/Initiate"}},c={},o=[{value:"Interface",id:"interface",level:2},{value:"Template",id:"template",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.p,{children:"Initiate an instance of vector field by import."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE vField_Import(obj, hdf5, group, dom, domains)\n    CLASS(VectorField_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    TYPE(Domain_), TARGET, OPTIONAL, INTENT(IN) :: dom\n    TYPE(DomainPointer_), TARGET, OPTIONAL, INTENT(IN) :: domains(:)\n  END SUBROUTINE vField_Import\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"restart"}),"*"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Char"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"T"})," or ",(0,r.jsx)(t.code,{children:"F"})]}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"aThe default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Name of the scalar field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fieldType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"NORMAL"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT_SPACE"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT_TIME"})]}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spaceCompo"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"It represents the number of the  number of spatial components in the field. For example, in 2D problem, velocity variable has two spatial components."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>d});var r=n(67294);const i={},s=r.createContext(i);function d(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);