"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[46859],{10382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=a(85893),n=a(11151),i=a(52991);const r={sidebar_position:1,date:new Date("2023-03-17T00:00:00.000Z"),update:new Date("2023-03-17T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["Polynomials","Basis"],tags:["easifemClasses","basis","shapefunctions","polynomials"]},l="AbstractOrthopol1D",o={id:"AbstractOrthopol1D/index",title:"AbstractOrthopol1D",description:"AbstractOrthopol1D is an abstract class for orthogonal polynomials in one dimension.",source:"@site/docs/docs-api/AbstractOrthopol1D/index.md",sourceDirName:"AbstractOrthopol1D",slug:"/AbstractOrthopol1D/",permalink:"/docs-api/AbstractOrthopol1D/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractOrthopol1D/index.md",tags:[{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"},{label:"basis",permalink:"/docs-api/tags/basis"},{label:"shapefunctions",permalink:"/docs-api/tags/shapefunctions"},{label:"polynomials",permalink:"/docs-api/tags/polynomials"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-03-17T00:00:00.000Z",update:"2023-03-17T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["Polynomials","Basis"],tags:["easifemClasses","basis","shapefunctions","polynomials"]},sidebar:"tutorialSidebar",previous:{title:"Size",permalink:"/docs-api/AbstractNodeField/Size"},next:{title:"Structure",permalink:"/docs-api/AbstractOrthopol1D/AbstractOrthopol1D_"}},d={},c=[{value:"Structure",id:"structure",level:2},{value:"ConstructorMethods",id:"constructormethods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"Deallocate",id:"deallocate",level:3},{value:"isInitiated",id:"isinitiated",level:3},{value:"IOMethods",id:"iomethods",level:2},{value:"Display",id:"display",level:3},{value:"GetMethods",id:"getmethods",level:2},{value:"GetJ1Pointer",id:"getj1pointer",level:3},{value:"GetJn2Pointer",id:"getjn2pointer",level:3},{value:"GetOrder",id:"getorder",level:3},{value:"Eval",id:"eval",level:3},{value:"P0",id:"p0",level:3},{value:"Pm1",id:"pm1",level:3},{value:"dP0",id:"dp0",level:3},{value:"dPm1",id:"dpm1",level:3},{value:"EvalGradient",id:"evalgradient",level:3},{value:"BasisEval",id:"basiseval",level:3},{value:"BasisEvalGradient",id:"basisevalgradient",level:3},{value:"GetStringToDisplay",id:"getstringtodisplay",level:3},{value:"GetStringForUID",id:"getstringforuid",level:3},{value:"Weight",id:"weight",level:3},{value:"GetRecurrenceCoeff",id:"getrecurrencecoeff",level:3},{value:"GetCoeffScale",id:"getcoeffscale",level:3},{value:"Zeros",id:"zeros",level:3},{value:"GaussQuadrature",id:"gaussquadrature",level:3},{value:"GaussLegendreQuadrature",id:"gausslegendrequadrature",level:3},{value:"GaussLobattoQuadrature",id:"gausslobattoquadrature",level:3},{value:"SetMethods",id:"setmethods",level:2},{value:"SetParam",id:"setparam",level:3}];function h(e){const t={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",math:"math",mi:"mi",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"abstractorthopol1d",children:"AbstractOrthopol1D"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"AbstractOrthopol1D"})," is an abstract class for orthogonal polynomials in one dimension."]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"AbstractOrthopol1D"})," It is a child of ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBasis/AbstractBasis_",children:"AbstractBasis1D"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"TYPE, ABSTRACT,  EXTENDS( AbstractBasis1D_ ) :: &\n  & AbstractOrthopol1D_\n  PRIVATE\n  INTEGER( I4B ) :: n = 0\n    !! order of orthogonal polynomial\n  REAL( DFP ) :: an_1= 0.0_DFP\n    !! $\\alpha_{n-1}$\n  REAL( DFP ) :: bn_1 = 0.0_DFP\n    !! $\\beta_{n-1}$\n  REAL( DFP ) :: sn_1 = 1.0_DFP\n    !! scale for $Orthopol_{n-1}$\n  REAL( DFP ) :: sn_2 = 1.0_DFP\n    !! scale for $Orthopol_{n-2}$\n  CLASS( AbstractOrthopol1D_ ), POINTER :: Jn_1 => NULL()\n    !! Jacobi polynomial of order n-1\n  CLASS( AbstractOrthopol1D_ ), POINTER :: Jn_2 => NULL()\n    !! Jacobi polynomial of order n-2\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"constructormethods",children:"ConstructorMethods"}),"\n",(0,s.jsx)(t.h3,{id:"initiate",children:"Initiate"}),"\n",(0,s.jsx)(t.h3,{id:"deallocate",children:"Deallocate"}),"\n",(0,s.jsx)(t.h3,{id:"isinitiated",children:"isInitiated"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"iomethods",children:"IOMethods"}),"\n",(0,s.jsx)(t.h3,{id:"display",children:"Display"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"getmethods",children:"GetMethods"}),"\n",(0,s.jsx)(t.h3,{id:"getj1pointer",children:"GetJ1Pointer"}),"\n",(0,s.jsx)(t.h3,{id:"getjn2pointer",children:"GetJn2Pointer"}),"\n",(0,s.jsx)(t.h3,{id:"getorder",children:"GetOrder"}),"\n",(0,s.jsx)(t.h3,{id:"eval",children:"Eval"}),"\n",(0,s.jsxs)(t.p,{children:["Evaluate the polynomial at given point ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mi,{children:"x"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]}),". If ",(0,s.jsxs)(t.span,{className:"katex",children:[(0,s.jsx)(t.span,{className:"katex-mathml",children:(0,s.jsx)(t.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(t.semantics,{children:[(0,s.jsx)(t.mrow,{children:(0,s.jsx)(t.mi,{children:"x"})}),(0,s.jsx)(t.annotation,{encoding:"application/x-tex",children:"x"})]})})}),(0,s.jsx)(t.span,{className:"katex-html","aria-hidden":"true",children:(0,s.jsxs)(t.span,{className:"base",children:[(0,s.jsx)(t.span,{className:"strut",style:{height:"0.4306em"}}),(0,s.jsx)(t.span,{className:"mord mathnormal",children:"x"})]})})]})," is a vector, the result will also be a vector. The interface is given below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"MODULE ELEMENTAL FUNCTION Eval( obj, x ) RESULT( ans )\n  CLASS( AbstractOrthopol1D_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x\n  REAL( DFP ) :: ans\nEND FUNCTION Eval\n"})}),"\n",(0,s.jsx)(t.h3,{id:"p0",children:"P0"}),"\n",(0,s.jsx)(t.h3,{id:"pm1",children:"Pm1"}),"\n",(0,s.jsx)(t.h3,{id:"dp0",children:"dP0"}),"\n",(0,s.jsx)(t.h3,{id:"dpm1",children:"dPm1"}),"\n",(0,s.jsx)(t.h3,{id:"evalgradient",children:"EvalGradient"}),"\n",(0,s.jsx)(t.p,{children:"Evaluate the gradient of the polynomial at a given point. If the input argument is a vector then output argument will also be a vector. The interface is given below."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nMODULE ELEMENTAL FUNCTION EvalGradient( obj, x ) &\n  & RESULT( ans )\n  CLASS( AbstractOrthopol1D_ ), INTENT( IN ) :: obj\n  REAL( DFP ), INTENT( IN ) :: x\n  REAL( DFP ) :: ans\nEND FUNCTION EvalGradient\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.h3,{id:"basiseval",children:"BasisEval"}),"\n",(0,s.jsx)(t.h3,{id:"basisevalgradient",children:"BasisEvalGradient"}),"\n",(0,s.jsx)(t.h3,{id:"getstringtodisplay",children:"GetStringToDisplay"}),"\n",(0,s.jsx)(t.h3,{id:"getstringforuid",children:"GetStringForUID"}),"\n",(0,s.jsx)(t.h3,{id:"weight",children:"Weight"}),"\n",(0,s.jsx)(t.h3,{id:"getrecurrencecoeff",children:"GetRecurrenceCoeff"}),"\n",(0,s.jsx)(t.h3,{id:"getcoeffscale",children:"GetCoeffScale"}),"\n",(0,s.jsx)(t.h3,{id:"zeros",children:"Zeros"}),"\n",(0,s.jsx)(t.h3,{id:"gaussquadrature",children:"GaussQuadrature"}),"\n",(0,s.jsx)(t.h3,{id:"gausslegendrequadrature",children:"GaussLegendreQuadrature"}),"\n",(0,s.jsx)(t.h3,{id:"gausslobattoquadrature",children:"GaussLobattoQuadrature"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"setmethods",children:"SetMethods"}),"\n",(0,s.jsx)(t.h3,{id:"setparam",children:"SetParam"}),"\n","\n","\n",(0,s.jsx)(i.Z,{})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},52991:(e,t,a)=>{a.d(t,{Z:()=>j});a(67294);var s=a(86010),n=a(53438),i=a(39960),r=a(13919),l=a(95999),o=a(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var c=a(85893);function h(e){let{href:t,children:a}=e;return(0,c.jsx)(i.Z,{href:t,className:(0,s.Z)("card padding--lg",d.cardContainer),children:a})}function u(e){let{href:t,icon:a,title:n,description:i}=e;return(0,c.jsxs)(h,{href:t,children:[(0,c.jsxs)(o.Z,{as:"h2",className:(0,s.Z)("text--truncate",d.cardTitle),title:n,children:[a," ",n]}),i&&(0,c.jsx)("p",{className:(0,s.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const a=(0,n.LM)(t);return a?(0,c.jsx)(u,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,r.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.xz)(t.docId??void 0);return(0,c.jsx)(u,{href:t.href,icon:a,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,c.jsx)(m,{item:t});case"category":return(0,c.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const a=(0,n.jA)();return(0,c.jsx)(j,{items:a.items,className:t})}function j(e){const{items:t,className:a}=e;if(!t)return(0,c.jsx)(v,{...e});const i=(0,n.MN)(t);return(0,c.jsx)("section",{className:(0,s.Z)("row",a),children:i.map(((e,t)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(x,{item:e})},t)))})}},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>r});var s=a(67294);const n={},i=s.createContext(n);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);