"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[95657],{70670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(85893),r=n(11151);const s={},i="CheckEssentialParam",o={id:"LinSolver/CheckEssentialParam",title:"CheckEssentialParam",description:"This method checks the essential parameters required to construct an instance of LinSolver.",source:"@site/docs/docs-api/LinSolver/CheckEssentialParam.md",sourceDirName:"LinSolver",slug:"/LinSolver/CheckEssentialParam",permalink:"/docs-api/LinSolver/CheckEssentialParam",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/LinSolver/CheckEssentialParam.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LinSolver",permalink:"/docs-api/LinSolver/"},next:{title:"Deallocate",permalink:"/docs-api/LinSolver/Deallocate"}},c={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"checkessentialparam",children:"CheckEssentialParam"}),"\n",(0,a.jsx)(t.p,{children:"This method checks the essential parameters required to construct an instance of LinSolver."}),"\n",(0,a.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE CheckEssentialParam(obj, param)\n    CLASS(LinSolver_), INTENT(IN) :: obj\n    TYPE(ParameterList_), INTENT(IN) :: param\n  END SUBROUTINE CheckEssentialParam\nEND INTERFACE\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(67294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);