"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[43745],{67803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(85893),r=t(11151);const a={},s="ContainsLine",o={id:"ReferenceTriangle/ContainsLine",title:"ContainsLine",description:"",source:"@site/docs/docs-api/ReferenceTriangle/ContainsLine.md",sourceDirName:"ReferenceTriangle",slug:"/ReferenceTriangle/ContainsLine",permalink:"/docs-api/ReferenceTriangle/ContainsLine",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceTriangle/ContainsLine.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CircumRadius",permalink:"/docs-api/ReferenceTriangle/CircumRadius"},next:{title:"ContainsPoint",permalink:"/docs-api/ReferenceTriangle/ContainsPoint"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"containsline",children:"ContainsLine"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"MODULE SUBROUTINE ContainsLine( refelem, xij, x1, x2, &\n  & parametricLine, inside, xint )\n  CLASS( ReferenceTriangle_ ), INTENT( IN ) :: refelem\n  REAL( DFP ), INTENT( IN ) :: xij(:,:), x1(3), x2(3)\n  LOGICAL(LGT), INTENT( IN ) :: parametricLine\n  LOGICAL(LGT), INTENT (OUT) :: inside\n  REAL( DFP ), INTENT( OUT ) :: xint(3)\nEND SUBROUTINE ContainsLine\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);