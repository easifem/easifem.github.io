"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[34741],{73475:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var r=i(85893),n=i(11151);const a={},s="Size",c={id:"AbstractMatrixField/Size",title:"Size",description:"Returns the size of AbstractMatrixField",source:"@site/docs/docs-api/AbstractMatrixField/Size.md",sourceDirName:"AbstractMatrixField",slug:"/AbstractMatrixField/Size",permalink:"/docs-api/AbstractMatrixField/Size",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMatrixField/Size.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shape",permalink:"/docs-api/AbstractMatrixField/Shape"},next:{title:"Spy",permalink:"/docs-api/AbstractMatrixField/Spy"}},o={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"size",children:"Size"}),"\n",(0,r.jsx)(t.p,{children:"Returns the size of AbstractMatrixField"}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  FUNCTION Size(obj, dim) RESULT(ans)\n    IMPORT :: AbstractMatrixField_, I4B\n    CLASS(AbstractMatrixField_), INTENT(IN) :: obj\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim\n    INTEGER(I4B) :: ans\n  END FUNCTION Size\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>s});var r=i(67294);const n={},a=r.createContext(n);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);