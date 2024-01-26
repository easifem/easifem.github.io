"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[89784],{60550:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(85893),n=a(11151);const i={},s="SetWriteStat",c={id:"AbstractFile/SetWriteStat",title:"SetWriteStat",description:"Set the write status of the file.",source:"@site/docs/docs-api/AbstractFile/SetWriteStat.md",sourceDirName:"AbstractFile",slug:"/AbstractFile/SetWriteStat",permalink:"/docs-api/AbstractFile/SetWriteStat",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractFile/SetWriteStat.md",tags:[],version:"current",lastUpdatedAt:1706190082,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetReadStat",permalink:"/docs-api/AbstractFile/SetReadStat"},next:{title:"AbstractFluidMech",permalink:"/docs-api/AbstractFluidMechanicsModel/"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"setwritestat",children:"SetWriteStat"}),"\n",(0,r.jsx)(e.p,{children:"Set the write status of the file."}),"\n",(0,r.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE aFile_SetWriteStat(obj, stat)\n    CLASS(AbstractFile_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN) :: stat\n  END SUBROUTINE aFile_SetWriteStat\nEND INTERFACE\n"})})]})}function u(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>c,a:()=>s});var r=a(67294);const n={},i=r.createContext(n);function s(t){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:s(t.components),r.createElement(i.Provider,{value:e},t.children)}}}]);