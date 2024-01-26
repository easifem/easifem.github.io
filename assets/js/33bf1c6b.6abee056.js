"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[10066],{56410:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(85893),o=t(11151),i=t(7302);const r={},s="Initiate",c={id:"AbstractBC/Initiate",title:"Initiate",description:"Initiate the AbstractBC",source:"@site/docs/docs-api/AbstractBC/Initiate.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Initiate",permalink:"/docs-api/AbstractBC/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImportFromToml",permalink:"/docs-api/AbstractBC/ImportFromToml"},next:{title:"IsUseFunction",permalink:"/docs-api/AbstractBC/IsUseFunction"}},d={},l=[{value:"Interface",id:"interface",level:2}];function m(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components},{TabItem:t,Tabs:r}=e;return t||u("TabItem",!0),r||u("Tabs",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"initiate",children:"Initiate"}),"\n",(0,a.jsxs)(e.p,{children:["Initiate the ",(0,a.jsx)(e.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC"})]}),"\n",(0,a.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,a.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsxs)(r,{children:[(0,a.jsx)(t,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Initiate(obj, param, boundary, dom)\n    IMPORT :: AbstractBC_, ParameterList_, MeshSelection_, Domain_\n    CLASS(AbstractBC_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    CLASS(Domain_), TARGET, INTENT(IN) :: dom\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})})}),(0,a.jsx)(t,{value:"example",label:"\ufe0f\u0700 See example",children:(0,a.jsx)(i.ZP,{})}),(0,a.jsx)(t,{value:"close",label:"\u21a2 "})]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}function u(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}},7302:(n,e,t)=>{t.d(e,{ZP:()=>r});var a=t(85893),o=t(11151);function i(n){const e={code:"code",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["Initiate an instance of ",(0,a.jsx)(e.code,{children:"DirichletBC"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:'!> author: Vikas Sharma, Ph. D.\n! date:  2023-11-27\n! summary:  Initiate an instance of DirichletBC\n!\n!# Introduction\n!\n! Initiate an instance of DirichletBC  for\n! Constant boundary condition\n\nPROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\n\nnsd = dom%GetNSD()\n\n! We call Set SetAbstractBCParam to set the parameter for boundary condition\nCALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n\n! We call SetMeshSelectionParam to set the parameter for boundary condition\nCALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n\nCALL boundary%Initiate(param)\n\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n\nCALL boundary%Display("boundary")\n\nCALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n\nCALL obj%Set(constantNodalValue=0.0_DFP)\n\nCALL obj%Display("dbc"//CHAR_LF)\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n'})})]})}function r(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(i,{...n})}):i(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);