"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96034],{44654:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=a(85893),n=a(11151);const o={},r="IsSteadyState",d={id:"SteadyStokes111/IsSteadyState",title:"IsSteadyState",description:"Returns true if steady state is achieved.",source:"@site/docs/docs-api/SteadyStokes111/IsSteadyState.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/IsSteadyState",permalink:"/docs-api/SteadyStokes111/IsSteadyState",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/IsSteadyState.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsConverged",permalink:"/docs-api/SteadyStokes111/IsConverged"},next:{title:"Run",permalink:"/docs-api/SteadyStokes111/Run"}},i={},c=[{value:"Interface",id:"interface",level:2}];function S(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"issteadystate",children:"IsSteadyState"}),"\n",(0,s.jsx)(t.p,{children:"Returns true if steady state is achieved."}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE FUNCTION isSteadyState(obj) RESULT(Ans)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    LOGICAL(LGT) :: ans\n  END FUNCTION isSteadyState\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(S,{...e})}):S(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>d,a:()=>r});var s=a(67294);const n={},o=s.createContext(n);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);