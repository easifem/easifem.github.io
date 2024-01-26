"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[81584],{95098:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>m});var a=s(85893),t=s(11151);const l={title:"STElemshapeData example 1",author:"Vikas Sharma, Ph. D.",date:"7 Nov 2021",update:"15 Nov 2021",tags:["ReferenceLine","ReferenceElement/LagrangeElement","ReferenceElement/Set","ReferenceLine/Set"]},i="STElemshapeData example 1",r={id:"STElemshapeData/STElemshapeData_test_1",title:"STElemshapeData example 1",description:"Modules and classes",source:"@site/docs/docs-api/STElemshapeData/STElemshapeData_test_1.md",sourceDirName:"STElemshapeData",slug:"/STElemshapeData/STElemshapeData_test_1",permalink:"/docs-api/STElemshapeData/STElemshapeData_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STElemshapeData/STElemshapeData_test_1.md",tags:[{label:"ReferenceLine",permalink:"/docs-api/tags/reference-line"},{label:"ReferenceElement/LagrangeElement",permalink:"/docs-api/tags/reference-element-lagrange-element"},{label:"ReferenceElement/Set",permalink:"/docs-api/tags/reference-element-set"},{label:"ReferenceLine/Set",permalink:"/docs-api/tags/reference-line-set"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"STElemshapeData example 1",author:"Vikas Sharma, Ph. D.",date:"7 Nov 2021",update:"15 Nov 2021",tags:["ReferenceLine","ReferenceElement/LagrangeElement","ReferenceElement/Set","ReferenceLine/Set"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/STElemshapeData/STElemshapeData_"},next:{title:"STElemshapeData_test_2",permalink:"/docs-api/STElemshapeData/STElemshapeData_test_2"}},c={},m=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mrow:"mrow",msub:"msub",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"stelemshapedata-example-1",children:"STElemshapeData example 1"}),"\n",(0,a.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"[[STElemshapeData_]]"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nIMPORT modules and declare variables.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE(STElemshapeData_), ALLOCATABLE :: obj(:)\n    TYPE(ElemshapeData_) :: time_elemsd\n    TYPE(Quadraturepoint_) :: quad\n    CLASS(ReferenceElement_), POINTER :: refelem => NULL()\n    CLASS(ReferenceElement_), POINTER :: highOrderElem => NULL()\n    INTEGER(I4B) :: ii, NNT\n    INTEGER(I4B), PARAMETER :: nsd=2, nns=3\n    REAL(DFP) :: tiJ(1, 2)\n    REAL(DFP), ALLOCATABLE :: xiJ(:, :)\n    ! spatial nodal coordinates\n    REAL(DFP), ALLOCATABLE :: xiJa(:, :, :)\n    ! spatial-temporal nodal coordinates\n"})}),"\n",(0,a.jsxs)(n.p,{children:['!!! note ""\nFirst, we initiate a [[ReferenceLine_]] element for time domain. Note that ',(0,a.jsx)(n.code,{children:"nsd"})," should be 1 when making reference element for time domain."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    ALLOCATE (ReferenceLine_ :: refelem)\n    refelem = ReferenceLine(nsd=1)\n    CALL Display(refelem, "ReferenceElement :: ")\n'})}),"\n",(0,a.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"#ReferenceElement ::\nElemType : Line2\nXiDimension :: 1\nNSD : 1\nOrder : 1\nEntityCounts(0) : 2\nEntityCounts(1) : 1\nEntityCounts(2) : 0\nEntityCounts(3) : 0\nNode( 1 ) :\n------------\n-1.00000\n0.00000\n0.00000\nNode( 2 ) :\n------------\n1.00000\n0.00000\n0.00000\n#Topology( 1 ) :\nElemType : Point1\nXiDim : 0\nNptrs :\n--------\n1\n#Topology( 2 ) :\nElemType : Point1\nXiDim : 0\nNptrs :\n--------\n2\n#Topology( 3 ) :\nElemType : Line2\nXiDim : 1\nNptrs :\n--------\n1\n2\n"})}),"\n",(0,a.jsxs)(n.p,{children:['!!! note ""\nHigher order Lagrange element can be obtained, ',(0,a.jsx)(n.code,{children:"NNT"})," denotes number of nodes in time element. For line-element order will be equal to ",(0,a.jsx)(n.code,{children:"NNT-1"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    NNT = 2\n    ALLOCATE (ReferenceLine_ :: highOrderElem)\n    CALL refelem%LagrangeElement(order=NNT - 1, &\n      & HighOrderObj=highOrderElem)\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nGenerate Gauss-Legendre quadrature points on time element.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL Initiate(obj=quad, refelem=refelem, order=refelem%order, &\n      & quadratureType=\"GaussLegendre\" )\n    CALL display(quad, 'quad for time element :: ')\n"})}),"\n",(0,a.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"Quad for time element ::!\n\n        Weights    |      Points\n-----------------------------------------\n    2.0000000        0.0000000\n-----------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nSetting shape FUNCTION for time. This will setup following quantities.'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"T"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"T"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"T"})]})})]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.mfrac,{children:[(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"d"}),(0,a.jsx)(n.mi,{children:"T"})]}),(0,a.jsxs)(n.mrow,{children:[(0,a.jsx)(n.mi,{children:"d"}),(0,a.jsx)(n.mi,{children:"\u03b8"})]})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\frac{dT}{d\\theta}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"1.2251em",verticalAlign:"-0.345em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(n.span,{className:"mfrac",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsxs)(n.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,a.jsxs)(n.span,{style:{top:"-2.655em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(n.span,{className:"mord mtight",children:[(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(n.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"\u03b8"})]})})]}),(0,a.jsxs)(n.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(n.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(n.span,{style:{top:"-3.394em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsxs)(n.span,{className:"mord mtight",children:[(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"d"}),(0,a.jsx)(n.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"T"})]})})]})]}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.345em"},children:(0,a.jsx)(n.span,{})})})]})}),(0,a.jsx)(n.span,{className:"mclose nulldelimiter"})]})]})})]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"J"}),(0,a.jsx)(n.mi,{children:"t"})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"J_t"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.09618em"},children:"J"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.2806em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"-0.0962em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"t"})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})})]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsxs)(n.msub,{children:[(0,a.jsx)(n.mi,{children:"W"}),(0,a.jsx)(n.mi,{children:"t"})]})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"W_{t}"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,a.jsxs)(n.span,{className:"mord",children:[(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"W"}),(0,a.jsx)(n.span,{className:"msupsub",children:(0,a.jsxs)(n.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(n.span,{className:"vlist-r",children:[(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.2806em"},children:(0,a.jsxs)(n.span,{style:{top:"-2.55em",marginLeft:"-0.1389em",marginRight:"0.05em"},children:[(0,a.jsx)(n.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(n.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(n.span,{className:"mord mtight",children:(0,a.jsx)(n.span,{className:"mord mathnormal mtight",children:"t"})})})]})}),(0,a.jsx)(n.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(n.span,{className:"vlist-r",children:(0,a.jsx)(n.span,{className:"vlist",style:{height:"0.15em"},children:(0,a.jsx)(n.span,{})})})]})})]})]})})]})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsxs)(n.span,{className:"katex",children:[(0,a.jsx)(n.span,{className:"katex-mathml",children:(0,a.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(n.semantics,{children:[(0,a.jsx)(n.mrow,{children:(0,a.jsx)(n.mi,{children:"\u03b8"})}),(0,a.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\theta"})]})})}),(0,a.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(n.span,{className:"base",children:[(0,a.jsx)(n.span,{className:"strut",style:{height:"0.6944em"}}),(0,a.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"\u03b8"})]})})]})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"tiJ"})," it denotes the nodal values of time element."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'    tiJ(1, :) = [-1.0, 1.0]\n    CALL initiate( &\n      & obj=time_elemsd, quad=quad, refelem=refelem, &\n      & ContinuityType=typeH1, InterpolType=TypeLagrangeInterpolation)\n    CALL Deallocate(quad)\n    CALL Set(obj=time_elemsd, val=tiJ, N=time_elemsd%N, &\n        & dNdXi=time_elemsd%dNdXi)\n    CALL Display(time_elemsd, "time_elemsd :")\n'})}),"\n",(0,a.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"time_elemsd :\n\nSHAPE FUNCTION IN SPACE ::\n\nQuadrature Point\n\n        Weights    |      Points\n-----------------------------------------\n    2.0000000        0.0000000\n-----------------------------------------\n\nobj%N\n--------\n0.500000\n0.500000\n\nobj%dNdXi( :, :, 1 ) =\n-----------------------\n    -0.500000\n        0.500000\n\nobj%dNdXt( :, :, 1 ) =\n-----------------------\n    -0.500000\n        0.500000\n\nobj%Jacobian( :, :, 1 ) =\n--------------------------\n        1.00000\n\nobj%Js\n-------\n1.00000\n\nobj%Thickness\n-------------\n1.00000\n\nobj%Coord\n---------\n0.00000\n\nobj%Normal\n----------\n0.00000\n0.00000\n0.00000\n"})}),"\n",(0,a.jsxs)(n.p,{children:['!!! note ""\nNow we initiate an instance for storing space-time shape FUNCTION DATA, that is [[STElemshapeData_]] object. This will extract time-shape DATA info from ',(0,a.jsx)(n.code,{children:"elemsd"})," and put it inside"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"obj(i)%T"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"obj(i)%dTdTheta"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"obj(i)%Jt"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"obj(i)%Wt"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"obj(i)%Theta"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    CALL Initiate(obj=obj, elemsd=time_elemsd)\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nGenerating shape functions for space-elements. Here, we are selecting a triangular element'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    ALLOCATE (ReferenceTriangle_ :: refelem)\n    refelem = ReferenceTriangle(nsd=nsd)\n    CALL Initiate(obj=quad, refelem=refelem, order=1, quadratureType='GaussLegendre' )\n    CALL Display(quad, \"quad in triangle: \")\n"})}),"\n",(0,a.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"Quad in triangle:\n\n        Weights    |      Points\n-----------------------------------------\n0.50000000       0.33333334     0.33333334\n-----------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! note ""\nSetting local DATA of shape FUNCTION in space. This will set'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"N"}),"\n",(0,a.jsx)(n.li,{children:"dNdXi"}),"\n",(0,a.jsx)(n.li,{children:"Ws"}),"\n",(0,a.jsx)(n.li,{children:"Quad"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    DO ii = 1, SIZE(obj)\n      CALL initiate( &\n        & obj=obj(ii), quad=quad, refelem=refelem, &\n        & ContinuityType=typeH1, InterpolType=TypeLagrangeInterpolation)\n    END DO\n"})}),"\n",(0,a.jsxs)(n.p,{children:['!!! note ""\nSetting the remaining DATA in obj. Here, ',(0,a.jsx)(n.code,{children:"xiJa"})," are the space-time nodal coordinates."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"    ALLOCATE (xiJ(nsd, nns), xiJa(nsd, nns, nnt))\n    xiJ = RESHAPE([0, 0, 1, 0, 0, 1], [nsd, nns])\n    DO ii = 1, nnt; xiJa(:, :, ii) = xiJ; END DO\n    DO ii = 1, SIZE(obj)\n        CALL set(obj=obj(ii), val=xiJa, N=obj(ii)%N, &\n            & dNdXi=obj(ii)%dNdXi, T=obj(ii)%T )\n        CALL Display(obj(ii), \"obj(\"//tostring(ii)//')=' )\n    END DO\n"})}),"\n",(0,a.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-txt",children:"SHAPE FUNCTION IN SPACE ::\n\nQuadrature Point\n\n        Weights    |      Points\n-----------------------------------------\n0.50000000       0.33333334     0.33333334\n-----------------------------------------\n\nobj%N\n--------\n0.333333\n0.333333\n0.333333\n\nobj%dNdXi( :, :, 1 ) =\n-----------------------\n-1.00000  -1.00000\n1.00000   0.00000\n0.00000   1.00000\n\nobj%dNdXt( :, :, 1 ) =\n-----------------------\n-1.00000  -1.00000\n1.00000   0.00000\n0.00000   1.00000\n\nobj%Jacobian( :, :, 1 ) =\n--------------------------\n    1.00000  0.00000\n    0.00000  1.00000\n\nobj%Js\n-------\n1.00000\n\nobj%Thickness\n-------------\n1.00000\n\nobj%Coord\n---------\n0.333333\n0.333333\n\nobj%Normal\n----------\n0.00000\n0.00000\n0.00000\n\nSHAPE FUNCTION IN TIME ::\n\nobj%Jt :: 1.00000\nobj%Theta :: 0.00000\nobj%Wt :: 2.00000\n\nobj%T\n--------\n0.500000\n0.500000\n\nobj%dTdTheta\n------------\n-0.500000\n0.500000\n\nobj%dNTdt( :, :, 1 ) =\n-----------------------\n-0.166667  0.166667\n-0.166667  0.166667\n-0.166667  0.166667\n\nobj%dNTdXt( :, :, 1, 1 ) =\n---------------------------\n-0.500000  -0.500000\n    0.500000   0.500000\n    0.000000   0.000000\nobj%dNTdXt( :, :, 2, 1 ) =\n---------------------------\n-0.500000  -0.500000\n    0.000000   0.000000\n    0.500000   0.500000\n"})}),"\n",(0,a.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"END PROGRAM\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var a=s(67294);const t={},l=a.createContext(t);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);