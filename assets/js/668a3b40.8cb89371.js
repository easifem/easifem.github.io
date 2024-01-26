"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[83870],{91210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),s=n(11151);const i={},o="IsNew",a={id:"FortranFile/IsNew",title:"IsNew",description:"Returns true if the file is new",source:"@site/docs/docs-api/FortranFile/IsNew.md",sourceDirName:"FortranFile",slug:"/FortranFile/IsNew",permalink:"/docs-api/FortranFile/IsNew",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/FortranFile/IsNew.md",tags:[],version:"current",lastUpdatedAt:1706190055,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsInitiated",permalink:"/docs-api/FortranFile/IsInitiated"},next:{title:"IsOverwrite",permalink:"/docs-api/FortranFile/IsOverwrite"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"isnew",children:"IsNew"}),"\n",(0,r.jsx)(t.p,{children:"Returns true if the file is new"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isNew(obj) RESULT(Ans)\n    CLASS(FortranFile_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isNew\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(67294);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);