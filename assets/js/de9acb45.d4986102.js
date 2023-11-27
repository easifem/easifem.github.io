"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50904],{92319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(85893),i=n(11151);const l={},s="Import",d={id:"STScalarField/Import",title:"Import",description:"Import the field from an external file.",source:"@site/docs/docs-api/STScalarField/Import.md",sourceDirName:"STScalarField",slug:"/STScalarField/Import",permalink:"/docs-api/STScalarField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STScalarField/Import.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPointerOfComponent",permalink:"/docs-api/STScalarField/GetPointerOfComponent"},next:{title:"Initiate",permalink:"/docs-api/STScalarField/Initiate"}},c={},a=[{value:"Interface",id:"interface",level:2},{value:"Template",id:"template",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,r.jsx)(t.p,{children:"Import the field from an external file."}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Import( obj, hdf5, group, dom )\n  CLASS( STScalarField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\n  TYPE( Domzain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(t.h2,{id:"template",children:"Template"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"restart"}),"*"]}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Char"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"T"})," or ",(0,r.jsx)(t.code,{children:"F"})]}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"name"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Name of the scalar field"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"fieldType"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,r.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,r.jsx)(t.code,{children:"NORMAL"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT_SPACE"}),", ",(0,r.jsx)(t.code,{children:"CONSTANT_TIME"})]}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"timeCompo"})}),(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"Integer"}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"Number of time components"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"center"}}),(0,r.jsx)(t.td,{style:{textAlign:"right"}})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var r=n(67294);const i={},l=r.createContext(i);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);