"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[91145],{449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(85893),o=n(11151);const s={},i="Allocate",l={id:"ElemshapeData/Allocate",title:"Allocate",description:"This subroutine allocates the memory for various matrices in the object.",source:"@site/docs/docs-api/ElemshapeData/Allocate.md",sourceDirName:"ElemshapeData",slug:"/ElemshapeData/Allocate",permalink:"/docs-api/ElemshapeData/Allocate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/ElemshapeData/Allocate.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ElemshapeData",permalink:"/docs-api/ElemshapeData/"},next:{title:"BaseContinuity",permalink:"/docs-api/ElemshapeData/BaseContinuity"}},r={},c=[];function d(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"allocate",children:"Allocate"}),"\n",(0,a.jsx)(t.p,{children:"This subroutine allocates the memory for various matrices in the object."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["This subroutine belongs to the generic interface called ",(0,a.jsx)(t.code,{children:"Allocate()"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"  MODULE PURE SUBROUTINE Allocate(obj, nsd, xidim, nns, nips)\n    CLASS(ElemshapeData_), INTENT(INOUT) :: obj\n    !! object to be returned\n    INTEGER(I4B), INTENT(IN) :: nsd\n    !! spatial dimension\n    INTEGER(I4B), INTENT(IN) :: xidim\n    !! xidimension\n    INTEGER(I4B), INTENT(IN) :: nns\n    !! number of nodes in element\n    INTEGER(I4B), INTENT(IN) :: nips\n    !! number of integration points\n  END SUBROUTINE Allocate\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const o={},s=a.createContext(o);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);