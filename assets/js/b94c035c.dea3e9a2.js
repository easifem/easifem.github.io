"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[61657],{49617:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=i(85893),s=i(11151);const l={},r="Introduction",a={id:"SolidMaterial/SolidMaterial_",title:"Introduction",description:"SolidMaterial is a child of AbstractMaterial class [[AbstractMaterial_]]. It can define solid materials, like steel, brass, copper, among others.",source:"@site/docs/docs-api/SolidMaterial/SolidMaterial_.md",sourceDirName:"SolidMaterial",slug:"/SolidMaterial/SolidMaterial_",permalink:"/docs-api/SolidMaterial/SolidMaterial_",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SolidMaterial/SolidMaterial_.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SolidMaterial",permalink:"/docs-api/SolidMaterial/"},next:{title:"SortUtility",permalink:"/docs-api/SortUtility/"}},d={},c=[{value:"Structure",id:"structure",level:2},{value:"Construction by using <code>Initiate()</code> method",id:"construction-by-using-initiate-method",level:2},{value:"Construct by using <code>Import</code>",id:"construct-by-using-import",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SolidMaterial_"})," is a child of ",(0,n.jsx)(t.code,{children:"AbstractMaterial_"})," class [[AbstractMaterial_]]. It can define solid materials, like steel, brass, copper, among others."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"SolidMaterial_"})," also encapsulates the abstract model for defining the material constitutive behavior."]}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsxs)(t.p,{children:["The header of ",(0,n.jsx)(t.code,{children:"SolidMaterial_"})," is given below, or you can see it here ",(0,n.jsx)("a",{href:"https://vickysharma0812.github.io/easifem-materials/type/solidmaterial_.html#src",children:":material-github: :material-webpack:"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-{.f90",metastring:'title="Header of SolidMaterial"}',children:'--8<-- "SolidMaterial_header.F90"\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Class diagram"})," is shown below."]}),"\n",(0,n.jsxs)(t.ul,{className:"contains-task-list",children:["\n",(0,n.jsxs)(t.li,{className:"task-list-item",children:[(0,n.jsx)(t.input,{type:"checkbox",disabled:!0})," ","Add class diagram at [[SolidMaterial_]]"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"construction-by-using-initiate-method",children:["Construction by using ",(0,n.jsx)(t.code,{children:"Initiate()"})," method"]}),"\n",(0,n.jsxs)(t.p,{children:["To construct an instance by using ",(0,n.jsx)(t.code,{children:"Initiate()"})," we need to first set the parameters."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["First, call ",(0,n.jsx)(t.code,{children:"setSolidMaterialParam()"}),", which will set the essential parameters in ",(0,n.jsx)(t.code,{children:"param"})]}),"\n",(0,n.jsxs)(t.li,{children:["Then, pass ",(0,n.jsx)(t.code,{children:"param"})," to ",(0,n.jsx)(t.code,{children:"Initiate()"})," method."]}),"\n",(0,n.jsxs)(t.li,{children:["If you want to initiate the ",(0,n.jsx)(t.code,{children:"stressStrainModel"}),", then make sure to set the information in the ",(0,n.jsx)(t.code,{children:"param"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["More information about the ",(0,n.jsx)(t.code,{children:"stressStrainModel"})," can be found in [[AbstractSolidMechanicsModel_]]"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nTYPE( SolidMaterial_ ) :: obj\nTYPE( ParameterList_ ) :: param\nINTEGER( I4B ) :: ierr\n!> main\nCALL FPL_Init(); CALL param%initiate()\nCALL setSolidMaterialParam( param=param, name="SolidMaterial", &\n  & massDensity=5000.0_DFP, stressStrainModel="LinearElasticModel" )\nCALL setLinearElasticModelParam( &\n  & param = param,  &\n  & ElasticityType = IsoLinearElasticModel, &\n  & isPlaneStress = .FALSE., &\n  & isPlaneStrain = .TRUE., &\n  & PoissonRatio = 0.3_DFP, &\n  & YoungsModulus = 1.0D+6 )\nCALL param%Print()\nCALL obj%initiate( param )\nCALL obj%display( msg="Testing setSolidMaterialParam" )\nCALL FPL_FINALIZE; CALL param%Deallocate()\nEND PROGRAM main\n'})}),"\n",(0,n.jsxs)(t.p,{children:['??? note "Click here to see the output of ',(0,n.jsx)(t.code,{children:"param%print()"}),'"']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"Key = LinearElasticModel/ShearModulus, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.384615384615385E+006\nKey = LinearElasticModel/PoissonRatio, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.300000000000000E+000\nKey = LinearElasticModel/isPlaneStress, Data Type = L, Dimensions = 0, Bytes = 4, Value = F\nKey = Solid/massDensity, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.500000000000000E+004\nKey = LinearElasticModel/YoungsModulus, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.100000000000000E+007\nKey = Solid/stressStrainModel, Data Type = DLCA, Dimensions = 0, Bytes = 18, Value = LinearElasticModel\nKey = LinearElasticModel/elasticityType, Data Type = DLCA, Dimensions = 0, Bytes = 3, Value = ISO\nKey = LinearElasticModel/lambda, Data Type = R8P, Dimensions = 0, Bytes = 8, Value = +0.576923076923077E+006\nKey = Solid/name, Data Type = DLCA, Dimensions = 0, Bytes = 13, Value = SolidMaterial\nKey = LinearElasticModel/isPlaneStrain, Data Type = L, Dimensions = 0, Bytes = 4, Value = T\n\n"})}),"\n",(0,n.jsxs)(t.p,{children:['??? note "Click here to see the output of ',(0,n.jsx)(t.code,{children:'obj%display( msg="Testing setSolidMaterialParam" )'}),'"']}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-text",children:"Testing setSolidMaterialParam\nName: SolidMaterial\nmassDensity: 5000.00\nstressStrainModel:\nname: LinearElasticModel\nelasticityType: IsoLinearElasticModel\nisPlaneStress: False\nisPlaneStrain: True\nPoisson ratio: 0.300000\nShear modulus: 384615.\nYoungs modulus: 1.00000E+6\nLambda: 576923.\nTangent matrix:\n------------------------------------------\n    1.34615E+6  5.76923E+5  0.00000E+0\n    5.76923E+5  1.34615E+6  0.00000E+0\n    0.00000E+0  0.00000E+0  3.84615E+5\nCompliance matrix:\n---------------------------------------------\n    9.10000E-7  -3.90000E-7  0.00000E+0\n    -3.90000E-7   9.10000E-7  0.00000E+0\n    0.00000E+0   0.00000E+0  2.60000E-6\n"})}),"\n",(0,n.jsxs)(t.h2,{id:"construct-by-using-import",children:["Construct by using ",(0,n.jsx)(t.code,{children:"Import"})]}),"\n",(0,n.jsx)(t.p,{children:"The template is given below."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,n.jsx)(t.th,{children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"massDensity"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"stressStrainModel"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"Group dataset"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"/"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"stressStrainModel"})," is a group data set, which means it is a directory. The structure/ template of the this data set depends upon the child of ",(0,n.jsx)(t.code,{children:"AbstractSolidMechanicsModel_"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Template"})," for ",(0,n.jsx)(t.code,{children:"LinearElasticModel"})," is given below."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Variable name"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,n.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"name"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:(0,n.jsx)(t.code,{children:"LinearElasticModel"})}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"It is constant, which denotes the name of the class."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"elasticityType"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"ISO"}),", ",(0,n.jsx)(t.code,{children:"ANISO"}),", ",(0,n.jsx)(t.code,{children:"ORTHO"}),", ",(0,n.jsx)(t.code,{children:"TRANS"})]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"It denotes the linear elasticity type"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"isPlaneStress"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"T"}),"or ",(0,n.jsx)(t.code,{children:"F"})]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"If the problem is 2D, and plane stress then set it to .TRUE."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"isPlaneStrain"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"String"}),(0,n.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,n.jsx)(t.code,{children:"T"})," or ",(0,n.jsx)(t.code,{children:"F"})]}),(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"If the problem is 2D, and plane strain , then set it to .FALSE."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"lambda"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,n.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"ShearModulus"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,n.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"YoungsModulus"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,n.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"PoissonRatio"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is required when ",(0,n.jsx)(t.code,{children:"ISO"})," option is selected"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"C"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL(6,6)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is necessary when ",(0,n.jsx)(t.code,{children:"ANISO"})," option is selected."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"invC"})}),(0,n.jsx)(t.td,{style:{textAlign:"center"},children:"REAL(6,6)"}),(0,n.jsx)(t.td,{style:{textAlign:"center"}}),(0,n.jsxs)(t.td,{style:{textAlign:"right"},children:["This is necessary when ",(0,n.jsx)(t.code,{children:"ANISO"})," option is selected."]})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"In what follows we explain how to construct the instance by importing the information."}),"\n",(0,n.jsxs)(t.p,{children:["First we export the data in the ",(0,n.jsx)(t.code,{children:"hdf5"})," file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  type( Solid_ ) :: obj\n  type( ParameterList_ ) :: param\n  type( hdf5File_ ) :: hdf5\n  integer( i4b ) :: ierr\n  call display( "TEST-0")\n  call FPL_Init(); call param%initiate()\n  ierr = param%set( key="name", value="Solid1" )\n  ierr = param%set( key="massDensity", value=1000.0_DFP )\n  ierr = param%set( key="stressStrainModel", value="LinearElasticModel")\n  call setLinearElasticModelParam( &\n    & param = param,  &\n    & ElasticityType = IsoLinearElasticModel, &\n    & isPlaneStress = .FALSE., &\n    & isPlaneStrain = .TRUE., &\n    & PoissonRatio = 0.3_DFP, &\n    & YoungsModulus = 1.0D+6 )\n  call obj%initiate( param )\n  call hdf5%initiate( filename="./TemplateSolid1.hdf5", mode="NEW" )\n  call hdf5%open()\n  call obj%export( hdf5, "" )\n  call hdf5%close(); call hdf5%Deallocate()\n  call FPL_FINALIZE; call param%Deallocate()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can import data from this file and construct an instance of ",(0,n.jsx)(t.code,{children:"Solid_"})," class."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'  type( MeshSelection_ ) :: obj\n  type( Domain_ ) :: dom\n  type( HDF5File_ ) :: hdf5\n  call display( "TEST-0")\n  call hdf5%initiate(filename="./templateMeshSelection.hdf5", mode="READ")\n  call hdf5%open()\n  call obj%import(hdf5=hdf5, group=\'\')\n  call obj%set()\n  call obj%display(\'\')\n  call hdf5%close(); call hdf5%Deallocate()\n  call obj%Deallocate()\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(67294);const s={},l=n.createContext(s);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);