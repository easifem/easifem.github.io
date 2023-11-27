"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[5724],{44938:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>r});var i=s(85893),n=s(11151);const o={date:new Date("2022-12-06T00:00:00.000Z"),update:new Date("2022-12-06T00:00:00.000Z"),status:"wip",docs:"partial",extpkgs:"none",category:["kernel"],tags:["SteadyStokesUtility","kernel"]},a="SteadyStokesUtility",d={id:"SteadyStokes221/SteadyStokesUtility",title:"SteadyStokesUtility",description:"SetMeshData",source:"@site/docs/docs-api/SteadyStokes221/SteadyStokesUtility.md",sourceDirName:"SteadyStokes221",slug:"/SteadyStokes221/SteadyStokesUtility",permalink:"/docs-api/SteadyStokes221/SteadyStokesUtility",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/SteadyStokes221/SteadyStokesUtility.md",tags:[{label:"SteadyStokesUtility",permalink:"/docs-api/tags/steady-stokes-utility"},{label:"kernel",permalink:"/docs-api/tags/kernel"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{date:"2022-12-06T00:00:00.000Z",update:"2022-12-06T00:00:00.000Z",status:"wip",docs:"partial",extpkgs:"none",category:["kernel"],tags:["SteadyStokesUtility","kernel"]},sidebar:"tutorialSidebar",previous:{title:"Solve",permalink:"/docs-api/SteadyStokes221/Solve"},next:{title:"Update",permalink:"/docs-api/SteadyStokes221/Update"}},l={},r=[{value:"SetMeshData",id:"setmeshdata",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"steadystokesutility",children:"SteadyStokesUtility"}),"\n",(0,i.jsx)(t.h2,{id:"setmeshdata",children:"SetMeshData"}),"\n",(0,i.jsx)(t.p,{children:"This routine sets the mesh data."}),"\n",(0,i.jsxs)(t.p,{children:["If we use equal order interpolationm then this routine sets following data for ",(0,i.jsx)(t.code,{children:"domForVelocity"}),"."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateNodeToElements"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateNodeToNodes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateFacetElements"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Truly, speaking ",(0,i.jsx)(t.code,{children:"FacetElements"})," data is not required always, but we still form it (because the cost is trivial). This is kind of BUG, which will be removed in future versions."]}),"\n",(0,i.jsxs)(t.p,{children:["If we use mixed finite element methods, then this routine sets the following data for ",(0,i.jsx)(t.code,{children:"domForVelocity"}),", ",(0,i.jsx)(t.code,{children:"domForPressure"})]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateNodeToElements"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateNodeToNodes"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.code,{children:"InitiateFacetElements"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>d,a:()=>a});var i=s(67294);const n={},o=i.createContext(n);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);