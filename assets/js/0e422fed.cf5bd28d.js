"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[57332],{87170:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=i(85893),a=i(11151);const r={},o="SetMatrixFieldParam",s={id:"MatrixFieldLis/SetMatrixFieldParam",title:"SetMatrixFieldParam",description:"Set parameters necessary for constructing MatrixFieldLis",source:"@site/docs/docs-api/MatrixFieldLis/SetMatrixFieldParam.md",sourceDirName:"MatrixFieldLis",slug:"/MatrixFieldLis/SetMatrixFieldParam",permalink:"/docs-api/MatrixFieldLis/SetMatrixFieldParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MatrixFieldLis/SetMatrixFieldParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SetColumn",permalink:"/docs-api/MatrixFieldLis/SetColumn"},next:{title:"SetMatrixFieldPrecondParam",permalink:"/docs-api/MatrixFieldLis/SetMatrixFieldPrecondParam"}},d={},l=[{value:"Interface",id:"interface",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"setmatrixfieldparam",children:"SetMatrixFieldParam"}),"\n",(0,n.jsxs)(t.p,{children:["Set parameters necessary for constructing ",(0,n.jsx)(t.a,{href:"/docs-api/MatrixFieldLis/MatrixFieldLis_",children:"MatrixFieldLis_"})]}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'INTERFACE\n  MODULE SUBROUTINE SetMatrixFieldParam( &\n    & param, &\n    & name, &\n    & matrixProp, &\n    & engine,  &\n    & spaceCompo, &\n    & timeCompo, &\n    & fieldType, &\n    & comm, &\n    & local_n, &\n    & global_n)\n    TYPE(ParameterList_), INTENT(INOUT) :: param\n    !! Options to create [[MatrixField_]] will be stored in this\n    CHARACTER(*), INTENT(IN) :: name\n    !! Name of the matrix field\n    CHARACTER(*), INTENT(IN) :: matrixProp\n    !! Matrix property, "SYM" or "UNSYM"\n    CHARACTER(*), INTENT(IN) :: engine\n    !! "NATIVE_SERIE"\n    !! "LIS_OMP"\n    !! "LIS_MPI"\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: spaceCompo\n    !! Number of space-components, see [[DOF_]]\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: timeCompo\n    !! Number of time-components, see [[DOF_]]\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: fieldType\n    !! fieldType can be following\n    !! FIELD_TYPE_NORMAL\n    !! FIELD_TYPE_CONSTANT\n    !! FIELD_TYPE_CONSTANT_SPACE\n    !! FIELD_TYPE_CONSTANT_TIME\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: comm\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_n\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: global_n\n  END SUBROUTINE SetMatrixFieldParam\nEND INTERFACE\n'})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(67294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);