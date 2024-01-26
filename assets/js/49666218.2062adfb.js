"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[78587],{45596:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(85893),r=a(11151);const o={},i="DG_Lagrange",s={id:"ElemshapeData/DG_Lagrange",title:"DG_Lagrange",description:"This method belongs to the generic method [[#Initiate]].",source:"@site/docs/docs-api/ElemshapeData/DG_Lagrange.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/DG_Lagrange",permalink:"/docs-api/ElemshapeData/DG_Lagrange",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ElemshapeData/DG_Lagrange.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DG_Hierarchy",permalink:"/docs-api/ElemshapeData/DG_Hierarchy"},next:{title:"DG_Serendipity",permalink:"/docs-api/ElemshapeData/DG_Serendipity"}},c={},d=[];function p(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"dg_lagrange",children:"DG_Lagrange"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE DG_Lagrange(obj, quad, refelem, &\n    & continuityType, interpolType)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: obj\n    CLASS(QuadraturePoint_), INTENT(IN) :: quad\n    CLASS(ReferenceElement_), INTENT(IN) :: refelem\n    CLASS(DG_), INTENT(IN) :: continuityType\n    CLASS(LagrangeInterpolation_), INTENT(IN) :: interpolType\n  END SUBROUTINE DG_Lagrange\n"})}),"\n",(0,n.jsx)(t.p,{children:"This method belongs to the generic method [[#Initiate]]."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);