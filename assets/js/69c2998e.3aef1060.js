"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13634],{22274:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=s(85893),t=s(11151);const l={},r="GetUnitNormal",i={id:"ElemshapeData/GetUnitNormal",title:"GetUnitNormal",description:"Interface1",source:"@site/docs/docs-api/ElemshapeData/GetUnitNormal.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/GetUnitNormal",permalink:"/docs-api/ElemshapeData/GetUnitNormal",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/GetUnitNormal.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSpatialGradient",permalink:"/docs-api/ElemshapeData/GetSpatialGradient"},next:{title:"H1Curl_Hermit",permalink:"/docs-api/ElemshapeData/H1Curl_Hermit"}},c={},m=[{value:"Interface1",id:"interface1",level:2},{value:"Interface2",id:"interface2",level:2},{value:"Interface3",id:"interface3",level:2}];function d(e){const a={annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"getunitnormal",children:"GetUnitNormal"}),"\n",(0,n.jsx)(a.h2,{id:"interface1",children:"Interface1"}),"\n",(0,n.jsx)(a.p,{children:"In the stabilized FEM we often need the following unit vector."}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsx)(a.mrow,{children:(0,n.jsxs)(a.mfrac,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2207"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mi,{children:"\u03d5"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"})]}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2207"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mi,{children:"\u03d5"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2223"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"})]})]})}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\frac{\\nabla \\vert \\phi \\vert}{\\Vert \\nabla \\vert \\phi \\vert \\Vert}"})]})})}),(0,n.jsx)(a.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(a.span,{className:"mfrac",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsxs)(a.span,{className:"vlist",style:{height:"1.427em"},children:[(0,n.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"\u2225\u2207\u2223"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"\u03d5"}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223\u2225"})]})]}),(0,n.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"\u2207\u2223"}),(0,n.jsx)(a.span,{className:"mord mathnormal",children:"\u03d5"}),(0,n.jsx)(a.span,{className:"mord",children:"\u2223"})]})]})]}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.936em"},children:(0,n.jsx)(a.span,{})})})]})}),(0,n.jsx)(a.span,{className:"mclose nulldelimiter"})]})]})})]})}),"\n",(0,n.jsx)(a.p,{children:"Fortran interface:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)\n    !! unit vector defined over quadrature points\n    REAL(DFP), INTENT(IN) :: val(:)\n    !! spatial nodal values of scalar\n  END SUBROUTINE getUnitNormal\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In above subroutine ",(0,n.jsx)(a.code,{children:"obj"})," can be an instance of [[STElemshapeData_]]."]}),"\n",(0,n.jsx)(a.h2,{id:"interface2",children:"Interface2"}),"\n",(0,n.jsx)(a.p,{children:"If we need to compute the following the direction for a vector field, that is:"}),"\n",(0,n.jsx)(a.span,{className:"katex-display",children:(0,n.jsxs)(a.span,{className:"katex",children:[(0,n.jsx)(a.span,{className:"katex-mathml",children:(0,n.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(a.semantics,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"bold",children:"r"}),(0,n.jsx)(a.mo,{children:"="}),(0,n.jsxs)(a.mfrac,{children:[(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2207"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"}),(0,n.jsx)(a.mi,{mathvariant:"bold",children:"v"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"})]}),(0,n.jsxs)(a.mrow,{children:[(0,n.jsx)(a.mo,{fence:"true",children:"\u2223"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2207"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"}),(0,n.jsx)(a.mi,{mathvariant:"bold",children:"v"}),(0,n.jsx)(a.mi,{mathvariant:"normal",children:"\u2225"}),(0,n.jsx)(a.mo,{fence:"true",children:"\u2223"})]})]})]}),(0,n.jsx)(a.annotation,{encoding:"application/x-tex",children:"{\\bf r}=\\frac{\\nabla\\Vert{\\bf v}\\Vert}{\\left|\\nabla\\Vert{\\bf v}\\Vert\\right|}"})]})})}),(0,n.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"0.4444em"}}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord mathbf",children:"r"})})}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(a.span,{className:"mrel",children:"="}),(0,n.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(a.span,{className:"base",children:[(0,n.jsx)(a.span,{className:"strut",style:{height:"2.363em",verticalAlign:"-0.936em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(a.span,{className:"mfrac",children:(0,n.jsxs)(a.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(a.span,{className:"vlist-r",children:[(0,n.jsxs)(a.span,{className:"vlist",style:{height:"1.427em"},children:[(0,n.jsxs)(a.span,{style:{top:"-2.314em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsxs)(a.span,{className:"minner",children:[(0,n.jsx)(a.span,{className:"mopen delimcenter",style:{top:"0em"},children:"\u2223"}),(0,n.jsx)(a.span,{className:"mord",children:"\u2207\u2225"}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"v"})})}),(0,n.jsx)(a.span,{className:"mord",children:"\u2225"}),(0,n.jsx)(a.span,{className:"mclose delimcenter",style:{top:"0em"},children:"\u2223"})]})})]}),(0,n.jsxs)(a.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(a.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(a.span,{style:{top:"-3.677em"},children:[(0,n.jsx)(a.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsxs)(a.span,{className:"mord",children:[(0,n.jsx)(a.span,{className:"mord",children:"\u2207\u2225"}),(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord",children:(0,n.jsx)(a.span,{className:"mord mathbf",style:{marginRight:"0.01597em"},children:"v"})})}),(0,n.jsx)(a.span,{className:"mord",children:"\u2225"})]})]})]}),(0,n.jsx)(a.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(a.span,{className:"vlist-r",children:(0,n.jsx)(a.span,{className:"vlist",style:{height:"0.936em"},children:(0,n.jsx)(a.span,{})})})]})}),(0,n.jsx)(a.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,n.jsx)(a.p,{children:"Fortran interface:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)\n    !! unit vector defined over quadrature points\n    REAL(DFP), INTENT(IN) :: val(:, :)\n    !! spatial nodal values of velocity\n  END SUBROUTINE getUnitNormal\n"})}),"\n",(0,n.jsxs)(a.p,{children:['!!! note ""\nIn interface-2 ',(0,n.jsx)(a.code,{children:"obj"})," can be an instance of [[STElemshapeData_]]."]}),"\n",(0,n.jsx)(a.h2,{id:"interface3",children:"Interface3"}),"\n",(0,n.jsx)(a.p,{children:"We can use [[FEVariable_]] for calculating the unit normal directions in a coherent manner. To this end, following interface can be employed:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE getUnitNormal(obj, R, val)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n    REAL(DFP), ALLOCATABLE, INTENT(INOUT) :: R(:, :)\n    !! unit vector defined over quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n    !! it can be scalar or vector fe variable\n  END SUBROUTINE getUnitNormal\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In above subroutine ",(0,n.jsx)(a.code,{children:"obj"})," can be an instance of [[STElemshapeData_]]."]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>i,a:()=>r});var n=s(67294);const t={},l=n.createContext(t);function r(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);