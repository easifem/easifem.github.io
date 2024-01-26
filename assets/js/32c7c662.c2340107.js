"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[86219],{94332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(85893),a=n(11151);const s={},o="DOFStartIndex",i={id:"DOF/DOFStartIndex",title:"DOFStartIndex",description:"This method returns the start index of a physical variable.",source:"@site/docs/docs-api/DOF/DOFStartIndex.md",sourceDirName:"DOF",slug:"/DOF/DOFStartIndex",permalink:"/docs-api/DOF/DOFStartIndex",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/DOF/DOFStartIndex.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DOFEndIndex",permalink:"/docs-api/DOF/DOFENDIndex"},next:{title:"Structure",permalink:"/docs-api/DOF/DOF_"}},d={},c=[{value:"Interface",id:"interface",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"dofstartindex",children:"DOFStartIndex"}),"\n",(0,r.jsx)(t.p,{children:"This method returns the start index of a physical variable."}),"\n",(0,r.jsxs)(t.p,{children:["It actually returns ",(0,r.jsx)(t.code,{children:"obj%map( ivar, 5 )"})]}),"\n",(0,r.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE PURE FUNCTION dof_DOFStartIndex(obj, ivar) RESULT(ans)\n    CLASS(DOF_), INTENT(IN) :: obj\n    INTEGER(I4B), INTENT(IN) :: ivar\n    INTEGER(I4B) :: ans\n  END FUNCTION dof_DOFStartIndex\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);