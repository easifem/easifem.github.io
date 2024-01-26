"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[29023],{58402:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(85893),s=t(11151);const a={},d="AddPressureNeumannBC",o={id:"SteadyStokes221/AddPressureNeumannBC",title:"AddPressureNeumannBC",description:"This routine sets the Neumann boundary condition for pressure field in AbstractSteadyStokes kernel.",source:"@site/docs/docs-api/SteadyStokes221/AddPressureNeumannBC.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/AddPressureNeumannBC",permalink:"/docs-api/SteadyStokes221/AddPressureNeumannBC",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes221/AddPressureNeumannBC.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AddPressureDirichletBC",permalink:"/docs-api/SteadyStokes221/AddPressureDirichletBC"},next:{title:"AddVelocityDirichletBC",permalink:"/docs-api/SteadyStokes221/AddVelocityDirichletBC"}},i={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"addpressureneumannbc",children:"AddPressureNeumannBC"}),"\n",(0,r.jsxs)(n.p,{children:["This routine sets the Neumann boundary condition for pressure field in ",(0,r.jsx)(n.a,{href:"/docs-api/AbstractSteadyStokes/AbstractSteadyStokes_",children:"AbstractSteadyStokes_"})," kernel."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["It makes ",(0,r.jsx)(n.code,{children:"obj%NBCForPressure(nbcNo)"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition for pressure field."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE addPressureNeumannBC(obj, nbcNo, param, boundary)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    TYPE(ParameterList_), INTENT(IN) :: param\n    !! parameter for constructing [DirichletBC_](DirichletBC_.md).\n    TYPE(MeshSelection_), INTENT(IN) :: boundary\n    !! Boundary region\n  END SUBROUTINE addPressureNeumannBC\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>d});var r=t(67294);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);