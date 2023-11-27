"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96974],{37353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>E,frontMatter:()=>h,metadata:()=>p,toc:()=>f});var n=a(85893),r=a(11151),o=a(74866),i=a(85162),s=a(21257);a(67294);const l=[{title:"Math_",comment:"Contains mathematical constants.",category:"Math"},{title:"BoundingBox_",comment:"Data type for bounding box.",category:"FEM"},{title:"RealMatrix_",comment:"Extension for Fortran two-d array",category:"Matrix"},{title:"IntVector_",comment:"Vector of integers.",category:"Vector"},{title:"RealVector_",comment:"Vector of reals",category:"Vector"},{title:"Vector3D_",comment:"3D Vector",category:"Vector"},{title:"IndexValue_",comment:"Key (integer) and value (real), useful for defining nodal boundary conditions",category:"FEM"},{title:"DOF_",comment:"Degree of freedom object type",category:"FEM"},{title:"SparseMatixReOrdering_",comment:"Sparse matrix reordering scheme",category:"LinearAlgebra"},{title:"CSRSparisty_",comment:"Datatype for handling sparsity pattern",category:"LinearAlgebra"},{title:"SuperLU_",comment:"SuperLU data structure.",category:"LinearAlgebra"},{title:"CSRMatrix_",comment:"Compressed sparse row matrix",category:"LinearAlgebra"},{title:"IterationData_",comment:"Datatype for storing iteration data",category:"FEM"},{title:"VoigtRank2Tensor_",comment:"Rank2 tensor",category:"Tensor"},{title:"DeformationGradient_",comment:"Deformation Gradient tensor",category:"Tensor"},{title:"LeftCauchyGreen_",comment:"Left Cauchy Green tensor",category:"Tensor"},{title:"RightCauchyGreen_",comment:"Right Cauchy Green tensor",category:"Tensor"},{title:"Strain_",comment:"Strain tensor",category:"Tensor"},{title:"AlmansiStrain_",comment:"Almansi strain",category:"Tensor"},{title:"GreenStrain_",comment:"Green strain tensor",category:"Tensor"},{title:"SmallStrain_",comment:"Small strain tensor.",category:"Tensor"},{title:"ReferenceTopology_",comment:"Data type for handling reference element in FEM",category:"FEM"},{title:"ReferenceElement_",comment:"Data type for reference element in FEM",category:"FEM"},{title:"ReferencePoint_",comment:"Data type for reference point in FEM",category:"FEM"},{title:"ReferenceLine_",comment:"Data type for reference line in FEM",category:"FEM"},{title:"ReferenceTriangle_",comment:"Data type for reference triangle in FEM",category:"FEM"},{title:"ReferenceQuadrangle_",comment:"Data type for reference quadrangle in FEM",category:"FEM"},{title:"ReferenceTetrahedron_",comment:"Data type for reference tetrahedron in FEM",category:"FEM"},{title:"ReferenceHexahedron_",comment:"Data type for reference hexahedron in FEM",category:"FEM"},{title:"ReferencePrism_",comment:"Data type for reference prism in FEM",category:"FEM"},{title:"ReferencePyramid_",comment:"Data type for reference pyramid in FEM",category:"FEM"},{title:"KeyValue_",comment:"Poor man's implementation of dic.",category:"Container"},{title:"FEVariable_",comment:"Data type for finite element variables.",category:"FEM"},{title:"FEVariableConstant_",comment:"Constant finite element variable",category:"FEM"},{title:"FEVariableSpace_",comment:"Spatially variable finite element variable",category:"FEM"},{title:"FEVariableTime_",comment:"Time variable finite element variable",category:"FEM"},{title:"FEVariableSpaceTime_",comment:"Spatially and temporally changing finite element variable",category:"FEM"},{title:"FEVariableScalar_",comment:"Scalar finite element variable",category:"FEM"},{title:"FEVariableVector_",comment:"Vector finite element variable",category:"FEM"},{title:"FEVariableMatrix_",comment:"Matrix finite element variable",category:"FEM"},{title:"QuadraturePoint_",comment:"Quadrature points",category:"FEM"},{title:"BaseInterpolation_",comment:"Data type for basis interpolation",category:"FEM"},{title:"LagrangeInterpolation_",comment:"Lagrange interpolation",category:"FEM"},{title:"HermitInterpolation_",comment:"Hermit interpolation",category:"FEM"},{title:"SerendipityInterpolation_",comment:"Serendipity interpolation",category:"FEM"},{title:"HierarchyInterpolation_",comment:"Hierarchical interpolation",category:"FEM"},{title:"BaseContinuity_",comment:"Continuity type of basis functions.",category:"FEM"},{title:"H1_",comment:"H1 finite element basis",category:"FEM"},{title:"H1DIV_",comment:"H1(Div) finite element basis",category:"FEM"},{title:"H1Curl_",comment:"H1(Curl) finite element basis",category:"FEM"},{title:"DG_",comment:"Discontinuous Galerkin finite element basis",category:"FEM"},{title:"ElementData_",comment:"Data necessary for creating finite element.",category:"FEM"},{title:"ShapeData_",comment:"Storage for shape data",category:"FEM"},{title:"STShapeData_",comment:"Space-time shape function data",category:"FEM"},{title:"ElemshapeData_",comment:"Element shape function data",category:"FEM"},{title:"STElemShapeData_",comment:"Space-time element shape data.",category:"FEM"},{title:"QualityMeasure_",comment:"Datatype for mesh quality measure",category:"FEM"},{title:"Random_",comment:"Data type for random variables",category:"FEM"},{title:"OpenMP_",comment:"Data type for OpenMP parallel environment",category:"FEM"},{title:"MultiIndices_",comment:"Data type for multi indices",category:"FEM"}],c=[{Header:"Data-type",accessor:"title",className:"pester-data-table left"},{Header:"Summary",accessor:"comment",className:"pester-data-table left"},{Header:"Category",accessor:"category",className:"pester-data-table"}],d=[{title:"String_Class",comment:"Defines String class and methods.",category:"String"},{title:"String_Method",comment:"Additional methods for handling strings.",category:"String"},{title:"PENF",comment:"For portability.",category:"OS"},{title:"BeFoR64",comment:"For portability.",category:"OS"},{title:"FACE",comment:"Colorful console printing.",category:"IO"},{title:"FPL",comment:"Fortran parameter list",category:"Utility"},{title:"System_Method",comment:"Interface to C system libray.",category:"OS"},{title:"CInterface",comment:"Utility for C-Fortran interface building.",category:"OS"},{title:"OpenMP_Method",comment:"Methods which uses OpenMP for acceleration.",category:"Misc"},{title:"GlobalData",comment:"GlobalData for easifem library",category:"Misc"},{title:"Hashing32",comment:"Hash functions.",category:"Utility, Crypto"},{title:"OGPF",comment:"Gnuplot library",category:"Plot"},{title:"Test_Method",comment:"Unit testing library",category:"Test"},{title:"MdEncode_Method",comment:"Encoding text into markdown.",category:"IO"},{title:"DispModule",comment:"Pretty printing on terminal.",category:"IO"},{title:"Display_Method",comment:"Pretty printing on terminal.",category:"IO"},{title:"ErrorHandling",comment:"Exception handling.",category:"ExceptionHandling"},{title:"Utility",comment:"Utility module.",category:"Utility"},{title:"PolynomialUtility",comment:"Collection of useful routine for polynomial interpolation.",category:"Basis"},{title:"BaseType",comment:"Collection of user define data types.",category:"Core"},{title:"MultiIndices_Method",comment:"Methods for MultiIndices_.",category:"Math"},{title:"Random_Method",comment:"Methods for Random_ data type.",category:"Math"},{title:"BoundingBox_Method",comment:"Methods for BoundingBox_ data type",category:"Math"},{title:"IntVector_Method",comment:"Methods for IntVector_ data type",category:"Vector"},{title:"IndexValue_Method",comment:"Methods for IndexValue_ data type",category:"FEM"},{title:"IterationData_Method",comment:"Methods for IterationData_ data type.",category:"FEM"},{title:"Vector3D_Method",comment:"Methods for Vector3D_ data type.",category:"Vector"},{title:"RealVector_Method",comment:"Methods for RealVector_ data type",category:"Vector"},{title:"DOF_Method",comment:"Methods for DOF_ data type",category:"FEM"},{title:"Geometry_Method",comment:"Geometry realted methods.",category:"Math"},{title:"QuadraturePoint_Method",comment:"Methods for QuadraturePoint_ data type.",category:"FEM"},{title:"FEVariable_Method",comment:"Methods for FEVariable_ data type",category:"FEM"},{title:"ElemshapeData_Method",comment:"Methods for ElemshapeData_ data type.",category:"FEM"},{title:"RealMatrix_Method",comment:"Methods for RealMatrix_ data type.",category:"Matrix"},{title:"FEMatrix_Method",comment:"Methods for FEMatrix_ data type.",category:"FEM"},{title:"FEVector_Method",comment:"Methods for FEVector_ data type.",category:"FEM"},{title:"Rank2Tensor_Method",comment:"Methods for Rank2Tensor_ data type.",category:"Tensor"},{title:"VoigtRank2Tensor_Method",comment:"Methods for VoigtRank2Tensor_ data type.",category:"Tensor"},{title:"CSRSparisty_Method",comment:"Methods for CSRSparisty_ data type.",category:"Matrix"},{title:"CSRMatrix_Method",comment:"Methods for CSRMatrix_ data type.",category:"Matrix"},{title:"SuperLUInterface",comment:"Fortran interface to SuperLU lib",category:"LinearSolver"},{title:"LISInterface",comment:"Fortran interface to LIS lib",category:"LinearSolver"},{title:"F77_BLAS",comment:"F77 interface to BLAS.",category:"LinearAlgebra"},{title:"F95_BLAS",comment:"Fortran 95 interface to BLAS lib.",category:"LinearAlgebra"},{title:"F77_LAPACK",comment:"Fortran interface to Lapack.",category:"LinearAlgebra"},{title:"F95_LAPACK",comment:"Fortran 95 interface to Lapack lib.",category:"LinearAlgebra"},{title:"Lapack_Method",comment:"Methods for linear algebra by using Lapack.",category:"LinearAlgebra"},{title:"EASIFEM_ARPACK",comment:"Fortran interface to ARPACK.",category:"LinearAlgebra"},{title:"FFTW3",comment:"Fast fourer tranform library",category:"LinearAlgebra"},{title:"MetisInterface",comment:"Fortran interface to Metis library.",category:"LinearAlgebra"}],m=[{Header:"Module",accessor:"title",className:"pester-data-table left"},{Header:"Comment",accessor:"comment",className:"pester-data-table left"},{Header:"Category",accessor:"category",className:"pester-data-table"}],h={title:"easifemBase",sidebar_position:5},u=void 0,p={id:"easifemBase",title:"easifemBase",description:"easifemBase (henceforth read as Base) library is the lowest (or, base) level component of EASIFEM. All other components are built upon easifemBase.",source:"@site/docs/about/easifemBase.md",sourceDirName:".",slug:"/easifemBase",permalink:"/about/easifemBase",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/about/easifemBase.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:5,frontMatter:{title:"easifemBase",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"External pkgs",permalink:"/about/extpkgs"},next:{title:"easifemClasses",permalink:"/about/easifemClasses"}},y={},f=[{value:"Programming paradigm",id:"programming-paradigm",level:2},{value:"Key features",id:"key-features",level:2},{value:"Use association",id:"use-association",level:2},{value:"Structure",id:"structure",level:2},{value:"BaseType",id:"basetype",level:3},{value:"BaseMethods",id:"basemethods",level:3}];function g(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"easifemBase"})," (henceforth read as Base) library is the lowest (or, base) level component of EASIFEM. All other components are built upon ",(0,n.jsx)(t.code,{children:"easifemBase"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"It contains a lot of valuable routines and derived types."}),"\n",(0,n.jsx)(t.h2,{id:"programming-paradigm",children:"Programming paradigm"}),"\n",(0,n.jsxs)(t.p,{children:["The programming paradigm of ",(0,n.jsx)(t.code,{children:"easifemBase"})," is ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Multiple_dispatch",children:"Multiple dispatch approach"})," and Procedural programming."]}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["The base library do not use the object-oriented programming concepts. In the Base library ",(0,n.jsx)(t.code,{children:"String_Class"})," is the only exception wherein Object-oriented paradigm has been used."]})}),"\n",(0,n.jsxs)(t.p,{children:["All user-defined data types are declared in the ",(0,n.jsx)(t.code,{children:"BaseType"})," module, and all methods are exposed through ",(0,n.jsx)(t.code,{children:"BaseMethods"})," modules."]}),"\n","\n",(0,n.jsx)(t.h2,{id:"key-features",children:"Key features"}),"\n",(0,n.jsx)(t.p,{children:"Currently, easifemBase has interface with"}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"BLAS95"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Lapack95"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Sparsekit"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"Metis"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"PlPlot"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"SuperLU"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"ARPACK"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","TODO Add key features in ",(0,n.jsx)(t.code,{children:"easifemBase.md"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"USE easifemBase\n"})}),"\n",(0,n.jsx)(t.p,{children:"or"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"USE BaseType\nUSE BaseMethods\n"})}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"easifemBase"})," library exposes three main modules."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BaseType"}),", which contains the user-defined data-type"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BaseMethods"}),", contains the modules (each module defines the routines for data-types defined in ",(0,n.jsx)(t.code,{children:"BaseType.F90"}),".)"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"easifemBase"})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The structure of source directory is shown in the following figure."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(20359).Z+"",width:"816",height:"461"})}),"\n",(0,n.jsx)(t.p,{children:"The source directory has two directories"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"modules"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"submodules"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"modules"})," directory mainly contains header and interface of methods. The implementation is given in submodules directory."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Both ",(0,n.jsx)(t.code,{children:"BaseType.F90"})," and ",(0,n.jsx)(t.code,{children:"BaseMethods.F90"})," are included in ",(0,n.jsx)(t.code,{children:"modules"})," directory."]})}),"\n",(0,n.jsxs)(t.p,{children:["Let us understand the structure of the Base library by an example of ",(0,n.jsx)(t.code,{children:"CSRSparsity_"})," data type."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["First, we define ",(0,n.jsx)(t.code,{children:"CSRSparsity_"})," in ",(0,n.jsx)(t.code,{children:"BaseType.F90"})," as"]}),"\n"]}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.Z,{value:"interface",label:"\u0700 BaseType.F90",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"TYPE :: CSRSparsity_\n  INTEGER(I4B) :: nnz = 0\n  INTEGER(I4B) :: ncol = 0\n  INTEGER(I4B) :: nrow = 0\n  LOGICAL(LGT) :: isSorted = .FALSE.\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  LOGICAL(LGT) :: isSparsityLock = .FALSE.\n  LOGICAL(LGT) :: isDiagStored = .FALSE.\n  INTEGER(I4B), ALLOCATABLE :: IA(:)\n  INTEGER(I4B), ALLOCATABLE :: JA(:)\n  INTEGER(I4B), ALLOCATABLE :: idiag(:)\n  TYPE(IntVector_), ALLOCATABLE :: row(:)\n  TYPE(DOF_) :: idof\n  !! DOF for row\n  TYPE(DOF_) :: jdof\n  !! DOF for columns\nEND TYPE CSRSparsity_\n"})})}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsxs)(t.li,{children:["Then we create a directory called ",(0,n.jsx)(t.code,{children:"CSRSparsity"})," in both ",(0,n.jsx)(t.code,{children:"modules"})," and ",(0,n.jsx)(t.code,{children:"submodules"})," directory."]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.code,{children:"modules/CSRSparsity"})," we create ",(0,n.jsx)(t.code,{children:"CSRSparsity_Method.F90"})," file."]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.code,{children:"modules/CSRSparsity/CSRSparsity_Method.F90"})," we define a module ",(0,n.jsx)(t.code,{children:"CSRSparsity_Method"})," (same name as file)."]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.code,{children:"CSRSparsity_Method"})," module, we only define interface of methods. In this way, this file can be considered as header file. See, the example given below:"]}),"\n",(0,n.jsxs)(t.li,{children:["In ",(0,n.jsx)(t.code,{children:"submodules/CSRSparsity"}),", we create ",(0,n.jsx)(t.code,{children:"CSRSparsity_Method@ConstructorMethods.F90"}),", which contains the contruction related routines."]}),"\n",(0,n.jsxs)(t.li,{children:["Also, we create ",(0,n.jsx)(t.code,{children:"CSRSparsity_Method@IOMethods.F90"}),", which include methods related to input and output."]}),"\n"]}),"\n",(0,n.jsxs)(o.Z,{children:[(0,n.jsx)(i.Z,{value:"module",label:"\u0700 CSRSparsity_Method",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"MODULE CSRSparsity_Method\nUSE GlobalData\nUSE BaseType\nIMPLICIT NONE\nPRIVATE\n\nINTERFACE\n  MODULE SUBROUTINE csr_initiate1(obj, ncol, nrow, idof, jdof)\n    TYPE(CSRSparsity_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: ncol, nrow\n    TYPE(DOF_), OPTIONAL, INTENT(IN) :: idof\n    !! DOF for row\n    TYPE(DOF_), OPTIONAL, INTENT(IN) :: jdof\n    !! DOF for column\n  END SUBROUTINE csr_initiate1\nEND INTERFACE\n\nINTERFACE Initiate\n  MODULE PROCEDURE csr_initiate1\nEND INTERFACE Initiate\n\nINTERFACE\n  MODULE SUBROUTINE csr_Display(obj, Msg, UnitNo)\n    TYPE(CSRSparsity_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: Msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: UnitNo\n  END SUBROUTINE csr_Display\nEND INTERFACE\n\nINTERFACE Display\n  MODULE PROCEDURE csr_Display\nEND INTERFACE Display\n\nEND MODULE CSRSparsity_Method\n"})})}),(0,n.jsxs)(i.Z,{value:"submodules",label:"\u0700 ConstructorMethods.F90",children:[(0,n.jsx)(t.p,{children:"CSRSparsity_Method@ConstructorMethods.F90"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"SUBMODULE(CSRSparsity_Method) ConstructorMethods\nUSE BaseMethod\nIMPLICIT NONE\nCONTAINS\n\nMODULE PROCEDURE csr_initiate1\nobj%nnz = 0\nobj%ncol = ncol\nobj%nrow = nrow\nIF (PRESENT(idof)) THEN\n  obj%idof = idof\n  obj%jdof = jdof\nELSE\n  CALL initiate(obj=obj%idof, tNodes=[nrow], names=['K'], &\n    & spacecompo=[1], timecompo=[1], storageFMT=NODES_FMT)\n  CALL initiate(obj=obj%jdof, tNodes=[ncol], names=['K'], &\n    & spacecompo=[1], timecompo=[1], storageFMT=NODES_FMT)\nEND IF\nCALL Reallocate(obj%IA, nrow + 1)\nCALL Reallocate(obj%idiag, nrow)\nIF (ALLOCATED(obj%row)) DEALLOCATE (obj%row)\nIF (ALLOCATED(obj%JA)) DEALLOCATE (obj%JA)\nobj%isInitiated = .TRUE.\nobj%isSparsityLock = .FALSE.\nobj%isSorted = .FALSE.\nobj%isDiagStored = .FALSE.\nEND PROCEDURE csr_initiate1\n\nEND SUBMODULE ConstructorMethods\n"})})]}),(0,n.jsxs)(i.Z,{value:"submodules2",label:"\u0700 IOMethods",children:[(0,n.jsx)(t.p,{children:"CSRSparsity_Method@IOMethods.F90"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'SUBMODULE(CSRSparsity_Method) IOMethods\nUSE BaseMethod\nIMPLICIT NONE\nCONTAINS\n\nMODULE PROCEDURE csr_Display\nCALL Display(Msg, unitNo=unitNo)\nCALL Display(obj%nnz, "# NNZ : ", unitNo=unitNo)\nCALL Display(obj%ncol, "# NCOL : ", unitNo=unitNo)\nCALL Display(obj%nrow, "# NROW : ", unitNo=unitNo)\nCALL Display(obj%idof, "# iDOF : ", unitNo=unitNo)\nCALL Display(obj%jdof, "# jDOF : ", unitNo=unitNo)\nEND PROCEDURE csr_Display\n\nEND SUBMODULE IOMethods\n'})})]}),(0,n.jsx)(i.Z,{value:"close",label:"\u21a2 ",default:!0})]}),"\n",(0,n.jsx)(t.h3,{id:"basetype",children:"BaseType"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"BaseType"})," contains user-define data type."]}),"\n","\n",(0,n.jsx)(s.J,{columns:c,data:l}),"\n",(0,n.jsx)(t.h3,{id:"basemethods",children:"BaseMethods"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"BaseMethods"})," library contains the modules which defines and implements methods (routines) for data types defined in ",(0,n.jsx)(t.code,{children:"BaseType"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"At present BaseMethods contains following modules."}),"\n","\n","\n",(0,n.jsx)(s.J,{columns:m,data:d}),"\n",(0,n.jsx)(t.h3,{id:""})]})}function E(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(86010);const r={tabItem:"tabItem_Ymn6"};var o=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(67294),r=a(86010),o=a(12466),i=a(16550),s=a(20469),l=a(91980),c=a(67392),d=a(50012);function m(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return m(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function y(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,m]=p({queryString:a,groupId:r}),[y,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),g=(()=>{const e=c??y;return u({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),f(e)}),[m,f,o]),tabValues:o}}var f=a(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=a(85893);function b(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(c(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:m,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function M(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=y(e);return(0,E.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,E.jsx)(b,{...e,...t}),(0,E.jsx)(M,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,E.jsx)(x,{...e,children:m(e.children)},String(t))}},21257:(e,t,a)=>{a.d(t,{J:()=>i});a(67294);var n=a(79521),r=a(85893);const o=()=>({}),i=e=>{let{columns:t,data:a,getHeaderProps:i=o,getColumnProps:s=o}=e;const{getTableProps:l,getTableBodyProps:c,headerGroups:d,rows:m,prepareRow:h}=(0,n.useTable)({columns:t,data:a},n.useSortBy);return(0,r.jsxs)("table",{...l(),children:[(0,r.jsx)("thead",{children:d.map((e=>(0,r.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,r.jsxs)("th",{...e.getHeaderProps([{className:e.className},i(e),s(e),e.getSortByToggleProps()]),children:[e.render("Header"),(0,r.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""})]})))})))}),(0,r.jsx)("tbody",{...c(),children:m.map(((e,t)=>(h(e),(0,r.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,r.jsx)("td",{...e.getCellProps([{className:e.column.className,style:e.column.style},s(e.column)]),children:e.render("Cell")})))}))))})]})}},20359:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/figure-2-c9a8005b0a72ea2770d7b4ee52f97203.svg"}}]);