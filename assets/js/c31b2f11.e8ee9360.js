"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20437],{14721:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(85893),a=r(11151);const i={},o="Export",s={id:"AbstractMatrixField/Export",title:"Export",description:"Export the abstract field to an external file.",source:"@site/docs/docs-api/AbstractMatrixField/Export.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/Export",permalink:"/docs-api/AbstractMatrixField/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractMatrixField/Export.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/AbstractMatrixField/Display"},next:{title:"GetColumn",permalink:"/docs-api/AbstractMatrixField/GetColumn"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"export",children:"Export"}),"\n",(0,n.jsx)(e.p,{children:"Export the abstract field to an external file."}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Export( obj, hdf5, group )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\nEND SUBROUTINE Export\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(l,{...t})}):l(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>s,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);