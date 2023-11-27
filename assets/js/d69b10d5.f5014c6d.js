"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[4917],{54213:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=n(85893),t=n(11151);const s={title:"LinearStaticCDR example 14c",authors:"Vikas Sharma, Ph. D.",date:"30 Nov 2021",update:"30 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","LinearStaticCDR/Export","LinearStaticCDR/AssembleTanmat","LinearStaticCDR/AssembleRHS","LinearStaticCDR/Assemble","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},r="LinearStaticCDR example 14c",l={id:"LinearStaticCDR/LinearStaticCDR_test_14c",title:"LinearStaticCDR example 14c",description:'!!! note ""',source:"@site/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_14c.md",sourceDirName:"LinearStaticCDR",slug:"/LinearStaticCDR/LinearStaticCDR_test_14c",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_14c",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/LinearStaticCDR/LinearStaticCDR_test_14c.md",tags:[{label:"SetLinearStaticCDRParam",permalink:"/docs-api/tags/set-linear-static-cdr-param"},{label:"LinearStaticCDR/Initiate",permalink:"/docs-api/tags/linear-static-cdr-initiate"},{label:"LinearStaticCDR/CheckEssentialParam",permalink:"/docs-api/tags/linear-static-cdr-check-essential-param"},{label:"LinearStaticCDR/AddMaterial",permalink:"/docs-api/tags/linear-static-cdr-add-material"},{label:"LinearStaticCDR/AddDirichletBC",permalink:"/docs-api/tags/linear-static-cdr-add-dirichlet-bc"},{label:"LinearStaticCDR/GetDirichletBCPointer",permalink:"/docs-api/tags/linear-static-cdr-get-dirichlet-bc-pointer"},{label:"LinearStaticCDR/Export",permalink:"/docs-api/tags/linear-static-cdr-export"},{label:"LinearStaticCDR/AssembleTanmat",permalink:"/docs-api/tags/linear-static-cdr-assemble-tanmat"},{label:"LinearStaticCDR/AssembleRHS",permalink:"/docs-api/tags/linear-static-cdr-assemble-rhs"},{label:"LinearStaticCDR/Assemble",permalink:"/docs-api/tags/linear-static-cdr-assemble"},{label:"DirichletBC/Set",permalink:"/docs-api/tags/dirichlet-bc-set"},{label:"LinearStaticCDR/Display",permalink:"/docs-api/tags/linear-static-cdr-display"},{label:"Domain/Initiate",permalink:"/docs-api/tags/domain-initiate"},{label:"Domain/Open",permalink:"/docs-api/tags/domain-open"},{label:"HDF5File/Initiate",permalink:"/docs-api/tags/hdf-5-file-initiate"},{label:"HDF5File/Open",permalink:"/docs-api/tags/hdf-5-file-open"},{label:"SetLinSolverParam",permalink:"/docs-api/tags/set-lin-solver-param"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"LinearStaticCDR example 14c",authors:"Vikas Sharma, Ph. D.",date:"30 Nov 2021",update:"30 Nov 2021",tags:["SetLinearStaticCDRParam","LinearStaticCDR/Initiate","LinearStaticCDR/CheckEssentialParam","LinearStaticCDR/AddMaterial","LinearStaticCDR/AddDirichletBC","LinearStaticCDR/GetDirichletBCPointer","LinearStaticCDR/Export","LinearStaticCDR/AssembleTanmat","LinearStaticCDR/AssembleRHS","LinearStaticCDR/Assemble","DirichletBC/Set","LinearStaticCDR/Display","Domain/Initiate","Domain/Open","HDF5File/Initiate","HDF5File/Open","SetLinSolverParam"]},sidebar:"tutorialSidebar",previous:{title:"LinearStaticCDR example 14b",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_14b"},next:{title:"LinearStaticCDR example 15",permalink:"/docs-api/LinearStaticCDR/LinearStaticCDR_test_15"}},c={},m=[];function o(e){const a={annotation:"annotation",code:"code",h1:"h1",img:"img",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h1,{id:"linearstaticcdr-example-14c",children:"LinearStaticCDR example 14c"}),"\n",(0,i.jsx)(a.p,{children:'!!! note ""\nExample 2.6.2 from Donea and Huerta 2003 text book.'}),"\n",(0,i.jsx)(a.p,{children:"Mesh used in this example is given below."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{src:n(62150).Z+"",width:"576",height:"781"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["domain ",(0,i.jsx)(a.span,{className:"katex-error",title:"ParseError: KaTeX parse error: Invalid delimiter type 'color'",style:{color:"#cc0000"},children:"\\left \\[0,1 \\right \\]"})]}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:"\u03d5"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"("}),(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mo,{stretchy:"false",children:")"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"0"}),(0,i.jsx)(a.mo,{separator:"true",children:","}),(0,i.jsx)(a.mi,{children:"\u03d5"}),(0,i.jsx)(a.mo,{stretchy:"false",children:"("}),(0,i.jsx)(a.mn,{children:"1"}),(0,i.jsx)(a.mo,{stretchy:"false",children:")"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"1"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\phi(0)=0, \\phi(1)=1"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"\u03d5"}),(0,i.jsx)(a.span,{className:"mopen",children:"("}),(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"mclose",children:")"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,i.jsx)(a.span,{className:"mord",children:"0"}),(0,i.jsx)(a.span,{className:"mpunct",children:","}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"\u03d5"}),(0,i.jsx)(a.span,{className:"mopen",children:"("}),(0,i.jsx)(a.span,{className:"mord",children:"1"}),(0,i.jsx)(a.span,{className:"mclose",children:")"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:"\u03bd"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"1"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"\\nu=1"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.4306em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.06366em"},children:"\u03bd"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(a.span,{className:"mord",children:"1"})]})]})]})}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:"P"}),(0,i.jsx)(a.mi,{children:"e"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"5.0"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"Pe=5.0"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6833em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"e"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(a.span,{className:"mord",children:"5.0"})]})]})]})," this is obtained by changing the velocity"]}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsxs)(a.span,{className:"katex",children:[(0,i.jsx)(a.span,{className:"katex-mathml",children:(0,i.jsx)(a.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(a.semantics,{children:[(0,i.jsxs)(a.mrow,{children:[(0,i.jsx)(a.mi,{children:"h"}),(0,i.jsx)(a.mo,{children:"="}),(0,i.jsx)(a.mn,{children:"0.1"})]}),(0,i.jsx)(a.annotation,{encoding:"application/x-tex",children:"h=0.1"})]})})}),(0,i.jsxs)(a.span,{className:"katex-html","aria-hidden":"true",children:[(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6944em"}}),(0,i.jsx)(a.span,{className:"mord mathnormal",children:"h"}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.jsx)(a.span,{className:"mrel",children:"="}),(0,i.jsx)(a.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,i.jsxs)(a.span,{className:"base",children:[(0,i.jsx)(a.span,{className:"strut",style:{height:"0.6444em"}}),(0,i.jsx)(a.span,{className:"mord",children:"0.1"})]})]})]})}),"\n"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'PROGRAM main\n    USE easifemBase\n    USE easifemClasses\n    USE easifemMaterials\n    USE easifemKernels\n    USE LinearStaticCDR_Class\n    IMPLICIT NONE\n    TYPE(LinearStaticCDR_) :: obj\n    TYPE(ParameterList_) :: param\n    TYPE(Domain_) :: dom\n    TYPE( HDF5File_ ) :: domainFile\n    TYPE( HDF5File_ ) :: outfile\n    TYPE( MeshSelection_ ) :: region\n    CLASS( DirichletBC_ ), POINTER :: dbc\n    CHARACTER( LEN = * ), PARAMETER :: &\n      & domainfilename="./test14.domain.h5"\n    CHARACTER( LEN = * ), PARAMETER :: &\n        & outfileName="./test14c.output.h5"\n    INTEGER(I4B), PARAMETER :: tMaterials = 1, &\n      & tDirichletBC=2, &\n      & solverName = LIS_GMRES, &\n      & preconditionOption=LEFT_PRECONDITION, &\n      & convergenceIn = convergenceInRes, &\n      & convergenceType=relativeConvergence, &\n      & maxIter = 100, &\n      & KrylovSubspaceSize=20\n    REAL(DFP), parameter :: leftphi=0.0, &\n      & rightphi=1.0, h=0.1, pe=5.0, nu=1.0\n    REAL(DFP), parameter :: cvel = pe * 2.0 * nu / h\n'})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "ParameterList"\nInitiate an instance of [[ParameterList_]]'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "LinearStaticCDR"\nSet the PARAMETER for [[LinearStaticCDR_]]'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'    CALL SetLinearStaticCDRParam( param=param, &\n      & engine="NATIVE_SERIAL", &\n      & isConservative=.FALSE., &\n      & coordinateSystem=KERNEL_2D, &\n      & tMaterials=tMaterials, &\n      & tDirichletBC=tDirichletBC, &\n      & domainFile=domainFileName, &\n      & baseContinuity="H1", &\n      & baseInterpolation="LagrangeInterpolation", &\n      & quadratureType="GaussLegendre" )\n'})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "LinSolver"\nSet the PARAMETER for [[LinSolver_]].'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL SetLinSolverParam( &\n      & param=param, &\n      & solverName=solverName,&\n      & preconditionOption=preconditionOption, &\n      & convergenceIn=convergenceIn, &\n      & convergenceType=convergenceType, &\n      & maxIter=maxIter, &\n      & relativeToRHS=.TRUE., &\n      & KrylovSubspaceSize=KrylovSubspaceSize, &\n      & rtol=1.0D-10, &\n      & atol=1.0D-10 )\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "Domain"\nInitiates computation domain.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL domainFile%Initiate(filename=domainFileName, mode=\"READ\")\n    CALL domainFile%Open()\n    CALL dom%Initiate( domainFile, '' )\n    CALL domainFile%Deallocate()\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "LinearStaticCDR"\nInitiate an instace of [[LinearStaticCDR_]] kernel'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Initiate( param=param, dom=dom )\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "addMaterial 1"\nAdd another material and domain region in the [[LinearStaticCDR_]] kernel.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'    CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n    CALL region%Add( dim=2, meshID=[1] )\n    CALL SetSolidMaterialParam( param=param, &\n      & name="SolidMaterial", &\n      & massDensity=1.0_DFP, &\n      & diffusivity=nu )\n    CALL obj%AddMaterial( materialNo=1, materialName="SolidMaterial",  &\n      & param=param, region=region )\n    CALL region%Deallocate()\n'})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "SetDirichletBC 1"\nNow we set the Dirichlet boundary condition. First we SELECT the mesh\nboundary, THEN we prescribe the boundary condition.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="ZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[4] )\n    CALL obj%AddDirichletBC( dbcNo=1, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=1 )\n    CALL dbc%Set( ConstantNodalValue=leftphi ); dbc=>NULL()\n'})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "SetDirichletBC 2"\nLet us repeat the PROCEDURE mentioned above to prescribe another boundary condition.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'    CALL SetDirichletBCParam(param=param, name="NonZeroDBC", idof=1, &\n      & nodalValueType=Constant, useFunction=.FALSE. )\n    CALL region%Initiate( isSelectionByMeshID=.TRUE.)\n    CALL region%Add( dim=1, meshID=[2] )\n    CALL obj%AddDirichletBC( dbcNo=2, boundary=region, param=param )\n    CALL region%Deallocate()\n    dbc => obj%GetDirichletBCPointer( dbcNo=2 )\n    CALL dbc%Set( ConstantNodalValue=rightphi ); dbc=>NULL()\n'})}),"\n",(0,i.jsxs)(a.p,{children:['!!! note "Set"\nNow that we are done setting the kernels properties, we will CALL ',(0,i.jsx)(a.code,{children:"Set"})," method."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%set()\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "SetVelocity"\nLet us set the convective velocity'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%SetVelocity(constantVelocity=[cvel, 0.0_DFP])\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "AssembleTanmat"\nLet us assemble the tangent matrix.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"   CALL obj%AssembleTanMat()\n   CALL obj%AssembleRHS()\n   CALL obj%Assemble()\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "Solve"\nsolve the system of linear equations.'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Solve()\n    CALL obj%Update(reset=.true.)\n"})}),"\n",(0,i.jsx)(a.p,{children:'!!! note "Export"\nNow we export the kernel [[HDF5File_]] file'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:'    CALL outfile%Initiate(outfileName, "NEW")\n    CALL outfile%Open()\n    CALL obj%WriteData(outfile, "/1")\n    CALL outfile%Deallocate()\n'})}),"\n",(0,i.jsx)(a.p,{children:'!!! settings "Cleanup"'}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-fortran",children:"    CALL obj%Deallocate( )\n    CALL dom%Deallocate()\n    CALL param%Deallocate()\n    CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},62150:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/mesh-881b52a597978030aeba841d3621c0d6.png"},11151:(e,a,n)=>{n.d(a,{Z:()=>l,a:()=>r});var i=n(67294);const t={},s=i.createContext(t);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);