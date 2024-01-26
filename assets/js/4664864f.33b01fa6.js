"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[69318],{23552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(85893),a=t(11151),o=t(7302);const r={sidebar_position:3},s="SetAbstractBCParam",d={id:"AbstractBC/SetAbstractBCParam",title:"SetAbstractBCParam",description:"Set the parameter for initiating the AbstractBC_.",source:"@site/docs/docs-api/AbstractBC/SetAbstractBCParam.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/SetAbstractBCParam",permalink:"/docs-api/AbstractBC/SetAbstractBCParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/SetAbstractBCParam.md",tags:[],version:"current",lastUpdatedAt:1701182689,formattedLastUpdatedAt:"Nov 28, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/AbstractBC/AbstractBC_"},next:{title:"CheckEssentialParam",permalink:"/docs-api/AbstractBC/CheckEssentialParam"}},c={},l=[{value:"Interface",id:"interface",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{TabItem:t,Tabs:r}=n;return t||u("TabItem",!0),r||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"setabstractbcparam",children:"SetAbstractBCParam"}),"\n",(0,i.jsxs)(n.p,{children:["Set the parameter for initiating the ",(0,i.jsx)(n.code,{children:"AbstractBC_"}),"."]}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsxs)(r,{children:[(0,i.jsxs)(t,{value:"interface",label:"\u0700 Interface",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:" INTERFACE\n  MODULE SUBROUTINE SetAbstractBCParam(param, prefix, &\n    & name, idof, nodalValueType, isNormal, isTangent, &\n    & useExternal, isUserFunction)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: prefix\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: name\n    !! name of boundary condition\n    !! default is AbstractBC\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: idof\n    !! degree of freedom number\n    !! default is 0\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: nodalValueType\n    !! Space, Time, SpaceTime, Constant\n    !! default is -1\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isUserFunction\n    !! set true when userfucntion is used; default is false\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isNormal\n    !! default is false\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isTangent\n    !! default is false\n    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: useExternal\n    !! default is false\n  END SUBROUTINE SetAbstractBCParam\nEND INTERFACE\n"})}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"prefix"})}),(0,i.jsxs)(n.p,{children:["You can get ",(0,i.jsx)(n.code,{children:"prefix"})," by calling ",(0,i.jsx)(n.a,{href:"./GetPrefix",children:"GetPrefix"})," method."]})]}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"idof"})}),(0,i.jsx)(n.p,{children:"Degree of freedom number."})]}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"nodalValueType"})}),(0,i.jsx)(n.p,{children:"Type of boundary condition. It can take following values:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Constant"})," => It means boundary condition is constant in space and time"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Space"})," => It means boundary condition changes in space direction, but constant in time direction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Time"})," => It means boundary condition changes in time direction, but constant in space direction"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SpaceTime"})," => It means boundary condition changes in both space and time directions"]}),"\n"]})]}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"isUserFunction"})}),(0,i.jsxs)(n.p,{children:["If the boundary condition is specified through ",(0,i.jsx)(n.a,{href:"../UserFunction",children:"UserFunction"}),", then it ",(0,i.jsx)(n.code,{children:"isUserFunction"})," should be set to ",(0,i.jsx)(n.code,{children:".TRUE."}),"."]})]}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"isNormal"})}),(0,i.jsxs)(n.p,{children:["In vector variable problem when the normal component is given, then you can set ",(0,i.jsx)(n.code,{children:"isNormal"})," to ",(0,i.jsx)(n.code,{children:".TRUE."})]})]}),(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"isTangent"})}),(0,i.jsxs)(n.p,{children:["In vector variable problem when the tangent component is given, then you can set ",(0,i.jsx)(n.code,{children:"isTangent"})," to ",(0,i.jsx)(n.code,{children:".TRUE."})]})]}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.code,{children:"useExternal"})}),(0,i.jsxs)(n.p,{children:["When the boundary condition is stored outside the ",(0,i.jsx)(n.code,{children:"AbstractBC_"}),"."]})]})]}),(0,i.jsx)(t,{value:"example",label:"\u0700 See example",children:(0,i.jsx)(o.ZP,{})}),(0,i.jsx)(t,{value:"close",label:"\u21a2 "})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},7302:(e,n,t)=>{t.d(n,{ZP:()=>r});var i=t(85893),a=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Initiate an instance of ",(0,i.jsx)(n.code,{children:"DirichletBC"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'!> author: Vikas Sharma, Ph. D.\n! date:  2023-11-27\n! summary:  Initiate an instance of DirichletBC\n!\n!# Introduction\n!\n! Initiate an instance of DirichletBC  for\n! Constant boundary condition\n\nPROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\n\nTYPE(DirichletBC_) :: obj\nTYPE(MeshSelection_) :: boundary\nTYPE(ParameterList_) :: param\nTYPE(Domain_) :: dom\nTYPE(HDF5File_) :: domainfile\nCHARACTER(*), PARAMETER :: domainfilename = "./mesh3D.h5"\nINTEGER(I4B) :: bottom = 1, top = 2, left = 3, right = 4,  &\n  & front = 5, behind = 6, nsd\nINTEGER(I4B), ALLOCATABLE :: nodeNum(:)\nREAL(DFP), ALLOCATABLE :: nodalValue(:, :)\n\nCALL FPL_Init; CALL param%Initiate()\nCALL domainfile%Initiate(filename=domainfilename, mode="READ")\nCALL domainfile%OPEN()\nCALL dom%Initiate(domainfile, group="")\n\nnsd = dom%GetNSD()\n\n! We call Set SetAbstractBCParam to set the parameter for boundary condition\nCALL SetAbstractBCParam(param=param, prefix=obj%GetPrefix(),  &\n  & name="ZeroBC", idof=1, nodalValueType=Constant)\n\n! We call SetMeshSelectionParam to set the parameter for boundary condition\nCALL SetMeshSelectionParam(param=param, prefix=boundary%GetPrefix(),  &\n  & isSelectionByMeshID=.TRUE.)\n\nCALL boundary%Initiate(param)\n\nCALL boundary%Add(dom=dom, dim=nsd - 1, meshID=[top])\nCALL boundary%Set()\n\nCALL boundary%Display("boundary")\n\nCALL obj%Initiate(param=param, boundary=boundary, dom=dom)\n\nCALL obj%Set(constantNodalValue=0.0_DFP)\n\nCALL obj%Display("dbc"//CHAR_LF)\n\nCALL obj%Get(nodeNum=nodeNum, nodalValue=nodalValue)\n\nCALL Display(nodeNum, "nodeNum", advance="NO")\nCALL Display(nodalValue, "nodalValue", advance="YES")\n\nCALL domainfile%DEALLOCATE()\nCALL dom%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_Finalize\nEND PROGRAM main\n'})})]})}function r(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(67294);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);