"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[42686],{31644:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(85893),i=t(11151);const o={sidebar_position:2},s="Structure",c={id:"UserFunction/UserFunction_",title:"Structure",description:"UserFunction_ is designed to handle user defined function.",source:"@site/docs/docs-api/UserFunction/UserFunction_.md",sourceDirName:"UserFunction",slug:"/UserFunction/UserFunction_",permalink:"/docs-api/UserFunction/UserFunction_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/UserFunction/UserFunction_.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"UserFunction",permalink:"/docs-api/UserFunction/"},next:{title:"CheckEssentialParam",permalink:"/docs-api/UserFunction/CheckEssentialParam"}},a={},u=[];function d(n){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"structure",children:"Structure"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"UserFunction_"})," is designed to handle user defined function."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-fortran",children:"TYPE :: UserFunction_\n  PRIVATE\n  TYPE(String) :: name\n  !! name of the function\n  LOGICAL(LGT) :: isInitiated = .FALSE.\n  LOGICAL(LGT) :: isUserFunctionSet = .FALSE.\n  LOGICAL(LGT) :: isLuaScript = .FALSE.\n  TYPE(String) :: luaScript\n  TYPE(String) :: luaFunctionName\n  INTEGER(I4B) :: returnType = 0\n  INTEGER(I4B) :: argType = 0\n  INTEGER(I4B) :: numArgs = 0\n  !! Number of arguments\n  !! number of args is 1 for scalar argType scalar\n  INTEGER(I4B) :: numReturns = 0\n  !! Number of return types\n  !! number of return type is 1 for scalar return\n  INTEGER(I4B) :: returnShape(2) = 0\n  !! Shape of return\n  !! Only used when returnType is matrix\n  REAL(DFP) :: scalarValue = 0.0\n  !! Scalar constant value\n  REAL(DFP), ALLOCATABLE :: vectorValue(:)\n  !! Vector constant value\n  REAL(DFP), ALLOCATABLE :: matrixValue(:, :)\n  !! Matrix constant value\n  PROCEDURE(iface_ScalarFunction), POINTER, NOPASS :: scalarFunction =>  &\n    & NULL()\n  !! Scalar function pointer\n  PROCEDURE(iface_VectorFunction), POINTER, NOPASS :: vectorFunction =>  &\n    & NULL()\n  !! vector function pointer\n  PROCEDURE(iface_MatrixFunction), POINTER, NOPASS :: matrixFunction =>  &\n    & NULL()\n  !! matrix function pointer\nEnd Type UserFunction_\n"})})]})}function l(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>s});var r=t(67294);const i={},o=r.createContext(i);function s(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);