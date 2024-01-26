"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[81325],{62295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=a(85893),r=a(11151);const i={},o="SetRectangleMatrixFieldParam",c={id:"MatrixField/SetRectangleMatrixFieldParam",title:"SetRectangleMatrixFieldParam",description:"Set parameters for constructing rectangle matrix field.",source:"@site/docs/docs-api/MatrixField/SetRectangleMatrixFieldParam.md",sourceDirName:"MatrixField",slug:"/MatrixField/SetRectangleMatrixFieldParam",permalink:"/docs-api/MatrixField/SetRectangleMatrixFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixField/SetRectangleMatrixFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetPrecondition",permalink:"/docs-api/MatrixField/SetPrecondition"},next:{title:"SetRow",permalink:"/docs-api/MatrixField/SetRow"}},s={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setrectanglematrixfieldparam",children:"SetRectangleMatrixFieldParam"}),"\n",(0,n.jsx)(t.p,{children:"Set parameters for constructing rectangle matrix field."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'INTERFACE\n  MODULE SUBROUTINE SetRectangleMatrixFieldParam( &\n    & param, &\n    & name, &\n    & matrixProp, &\n    & physicalVarNames, &\n    & spaceCompo, &\n    & timeCompo, &\n    & engine, &\n    & fieldType)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    !! Options to create [[BlockMatrixField_]] will be stored in this\n    CHARACTER(*), INTENT(IN) :: name\n    !! Name of the matrix field\n    CHARACTER(*), INTENT(IN) :: matrixProp\n    !! Matrix property, "SYM" or "UNSYM"\n    CHARACTER(*), INTENT(IN) :: physicalVarNames(2)\n    !! Name of physical variables\n    INTEGER(I4B), INTENT(IN) :: spaceCompo(2)\n    !! Number of space-components in each physicalVarNames, see [[DOF_]]\n    INTEGER(I4B), INTENT(IN) :: timeCompo(2)\n    !! Number of time-components in each physicalVarNames, see [[DOF_]]\n    CHARACTER(*), OPTIONAL, INTENT(IN) :: engine\n    !! "NATIVE_SERIE"\n    !! "LIS_OMP"\n    !! "LIS_MPI"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n    !! fieldType can be following\n    !! FIELD_TYPE_NORMAL <-- DEFAULT\n    !! FIELD_TYPE_CONSTANT\n    !! FIELD_TYPE_CONSTANT_SPACE\n    !! FIELD_TYPE_CONSTANT_TIME\n  END SUBROUTINE SetRectangleMatrixFieldParam\nEND INTERFACE\n'})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>o});var n=a(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);