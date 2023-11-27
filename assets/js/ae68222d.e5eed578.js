"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[19886],{62607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(85893),r=a(11151);const o={},i="H1_Lagrange",s={id:"ElemshapeData/H1_Lagrange",title:"H1_Lagrange",description:"This method belongs to the generic method [[#Initiate]].",source:"@site/docs/docs-api/ElemshapeData/H1_Lagrange.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/H1_Lagrange",permalink:"/docs-api/ElemshapeData/H1_Lagrange",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/H1_Lagrange.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"H1_Hierarchy",permalink:"/docs-api/ElemshapeData/H1_Hierarchy"},next:{title:"H1_Serendipity",permalink:"/docs-api/ElemshapeData/H1_Serendipity"}},c={},p=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"h1_lagrange",children:"H1_Lagrange"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE H1_Lagrange(obj, quad, refelem, &\n    & continuityType, interpolType)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: obj\n    CLASS(QuadraturePoint_), INTENT(IN) :: quad\n    CLASS(ReferenceElement_), INTENT(IN) :: refelem\n    CLASS(H1_), INTENT(IN) :: continuityType\n    CLASS(LagrangeInterpolation_), INTENT(IN) :: interpolType\n  END SUBROUTINE H1_Lagrange\n"})}),"\n",(0,n.jsx)(t.p,{children:"This method belongs to the generic method [[#Initiate]]."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);