"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63744],{45696:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(85893),o=r(11151);const a={},i="Import",s={id:"AbstractField/Import",title:"Import",description:"Import the field from an external file.",source:"@site/docs/docs-api/AbstractField/Import.md",sourceDirName:"AbstractField",slug:"/AbstractField/Import",permalink:"/docs-api/AbstractField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractField/Import.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetParam",permalink:"/docs-api/AbstractField/GetParam"},next:{title:"Initiate",permalink:"/docs-api/AbstractField/Initiate"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,n.jsx)(e.p,{children:"Import the field from an external file."}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Import( obj, hdf5, group, dom )\n  IMPORT :: AbstractField_, I4B, HDF5File_, Domain_\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\n  TYPE( Domzain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Import\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>i});var n=r(67294);const o={},a=n.createContext(o);function i(t){const e=n.useContext(a);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),n.createElement(a.Provider,{value:e},t.children)}}}]);