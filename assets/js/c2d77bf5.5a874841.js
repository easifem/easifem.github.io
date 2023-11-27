"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[62164],{82097:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>m,toc:()=>c});var n=s(85893),i=s(11151);const r={},a=void 0,m={id:"GmshAPI/Gmsh_test_2",title:"Gmsh_test_2",description:"PROGRAM main",source:"@site/docs/docs-api/GmshAPI/Gmsh_test_2.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/Gmsh_test_2",permalink:"/docs-api/GmshAPI/Gmsh_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/GmshAPI/Gmsh_test_2.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gmsh example 1",permalink:"/docs-api/GmshAPI/Gmsh_test_1"},next:{title:"GridPointUtility",permalink:"/docs-api/GridPointUtility/"}},o={},c=[];function h(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,n.jsx)(t.p,{children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\n!\n! [[Gmsh_]]\n!\nTYPE( Gmsh_ ) :: gmsh\nINTEGER( I4B ) :: ierr\nCALL GMSH_INIT\n! #Gmsh/Initialize\nierr = gmsh%Initialize()\n! #Gmsh/Open\nierr = gmsh%Open(fileName="t1.msh" )\n! #Gmsh/Write\nierr = gmsh%Write(fileName="t2.msh")\n! #Gmsh/Finalize\nierr = gmsh%Finalize()\n! #Gmsh/Clear\nierr = gmsh%Clear()\nCALL GMSH_FINAL\nEND PROGRAM main'})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>m,a:()=>a});var n=s(67294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function m(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);