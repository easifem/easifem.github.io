"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85226],{25335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(85893),r=n(11151);const s={},d="Import",c={id:"STVectorFieldLis/Import",title:"Import",description:"Initiate an instance of space-time vector field by import.",source:"@site/docs/docs-api/STVectorFieldLis/Import.md",sourceDirName:"STVectorFieldLis",slug:"/STVectorFieldLis/Import",permalink:"/docs-api/STVectorFieldLis/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorFieldLis/Import.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointerOfComponent",permalink:"/docs-api/STVectorFieldLis/GetPointerOfComponent"},next:{title:"Initiate",permalink:"/docs-api/STVectorFieldLis/Initiate"}},l={},o=[{value:"Interface",id:"interface",level:2},{value:"Template",id:"template",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,i.jsx)(t.p,{children:"Initiate an instance of space-time vector field by import."}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE Import(obj, hdf5, group, dom, domains)\n    CLASS(STVectorFieldLis_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    TYPE(Domain_), TARGET, OPTIONAL, INTENT(IN) :: dom\n    TYPE(DomainPointer_), TARGET, OPTIONAL, INTENT(IN) :: domains(:)\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Variable"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"restart"}),"*"]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Char"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"T"})," or ",(0,i.jsx)(t.code,{children:"F"})]}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Name of the scalar field"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fieldType"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"NORMAL"}),", ",(0,i.jsx)(t.code,{children:"CONSTANT"}),", ",(0,i.jsx)(t.code,{children:"CONSTANT_SPACE"}),", ",(0,i.jsx)(t.code,{children:"CONSTANT_TIME"})]}),(0,i.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"timeCompo"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Number of time components"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"spaceCompo"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"Number of spatial components"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>d});var i=n(67294);const r={},s=i.createContext(r);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);