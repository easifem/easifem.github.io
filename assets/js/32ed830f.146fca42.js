"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[37255],{77698:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var s=a(85893),r=a(11151);const n={id:"SetAbstractMeshFieldParam",aliases:["SetAbstractMeshFieldParam"],tags:[],sidebar_position:2},i="SetAbstractMeshFieldParam",c={id:"AbstractMeshField/SetAbstractMeshFieldParam",title:"SetAbstractMeshFieldParam",description:"This routine sets the parameters necessary for constructing an instance of AbstractMeshField_.",source:"@site/docs/docs-api/AbstractMeshField/SetAbstractMeshFieldParam.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/SetAbstractMeshFieldParam",permalink:"/docs-api/AbstractMeshField/SetAbstractMeshFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/SetAbstractMeshFieldParam.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:2,frontMatter:{id:"SetAbstractMeshFieldParam",aliases:["SetAbstractMeshFieldParam"],tags:[],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/AbstractMeshField/AbstractMeshField_"},next:{title:"Initiate",permalink:"/docs-api/AbstractMeshField/Initiate"}},d={},o=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"setabstractmeshfieldparam",children:"SetAbstractMeshFieldParam"}),"\n",(0,s.jsxs)(t.p,{children:["This routine sets the parameters necessary for constructing an instance of ",(0,s.jsx)(t.code,{children:"AbstractMeshField_"}),"."]}),"\n",(0,s.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetAbstractMeshFieldParam(param, prefix, name, &\n    & fieldType, engine, defineOn, varType, rank, s)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: prefix\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: fieldType\n    CHARACTER(*), INTENT(IN) :: engine\n    INTEGER(I4B), INTENT(IN) :: defineOn\n    INTEGER(I4B), INTENT(IN) :: varType\n    INTEGER(I4B), INTENT(IN) :: rank\n    INTEGER(I4B), INTENT(IN) :: s(:)\n  END SUBROUTINE SetAbstractMeshFieldParam\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var s=a(67294);const r={},n=s.createContext(r);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);