"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[63091],{8610:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=i(85893),n=i(11151);const o={},d="SteadyStokesUtility",a={id:"SteadyStokes111/SteadyStokesUtility",title:"SteadyStokesUtility",description:"SetMeshData",source:"@site/docs/docs-api/SteadyStokes111/SteadyStokesUtility.md",sourceDirName:"SteadyStokes111",slug:"/SteadyStokes111/SteadyStokesUtility",permalink:"/docs-api/SteadyStokes111/SteadyStokesUtility",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/SteadyStokes111/SteadyStokesUtility.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Solve",permalink:"/docs-api/SteadyStokes111/Solve"},next:{title:"Update",permalink:"/docs-api/SteadyStokes111/Update"}},r={},l=[{value:"SetMeshData",id:"setmeshdata",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"steadystokesutility",children:"SteadyStokesUtility"}),"\n",(0,s.jsx)(t.h2,{id:"setmeshdata",children:"SetMeshData"}),"\n",(0,s.jsx)(t.p,{children:"This routine sets the mesh data."}),"\n",(0,s.jsxs)(t.p,{children:["If we use equal order interpolationm then this routine sets following data for ",(0,s.jsx)(t.code,{children:"domForVelocity"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateNodeToElements"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateNodeToNodes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateFacetElements"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Truly, speaking ",(0,s.jsx)(t.code,{children:"FacetElements"})," data is not required always, but we still form it (because the cost is trivial). This is kind of BUG, which will be removed in future versions."]}),"\n",(0,s.jsxs)(t.p,{children:["If we use mixed finite element methods, then this routine sets the following data for ",(0,s.jsx)(t.code,{children:"domForVelocity"}),", ",(0,s.jsx)(t.code,{children:"domForPressure"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateNodeToElements"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateNodeToNodes"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.code,{children:"InitiateFacetElements"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>d});var s=i(67294);const n={},o=s.createContext(n);function d(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);