"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71246],{59762:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(85893),s=n(11151);const r={},i="SetEOFStat",o={id:"AbstractFile/SetEOFStat",title:"SetEOFStat",description:"Set the end of file status of the file.",source:"@site/docs/docs-api/AbstractFile/SetEOFStat.md",sourceDirName:"AbstractFile",slug:"/AbstractFile/SetEOFStat",permalink:"/docs-api/AbstractFile/SetEOFStat",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractFile/SetEOFStat.md",tags:[],version:"current",lastUpdatedAt:1706190082,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsWrite",permalink:"/docs-api/AbstractFile/IsWrite"},next:{title:"SetFileExt",permalink:"/docs-api/AbstractFile/SetFileExt"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"seteofstat",children:"SetEOFStat"}),"\n",(0,a.jsx)(e.p,{children:"Set the end of file status of the file."}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE aFile_SetEOFstat(obj, stat)\n    CLASS(AbstractFile_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN) :: stat\n  END SUBROUTINE aFile_SetEOFstat\nEND INTERFACE\n"})})]})}function f(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var a=n(67294);const s={},r=a.createContext(s);function i(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:i(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);