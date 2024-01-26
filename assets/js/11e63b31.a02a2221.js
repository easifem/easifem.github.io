"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[73544],{43780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var a=r(85893),i=r(11151);const n={},o="SetVectorFieldParam",c={id:"VectorFieldLis/SetVectorFieldParam",title:"SetVectorFieldParam",description:"Set the parameters for constructing a vector field.",source:"@site/docs/docs-api/VectorFieldLis/SetVectorFieldParam.md",sourceDirName:"VectorFieldLis",slug:"/VectorFieldLis/SetVectorFieldParam",permalink:"/docs-api/VectorFieldLis/SetVectorFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VectorFieldLis/SetVectorFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/VectorFieldLis/Set"},next:{title:"Size",permalink:"/docs-api/VectorFieldLis/Size"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"setvectorfieldparam",children:"SetVectorFieldParam"}),"\n",(0,a.jsx)(t.p,{children:"Set the parameters for constructing a vector field."}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setVectorFieldParam(param, name, spaceCompo, fieldType)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n  END SUBROUTINE setVectorFieldParam\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var a=r(67294);const i={},n=a.createContext(i);function o(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);