"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20126],{30154:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var t=n(85893),r=n(11151);const s={},i="GetSUGN3Param",o={id:"ElemshapeData/GetSUGN3Param",title:"GetSUGN3Param",description:"",source:"@site/docs/docs-api/ElemshapeData/GetSUGN3Param.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/GetSUGN3Param",permalink:"/docs-api/ElemshapeData/GetSUGN3Param",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/GetSUGN3Param.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetProjectionOfdNdXt",permalink:"/docs-api/ElemshapeData/GetProjectionOfdNdXt"},next:{title:"GetSUGN3Param_Takizawa2018",permalink:"/docs-api/ElemshapeData/GetSUGN3Param_Takizawa2018"}},N={},c=[];function u(a){const e={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...a.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"getsugn3param",children:"GetSUGN3Param"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_1(obj, tau, val, nu, h, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    TYPE(FEVariable_), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_1\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_2(obj, tau, val, nu, h, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    TYPE(FEVariable_), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_2\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_3(obj, tau, val, nu, h, opt)\n    CLASS(ElemshapeData_), INTENT(IN) :: obj\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    REAL( DFP ), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_3\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE GetSUGN3Param_4(obj, tau, val, nu, h, opt)\n    CLASS(STElemshapeData_), INTENT(IN) :: obj( : )\n      !! obj can be an instance of [[STElemshapeData_]]\n    TYPE(FEVariable_), INTENT(INOUT) :: tau\n      !! tau-sugn3 is a scalar and defined on quadrature points\n    TYPE(FEVariable_), INTENT(IN) :: val\n      !! val can be a vector or a scalar\n    REAL( DFP ), INTENT(IN) :: nu\n      !! kinematic viscosity or diffusivity\n      !! scalar and defined on quadrature points\n    TYPE(FEVariable_), OPTIONAL, INTENT(INOUT) :: h\n      !! scalar variable, defined on space-time quadrature points\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: opt\n      !! currently, opt is not used, but it may be used in future\n  END SUBROUTINE GetSUGN3Param_4\n"})})]})}function d(a={}){const{wrapper:e}={...(0,r.a)(),...a.components};return e?(0,t.jsx)(e,{...a,children:(0,t.jsx)(u,{...a})}):u(a)}},11151:(a,e,n)=>{n.d(e,{Z:()=>o,a:()=>i});var t=n(67294);const r={},s=t.createContext(r);function i(a){const e=t.useContext(s);return t.useMemo((function(){return"function"==typeof a?a(e):{...e,...a}}),[e,a])}function o(a){let e;return e=a.disableParentContext?"function"==typeof a.components?a.components(r):a.components||r:i(a.components),t.createElement(s.Provider,{value:e},a.children)}}}]);