"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45174],{22344:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(85893),s=n(11151);const i={},r="Display",o={id:"AbstractField/Display",title:"Display",description:"Display the content of AbstractField",source:"@site/docs/docs-api/AbstractField/Display.md",sourceDirName:"AbstractField",slug:"/AbstractField/Display",permalink:"/docs-api/AbstractField/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractField/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/AbstractField/Deallocate"},next:{title:"Export",permalink:"/docs-api/AbstractField/Export"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"display",children:"Display"}),"\n",(0,a.jsx)(e.p,{children:"Display the content of AbstractField"}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\nSUBROUTINE Display( obj, msg, unitNo )\n  IMPORT :: AbstractField_, I4B\n  CLASS( AbstractField_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo\nEND SUBROUTINE Display\nEND INTERFACE\n"})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>r});var a=n(67294);const s={},i=a.createContext(s);function r(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);