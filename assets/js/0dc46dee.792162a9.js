"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[21507],{88558:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>N});var a=t(85893),o=t(11151);const c={},i="Set",r={id:"NeumannBC/Set",title:"Set",description:"Set Neumann boundary condition.",source:"@site/docs/docs-api/NeumannBC/Set.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/Set",permalink:"/docs-api/NeumannBC/Set",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/NeumannBC/Set.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/NeumannBC/NeumannBC_"},next:{title:"SetNeumannBCParam",permalink:"/docs-api/NeumannBC/SetNeumannBCParam"}},u={},N=[{value:"Interface",id:"interface",level:2}];function s(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"set",children:"Set"}),"\n",(0,a.jsx)(n.p,{children:"Set Neumann boundary condition."}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Set(obj, ConstantNodalValue, SpaceNodalValue, &\n    & TimeNodalValue, SpaceTimeNodalValue, SpaceFunction, TimeFunction, &\n    & SpaceTimeFunction)\n    CLASS(NeumannBC_), INTENT(INOUT) :: obj\n    REAL(DFP), OPTIONAL, INTENT(IN) :: ConstantNodalValue\n    REAL(DFP), OPTIONAL, INTENT(IN) :: SpaceNodalValue(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: TimeNodalValue(:)\n    REAL(DFP), OPTIONAL, INTENT(IN) :: SpaceTimeNodalValue(:, :)\n    PROCEDURE(iface_SpaceTimeFunction), POINTER, OPTIONAL, INTENT(IN) :: &\n      & SpaceTimeFunction\n    PROCEDURE(iface_SpaceFunction), POINTER, OPTIONAL, INTENT(IN) :: &\n      & SpaceFunction\n    PROCEDURE(iface_TimeFunction), POINTER, OPTIONAL, INTENT(IN) :: &\n      & TimeFunction\n  END SUBROUTINE Set\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var a=t(67294);const o={},c=a.createContext(o);function i(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);