"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38424],{91812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(85893),a=n(11151);const o={},r="IsConverged",d={id:"SteadyStokes111/IsConverged",title:"IsConverged",description:"Returns true if steady state is achieved.",source:"@site/docs/docs-api/SteadyStokes111/IsConverged.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/IsConverged",permalink:"/docs-api/SteadyStokes111/IsConverged",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/IsConverged.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"InitiateFields",permalink:"/docs-api/SteadyStokes111/InitiateFields"},next:{title:"IsSteadyState",permalink:"/docs-api/SteadyStokes111/IsSteadyState"}},i={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"isconverged",children:"IsConverged"}),"\n",(0,s.jsx)(t.p,{children:"Returns true if steady state is achieved."}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION isConverged(obj) RESULT(Ans)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isConverged\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var s=n(67294);const a={},o=s.createContext(a);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);