"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13636],{7860:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(85893),t=a(11151);const s={title:"StaticDiffusion example 11",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetStaticDiffusionParam","StaticDiffusion/Initiate","StaticDiffusion/CheckEssentialParam","StaticDiffusion/AddMaterial","StaticDiffusion/AddDirichletBC","StaticDiffusion/GetDirichletBCPointer","StaticDiffusion/Export","StaticDiffusion/AssembleTanmat","StaticDiffusion/AssembleRHS","StaticDiffusion/Assemble","DirichletBC/Set","StaticDiffusion/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},o="StaticDiffusion example 11",r={id:"StaticDiffusion/StaticDiffusion_test_11",title:"StaticDiffusion example 11",description:'!!! note ""',source:"@site/docs/docs-api/StaticDiffusion/StaticDiffusion_test_11.md",sourceDirName:"StaticDiffusion",slug:"/StaticDiffusion/StaticDiffusion_test_11",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_11",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/StaticDiffusion/StaticDiffusion_test_11.md",tags:[{label:"SetStaticDiffusionParam",permalink:"/docs-api/tags/set-static-diffusion-param"},{label:"StaticDiffusion/Initiate",permalink:"/docs-api/tags/static-diffusion-initiate"},{label:"StaticDiffusion/CheckEssentialParam",permalink:"/docs-api/tags/static-diffusion-check-essential-param"},{label:"StaticDiffusion/AddMaterial",permalink:"/docs-api/tags/static-diffusion-add-material"},{label:"StaticDiffusion/AddDirichletBC",permalink:"/docs-api/tags/static-diffusion-add-dirichlet-bc"},{label:"StaticDiffusion/GetDirichletBCPointer",permalink:"/docs-api/tags/static-diffusion-get-dirichlet-bc-pointer"},{label:"StaticDiffusion/Export",permalink:"/docs-api/tags/static-diffusion-export"},{label:"StaticDiffusion/AssembleTanmat",permalink:"/docs-api/tags/static-diffusion-assemble-tanmat"},{label:"StaticDiffusion/AssembleRHS",permalink:"/docs-api/tags/static-diffusion-assemble-rhs"},{label:"StaticDiffusion/Assemble",permalink:"/docs-api/tags/static-diffusion-assemble"},{label:"DirichletBC/Set",permalink:"/docs-api/tags/dirichlet-bc-set"},{label:"StaticDiffusion/Display",permalink:"/docs-api/tags/static-diffusion-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"StaticDiffusion example 11",authors:"Vikas Sharma, Ph. D.",date:"25 Nov 2021",update:"25 Nov 2021",tags:["SetStaticDiffusionParam","StaticDiffusion/Initiate","StaticDiffusion/CheckEssentialParam","StaticDiffusion/AddMaterial","StaticDiffusion/AddDirichletBC","StaticDiffusion/GetDirichletBCPointer","StaticDiffusion/Export","StaticDiffusion/AssembleTanmat","StaticDiffusion/AssembleRHS","StaticDiffusion/Assemble","DirichletBC/Set","StaticDiffusion/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"StaticDiffusion example 10",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_10"},next:{title:"StaticDiffusion example 12",permalink:"/docs-api/StaticDiffusion/StaticDiffusion_test_12"}},l={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2},{value:"Usage",id:"usage-1",level:2}];function d(e){const i={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"staticdiffusion-example-11",children:"StaticDiffusion example 11"}),"\n",(0,n.jsxs)(i.p,{children:['!!! note ""\nThis example shows the use of ',(0,n.jsx)(i.code,{children:"AssembleTanmat"})," ",(0,n.jsx)(i.code,{children:"AssembleRHS"})," and ",(0,n.jsx)(i.code,{children:"Assemble"})," method."]}),"\n",(0,n.jsx)(i.p,{children:"Mesh used in this example is given below."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:a(91935).Z+"",width:"576",height:"781"})}),"\n",(0,n.jsx)(i.h2,{id:"use-association",children:"Use association"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"[[HDF5File_]]"}),"\n",(0,n.jsx)(i.li,{children:"[[MSHFile_]]"}),"\n",(0,n.jsx)(i.li,{children:"[[ParameterList_]]"}),"\n",(0,n.jsx)(i.li,{children:"[[Domain_]]"}),"\n",(0,n.jsx)(i.li,{children:"[[MeshSelection_]]"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.h2,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemMaterials\n    USE easifemKernels\n    USE StaticDiffusion_Class\n    IMPLICIT NONE\n    TYPE(StaticDiffusion_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n    CHARACTER( LEN = * ), PARAMETER :: &\n        & outfileName="./StaticDiffusionExport.h5"\n    TYPE( HDF5File_ ) :: domainFile\n    TYPE( HDF5File_ ) :: outfile\n    TYPE( MeshSelection_ ) :: region\n    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=2, &\n      & solverName = LIS_CG, preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n    CLASS( DirichletBC_ ), POINTER :: dbc\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]]'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note ""\nSet the parameter for [[StaticDiffusion_]]'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL SetStaticDiffusionParam( param=param, engine="NATIVE_SERIAL", &\n      & coordinateSystem=KERNEL_2D, tMaterials=tMaterials, &\n      & tDirichletBC=tDirichletBC, domainFile=domainFileName, &\n      & baseContinuity="H1", &\n      & baseInterpolation="LagrangeInterpolation", &\n      & quadratureType="GaussLegendre" )\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! note ""\nSet the parameter for [[LinSolver_]].'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note ""\nInitiates computation domain.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note ""\nInitiate an instace of [[StaticDiffusion_]] kernel'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "addMaterial 1"\nAdd another material and domain region in the [[StaticDiffusion_]] kernel.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[1] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "addMaterial 2"\nAdd another material and domain region in the [[StaticDiffusion_]] kernel.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[2] )\n    CALL SetSolidMaterialParam( param=param, name="SolidMaterial", &\n      & massDensity=1.0_DFP, diffusivity=1.0_DFP )\n    CALL obj%AddMaterial( materialNo=2, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "SetDirichletBC 1"\nNow we set the Dirichlet boundary condition. First we select the mesh\nboundary, then we prescribe the boundary condition.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[3] )\n    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=1 )\n    CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "SetDirichletBC 2"\nLet us repeat the procedure mentioned above to prescribe another boundary condition.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[6] )\n    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=2 )\n    CALL dbc%Set( ConstantNodalValue=1.0_DFP ); dbc=>NULL()\n'})}),"\n",(0,n.jsxs)(i.p,{children:['!!! note "Set"\nNow that we are done setting the kernels properties, we will call ',(0,n.jsx)(i.code,{children:"Set"})," method."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL obj%set()\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "AssembleTanmat"\nLet us assemble the tangent matrix.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"   CALL obj%AssembleTanMat()\n   CALL obj%AssembleRHS()\n   CALL obj%Assemble()\n"})}),"\n",(0,n.jsx)(i.p,{children:'!!! note "Export"\nNow we export the kernel in [[HDF5File_]] file'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'    CALL outfile%Initiate(outfileName, "NEW")\n    CALL outfile%Open()\n    CALL obj%Export(outfile, "")\n    CALL outfile%Deallocate()\n'})}),"\n",(0,n.jsx)(i.p,{children:'!!! settings "Cleanup"'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},91935:(e,i,a)=>{a.d(i,{Z:()=>n});const n=a.p+"assets/images/mesh-881b52a597978030aeba841d3621c0d6.png"},11151:(e,i,a)=>{a.d(i,{Z:()=>r,a:()=>o});var n=a(67294);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);