"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[42793],{43444:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=a(85893),i=a(11151);const r={authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"LinearStaticCDR example 3",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},s="LinearStaticCDR example 3",o={id:"LinearStaticCDR/LinearStaticCDR_test_3",title:"LinearStaticCDR example 3",description:'!!! note ""',source:"@site/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_3.md",sourceDirName:"LinearStaticCDR",slug:"/LinearStaticCDR/LinearStaticCDR_test_3",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_3.md",tags:[{label:"SetLinearStaticCDRParam",permalink:"/docs-api/tags/set-linear-static-cdr-param"},{label:"LinearStaticCDR/Initiate",permalink:"/docs-api/tags/linear-static-cdr-initiate"},{label:"LinearStaticCDR/CheckEssentialParam",permalink:"/docs-api/tags/linear-static-cdr-check-essential-param"},{label:"LinearStaticCDR/Display",permalink:"/docs-api/tags/linear-static-cdr-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{authors:"Vikas Sharma, Ph. D.",date:"22 Oct 2021",update:"14 Nov 2021",title:"LinearStaticCDR example 3",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"LinearStaticCDR example 2",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_2"},next:{title:"LinearStaticCDR example 4",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_4"}},l={},c=[{value:"Modules and classes",id:"modules-and-classes",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"linearstaticcdr-example-3",children:"LinearStaticCDR example 3"}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nThis example shows how to initiate an instance of [[LinearStaticCDR_]]'}),"\n",(0,t.jsx)(n.h2,{id:"modules-and-classes",children:"Modules and classes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[[ParameterList_]]"}),"\n",(0,t.jsx)(n.li,{children:"[[LinearStaticCDR_]]"}),"\n",(0,t.jsx)(n.li,{children:"[[HDF5File_]]"}),"\n",(0,t.jsx)(n.li,{children:"[[Domain_]]"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:'!!! notes ""\nUSE modules and declare variables'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemKernels\n    USE LinearStaticCDR_Class\n    IMPLICIT NONE\n    TYPE(LinearStaticCDR_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    CHARACTER( LEN = * ), PARAMETER :: domainFileName="./mesh.h5"\n    TYPE( HDF5File_ ) :: domainFile\n    INTEGER(I4B), PARAMETER :: tMaterials = 2, tDirichletBC=4, &\n      & solverName = LIS_GMRES, preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n'})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[ParameterList_]].'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%initiate()\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nSet parameters for [[LinearStaticCDR_]] kernel.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'    CALL SetLinearStaticCDRParam( &\n      & param=param, &\n      & isConservative=.FALSE., &\n      & engine="NATIVE_SERIAL", &\n      & coordinateSystem=KERNEL_2D, &\n      & tMaterials=tMaterials, &\n      & tDirichletBC=tDirichletBC, &\n      & domainFile=domainFileName, &\n      & baseContinuity="H1", &\n      & baseInterpolation="LagrangeInterpolation", &\n      & quadratureType="GaussLegendre" )\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.code,{children:"baseContinuity"}),", ",(0,t.jsx)(n.code,{children:"baseInterpolation"}),", and ",(0,t.jsx)(n.code,{children:"quadratureType"})," are OPTIONAL."]}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nSetting parameters for [[LinSolver_]]'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nInitiate the computation domain.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nInitiate an instance of [[LinearStaticCDR_]].'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nDisplay the content of the kernel.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'    CALL obj%Display( "LinearStaticCDR :: ")\n'})}),"\n",(0,t.jsx)(n.p,{children:'??? mesage "Results"'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# LinearStaticCDR ::\n## name :\nStaticDiffusion\n# isInitiated : TRUE\n## engine :\nNATIVE_SERIAL\n# coordinateSystem : 3\n# timeDependency : 0\n# nsd : 0\n# nnt : 0\n# tdof : 0\n# dt : 0.00000\n# startTime : 0.00000\n# endTime : 0.00000\n# currentTime : 0.00000\n# currentTimeStep : 0\n# totalTimeStep : 0\n# elemToMatID : NOT allocated\n# Linear Solver : ASSOCIATED\n# Tangent matrix : NOT ASSOCIATED\n# Procedure pointer Assemble : NOT ASSOCIATED\n# Procedure pointer AssembleTanMat : NOT ASSOCIATED\n# Procedure pointer AssembleRHS : NOT ASSOCIATED\n# Procedure pointer Solve : NOT ASSOCIATED\n# Procedure pointer Update : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer isConverged : NOT ASSOCIATED\n# Procedure pointer WriteData : NOT ASSOCIATED\n# Procedure pointer SaveState : NOT ASSOCIATED\n# Procedure pointer LoadState : NOT ASSOCIATED\n## domainFile :\n./mesh.h5\n# tMaterials : 2\n# material : ALLOCATED, SIZE[2]\n# material(1) : NOT ASSOCIATED\n# material(2) : NOT ASSOCIATED\n# materialToMesh : ALLOCATED, SIZE[2]\n# # materialToMesh(1) :\n# The object is not initiated, nothing to show!\n# # materialToMesh(2) :\n# The object is not initiated, nothing to show!\n# baseContinuity :H1\n# baseInterpolation :LagrangeInterpolation\n# quadratureType :GaussLegendre\n# DBC : ALLOCATED, SIZE[4]\n# DBC(1) : NOT ASSOCIATED\n# DBC(2) : NOT ASSOCIATED\n# DBC(3) : NOT ASSOCIATED\n# DBC(4) : NOT ASSOCIATED\n# Dom : NOT ASSOCIATED\n# rhs : NOT ASSOCIATED\n# sol : NOT ASSOCIATED\n# nodeCoord : NOT ASSOCIATED\nLinearStaticCDR is in CONVECTIVE form\n# vel : NOT ASSOCIATED\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>s});var t=a(67294);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);