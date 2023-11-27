"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[36876],{70988:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(85893),t=i(11151);const r={title:"LinearStaticCDR example 9",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},l="LinearStaticCDR example 9",o={id:"LinearStaticCDR/LinearStaticCDR_test_9",title:"LinearStaticCDR example 9",description:'!!! note ""',source:"@site/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_9.md",sourceDirName:"LinearStaticCDR",slug:"/LinearStaticCDR/LinearStaticCDR_test_9",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_9",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_9.md",tags:[{label:"SetLinearStaticCDRParam",permalink:"/docs-api/tags/set-linear-static-cdr-param"},{label:"LinearStaticCDR/Initiate",permalink:"/docs-api/tags/linear-static-cdr-initiate"},{label:"LinearStaticCDR/CheckEssentialParam",permalink:"/docs-api/tags/linear-static-cdr-check-essential-param"},{label:"LinearStaticCDR/AddMaterial",permalink:"/docs-api/tags/linear-static-cdr-add-material"},{label:"LinearStaticCDR/AddDirichletBC",permalink:"/docs-api/tags/linear-static-cdr-add-dirichlet-bc"},{label:"LinearStaticCDR/GetDirichletBCPointer",permalink:"/docs-api/tags/linear-static-cdr-get-dirichlet-bc-pointer"},{label:"DirichletBC/Set",permalink:"/docs-api/tags/dirichlet-bc-set"},{label:"LinearStaticCDR/Display",permalink:"/docs-api/tags/linear-static-cdr-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"LinearStaticCDR example 9",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"LinearStaticCDR example 8",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_8"},next:{title:"LisLinSolver",permalink:"/docs-api/LisLinSolver/"}},s={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage",id:"usage-1",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"linearstaticcdr-example-9",children:"LinearStaticCDR example 9"}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nThis example shows how to export the content of [[LinearStaticCDR_]] kernel in a [[HDF5File_]] file FORMAT.'}),"\n",(0,n.jsx)(a.p,{children:"Mesh used in this example is given below."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:i(87342).Z+"",width:"576",height:"781"})}),"\n",(0,n.jsx)(a.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"[[HDF5File_]]"}),"\n",(0,n.jsx)(a.li,{children:"[[MSHFile_]]"}),"\n",(0,n.jsx)(a.li,{children:"[[ParameterList_]]"}),"\n",(0,n.jsx)(a.li,{children:"[[Domain_]]"}),"\n",(0,n.jsx)(a.li,{children:"[[MeshSelection_]]"}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(a.h2,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemMaterials\n    USE easifemKernels\n    USE LinearStaticCDR_Class\n    IMPLICIT NONE\n    TYPE(LinearStaticCDR_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n    CHARACTER( LEN = * ), PARAMETER :: &\n        & outfileName="./LinearStaticCDRExport.h5"\n    TYPE( HDF5File_ ) :: domainFile\n    TYPE( HDF5File_ ) :: outfile\n    TYPE( MeshSelection_ ) :: region\n    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=2, &\n      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n    CLASS( DirichletBC_ ), POINTER :: dbc\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]]'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nSet the PARAMETER for [[LinearStaticCDR_]]'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL SetLinearStaticCDRParam( param=param, &\n      & engine="NATIVE_SERIAL", &\n      & isConservative = .False., &\n      & coordinateSystem=KERNEL_2D, &\n      & tMaterials=tMaterials, &\n      & tDirichletBC=tDirichletBC, &\n      & domainFile=domainFileName, &\n      & baseContinuity="H1", &\n      & baseInterpolation="LagrangeInterpolation", &\n      & quadratureType="GaussLegendre" )\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nSet the PARAMETER for [[LinSolver_]].'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nInitiates computation domain.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note ""\nInitiate an instace of [[LinearStaticCDR_]] kernel'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "addMaterial 1"\nAdd another material and domain region in the [[LinearStaticCDR_]] kernel.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[1] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "addMaterial 2"\nAdd another material and domain region in the [[LinearStaticCDR_]] kernel.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[2] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "SetDirichletBC 1"\nNow we set the Dirichlet boundary condition. First we SELECT the mesh\nboundary, THEN we prescribe the boundary condition.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[3] )\n    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=1 )\n    CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "SetDirichletBC 2"\nLet us repeat the PROCEDURE mentioned above to prescribe another boundary condition.'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[6] )\n    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=2 )\n    CALL dbc%Set( ConstantNodalValue=1.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,n.jsxs)(a.p,{children:['!!! note "Set"\nNow that we are done setting the kernels properties, we will CALL ',(0,n.jsx)(a.code,{children:"Set"})," method."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%set()\n"})}),"\n",(0,n.jsx)(a.p,{children:'!!! note "Export"\nNow we export the kernel in [[HDF5File_]] file'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'    CALL outfile%Initiate(outfileName, "NEW")\n    CALL outfile%Open()\n    CALL obj%Export(outfile, "")\n    CALL outfile%Deallocate()\n'})}),"\n",(0,n.jsx)(a.p,{children:'!!! settings "Cleanup"'}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},87342:(e,a,i)=>{i.d(a,{Z:()=>n});const n=i.p+"assets/images/mesh-881b52a597978030aeba841d3621c0d6.png"},11151:(e,a,i)=>{i.d(a,{Z:()=>o,a:()=>l});var n=i(67294);const t={},r=n.createContext(t);function l(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);