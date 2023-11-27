"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[98195],{99225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=a(85893),n=a(11151);const r={},c="CheckEssentialParam",i={id:"SteadyStokes111/CheckEssentialParam",title:"CheckEssentialParam",description:"Check essential parameter.",source:"@site/docs/docs-api/SteadyStokes111/CheckEssentialParam.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/CheckEssentialParam",permalink:"/docs-api/SteadyStokes111/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes111/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AssembleTanMat_NeumanFacet",permalink:"/docs-api/SteadyStokes111/AssembleTanMat_NeumanFacet"},next:{title:"ComputeStabParam",permalink:"/docs-api/SteadyStokes111/ComputeStabParam"}},o={},d=[{value:"Interface",id:"interface",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,s.jsx)(t.p,{children:"Check essential parameter."}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE CheckEssentialParam(obj, param, prefix)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: prefix\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>c});var s=a(67294);const n={},r=s.createContext(n);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);