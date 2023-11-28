"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[58747],{7838:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=r(85893),a=r(11151);function d(e){const n={code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\n\nREAL(dfp), ALLOCATABLE :: xij(:, :), ans(:, :)\nINTEGER(I4B) :: order, quadType\nTYPE(String) :: refTetrahedron\n\nrefTetrahedron = "UNIT"\norder = 1\nquadType = GaussLegendre\n\nans = QuadraturePoint_Tetrahedron(&\n  & order=order, &\n  & quadType=quadType, &\n  & refTetrahedron=refTetrahedron%chars())\n\nCALL Display(mdencode(ans) , "ans" // char_lf2 )\n\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"Ans"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.16667"})})]})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'refTetrahedron = "BIUNIT"\norder = 1\nquadType = GaussLegendre\n\nans = QuadraturePoint_Tetrahedron(&\n  & order=order, &\n  & quadType=quadType, &\n  & refTetrahedron=refTetrahedron%chars())\n\nCALL Display(mdencode(ans) , "ans" // char_lf2 )\n'})}),"\n",(0,t.jsx)(n.p,{children:"Ans"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"-0.5"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"-0.5"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"-0.5"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"1.3333"})})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'refTetrahedron = "UNIT"\nxij = 2.0_DFP + RefCoord_Tetrahedron(refTetrahedron%chars())\norder = 1\nquadType = GaussLegendre\n\nans = QuadraturePoint_Tetrahedron(&\n  & order=order, &\n  & quadType=quadType, &\n  & refTetrahedron=refTetrahedron%chars())\n\nCALL Display(mdencode(ans) , "ans" // char_lf2 )\n\nEND PROGRAM main\n\n'})}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"See results"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(n.p,{children:"Ans"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{})})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.25"})}),(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{children:"0.16667"})})]})]})]})]})]})}function s(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const i={sidebar_label:"QuadraturePoint"},o="QuadraturePoint_Tetrahedron",l={id:"TetrahedronInterpolationUtility/QuadraturePoint_Tetrahedron",title:"QuadraturePoint_Tetrahedron",description:"This function returns the quadrature points on the tetrahedron.",source:"@site/docs/docs-api/TetrahedronInterpolationUtility/QuadraturePoint_Tetrahedron.md",sourceDirName:"TetrahedronInterpolationUtility",slug:"/TetrahedronInterpolationUtility/QuadraturePoint_Tetrahedron",permalink:"/docs-api/TetrahedronInterpolationUtility/QuadraturePoint_Tetrahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/TetrahedronInterpolationUtility/QuadraturePoint_Tetrahedron.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{sidebar_label:"QuadraturePoint"},sidebar:"tutorialSidebar",previous:{title:"OrthogonalBasis_Tetrahedron",permalink:"/docs-api/TetrahedronInterpolationUtility/OrthogonalBasis_Tetrahedron"},next:{title:"RefCoord_Tetrahedron",permalink:"/docs-api/TetrahedronInterpolationUtility/RefCoord_Tetrahedron"}},c={},h=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2}];function u(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mdxAdmonitionTitle:"mdxAdmonitionTitle",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,a.a)(),...e.components},{TabItem:r,Tabs:d}=n;return r||p("TabItem",!0),d||p("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quadraturepoint_tetrahedron",children:"QuadraturePoint_Tetrahedron"}),"\n",(0,t.jsx)(n.p,{children:"This function returns the quadrature points on the tetrahedron."}),"\n",(0,t.jsx)(n.p,{children:"Calling example."}),"\n",(0,t.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,t.jsxs)(d,{children:[(0,t.jsxs)(r,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE QuadraturePoint_Tetrahedron\n  MODULE FUNCTION QuadraturePoint_Tetrahedron1(&\n    & order, &\n    & quadType, &\n    & refTetrahedron, &\n    & xij) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: order\n    !! order of integrand\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! quadrature point type\n    !! currently this variable is not used\n    CHARACTER(*), INTENT(IN) :: refTetrahedron\n    !! Reference triangle\n    !! BIUNIT\n    !! UNIT\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! nodal coordinates of triangle.\n    !! The number of rows in xij should be  3.\n    !! The number of columns in xij should be 4\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! Quadrature points\n  END FUNCTION QuadraturePoint_Tetrahedron1\nEND INTERFACE QuadraturePoint_Tetrahedron\n"})}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"refTetrahedron"})})}),(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"refTetrahedron"})," can be ",(0,t.jsx)(n.code,{children:"UNIT"})," or ",(0,t.jsx)(n.code,{children:"BIUNIT"}),". By default, quadrature points are computed on the unit tetrahedron domain. This argument is used to transfer those points to the specified domain of the tetrahedron. If ",(0,t.jsx)(n.code,{children:"xij"})," is present then this argument is ignored."]}),(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.code,{children:"xij"})})}),(0,t.jsxs)(n.p,{children:["Nodal coordinates of the tetrahedron. The number of rows should be 3 corresponding to ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"x"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"y"}),(0,t.jsx)(n.mo,{separator:"true",children:","}),(0,t.jsx)(n.mi,{children:"z"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"x,y,z"})]})})}),(0,t.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.625em",verticalAlign:"-0.1944em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"x"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,t.jsx)(n.span,{className:"mpunct",children:","}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.04398em"},children:"z"})]})})]})," components. The number of columns in ",(0,t.jsx)(n.code,{children:"xij"})," should be 4 corresponding to the 4 vertices of tetrahedron. The returned quadrature points will be in this domain."]})]}),(0,t.jsx)(r,{value:"example",label:"\ufe0f\u0700 See example",children:(0,t.jsx)(s,{})}),(0,t.jsx)(r,{value:"close",label:"\u21a2 "})]}),"\n",(0,t.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"INTERFACE QuadraturePoint_Tetrahedron\n  MODULE FUNCTION QuadraturePoint_Tetrahedron2(&\n    & nips, &\n    & quadType, &\n    & refTetrahedron, &\n    & xij) RESULT(ans)\n    INTEGER(I4B), INTENT(IN) :: nips(1)\n    !! nips(1) .LE. 79, then we call\n    !! economical quadrature rules.\n    !! Otherwise, this routine will retport\n    !! error\n    INTEGER(I4B), INTENT(IN) :: quadType\n    !! quadrature point type,\n    !! currently this variable is not used\n    CHARACTER(*), INTENT(IN) :: refTetrahedron\n    !! Reference triangle\n    !! BIUNIT\n    !! UNIT\n    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)\n    !! nodal coordinates of triangle.\n    !! The number of rows in xij should be 3\n    !! The number of columns in xij should be 4\n    REAL(DFP), ALLOCATABLE :: ans(:, :)\n    !! Quadrature points\n  END FUNCTION QuadraturePoint_Tetrahedron2\nEND INTERFACE QuadraturePoint_Tetrahedron\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Return quadrature points by specifying the number of integration points ",(0,t.jsx)(n.code,{children:"nips"}),". Currently, following ",(0,t.jsx)(n.code,{children:"nips"})," are allowed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-txt",children:"1, 4, 5, 11, 14, 24, 31, 43, 53, 126, 210, 330, 495, 715, 1001\n"})})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var t=r(67294);const a={},d=t.createContext(a);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);