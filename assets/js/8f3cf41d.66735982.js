"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[25838],{46278:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(85893),i=t(11151);const o={id:"AbstractFE_",aliases:["Structure"],tags:["FiniteElement"],sidebar_position:2},a="Structure",s={id:"AbstractFE/AbstractFE_",title:"Structure",description:"AbstractFE_ is an abstract class for finite elements.",source:"@site/docs/docs-api/AbstractFE/AbstractFE_.md",sourceDirName:"AbstractFE",slug:"/AbstractFE/AbstractFE_",permalink:"/docs-api/AbstractFE/AbstractFE_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractFE/AbstractFE_.md",tags:[{label:"FiniteElement",permalink:"/docs-api/tags/finite-element"}],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{id:"AbstractFE_",aliases:["Structure"],tags:["FiniteElement"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractFE",permalink:"/docs-api/AbstractFE/"},next:{title:"Initiate",permalink:"/docs-api/AbstractFE/Initiate"}},l={},c=[{value:"Interface",id:"interface",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"AbstractFE_"})," is an abstract class for finite elements."]}),"\n",(0,r.jsx)(n.p,{children:"A finite element is defined by"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reference element"}),"\n",(0,r.jsx)(n.li,{children:"Polynomials space"}),"\n",(0,r.jsx)(n.li,{children:"Degree of freedoms"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractFE_\n  PRIVATE\n  CLASS(AbstractRefElement_), POINTER :: refelem => NULL()\n  !! reference element\n  INTEGER(I4B) :: nsd = 0\n  !! spatial dimension of fintie element\n  INTEGER(I4B) :: order = 0\n  !! Isotropic order of polynomial space\n  LOGICAL(LGT) :: isIsotropicOrder = .FALSE.\n  !! True if the order is same in all the direction\n  INTEGER(I4B) :: anisoOrder(3)\n  !! Order in x, y, and z direction\n  LOGICAL(LGT) :: isAnisotropicOrder = .FALSE.\n  !! True if the order is different in different directions\n  INTEGER(I4B) :: edgeOrder(MAX_NO_EDGE) = 0\n  !! Order on each edge of the element\n  INTEGER(I4B) :: tEdgeOrder = 0\n  !! The actual size of edgeOrder\n  LOGICAL(LGT) :: isEdgeOrder = .FALSE.\n  !! True if we set the edge order\n  INTEGER(I4B) :: faceOrder(MAX_NO_FACE)\n  !! Order of approximation on each face of the element\n  INTEGER(I4B) :: tFaceOrder = 0\n  !! The actual size of faceOrder\n  LOGICAL(LGT) :: isFaceOrder = .FALSE.\n  !! True if we set the face order\n  INTEGER(I4B) :: cellOrder(3)\n  !! Order of approximation inside the element\n  INTEGER(I4B) :: tCellOrder = 0\n  !! The actual size of cellOrder\n  LOGICAL(LGT) :: isCellOrder = .FALSE.\n  !! True if we set the cell order\n  INTEGER(I4B) :: feType = 0\n  !! Type of finite element\n  !! Scalar, Vector, Matrix\n  INTEGER(I4B) :: elemType = 0\n  !! Topology type of reference elemtn\n  !! Line, Triangle, Quadrangle, Tetrahedron, Hexahedron,\n  !! Prism, Pyramid\n  INTEGER(I4B) :: ipType = 0\n  !! Type of lattice point (i.e., interpolation point type)\n  INTEGER(I4B) :: dofType(4) = 0\n  !! Currently it is not used\n  !! dofType(1): Type of dof for shape function defined on vertex\n  !! dofType(2): Type of dof for shape functions on edge\n  !! dofType(3): Type of dof for shape functions on face\n  !! dofType(4): Type of dof for shape functions in cell\n  !! These shape functions can take following values:\n  !! - FE_DOF_POINT_EVAL\n  INTEGER(I4B) :: transformType = 0\n  !! Currently it is not used\n  !! Type of Tranformation usef for polynomial space\n  !! - FE_TRANSFORM_IDENTITY\n  TYPE(String) :: baseContinuity0\n  !! String name of base continuity\n  TYPE(String) :: baseInterpol0\n  !! String name of base interpolation\n  !! LagrangePolynomial\n  !! SerendipityPolynomial\n  !! HermitPolynomial\n  !! OrthogonalPolynomial\n  !! HierarchyPolynomial\n  INTEGER(I4B) :: basisType(3)\n  !! Integer code for basis type in x, y, and z direction\n  !! Monomial\n  !! Jacobi\n  !! Legendre\n  !! Chebyshev\n  !! Lobatto\n  !! Ultraspherical\n  TYPE(String) :: refElemDomain\n  !! String name for reference element domain.\n  !! It can take following values:\n  !! - UNIT\n  !! - BIUNIT\n  CLASS(BaseContinuity_), ALLOCATABLE :: baseContinuity\n  !! continuity or conformity of basis defined on reference\n  !! element, following values are allowed\n  !! H1, HCurl, HDiv, DG\n  CLASS(BaseInterpolation_), ALLOCATABLE :: baseInterpol\n  !! Type of basis functions used for interpolation on reference\n  !! element, Following values are allowed\n  !! LagrangeInterpolation\n  !! HermitInterpolation\n  !! SerendipityInterpolation\n  !! HierarchyInterpolation\n  !! OrthogonalInterpolation\nEND TYPE AbstractFE_\n"})})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(67294);const i={},o=r.createContext(i);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);