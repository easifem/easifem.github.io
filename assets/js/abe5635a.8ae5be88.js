"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[74718],{1548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(85893),r=n(11151);const a={},s="Initiate",o={id:"AbstractKernel/Initiate",title:"Initiate",description:"This routine initiates the kernel, this method should be implemented by the children of AbstractKernel_:",source:"@site/docs/docs-api/AbstractKernel/Initiate.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/Initiate",permalink:"/docs-api/AbstractKernel/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractKernel/Import"},next:{title:"InitiateFields",permalink:"/docs-api/AbstractKernel/InitiateFields"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsxs)(t.p,{children:["This routine initiates the kernel, this method should be implemented by the children of ",(0,i.jsx)(t.code,{children:"AbstractKernel_"}),":"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"param"})," contains the parameters for kernel ",(0,i.jsx)(t.a,{href:"/docs-api/ParameterList/ParameterList_",children:"ParameterList_"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dom"})," is the domain of computation ",(0,i.jsx)(t.a,{href:"/docs-api/Domain/Domain_",children:"Domain_"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"domains"})," is multiple domains of computation"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, param, dom, domains)\n    CLASS(AbstractKernel_), INTENT(INOUT) :: obj\n    !! Kernel object\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! Parameter list\n    CLASS(Domain_), OPTIONAL, TARGET, INTENT(INOUT) :: dom\n    !! Domain of computation\n    TYPE(DomainPointer_), OPTIONAL, TARGET, INTENT(INOUT) :: domains(:)\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);