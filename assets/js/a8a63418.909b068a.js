"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71854,25838],{77963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),r=n(11151);const a={id:"AbstractFE_",aliases:["Structure"],tags:["FiniteElement"],sidebar_position:2},s="Structure",o={id:"AbstractFE/AbstractFE_",title:"Structure",description:"AbstractFE_ is an abstract class for finite elements.",source:"@site/docs/docs-api/AbstractFE/AbstractFE_.md",sourceDirName:"AbstractFE",slug:"/AbstractFE/AbstractFE_",permalink:"/docs-api/AbstractFE/AbstractFE_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractFE/AbstractFE_.md",tags:[{label:"FiniteElement",permalink:"/docs-api/tags/finite-element"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{id:"AbstractFE_",aliases:["Structure"],tags:["FiniteElement"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractFE",permalink:"/docs-api/AbstractFE/"},next:{title:"Initiate",permalink:"/docs-api/AbstractFE/Initiate"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"AbstractFE_"})," is an abstract class for finite elements."]}),"\n",(0,i.jsx)(t.p,{children:"A finite element is defined by"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Reference element"}),"\n",(0,i.jsx)(t.li,{children:"Polynomials space"}),"\n",(0,i.jsx)(t.li,{children:"Degree of freedoms"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractFE_\n  PRIVATE\n  CLASS(AbstractRefElement_), POINTER :: refelem => NULL()\n  !! reference element\n  INTEGER(I4B) :: nsd = 0\n  !! spatial dimension of fintie element\n  INTEGER(I4B) :: order = 0\n  !! Isotropic order of polynomial space\n  LOGICAL(LGT) :: isIsotropicOrder = .FALSE.\n  !! True if the order is same in all the direction\n  INTEGER(I4B) :: anisoOrder(3)\n  !! Order in x, y, and z direction\n  LOGICAL(LGT) :: isAnisotropicOrder = .FALSE.\n  !! True if the order is different in different directions\n  INTEGER(I4B) :: edgeOrder(MAX_NO_EDGE) = 0\n  !! Order on each edge of the element\n  INTEGER(I4B) :: tEdgeOrder = 0\n  !! The actual size of edgeOrder\n  LOGICAL(LGT) :: isEdgeOrder = .FALSE.\n  !! True if we set the edge order\n  INTEGER(I4B) :: faceOrder(MAX_NO_FACE)\n  !! Order of approximation on each face of the element\n  INTEGER(I4B) :: tFaceOrder = 0\n  !! The actual size of faceOrder\n  LOGICAL(LGT) :: isFaceOrder = .FALSE.\n  !! True if we set the face order\n  INTEGER(I4B) :: cellOrder(3)\n  !! Order of approximation inside the element\n  INTEGER(I4B) :: tCellOrder = 0\n  !! The actual size of cellOrder\n  LOGICAL(LGT) :: isCellOrder = .FALSE.\n  !! True if we set the cell order\n  INTEGER(I4B) :: feType = 0\n  !! Type of finite element\n  !! Scalar, Vector, Matrix\n  INTEGER(I4B) :: elemType = 0\n  !! Topology type of reference elemtn\n  !! Line, Triangle, Quadrangle, Tetrahedron, Hexahedron,\n  !! Prism, Pyramid\n  INTEGER(I4B) :: ipType = 0\n  !! Type of lattice point (i.e., interpolation point type)\n  INTEGER(I4B) :: dofType(4) = 0\n  !! Currently it is not used\n  !! dofType(1): Type of dof for shape function defined on vertex\n  !! dofType(2): Type of dof for shape functions on edge\n  !! dofType(3): Type of dof for shape functions on face\n  !! dofType(4): Type of dof for shape functions in cell\n  !! These shape functions can take following values:\n  !! - FE_DOF_POINT_EVAL\n  INTEGER(I4B) :: transformType = 0\n  !! Currently it is not used\n  !! Type of Tranformation usef for polynomial space\n  !! - FE_TRANSFORM_IDENTITY\n  TYPE(String) :: baseContinuity0\n  !! String name of base continuity\n  TYPE(String) :: baseInterpol0\n  !! String name of base interpolation\n  !! LagrangePolynomial\n  !! SerendipityPolynomial\n  !! HermitPolynomial\n  !! OrthogonalPolynomial\n  !! HierarchyPolynomial\n  INTEGER(I4B) :: basisType(3)\n  !! Integer code for basis type in x, y, and z direction\n  !! Monomial\n  !! Jacobi\n  !! Legendre\n  !! Chebyshev\n  !! Lobatto\n  !! Ultraspherical\n  TYPE(String) :: refElemDomain\n  !! String name for reference element domain.\n  !! It can take following values:\n  !! - UNIT\n  !! - BIUNIT\n  CLASS(BaseContinuity_), ALLOCATABLE :: baseContinuity\n  !! continuity or conformity of basis defined on reference\n  !! element, following values are allowed\n  !! H1, HCurl, HDiv, DG\n  CLASS(BaseInterpolation_), ALLOCATABLE :: baseInterpol\n  !! Type of basis functions used for interpolation on reference\n  !! element, Following values are allowed\n  !! LagrangeInterpolation\n  !! HermitInterpolation\n  !! SerendipityInterpolation\n  !! HierarchyInterpolation\n  !! OrthogonalInterpolation\nEND TYPE AbstractFE_\n"})})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},54936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>f});var i=n(85893),r=n(11151),a=n(77963),s=n(52991);const o={id:"index",aliases:["AbstractFE"],tags:["finiteElement","polynomials","basis","shapeFunctions","shape-functions"],category:["FiniteElement"],date:1692028800,docs:"done",extpkgs:"none",sidebar_position:1,status:"stable",update:1692028800},c="AbstractFE",l={id:"AbstractFE/index",title:"AbstractFE",description:"Methods",source:"@site/docs/docs-api/AbstractFE/index.md",sourceDirName:"AbstractFE",slug:"/AbstractFE/",permalink:"/docs-api/AbstractFE/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractFE/index.md",tags:[{label:"finiteElement",permalink:"/docs-api/tags/finite-element"},{label:"polynomials",permalink:"/docs-api/tags/polynomials"},{label:"basis",permalink:"/docs-api/tags/basis"},{label:"shapeFunctions",permalink:"/docs-api/tags/shape-functions"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{id:"index",aliases:["AbstractFE"],tags:["finiteElement","polynomials","basis","shapeFunctions","shape-functions"],category:["FiniteElement"],date:1692028800,docs:"done",extpkgs:"none",sidebar_position:1,status:"stable",update:1692028800},sidebar:"tutorialSidebar",previous:{title:"AbstractBC\\_",permalink:"/docs-api/AbstractBasis/AbstractBasis_"},next:{title:"Structure",permalink:"/docs-api/AbstractFE/AbstractFE_"}},d={},f=[{value:"Methods",id:"methods",level:2}];function p(e){const t={h1:"h1",h2:"h2",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"abstractfe",children:"AbstractFE"}),"\n","\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,i.jsx)(s.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>b});n(67294);var i=n(86010),r=n(53438),a=n(39960),s=n(13919),o=n(95999),c=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function f(e){let{href:t,children:n}=e;return(0,d.jsx)(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:r,description:a}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(c.Z,{as:"h2",className:(0,i.Z)("text--truncate",l.cardTitle),title:r,children:[n," ",r]}),a&&(0,d.jsx)("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:a,children:a})]})}function m(e){let{item:t}=e;const n=(0,r.LM)(t);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(u,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function E(e){let{className:t}=e;const n=(0,r.jA)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(E,{...e});const a=(0,r.MN)(t);return(0,d.jsx)("section",{className:(0,i.Z)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);