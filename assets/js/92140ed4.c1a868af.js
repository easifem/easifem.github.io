"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80406],{5502:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>S,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var r=t(85893),i=t(11151);const n={},s="SetSTScalarFieldParam",c={id:"STScalarFieldLis/SetSTScalarFieldParam",title:"SetSTScalarFieldParam",description:"This method sets the parameter necessary for constructing the STScalarField instance.",source:"@site/docs/docs-api/STScalarFieldLis/SetSTScalarFieldParam.md",sourceDirName:"STScalarFieldLis",slug:"/STScalarFieldLis/SetSTScalarFieldParam",permalink:"/docs-api/STScalarFieldLis/SetSTScalarFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STScalarFieldLis/SetSTScalarFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/STScalarFieldLis/Set"},next:{title:"Size",permalink:"/docs-api/STScalarFieldLis/Size"}},l={},o=[{value:"Interface",id:"interface",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"setstscalarfieldparam",children:"SetSTScalarFieldParam"}),"\n",(0,r.jsxs)(a.p,{children:["This method sets the parameter necessary for constructing the ",(0,r.jsx)(a.code,{children:"STScalarField"})," instance."]}),"\n",(0,r.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setSTScalarFieldParam(param, name, timeCompo, &\n    & fieldType)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n  END SUBROUTINE setSTScalarFieldParam\nEND INTERFACE\n"})})]})}function S(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>s});var r=t(67294);const i={},n=r.createContext(i);function s(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);