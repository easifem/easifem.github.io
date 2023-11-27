"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[83885],{44053:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var n=a(85893),i=a(11151);const t={title:"DiffusionMatrix example 1",author:"Vikas Sharma, Ph.D.",date:"20 Nov 2021",update:"20 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","ElemshapeData/Initiate","DiffusionMatrix"]},l="DiffusionMatrix example 1",r={id:"DiffusionMatrix/DiffusionMatrix_test_1",title:"DiffusionMatrix example 1",description:'!!! note ""',source:"@site/docs/docs-api/DiffusionMatrix/DiffusionMatrix_test_1.md",sourceDirName:"DiffusionMatrix",slug:"/DiffusionMatrix/DiffusionMatrix_test_1",permalink:"/docs-api/DiffusionMatrix/DiffusionMatrix_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/DiffusionMatrix/DiffusionMatrix_test_1.md",tags:[{label:"ReferenceLine",permalink:"/docs-api/tags/reference-line"},{label:"ReferenceLine/Initiate",permalink:"/docs-api/tags/reference-line-initiate"},{label:"QuadraturePoint/Initiate",permalink:"/docs-api/tags/quadrature-point-initiate"},{label:"ElemshapeData/Initiate",permalink:"/docs-api/tags/elemshape-data-initiate"},{label:"DiffusionMatrix",permalink:"/docs-api/tags/diffusion-matrix"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"DiffusionMatrix example 1",author:"Vikas Sharma, Ph.D.",date:"20 Nov 2021",update:"20 Nov 2021",tags:["ReferenceLine","ReferenceLine/Initiate","QuadraturePoint/Initiate","ElemshapeData/Initiate","DiffusionMatrix"]},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/DiffusionMatrix/DiffusionMatrix_"},next:{title:"MassMatrix example 2",permalink:"/docs-api/DiffusionMatrix/DiffusionMatrix_test_2"}},m={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function h(s){const e={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",msubsup:"msubsup",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"diffusionmatrix-example-1",children:"DiffusionMatrix example 1"}),"\n",(0,n.jsxs)(e.p,{children:['!!! note ""\nThis example shows how to use the subroutine called ',(0,n.jsx)(e.code,{children:"DiffusionMatrix"})," to create a Diffusion matrix in space domain."]}),"\n",(0,n.jsx)(e.p,{children:"Here, we want to do the following."}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.msubsup,{children:[(0,n.jsx)(e.mo,{children:"\u222b"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"}),(0,n.jsx)(e.mrow,{})]}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"I"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})]})]}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msup,{children:[(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mi,{children:"J"})]})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u2202"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"x"}),(0,n.jsx)(e.mi,{children:"i"})]})]})]}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"\u03a9"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\int^{}_{\\Omega } \\frac{\\partial N^{I}}{\\partial x_{i}} \\frac{\\partial N^{J}}{\\partial x_{i}} d\\Omega"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"2.4303em",verticalAlign:"-0.9119em"}}),(0,n.jsxs)(e.span,{className:"mop",children:[(0,n.jsx)(e.span,{className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"},children:"\u222b"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.1129em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"\u03a9"})})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.8129em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight"})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.9119em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.5183em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"})})})]})})})})})]})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.836em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.5183em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"})})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord",style:{marginRight:"0.05556em"},children:"\u2202"}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8413em"},children:(0,n.jsxs)(e.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.09618em"},children:"J"})})})]})})})})})]})]})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.836em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"d"}),(0,n.jsx)(e.span,{className:"mord",children:"\u03a9"})]})})]})}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Line2 element"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"[[ElemshapeData_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[QuadraturePoint_]]"}),"\n",(0,n.jsx)(e.li,{children:"[[ReferenceLine_]]"}),"\n"]}),"\n",(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\n    USE easifemBase\n    IMPLICIT NONE\n    TYPE(elemshapedata_) :: test, trial\n    TYPE(quadraturepoint_) :: quad\n    TYPE(referenceline_) :: refelem\n    REAL( DFP ), parameter :: xij(1,2) = RESHAPE([-1, 1], [1, 2])\n    REAL(DFP), ALLOCATABLE :: mat(:, :)\n    integer( I4B ), parameter :: order = 2\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nNow  we create an instance of [[ReferenceLine_]].'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    refelem = referenceline(nsd=1)\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nHere, we create the quadrature points.'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    CALL initiate( obj=quad, refelem=refelem, order=order, &\n        & quadratureType='GaussLegendre' )\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nInitiate an instance of [[ElemshapeData_]]. You can learn more about it from [[ElemshapeData_test]]'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"    CALL initiate(obj=test, &\n        & quad=quad, &\n        & refelem=refelem, &\n        & ContinuityType=typeH1, &\n        & InterpolType=typeLagrangeInterpolation)\n    CALL Set( obj=test, val=xij, N=test%N, dNdXi=test%dNdXi)\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! note ""\nLet us now create the mass matrix.'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:'    mat=DiffusionMatrix(test=test, trial=test)\n    CALL Display(mat, "mat:")\n'})}),"\n",(0,n.jsx)(e.p,{children:'??? example "Results"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-bash",children:"        mat:        \n--------------------\n0.500000  -0.500000\n-0.500000   0.500000\n"})}),"\n",(0,n.jsx)(e.p,{children:'!!! settings "Cleanup"'}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"END PROGRAM main\n"})})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var n=a(67294);const i={},t=n.createContext(i);function l(s){const e=n.useContext(t);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:l(s.components),n.createElement(t.Provider,{value:e},s.children)}}}]);