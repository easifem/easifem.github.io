"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[92326],{17354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(85893),s=n(11151);const o={},r="Run",i={id:"SteadyStokes221/Run",title:"Run",description:"Run the simulation",source:"@site/docs/docs-api/SteadyStokes221/Run.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/Run",permalink:"/docs-api/SteadyStokes221/Run",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes221/Run.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IsSteadyState",permalink:"/docs-api/SteadyStokes221/IsSteadyState"},next:{title:"Set",permalink:"/docs-api/SteadyStokes221/Set"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"run",children:"Run"}),"\n",(0,a.jsx)(t.p,{children:"Run the simulation"}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Run(obj, param)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE Run\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);