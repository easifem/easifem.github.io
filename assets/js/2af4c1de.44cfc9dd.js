"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86950],{36722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(85893),o=n(11151);const i={},c="Deallocate",s={id:"Domain/Deallocate",title:"Deallocate",description:"This function clears the memory occupied by an instance of domain.",source:"@site/docs/docs-api/Domain/Deallocate.md",sourceDirName:"Domain",slug:"/Domain/Deallocate",permalink:"/docs-api/Domain/Deallocate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/Domain/Deallocate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Domain",permalink:"/docs-api/Domain/"},next:{title:"Display",permalink:"/docs-api/Domain/Display"}},r={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"deallocate",children:"Deallocate"}),"\n",(0,a.jsx)(t.p,{children:"This function clears the memory occupied by an instance of domain."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Domain_Deallocate(obj)\n    CLASS(Domain_), INTENT(INOUT) :: obj\n    !! Domain object\n  END SUBROUTINE Domain_Deallocate\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var a=n(67294);const o={},i=a.createContext(o);function c(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);