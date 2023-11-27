"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50782],{80470:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=n(85893),c=n(11151);const a={},i="Barycentric",o={id:"ReferenceTriangle/Barycentric",title:"Barycentric",description:"Returns the barycentric coordinates of triangle",source:"@site/docs/docs-api/ReferenceTriangle/Barycentric.md",sourceDirName:"ReferenceTriangle",slug:"/ReferenceTriangle/Barycentric",permalink:"/docs-api/ReferenceTriangle/Barycentric",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceTriangle/Barycentric.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ArealVector",permalink:"/docs-api/ReferenceTriangle/ArealVector"},next:{title:"Centroid",permalink:"/docs-api/ReferenceTriangle/Centroid"}},s={},d=[];function l(e){const r={code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"barycentric",children:"Barycentric"}),"\n",(0,t.jsx)(r.p,{children:"Returns the barycentric coordinates of triangle"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-fortran",children:"MODULE FUNCTION Barycentric( refelem, xij, x ) RESULT( Ans )\n  CLASS(ReferenceTriangle_), INTENT( IN ) :: refelem\n  REAL( DFP ), INTENT( IN ) :: xij(:,:)\n  REAL( DFP ), INTENT( IN ) :: x( : )\n  REAL( DFP ) :: Ans( 3 )\nEND FUNCTION Barycentric\n"})})]})}function f(e={}){const{wrapper:r}={...(0,c.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var t=n(67294);const c={},a=t.createContext(c);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);