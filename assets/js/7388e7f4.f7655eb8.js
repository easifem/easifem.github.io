"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[72781],{89581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(85893),i=t(11151);const o={},a="DistanceFromPoint",s={id:"ReferenceTriangle/DistanceFromPoint",title:"DistanceFromPoint",description:"",source:"@site/docs/docs-api/ReferenceTriangle/DistanceFromPoint.md",sourceDirName:"ReferenceTriangle",slug:"/ReferenceTriangle/DistanceFromPoint",permalink:"/docs-api/ReferenceTriangle/DistanceFromPoint",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceTriangle/DistanceFromPoint.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Diameter",permalink:"/docs-api/ReferenceTriangle/Diameter"},next:{title:"EdgeLength",permalink:"/docs-api/ReferenceTriangle/EdgeLength"}},c={},d=[];function m(e){const n={code:"code",h1:"h1",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"distancefrompoint",children:"DistanceFromPoint"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"MODULE FUNCTION DistanceFromPoint( refelem, xij, x ) &\n  & RESULT( Ans )\n  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem\n  REAL( DFP ) , INTENT( IN ) :: xij(:,:), x(:)\n  REAL( DFP ) :: Ans\nEND FUNCTION DistanceFromPoint\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);