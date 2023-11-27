"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[84947],{46401:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var t=a(85893),s=a(11151);const r={},c="CheckEssentialParam",i={id:"NeumannBC/CheckEssentialParam",title:"CheckEssentialParam",description:"Check essential parameters required for constructing the NeumannBC",source:"@site/docs/docs-api/NeumannBC/CheckEssentialParam.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/CheckEssentialParam",permalink:"/docs-api/NeumannBC/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/NeumannBC/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NeumannBC",permalink:"/docs-api/NeumannBC/"},next:{title:"Deallocate",permalink:"/docs-api/NeumannBC/Deallocate"}},o={},m=[{value:"Interface",id:"interface",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,t.jsxs)(n.p,{children:["Check essential parameters required for constructing the ",(0,t.jsx)(n.a,{href:"/docs-api/NeumannBC/NeumannBC_",children:"NeumannBC_"})]}),"\n",(0,t.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE CheckEssentialParam(obj, param)\n    CLASS(NeumannBC_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>c});var t=a(67294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);