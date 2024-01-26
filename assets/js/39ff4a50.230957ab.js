"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97954],{81198:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(85893),a=n(11151);const o={},s="UpdateIteration",i={id:"AbstractKernel/UpdateIteration",title:"UpdateIteration",description:"This subroutine update the state of the kernel after an iteration.",source:"@site/docs/docs-api/AbstractKernel/UpdateIteration.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/UpdateIteration",permalink:"/docs-api/AbstractKernel/UpdateIteration",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/UpdateIteration.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/docs-api/AbstractKernel/Update"},next:{title:"WriteData",permalink:"/docs-api/AbstractKernel/WriteData"}},c={},d=[];function p(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"updateiteration",children:"UpdateIteration"}),"\n",(0,r.jsx)(e.p,{children:"This subroutine update the state of the kernel after an iteration."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE UpdateIteration(obj, reset)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN) :: reset\n  END SUBROUTINE UpdateIteration\nEND INTERFACE\n"})})]})}function l(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(p,{...t})}):p(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>s});var r=n(67294);const a={},o=r.createContext(a);function s(t){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:s(t.components),r.createElement(o.Provider,{value:e},t.children)}}}]);