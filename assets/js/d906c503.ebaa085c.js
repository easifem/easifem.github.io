"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85223],{51240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(85893),i=r(11151);const o={},a="Export",s={id:"MatrixFieldLis/Export",title:"Export",description:"Export the abstract field to an external file.",source:"@site/docs/docs-api/MatrixFieldLis/Export.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/Export",permalink:"/docs-api/MatrixFieldLis/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/Export.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/MatrixFieldLis/Display"},next:{title:"GetColumn",permalink:"/docs-api/MatrixFieldLis/GetColumn"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"export",children:"Export"}),"\n",(0,n.jsx)(t.p,{children:"Export the abstract field to an external file."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Export( obj, hdf5, group )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\nEND SUBROUTINE Export\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var n=r(67294);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);