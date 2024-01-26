"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[92619],{49172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(85893),i=n(11151);const r={},a="GetVelocityNeumannBCPointer",c={id:"SteadyStokes221/GetVelocityNeumannBCPointer",title:"GetVelocityNeumannBCPointer",description:"This routine returns the pointer to Neumann boundary condition of Velocity field in AbstractSteadyStokes kernel, that is obj%NBCForVelocity(nbcNo)%ptr.",source:"@site/docs/docs-api/SteadyStokes221/GetVelocityNeumannBCPointer.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/GetVelocityNeumannBCPointer",permalink:"/docs-api/SteadyStokes221/GetVelocityNeumannBCPointer",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes221/GetVelocityNeumannBCPointer.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetVelocityDirichletBCPointer",permalink:"/docs-api/SteadyStokes221/GetVelocityDirichletBCPointer"},next:{title:"Import",permalink:"/docs-api/SteadyStokes221/Import"}},s={},d=[{value:"Interface",id:"interface",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"getvelocityneumannbcpointer",children:"GetVelocityNeumannBCPointer"}),"\n",(0,o.jsxs)(t.p,{children:["This routine returns the pointer to Neumann boundary condition of Velocity field in ",(0,o.jsx)(t.a,{href:"/docs-api/AbstractSteadyStokes/AbstractSteadyStokes_",children:"AbstractSteadyStokes_"})," kernel, that is ",(0,o.jsx)(t.code,{children:"obj%NBCForVelocity(nbcNo)%ptr"}),"."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"After obtaining the Neumann boundary condition pointer, user can set the boundary condition"}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"nbcNo"})," should be lesser than total Neumann boundary condition."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION getVelocityNeumannBCPointer(obj, nbcNo) RESULT(ans)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nbcNo\n    !! Neumann boundary nunber\n    CLASS(NeumannBC_), POINTER :: ans\n  END FUNCTION getVelocityNeumannBCPointer\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(67294);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);