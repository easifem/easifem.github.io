"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[55835],{16253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=n(85893),r=n(11151);const a={},i="Structure",d={id:"RefHexahedron/RefHexahedron_",title:"Structure",description:"Reference Hexahedron element. It is a child of [[AbstractRefElement_]].",source:"@site/docs/docs-api/RefHexahedron/RefHexahedron_.md",sourceDirName:"RefHexahedron",slug:"/RefHexahedron/RefHexahedron_",permalink:"/docs-api/RefHexahedron/RefHexahedron_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefHexahedron/RefHexahedron_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RefCoord",permalink:"/docs-api/RefHexahedron/RefCoord"},next:{title:"RefLine",permalink:"/docs-api/RefLine/"}},s={},c=[{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"GetFacetElements",id:"getfacetelements",level:3},{value:"GetFacetTopology",id:"getfacettopology",level:3},{value:"GetTopology",id:"gettopology",level:3}];function l(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,o.jsx)(t.p,{children:"Reference Hexahedron element. It is a child of [[AbstractRefElement_]]."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractRefElement_) :: RefHexahedron_\n"})}),"\n",(0,o.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,o.jsx)(t.h3,{id:"initiate",children:"Initiate"}),"\n",(0,o.jsx)(t.p,{children:"Initiate an instance of RefHexahedron"}),"\n",(0,o.jsx)(t.p,{children:"Interface:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, nsd)\n    CLASS(RefHexahedron_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nsd\n  !! spatial dimension\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,o.jsx)(t.h3,{id:"getfacetelements",children:"GetFacetElements"}),"\n",(0,o.jsx)(t.h3,{id:"getfacettopology",children:"GetFacetTopology"}),"\n",(0,o.jsx)(t.h3,{id:"gettopology",children:"GetTopology"})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var o=n(67294);const r={},a=o.createContext(r);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);