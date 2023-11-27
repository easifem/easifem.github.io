"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[59392],{25396:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=i(85893),r=i(11151);const a={},c="SetDirichletBCParam",o={id:"DirichletBC/SetDirichletBCParam",title:"SetDirichletBCParam",description:"Set parameters for constructing the dirichlet boundary condition.",source:"@site/docs/docs-api/DirichletBC/SetDirichletBCParam.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/SetDirichletBCParam",permalink:"/docs-api/DirichletBC/SetDirichletBCParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DirichletBC/SetDirichletBCParam.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Set",permalink:"/docs-api/DirichletBC/Set"},next:{title:"Display_Method",permalink:"/docs-api/Display_Method/"}},s={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setdirichletbcparam",children:"SetDirichletBCParam"}),"\n",(0,n.jsx)(t.p,{children:"Set parameters for constructing the dirichlet boundary condition."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE setDirichletBCParam(param, name, idof, nodalValueType, &\n    & useFunction)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: idof\n    INTEGER(I4B), INTENT(IN) :: nodalValueType\n    !! Space\n    !! Time\n    !! SpaceTime\n    !! Constant\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: useFunction\n  END SUBROUTINE setDirichletBCParam\nEND INTERFACE\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>c});var n=i(67294);const r={},a=n.createContext(r);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);