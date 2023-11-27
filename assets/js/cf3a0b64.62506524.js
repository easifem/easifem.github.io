"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98828],{25191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>T,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(85893),a=r(11151);const i={},o="SetSTVectorFieldParam",c={id:"STVectorFieldLis/SetSTVectorFieldParam",title:"SetSTVectorFieldParam",description:"Set the parameters for constructing a space-time vector field.",source:"@site/docs/docs-api/STVectorFieldLis/SetSTVectorFieldParam.md",sourceDirName:"STVectorFieldLis",slug:"/STVectorFieldLis/SetSTVectorFieldParam",permalink:"/docs-api/STVectorFieldLis/SetSTVectorFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorFieldLis/SetSTVectorFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/STVectorFieldLis/Set"},next:{title:"Size",permalink:"/docs-api/STVectorFieldLis/Size"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setstvectorfieldparam",children:"SetSTVectorFieldParam"}),"\n",(0,n.jsx)(t.p,{children:"Set the parameters for constructing a space-time vector field."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setSTVectorFieldParam(param, name, engine, &\n    & spaceCompo, timeCompo, fieldType, comm, local_n, global_n)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    CHARACTER(*), INTENT(IN) :: engine\n    INTEGER(I4B), INTENT(IN) :: spaceCompo\n    INTEGER(I4B), INTENT(IN) :: timeCompo\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n\n  END SUBROUTINE setSTVectorFieldParam\nEND INTERFACE\n"})})]})}function T(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>o});var n=r(67294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);