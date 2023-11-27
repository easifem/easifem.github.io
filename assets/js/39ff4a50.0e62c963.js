"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[97954],{9178:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(85893),r=n(11151);const o={},s="UpdateIteration",i={id:"AbstractKernel/UpdateIteration",title:"UpdateIteration",description:"This subroutine update the state of the kernel after an iteration.",source:"@site/docs/docs-api/AbstractKernel/UpdateIteration.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/UpdateIteration",permalink:"/docs-api/AbstractKernel/UpdateIteration",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/UpdateIteration.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/docs-api/AbstractKernel/Update"},next:{title:"WriteData",permalink:"/docs-api/AbstractKernel/WriteData"}},c={},d=[];function p(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"updateiteration",children:"UpdateIteration"}),"\n",(0,a.jsx)(e.p,{children:"This subroutine update the state of the kernel after an iteration."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE UpdateIteration(obj, reset)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN) :: reset\n  END SUBROUTINE UpdateIteration\nEND INTERFACE\n"})})]})}function l(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(p,{...t})}):p(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>s});var a=n(67294);const r={},o=a.createContext(r);function s(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);