"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[13212],{23901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>d,metadata:()=>s,toc:()=>i});var r=t(85893),a=t(11151);const d={},o="KernelAddNeumannBC",s={id:"AbstractKernel/KernelAddNeumannBC",title:"KernelAddNeumannBC",description:"Add Neumann boundary conditions.",source:"@site/docs/docs-api/AbstractKernel/KernelAddNeumannBC.md",sourceDirName:"AbstractKernel",slug:"/AbstractKernel/KernelAddNeumannBC",permalink:"/docs-api/AbstractKernel/KernelAddNeumannBC",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractKernel/KernelAddNeumannBC.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KernelAddDirichletBC",permalink:"/docs-api/AbstractKernel/KernelAddDirichletBC"},next:{title:"KernelGetCoordinateSystemID",permalink:"/docs-api/AbstractKernel/KernelGetCoordinateSystemID"}},c={},i=[];function u(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"kerneladdneumannbc",children:"KernelAddNeumannBC"}),"\n",(0,r.jsx)(n.p,{children:"Add Neumann boundary conditions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE KernelAddNeumannBC(nbc, nbcNo, param, boundary, dom)\n    TYPE(NeumannBCPointer_), INTENT(INOUT) :: nbc(:)\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n  !! Neumann boundary number\n    TYPE(ParameterList_), INTENT(IN) :: param\n  !! parameter for constructing [NeumannBC_](NeumannBC_).\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n  !! Boundary region\n    CLASS(Domain_), INTENT(IN) :: dom\n  END SUBROUTINE KernelAddNeumannBC\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},d=r.createContext(a);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);