"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[67437],{86882:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=r(85893),n=r(11151);const a={},s="ReversePermutation",o={id:"MatrixFieldLis/ReversePermutation",title:"ReversePermutation",description:"Interface",source:"@site/docs/docs-api/MatrixFieldLis/ReversePermutation.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/ReversePermutation",permalink:"/docs-api/MatrixFieldLis/ReversePermutation",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/ReversePermutation.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RectangleMatrixFieldCheckEssentialParam",permalink:"/docs-api/MatrixFieldLis/RectangleMatrixFieldCheckEssentialParam"},next:{title:"Set",permalink:"/docs-api/MatrixFieldLis/Set"}},c={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"reversepermutation",children:"ReversePermutation"}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE reversePermutation(obj, rhs, sol)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: rhs\n    CLASS(AbstractNodeField_), TARGET, INTENT(INOUT) :: sol\n  END SUBROUTINE reversePermutation\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>s});var i=r(67294);const n={},a=i.createContext(n);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);