"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[8028],{75031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=a(85893),n=a(11151);const s={},r="Display",c={id:"STScalarFieldLis/Display",title:"Display",description:"Display the content of field.",source:"@site/docs/docs-api/STScalarFieldLis/Display.md",sourceDirName:"STScalarFieldLis",slug:"/STScalarFieldLis/Display",permalink:"/docs-api/STScalarFieldLis/Display",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STScalarFieldLis/Display.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deallocate",permalink:"/docs-api/STScalarFieldLis/Deallocate"},next:{title:"Export",permalink:"/docs-api/STScalarFieldLis/Export"}},o={},l=[{value:"Interface",id:"interface",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"display",children:"Display"}),"\n",(0,i.jsx)(t.p,{children:"Display the content of field."}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\nSUBROUTINE Display( obj, msg, unitNo )\n  CLASS( STScalarField_ ), INTENT( INOUT ) :: obj\n  CHARACTER( LEN = * ), INTENT( IN ) :: msg\n  INTEGER( I4B ), OPTIONAL, INTENT( IN ) :: unitNo\nEND SUBROUTINE Display\nEND INTERFACE\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var i=a(67294);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);