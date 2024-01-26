"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[53780],{87063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var o=n(85893),s=n(11151);const l={},a="IsElemNumAllocated",c={id:"MeshSelection/IsElemNumAllocated",title:"IsElemNumAllocated",description:"This routine returns true if element numbers of a given dim are allocated.",source:"@site/docs/docs-api/MeshSelection/IsElemNumAllocated.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/IsElemNumAllocated",permalink:"/docs-api/MeshSelection/IsElemNumAllocated",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MeshSelection/IsElemNumAllocated.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/MeshSelection/Import"},next:{title:"IsMeshIDAllocated",permalink:"/docs-api/MeshSelection/IsMeshIDAllocated"}},i={},r=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"iselemnumallocated",children:"IsElemNumAllocated"}),"\n",(0,o.jsx)(t.p,{children:"This routine returns true if element numbers of a given dim are allocated."}),"\n",(0,o.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION isElemNumAllocated(obj, dim) RESULT(Ans)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: dim\n    LOGICAL(LGT) :: ans\n  END FUNCTION isElemNumAllocated\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(67294);const s={},l=o.createContext(s);function a(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);