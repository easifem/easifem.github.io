"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30252],{70175:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(85893),s=a(11151);const r={},t="Structure",l={id:"Lagrange1D/Lagrange1D_",title:"Structure",description:"Lagrange1D class defines the Lagrange polynomial in 1D. It is a child of [[Polynomial1D]].",source:"@site/docs/docs-api/Lagrange1D/Lagrange1D_.md",sourceDirName:"Lagrange1D",slug:"/Lagrange1D/Lagrange1D_",permalink:"/docs-api/Lagrange1D/Lagrange1D_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Lagrange1D/Lagrange1D_.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lagrange1D",permalink:"/docs-api/Lagrange1D/"},next:{title:"Lagrange1D example 1",permalink:"/docs-api/Lagrange1D/Lagrange1D_test_1"}},o={},c=[{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"Lagrange1D function",id:"lagrange1d-function",level:3},{value:"Lagrange1D_Pointer",id:"lagrange1d_pointer",level:3}];function d(n){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"Lagrange1D_"})," class defines the Lagrange polynomial in 1D. It is a child of [[Polynomial1D_]]."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"TYPE, EXTENDS(Polynomial1D_) :: Lagrange1D_\n"})}),"\n",(0,i.jsx)(e.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(e.h3,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The following routine constructs lagrange at point ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," from the given interpolation points ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"x"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"x"})]})})]}),"."]}),"\n",(0,i.jsx)(e.li,{children:"It solves a linear system by LU decomposition by using Lapack lib"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate1(obj, i, x, varname)\n    CLASS(Lagrange1D_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: i\n  !! ith lagrange polynomial\n    REAL(DFP), INTENT(IN) :: x(:)\n  !! points, order = size(x) - 1\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n  !! variable varname\n  END SUBROUTINE Initiate1\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The following routine constructs lagrange at point ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," from the vandermonde matrix."]}),"\n",(0,i.jsx)(e.li,{children:"User provides the vandermonde matrix"}),"\n",(0,i.jsx)(e.li,{children:"This routine copies vandermonde matrix internally and solves a linear system by using Lapack lib"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate2(obj, i, v, varname)\n    CLASS(Lagrange1D_), INTENT(INOUT) :: obj\n    !! lagrange1d\n    INTEGER(I4B), INTENT(IN) :: i\n    !! ith lagrange polynomial\n    REAL(DFP), INTENT(IN) :: v(:, :)\n    !! Vandermonde matrix\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n    !! variable varname\n  END SUBROUTINE Initiate2\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The following routine constructs lagrange polynomial at point ",(0,i.jsxs)(e.span,{className:"katex",children:[(0,i.jsx)(e.span,{className:"katex-mathml",children:(0,i.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(e.semantics,{children:[(0,i.jsx)(e.mrow,{children:(0,i.jsx)(e.mi,{children:"i"})}),(0,i.jsx)(e.annotation,{encoding:"application/x-tex",children:"i"})]})})}),(0,i.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(e.span,{className:"base",children:[(0,i.jsx)(e.span,{className:"strut",style:{height:"0.6595em"}}),(0,i.jsx)(e.span,{className:"mord mathnormal",children:"i"})]})})]})," from the lu decomposed vandermonde matrix."]}),"\n",(0,i.jsx)(e.li,{children:"User provides the LU deomposition of vandermonde matrix"}),"\n",(0,i.jsx)(e.li,{children:"The LU decomposition should be obtained by calling Lapack lib"}),"\n",(0,i.jsx)(e.li,{children:"The GetLU method should be used to obtain LU decomposition and ipiv"}),"\n",(0,i.jsx)(e.li,{children:"linear system of equations is solved by using Lapack lib"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate3(obj, i, v, ipiv, varname)\n    CLASS(Lagrange1D_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: i\n    !! ith lagrange polynomial\n    REAL(DFP), INTENT(INOUT) :: v(:, :)\n    !! LU decomposition of Vandermonde matrix\n    INTEGER(I4B), INTENT(IN) :: ipiv(:)\n    !! inverse pivoting mapping, compes from LU decomposition\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n    !! variable varname\n  END SUBROUTINE Initiate3\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(e.h3,{id:"lagrange1d-function",children:"Lagrange1D function"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"This routine constructs the lagrange polynomial in 1D"}),"\n",(0,i.jsxs)(e.li,{children:["This routine calls the ",(0,i.jsx)(e.code,{children:"Initiate1"})," method which is described above"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Interface:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Lagrange1D(i, x, order, varname) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: i\n  !! ith lagrange polynomial\n    REAL(DFP), INTENT(IN) :: x(:)\n  !! points, order = size(x) - 1\n    INTEGER(I4B), INTENT(IN) :: order\n  !! order\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n  !! variable varname\n    TYPE(Lagrange1D_) :: ans\n  END FUNCTION Lagrange1D\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The following routine calls the ",(0,i.jsx)(e.code,{children:"Initiate2"})," method which is described above"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Interface:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Lagrange1D(i, v, order, varname) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: i\n  !! ith lagrange polynomial\n    REAL(DFP), INTENT(IN) :: v(:, :)\n  !! Vandermonde matrix\n    INTEGER(I4B), INTENT(IN) :: order\n  !! order\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n  !! variable varname\n    TYPE(Lagrange1D_) :: ans\n  END FUNCTION Lagrange1D\nEND INTERFACE\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["The following routine calls the ",(0,i.jsx)(e.code,{children:"Initiate3"})," method which is described above"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Interface:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Lagrange1D(i, v, order, ipiv, varname) &\n    & RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: i\n  !! ith lagrange polynomial\n    REAL(DFP), INTENT(INOUT) :: v(:, :)\n  !! LU decomposition of Vandermonde matrix\n    INTEGER(I4B), INTENT(IN) :: order\n  !! order\n    INTEGER(I4B), INTENT(IN) :: ipiv(:)\n  !! inverse pivoting mapping, compes from LU decomposition\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n  !! variable varname\n    TYPE(Lagrange1D_) :: ans\n  END FUNCTION Lagrange1D\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"[[Lagrange1D_test_1]]"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"The following function generates a set of n lagrange polynomials."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION Lagrange1D(x, order, varname) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: x(:)\n    !! points, order = size(x) - 1\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n    !! variable varname\n    TYPE(Lagrange1D_) :: ans(SIZE(x))\n  END FUNCTION Lagrange1D\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"[[Lagrange1D_test_1]]"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"lagrange1d_pointer",children:"Lagrange1D_Pointer"}),"\n",(0,i.jsxs)(e.p,{children:["This function returns a pointer to a newly created instance of ",(0,i.jsx)(e.code,{children:"Lagrange1D_"}),". The interface is same as the ",(0,i.jsx)(e.code,{children:"Lagrange1D"})," function which is described above."]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>l,a:()=>t});var i=a(67294);const s={},r=i.createContext(s);function t(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);