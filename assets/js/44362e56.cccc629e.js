"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[90670],{9805:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=n(85893),s=n(11151);function i(t){const e={code:"code",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\ncall ok( last([1,2,3]) .eq. 3, "last" )\ncall ok( last([1.,2.,3.]) .approxeq. 3., "last" )\ncall ok( last("hello world!") .eq. "!", "last" )\nend program main\n'})})}function o(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(i,{...t})}):i(t)}const r={},l="Last",c={id:"TailUtility/Last",title:"Last",description:"Returns the last element of a vector.",source:"@site/docs/docs-api/TailUtility/Last.md",sourceDirName:"TailUtility",slug:"/TailUtility/Last",permalink:"/docs-api/TailUtility/Last",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/TailUtility/Last.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TailUtility",permalink:"/docs-api/TailUtility/"},next:{title:"Tail",permalink:"/docs-api/TailUtility/Tail"}},d={},p=[];function u(t){const e={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"last",children:"Last"}),"\n",(0,a.jsx)(e.p,{children:"Returns the last element of a vector."}),"\n",(0,a.jsx)(e.p,{children:"Calling example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-fortran",children:'a = last([1,2,3])\nb = last([1.,2.,3.])\nc = last("hello world")\n'})}),"\n","\n","\n",(0,a.jsx)(o,{})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);