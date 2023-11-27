"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[3264],{71740:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>I,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=s(85893),r=s(11151);const i={},o="ILUSolve",a={id:"MatrixField/ILUSolve",title:"ILUSolve",description:"ILU Solver",source:"@site/docs/docs-api/MatrixField/ILUSolve.md",sourceDirName:"MatrixField",slug:"/MatrixField/ILUSolve",permalink:"/docs-api/MatrixField/ILUSolve",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MatrixField/ILUSolve.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetRow",permalink:"/docs-api/MatrixField/GetRow"},next:{title:"Import",permalink:"/docs-api/MatrixField/Import"}},l={},d=[{value:"Interface",id:"interface",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ilusolve",children:"ILUSolve"}),"\n",(0,n.jsx)(t.p,{children:"ILU Solver"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"! If transp is absent or it is false then:\n! This routine solves (LU) sol = rhs\n! sol and rhs are fortran real vector\n! The LU decomposition is stored inside the AbstractMatrixField_.\n! Note that sol should be allocated by the user, and size of sol should be\n! same as the size of rhs\n!\n! If transp is present and it is true then:\n!\n! If transp is present and it is true then this subroutine solves\n! (LU)^T sol = rhs\n\nINTERFACE\n  SUBROUTINE ILUSOLVE1(obj, sol, rhs, isTranspose)\n    IMPORT :: AbstractMatrixField_, DFP, LGT\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(INOUT) :: sol(:)\n    !! Output vector y=Ax\n    REAL(DFP), INTENT(IN) :: rhs(:)\n    !! Input vector in y=Ax\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n  END SUBROUTINE ILUSOLVE1\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"! If transp is not present or it is false then:\n! This routine solves (LU) sol = rhs\n! sol and rhs are [[AbstractNodeField_]]\n! The LU decomposition is stored inside the AbstractMatrixField_.\n!\n! If transp is present and it is true then this subroutine solves\n! (LU)^T sol = rhs\n\n\nINTERFACE\n  SUBROUTINE ILUSOLVE2(obj, sol, rhs, isTranspose)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), INTENT(INOUT) :: sol\n    !! Output vector\n    CLASS(AbstractNodeField_), INTENT(IN) :: rhs\n    !! Input vector, rhs\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n  END SUBROUTINE ILUSOLVE2\nEND INTERFACE\n"})})]})}function I(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);