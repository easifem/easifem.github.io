"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13940],{65517:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(85893),r=n(11151);const s={},i="Divergence",c={id:"ElemshapeData/Divergence",title:"Divergence",description:"",source:"@site/docs/docs-api/ElemshapeData/Divergence.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/Divergence",permalink:"/docs-api/ElemshapeData/Divergence",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/Divergence.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/ElemshapeData/Display"},next:{title:"Structure",permalink:"/docs-api/ElemshapeData/ElemshapeData_"}},o={},l=[];function d(e){const a={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"divergence",children:"Divergence"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Divergence_1(obj, val) RESULT(Ans)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n    TYPE(FEVariable_), INTENT(IN) :: val\n    TYPE(FEVariable_) :: ans\n  END FUNCTION Divergence_1\n"})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Divergence_2(obj, val) RESULT(Ans)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj(:)\n    TYPE(FEVariable_), INTENT(IN) :: val\n    TYPE(FEVariable_) :: ans\n  END FUNCTION Divergence_2\n"})})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>c,a:()=>i});var t=n(67294);const r={},s=t.createContext(r);function i(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);