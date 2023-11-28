"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20983],{6249:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>h});var r=n(85893),t=n(11151),i=n(74866),l=n(85162);function s(e){const a={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"In this example we will learn how to add a fluid material in the kernel."}),"\n","\n","\n",(0,r.jsxs)(i.Z,{defaultValue:null,children:[(0,r.jsx)(l.Z,{value:"1",label:"\u0700 Mesh for velocity",children:(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(30283).Z+"",width:"1055",height:"853"})})}),(0,r.jsx)(l.Z,{value:"2",label:"\u0700 Mesh for pressure ",children:(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{src:n(40966).Z+"",width:"1055",height:"853"})})}),(0,r.jsx)(l.Z,{value:"3",label:"\u21a2 "})]}),"\n",(0,r.jsx)(a.p,{children:"Use modules"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  USE easifemMaterials\n  USE easifemKernels\n  USE SteadyStokes221_Class\n  IMPLICIT NONE\n"})}),"\n",(0,r.jsx)(a.p,{children:"Declare variables"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  TYPE( SteadyStokes221_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( DomainPointer_ ) :: domains(2)\n  CLASS( Domain_ ), POINTER :: dom => NULL()\n  CHARACTER( LEN = * ), PARAMETER :: domainFileNamePressure="./mesh_tri3.h5"\n  CHARACTER( LEN = * ), PARAMETER :: domainFileNameVelocity="./mesh_tri6.h5"\n  TYPE(String) :: filename(2)\n'})}),"\n",(0,r.jsx)(a.p,{children:"New variables in this example:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  TYPE( MeshSelection_ ) :: region\n"})}),"\n",(0,r.jsx)(a.p,{children:"Set parameters"}),"\n",(0,r.jsx)(a.admonition,{title:"Set parameters for kernel.",type:"note"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%Initiate()\n"})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  CALL SetSteadyStokes221Param( &\n    & param=param, &\n    & isConservativeForm=.TRUE., &\n    & gravity = [0.0_DFP, -9.8_DFP, 0.0_DFP], &\n    & domainFileForPressure = domainFileNamePressure, &\n    & domainFileForVelocity = domainFileNameVelocity, &\n    & engine="NATIVE_SERIAL", &\n    & CoordinateSystem=KERNEL_CARTESIAN, &\n    & maxIter = 100, &\n    & rtoleranceForPressure = REAL( 1.0E-6, DFP ), &\n    & rtoleranceForVelocity = REAL( 1.0E-6, DFP ), &\n    & atoleranceForPressure = REAL( 1.0E-6, DFP ), &\n    & atoleranceForVelocity = REAL( 1.0E-6, DFP ), &\n    & toleranceForSteadyState = REAL( 1.0E-6, DFP ), &\n    & tFluidMaterials=1, &\n    & tDirichletBCForPressure=0, &\n    & tDirichletBCForVelocity=3, &\n    & baseInterpolationForSpace="LagrangeInterpolation", &\n    & baseContinuityForSpace="H1", &\n    & quadratureTypeForSpace="GaussLegendre", &\n    & postProcessOpt=1)\n'})}),"\n",(0,r.jsx)(a.admonition,{title:"Set parameters for linear solver.",type:"note"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  CALL SetLinSolverParam( &\n    & param=param, &\n    & solverName=LIS_GMRES,&\n    & preconditionOption=NO_PRECONDITION, &\n    & convergenceIn=convergenceInRes, &\n    & convergenceType=relativeConvergence, &\n    & maxIter=100, &\n    & relativeToRHS=.TRUE., &\n    & KrylovSubspaceSize=20, &\n    & rtol=REAL( 1.0E-10, DFP ), &\n    & atol=REAL( 1.0D-10, DFP ) )\n"})}),"\n",(0,r.jsx)(a.p,{children:"Initiate domain"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  filename = [String(domainFileNamePressure), &\n    & String(domainFileNameVelocity)]\n  CALL e%setQuietMode(.TRUE.)\n  CALL Initiate(domains=domains, filename=filename)\n"})}),"\n",(0,r.jsx)(a.p,{children:"Initiate kernel"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  CALL e%setQuietMode(.FALSE.)\n  CALL obj%Initiate(param=param, domains=domains )\n"})}),"\n",(0,r.jsx)(a.p,{children:"Add fluid material"}),"\n",(0,r.jsx)(a.admonition,{type:"info",children:(0,r.jsxs)(a.p,{children:["Add fluid material to kernel. To do so, we first create an instance of ",(0,r.jsx)(a.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection_"}),".\nThen we add this instance to the kernel."]})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  CALL e%setQuietMode(.TRUE.)\n  CALL region%Initiate( isSelectionByMeshID=.TRUE. )\n  dom => domains(1)%ptr\n  CALL region%Add( dim=dom%GetNSD(), meshID=[1] )\n  CALL SetFluidMaterialParam( &\n    & param=param, &\n    & name="fluidMaterial", &\n    & massDensity=1000.0_DFP, &\n    & dynamicViscosity = 0.001_DFP, &\n    & stressStrainModel="NewtonianFluidModel" )\n  CALL SetNewtonianFluidModelParam( &\n    & param = param, &\n    & dynamicViscosity = 0.001_DFP )\n'})}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  CALL e%setQuietMode(.FALSE.)\n  CALL obj%AddFluidMaterial( &\n    & materialNo=1, &\n    & materialName="fluidMaterial", &\n    & param=param, &\n    & region=region)\n  CALL region%Deallocate()\n'})}),"\n",(0,r.jsx)(a.p,{children:"Display kernel"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:'  CALL obj%Display("")\n'})}),"\n",(0,r.jsx)(a.p,{children:"Cleanup"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function o(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}const c={},d="AddFluidMaterial",u={id:"SteadyStokes221/AddFluidMaterial",title:"AddFluidMaterial",description:"This routine adds Fluid material to the AbstractSteadyStokes.",source:"@site/docs/docs-api/SteadyStokes221/AddFluidMaterial.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/AddFluidMaterial",permalink:"/docs-api/SteadyStokes221/AddFluidMaterial",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes221/AddFluidMaterial.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SteadyStokes221",permalink:"/docs-api/SteadyStokes221/SteadyStokes221_"},next:{title:"AddPressureDirichletBC",permalink:"/docs-api/SteadyStokes221/AddPressureDirichletBC"}},m={},h=[{value:"Interface",id:"interface",level:2}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"addfluidmaterial",children:"AddFluidMaterial"}),"\n",(0,r.jsx)(a.p,{children:"This routine adds Fluid material to the AbstractSteadyStokes."}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["It also prepares ",(0,r.jsx)(a.code,{children:"obj%FluidMaterialToMesh(materialNo)"})," and ",(0,r.jsx)(a.code,{children:"obj%fluidMaterial(materialNo)"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"param"})," contains the parameters for constructing a FluidMaterial."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"materialName"})," is the name of material, it should be ",(0,r.jsx)(a.code,{children:"fluidMaterial"}),"."]}),"\n",(0,r.jsxs)(a.li,{children:[(0,r.jsx)(a.code,{children:"region"})," is an instance of ",(0,r.jsx)(a.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection_"}),"."]}),"\n"]}),"\n",(0,r.jsx)(a.admonition,{type:"caution",children:(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.code,{children:"materialNo"})," should be lesser than or equal to the total\nnumber of Fluid materials."]})}),"\n",(0,r.jsx)(a.h2,{id:"interface",children:"Interface"}),"\n","\n","\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(l.Z,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE addFluidMaterial(obj, materialNo, materialName, &\n    & param, region)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: materialNo\n    CHARACTER(LEN=*), OPTIONAL, INTENT(IN) :: materialName\n    TYPE(ParameterList_), OPTIONAL, INTENT(IN) :: param\n    TYPE(MeshSelection_), OPTIONAL, INTENT(IN) :: region\n  END SUBROUTINE addFluidMaterial\nEND INTERFACE\n"})})}),(0,r.jsx)(l.Z,{value:"example",label:"\ufe0f\u0700 See example",children:(0,r.jsx)(o,{})}),(0,r.jsx)(l.Z,{value:"close",label:"\u21a2 "})]})]})}function f(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,a,n)=>{n.d(a,{Z:()=>l});n(67294);var r=n(86010);const t={tabItem:"tabItem_Ymn6"};var i=n(85893);function l(e){let{children:a,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,l),hidden:n,children:a})}},74866:(e,a,n)=>{n.d(a,{Z:()=>E});var r=n(67294),t=n(86010),i=n(12466),l=n(16550),s=n(20469),o=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:n,attributes:r,default:t}}=e;return{value:a,label:n,attributes:r,default:t}}))}(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function h(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:n}=e;const t=(0,l.k6)(),i=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})}),[i,t])]}function f(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:i}))),[c,u]=p({queryString:n,groupId:t}),[f,x]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:t}),b=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function S(e){let{className:a,block:n,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const a=e.currentTarget,n=o.indexOf(a),t=s[n].value;t!==r&&(c(a),l(t))},u=e=>{let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":n},a),children:s.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===a?0:-1,"aria-selected":r===a,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===a}),children:n??a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function N(e){const a=f(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(S,{...e,...a}),(0,j.jsx)(g,{...e,...a})]})}function E(e){const a=(0,x.Z)();return(0,j.jsx)(N,{...e,children:u(e.children)},String(a))}},40966:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/mesh_tri3-1598bb477d82525507de3489d8f3cac1.png"},30283:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/mesh_tri6-c3e01ac786e8782b8a91bb4b888c9d32.png"},11151:(e,a,n)=>{n.d(a,{Z:()=>s,a:()=>l});var r=n(67294);const t={},i=r.createContext(t);function l(e){const a=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:a},e.children)}}}]);