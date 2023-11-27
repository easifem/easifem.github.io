"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[91474],{866:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=n(85893),i=n(11151);const a={},t="Structure",r={id:"Polynomial3D/Polynomial3D_",title:"Structure",description:"[[Polynomial3D_]] is a class for polynomials of argument in $R^3$.",source:"@site/docs/docs-api/Polynomial3D/Polynomial3D_.md",sourceDirName:"Polynomial3D",slug:"/Polynomial3D/Polynomial3D_",permalink:"/docs-api/Polynomial3D/Polynomial3D_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Polynomial3D/Polynomial3D_.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Polynomial3D",permalink:"/docs-api/Polynomial3D/"},next:{title:"Polynomial3D example 1",permalink:"/docs-api/Polynomial3D/Polynomial3D_test_1"}},d={},c=[{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"Polynomial3D constructor",id:"polynomial3d-constructor",level:3},{value:"Polynomial3D_Pointer",id:"polynomial3d_pointer",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"IOMethods",id:"iomethods",level:2},{value:"Display",id:"display",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"Eval",id:"eval",level:3},{value:"EvalGradient",id:"evalgradient",level:3},{value:"Grad",id:"grad",level:3},{value:"GetStringForUID",id:"getstringforuid",level:3},{value:"GetDisplayString",id:"getdisplaystring",level:3},{value:"GetDegree",id:"getdegree",level:3},{value:"GetCoeff",id:"getcoeff",level:3},{value:"GetOrder",id:"getorder",level:3},{value:"AddMethods",id:"addmethods",level:2},{value:"SubtractMethods",id:"subtractmethods",level:2},{value:"MultiplicationMethods",id:"multiplicationmethods",level:2}];function h(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"structure",children:"Structure"}),"\n",(0,l.jsxs)(s.p,{children:["[[Polynomial3D_]] is a class for polynomials of argument in ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsxs)(s.msup,{children:[(0,l.jsx)(s.mi,{children:"R"}),(0,l.jsx)(s.mn,{children:"3"})]})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"R^3"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8141em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,l.jsx)(s.span,{className:"msupsub",children:(0,l.jsx)(s.span,{className:"vlist-t",children:(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.8141em"},children:(0,l.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:"3"})})]})})})})})]})]})})]}),"."]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"TYPE, EXTENDS( AbstractFunction1D_ ) :: Polynomial3D_\n  PRIVATE\n  INTEGER( I4B ), ALLOCATABLE :: degree( :, : )\n    !! power of each monomial\n  REAL( DFP ), ALLOCATABLE :: coeff( : )\n    !! coefficient\n  TYPE( Monomial3D_ ), ALLOCATABLE :: x( : )\n    !! Monomial3D\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "degree"\nDegrees of each monomial'}),"\n",(0,l.jsx)(s.p,{children:'!!! note "coeff"\nCoefficient of each monomial'}),"\n",(0,l.jsx)(s.p,{children:'!!! note "x"\nA vector of [[Monomial3D_]]'}),"\n",(0,l.jsx)(s.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,l.jsx)(s.h3,{id:"polynomial3d-constructor",children:"Polynomial3D constructor"}),"\n",(0,l.jsx)(s.p,{children:"Creates an instance of [[Polynomial3D_]]."}),"\n",(0,l.jsx)(s.p,{children:"Interface:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\nMODULE PURE FUNCTION Polynomial3D( coeff, degree, name1, name2, name3) &\n  & RESULT( ans )\n  REAL( DFP ), INTENT( IN ) :: coeff( : )\n  !! coefficients\n  INTEGER( I4B ), INTENT( IN ) :: degree( :, : )\n  !! degrees of x and y\n  CHARACTER( LEN = * ), INTENT( IN ) :: name1\n  !! variable x\n  CHARACTER( LEN = * ), INTENT( IN ) :: name2\n  !! variable y\n  CHARACTER( LEN = * ), INTENT( IN ) :: name3\n  !! variable z\n  TYPE( Polynomial3D_ ) :: ans\nEND FUNCTION Polynomial3D\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial3D_test_1]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"polynomial3d_pointer",children:"Polynomial3D_Pointer"}),"\n",(0,l.jsx)(s.p,{children:"Creates a pointer to a newly created instance of [[Polynomial3D_]], the interface is same as the one given above."}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial3D_test_2.md]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,l.jsx)(s.p,{children:"Deallocate the data."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Deallocate( obj )\n    CLASS( Polynomial3D_ ), INTENT( INOUT ) :: obj\n  END SUBROUTINE Deallocate\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.h2,{id:"iomethods",children:"IOMethods"}),"\n",(0,l.jsx)(s.h3,{id:"display",children:"Display"}),"\n",(0,l.jsx)(s.p,{children:"Display the content of polynomial on the screen."}),"\n",(0,l.jsx)(s.p,{children:"Interface:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\nMODULE SUBROUTINE Display( obj, msg, unitno )\n  CLASS( Polynomial3D_ ), INTENT( IN ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitno\nEND SUBROUTINE Display\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,l.jsx)(s.h3,{id:"eval",children:"Eval"}),"\n",(0,l.jsxs)(s.p,{children:["Evaluate the polynomial at ",(0,l.jsx)(s.code,{children:"x,y,z"})," point."]}),"\n",(0,l.jsx)(s.p,{children:"Interface:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE ELEMENTAL FUNCTION Eval( obj, x, y, z ) RESULT( ans )\n    CLASS( Polynomial3D_ ), INTENT( IN ) :: obj\n    REAL( DFP ), INTENT( IN ) :: x\n    REAL( DFP ), INTENT( IN ) :: y\n    REAL( DFP ), INTENT( IN ) :: z\n    REAL( DFP ) :: ans\n  END FUNCTION Eval\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial3D_test_3]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"evalgradient",children:"EvalGradient"}),"\n",(0,l.jsx)(s.p,{children:"Evaluate the gradient of polynomial."}),"\n",(0,l.jsx)(s.p,{children:"Interface:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\n  MODULE ELEMENTAL FUNCTION EvalGradient( obj, x, y, z, dim ) &\n    & RESULT( ans )\n    CLASS( Polynomial3D_ ), INTENT( IN ) :: obj\n    REAL( DFP ), INTENT( IN ) :: x\n    REAL( DFP ), INTENT( IN ) :: y\n    REAL( DFP ), INTENT( IN ) :: z\n    INTEGER( I4B ), INTENT( IN ) :: dim\n    REAL( DFP ) :: ans\n  END FUNCTION EvalGradient\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "dim"'}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["dim=1 corresponds to ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsxs)(s.mfrac,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"f"})]}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"x"})]})]})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dx}"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1.2772em",verticalAlign:"-0.345em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(s.span,{className:"mfrac",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,l.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(s.span,{className:"mord mtight",children:[(0,l.jsx)(s.span,{className:"mord mathnormal mtight",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal mtight",children:"x"})]})})]}),(0,l.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(s.span,{style:{top:"-3.4461em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"df"})})})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})]}),"\n",(0,l.jsxs)(s.li,{children:["dim=2 corresponds to ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsxs)(s.mfrac,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"f"})]}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"y"})]})]})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dy}"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1.4133em",verticalAlign:"-0.4811em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(s.span,{className:"mfrac",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,l.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(s.span,{className:"mord mtight",children:[(0,l.jsx)(s.span,{className:"mord mathnormal mtight",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"y"})]})})]}),(0,l.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(s.span,{style:{top:"-3.4461em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"df"})})})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.4811em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})]}),"\n",(0,l.jsxs)(s.li,{children:["dim=3 corresponds to ",(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsx)(s.mrow,{children:(0,l.jsxs)(s.mfrac,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"f"})]}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"z"})]})]})}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\frac{df}{dz}"})]})})}),(0,l.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"1.2772em",verticalAlign:"-0.345em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(s.span,{className:"mfrac",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"0.9322em"},children:[(0,l.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(s.span,{className:"mord mtight",children:[(0,l.jsx)(s.span,{className:"mord mathnormal mtight",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.04398em"},children:"z"})]})})]}),(0,l.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(s.span,{style:{top:"-3.4461em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10764em"},children:"df"})})})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_4]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"grad",children:"Grad"}),"\n",(0,l.jsx)(s.p,{children:"This function returns the gradient of a polynomial as an instance of [[Polynomial3D_]]"}),"\n",(0,l.jsx)(s.p,{children:"Interface:"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"INTERFACE\nMODULE FUNCTION Grad( obj, dim ) RESULT( ans )\n  CLASS( Polynomial3D_ ), INTENT( IN ) :: obj\n  INTEGER( I4B ), INTENT( IN ) :: dim\n  TYPE( Polynomial3D_ ) :: ans\nEND FUNCTION Grad\nEND INTERFACE\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "dim"\nSee the above remark on dim.'}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_5]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"getstringforuid",children:"GetStringForUID"}),"\n",(0,l.jsx)(s.p,{children:"Returns the string for creating UID."}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_6]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"getdisplaystring",children:"GetDisplayString"}),"\n",(0,l.jsx)(s.p,{children:"Returns the string for display."}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_6]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"getdegree",children:"GetDegree"}),"\n",(0,l.jsx)(s.p,{children:"Returns the degree."}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_6]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"getcoeff",children:"GetCoeff"}),"\n",(0,l.jsx)(s.p,{children:"Returns the coefficient."}),"\n",(0,l.jsx)(s.p,{children:"Example:"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"[[Polynomial2D_test_6]]"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"getorder",children:"GetOrder"}),"\n",(0,l.jsx)(s.p,{children:"Returns the order of polynomial."}),"\n",(0,l.jsx)(s.h2,{id:"addmethods",children:"AddMethods"}),"\n",(0,l.jsx)(s.p,{children:"Addition operator has been overloaded. Following operation is allowed."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"c = a + b\n"})}),"\n",(0,l.jsx)(s.p,{children:"where, a, b, c are given in following table."}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"a"}),(0,l.jsx)(s.th,{children:"b"}),(0,l.jsx)(s.th,{children:"c"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Int8"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Int16"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Int32"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Int64"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Real32"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Mono3D"}),(0,l.jsx)(s.td,{children:"Real64"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int8"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int16"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int32"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int64"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real32"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real64"}),(0,l.jsx)(s.td,{children:"Mono3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int8"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int16"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int32"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int64"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real32"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real64"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int8"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int16"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int32"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Int64"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real32"}),(0,l.jsx)(s.td,{children:"Poly3D"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Poly3D"}),(0,l.jsx)(s.td,{children:"Real64"}),(0,l.jsx)(s.td,{children:"Poly3D"})]})]})]}),"\n",(0,l.jsx)(s.p,{children:"where,"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"Poly3D is an instance of [[Polynomial3D_]]"}),"\n",(0,l.jsx)(s.li,{children:"Mono3D is an instance of [[Monomial3D_]]"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"subtractmethods",children:"SubtractMethods"}),"\n",(0,l.jsx)(s.p,{children:"Subtraction operator has been overloaded. Following operation is allowed."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"c = a - b\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "a,b,c"\na,b,c are given above.'}),"\n",(0,l.jsx)(s.h2,{id:"multiplicationmethods",children:"MultiplicationMethods"}),"\n",(0,l.jsx)(s.p,{children:"Multiplication operator has been overloaded. Following operation is allowed."}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-fortran",children:"c = a * b\n"})}),"\n",(0,l.jsx)(s.p,{children:'!!! note "a,b,c"\na,b,c are given above.'})]})}function o(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>t});var l=n(67294);const i={},a=l.createContext(i);function t(e){const s=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(a.Provider,{value:s},e.children)}}}]);