"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[91629],{48427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=r(85893),i=r(11151);const a={},o="GetPrefix",s={id:"SolidMaterial/GetPrefix",title:"GetPrefix",description:"Returns the prefix.",source:"@site/docs/docs-api/SolidMaterial/GetPrefix.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/GetPrefix",permalink:"/docs-api/SolidMaterial/GetPrefix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SolidMaterial/GetPrefix.md",tags:[],version:"current",lastUpdatedAt:1701411597,formattedLastUpdatedAt:"Dec 1, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/docs-api/SolidMaterial/Export"},next:{title:"GetStressStrainModelPointer",permalink:"/docs-api/SolidMaterial/GetStressStrainModelPointer"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getprefix",children:"GetPrefix"}),"\n",(0,n.jsx)(t.p,{children:"Returns the prefix."}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @GetMethods "}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION GetPrefix(obj) RESULT(ans)\n    CLASS(SolidMaterial_), INTENT(IN) :: obj\n    CHARACTER(:), ALLOCATABLE :: ans\n  END FUNCTION GetPrefix\nEND INTERFACE\n"})})]})}function f(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(67294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);