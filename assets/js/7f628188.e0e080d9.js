"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[15544],{52518:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=a(85893),s=a(11151);const o={},i="Display",r={id:"SteadyStokes221/Display",title:"Display",description:"Display the content of SteadyStokes221.",source:"@site/docs/docs-api/SteadyStokes221/Display.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/Display",permalink:"/docs-api/SteadyStokes221/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes221/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CheckEssentialParam",permalink:"/docs-api/SteadyStokes221/CheckEssentialParam"},next:{title:"Export",permalink:"/docs-api/SteadyStokes221/Export"}},c={},d=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,n.jsx)(t.p,{children:"Display the content of SteadyStokes221."}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Display(obj, msg, unitNo)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var n=a(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);