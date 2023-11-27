"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93423],{16759:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>E,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(85893),r=a(11151);const s={},i="AbstractSTDBEInitiate",c={id:"AbstractSTDBE/AbstractSTDBEInitiate",title:"AbstractSTDBEInitiate",description:"Initiate the parameters of abstract kernel. This method can be accessed from the children.",source:"@site/docs/docs-api/AbstractSTDBE/AbstractSTDBEInitiate.md",sourceDirName:"AbstractSTDBE",slug:"/AbstractSTDBE/AbstractSTDBEInitiate",permalink:"/docs-api/AbstractSTDBE/AbstractSTDBEInitiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractSTDBE/AbstractSTDBEInitiate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AbstractSTDBE",permalink:"/docs-api/AbstractSTDBE/"},next:{title:"Structure",permalink:"/docs-api/AbstractSTDBE/AbstractSTDBE_"}},o={},d=[];function T(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"abstractstdbeinitiate",children:"AbstractSTDBEInitiate"}),"\n",(0,n.jsx)(e.p,{children:"Initiate the parameters of abstract kernel. This method can be accessed from the children."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE AbstractSTDBEInitiate(obj, param, prefix, dom, domains)\n    CLASS(AbstractSTDBE_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    CHARACTER(LEN=*), INTENT(IN) :: prefix\n    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom\n    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)\n  END SUBROUTINE AbstractSTDBEInitiate\nEND INTERFACE\n"})})]})}function E(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(T,{...t})}):T(t)}},11151:(t,e,a)=>{a.d(e,{Z:()=>c,a:()=>i});var n=a(67294);const r={},s=n.createContext(r);function i(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);