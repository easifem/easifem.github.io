"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[29122],{19764:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var n=a(85893),i=a(11151);const t={title:"MassMatrix example 3",author:"Vikas Sharma, Ph.D.",date:"20 Nov 2021",update:"20 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","ElemshapeData/Initiate","MassMatrix"]},l="MassMatrix example 3",r={id:"MassMatrix/MassMatrix_test_3",title:"MassMatrix example 3",description:'!!! note ""',source:"@site/docs/docs-api/MassMatrix/MassMatrix_test_3.md",sourceDirName:"MassMatrix",slug:"/MassMatrix/MassMatrix_test_3",permalink:"/docs-api/MassMatrix/MassMatrix_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MassMatrix/MassMatrix_test_3.md",tags:[{label:"ReferenceLine",permalink:"/docs-api/tags/reference-line"},{label:"ReferenceLine/Initiate",permalink:"/docs-api/tags/reference-line-initiate"},{label:"QuadraturePoint/Initiate",permalink:"/docs-api/tags/quadrature-point-initiate"},{label:"ElemshapeData/Initiate",permalink:"/docs-api/tags/elemshape-data-initiate"},{label:"MassMatrix",permalink:"/docs-api/tags/mass-matrix"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"MassMatrix example 3",author:"Vikas Sharma, Ph.D.",date:"20 Nov 2021",update:"20 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","ElemshapeData/Initiate","MassMatrix"]},sidebar:"tutorialSidebar",previous:{title:"MassMatrix example 2",permalink:"/docs-api/MassMatrix/MassMatrix_test_2"},next:{title:"MassMatrix example 4",permalink:"/docs-api/MassMatrix/MassMatrix_test_4"}},m={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const s={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"massmatrix-example-3",children:"MassMatrix example 3"}),"\n",(0,n.jsxs)(s.p,{children:['!!! note ""\nThis example shows how to USE the SUBROUTINE called ',(0,n.jsx)(s.code,{children:"MassMatrix"})," to create a mass matrix in space domain."]}),"\n",(0,n.jsx)(s.p,{children:"Here, we want to DO the following."}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mo,{children:"\u222b"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u03a9"})]}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"N"}),(0,n.jsx)(s.mi,{children:"I"})]}),(0,n.jsx)(s.mi,{children:"\u03c1"}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"N"}),(0,n.jsx)(s.mi,{children:"J"})]}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u03a9"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\int_{\\Omega } N^{I}\\rho N^{J}d\\Omega"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"2.2719em",verticalAlign:"-0.9119em"}}),(0,n.jsxs)(s.span,{className:"mop",children:[(0,n.jsx)(s.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"-0.4336em"},children:(0,n.jsxs)(s.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u03a9"})})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"\u03c1"}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord",children:"\u03a9"})]})})]})}),"\n",(0,n.jsxs)(s.p,{children:['!!! warning ""\n',(0,n.jsx)(s.code,{children:"rho"})," can be a constant, or a FUNCTION of spatial coordinates, or some nonlinear FUNCTION."]}),"\n",(0,n.jsxs)(s.p,{children:["In this example, following mass matrix is formed for [[ReferenceLine_]] element,  [[QuadraturePoint_]] are ",(0,n.jsx)(s.code,{children:"GaussLegendre"}),"."]}),"\n",(0,n.jsx)(s.span,{className:"katex-display",children:(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mo,{children:"\u222b"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u03a9"})]}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"N"}),(0,n.jsx)(s.mi,{children:"I"})]}),(0,n.jsxs)(s.msup,{children:[(0,n.jsx)(s.mi,{children:"N"}),(0,n.jsx)(s.mi,{children:"J"})]}),(0,n.jsx)(s.mi,{children:"d"}),(0,n.jsx)(s.mi,{mathvariant:"normal",children:"\u03a9"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"\\int_{\\Omega } N^{I} N^{J}d\\Omega"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"2.2719em",verticalAlign:"-0.9119em"}}),(0,n.jsxs)(s.span,{className:"mop",children:[(0,n.jsx)(s.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"-0.4336em"},children:(0,n.jsxs)(s.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:"\u03a9"})})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"})})})]})})})})})]}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsx)(s.span,{className:"vlist-t",children:(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.8913em"},children:(0,n.jsxs)(s.span,{style:{top:"-3.113em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})})]})})})})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(s.span,{className:"mord",children:"\u03a9"})]})})]})}),"\n",(0,n.jsxs)(s.p,{children:["This TYPE of mass matrix is useful when ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsx)(s.mi,{children:"r"}),(0,n.jsx)(s.mi,{children:"h"}),(0,n.jsx)(s.mi,{children:"o"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"rho"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.6944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"o"})]})})]})," is a constant."]}),"\n",(0,n.jsx)(s.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE(Elemshapedata_) :: test, elemsdForsimplex, trial\n    TYPE(Quadraturepoint_) :: quad\n    TYPE(Referenceline_) :: simplexElem, refElemFortest, refElemFortrial\n    REAL(DFP), ALLOCATABLE :: mat(:, :), XiJ(:, :)\n    INTEGER( I4B ), PARAMETER :: orderFortest = 1, orderForTrial = 2\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nLet us now create the physical coordinate of the line element.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    XiJ = RESHAPE([-1, 1], [1, 2])\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nNow  we create an instance of [[ReferenceLine_]].'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    simplexElem = referenceline(nsd=1)\n    CALL simplexElem%LagrangeElement(order=orderForTest, highOrderObj=refElemForTest)\n    CALL simplexElem%LagrangeElement(order=orderForTrial, highOrderObj=refElemForTrial)\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nHere, we create the quadrature points.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    CALL initiate( obj=quad, refelem=simplexElem, order=orderForTest+orderForTrial, &\n        & quadratureType='GaussLegendre' )\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nInitiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]].'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    CALL initiate(obj=elemsdForsimplex, &\n        & quad=quad, &\n        & refelem=simplexElem, &\n        & ContinuityType=typeH1, &\n        & InterpolType=typeLagrangeInterpolation)\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nInitiate an instance of [[ElemeshapeData_]] for test function.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    CALL initiate(obj=test, &\n        & quad=quad, &\n        & refelem=refElemForTest, &\n        & ContinuityType=typeH1, &\n        & InterpolType=typeLagrangeInterpolation)\n    CALL Set(obj=test, val=xij, N=elemsdForSimplex%N, &\n        & dNdXi=elemsdForSimplex%dNdXi)\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nInitiate an instance of [[ElemeshapeData_]] for trial function.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"    CALL initiate(obj=trial, &\n        & quad=quad, &\n        & refelem=refElemForTrial, &\n        & ContinuityType=typeH1, &\n        & InterpolType=typeLagrangeInterpolation)\n    CALL Set(obj=trial, val=xij, N=elemsdForSimplex%N, &\n        & dNdXi=elemsdForSimplex%dNdXi)\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! note ""\nLet us now create the mass matrix.'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'    mat=MassMatrix(test=test, trial=trial)\n    CALL Display(mat, "mat:")\n'})}),"\n",(0,n.jsx)(s.p,{children:'??? example "Results"'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"            mat:          \n-------------------------\n0.33333  0.00000  0.66667\n0.00000  0.33333  0.66667\n"})}),"\n",(0,n.jsx)(s.p,{children:'!!! settings "Cleanup"'}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>r,a:()=>l});var n=a(67294);const i={},t=n.createContext(i);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);