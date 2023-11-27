"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99929],{17922:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=r(85893),t=r(11151);const i={},s="TriangleArea2D",o={id:"ReferenceTriangle/TriangleArea2D",title:"TriangleArea2D",description:"This subroutine computes the area of a triangle in two dimensions.",source:"@site/docs/docs-api/ReferenceTriangle/TriangleArea2D.md",sourceDirName:"ReferenceTriangle",slug:"/ReferenceTriangle/TriangleArea2D",permalink:"/docs-api/ReferenceTriangle/TriangleArea2D",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ReferenceTriangle/TriangleArea2D.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RandomPoint",permalink:"/docs-api/ReferenceTriangle/RandomPoint"},next:{title:"TriangleArea3D",permalink:"/docs-api/ReferenceTriangle/TriangleArea3D"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"trianglearea2d",children:"TriangleArea2D"}),"\n",(0,a.jsx)(n.p,{children:"This subroutine computes the area of a triangle in two dimensions."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the triangle's vertices are given in counterclockwise order, the area will be positive."}),"\n",(0,a.jsx)(n.li,{children:"If the triangle's vertices are given in clockwise order, the area will be negative."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE TriangleArea2D(t, area)\n    REAL(DFP), INTENT(IN) :: t(2, 3)\n    REAL(DFP), INTENT(OUT) :: area\n  END SUBROUTINE TriangleArea2D\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var a=r(67294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);