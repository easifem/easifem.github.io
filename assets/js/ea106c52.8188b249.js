"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20036],{68049:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>A,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var a=r(85893),t=r(11151),s=r(74866),o=r(85162);function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This example tests and demonstrates the usage of ",(0,a.jsx)(n.code,{children:"Assemble()"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemMaterials\n  USE easifemKernels\n  USE SteadyStokes111_Class\n  IMPLICIT NONE\n  TYPE( SteadyStokes111_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( HDF5File_ ) :: domainFile\n  TYPE( Domain_ ) :: dom\n  INTEGER( I4B ), PARAMETER :: refPressureNode=2\n  REAL( DFP ), PARAMETER :: refPressure = 0.0_DFP\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForVelocity = 2\n  INTEGER( I4B ), PARAMETER :: tDirichletBCForPressure = 0\n  INTEGER( I4B ), PARAMETER :: tFluidMaterials= 1\n  INTEGER( I4B ), PARAMETER :: stabParamOption= 1\n  LOGICAL( LGT ), PARAMETER :: isSubscalePressure = .FALSE.\n  LOGICAL( LGT ), PARAMETER :: isBoundarySubscale = .FALSE.\n  REAL( DFP ), PARAMETER :: gravity(3)=[0.0, -9.8, 0.0]\n  LOGICAL( LGT ), PARAMETER :: isConservativeForm = .TRUE.\n  CHARACTER( * ), PARAMETER :: engine="NATIVE_SERIAL"\n  CHARACTER( * ), PARAMETER :: domainFileName="./long_pipe_tri3.h5"\n  INTEGER( I4B ), PARAMETER :: CoordinateSystem = KERNEL_CARTESIAN\n  INTEGER( I4B ), PARAMETER :: maxIter = 100\n  REAL( DFP ), PARAMETER :: rtoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: rtoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForPressure = 1.0E-6\n  REAL( DFP ), PARAMETER :: atoleranceForVelocity = 1.0E-6\n  REAL( DFP ), PARAMETER :: toleranceForSteadyState = 1.0E-6\n  CHARACTER(*), PARAMETER :: baseInterpolationForSpace="LagrangeInterpolation"\n  CHARACTER(*), PARAMETER :: baseContinuityForSpace="H1"\n  CHARACTER(*), PARAMETER :: quadratureTypeForSpace="GaussLegendre"\n  INTEGER(I4B), PARAMETER :: ls_solverName = LIS_GMRES\n  INTEGER(I4B), PARAMETER :: ls_preconditionOption= LEFT_PRECONDITION\n  INTEGER(I4B), PARAMETER :: ls_convergenceIn = convergenceInRes\n  INTEGER(I4B), PARAMETER :: ls_convergenceType = relativeConvergence\n  INTEGER( I4B ), PARAMETER :: ls_maxIter = 100\n  LOGICAL( LGT ), PARAMETER :: ls_relativeToRHS = .TRUE.\n  INTEGER( I4B ), PARAMETER :: ls_KrylovSubspaceSize=20\n  REAL( DFP ) , PARAMETER :: ls_rtol=1.0E-10\n  REAL( DFP ) , PARAMETER :: ls_atol=1.0E-10\n  TYPE( MeshSelection_ ) :: region\n  INTEGER( I4B ), PARAMETER :: fluid_meshID(1) = [1]\n  REAL( DFP ), PARAMETER :: fluid_massDensity=1000.0\n  REAL( DFP ), PARAMETER :: fluid_dynamicViscosity=0.001_DFP\n  CHARACTER( LEN = * ), PARAMETER :: fluid_stressStrainModel="NewtonianFluidModel"\n  CLASS( DirichletBC_ ), POINTER :: dbc => NULL()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Set parameters for kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Set parameters for the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL SetSteadyStokes111Param( &\n    & param=param, &\n    & isConservativeForm=isConservativeForm, &\n    & gravity = gravity, &\n    & isSubscalePressure = isSubscalePressure, &\n    & isBoundarySubscale = isBoundarySubscale, &\n    & stabParamOption = stabParamOption, &\n    & domainFile = domainFileName, &\n    & engine=engine, &\n    & CoordinateSystem=KERNEL_CARTESIAN, &\n    & maxIter =maxIter, &\n    & rtoleranceForPressure = rtoleranceForPressure, &\n    & rtoleranceForVelocity = rtoleranceForVelocity, &\n    & atoleranceForPressure = atoleranceForPressure, &\n    & atoleranceForVelocity = atoleranceForVelocity, &\n    & toleranceForSteadyState = toleranceForSteadyState, &\n    & tFluidMaterials=tFluidMaterials, &\n    & tDirichletBCForPressure=tDirichletBCForPressure, &\n    & tDirichletBCForVelocity=tDirichletBCForVelocity, &\n    & baseInterpolationForSpace=baseInterpolationForSpace, &\n    & baseContinuityForSpace=baseContinuityForSpace, &\n    & quadratureTypeForSpace=quadratureTypeForSpace, &\n    & refPressureNode=refPressureNode, &\n    & refPressure=refPressure &\n    & )\n"})}),"\n",(0,a.jsx)(n.p,{children:"Setting parameters for linear solver."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL SetLinSolverParam( &\n    & param=param, &\n    & solverName=ls_solverName,&\n    & preconditionOption=ls_preconditionOption, &\n    & convergenceIn=ls_convergenceIn, &\n    & convergenceType=ls_convergenceType, &\n    & maxIter=ls_maxIter, &\n    & relativeToRHS=ls_relativeToRHS, &\n    & KrylovSubspaceSize=ls_KrylovSubspaceSize, &\n    & rtol=ls_rtol, &\n    & atol=ls_atol )\n"})}),"\n",(0,a.jsx)(n.p,{children:"Initiate domain by reading data from a domain file."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL domainFile%Initiate( filename=domainFileName, MODE="READ" )\n  CALL domainFile%Open()\n  CALL dom%Initiate( domainFile, "" )\n  CALL domainFile%Deallocate()\n'})}),"\n",(0,a.jsx)(n.p,{children:"Initiate the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Initiate(param=param, dom=dom )\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Add fluid material to kernel. To do so, we first create an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"}),". Then, we add this instance to the kernel."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=dom%GetNSD(), meshID=fluid_meshID )\n  CALL SetFluidMaterialParam( &\n    & param=param, &\n    & name="fluidMaterial", &\n    & massDensity=fluid_massDensity, &\n    & dynamicViscosity = fluid_dynamicViscosity, &\n    & stressStrainModel=fluid_stressStrainModel )\n  CALL SetNewtonianFluidModelParam( &\n    & param = param, &\n    & dynamicViscosity = fluid_dynamicViscosity )\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%AddFluidMaterial( &\n    & materialNo=1, &\n    & materialName="fluidMaterial", &\n    & param=param, &\n    & region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Now we show how to add dirichlet boundary condition. To this end first we create an instance of ",(0,a.jsx)(n.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection"})," to select the region of the mesh. Then we define the dirichlet bonundary condition, and pass these two information to kernel."]}),"\n",(0,a.jsx)(n.p,{children:"set parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"#define BOTTOM 1\n#define RIGHT 2\n#define TOP 3\n#define LEFT 4\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="V2=0", &\n    & idof=2, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,a.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[BOTTOM, TOP, LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=1, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP )\n  dbc=>NULL()\n"})}),"\n",(0,a.jsx)(n.p,{children:"AddDirichletBC, V1=U,\nset parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="UpstreamV1", &\n    & idof=1, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n'})}),"\n",(0,a.jsx)(n.p,{children:"select the mesh region:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=obj%nsd-1, meshID=[LEFT] )\n  CALL region%Set()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add dirichlet boundary condition and the region to kernel:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AddVelocityDirichletBC( &\n    & dbcNo=2, &\n    & param=param, &\n    & boundary=region )\n  dbc => obj%GetVelocityDirichletBCPointer( dbcNo=2 )\n  CALL dbc%Set( ConstantNodalValue=0.01_DFP )\n  dbc=>NULL()\n  CALL region%Deallocate()\n"})}),"\n",(0,a.jsx)(n.p,{children:"AddDirichletBC, P=0\nset parameters for dirichlet boundary condition:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-comment",children:'  CALL SetDirichletBCParam( &\n    & param=param, &\n    & name="ZeroP", &\n    & idof=1, &\n    & nodalValueType=Constant, &\n    & useFunction=.FALSE. )\n\n  CALL region%Deallocate()\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  CALL region%Add( dim=1, meshID=[3] )\n  CALL region%Set()\n\n  CALL obj%AddPressureDirichletBC( dbcNo=1, param=param, &\n    & boundary=region )\n  dbc => obj%GetPressureDirichletBCPointer( dbcNo=1 )\n  CALL dbc%Set( ConstantNodalValue=0.0_DFP ); dbc=>NULL()\n  CALL region%Deallocate()\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Set()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Now we compute the stablizing parameters of finite element method."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%ComputeStabParam()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Assemble tangent matrix."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AssembleTanmat()\n"})}),"\n",(0,a.jsx)(n.p,{children:"AssembleRHS"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%AssembleRHS()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Assemble"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Assemble()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Display the kernel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,a.jsx)(n.p,{children:'!!! settings "Cleanup"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL dom%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const c={},d="Assemble",u={id:"SteadyStokes111/Assemble",title:"Assemble",description:"This procedure pointer assembles the problem",source:"@site/docs/docs-api/SteadyStokes111/Assemble.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/Assemble",permalink:"/docs-api/SteadyStokes111/Assemble",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes111/Assemble.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ApplyDirichletBC",permalink:"/docs-api/SteadyStokes111/ApplyDirichletBC"},next:{title:"AssembleRHS",permalink:"/docs-api/SteadyStokes111/AssembleRHS"}},m={},h=[{value:"Interface",id:"interface",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"assemble",children:"Assemble"}),"\n",(0,a.jsx)(n.p,{children:"This procedure pointer assembles the problem"}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Assemble(obj)\n    CLASS(SteadyStokes111_), INTENT(INOUT) :: obj\n  END SUBROUTINE Assemble\nEND INTERFACE\n"})})}),(0,a.jsx)(o.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(l,{})}),(0,a.jsx)(o.Z,{value:"close",label:"\u21a2 "})]})]})}function A(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>o});r(67294);var a=r(86010);const t={tabItem:"tabItem_Ymn6"};var s=r(85893);function o(e){let{children:n,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,o),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>T});var a=r(67294),t=r(86010),s=r(12466),o=r(16550),i=r(20469),l=r(91980),c=r(67392),d=r(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function A(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=p({queryString:r,groupId:t}),[A,E]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),b=(()=>{const e=c??A;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),E(e)}),[u,E,s]),tabValues:s}}var E=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(85893);function L(e){let{className:n,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,r=l.indexOf(n),t=i[r].value;t!==a&&(c(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:i.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function R(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function g(e){const n=A(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(L,{...e,...n}),(0,f.jsx)(R,{...e,...n})]})}function T(e){const n=(0,E.Z)();return(0,f.jsx)(g,{...e,children:u(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var a=r(67294);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);