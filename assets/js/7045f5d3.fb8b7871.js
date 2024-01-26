"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[47082],{2191:(e,n,t)=>{t.d(n,{ZP:()=>s});var i=t(85893),o=t(11151);function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this example we will initiate an instance of ",(0,i.jsx)(n.code,{children:"DirichletBC_"})," by importing data from ",(0,i.jsx)(n.code,{children:"toml"})," configuration."]}),"\n",(0,i.jsx)(n.p,{children:"The content of toml config file is given below"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Click here to see the toml file"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-toml",children:'[bc1]\nname = "DirichletBC"\nidof = 1\nnodalValueType = "Constant"\nvalue = 10.0\n\n[bc1.boundary]\nisSelectionByMeshID = true\n[bc1.boundary.meshID]\nsurface = [1, 2]\n'})}),(0,i.jsx)(n.p,{children:"Note that in the boundary condition is constant, and mesh is selected by mesh-id."})]})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nCHARACTER(*), PARAMETER :: tomlFileName = "./DirichletBC.toml"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4, front = 5, behind = 6\n\nCALL FPL_Init()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\nCALL obj%ImportFromToml(filename=tomlFileName,  dom=dom, tomlName="bc")\nCALL obj%Display("DirichletBC = ")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL FPL_Finalize()\nEND PROGRAM main\n'})})]})}function s(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},46719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>m,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151),r=t(2191);const s={sidebar_position:4},m="Import from toml-file",a={id:"programming-fem/dirichletBC/dbc_toml_const",title:"Import from toml-file",description:"",source:"@site/docs/guides/programming-fem/dirichletBC/dbc_toml_const.md",sourceDirName:"programming-fem/dirichletBC",slug:"/programming-fem/dirichletBC/dbc_toml_const",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_const",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/guides/programming-fem/dirichletBC/dbc_toml_const.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Space user function",permalink:"/guides/programming-fem/dirichletBC/dbc_userfunc_space"},next:{title:"Import from toml-file (user function)",permalink:"/guides/programming-fem/dirichletBC/dbc_toml_userfunc_const"}},c={},l=[];function d(e){const n={h1:"h1",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"import-from-toml-file",children:"Import from toml-file"}),"\n","\n","\n",(0,i.jsx)(r.ZP,{})]})}function f(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>m,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);