"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61921],{46742:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var t=i(85893),r=i(11151);const o={sidebar_position:2},a="Structure",s={id:"AbstractKernel/AbstractKernel_",title:"Structure",description:"AbstractKernel_ class is an abstract class for physics kernel.",source:"@site/docs/docs-api/AbstractKernel/AbstractKernel_.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/AbstractKernel_",permalink:"/docs-api/AbstractKernel/AbstractKernel_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractKernel/AbstractKernel_.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AbstractKernel",permalink:"/docs-api/AbstractKernel/"},next:{title:"Assemble",permalink:"/docs-api/AbstractKernel/Assemble"}},l={},d=[{value:"Workflow",id:"workflow",level:2},{value:"<code>isInitiated</code>",id:"isinitiated",level:3},{value:"<code>isCommonDomain</code>",id:"iscommondomain",level:3},{value:"<code>name</code>",id:"name",level:3},{value:"<code>engine</code>",id:"engine",level:3},{value:"<code>coordinateSystem</code>",id:"coordinatesystem",level:3},{value:"<code>timeDependency</code>",id:"timedependency",level:3},{value:"<code>nsd</code>",id:"nsd",level:3},{value:"<code>nnt</code>",id:"nnt",level:3},{value:"<code>tdof</code>",id:"tdof",level:3},{value:"<code>normRHS</code>",id:"normrhs",level:3},{value:"<code>dt</code>",id:"dt",level:3},{value:"<code>startTime</code>",id:"starttime",level:3},{value:"<code>endTime</code>",id:"endtime",level:3},{value:"<code>currentTime</code>",id:"currenttime",level:3},{value:"<code>lengthScale</code>",id:"lengthscale",level:3},{value:"<code>currentTimeStep</code>",id:"currenttimestep",level:3},{value:"<code>totalTimeStep</code>",id:"totaltimestep",level:3},{value:"<code>postProcessOpt</code>",id:"postprocessopt",level:3},{value:"<code>gravity</code>",id:"gravity",level:3},{value:"<code>iterData</code>",id:"iterdata",level:3},{value:"<code>elemToMatId</code>",id:"elemtomatid",level:3},{value:"<code>linsol</code>",id:"linsol",level:3},{value:"<code>tanmat</code>",id:"tanmat",level:3},{value:"<code>refTimeElem</code>",id:"reftimeelem",level:3},{value:"<code>refLinTimeElem</code>",id:"reflintimeelem",level:3},{value:"<code>baseContinuityForSpace</code>",id:"basecontinuityforspace",level:3},{value:"<code>baseInterpolationForSpace</code>",id:"baseinterpolationforspace",level:3},{value:"<code>quadratureTypeForSpace</code>",id:"quadraturetypeforspace",level:3},{value:"<code>baseContinuityForTime</code>",id:"basecontinuityfortime",level:3},{value:"<code>baseInterpolationForTime</code>",id:"baseinterpolationfortime",level:3},{value:"<code>quadratureTypeForTime</code>",id:"quadraturetypefortime",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"structure",children:"Structure"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"AbstractKernel_"})," class is an abstract class for physics kernel."]}),"\n",(0,t.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Kernel-Workflow",src:i(33963).Z+"",width:"420",height:"1002"})}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Click here to see the structure"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"TYPE, ABSTRACT :: AbstractKernel_\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  !! This variable is Set to true when we initiate the kernel\n  LOGICAL(LGT) :: isCommonDomain = .TRUE.\n  !! This variable is True when the domain is common\n  !! It is useful in the case of multi-physics simulations.\n  !! In multi-physics applications different fields can have different\n  !! type and order of shape functions. To construct such shape functions\n  !! we may have to use different finite element meshes (hence, domains).\n  !! For example, in the fluid mechanics, we often use Taylor-Hood element\n  !! Which employs different order of interpolation for pressure and velocity.\n  !! NOTE: In most of the application isCommonDomain is TRUE.\n  TYPE(String) :: name\n  !! This is the name of the kernel. It can be anything you want.\n  TYPE(String) :: engine\n  !! Which type of linear solver library (engine) we use to\n  !! solve system of linear equations. We can specify following\n  !! values.\n  !! `NATIVE_SERIAL`\n  !! `NATIVE_OMP`\n  !! `NATIVE_MPI`\n  !! `LIS_SERIAL`\n  !! `LIS_OMP`\n  !! `LIS_MPI`\n  !! `PETSC`\n  INTEGER(I4B) :: coordinateSystem = DEFAULT_coordinateSystem\n  !! Spatial coordinate system type. It can take following values\n  !! `KERNEL_CARTESIAN` for Cartesian coordinates\n  !! `KERNEL_CYLINDRICAL` for Cylinderical coordinates\n  !! `KERNEL_SPHERICAL` for Sperical coordinates\n  !! NOTE: These parameters are defined in the AbstractKernelParam module.\n  INTEGER(I4B) :: maxIter = DEFAULT_maxIter\n  !! Maximum  number of iteration iterations\n  !! This is useful when when we use iterative solvers like\n  !! Newton method, Modified Newton method, or Iterative-predictor solvers.\n  !! NOTE: DEFAULT_maxIter is defined in AbstractKernelParam\n  INTEGER(I4B) :: timeDependency = 0\n  !! This variable indicates if the problem is time dependent or not.\n  !! It can take following values:\n  !! KERNEL_STEADY  or KERNEL_STATIC\n  !! KERNEL_PSEUDOSTATIC\n  !! KERNEL_TRANSIENT or KERNEL_DYNAMIC\n  !! NOTE: These variables are defined in AbstractKernelParam\n  INTEGER(I4B) :: nsd = 0\n  !! Spatial dimension of the problem,\n  INTEGER(I4B) :: nnt = 1\n  !! Number of nodes in time element\n  !! NOTE: This variables is used only in space-time finite element methods\n  INTEGER(I4B) :: tdof = 0\n  !! Total number of degree of freedom per node\n  !! NOTE: This variable is Set internally by each kernel while\n  !! Setting the kernel.\n  REAL(DFP) :: normRHS = 0.0_DFP\n  !! norm of the right-hand-side vector in the system of linear equations\n  !! NOTE: This variable is used internally\n  REAL(DFP) :: dt = 0.0_DFP\n  !! Time step size used in the pseudostatic and dynamic problems\n  !! Needed in transient case\n  REAL(DFP) :: startTime = 0.0\n  !! Starting time of simulation\n  !! NOTE: This varible is needed in the transient or pseudostatic simulation\n  !! only.\n  REAL(DFP) :: endTime = 0.0\n  !! Final time of the simulation\n  !! NOTE: This varible is needed in the transient or pseudostatic simulation\n  !! only.\n  REAL(DFP) :: currentTime = 0.0\n  !! The current time of the simulation\n  !! NOTE: This varible is needed in the transient simulation only.\n  INTEGER(I4B) :: currentTimeStep = 1\n  !! Current time step number of the simulation.\n  !! NOTE: This varible is needed in the transient simulation only.\n  INTEGER(I4B) :: totalTimeStep = 0\n  !! Total number of time step number in the simulation.\n  !! NOTE: This varible is needed in the transient simulation only.\n  REAL(DFP) :: lengthScale = 1.0_DFP\n  !! This variable denotes the length scale of the problem.\n  !! NOTE: This variable is for internal use only.\n  !! INTERNAL:\n  INTEGER(I4B) :: postProcessOpt = 0\n  !! Postprocessing options\n  !! INFO: The actual action depends upon the specific kernels\n  REAL(DFP) :: gravity(3) = 0.0_DFP\n  !! Acceleration vector due to gravity\n  TYPE(IterationData_) :: iterData\n  !! Iteration data\n  !! INFO: The actual action depends upon the specific kernels\n  INTEGER(I4B), ALLOCATABLE :: elemToMatId(:, :)\n  !! This variable denotes the Element number to material mapping.\n  !! For example, `elemToMatID( iel, POROUS_MATERIAL_ID )` denotes the\n  !! porous material type assigned to element number `iel`\n  !! Similarly, `elemToMatID( iel, FLUID_MATERIAL_ID )` denotes\n  !! the fluid material type assigned to element number `iel`.\n  INTEGER(I4B), ALLOCATABLE :: dbcIndx(:)\n  !! Indices where Dirichlet boundary conditions is prescribed\n  !! INFO: This variable is for internal use only.\n  !! It is formed from the Dirichlet boundary conditions.\n  !! INTERNAL:\n  CLASS(AbstractLinSolver_), POINTER :: linsol => NULL()\n  !! A pointer to a Linear iterative solver\n  !! NOTE: The actual linear solver depends upon the\n  !! engine and type of problem. linsol is initiated in\n  !! KernelInitiateFromParam routine.\n  CLASS(AbstractMatrixField_), POINTER :: tanmat => NULL()\n  !! Global tangent matrix\n  !! NOTE: The actual form of tangent matrix depends upon the engine\n  !! and type of problem.\n  CLASS(Domain_), POINTER :: dom => NULL()\n  !! Domain of the problem\n  TYPE(DomainPointer_), ALLOCATABLE :: domains(:)\n  !! Domain of the problem\n  TYPE(ReferenceLine_) :: refTimeElem\n  !! reference element for time domain\n  TYPE(ReferenceLine_) :: refLinTimeElem\n  !! reference element for time domain\n  TYPE(String) :: baseContinuityForSpace\n  !! Continuity of basis function in space\n  TYPE(String) :: baseInterpolationForSpace\n  !! Interpolation of shape function in space\n  TYPE(String) :: quadratureTypeForSpace\n  !! Quadrature type in space\n  INTEGER(I4B) :: quadTypeForSpace\n  !! Quadrature type in space\n  INTEGER(I4B) :: ipTypeForSpace = 0\n  !! Interpolation grid used for Lagrange polynomials\n  INTEGER(I4B) :: basisTypeForSpace = 0\n  !! Basis type for space\n  REAL(DFP) :: alphaForSpace = 0.0_DFP\n  !! Parameter for Jacobi polynomials in space\n  REAL(DFP) :: betaForSpace = 0.0_DFP\n  !! Parameter for Jacobi polynomials in space\n  REAL(DFP) :: lambdaForSpace = 0.0_DFP\n  !! Parameter for Ultraspherical polynomials in  space\n  TYPE(String) :: baseContinuityForTime\n  !! Continuity of basis function in time in time domain\n  TYPE(String) :: baseInterpolationForTime\n  !! Interpolation of basis function in time\n  TYPE(String) :: quadratureTypeForTime\n  !! Quadrature type in time\n  INTEGER(I4B) :: quadTypeForTime\n  !! Quadrature type in time\n  INTEGER(I4B) :: ipTypeForTime\n  !! Interpolation grid used for Lagrange polynomials\n  INTEGER(I4B) :: basisTypeForTime\n  !! Basis type for space\n  REAL(DFP) :: alphaForTime = 0.0_DFP\n  !! Parameter for Jacobi polynomials in space\n  REAL(DFP) :: betaForTime = 0.0_DFP\n  !! Parameter for Jacobi polynomials in space\n  REAL(DFP) :: lambdaForTime = 0.0_DFP\n  !! Parameter for Ultraspherical polynomials in space\n  TYPE(String) :: domainFile\n  !! Domain file name\n  TYPE(QuadraturePoint_), ALLOCATABLE :: quadratureForSpace(:)\n  !! Quadrature points in space element\n  !! The size of quadratureForSpace is same as the total number of\n  !! mesh in the domain\n  TYPE(QuadraturePoint_) :: quadratureForTime\n  !! Quadrature points in time element\n  !! INFO: This is used in space-time computation\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: cellFE(:)\n  !! Cell finite element\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: linCellFE(:)\n  !! Linear cell finite element\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: facetFE(:)\n  !! Facet finite element\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: linFacetFE(:)\n  !! Linear facet finite element\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: edgeFE(:)\n  !! Edge finite element\n  TYPE(FiniteElementPointer_), ALLOCATABLE :: linEdgeFE(:)\n  !! Linear edge finite element\n  TYPE(FiniteElement_) :: timeFE\n  !! Time finite element\n  TYPE(FiniteElement_) :: linTimeFE\n  !! Linear time finite element\n  TYPE(ElemshapeData_) :: linTimeElemSD\n    !! Element shape data on linear time element #STFEM\n  TYPE(ElemshapeData_) :: timeElemSD\n    !! Element shape data on time element #STFEM\n  TYPE(ElemshapeData_), ALLOCATABLE :: linSpaceElemSD(:)\n    !! Element shape data on linear space (simplex) element\n  TYPE(ElemshapeData_), ALLOCATABLE :: spaceElemSD(:)\n    !! Element shape data on space element\n  TYPE(STElemshapeData_), ALLOCATABLE :: stelemsd(:, :)\n    !! Element shape data on space-time element\nEND TYPE\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"isinitiated",children:(0,t.jsx)(n.code,{children:"isInitiated"})}),"\n",(0,t.jsx)(n.p,{children:"This is set to true when the kernel is initiated."}),"\n",(0,t.jsx)(n.h3,{id:"iscommondomain",children:(0,t.jsx)(n.code,{children:"isCommonDomain"})}),"\n",(0,t.jsx)(n.p,{children:"This is set to true when single domain is used for several physical variables. This is applicable to multi-physics problems, only."}),"\n",(0,t.jsx)(n.h3,{id:"name",children:(0,t.jsx)(n.code,{children:"name"})}),"\n",(0,t.jsx)(n.p,{children:"It is the name of the kernel"}),"\n",(0,t.jsx)(n.h3,{id:"engine",children:(0,t.jsx)(n.code,{children:"engine"})}),"\n",(0,t.jsx)(n.p,{children:"Linear solver engine name, following engines are possible:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"NATIVE_SERIAL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"NATIVE_OMP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"NATIVE_MPI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"LIS_SERIAL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"LIS_OMP"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"LIS_MPI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"PETSC"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Default engine is ",(0,t.jsx)(n.code,{children:"NATIVE_SERIAL"})]})}),"\n",(0,t.jsx)(n.h3,{id:"coordinatesystem",children:(0,t.jsx)(n.code,{children:"coordinateSystem"})}),"\n",(0,t.jsx)(n.p,{children:"Spatial coordinate type and spatial dimension of partial differential equations."}),"\n",(0,t.jsx)(n.p,{children:"Possible options are given below."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"KERNEL_1D_H"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_1D_V"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_2D"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_2D_AXISYM"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_3D"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_2D_PLANE_STRESS"}),","]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"KERNEL_2D_PLANE_STRAIN"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"timedependency",children:(0,t.jsx)(n.code,{children:"timeDependency"})}),"\n",(0,t.jsx)(n.p,{children:"It represents the time dependency of partial differential equations."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_STATIC"}),","]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"KERNEL_PSEUDOSTATIC"}),","]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"KERNEL_TRANSIENT"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"nsd",children:(0,t.jsx)(n.code,{children:"nsd"})}),"\n",(0,t.jsxs)(n.p,{children:["Spatial dimension of the problem, it will be determined from ",(0,t.jsx)(n.code,{children:"coordinateSystem"})]}),"\n",(0,t.jsx)(n.h3,{id:"nnt",children:(0,t.jsx)(n.code,{children:"nnt"})}),"\n",(0,t.jsx)(n.p,{children:"Number of nodes in time domain, required for space-time finite element computation."}),"\n",(0,t.jsx)(n.h3,{id:"tdof",children:(0,t.jsx)(n.code,{children:"tdof"})}),"\n",(0,t.jsxs)(n.p,{children:["Total number of degree of freedom per node. ",(0,t.jsx)("span",{class:"badge badge--success",children:" Internal use only "})]}),"\n",(0,t.jsx)(n.h3,{id:"normrhs",children:(0,t.jsx)(n.code,{children:"normRHS"})}),"\n",(0,t.jsxs)(n.p,{children:["Norm of right-hand side vector. ",(0,t.jsx)("span",{class:"badge badge--success",children:" Internal use only "})]}),"\n",(0,t.jsx)(n.h3,{id:"dt",children:(0,t.jsx)(n.code,{children:"dt"})}),"\n",(0,t.jsx)(n.p,{children:"Time step size used in the kernel. This is needed in transient case only."}),"\n",(0,t.jsx)(n.h3,{id:"starttime",children:(0,t.jsx)(n.code,{children:"startTime"})}),"\n",(0,t.jsx)(n.p,{children:"present time of simulation needed in transient case"}),"\n",(0,t.jsx)(n.h3,{id:"endtime",children:(0,t.jsx)(n.code,{children:"endTime"})}),"\n",(0,t.jsx)(n.p,{children:"Final time of simulation, needed in transient case"}),"\n",(0,t.jsx)(n.h3,{id:"currenttime",children:(0,t.jsx)(n.code,{children:"currentTime"})}),"\n",(0,t.jsx)(n.p,{children:"Current time, needed in transient case"}),"\n",(0,t.jsx)(n.h3,{id:"lengthscale",children:(0,t.jsx)(n.code,{children:"lengthScale"})}),"\n",(0,t.jsx)(n.p,{children:"Length scale of the problem"}),"\n",(0,t.jsx)(n.h3,{id:"currenttimestep",children:(0,t.jsx)(n.code,{children:"currentTimeStep"})}),"\n",(0,t.jsx)(n.p,{children:"present time step number, needed in transient case"}),"\n",(0,t.jsx)(n.h3,{id:"totaltimestep",children:(0,t.jsx)(n.code,{children:"totalTimeStep"})}),"\n",(0,t.jsx)(n.p,{children:"total number of time steps, needed in transient case"}),"\n",(0,t.jsx)(n.h3,{id:"postprocessopt",children:(0,t.jsx)(n.code,{children:"postProcessOpt"})}),"\n",(0,t.jsx)(n.p,{children:"post-processing options"}),"\n",(0,t.jsx)(n.h3,{id:"gravity",children:(0,t.jsx)(n.code,{children:"gravity"})}),"\n",(0,t.jsx)(n.p,{children:"Acceleration vector due to gravity"}),"\n",(0,t.jsx)(n.h3,{id:"iterdata",children:(0,t.jsx)(n.code,{children:"iterData"})}),"\n",(0,t.jsxs)(n.p,{children:["contains information about the iteration ; such maximum number of iteration, ",(0,t.jsx)(n.code,{children:"ConvergenceType"}),", ",(0,t.jsx)(n.code,{children:"toleranceIn"}),", and many others, see ",(0,t.jsx)(n.a,{href:"/docs-api/IterationData/IterationData_",children:"IterationData"})]}),"\n",(0,t.jsx)(n.h3,{id:"elemtomatid",children:(0,t.jsx)(n.code,{children:"elemToMatId"})}),"\n",(0,t.jsxs)(n.p,{children:["element number to material mapping, ",(0,t.jsx)(n.code,{children:"elemToMatID( iel, POROUS_MATERIAL_ID )"})," denotes the porous material type assigned to ",(0,t.jsx)(n.code,{children:"iel"}),". Similarly, ",(0,t.jsx)(n.code,{children:"elemToMatID( iel, FLUID_MATERIAL_ID )"})," denotes the fluid material type assigned to ",(0,t.jsx)(n.code,{children:"iel"})]}),"\n",(0,t.jsx)(n.h3,{id:"linsol",children:(0,t.jsx)(n.code,{children:"linsol"})}),"\n",(0,t.jsx)(n.p,{children:"Linear iterative solver"}),"\n",(0,t.jsx)(n.h3,{id:"tanmat",children:(0,t.jsx)(n.code,{children:"tanmat"})}),"\n",(0,t.jsx)(n.p,{children:"Global tangent matrix"}),"\n",(0,t.jsx)(n.h3,{id:"reftimeelem",children:(0,t.jsx)(n.code,{children:"refTimeElem"})}),"\n",(0,t.jsx)(n.p,{children:"reference element for time domain"}),"\n",(0,t.jsx)(n.h3,{id:"reflintimeelem",children:(0,t.jsx)(n.code,{children:"refLinTimeElem"})}),"\n",(0,t.jsx)(n.p,{children:"reference element for time domain"}),"\n",(0,t.jsx)(n.h3,{id:"basecontinuityforspace",children:(0,t.jsx)(n.code,{children:"baseContinuityForSpace"})}),"\n",(0,t.jsx)(n.p,{children:"Continuity of basis function for pressure and velocity field"}),"\n",(0,t.jsx)(n.h3,{id:"baseinterpolationforspace",children:(0,t.jsx)(n.code,{children:"baseInterpolationForSpace"})}),"\n",(0,t.jsx)(n.p,{children:"Interpolation of shape function for pressure and velocity field"}),"\n",(0,t.jsx)(n.h3,{id:"quadraturetypeforspace",children:(0,t.jsx)(n.code,{children:"quadratureTypeForSpace"})}),"\n",(0,t.jsx)(n.p,{children:"Quadrature type for pressure field"}),"\n",(0,t.jsx)(n.h3,{id:"basecontinuityfortime",children:(0,t.jsx)(n.code,{children:"baseContinuityForTime"})}),"\n",(0,t.jsx)(n.p,{children:"Continuity of basis function for pressure field in time domain"}),"\n",(0,t.jsx)(n.h3,{id:"baseinterpolationfortime",children:(0,t.jsx)(n.code,{children:"baseInterpolationForTime"})}),"\n",(0,t.jsx)(n.p,{children:"Interpolation of basis function for pressure field in time domain"}),"\n",(0,t.jsx)(n.h3,{id:"quadraturetypefortime",children:(0,t.jsx)(n.code,{children:"quadratureTypeForTime"})}),"\n",(0,t.jsx)(n.p,{children:"Quadrature type for pressure field in time domain"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},33963:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Kernel-Workflow-73897c74ab0e1d90b7f6e95bb2490aad.svg"},11151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>a});var t=i(67294);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);