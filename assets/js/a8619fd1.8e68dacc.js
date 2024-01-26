"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5587],{83225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=n(85893),r=n(11151);const o={},s="IsPreconditionSet",a={id:"MatrixField/IsPreconditionSet",title:"IsPreconditionSet",description:"Returns true if the Precondition matrix is set.",source:"@site/docs/docs-api/MatrixField/IsPreconditionSet.md",sourceDirName:"MatrixField",slug:"/MatrixField/IsPreconditionSet",permalink:"/docs-api/MatrixField/IsPreconditionSet",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/IsPreconditionSet.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/MatrixField/Initiate"},next:{title:"MatVec",permalink:"/docs-api/MatrixField/MatVec"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"ispreconditionset",children:"IsPreconditionSet"}),"\n",(0,i.jsx)(t.p,{children:"Returns true if the Precondition matrix is set."}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isPreconditionSet(obj) RESULT(Ans)\n    CLASS(AbstractMatrixField_), INTENT(IN) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isPreconditionSet\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);