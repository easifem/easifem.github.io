"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38831],{27463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=n(85893),i=n(11151);const r={},s="GetFileParts",o={id:"AbstractFile/GetFileParts",title:"GetFileParts",description:"Get the file name, path, and extension of the file.",source:"@site/docs/docs-api/AbstractFile/GetFileParts.md",sourceDirName:"AbstractFile",slug:"/AbstractFile/GetFileParts",permalink:"/docs-api/AbstractFile/GetFileParts",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractFile/GetFileParts.md",tags:[],version:"current",lastUpdatedAt:1706190082,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetFileName",permalink:"/docs-api/AbstractFile/GetFileName"},next:{title:"GetFilePath",permalink:"/docs-api/AbstractFile/GetFilePath"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getfileparts",children:"GetFileParts"}),"\n",(0,a.jsx)(t.p,{children:"Get the file name, path, and extension of the file."}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE aFile_GetFileParts(obj, path, fileName, ext)\n    CLASS(AbstractFile_), INTENT(IN) :: obj\n    TYPE(String), INTENT(OUT) :: path\n    TYPE(String), INTENT(OUT) :: fileName\n    TYPE(String), INTENT(OUT) :: ext\n  END SUBROUTINE aFile_GetFileParts\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var a=n(67294);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);