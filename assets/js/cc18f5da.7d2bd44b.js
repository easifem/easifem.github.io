"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[22515],{15475:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=a(85893),t=a(11151);const r={title:"LinearStaticCDR example 7",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},o="LinearStaticCDR example 7",l={id:"LinearStaticCDR/LinearStaticCDR_test_7",title:"LinearStaticCDR example 7",description:'!!! note ""',source:"@site/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_7.md",sourceDirName:"LinearStaticCDR",slug:"/LinearStaticCDR/LinearStaticCDR_test_7",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_7.md",tags:[{label:"SetLinearStaticCDRParam",permalink:"/docs-api/tags/set-linear-static-cdr-param"},{label:"LinearStaticCDR/Initiate",permalink:"/docs-api/tags/linear-static-cdr-initiate"},{label:"LinearStaticCDR/CheckEssentialParam",permalink:"/docs-api/tags/linear-static-cdr-check-essential-param"},{label:"LinearStaticCDR/AddMaterial",permalink:"/docs-api/tags/linear-static-cdr-add-material"},{label:"LinearStaticCDR/AddDirichletBC",permalink:"/docs-api/tags/linear-static-cdr-add-dirichlet-bc"},{label:"LinearStaticCDR/GetDirichletBCPointer",permalink:"/docs-api/tags/linear-static-cdr-get-dirichlet-bc-pointer"},{label:"DirichletBC/Set",permalink:"/docs-api/tags/dirichlet-bc-set"},{label:"LinearStaticCDR/Display",permalink:"/docs-api/tags/linear-static-cdr-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"LinearStaticCDR example 7",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"LinearStaticCDR example 6",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_6"},next:{title:"LinearStaticCDR example 8",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_8"}},s={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linearstaticcdr-example-7",children:"LinearStaticCDR example 7"}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nThis example shows how to add Dirichlet boundary condition in [[LinearStaticCDR_]] kernel.'}),"\n",(0,i.jsx)(n.p,{children:"Mesh used in this example is given below."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:a(87342).Z+"",width:"576",height:"781"})}),"\n",(0,i.jsx)(n.h2,{id:"use-association",children:"Use association"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[HDF5File_]]"}),"\n",(0,i.jsx)(n.li,{children:"[[MSHFile_]]"}),"\n",(0,i.jsx)(n.li,{children:"[[ParameterList_]]"}),"\n",(0,i.jsx)(n.li,{children:"[[Domain_]]"}),"\n",(0,i.jsx)(n.li,{children:"[[MeshSelection_]]"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemMaterials\n    USE easifemKernels\n    USE LinearStaticCDR_Class\n    IMPLICIT NONE\n    TYPE(LinearStaticCDR_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n    TYPE( HDF5File_ ) :: domainFile\n    TYPE( MeshSelection_ ) :: region\n    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=2, &\n      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n    CLASS( DirichletBC_ ), POINTER :: dbc\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]]'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nSet the PARAMETER for [[LinearStaticCDR_]]'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL SetLinearStaticCDRParam( param=param, &\n        & engine="NATIVE_SERIAL", &\n        & isConservative=.TRUE., &\n        & coordinateSystem=KERNEL_2D, &\n        & tMaterials=tMaterials, &\n        & tDirichletBC=tDirichletBC, &\n        & domainFile=domainFileName, &\n        & baseContinuity="H1", &\n        & baseInterpolation="LagrangeInterpolation", &\n        & quadratureType="GaussLegendre" )\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nSet the PARAMETER for [[LinSolver_]].'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nInitiates computation domain.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nInitiate an instace of [[LinearStaticCDR_]] kernel'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "addMaterial 1"\nAdd another material and domain region in the [[LinearStaticCDR_]] kernel.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[1] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "addMaterial 2"\nAdd another material and domain region in the [[LinearStaticCDR_]] kernel.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[2] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "SetDirichletBC 1"\nNow we set the Dirichlet boundary condition. First we SELECT the mesh\nboundary, THEN we prescribe the boundary condition.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[3] )\n    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=1 )\n    CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "SetDirichletBC 2"\nLet us repeat the PROCEDURE mentioned above to prescribe another boundary condition.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[6] )\n    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=2 )\n    CALL dbc%Set( ConstantNodalValue=1.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nDisplay the content of kernel.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'    CALL obj%Display( "LinearStaticCDR :: ")\n'})}),"\n",(0,i.jsx)(n.p,{children:'??? example "Results"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# LinearStaticCDR ::\n## name :\nStaticDiffusion\n# isInitiated : TRUE\n## engine :\nNATIVE_SERIAL\n# coordinateSystem : 3\n# timeDependency : 0\n# nsd : 0\n# nnt : 0\n# tdof : 0\n# dt : 0.00000\n# startTime : 0.00000\n# endTime : 0.00000\n# currentTime : 0.00000\n# currentTimeStep : 0\n# totalTimeStep : 0\n# elemToMatID : NOT allocated\n# Linear Solver : ASSOCIATED\n# Tangent matrix : NOT ASSOCIATED\n# Procedure pointer Assemble : NOT ASSOCIATED\n# Procedure pointer AssembleTanMat : NOT ASSOCIATED\n# Procedure pointer AssembleRHS : NOT ASSOCIATED\n# Procedure pointer Solve : NOT ASSOCIATED\n# Procedure pointer Update : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer WriteData : NOT ASSOCIATED\n# Procedure pointer SaveState : NOT ASSOCIATED\n# Procedure pointer LoadState : NOT ASSOCIATED\n## domainFile :\n./mesh.h5\n# tMaterials : 2\n# material : ALLOCATED, SIZE[2]\n## material(1) :\n# name : SolidMaterial\n# massDensity : 1.00000\ndiffusivity :\n# isUserFunctionSet: FALSE\n# returnType:Scalar\n# argType:Constant\n# scalarValue: 1.00000\n## material(2) :\n# name : SolidMaterial\n# massDensity : 1.00000\ndiffusivity :\n# isUserFunctionSet: FALSE\n# returnType:Scalar\n# argType:Constant\n# scalarValue: 1.00000\n# materialToMesh : ALLOCATED, SIZE[2]\n# # materialToMesh(1) :\n# isInitiated : TRUE\n# isSelectionByMeshID : T\n# isSelectionByElemNum : F\n# isSelectionByNodeNum : F\n# isSelectionByBox : F\n# SurfaceMeshID :\nsize : 1\n1\n# # materialToMesh(2) :\n# isInitiated : TRUE\n# isSelectionByMeshID : T\n# isSelectionByElemNum : F\n# isSelectionByNodeNum : F\n# isSelectionByBox : F\n# SurfaceMeshID :\nsize : 1\n2\n# baseContinuity :H1\n# baseInterpolation :LagrangeInterpolation\n# quadratureType :GaussLegendre\n# DBC : ALLOCATED, SIZE[2]\n# name : ZeroDBC\n# idof : 1\n# nodalValueType : CONSTANT\n# useFunction : F\n# Boundary :\n# isInitiated : TRUE\n# isSelectionByMeshID : T\n# isSelectionByElemNum : F\n# isSelectionByNodeNum : F\n# isSelectionByBox : F\n# CurveMeshID :\nsize : 1\n3\n# NodalValue : 0.00000\n# name : NonZeroDBC\n# idof : 1\n# nodalValueType : CONSTANT\n# useFunction : F\n# Boundary :\n# isInitiated : TRUE\n# isSelectionByMeshID : T\n# isSelectionByElemNum : F\n# isSelectionByNodeNum : F\n# isSelectionByBox : F\n# CurveMeshID :\nsize : 1\n6\n# NodalValue : 1.00000\n# Dom : NOT ASSOCIATED\n# rhs : NOT ASSOCIATED\n# sol : NOT ASSOCIATED\n# nodeCoord : NOT ASSOCIATED\nLinearStaticCDR is in CONSERVATIVE form\n# vel : NOT ASSOCIATED\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},87342:(e,n,a)=>{a.d(n,{Z:()=>i});const i=a.p+"assets/images/mesh-881b52a597978030aeba841d3621c0d6.png"},11151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>o});var i=a(67294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);