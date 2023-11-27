"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[94561],{45927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(85893),s=n(11151);const o={},i="GetPressureNeumannBCPointer",a={id:"SteadyStokes221/GetPressureNeumannBCPointer",title:"GetPressureNeumannBCPointer",description:"This routine returns the pointer to Neumann boundary condition of pressure field in AbstractSteadyStokes kernel, that is obj%NBCForPressure(nbcNo)%ptr.",source:"@site/docs/docs-api/SteadyStokes221/GetPressureNeumannBCPointer.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/GetPressureNeumannBCPointer",permalink:"/docs-api/SteadyStokes221/GetPressureNeumannBCPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes221/GetPressureNeumannBCPointer.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPressureDirichletBCPointer",permalink:"/docs-api/SteadyStokes221/GetPressureDirichletBCPointer"},next:{title:"GetVelocityDirichletBCPointer",permalink:"/docs-api/SteadyStokes221/GetVelocityDirichletBCPointer"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function u(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getpressureneumannbcpointer",children:"GetPressureNeumannBCPointer"}),"\n",(0,r.jsxs)(t.p,{children:["This routine returns the pointer to Neumann boundary condition of pressure field in ",(0,r.jsx)(t.a,{href:"/docs-api/AbstractSteadyStokes/AbstractSteadyStokes_",children:"AbstractSteadyStokes_"})," kernel, that is ",(0,r.jsx)(t.code,{children:"obj%NBCForPressure(nbcNo)%ptr"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"After obtaining the Neumann boundary condition pointer, user can set the boundary condition"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION getPressureNeumannBCPointer(obj, nbcNo) RESULT(ans)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    CLASS(NeumannBC_), POINTER :: ans\n  END FUNCTION getPressureNeumannBCPointer\nEND INTERFACE\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);