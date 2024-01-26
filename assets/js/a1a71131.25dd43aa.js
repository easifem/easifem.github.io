"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19977],{88634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(85893),n=r(11151);const i={},c="Export",a={id:"VectorField/Export",title:"Export",description:"Export the field to an external file.",source:"@site/docs/docs-api/VectorField/Export.md",sourceDirName:"VectorField",slug:"/VectorField/Export",permalink:"/docs-api/VectorField/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VectorField/Export.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/VectorField/Display"},next:{title:"Get",permalink:"/docs-api/VectorField/Get"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"export",children:"Export"}),"\n",(0,o.jsx)(t.p,{children:"Export the field to an external file."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Export( obj, hdf5, group )\n  CLASS( VectorField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\nEND SUBROUTINE Export\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>a,a:()=>c});var o=r(67294);const n={},i=o.createContext(n);function c(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);