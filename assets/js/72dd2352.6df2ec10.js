"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50907],{70262:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var n=i(85893),r=i(11151);const c={},l="ApplyDirichletBC",o={id:"STVectorField/ApplyDirichletBC",title:"ApplyDirichletBC",description:"This method applies Dirichlet boundary condition to Space-time nodal vector.",source:"@site/docs/docs-api/STVectorField/ApplyDirichletBC.md",sourceDirName:"STVectorField",slug:"/STVectorField/ApplyDirichletBC",permalink:"/docs-api/STVectorField/ApplyDirichletBC",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STVectorField/ApplyDirichletBC.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STVectorField",permalink:"/docs-api/STVectorField/STVectorField_"},next:{title:"CheckEssentialParam",permalink:"/docs-api/STVectorField/CheckEssentialParam"}},a={},d=[{value:"Interface",id:"interface",level:2},{value:"Interface 2",id:"interface-2",level:2}];function s(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"applydirichletbc",children:"ApplyDirichletBC"}),"\n",(0,n.jsx)(t.p,{children:"This method applies Dirichlet boundary condition to Space-time nodal vector."}),"\n",(0,n.jsx)(t.p,{children:"Calling example:"}),"\n",(0,n.jsx)(t.p,{children:"TODO"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE stvField_applyDirichletBC1(obj, dbc)\n    CLASS(STVectorField_), INTENT(INOUT) :: obj\n    CLASS(DirichletBC_), INTENT(IN) :: dbc\n  END SUBROUTINE stvField_applyDirichletBC1\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"interface-2",children:"Interface 2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE stvField_applyDirichletBC2(obj, dbc)\n    CLASS(STVectorField_), INTENT(INOUT) :: obj\n    CLASS(DirichletBCPointer_), INTENT(IN) :: dbc(:)\n  END SUBROUTINE stvField_applyDirichletBC2\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>l});var n=i(67294);const r={},c=n.createContext(r);function l(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);