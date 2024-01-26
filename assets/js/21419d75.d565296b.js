"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[66063],{74421:(e,n,o)=>{o.d(n,{ZP:()=>a});var t=o(85893),i=o(11151);function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Initiate an instance of ",(0,t.jsx)(n.code,{children:"DirichletBC_"})," by importing config from a Toml file."]}),"\n",(0,t.jsxs)(n.p,{children:["In the toml file we define details of ",(0,t.jsx)(n.a,{href:"/docs-api/UserFunction",children:"UserFunction"}),"."]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Click here to see the toml file"}),(0,t.jsx)("div",{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",children:'[bc2]\nname = "DirichletBC"\nidof = 1\nnodalValueType = "Constant"\nisUserFunction = true\n\n[bc2.function]\nname = "func"\nreturnType = "Scalar"\nargType = "Constant"\nvalue = 10.0\n\n# boundary\n[bc2.boundary]\nisSelectionByMeshID = true\n\n[bc2.boundary.meshID]\nsurface = [1, 2]\n'})})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nCHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nCALL obj%ImportFromToml(filename=tomlFileName, dom=dom, tomlName="bc2")\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\nCALL display(SIZE(nodeNum), "size = ")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL FPL_Finalize()\nEND PROGRAM main\n'})})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},77523:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var t=o(85893),i=o(11151),r=o(74421);const a={sidebar_position:5},s="Import from toml-file (user function)",m={id:"programming-fem/dirichletBC/dbc_toml_userfunc_const",title:"Import from toml-file (user function)",description:"",source:"@site/docs/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const.md",sourceDirName:"programming-fem/dirichletBC",slug:"/programming-fem/dirichletBC/dbc_toml_userfunc_const",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Import from toml-file",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_const"},next:{title:"Import from toml-file (spatial user function)",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_space"}},c={},l=[];function d(e){const n={h1:"h1",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"import-from-toml-file-user-function",children:"Import from toml-file (user function)"}),"\n","\n","\n",(0,t.jsx)(r.ZP,{})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(67294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);