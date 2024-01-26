"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[10252],{25689:(n,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var e=o(85893),r=o(11151);const i={},a="Domain constructor",s={id:"Domain/Domain_Constructor",title:"Domain constructor",description:"This function returns an instance of Domain.",source:"@site/docs/docs-api/Domain/Domain_Constructor.md",sourceDirName:"Domain",slug:"/Domain/Domain_Constructor",permalink:"/docs-api/Domain/Domain_Constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Domain/Domain_Constructor.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/Domain/Domain_"},next:{title:"Domain_Pointer",permalink:"/docs-api/Domain/Domain_Pointer"}},c={},m=[];function u(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h1,{id:"domain-constructor",children:"Domain constructor"}),"\n",(0,e.jsx)(t.p,{children:"This function returns an instance of Domain."}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Domain(hdf5, group) RESULT(Ans)\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    TYPE(Domain_) :: ans\n  END FUNCTION Domain\nEND INTERFACE\n"})})]})}function d(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(u,{...n})}):u(n)}},11151:(n,t,o)=>{o.d(t,{Z:()=>s,a:()=>a});var e=o(67294);const r={},i=e.createContext(r);function a(n){const t=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),e.createElement(i.Provider,{value:t},n.children)}}}]);