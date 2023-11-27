"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[76148],{88399:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=a(85893),l=a(11151);const s={},i="Clenshaw",r={id:"OrthogonalPolynomialUtility/Clenshaw",title:"Clenshaw",description:"Cleanshaw algorithm.",source:"@site/docs/docs-api/OrthogonalPolynomialUtility/Clenshaw.md",sourceDirName:"OrthogonalPolynomialUtility",slug:"/OrthogonalPolynomialUtility/Clenshaw",permalink:"/docs-api/OrthogonalPolynomialUtility/Clenshaw",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/OrthogonalPolynomialUtility/Clenshaw.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChebClenshaw",permalink:"/docs-api/OrthogonalPolynomialUtility/ChebClenshaw"},next:{title:"EvalallOrthopol",permalink:"/docs-api/OrthogonalPolynomialUtility/EvalallOrthopol"}},o={},c=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"Interface 3",id:"interface-3",level:2},{value:"Interface 4",id:"interface-4",level:2}];function N(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"clenshaw",children:"Clenshaw"}),"\n",(0,t.jsx)(e.p,{children:"Cleanshaw algorithm."}),"\n",(0,t.jsx)(e.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Clenshaw(x, alpha, beta, y0, ym1, c) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP), INTENT(IN) :: alpha(0:)\n    REAL(DFP), INTENT(IN) :: beta(0:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: y0\n    !! if y0 is absent then y0 = 1.0\n    REAL(DFP), OPTIONAL, INTENT(IN) :: ym1\n    !! if ym1 is absent then ym1 = 0.0\n    REAL(DFP), INTENT(IN) :: c(0:)\n    REAL(DFP) :: ans\n  END FUNCTION Clenshaw\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Clenshaw(x, alpha, beta, y0, ym1, c) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP), INTENT(IN) :: alpha(0:)\n    REAL(DFP), INTENT(IN) :: beta(0:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: y0\n    !! if y0 is absent then y0 = 1.0\n    REAL(DFP), OPTIONAL, INTENT(IN) :: ym1\n    !! if ym1 is absent then ym1 = 0.0\n    REAL(DFP), INTENT(IN) :: c(0:)\n    REAL(DFP) :: ans(SIZE(x))\n  END FUNCTION Clenshaw\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"interface-3",children:"Interface 3"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Clenshaw(x, c) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP), INTENT(IN) :: c(0:)\n    REAL(DFP) :: ans\n  END FUNCTION Clenshaw\nEND INTERFACE\n"})}),"\n",(0,t.jsx)(e.h2,{id:"interface-4",children:"Interface 4"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION Clenshaw(x, c) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x(:)\n    REAL(DFP), INTENT(IN) :: c(0:)\n    REAL(DFP) :: ans(SIZE(x))\n  END FUNCTION Clenshaw\nEND INTERFACE\n"})})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(N,{...n})}):N(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>r,a:()=>i});var t=a(67294);const l={},s=t.createContext(l);function i(n){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);