"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35676],{57855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(85893),r=n(11151);const s={},o="Structure",a={id:"RefPrism/RefPrism_",title:"Structure",description:"Reference Prism element. It is a child of [[AbstractRefElement_]].",source:"@site/docs/docs-api/RefPrism/RefPrism_.md",sourceDirName:"RefPrism",slug:"/RefPrism/RefPrism_",permalink:"/docs-api/RefPrism/RefPrism_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefPrism/RefPrism_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RefPrism",permalink:"/docs-api/RefPrism/"},next:{title:"RefPyramid",permalink:"/docs-api/RefPyramid/"}},c={},l=[{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"GetFacetElements",id:"getfacetelements",level:3},{value:"GetFacetTopology",id:"getfacettopology",level:3},{value:"GetTopology",id:"gettopology",level:3}];function d(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(t.p,{children:"Reference Prism element. It is a child of [[AbstractRefElement_]]."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractRefElement_) :: RefPrism_\n"})}),"\n",(0,i.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(t.h3,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsx)(t.p,{children:"Initiate an instance of RefPrism"}),"\n",(0,i.jsx)(t.p,{children:"Interface:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, nsd)\n    CLASS(RefPrism_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nsd\n  !! spatial dimension\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,i.jsx)(t.h3,{id:"getfacetelements",children:"GetFacetElements"}),"\n",(0,i.jsx)(t.h3,{id:"getfacettopology",children:"GetFacetTopology"}),"\n",(0,i.jsx)(t.h3,{id:"gettopology",children:"GetTopology"})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(67294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);