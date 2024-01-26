"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50563],{21321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(85893),r=n(11151);const o={},i="Structure",l={id:"RefQuadrangle/RefQuadrangle_",title:"Structure",description:"Reference Quadrangle element. It is a child of [[AbstractRefElement_]].",source:"@site/docs/docs-api/RefQuadrangle/RefQuadrangle_.md",sourceDirName:"RefQuadrangle",slug:"/RefQuadrangle/RefQuadrangle_",permalink:"/docs-api/RefQuadrangle/RefQuadrangle_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/RefQuadrangle/RefQuadrangle_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RefCoord",permalink:"/docs-api/RefQuadrangle/RefCoord"},next:{title:"RefTetrahedron",permalink:"/docs-api/RefTetrahedron/"}},d={},s=[{value:"Methods",id:"methods",level:2},{value:"Initiate",id:"initiate",level:3},{value:"GetFacetElements",id:"getfacetelements",level:3},{value:"GetFacetTopology",id:"getfacettopology",level:3},{value:"GetTopology",id:"gettopology",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"structure",children:"Structure"}),"\n",(0,a.jsx)(t.p,{children:"Reference Quadrangle element. It is a child of [[AbstractRefElement_]]."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"TYPE, EXTENDS(AbstractRefElement_) :: RefQuadrangle_\n"})}),"\n",(0,a.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(t.h3,{id:"initiate",children:"Initiate"}),"\n",(0,a.jsx)(t.p,{children:"Initiate an instance of RefQuadrangle"}),"\n",(0,a.jsx)(t.p,{children:"Interface:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Initiate(obj, nsd)\n    CLASS(RefQuadrangle_), INTENT(INOUT) :: obj\n    INTEGER(I4B), INTENT(IN) :: nsd\n  !! spatial dimension\n  END SUBROUTINE Initiate\nEND INTERFACE\n"})}),"\n",(0,a.jsx)(t.h3,{id:"getfacetelements",children:"GetFacetElements"}),"\n",(0,a.jsx)(t.h3,{id:"getfacettopology",children:"GetFacetTopology"}),"\n",(0,a.jsx)(t.h3,{id:"gettopology",children:"GetTopology"})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var a=n(67294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);