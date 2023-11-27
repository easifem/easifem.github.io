"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[38593],{22305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=n(85893),i=n(11151);const o={},a="Display",c={id:"MeshSelection/Display",title:"Display",description:"Display the contents of an instance of MeshSelection_.",source:"@site/docs/docs-api/MeshSelection/Display.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/Display",permalink:"/docs-api/MeshSelection/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MeshSelection/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/MeshSelection/Deallocate"},next:{title:"Export",permalink:"/docs-api/MeshSelection/Export"}},r={},l=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,s.jsxs)(t.p,{children:["Display the contents of an instance of ",(0,s.jsx)(t.code,{children:"MeshSelection_"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Display(obj, msg, unitNo)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var s=n(67294);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);