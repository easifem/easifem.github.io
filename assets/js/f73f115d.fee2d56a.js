"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[12699],{42843:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>T,toc:()=>N});var t=n(85893),r=n(11151);const i={},s="GetSUGN3Param_Takizawa2018",T={id:"ElemshapeData/GetSUGN3Param_Takizawa2018",title:"GetSUGN3Param_Takizawa2018",description:"",source:"@site/docs/docs-api/ElemshapeData/GetSUGN3Param_Takizawa2018.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/GetSUGN3Param_Takizawa2018",permalink:"/docs-api/ElemshapeData/GetSUGN3Param_Takizawa2018",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/GetSUGN3Param_Takizawa2018.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetSUGN3Param",permalink:"/docs-api/ElemshapeData/GetSUGN3Param"},next:{title:"GetSUPGParam",permalink:"/docs-api/ElemshapeData/GetSUPGParam"}},o={},N=[];function l(a){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"getsugn3param_takizawa2018",children:"GetSUGN3Param_Takizawa2018"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_1(obj, &\n    & tau, val, nu, h, hmax, hmin, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    TYPE(FEVariable_), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_Takizawa2018_1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_2(obj, tau, val, &\n    & nu, h, hmax, hmin, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    TYPE(FEVariable_), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_Takizawa2018_2\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_3(obj, tau, val, &\n    & nu, h, hmax, hmin, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    REAL( DFP ), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_Takizawa2018_3\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_Takizawa2018_4(obj, tau, val, &\n    & nu, h, hmax, hmin, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    REAL( DFP ), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmax\n      !! scalar variable, defined on space-time quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: hmin\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_Takizawa2018_4\n"})})]})}function d(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(l,{...a})}):l(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>T,a:()=>s});var t=n(67294);const r={},i=t.createContext(r);function s(a){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function T(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:s(a.components),t.createElement(i.Provider,{value:e},a.children)}}}]);