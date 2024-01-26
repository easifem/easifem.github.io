"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17269],{19001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(85893),r=n(11151);const a={},o="Display",i={id:"AbstractKernel/Display",title:"Display",description:"This routine displays the content of kernel.",source:"@site/docs/docs-api/AbstractKernel/Display.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/Display",permalink:"/docs-api/AbstractKernel/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/AbstractKernel/Deallocate"},next:{title:"Export",permalink:"/docs-api/AbstractKernel/Export"}},c={},l=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,s.jsx)(t.p,{children:"This routine displays the content of kernel."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Display(obj, msg, unitNo)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    CHARACTER(LEN=*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE KernelDisplay\n  MODULE PROCEDURE Display\nEND INTERFACE KernelDisplay\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const r={},a=s.createContext(r);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);