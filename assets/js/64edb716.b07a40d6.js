"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[20475],{52878:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>o});var t=i(85893),a=i(11151);const n={sidebar_position:2},d="Structure",c={id:"QuadraturePoint/QuadraturePoint_",title:"Structure",description:"The structure of this data type is given by:",source:"@site/docs/docs-api/QuadraturePoint/QuadraturePoint_.md",sourceDirName:"QuadraturePoint",slug:"/QuadraturePoint/QuadraturePoint_",permalink:"/docs-api/QuadraturePoint/QuadraturePoint_",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/QuadraturePoint/QuadraturePoint_.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"QuadraturePoint",permalink:"/docs-api/QuadraturePoint/"},next:{title:"Deallocate",permalink:"/docs-api/QuadraturePoint/Deallocate"}},l={},o=[{value:"QuadratureType",id:"quadraturetype",level:2},{value:"Legendre polynomial based",id:"legendre-polynomial-based",level:3},{value:"Chebyshev polynomial based",id:"chebyshev-polynomial-based",level:3},{value:"Jacobi polynomial based",id:"jacobi-polynomial-based",level:3},{value:"Ultraspherical polynomial based",id:"ultraspherical-polynomial-based",level:3}];function r(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"structure",children:"Structure"}),"\n",(0,t.jsx)(s.p,{children:"The structure of this data type is given by:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-fortran",children:"TYPE :: QuadraturePoint_\n  REAL(DFP), ALLOCATABLE :: Points( :, : )\n  INTEGER( I4B ) :: tXi = 0\nEND TYPE QuadraturePoint_\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.mdxAdmonitionTitle,{children:(0,t.jsx)(s.code,{children:"Points"})})}),"\n",(0,t.jsxs)(s.p,{children:["The number of rows in ",(0,t.jsx)(s.code,{children:"Points"})," is ",(0,t.jsx)(s.code,{children:"tXi"}),"+1, and the number of columns in ",(0,t.jsx)(s.code,{children:"Points"})," is equal to the number of quadrature points."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Points(1:tXi, :)"})," denotes the quadrature points."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Points(tXi+1, :)"})," denotes the weights."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.mdxAdmonitionTitle,{children:(0,t.jsx)(s.code,{children:"tXi"})})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["In 1D ",(0,t.jsx)(s.code,{children:"tXi"})," is 1"]}),"\n",(0,t.jsxs)(s.li,{children:["In 2D ",(0,t.jsx)(s.code,{children:"tXi"})," is 2"]}),"\n",(0,t.jsxs)(s.li,{children:["In 3D ",(0,t.jsx)(s.code,{children:"tXi"})," is 3"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"quadraturetype",children:"QuadratureType"}),"\n",(0,t.jsx)(s.p,{children:"Currently, easifem provides following quadrature points:"}),"\n",(0,t.jsx)(s.h3,{id:"legendre-polynomial-based",children:"Legendre polynomial based"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussLegendre"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussLegendreLobatto"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussLegendreRadau"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussLegendreRadauLeft"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussLegendreRadauRight"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"chebyshev-polynomial-based",children:"Chebyshev polynomial based"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussChebyshev"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussChebyshevLobatto"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussChebyshevRadau"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussChebyshevRadauLeft"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussChebyshevRadauRight"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"jacobi-polynomial-based",children:"Jacobi polynomial based"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussJacobi"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussJacobiLobatto"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussJacobiRadau"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussJacobiRadauLeft"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussJacobiRadauRight"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"ultraspherical-polynomial-based",children:"Ultraspherical polynomial based"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussUltraSpherical"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussUltraSphericalLobatto"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussUltraSphericalRadau"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussUltraSphericalRadauLeft"})]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,t.jsx)(s.code,{children:"GaussUltraSphericalRadauRight"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>d});var t=i(67294);const a={},n=t.createContext(a);function d(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);