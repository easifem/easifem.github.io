"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17080],{51283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(85893),o=n(11151);const r={},c="GetMeshID",a={id:"AbstractBC/GetMeshID",title:"GetMeshID",description:"Get mesh-ids of boundary condition.",source:"@site/docs/docs-api/AbstractBC/GetMeshID.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/GetMeshID",permalink:"/docs-api/AbstractBC/GetMeshID",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/AbstractBC/GetMeshID.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetDOFNo",permalink:"/docs-api/AbstractBC/GetDOFNo"},next:{title:"Import",permalink:"/docs-api/AbstractBC/Import"}},i={},d=[{value:"Interface",id:"interface",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"getmeshid",children:"GetMeshID"}),"\n",(0,s.jsx)(t.p,{children:"Get mesh-ids of boundary condition."}),"\n",(0,s.jsxs)(t.p,{children:["This method calls ",(0,s.jsx)(t.a,{href:"/docs-api/MeshSelection/GetMeshID",children:"GetMeshID"})," method on ",(0,s.jsx)(t.code,{children:"boundary"}),", which is an instance of ",(0,s.jsx)(t.a,{href:"/docs-api/MeshSelection/MeshSelection_",children:"MeshSelection_"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION GetMeshID(obj, dim) RESULT(Ans)\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dim\n    INTEGER(I4B), ALLOCATABLE :: ans(:)\n  END FUNCTION GetMeshID\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var s=n(67294);const o={},r=s.createContext(o);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);