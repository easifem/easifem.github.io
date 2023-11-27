"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61921],{17158:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(85893),r=i(11151),s=i(52991);const o={title:"Structure",sidebar_position:2,id:"AbstractKernel_",aliases:["AbstractKernel"],tags:["Kernel","easifemKernels"]},a=void 0,l={id:"AbstractKernel/AbstractKernel_",title:"Structure",description:"AbstractKernel_ class is an abstract class for physics kernel.",source:"@site/docs/docs-api/AbstractKernel/AbstractKernel_.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/AbstractKernel_",permalink:"/docs-api/AbstractKernel/AbstractKernel_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/AbstractKernel_.md",tags:[{label:"Kernel",permalink:"/docs-api/tags/kernel"},{label:"easifemKernels",permalink:"/docs-api/tags/easifem-kernels"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{title:"Structure",sidebar_position:2,id:"AbstractKernel_",aliases:["AbstractKernel"],tags:["Kernel","easifemKernels"]},sidebar:"tutorialSidebar",previous:{title:"AbstractKernel",permalink:"/docs-api/AbstractKernel/"},next:{title:"Assemble",permalink:"/docs-api/AbstractKernel/Assemble"}},c={},d=[{value:"Workflow",id:"workflow",level:2},{value:"Structure",id:"structure",level:2},{value:"Methods",id:"methods",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AbstractKernel_"})," class is an abstract class for physics kernel."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Kernel-Workflow",src:i(33963).Z+"",width:"420",height:"1002"})}),"\n",(0,t.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"\nTYPE, ABSTRACT :: AbstractKernel_\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  !! This variable is set to true when we initiate the kernel\n  LOGICAL(LGT) :: isCommonDomain = .TRUE.\n  !! This variable is True when the domain is common \n  !! It is useful in the case of multi-physics simulations.\n  !! In multi-physics applications different fields can have different \n  !! type and order of shape functions. To construct such shape functions \n  !! we may have to use different finite element meshes (hence, domains).\n  !! For example, in the fluid mechanics, we often use Taylor-Hood element \n  !! Which employs different order of interpolation for pressure and velocity.\n  !! NOTE: In most of the application isCommonDomain is TRUE.\n  TYPE(String) :: name\n  !! This is the name of the kernel. It can be anything you want.\n  TYPE(String) :: engine\n  !! Which type of linear solver library (engine) we use to \n  !! solve system of linear equations. We can specify following \n  !! values.\n  !! `NATIVE_SERIAL`\n  !! `NATIVE_OMP`\n  !! `NATIVE_MPI`\n  !! `LIS_SERIAL`\n  !! `LIS_OMP`\n  !! `LIS_MPI`\n  !! `PETSC`\n  INTEGER(I4B) :: coordinateSystem = DEFAULT_coordinateSystem\n  !! Spatial coordinate system type. It can take following values\n  !! `KERNEL_CARTESIAN` for Cartesian coordinates\n  !! `KERNEL_CYLINDRICAL` for Cylinderical coordinates\n  !! `KERNEL_SPHERICAL` for Sperical coordinates\n  !! NOTE: These parameters are defined in the AbstractKernelParam module.\n  INTEGER(I4B) :: maxIter = DEFAULT_maxIter\n  !! Maximum  number of iteration iterations\n  !! This is useful when when we use iterative solvers like \n  !! Newton method, Modified Newton method, or Iterative-predictor solvers.\n  !! NOTE: DEFAULT_maxIter is defined in AbstractKernelParam\n  INTEGER(I4B) :: timeDependency = 0\n  !! This variable indicates if the problem is time dependent or not.\n  !! It can take following values: \n  !! KERNEL_STEADY  or KERNEL_STATIC \n  !! KERNEL_PSEUDOSTATIC \n  !! KERNEL_TRANSIENT or KERNEL_DYNAMIC \n  !! NOTE: These variables are defined in AbstractKernelParam\n  INTEGER(I4B) :: nsd = 0\n  !! Spatial dimension of the problem,\n  INTEGER(I4B) :: nnt = 1\n  !! Number of nodes in time element \n  !! NOTE: This variables is used only in space-time finite element methods \n  INTEGER(I4B) :: tdof = 0\n  !! Total number of degree of freedom per node\n  !! NOTE: This variable is set internally by each kernel while \n  !! setting the kernel.\n  REAL(DFP) :: normRHS = 0.0_DFP\n  !! norm of the right-hand-side vector in the system of linear equations\n  !! NOTE: This variable is used internally\n  REAL(DFP) :: dt = 0.0_DFP\n  !! Time step size used in the pseudostatic and dynamic problems\n  !! Needed in transient case\n  REAL(DFP) :: startTime = 0.0\n  !! Starting time of simulation\n  !! NOTE: This varible is needed in the transient or pseudostatic simulation only.\n  REAL(DFP) :: endTime = 0.0\n  !! Final time of the simulation\n  !! NOTE: This varible is needed in the transient or pseudostatic simulation only.\n  REAL(DFP) :: currentTime = 0.0\n  !! The current time of the simulation\n  !! NOTE: This varible is needed in the transient simulation only.\n  INTEGER(I4B) :: currentTimeStep = 1\n  !! Current time step number of the simulation.\n  !! NOTE: This varible is needed in the transient simulation only.\n  INTEGER(I4B) :: totalTimeStep = 0\n  !! Total number of time step number in the simulation.\n  !! NOTE: This varible is needed in the transient simulation only.\n  REAL(DFP) :: lengthScale = 1.0_DFP\n  !! This variable denotes the length scale of the problem. \n  !! NOTE: This variable is for internal use only.\n  !! INTERNAL:\n  INTEGER(I4B) :: postProcessOpt = 0\n  !! Postprocessing options\n  !! INFO: The actual action depends upon the specific kernels\n  REAL(DFP) :: gravity(3) = 0.0_DFP\n  !! Acceleration vector due to gravity\n  TYPE(IterationData_) :: iterData\n  !! Iteration data\n  !! INFO: The actual action depends upon the specific kernels\n  INTEGER(I4B), ALLOCATABLE :: elemToMatId(:, :)\n  !! This variable denotes the Element number to material mapping.\n  !! For example, `elemToMatID( iel, POROUS_MATERIAL_ID )` denotes the\n  !! porous material type assigned to element number `iel`\n  !! Similarly, `elemToMatID( iel, FLUID_MATERIAL_ID )` denotes\n  !! the fluid material type assigned to element number `iel`.\n  INTEGER(I4B), ALLOCATABLE :: dbcIndx(:)\n  !! Indices where Dirichlet boundary conditions is prescribed\n  !! INFO: This variable is for internal use only. \n  !! It is formed from the Dirichlet boundary conditions.\n  !! INTERNAL:\n  CLASS(AbstractLinSolver_), POINTER :: linsol => NULL()\n  !! A pointer to a Linear iterative solver\n  CLASS(AbstractMatrixField_), POINTER :: tanmat => NULL()\n  !! Global tangent matrix\n  !! nodal coordinates\n  TYPE(ReferenceLine_) :: refTimeElem\n  !! reference element for time domain\n  TYPE(ReferenceLine_) :: refLinTimeElem\n  !! reference element for time domain\n  TYPE(String) :: baseContinuityForSpace\n  !! Continuity of basis function for pressure and velocity field\n  TYPE(String) :: baseInterpolationForSpace\n  !! Interpolation of shape function for pressure and velocity field\n  TYPE(String) :: quadratureTypeForSpace\n  !! Quadrature type for pressure field\n  TYPE(String) :: baseContinuityForTime\n  !! Continuity of basis function for pressure field\n  !! in time domain\n  TYPE(String) :: baseInterpolationForTime\n  !! Interpolation of basis function for pressure field\n  !! in time domain\n  TYPE(String) :: quadratureTypeForTime\n  !! Quadrature type for pressure field in time domain\n  TYPE(String) :: domainFile\n  !! Domain file name\nEND TYPE\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isInitiated"}),", This is set to true if the kernel is initiated"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),", name of the kernel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"engine"}),", Linear solver engine: ",(0,t.jsx)(n.code,{children:"NATIVE_SERIAL"}),", ",(0,t.jsx)(n.code,{children:"NATIVE_OMP"}),", ",(0,t.jsx)(n.code,{children:"NATIVE_MPI"}),", ",(0,t.jsx)(n.code,{children:"LIS_SERIAL"}),", ",(0,t.jsx)(n.code,{children:"LIS_OMP"})," ",(0,t.jsx)(n.code,{children:"LIS_MPI"}),", ",(0,t.jsx)(n.code,{children:"PETSC"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"coordinateSystem"}),", Spatial coordinate type, Spatial dimension of PDE ; Possible options are ",(0,t.jsx)(n.code,{children:"KERNEL_1D_H"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_1D_V"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_2D"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_2D_AXISYM"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_3D"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_2D_PLANE_STRESS"}),", ",(0,t.jsx)(n.code,{children:"KERNEL_2D_PLANE_STRAIN"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"timeDependency"}),", It represents the time dependency of PDE: ",(0,t.jsx)(n.code,{children:"KERNEL_STATIC"}),",",(0,t.jsx)(n.code,{children:"KERNEL_PSEUDOSTATIC"}),",",(0,t.jsx)(n.code,{children:"KERNEL_TRANSIENT"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nsd"}),", Spatial dimension of problem, it will be determined from ",(0,t.jsx)(n.code,{children:"CoordinateSystem"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"nnt"}),", Number of nodes in time domain, required for space-time finite element computation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tdof"}),", total number of degree of freedom per node"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"normRHS"}),", norm of right-hand side vector"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dt"}),", time step size used in the kernel, needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"startTime"}),", present time of simulation needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endTime"}),", Final time of simulation, needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"currentTime"}),", Current time, needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lengthScale"}),", Length scale of the problem"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"currentTimeStep"}),", present time step number, needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"totalTimeStep"}),", total number of time steps, needed in transient case"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"postProcessOpt"}),", post-processing options"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"gravity"}),", Acceleration vector due to gravity"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iterData"}),", contains information about the iteration ; such maximum number of iteration, ",(0,t.jsx)(n.code,{children:"ConvergenceType"}),", ",(0,t.jsx)(n.code,{children:"toleranceIn"}),", and many others, see ",(0,t.jsx)(n.a,{href:"/docs-api/IterationData/IterationData_",children:"IterationData_"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"elemToMatId"}),", element number to material mapping, ",(0,t.jsx)(n.code,{children:"elemToMatID( iel, POROUS_MATERIAL_ID )"})," denotes the porous material type assigned to ",(0,t.jsx)(n.code,{children:"iel"}),". Similarly, ",(0,t.jsx)(n.code,{children:"elemToMatID( iel, FLUID_MATERIAL_ID )"})," denotes the fluid material type assigned to ",(0,t.jsx)(n.code,{children:"iel"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"linsol"}),", Linear iterative solver"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tanmat"}),", Global tangent matrix"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refTimeElem"}),", reference element for time domain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refLinTimeElem"}),", reference element for time domain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseContinuityForSpace"}),", Continuity of basis function for pressure and velocity field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseInterpolationForSpace"}),", Interpolation of shape function for pressure and velocity field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"quadratureTypeForSpace"}),", Quadrature type for pressure field"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseContinuityForTime"}),", Continuity of basis function for pressure field in time domain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"baseInterpolationForTime"}),", Interpolation of basis function for pressure field in time domain"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"quadratureTypeForTime"}),", Quadrature type for pressure field in time domain"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,t.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},52991:(e,n,i)=>{i.d(n,{Z:()=>E});i(67294);var t=i(86010),r=i(53438),s=i(39960),o=i(13919),a=i(95999),l=i(92503);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(85893);function m(e){let{href:n,children:i}=e;return(0,d.jsx)(s.Z,{href:n,className:(0,t.Z)("card padding--lg",c.cardContainer),children:i})}function h(e){let{href:n,icon:i,title:r,description:s}=e;return(0,d.jsxs)(m,{href:n,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,t.Z)("text--truncate",c.cardTitle),title:r,children:[i," ",r]}),s&&(0,d.jsx)("p",{className:(0,t.Z)("text--truncate",c.cardDescription),title:s,children:s})]})}function u(e){let{item:n}=e;const i=(0,r.LM)(n);return i?(0,d.jsx)(h,{href:i,icon:"\ud83d\uddc3\ufe0f",title:n.label,description:n.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n.items.length})}):null}function f(e){let{item:n}=e;const i=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,r.xz)(n.docId??void 0);return(0,d.jsx)(h,{href:n.href,icon:i,title:n.label,description:n.description??t?.description})}function p(e){let{item:n}=e;switch(n.type){case"link":return(0,d.jsx)(f,{item:n});case"category":return(0,d.jsx)(u,{item:n});default:throw new Error(`unknown item type ${JSON.stringify(n)}`)}}function T(e){let{className:n}=e;const i=(0,r.jA)();return(0,d.jsx)(E,{items:i.items,className:n})}function E(e){const{items:n,className:i}=e;if(!n)return(0,d.jsx)(T,{...e});const s=(0,r.MN)(n);return(0,d.jsx)("section",{className:(0,t.Z)("row",i),children:s.map(((e,n)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},n)))})}},33963:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Kernel-Workflow-73897c74ab0e1d90b7f6e95bb2490aad.svg"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(67294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);