"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[14095],{61982:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>A,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=a(85893),t=a(11151),s=a(74866),o=a(85162);function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This example tests and demonstrates the usage of ",(0,r.jsx)(n.code,{children:"Assemble()"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemMaterials\n  USE easifemKernels\n  USE SteadyStokes111_Class\n  IMPLICIT NONE\n  TYPE( SteadyStokes111_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( HDF5File_ ) :: domainFile\n  TYPE( Domain_ ) :: dom\n  INTEGER( I4B ), PARAMETER :: refPressureNode=2\n  REAL( DFP ), PARAMETER :: refPressure = 0.0_DFP\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForVelocity = 2\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForPressure = 0\n  INTEGER( I4B ), PARAMETER :: tFluidMaterials= 1\n  INTEGER( I4B ), PARAMETER :: stabParamOption= 1\n  LOGICAL( LGT ), PARAMETER :: isSubscalePressure = .FALSE.\n  LOGICAL( LGT ), PARAMETER :: isBoundarySubscale = .FALSE.\n  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]\n  LOGICAL( LGT ), PARAMETER :: isConservativeForm = .TRUE.\n  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"\n  CHARACTER( * ), PARAMETER :: domainFileName="./long_pipe_tri3.h5"\n  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN\n  INTEGER( I4B ), PARAMETER :: maxIter = 100\n  REAL( DFP ), PARAMETER :: rtoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: rtoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: toleranceForSteadyState = 1.0E-6\n  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"\n  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"\n  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"\n  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_GMRES\n  INTEGER(I4B), PARAMETER :: ls_preconditionOption= LEFT_PRECONDITION\n  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes\n  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence\n  INTEGER( I4B ), PARAMETER :: ls_maxIter = 100\n  LOGICAL( LGT ), PARAMETER :: ls_relativeToRHS = .TRUE.\n  INTEGER( I4B ), PARAMETER :: ls_KrylovSubspaceSize=20\n  REAL( DFP ) , PARAMETER :: ls_rtol=1.0E-10\n  REAL( DFP ) , PARAMETER :: ls_atol=1.0E-10\n  TYPE( MeshSelection_ ) :: region\n  INTEGER( I4B ), PARAMETER :: fluid_meshID(1) = [1]\n  REAL( DFP ), PARAMETER :: fluid_massDensity=1000.0\n  REAL( DFP ), PARAMETER :: fluid_dynamicViscosity=0.001_DFP\n  CHARACTER( LEN = * ), PARAMETER :: fluid_stressStrainModel="NewtonianFluidModel"\n  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()\n'})}),"\n",(0,r.jsx)(n.p,{children:"Set parameters for kernel."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Set parameters for the kernel."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetSteadyStokes111Param( &\n    & param=param, &\n    & isConservativeForm=isConservativeForm, &\n    & gravity = gravity, &\n    & isSubscalePressure = isSubscalePressure, &\n    & isBoundarySubscale = isBoundarySubscale, &\n    & stabParamOption = stabParamOption, &\n    & domainFile = domainFileName, &\n    & engine=engine, &\n    & CoordinateSystem=KERNEL_CARTESIAN, &\n    & maxIter =maxIter, &\n    & rtoleranceForPressure = rtoleranceForPressure, &\n    & rtoleranceForVelocity = rtoleranceForVelocity, &\n    & atoleranceForPressure = atoleranceForPressure, &\n    & atoleranceForVelocity = atoleranceForVelocity, &\n    & toleranceForSteadyState = toleranceForSteadyState, &\n    & tFluidMaterials=tFluidMaterials, &\n    & tDirichletBCForPressure=tDirichletBCForPressure, &\n    & tDirichletBCForVelocity=tDirichletBCForVelocity, &\n    & baseInterpolationForSpace=baseInterpolationForSpace, &\n    & baseContinuityForSpace=baseContinuityForSpace, &\n    & quadratureTypeForSpace=quadratureTypeForSpace, &\n    & refPressureNode=refPressureNode, &\n    & refPressure=refPressure &\n    & )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Setting parameters for linear solver."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinSolverParam( &\n    & param=param, &\n    & solverName=ls_solverName,&\n    & preconditionOption=ls_preconditionOption, &\n    & convergenceIn=ls_convergenceIn, &\n    & convergenceType=ls_convergenceType, &\n    & maxIter=ls_maxIter, &\n    & relativeToRHS=ls_relativeToRHS, &\n    & KrylovSubspaceSize=ls_KrylovSubspaceSize, &\n    & rtol=ls_rtol, &\n    & atol=ls_atol )\n"})}),"\n",(0,r.jsx)(n.p,{children:"Initiate domain by reading data from a domain file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )\n  CALL domainFile%Open()\n  CALL dom%Initiate( domainFile, "" )\n  CALL domainFile%Deallocate()\n'})}),"\n",(0,r.jsx)(n.p,{children:"Initiate the kernel."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Initiate(param=param, dom=dom )\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Add fluid material to kernel. To do so, we first create an instance of ",(0,r.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"}),". Then, we add this instance to the kernel."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=dom%GetNSD(), meshID=fluid_meshID )\n  CALL SetFluidMaterialParam( &\n    & param=param, &\n    & name="fluidMaterial", &\n    & massDensity=fluid_massDensity, &\n    & dynamicViscosity = fluid_dynamicViscosity, &\n    & stressStrainModel=fluid_stressStrainModel )\n  CALL SetNewtonianFluidModelParam( &\n    & param = param, &\n    & dynamicViscosity = fluid_dynamicViscosity )\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddFluidMaterial( &\n    & materialNo=1, &\n    & materialName="fluidMaterial", &\n    & param=param, &\n    & region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now we show how to add dirichlet boundary condition. To this end first we create an instance of ",(0,r.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"})," to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel."]}),"\n",(0,r.jsx)(n.p,{children:"set parameters for dirichlet boundary condition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"#define BOTTOM 1\n#define RIGHT 2\n#define TOP 3\n#define LEFT 4\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="V2=0", &\n    & idof=2, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,r.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, TOP, LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=1, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP )\n  dbc=>NULL()\n"})}),"\n",(0,r.jsx)(n.p,{children:"AddDirichletBC, V1=U,\nset parameters for dirichlet boundary condition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="UpstreamV1", &\n    & idof=1, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,r.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=2, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=2 )\n  CALL dbc%Set( ConstantNodalValue=0.01_DFP )\n  dbc=>NULL()\n  CALL region%Deallocate()\n"})}),"\n",(0,r.jsx)(n.p,{children:"AddDirichletBC, P=0\nset parameters for dirichlet boundary condition:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-comment",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="ZeroP", &\n    & idof=1, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n\n  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=1, meshID=[3] )\n  CALL region%Set()\n\n  CALL obj%AddPressureDirichletBC( dbcNo=1, param=param, &\n    & boundary=region )\n  dbc => obj%GetPressureDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Set()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we compute the stablizing parameters of finite element method."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%ComputeStabParam()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Assemble tangent matrix."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AssembleTanmat()\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AssembleTanmat_NeumanFacet( )\n"})}),"\n",(0,r.jsx)(n.p,{children:"AssembleRHS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AssembleRHS()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Assemble"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Assemble()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Display the kernel."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,r.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL dom%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}const c={},d="AssembleTanMat_NeumanFacet",u={id:"SteadyStokes111/AssembleTanMat_NeumanFacet",title:"AssembleTanMat_NeumanFacet",description:"Assemble tangent matrix internal facet.",source:"@site/docs/docs-api/SteadyStokes111/AssembleTanMat_NeumanFacet.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/AssembleTanMat_NeumanFacet",permalink:"/docs-api/SteadyStokes111/AssembleTanMat_NeumanFacet",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes111/AssembleTanMat_NeumanFacet.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AssembleTanmat_InternalFacet",permalink:"/docs-api/SteadyStokes111/AssembleTanMat_InternalFacet"},next:{title:"CheckEssentialParam",permalink:"/docs-api/SteadyStokes111/CheckEssentialParam"}},m={},h=[{value:"Interface",id:"interface",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"assembletanmat_neumanfacet",children:"AssembleTanMat_NeumanFacet"}),"\n",(0,r.jsx)(n.p,{children:"Assemble tangent matrix internal facet."}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE AssembleTanmat_NeumanFacet(obj)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n  END SUBROUTINE AssembleTanmat_NeumanFacet\nEND INTERFACE\n"})})}),(0,r.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(l,{})}),(0,r.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function A(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,a)=>{a.d(n,{Z:()=>o});a(67294);var r=a(86010);const t={tabItem:"tabItem_Ymn6"};var s=a(85893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,o),hidden:a,children:n})}},74866:(e,n,a)=>{a.d(n,{Z:()=>g});var r=a(67294),t=a(86010),s=a(12466),o=a(16550),i=a(20469),l=a(91980),c=a(67392),d=a(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function A(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:a,groupId:t}),[A,E]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),b=(()=>{const e=c??A;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),E(e)}),[u,E,s]),tabValues:s}}var E=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=a(85893);function L(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,a=l.indexOf(n),t=i[a].value;t!==r&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function T(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function R(e){const n=A(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(L,{...e,...n}),(0,f.jsx)(T,{...e,...n})]})}function g(e){const n=(0,E.Z)();return(0,f.jsx)(R,{...e,children:u(e.children)},String(n))}},11151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>o});var r=a(67294);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);