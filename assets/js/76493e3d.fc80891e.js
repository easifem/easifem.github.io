"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71845],{83129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(85893),o=n(11151);const r={},c="IsPreconditionSet",s={id:"BlockMatrixField/IsPreconditionSet",title:"IsPreconditionSet",description:"Returns true if the Precondition matrix is set.",source:"@site/docs/docs-api/BlockMatrixField/IsPreconditionSet.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/IsPreconditionSet",permalink:"/docs-api/BlockMatrixField/IsPreconditionSet",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/IsPreconditionSet.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/BlockMatrixField/Initiate"},next:{title:"MatVec",permalink:"/docs-api/BlockMatrixField/MatVec"}},a={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ispreconditionset",children:"IsPreconditionSet"}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the Precondition matrix is set."}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isPreconditionSet(obj) RESULT(Ans)\n    CLASS(BlockMatrixField_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isPreconditionSet\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var i=n(67294);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);