"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[85022],{78161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var a=n(85893),r=n(11151);function i(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:'program main\nuse easifemBase\nimplicit none\n\nreal(dfp) :: avec(10)\n\ncall random_number(avec)\n\ncall OK(head(avec) .APPROXEQ. avec(1), "Head:" )\n\nend program main\n'})})}function o(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}const s={},c="Head",d={id:"HeadUtility/Head",title:"Head",description:"Head function returns the first element of array.",source:"@site/docs/docs-api/HeadUtility/Head.md",sourceDirName:"HeadUtility",slug:"/HeadUtility/Head",permalink:"/docs-api/HeadUtility/Head",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/HeadUtility/Head.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HeadUtility",permalink:"/docs-api/HeadUtility/"},next:{title:"HeatTransferPM",permalink:"/docs-api/HeatTransferPM/"}},l={},p=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"head",children:"Head"}),"\n",(0,a.jsx)(t.p,{children:"Head function returns the first element of array."}),"\n",(0,a.jsx)(t.p,{children:"Calling example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"a = HEAD(b) !! a = b(1)\n"})}),"\n","\n","\n",(0,a.jsx)(o,{})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const r={},i=a.createContext(r);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);