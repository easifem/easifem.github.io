"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[17065],{55647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(85893),s=t(11151);const i={},o="Display",r={id:"NeumannBC/Display",title:"Display",description:"Display the content of NeumannBC",source:"@site/docs/docs-api/NeumannBC/Display.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/Display",permalink:"/docs-api/NeumannBC/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/NeumannBC/Display.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/NeumannBC/Deallocate"},next:{title:"Export",permalink:"/docs-api/NeumannBC/Export"}},c={},l=[{value:"Interface",id:"interface",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"display",children:"Display"}),"\n",(0,a.jsxs)(n.p,{children:["Display the content of ",(0,a.jsx)(n.a,{href:"/docs-api/NeumannBC/NeumannBC_",children:"NeumannBC_"})]}),"\n",(0,a.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Display(obj, msg, unitNo)\n    CLASS(NeumannBC_), INTENT(IN) :: obj\n    CHARACTER(*), INTENT(IN) :: msg\n    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitNo\n  END SUBROUTINE Display\nEND INTERFACE\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(67294);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);