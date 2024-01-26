"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[51464,43249],{55682:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var i=o(85893),t=o(11151);const a={},r="ImportFromToml",l={id:"AbstractBC/ImportFromToml",title:"ImportFromToml",description:"Initiate an instance of AbstractBC_ from toml configuration.",source:"@site/docs/docs-api/AbstractBC/ImportFromToml.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/ImportFromToml",permalink:"/docs-api/AbstractBC/ImportFromToml",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/ImportFromToml.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/AbstractBC/Import"},next:{title:"Initiate",permalink:"/docs-api/AbstractBC/Initiate"}},s={},m=[{value:"Interface 1",id:"interface-1",level:2},{value:"Interface 2",id:"interface-2",level:2},{value:"TOML configuration",id:"toml-configuration",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"importfromtoml",children:"ImportFromToml"}),"\n",(0,i.jsxs)(n.p,{children:["Initiate an instance of ",(0,i.jsx)(n.code,{children:"AbstractBC_"})," from toml configuration."]}),"\n",(0,i.jsx)(n.h2,{id:"interface-1",children:"Interface 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE AbstractBCImportFromToml\n  MODULE SUBROUTINE bc_ImportFromToml1(obj, table, dom)\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    TYPE(toml_table), INTENT(INOUT) :: table\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE bc_ImportFromToml1\nEND INTERFACE AbstractBCImportFromToml\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"This method is mainly for internal use."})}),"\n",(0,i.jsx)(n.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE AbstractBCImportFromToml\n  MODULE SUBROUTINE bc_ImportFromToml2(obj, dom, tomlName, afile,  &\n    & filename, printToml)\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n    CHARACTER(*), INTENT(IN) :: tomlName\n    TYPE(TxtFile_), OPTIONAL, INTENT(INOUT) :: afile\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: filename\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: printToml\n  END SUBROUTINE bc_ImportFromToml2\nEND INTERFACE AbstractBCImportFromToml\n"})}),"\n",(0,i.jsx)(n.h2,{id:"toml-configuration",children:"TOML configuration"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click here to see the toml-configuration file"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[bc]\nname = "DirichletBC"\n# Name of the boundary condition\nidof = 1\n# idof denotes the degree of freedom where\n# we apply the contraint,\n# For x component idof is 1\n# For y component idof is 2\n# For z component idof is 3\n\nnodalValueType = "Constant" # Time, SpaceTime, Space\n# Other option: Constant, Time, Space,  SpaceTime\n# nodalValuetype denotes the type of boundary condition\n# It can take following values\n# Constant: It means the boundary condition is constant in\n#           space and time.\n# Space:    It means the boundary condition is variable in\n#           space but constant in time.\n# Time:     It means the boundary condition is variable in\n#           in time but constant in Space\n# SpaceTime:It means the boundary condition is variable in\n#           both space and time.\n\nvalue = 20.0\n# Value of boundary condition\n# The shape of value depends upon the nodalValueType as explained below.\n# For nodalValueType="Constant", value should be a scalar real value\n# For nodalValueType="Space", value should be a vector of real values\n# value=[1.0, 2.0, 3.0, 4.0]\n# For nodalValueType="Time", value should  be a vector of real values\n# value=[1.0, 2.0, 3.0, 4.0]\n# For nodalValueType="SpaceTime", value should be two dimensional array of\n# real values\n# value=[[1.0, 2.0, 3.0, 4.0], [5.0, 6.0, 7.0, 8.0]]\n\nisUserFunction = false\nisNormal = false\nisTangent = false\nuseExternal = false\n\n[bc.function]\nname = "boundaryFunction"\n# name of the function\n\nreturnType = "Scalar"\n# returnType must be "Scalar"\n\nnumReturns = 1\n# number of returns must be 1\n\nargType = "Space"\n# argumen type of function, It can take following values\n# "Constant", when the user function is constant\n# "Space", when the user function is space dependent only.\n# "Time", when the user function is time dependent only.\n# "SpaceTime", when the user function is space-time dependent.\n\nnumArgs = 3\n# number of arguments\n# number of arguments should be 0, when argType is "Constant"\n# number of arguments should be 1, when argType is "Time"\n# number of arguments should be 3, when argType is "Space"\n# number of arguments should be 4, when argType is "SpaceTime"\n\nvalue = 1.0\n# if lua script and luaFunctionName are absent then this\n# variable must be given.\n# When this is given, then argType must be Constant, and\n# numArgs should be 0.\n\nluaScript = "./hello.lua"\n# name of the lua script which contains the functions\n\nluaFunctionName = "hello"\n# which function in the lua script to be used for boundary condition\n\n[bc.boundary]\nisSelectionByMeshID = false\n# set isSelectionByMeshID to true when mesh selection is by meshID\n# if this variable is set to true then we should provide following\n# table\n[bc.boundary.meshID]\npoint = [1, 2, 3]\n# id of mesh of points\n# you can also give the filename\nline = [1, 2, 3, 4]\n# id of mesh of lines\n# you can also give the filename\nsurface = [1, 2, 3]\n# id of mesh of surfaces\n# you can also give the filename "filename.txt"\nvolume = [1, 2, 3]\n# id of mesh of volumes\n# you can also give the filename "filename.txt"\n\nisSelectionByElemNum = false\n# set isSelectionByElemNum to true when mesh selection is by\n# specifying element number\n# if this variable is set to true then we should provide following\n# table\n[bc.boundary.elemNum]\npoint = [1, 2, 3]\n# element number for points\nline = [1, 2, 3]\n# element number of lines\nsurface = [1, 2, 3]\n# element number of surfaces\nvolume = [1, 2, 3]\n# element number of volume\n\nisSelectionByBox = false\n# set isSelectionByBox to true when mesh selection is by\n# specifying the bounding boxes\n# if this variable is set to true then we should provide following\n# table\n[bc.boundary.box]\npoint = [\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 0.0, zmax = 1.0 },\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 2.0, zmax = 3.0 },\n]\n# boxes for mesh of points\nline = [\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 0.0, zmax = 1.0 },\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 2.0, zmax = 3.0 },\n]\n# boxes for mesh of lines\nsurface = [\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 0.0, zmax = 1.0 },\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 2.0, zmax = 3.0 },\n]\n# boxes for mesh of surfaces\nvolume = [\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 0.0, zmax = 1.0 },\n  { xmin = 0.0, xmax = 1.0, ymin = 0.0, ymax = 1.0, zmin = 2.0, zmax = 3.0 },\n]\n# boxes for mesh of volumes\n\nisSelectionByNodeNum = false\n# set isSelectionByNodeNum to true when mesh selection is by\n# by specifying the node number.\n# if this variable is set to true then we should provide following\n# table\n[bc.boundary.nodeNum]\npoint = [1, 2, 3]\nline = [1, 2, 3]\nsurface = [1, 2, 3]\nvolume = [1, 2, 3]\n'})})})]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6449:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>p});var i=o(85893),t=o(11151),a=o(55682),r=o(2191),l=o(74421),s=o(37871);const m={sidebar_label:"ImportFromToml",sidebar_position:4},c=void 0,d={id:"DirichletBC/ImportFromToml",title:"ImportFromToml",description:"Examples",source:"@site/docs/docs-api/DirichletBC/ImportFromToml.md",sourceDirName:"DirichletBC",slug:"/DirichletBC/ImportFromToml",permalink:"/docs-api/DirichletBC/ImportFromToml",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DirichletBC/ImportFromToml.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"ImportFromToml",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Initiate",permalink:"/docs-api/DirichletBC/Initiate"},next:{title:"Set",permalink:"/docs-api/DirichletBC/Set"}},u={},p=[{value:"Examples",id:"examples",level:2}];function f(e){const n={h2:"h2",...(0,t.a)(),...e.components},{TabItem:o,Tabs:m}=n;return o||b("TabItem",!0),m||b("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(m,{children:[(0,i.jsx)(o,{value:"example",label:"example 1",children:(0,i.jsx)(r.ZP,{})}),(0,i.jsx)(o,{value:"ex2",label:"example 2",children:(0,i.jsx)(l.ZP,{})}),(0,i.jsx)(o,{value:"ex3",label:"example 3",children:(0,i.jsx)(s.ZP,{})}),(0,i.jsx)(o,{value:"close",label:"\u21a2 Close",default:!0})]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}function b(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2191:(e,n,o)=>{o.d(n,{ZP:()=>r});var i=o(85893),t=o(11151);function a(e){const n={code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this example we will initiate an instance of ",(0,i.jsx)(n.code,{children:"DirichletBC_"})," by importing data from ",(0,i.jsx)(n.code,{children:"toml"})," configuration."]}),"\n",(0,i.jsx)(n.p,{children:"The content of toml config file is given below"}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click here to see the toml file"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[bc1]\nname = "DirichletBC"\nidof = 1\nnodalValueType = "Constant"\nvalue = 10.0\n\n[bc1.boundary]\nisSelectionByMeshID = true\n[bc1.boundary.meshID]\nsurface = [1, 2]\n'})}),(0,i.jsx)(n.p,{children:"Note that in the boundary condition is constant, and mesh is selected by mesh-id."})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nCHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4, front = 5, behind = 6\n\nCALL FPL_Init()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nCALL obj%ImportFromToml(filename=tomlFileName,  dom=dom, tomlName="bc")\nCALL obj%Display("DirichletBC = ")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL FPL_Finalize()\nEND PROGRAM main\n'})})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},74421:(e,n,o)=>{o.d(n,{ZP:()=>r});var i=o(85893),t=o(11151);function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Initiate an instance of ",(0,i.jsx)(n.code,{children:"DirichletBC_"})," by importing config from a Toml file."]}),"\n",(0,i.jsxs)(n.p,{children:["In the toml file we define details of ",(0,i.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),"."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click here to see the toml file"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[bc2]\nname = "DirichletBC"\nidof = 1\nnodalValueType = "Constant"\nisUserFunction = true\n\n[bc2.function]\nname = "func"\nreturnType = "Scalar"\nargType = "Constant"\nvalue = 10.0\n\n# boundary\n[bc2.boundary]\nisSelectionByMeshID = true\n\n[bc2.boundary.meshID]\nsurface = [1, 2]\n'})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nCHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nCALL obj%ImportFromToml(filename=tomlFileName, dom=dom, tomlName="bc2")\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\nCALL display(SIZE(nodeNum), "size = ")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL FPL_Finalize()\nEND PROGRAM main\n'})})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},37871:(e,n,o)=>{o.d(n,{ZP:()=>r});var i=o(85893),t=o(11151);function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Initiate an instance of ",(0,i.jsx)(n.code,{children:"DirichletBC_"})," by importing config from a Toml file."]}),"\n",(0,i.jsxs)(n.p,{children:["In the toml file we define details of ",(0,i.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),"."]}),"\n",(0,i.jsxs)(o,{children:[(0,i.jsx)("summary",{children:"Click here to see the toml file"}),(0,i.jsx)("div",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[bc3]\nname = "DirichletBC"\nidof = 1\nnodalValueType = "Space"\nisUserFunction = true\n\n[bc3.function]\nname = "func"\nreturnType = "Scalar"\nargType = "Space"\nluaScript = "DirichletBC.lua"\nluaFunctionName = "Func1"\n\n# boundary\n[bc3.boundary]\nisSelectionByMeshID = true\n\n[bc3.boundary.meshID]\nsurface = [1]\n'})})})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nCHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nCALL obj%ImportFromToml(filename=tomlFileName, dom=dom, tomlName="bc3")\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\nCALL display(SIZE(nodeNum), "size = ")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL FPL_Finalize()\nEND PROGRAM main\n'})})]})}function r(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>r});var i=o(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);