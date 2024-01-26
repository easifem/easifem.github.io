"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5619],{64750:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>T});var r=s(85893),t=s(11151);const i={sidebar_position:3},a="SetSTTensorMeshFieldParam",o={id:"STTensorMeshField/SetSTTensorMeshFieldParam",title:"SetSTTensorMeshFieldParam",description:"Set parameters for initiating an instance of STTensorMeshField_.",source:"@site/docs/docs-api/STTensorMeshField/SetSTTensorMeshFieldParam.md",sourceDirName:"STTensorMeshField",slug:"/STTensorMeshField/SetSTTensorMeshFieldParam",permalink:"/docs-api/STTensorMeshField/SetSTTensorMeshFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/STTensorMeshField/SetSTTensorMeshFieldParam.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/STTensorMeshField/STTensorMeshField_"},next:{title:"Add",permalink:"/docs-api/STTensorMeshField/Add"}},d={},T=[{value:"Interface",id:"interface",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"setsttensormeshfieldparam",children:"SetSTTensorMeshFieldParam"}),"\n",(0,r.jsxs)(n.p,{children:["Set parameters for initiating an instance of ",(0,r.jsx)(n.code,{children:"STTensorMeshField_"}),"."]}),"\n",(0,r.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE SetSTTensorMeshFieldParam(param, name, &\n    & fieldType, varType, engine, defineOn, dim1, dim2, nns, nnt)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    CHARACTER(*), INTENT(IN) :: name\n    INTEGER(I4B), INTENT(IN) :: fieldType\n    INTEGER(I4B), INTENT(IN) :: varType\n    CHARACTER(*), INTENT(IN) :: engine\n    INTEGER(I4B), INTENT(IN) :: defineOn\n    !! Nodal, Quadrature\n    INTEGER(I4B), INTENT(IN) :: dim1\n    !! size in dim1\n    INTEGER(I4B), INTENT(IN) :: dim2\n    !! size in dim2\n    INTEGER(I4B), INTENT(IN) :: nns\n    !! number of nodes in space\n    INTEGER(I4B), INTENT(IN) :: nnt\n    !! Number of node in space\n  END SUBROUTINE SetSTTensorMeshFieldParam\nEND INTERFACE\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Read more about the arguments ",(0,r.jsx)(n.a,{href:"/docs-api/AbstractMeshField/AbstractMeshField_",children:"here"}),"."]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(67294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);