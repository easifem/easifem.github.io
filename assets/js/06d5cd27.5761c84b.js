"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[99093],{28365:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(85893),o=a(11151);const r={},s="UpdateIteration",i={id:"SteadyStokes111/UpdateIteration",title:"UpdateIteration",description:"This subroutine update the state of the kernel",source:"@site/docs/docs-api/SteadyStokes111/UpdateIteration.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/UpdateIteration",permalink:"/docs-api/SteadyStokes111/UpdateIteration",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes111/UpdateIteration.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update",permalink:"/docs-api/SteadyStokes111/Update"},next:{title:"WriteData",permalink:"/docs-api/SteadyStokes111/WriteData"}},d={},c=[{value:"Interface",id:"interface",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"updateiteration",children:"UpdateIteration"}),"\n",(0,n.jsx)(t.p,{children:"This subroutine update the state of the kernel"}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE UpdateIteration(obj, reset)\n    CLASS(AbstractSteadyStokes_), INTENT(INOUT) :: obj\n    LOGICAL(LGT), INTENT(IN) :: reset\n  END SUBROUTINE UpdateIteration\nEND INTERFACE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>s});var n=a(67294);const o={},r=n.createContext(o);function s(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);