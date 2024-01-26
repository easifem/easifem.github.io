"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[3755],{41222:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>N,contentTitle:()=>T,default:()=>f,frontMatter:()=>u,metadata:()=>y,toc:()=>h});var r=o(85893),i=o(11151),t=o(74866),l=o(85162);function a(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components},{Details:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifembase\nUSE easifemclasses\nIMPLICIT NONE\nTYPE(ReferenceHexahedron_) :: obj\nREAL(dfp) :: avar\nINTEGER(i4b), PARAMETER :: nsd = 3_I4B\n\nCALL Initiate(obj=obj, nsd=nsd)\nCALL Display(obj, 'Obj : ')\n\nEND PROGRAM main\n"})}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"Obj : \n# ElemType : Hexahedron8\n# XiDimension :: 3\n# NSD : 3\n# Order : 1\n# EntityCounts(0) : 8\n# EntityCounts(1) : 12\n# EntityCounts(2) : 6\n# EntityCounts(3) : 1\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 3 ) : \n--------------\n    1.00000   \n    1.00000   \n   -1.00000   \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n   -1.00000   \n# Node( 5 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    1.00000   \n# Node( 6 ) : \n--------------\n    1.00000   \n   -1.00000   \n    1.00000   \n# Node( 7 ) : \n--------------\n   1.00000    \n   1.00000    \n   1.00000    \n# Node( 8 ) : \n--------------\n   -1.00000   \n    1.00000   \n    1.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    5     \n# Topology( 6 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    6     \n# Topology( 7 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    7     \n# Topology( 8 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    8     \n# Topology( 9 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 10 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    4     \n# Topology( 11 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    5     \n# Topology( 12 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 13 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    6     \n# Topology( 14 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 15 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    7     \n# Topology( 16 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    8     \n# Topology( 17 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    6     \n# Topology( 18 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    8     \n# Topology( 19 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    6     \n    7     \n# Topology( 20 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    7     \n    8     \n# Topology( 21 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    4     \n    3     \n    2     \n# Topology( 22 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    5     \n    6     \n    7     \n    8     \n# Topology( 23 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    5     \n    8     \n    4     \n# Topology( 24 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    2     \n    3     \n    7     \n    6     \n# Topology( 25 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    3     \n    4     \n    8     \n    7     \n# Topology( 26 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    6     \n    5     \n# Topology( 27 ) : \n# ElemType : Hexahedron8\n# XiDim : 3\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n    5     \n    6     \n    7     \n    8     \n"})})})]})]})}function s(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}function p(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components},{Details:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifembase\nUSE easifemclasses\nIMPLICIT NONE\nTYPE(ReferenceHexahedron_) :: obj\nREAL(dfp) :: avar\nINTEGER(i4b), PARAMETER :: nsd = 3_I4B\n\nobj = ReferenceHexahedron(nsd=nsd)\nCALL Display(obj, 'Obj : ')\n\nEND PROGRAM main\n"})}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"Obj : \n# ElemType : Hexahedron8\n# XiDimension :: 3\n# NSD : 3\n# Order : 1\n# EntityCounts(0) : 8\n# EntityCounts(1) : 12\n# EntityCounts(2) : 6\n# EntityCounts(3) : 1\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 3 ) : \n--------------\n    1.00000   \n    1.00000   \n   -1.00000   \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n   -1.00000   \n# Node( 5 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    1.00000   \n# Node( 6 ) : \n--------------\n    1.00000   \n   -1.00000   \n    1.00000   \n# Node( 7 ) : \n--------------\n   1.00000    \n   1.00000    \n   1.00000    \n# Node( 8 ) : \n--------------\n   -1.00000   \n    1.00000   \n    1.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    5     \n# Topology( 6 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    6     \n# Topology( 7 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    7     \n# Topology( 8 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    8     \n# Topology( 9 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 10 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    4     \n# Topology( 11 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    5     \n# Topology( 12 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 13 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    6     \n# Topology( 14 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 15 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    7     \n# Topology( 16 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    8     \n# Topology( 17 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    6     \n# Topology( 18 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    8     \n# Topology( 19 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    6     \n    7     \n# Topology( 20 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    7     \n    8     \n# Topology( 21 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    4     \n    3     \n    2     \n# Topology( 22 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    5     \n    6     \n    7     \n    8     \n# Topology( 23 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    5     \n    8     \n    4     \n# Topology( 24 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    2     \n    3     \n    7     \n    6     \n# Topology( 25 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    3     \n    4     \n    8     \n    7     \n# Topology( 26 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    6     \n    5     \n# Topology( 27 ) : \n# ElemType : Hexahedron8\n# XiDim : 3\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n    5     \n    6     \n    7     \n    8     \n"})})})]})]})}function c(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(p,{...n})}):p(n)}function d(n){const e={code:"code",pre:"pre",...(0,i.a)(),...n.components},{Details:o}=e;return o||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"PROGRAM main\nUSE easifembase\nUSE easifemclasses\nIMPLICIT NONE\nCLASS(ReferenceElement_), pointer :: obj\nREAL(dfp) :: avar\nINTEGER(i4b), PARAMETER :: nsd = 3_I4B\n\nobj => ReferenceHexahedron_Pointer(nsd=nsd)\nCALL Display(obj, 'Obj : ')\n\nEND PROGRAM main\n"})}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"See results"}),(0,r.jsx)("div",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"Obj : \n# ElemType : Hexahedron8\n# XiDimension :: 3\n# NSD : 3\n# Order : 1\n# EntityCounts(0) : 8\n# EntityCounts(1) : 12\n# EntityCounts(2) : 6\n# EntityCounts(3) : 1\n# Node( 1 ) : \n--------------\n   -1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 2 ) : \n--------------\n    1.00000   \n   -1.00000   \n   -1.00000   \n# Node( 3 ) : \n--------------\n    1.00000   \n    1.00000   \n   -1.00000   \n# Node( 4 ) : \n--------------\n   -1.00000   \n    1.00000   \n   -1.00000   \n# Node( 5 ) : \n--------------\n   -1.00000   \n   -1.00000   \n    1.00000   \n# Node( 6 ) : \n--------------\n    1.00000   \n   -1.00000   \n    1.00000   \n# Node( 7 ) : \n--------------\n   1.00000    \n   1.00000    \n   1.00000    \n# Node( 8 ) : \n--------------\n   -1.00000   \n    1.00000   \n    1.00000   \n# Topology( 1 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    1     \n# Topology( 2 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    2     \n# Topology( 3 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    3     \n# Topology( 4 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    4     \n# Topology( 5 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    5     \n# Topology( 6 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    6     \n# Topology( 7 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    7     \n# Topology( 8 ) : \n# ElemType : Point1\n# XiDim : 0\n# Nptrs : \n----------\n    8     \n# Topology( 9 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    2     \n# Topology( 10 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    4     \n# Topology( 11 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    1     \n    5     \n# Topology( 12 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    3     \n# Topology( 13 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    2     \n    6     \n# Topology( 14 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    4     \n# Topology( 15 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    3     \n    7     \n# Topology( 16 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    4     \n    8     \n# Topology( 17 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    6     \n# Topology( 18 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    5     \n    8     \n# Topology( 19 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    6     \n    7     \n# Topology( 20 ) : \n# ElemType : Line2\n# XiDim : 1\n# Nptrs : \n----------\n    7     \n    8     \n# Topology( 21 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    4     \n    3     \n    2     \n# Topology( 22 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    5     \n    6     \n    7     \n    8     \n# Topology( 23 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    5     \n    8     \n    4     \n# Topology( 24 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    2     \n    3     \n    7     \n    6     \n# Topology( 25 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    3     \n    4     \n    8     \n    7     \n# Topology( 26 ) : \n# ElemType : Quadrangle4\n# XiDim : 2\n# Nptrs : \n----------\n    1     \n    2     \n    6     \n    5     \n# Topology( 27 ) : \n# ElemType : Hexahedron8\n# XiDim : 3\n# Nptrs : \n----------\n    1     \n    2     \n    3     \n    4     \n    5     \n    6     \n    7     \n    8     \n"})})})]})]})}function m(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}const u={},T="Initiate",y={id:"ReferenceHexahedron/Initiate",title:"Initiate",description:"This subroutine initiate an instance of ReferenceHexahedron.",source:"@site/docs/docs-api/ReferenceHexahedron/Initiate.md",sourceDirName:"ReferenceHexahedron",slug:"/ReferenceHexahedron/Initiate",permalink:"/docs-api/ReferenceHexahedron/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/ReferenceHexahedron/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hexahedron_Quality",permalink:"/docs-api/ReferenceHexahedron/Hexahedron_Quality"},next:{title:"\ud805\uddd5Measure_Simplex_Hexahedron",permalink:"/docs-api/ReferenceHexahedron/Measure_Simplex_Hexahedron"}},N={},h=[{value:"Interface",id:"interface",level:2},{value:"Interface 2 (ReferenceHexahedron)",id:"interface-2-referencehexahedron",level:2},{value:"Interface 3 (ReferenceHexahedron_Pointer)",id:"interface-3-referencehexahedron_pointer",level:2}];function E(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"initiate",children:"Initiate"}),"\n",(0,r.jsx)(e.p,{children:"This subroutine initiate an instance of ReferenceHexahedron."}),"\n",(0,r.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsxs)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE Initiate\n  MODULE PURE SUBROUTINE initiate_ref_Hexahedron(obj, NSD, xij)\n    CLASS(ReferenceHexahedron_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n  END SUBROUTINE initiate_ref_Hexahedron\nEND INTERFACE Initiate\n"})}),(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{children:(0,r.jsx)(e.code,{children:"NSD"})}),(0,r.jsx)(e.p,{children:"number of spatial dimension, it should be 3."})]}),(0,r.jsxs)(e.admonition,{type:"info",children:[(0,r.jsx)(e.mdxAdmonitionTitle,{children:(0,r.jsx)(e.code,{children:"xij"})}),(0,r.jsx)(e.p,{children:"xij is the nodal coordinate of hexahedron."}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"total number of rows in xij should be 3 as each row denotes a spatial dimension."}),"\n",(0,r.jsx)(e.li,{children:"total number of columns in xij should be 8 as each column denotes the node number."}),"\n"]})]})]}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(s,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(e.h2,{id:"interface-2-referencehexahedron",children:"Interface 2 (ReferenceHexahedron)"}),"\n",(0,r.jsxs)(e.p,{children:["We can use ",(0,r.jsx)(e.code,{children:"ReferenceHexahedron"})," function to construct an instance of ReferenceHexahedron."]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE ReferenceHexahedron\n  MODULE PURE FUNCTION reference_Hexahedron(NSD, xij) RESULT(obj)\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n    TYPE(ReferenceHexahedron_) :: obj\n  END FUNCTION reference_Hexahedron\nEND INTERFACE ReferenceHexahedron\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(c,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]}),"\n",(0,r.jsx)(e.h2,{id:"interface-3-referencehexahedron_pointer",children:"Interface 3 (ReferenceHexahedron_Pointer)"}),"\n",(0,r.jsxs)(e.p,{children:["The function ",(0,r.jsx)(e.code,{children:"ReferenceHexahedron_Pointer"})," returns the pointer to newly created instance of ReferenceHexahedron."]}),"\n",(0,r.jsxs)(t.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"INTERFACE ReferenceHexahedron_Pointer\n  MODULE PURE FUNCTION reference_Hexahedron_Pointer(NSD, xij) RESULT(obj)\n    INTEGER(I4B), INTENT(IN) :: NSD\n    REAL(DFP), INTENT(IN), OPTIONAL :: xij(:, :)\n    CLASS(ReferenceHexahedron_), POINTER :: obj\n  END FUNCTION reference_Hexahedron_Pointer\nEND INTERFACE ReferenceHexahedron_Pointer\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(m,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function f(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(E,{...n})}):E(n)}},85162:(n,e,o)=>{o.d(e,{Z:()=>l});o(67294);var r=o(86010);const i={tabItem:"tabItem_Ymn6"};var t=o(85893);function l(n){let{children:e,hidden:o,className:l}=n;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:o,children:e})}},74866:(n,e,o)=>{o.d(e,{Z:()=>D});var r=o(67294),i=o(86010),t=o(12466),l=o(16550),a=o(20469),s=o(91980),p=o(67392),c=o(50012);function d(n){return r.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,r.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(n){const{values:e,children:o}=n;return(0,r.useMemo)((()=>{const n=e??function(n){return d(n).map((n=>{let{props:{value:e,label:o,attributes:r,default:i}}=n;return{value:e,label:o,attributes:r,default:i}}))}(o);return function(n){const e=(0,p.l)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,o])}function u(n){let{value:e,tabValues:o}=n;return o.some((n=>n.value===e))}function T(n){let{queryString:e=!1,groupId:o}=n;const i=(0,l.k6)(),t=function(n){let{queryString:e=!1,groupId:o}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:e,groupId:o});return[(0,s._X)(t),(0,r.useCallback)((n=>{if(!t)return;const e=new URLSearchParams(i.location.search);e.set(t,n),i.replace({...i.location,search:e.toString()})}),[t,i])]}function y(n){const{defaultValue:e,queryString:o=!1,groupId:i}=n,t=m(n),[l,s]=(0,r.useState)((()=>function(n){let{defaultValue:e,tabValues:o}=n;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${o.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=o.find((n=>n.default))??o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:t}))),[p,d]=T({queryString:o,groupId:i}),[y,N]=function(n){let{groupId:e}=n;const o=function(n){return n?`docusaurus.tab.${n}`:null}(e),[i,t]=(0,c.Nk)(o);return[i,(0,r.useCallback)((n=>{o&&t.set(n)}),[o,t])]}({groupId:i}),h=(()=>{const n=p??y;return u({value:n,tabValues:t})?n:null})();(0,a.Z)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((n=>{if(!u({value:n,tabValues:t}))throw new Error(`Can't select invalid tab value=${n}`);s(n),d(n),N(n)}),[d,N,t]),tabValues:t}}var N=o(72389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=o(85893);function f(n){let{className:e,block:o,selectedValue:r,selectValue:l,tabValues:a}=n;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,t.o5)(),c=n=>{const e=n.currentTarget,o=s.indexOf(e),i=a[o].value;i!==r&&(p(e),l(i))},d=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const o=s.indexOf(n.currentTarget)+1;e=s[o]??s[0];break}case"ArrowLeft":{const o=s.indexOf(n.currentTarget)-1;e=s[o]??s[s.length-1];break}}e?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},e),children:a.map((n=>{let{value:e,label:o,attributes:t}=n;return(0,E.jsx)("li",{role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:n=>s.push(n),onKeyDown:d,onClick:c,...t,className:(0,i.Z)("tabs__item",h.tabItem,t?.className,{"tabs__item--active":r===e}),children:o??e},e)}))})}function x(n){let{lazy:e,children:o,selectedValue:i}=n;const t=(Array.isArray(o)?o:[o]).filter(Boolean);if(e){const n=t.find((n=>n.props.value===i));return n?(0,r.cloneElement)(n,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:t.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==i})))})}function g(n){const e=y(n);return(0,E.jsxs)("div",{className:(0,i.Z)("tabs-container",h.tabList),children:[(0,E.jsx)(f,{...n,...e}),(0,E.jsx)(x,{...n,...e})]})}function D(n){const e=(0,N.Z)();return(0,E.jsx)(g,{...n,children:d(n.children)},String(e))}},11151:(n,e,o)=>{o.d(e,{Z:()=>a,a:()=>l});var r=o(67294);const i={},t=r.createContext(i);function l(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);