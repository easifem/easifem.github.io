"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[3264],{83685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>I,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=n(85893),r=n(11151);const o={},i="ILUSolve",a={id:"MatrixField/ILUSolve",title:"ILUSolve",description:"ILU Solver",source:"@site/docs/docs-api/MatrixField/ILUSolve.md",sourceDirName:"MatrixField",slug:"/MatrixField/ILUSolve",permalink:"/docs-api/MatrixField/ILUSolve",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/ILUSolve.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetRow",permalink:"/docs-api/MatrixField/GetRow"},next:{title:"Import",permalink:"/docs-api/MatrixField/Import"}},l={},d=[{value:"Interface",id:"interface",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"ilusolve",children:"ILUSolve"}),"\n",(0,s.jsx)(t.p,{children:"ILU Solver"}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"! If transp is absent or it is false then:\n! This routine solves (LU) sol = rhs\n! sol and rhs are fortran real vector\n! The LU decomposition is stored inside the AbstractMatrixField_.\n! Note that sol should be allocated by the user, and size of sol should be\n! same as the size of rhs\n!\n! If transp is present and it is true then:\n!\n! If transp is present and it is true then this subroutine solves\n! (LU)^T sol = rhs\n\nINTERFACE\n  SUBROUTINE ILUSOLVE1(obj, sol, rhs, isTranspose)\n    IMPORT :: AbstractMatrixField_, DFP, LGT\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    REAL(DFP), INTENT(INOUT) :: sol(:)\n    !! Output vector y=Ax\n    REAL(DFP), INTENT(IN) :: rhs(:)\n    !! Input vector in y=Ax\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n  END SUBROUTINE ILUSOLVE1\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"! If transp is not present or it is false then:\n! This routine solves (LU) sol = rhs\n! sol and rhs are [[AbstractNodeField_]]\n! The LU decomposition is stored inside the AbstractMatrixField_.\n!\n! If transp is present and it is true then this subroutine solves\n! (LU)^T sol = rhs\n\n\nINTERFACE\n  SUBROUTINE ILUSOLVE2(obj, sol, rhs, isTranspose)\n    IMPORT :: AbstractMatrixField_, AbstractNodeField_, LGT\n    CLASS(AbstractMatrixField_), INTENT(INOUT) :: obj\n    CLASS(AbstractNodeField_), INTENT(INOUT) :: sol\n    !! Output vector\n    CLASS(AbstractNodeField_), INTENT(IN) :: rhs\n    !! Input vector, rhs\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTranspose\n  END SUBROUTINE ILUSOLVE2\nEND INTERFACE\n"})})]})}function I(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var s=n(67294);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);