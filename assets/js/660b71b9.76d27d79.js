"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[36404],{83971:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=l(85893),i=l(11151);const o={},t="Structure",s={id:"Polynomial1D/Polynomial1D_",title:"Structure",description:"This class defines the Polynomials in one argument.",source:"@site/docs/docs-api/Polynomial1D/Polynomial1D_.md",sourceDirName:"Polynomial1D",slug:"/Polynomial1D/Polynomial1D_",permalink:"/docs-api/Polynomial1D/Polynomial1D_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial1D/Polynomial1D_.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Polynomial1D",permalink:"/docs-api/Polynomial1D/"},next:{title:"Polynomial1D example 1",permalink:"/docs-api/Polynomial1D/Polynomial1D_test_1"}},r={},d=[{value:"ConstructorMethods",id:"constructormethods",level:3},{value:"Polynomial1D function",id:"polynomial1d-function",level:3},{value:"Polynomial1D_Pointer",id:"polynomial1d_pointer",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"Eval",id:"eval",level:3},{value:"EvalGradient",id:"evalgradient",level:3},{value:"Grad",id:"grad",level:3},{value:"GetStringForUID",id:"getstringforuid",level:3},{value:"GetDegree",id:"getdegree",level:3},{value:"GetDisplayString",id:"getdisplaystring",level:3},{value:"GetCoeff",id:"getcoeff",level:3},{value:"GetOrder",id:"getorder",level:3},{value:"IOMethods",id:"iomethods",level:2},{value:"Display",id:"display",level:3},{value:"OperatorMethods",id:"operatormethods",level:2},{value:"OPERATOR(+)",id:"operator",level:3},{value:"OPERATOR(*)",id:"operator-1",level:3},{value:"OPERATOR(-)",id:"operator-",level:3},{value:"ASSIGNMENT(=)",id:"assignment",level:3}];function c(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"structure",children:"Structure"}),"\n",(0,a.jsx)(e.p,{children:"This class defines the Polynomials in one argument."}),"\n",(0,a.jsx)(e.h3,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,a.jsx)(e.h3,{id:"polynomial1d-function",children:"Polynomial1D function"}),"\n",(0,a.jsx)(e.p,{children:"We can create an instance by calling Polynomial1D function."}),"\n",(0,a.jsx)(e.p,{children:"Interface"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Polynomial1D(coeff, degree, varname) &\n    & RESULT(ans)\n    REAL(DFP), INTENT(IN) :: coeff(:)\n    INTEGER(I4B), INTENT(IN) :: degree(:)\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n    TYPE(Polynomial1D_) :: ans\n  END FUNCTION Polynomial1D\n"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"coeff"})," coefficient of polynomial"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"degree"})," degress of monomials"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"varname"})," variable name"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_1]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"polynomial1d_pointer",children:"Polynomial1D_Pointer"}),"\n",(0,a.jsxs)(e.p,{children:["Same as ",(0,a.jsx)(e.code,{children:"Polynomial1D"})," function, but returns the pointer to a newly created instance of Polynomial."]}),"\n",(0,a.jsx)(e.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,a.jsx)(e.p,{children:"Deallocate the Polynomial."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"CALL obj%Deallocate()\n"})}),"\n",(0,a.jsx)(e.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,a.jsx)(e.h3,{id:"eval",children:"Eval"}),"\n",(0,a.jsx)(e.p,{children:"Evaluate the function at a given point."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE FUNCTION Polynomial1D(coeff, degree, &\n    & varname) RESULT(ans)\n    REAL(DFP), INTENT(IN) :: coeff(:)\n    INTEGER(I4B), INTENT(IN) :: degree(:)\n    CHARACTER(LEN=*), INTENT(IN) :: varname\n    TYPE(Polynomial1D_) :: ans\n  END FUNCTION Polynomial1D\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_2]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"evalgradient",children:"EvalGradient"}),"\n",(0,a.jsx)(e.p,{children:"Evaluate first derivative of the polynomial at a given point."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"  MODULE ELEMENTAL FUNCTION EvalGradient(obj, x) RESULT(ans)\n    CLASS(Polynomial1D_), INTENT(IN) :: obj\n    REAL(DFP), INTENT(IN) :: x\n    REAL(DFP) :: ans\n  END FUNCTION EvalGradient\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_2]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"grad",children:"Grad"}),"\n",(0,a.jsx)(e.p,{children:"Returns the gradient of the polynomial as an instance of a polynomial."}),"\n",(0,a.jsx)(e.p,{children:"Interface:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"  MODULE ELEMENTAL FUNCTION Grad(obj) RESULT(ans)\n    CLASS(Polynomial1D_), INTENT(IN) :: obj\n    TYPE(Polynomial1D_) :: ans\n  END FUNCTION Grad\n"})}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_2]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"getstringforuid",children:"GetStringForUID"}),"\n",(0,a.jsx)(e.p,{children:"Returns the string for creating the UID. This routine is for internal use only."}),"\n",(0,a.jsx)(e.h3,{id:"getdegree",children:"GetDegree"}),"\n",(0,a.jsx)(e.p,{children:"Returns the degrees of monomials."}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Example"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_2]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"getdisplaystring",children:"GetDisplayString"}),"\n",(0,a.jsx)(e.p,{children:"REturns the string for displaying the contents of the Polynomial."}),"\n",(0,a.jsx)(e.h3,{id:"getcoeff",children:"GetCoeff"}),"\n",(0,a.jsx)(e.p,{children:"Returns the coefficient of the polynomials. See, [[Polynomial1D_test_2]]"}),"\n",(0,a.jsx)(e.h3,{id:"getorder",children:"GetOrder"}),"\n",(0,a.jsx)(e.p,{children:"Returns the order of the Polynomial."}),"\n",(0,a.jsx)(e.h2,{id:"iomethods",children:"IOMethods"}),"\n",(0,a.jsx)(e.h3,{id:"display",children:"Display"}),"\n",(0,a.jsx)(e.p,{children:"Display the content of the polynomial."}),"\n",(0,a.jsx)(e.h2,{id:"operatormethods",children:"OperatorMethods"}),"\n",(0,a.jsx)(e.h3,{id:"operator",children:"OPERATOR(+)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"We can add two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can add a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]"}),"\n",(0,a.jsx)(e.li,{children:"We can add an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can add two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad."}),"\n",(0,a.jsx)(e.li,{children:"We can add an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Examples"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_5.md]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"operator-1",children:"OPERATOR(*)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"We can multiply two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can multiply a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]"}),"\n",(0,a.jsx)(e.li,{children:"We can multiply an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can multiply two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad."}),"\n",(0,a.jsx)(e.li,{children:"We can multiply an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Examples"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_4.md]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"operator-",children:"OPERATOR(-)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"We can subtract two instances of [[Monomial1D_]] to obtain an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can subtract a [[Monomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]"}),"\n",(0,a.jsx)(e.li,{children:"We can subtract an instance of [[Polynomial1D_]] and an instance of [[Monomial1D_]] to get an instance of [[Polynomial1D_]]."}),"\n",(0,a.jsx)(e.li,{children:"We can subtract two instances of [[Polynomial1D_]] to get an instance of [[Polynomial1D_]].Grad."}),"\n",(0,a.jsx)(e.li,{children:"We can subtract an instance of [[Polynomial1D_]] and a scalar to get an instance of [[Polynomial1D_]]."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:'!!! example "Examples"'}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"[[Polynomial1D_test_6.md]]"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"assignment",children:"ASSIGNMENT(=)"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"Poly=Poly"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"Poly=Mono"})}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.code,{children:"Poly=Scalar"})}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},11151:(n,e,l)=>{l.d(e,{Z:()=>s,a:()=>t});var a=l(67294);const i={},o=a.createContext(i);function t(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);