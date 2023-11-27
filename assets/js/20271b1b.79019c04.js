"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[80187],{33350:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>x,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>h,toc:()=>c});var r=d(85893),t=d(11151);const s={sidebar_position:5},i="Hexahedron",h={id:"programming-fem/quadraturePoints/hexahedron",title:"Hexahedron",description:"This tutorial covers how to generate quadrature points on Hexahedron.",source:"@site/docs/guides/programming-fem/quadraturePoints/hexahedron.md",sourceDirName:"programming-fem/quadraturePoints",slug:"/programming-fem/quadraturePoints/hexahedron",permalink:"/guides/programming-fem/quadraturePoints/hexahedron",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/guides/programming-fem/quadraturePoints/hexahedron.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Quadrangle",permalink:"/guides/programming-fem/quadraturePoints/quadrangle"},next:{title:"Tetrahedron",permalink:"/guides/programming-fem/quadraturePoints/tetrahedron"}},x={},c=[{value:"Isotropic Gauss Legendre points on biunit Hexahedron",id:"isotropic-gauss-legendre-points-on-biunit-hexahedron",level:2},{value:"Isotropic Gauss-Legendre points on unit Hexahedron",id:"isotropic-gauss-legendre-points-on-unit-hexahedron",level:2},{value:"Anisotropic Gauss-Legendre points on biunit Hexahedron",id:"anisotropic-gauss-legendre-points-on-biunit-hexahedron",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hexahedron",children:"Hexahedron"}),"\n",(0,r.jsx)(n.p,{children:"This tutorial covers how to generate quadrature points on Hexahedron."}),"\n",(0,r.jsxs)(n.p,{children:["For creating ",(0,r.jsx)(n.strong,{children:"Isotropic"})," quadrature see ",(0,r.jsx)(n.a,{href:"#isotropic-gauss-legendre-points-on-biunit-hexahedron",children:"example 1"})," and ",(0,r.jsx)(n.a,{href:"#isotropic-gauss-legendre-points-on-unit-hexahedron",children:"example 2"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For creating ",(0,r.jsx)(n.strong,{children:"Anisotropic"})," quadrature see ",(0,r.jsx)(n.a,{href:"#anisotropic-gauss-legendre-points-on-biunit-hexahedron",children:"example 3"})]}),"\n",(0,r.jsx)(n.h2,{id:"isotropic-gauss-legendre-points-on-biunit-hexahedron",children:"Isotropic Gauss Legendre points on biunit Hexahedron"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE(QuadraturePoint_) :: obj\nTYPE(ReferenceHexahedron_) :: refelem\nINTEGER(I4B) :: order\nrefelem = ReferenceHexahedron(nsd=3_I4B)\norder = 2_I4B\nCALL initiate(obj=obj, &\n  & refelem=refelem, &\n  & order=order,  &\n  & quadratureType=GaussLegendre)\nCALL display(mdencode(obj), "ans: ")\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x1"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x2"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x3"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"w"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"isotropic-gauss-legendre-points-on-unit-hexahedron",children:"Isotropic Gauss-Legendre points on unit Hexahedron"}),"\n",(0,r.jsx)(n.p,{children:"Just pass coordinates of a unit Hexahedron to initiate method of ReferenceHexahedron."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE(QuadraturePoint_) :: obj\nTYPE(ReferenceHexahedron_) :: refelem\nINTEGER(I4B) :: order\nrefelem = ReferenceHexahedron(nsd=3_I4B, xij=RefCoord_Hexahedron("UNIT"))\norder = 2_I4B\nCALL initiate(obj=obj, &\n  & refelem=refelem, &\n  & order=order,  &\n  & quadratureType=GaussLegendre)\nCALL display(mdencode(obj) , "")\nEND PROGRAM main\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x1"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.78868"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x2"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.78868"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x3"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"}),(0,r.jsx)(n.td,{children:"0.21132"}),(0,r.jsx)(n.td,{children:"0.78868"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"w"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"}),(0,r.jsx)(n.td,{children:"0.125"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"anisotropic-gauss-legendre-points-on-biunit-hexahedron",children:"Anisotropic Gauss-Legendre points on biunit Hexahedron"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nIMPLICIT NONE\nTYPE(QuadraturePoint_) :: obj\nTYPE(ReferenceHexahedron_) :: refelem\nINTEGER(I4B) :: order\nrefelem = ReferenceHexahedron(nsd=3_I4B)\nCALL initiate(obj=obj, &\n  & refelem=refelem, &\n  & p=4,  &\n  & q=3,  &\n  & r=2,  &\n  & quadratureType1=GaussLegendre, &\n  & quadratureType2=GaussLegendre, &\n  & quadratureType3=GaussLegendre &\n  & )\nCALL display(mdencode(obj) , "")\nEND PROGRAM main\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"You can specify different order of accuracy (p,q,r) and different types of quadrature points (by using quadratureType1, quadratureType2, quadratureType3) in x, y, and z directions."})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x1"}),(0,r.jsx)(n.td,{children:"-0.7746"}),(0,r.jsx)(n.td,{children:"-0.7746"}),(0,r.jsx)(n.td,{children:"-0.7746"}),(0,r.jsx)(n.td,{children:"-0.7746"}),(0,r.jsx)(n.td,{children:"3.64292E-16"}),(0,r.jsx)(n.td,{children:"3.46945E-16"}),(0,r.jsx)(n.td,{children:"3.46945E-16"}),(0,r.jsx)(n.td,{children:"3.88578E-16"}),(0,r.jsx)(n.td,{children:"0.7746"}),(0,r.jsx)(n.td,{children:"0.7746"}),(0,r.jsx)(n.td,{children:"0.7746"}),(0,r.jsx)(n.td,{children:"0.7746"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x2"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x3"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"}),(0,r.jsx)(n.td,{children:"-0.57735"}),(0,r.jsx)(n.td,{children:"0.57735"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"w"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.88889"}),(0,r.jsx)(n.td,{children:"0.88889"}),(0,r.jsx)(n.td,{children:"0.88889"}),(0,r.jsx)(n.td,{children:"0.88889"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"}),(0,r.jsx)(n.td,{children:"0.55556"})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>h,a:()=>i});var r=d(67294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);