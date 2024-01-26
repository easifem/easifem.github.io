"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[49517],{34025:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>d,metadata:()=>a,toc:()=>l});var s=r(85893),n=r(11151);const d={},i="Import",a={id:"AbstractMatrixField/Import",title:"Import",description:"Import the field from an external file.",source:"@site/docs/docs-api/AbstractMatrixField/Import.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/Import",permalink:"/docs-api/AbstractMatrixField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMatrixField/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ILUSolve",permalink:"/docs-api/AbstractMatrixField/ILUSolve"},next:{title:"Initiate",permalink:"/docs-api/AbstractMatrixField/Initiate"}},c={},l=[{value:"Interface",id:"interface",level:2},{value:"Template",id:"template",level:2}];function o(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"import",children:"Import"}),"\n",(0,s.jsx)(e.p,{children:"Import the field from an external file."}),"\n",(0,s.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Import( obj, hdf5, group, dom )\n  CLASS( AbstractMatrixField_ ), INTENT( INOUT ) :: obj\n  TYPE( HDF5File_ ), INTENT( INOUT ) :: hdf5\n  CHARACTER( LEN = * ), INTENT( IN ) :: group\n  TYPE( Domain_ ), TARGET, INTENT( IN ) :: dom\nEND SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(e.h2,{id:"template",children:"Template"}),"\n",(0,s.jsx)(e.p,{children:"Following is the template"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Variable"}),(0,s.jsx)(e.th,{children:"Data type"}),(0,s.jsx)(e.th,{children:"Value"}),(0,s.jsx)(e.th,{children:"Comment"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"name"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"fieldType"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"matrixProp"})}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"spaceCompo"})}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"timeCompo"}),"*"]}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"restart"}),"*"]}),(0,s.jsx)(e.td,{children:"CHAR"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"T"}),", ",(0,s.jsx)(e.code,{children:"F"})]}),(0,s.jsx)(e.td,{})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"restart"})," The default value is False. If it is true then it represents that we are restarting the simulation, in this case more information are necessary."]})]})}function x(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(o,{...t})}):o(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>a,a:()=>i});var s=r(67294);const n={},d=s.createContext(n);function i(t){const e=s.useContext(d);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),s.createElement(d.Provider,{value:e},t.children)}}}]);