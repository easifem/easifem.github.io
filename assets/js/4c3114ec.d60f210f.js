"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[7290],{64777:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>L});var i=a(85893),t=a(11151),o=a(45512),s=a(49530),r=a(90884);const l={},c="Export",d={id:"LinearElasticModel/Export",title:"Export",description:"Export the content of LinearElasticModel_ into a HDF5File.",source:"@site/docs/docs-api/LinearElasticModel/Export.md",sourceDirName:"LinearElasticModel",slug:"/LinearElasticModel/Export",permalink:"/docs-api/LinearElasticModel/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinearElasticModel/Export.md",tags:[],version:"current",lastUpdatedAt:1701497244,formattedLastUpdatedAt:"Dec 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/LinearElasticModel/Display"},next:{title:"GetC",permalink:"/docs-api/LinearElasticModel/GetC"}},p={},L=[{value:"Interface",id:"interface",level:2}];function f(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components},{TabItem:a,Tabs:l}=n;return a||E("TabItem",!0),l||E("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"export",children:"Export"}),"\n",(0,i.jsxs)(n.p,{children:["Export the content of ",(0,i.jsx)(n.code,{children:"LinearElasticModel_"})," into a HDF5File."]}),"\n",(0,i.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,i.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsxs)(l,{children:[(0,i.jsx)(a,{value:"interface",label:"\u0700 Interface",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Export(obj, hdf5, group)\n    CLASS(LinearElasticModel_), INTENT(IN) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})}),(0,i.jsx)(a,{value:"example",label:"example",children:(0,i.jsx)(o.ZP,{})}),(0,i.jsx)(a,{value:"ex2",label:"example 2",children:(0,i.jsx)(s.ZP,{})}),(0,i.jsx)(a,{value:"ex3",label:"example 3",children:(0,i.jsx)(r.ZP,{})}),(0,i.jsx)(a,{value:"close",label:"\u21a2 "})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}function E(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},45512:(e,n,a)=>{a.d(n,{ZP:()=>s});var i=a(85893),t=a(11151);function o(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This example initiates an instance of ",(0,i.jsx)(n.code,{children:"LinearElasticModel_"})," and\nexports its content into a ",(0,i.jsx)(n.code,{children:"hdf5File_"}),"."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nIMPLICIT NONE\nTYPE(LinearElasticModel_) :: obj\nTYPE(ParameterList_) :: param\nTYPE(hdf5File_) :: hdf5file\nCALL FPL_INIT; CALL param%initiate()\nCALL setLinearElasticModelParam( &\n  & param=param,  &\n  & ElasticityType=IsoLinearElasticModel, &\n  & PoissonRatio=0.3_DFP, &\n  & YoungsModulus=1.0D+6)\nCALL obj%initiate(param)\nCALL hdf5file%initiate("./TemplateLinearElasticModel1.hdf5", &\n  & mode="NEW")\nCALL hdf5file%OPEN()\nCALL obj%export(hdf5file, "")\nCALL hdf5file%CLOSE\nCALL hdf5file%DEALLOCATE()\nCALL param%DEALLOCATE(); CALL FPL_FINALIZE\nEND PROGRAM main\n'})})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},49530:(e,n,a)=>{a.d(n,{ZP:()=>s});var i=a(85893),t=a(11151);function o(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This example shows how initiate an instance of ",(0,i.jsx)(n.code,{children:"LinearElasticModel_"})," for plane stress case. Then, we export its content to HDF5File."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nIMPLICIT NONE\nTYPE( LinearElasticModel_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( hdf5File_ ) :: hdf5file\n\nCALL FPL_INIT; CALL param%Initiate()\nCALL SetLinearElasticModelParam( &\n  & param = param,  &\n  & ElasticityType = IsoLinearElasticModel, &\n  & isPlaneStress = .TRUE., &\n  & PoissonRatio = 0.3_DFP, &\n  & YoungsModulus = 1.0D+6 )\n\nCALL obj%Initiate( param )\nCALL hdf5file%Initiate( "./TemplateLinearElasticModel2.hdf5", &\n  & mode="NEW" )\n\nCALL hdf5file%Open()\nCALL obj%Export( hdf5file, "" )\nCALL hdf5file%Close()\nCALL hdf5file%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE\nEND PROGRAM main\n'})})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},90884:(e,n,a)=>{a.d(n,{ZP:()=>s});var i=a(85893),t=a(11151);function o(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["This example initiate an instance of ",(0,i.jsx)(n.code,{children:"LinearElasticModel_"})," for plane strain case. It then exports the data to HDF5File."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nUSE easifemMaterials\nIMPLICIT NONE\nTYPE( LinearElasticModel_ ) :: obj\nTYPE( ParameterList_ ) :: param\nTYPE( hdf5File_ ) :: hdf5file\nCALL FPL_INIT; CALL param%initiate()\nCALL setLinearElasticModelParam( &\n  & param = param,  &\n  & ElasticityType = IsoLinearElasticModel, &\n  & isPlaneStrain = .TRUE., &\n  & PoissonRatio = 0.3_DFP, &\n  & YoungsModulus = 1.0D+6 )\nCALL obj%initiate( param )\nCALL hdf5file%initiate( "./TemplateLinearElasticModel3.hdf5", &\n  & mode="NEW" )\nCALL hdf5file%open()\nCALL obj%export( hdf5file, "" )\nCALL hdf5file%close\nCALL hdf5file%Deallocate()\nCALL param%Deallocate(); CALL FPL_FINALIZE\nEND PROGRAM main\n'})})]})}function s(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var i=a(67294);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);