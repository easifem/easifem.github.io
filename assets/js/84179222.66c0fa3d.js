"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16968],{28871:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var i=a(85893),r=a(11151);const t={},o=void 0,s={id:"STDarcyBrinkmann/STDarcyBrinkmann_test_3",title:"STDarcyBrinkmann_test_3",description:"!> authors: Vikas Sharma, Ph. D.",source:"@site/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_3.md",sourceDirName:"STDarcyBrinkmann",slug:"/STDarcyBrinkmann/STDarcyBrinkmann_test_3",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_3",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_3.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STDarcyBrinkmann_test_2",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_2"},next:{title:"STDarcyBrinkmann_test_4",permalink:"/docs-api/STDarcyBrinkmann/STDarcyBrinkmann_test_4"}},m={},c=[];function l(n){const e={p:"p",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"!> authors: Vikas Sharma, Ph. D.\n! date: 29 Sept 2021\n! update:\n!   - 21 Oct 2021\n! summary: Testing Initiate, Display, and Deallocate, different domain"}),"\n",(0,i.jsx)(e.p,{children:"! [[STDarcyBrinkmann_]], [[ParameterList_]], [[HDF5File_]]"}),"\n",(0,i.jsx)(e.p,{children:"! [[Domain_]]"}),"\n",(0,i.jsx)(e.p,{children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nUSE easifemKernels\nUSE STDarcyBrinkmann_Class\nIMPLICIT NONE\nTYPE( STDarcyBrinkmann_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( HDF5File_ ) :: domainFileForPressure\nTYPE( HDF5File_ ) :: domainFileForVelocity\nTYPE( Domain_ ), TARGET :: domainForPressure\nTYPE( Domain_ ), TARGET :: domainForVelocity\nTYPE( DomainPointer_ ) :: domains( 2 )\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForPressure="./mesh_tri3.h5"\nCHARACTER( LEN = * ), PARAMETER :: domainFileNameForVelocity="./mesh_tri6.h5"\n!> main\n! #ParameterList/Initiate\nCALL FPL_INIT(); CALL param%Initiate()\n! #SetSTDarcyBrinkmannParam\nCALL SetSTDarcyBrinkmannParam( &\n& param=param, &\n& engine="NATIVE_SERIAL", &\n& nnt=2, &\n& startTime=0.0_DFP, &\n& endTime=10.0_DFP, &\n& dt=0.001_DFP, &\n& CoordinateSystem=KERNEL_2D, &\n& tPorousMaterials=2, &\n& tFluidMaterials=1, &\n& tDirichletBCForPressure=1, &\n& tDirichletBCForVelocity=0, &\n& domainFileForPressure=domainFileNameForPressure, &\n& domainFileForVelocity=domainFileNameForVelocity )\n! #SetLinSolverParam\nCALL SetLinSolverParam( param=param, solverName=LIS_GMRES,&\n& preconditionOption=LEFT_PRECONDITION, convergenceIn=convergenceInRes, &\n& convergenceType=relativeConvergence, maxIter=100,relativeToRHS=.TRUE.,&\n& KrylovSubspaceSize=20,rtol=1.0D-10,atol=1.0D-10 )\n! #HDF5File/Initiate\nCALL domainFileForPressure%Initiate( filename=domainFileNameForPressure, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForPressure%Open()\n! Domain/Initiate\nCALL domainForPressure%Initiate( domainFileForPressure, "" )\n! #HDF5File/Initiate\nCALL domainFileForVelocity%Initiate( filename=domainFileNameForVelocity, &\n& MODE="READ" )\n! #HDF5File/Open\nCALL domainFileForVelocity%Open()\n! #Domain/Initiate\nCALL domainForVelocity%Initiate( domainFileForVelocity, "" )\n! Domains\ndomains(1)%ptr => domainForVelocity\ndomains(2)%ptr => domainForPressure\n! #STDarcyBrinkmann/Initiate\nCALL obj%Initiate(param=param, domains=domains )\n! #STDarcyBrinkmann/Display\nCALL obj%Display("")\n! #STDarcyBrinkmann/Deallocate\nCALL obj%Deallocate()\n! #Domain/Deallocate\nCALL domainForPressure%Deallocate()\nCALL domainForVelocity%Deallocate()\n! #HDF5File/Close\nCALL domainFileForPressure%Deallocate()\nCALL domainFileForVelocity%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main'})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},11151:(n,e,a)=>{a.d(e,{Z:()=>s,a:()=>o});var i=a(67294);const r={},t=i.createContext(r);function o(n){const e=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),i.createElement(t.Provider,{value:e},n.children)}}}]);