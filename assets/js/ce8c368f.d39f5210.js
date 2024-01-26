"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[26707],{71732:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=o(85893),a=o(11151);const i={},r="JacobiMatrix",l={id:"OrthogonalPolynomialUtility/JacobiMatrix",title:"JacobiMatrix",description:"Returns Jacobi matrix.",source:"@site/docs/docs-api/OrthogonalPolynomialUtility/JacobiMatrix.md",sourceDirName:"OrthogonalPolynomialUtility",slug:"/OrthogonalPolynomialUtility/JacobiMatrix",permalink:"/docs-api/OrthogonalPolynomialUtility/JacobiMatrix",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/OrthogonalPolynomialUtility/JacobiMatrix.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EvalallOrthopol",permalink:"/docs-api/OrthogonalPolynomialUtility/EvalallOrthopol"},next:{title:"PLPlot",permalink:"/docs-api/PLPlot/"}},c={},s=[{value:"Interface 1",id:"interface-1",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"jacobimatrix",children:"JacobiMatrix"}),"\n",(0,n.jsx)(e.p,{children:"Returns Jacobi matrix."}),"\n",(0,n.jsx)(e.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE SUBROUTINE JacobiMatrix(alphaCoeff, betaCoeff, D, E)\n    REAL(DFP), INTENT(IN) :: alphaCoeff(0:)\n  !! size n, from 0 to n-1\n    REAL(DFP), INTENT(IN) :: betaCoeff(0:)\n  !! size n, from 0 to n-1\n    REAL(DFP), INTENT(OUT) :: D(:)\n  !! entry from 1 to n are filled\n    REAL(DFP), INTENT(OUT) :: E(:)\n  !! entry from 1 to n-1 are filled\n  END SUBROUTINE JacobiMatrix\nEND INTERFACE\n"})})]})}function f(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},11151:(t,e,o)=>{o.d(e,{Z:()=>l,a:()=>r});var n=o(67294);const a={},i=n.createContext(a);function r(t){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),n.createElement(i.Provider,{value:e},t.children)}}}]);