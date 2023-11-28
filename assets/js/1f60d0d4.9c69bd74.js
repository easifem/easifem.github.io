"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[96539],{88288:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=i(85893),t=i(11151),a=i(39960);const l={id:"index",aliases:["EASIFEM"],tags:["easifemBase","easifemClasses"],sidebar_position:1},r="EASIFEM",o={id:"index",title:"EASIFEM",description:"Expandable And Scalable Infrastructure for Finite Element Methods, EASIFEM, is Modern FORTRAN framework for solving partial differential equations (PDEs) using finite element methods. EASIFEM \u201ceases\u201d the efforts to develop scientific programs in FORTRAN. It is meant for researchers, scientists, and engineers using FORTRAN to implement numerical methods for solving the initial-boundary-value problems (IBVPs). EASIFEM is equipped with both low- and high-level datatype and classes for implementing finite element methods.",source:"@site/docs/about/index.md",sourceDirName:".",slug:"/",permalink:"/about/",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/about/index.md",tags:[{label:"easifemBase",permalink:"/about/tags/easifem-base"},{label:"easifemClasses",permalink:"/about/tags/easifem-classes"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{id:"index",aliases:["EASIFEM"],tags:["easifemBase","easifemClasses"],sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"System requirements",permalink:"/about/SystemRequirements"}},d={},c=[{value:"Structure of EASIFEM",id:"structure-of-easifem",level:2},{value:"Base",id:"base",level:2},{value:"Classes",id:"classes",level:2},{value:"Kernels",id:"kernels",level:2},{value:"Programming paradigm",id:"programming-paradigm",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"External packages",id:"external-packages",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"easifem",children:"EASIFEM"}),"\n",(0,n.jsxs)(s.p,{children:["Expandable And Scalable Infrastructure for Finite Element Methods, EASIFEM, is ",(0,n.jsx)(s.a,{href:"https://fortran-lang.org",children:"Modern FORTRAN"})," framework for solving partial differential equations (PDEs) using finite element methods. EASIFEM \u201ceases\u201d the efforts to develop scientific programs in FORTRAN. It is meant for researchers, scientists, and engineers using FORTRAN to implement numerical methods for solving the initial-boundary-value problems (IBVPs). EASIFEM is equipped with both low- and high-level datatype and classes for implementing finite element methods."]}),"\n",(0,n.jsx)(s.p,{children:"Following are some features which may interest you."}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Building, installing, updating, and linking EASIFEM is painless."}),"\n",(0,n.jsx)(s.li,{children:"EASIFEM provides much helpful functionality, such as Mesh-generation, Domain creation, a massive list of shape functions, 1D/2D/3D elements, 1D/2D/3D plotting, file input-output, constitutive material laws, linear solvers, sparse-matrices, full support for performing linear algebra analysis, Fast Fourier Transform, among many other features."}),"\n",(0,n.jsx)(s.li,{children:"One of the strengths of EASIFEM is its comprehensive documentation and command line interface."}),"\n",(0,n.jsx)(s.li,{children:"EASIFEM comes with snippets and automation scripts for vs-code and vim users."}),"\n",(0,n.jsx)(s.li,{children:"Expanding EASIFEM as per your requirement; you can link a new library with EASIFEM or link EASIFEM with your own software library."}),"\n"]}),"\n",(0,n.jsx)(s.admonition,{title:"The Future of EASIFEM",type:"success",children:(0,n.jsx)(s.p,{children:"Currently, EASIFEM focuses on finite element methods. Eventually, the library will have high-level objects for implementing multiscale finite element methods, stochastic finite element methods, uncertainty quantification, mesh-free methods, finite volume methods, material point methods, and particle methods (such as SPH and DEM)."})}),"\n",(0,n.jsx)(s.h2,{id:"structure-of-easifem",children:"Structure of EASIFEM"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:i(35570).Z+"",width:"1920",height:"900"})}),"\n",(0,n.jsx)(s.p,{children:"EASIFEM consists following three hierarchical components:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Base"})," ",(0,n.jsx)(s.code,{children:"libeasifemBase"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Classes"})," ",(0,n.jsx)(s.code,{children:"libeasifemClasses"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Kernels"})," ",(0,n.jsx)(s.code,{children:"libeasifemKernels"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"base",children:"Base"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"easifemBase"})," (henceforth read as Base) contains a lot of valuable routines and derived types. In Base, we do not use object-oriented programming concepts and mainly use ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Multiple_dispatch",children:"multiple dispatch approach"}),". This approach improves the flexibility and speed of ",(0,n.jsx)(s.code,{children:"easifemBase"}),". All user-defined datatype are declared in the ",(0,n.jsx)(s.code,{children:"BaseType"})," module, and all methods are exposed through ",(0,n.jsx)(s.code,{children:"BaseMethods"})," modules."]}),"\n",(0,n.jsx)(s.admonition,{title:"Base",type:"info",children:(0,n.jsxs)(s.p,{children:["Currently, ",(0,n.jsx)(s.code,{children:"easifemBase"})," has interface with ",(0,n.jsx)(s.code,{children:"BLAS95"}),", ",(0,n.jsx)(s.code,{children:"Lapack95"}),", ",(0,n.jsx)(s.code,{children:"Sparsekit"}),", ",(0,n.jsx)(s.code,{children:"Metis"}),", ",(0,n.jsx)(s.code,{children:"PlPlot"}),", ",(0,n.jsx)(s.code,{children:"SuperLU"}),", ",(0,n.jsx)(s.code,{children:"ARPACK"}),", etc."]})}),"\n","\n","\n",(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row row--no-gutters",children:[(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started/easifemBase",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifemBase"})}),(0,n.jsx)("div",{className:"col col--2"}),(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifem"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"classes",children:"Classes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"easifemClasses"})," (hereafter, read as the Classes) defines high-level derived types such as domain, mesh, fields, linear solvers, etc. Classes are primarily based on ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Object-oriented_programming",children:"object-oriented programming"}),". Most of the functionality of Classes comes from the Base. In other words, most of the computation is deployed to the Base library. This approach improves flexibility at the cost of reducing some speed."]}),"\n",(0,n.jsxs)(s.admonition,{type:"info",children:[(0,n.jsx)(s.mdxAdmonitionTitle,{children:(0,n.jsx)(s.code,{children:"Classes"})}),(0,n.jsxs)(s.p,{children:["Currently, ",(0,n.jsx)(s.code,{children:"easifemBase"})," has interface with ",(0,n.jsx)(s.code,{children:"HDF5"}),", ",(0,n.jsx)(s.code,{children:"Gmsh"}),", ",(0,n.jsx)(s.code,{children:"PlPlot"}),", ",(0,n.jsx)(s.code,{children:"GTK4"}),", ",(0,n.jsx)(s.code,{children:"PETsc"}),", ",(0,n.jsx)(s.code,{children:"Matplotlib"}),", ",(0,n.jsx)(s.code,{children:"Python"}),", ",(0,n.jsx)(s.code,{children:"Lua"}),", etc. In the future, we will add interfaces to many other useful FORTRAN and C libraries."]})]}),"\n",(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row row--no-gutters",children:[(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started/easifemClasses",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifemClasses"})}),(0,n.jsx)("div",{className:"col col--2"}),(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifem"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"kernels",children:"Kernels"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"easifemKernels"})," (henceforth, read as Kernels) contains physics simulators. For example, we have:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Abstract Kernels"}),"\n",(0,n.jsx)(s.li,{children:"Elasticity analysis of soils and solids"}),"\n",(0,n.jsx)(s.li,{children:"Elastodynamics analysis of soils and solids"}),"\n",(0,n.jsx)(s.li,{children:"Elasto-plastic analysis of soils and solids"}),"\n",(0,n.jsx)(s.li,{children:"Large deformation with Hyper Elastic material behavior"}),"\n",(0,n.jsx)(s.li,{children:"Heat conduction, convection, radiation in soils and solids"}),"\n",(0,n.jsx)(s.li,{children:"Darcy-flow in fully saturated and variably saturated soils"}),"\n",(0,n.jsx)(s.li,{children:"Darcy-Brinkman flow in saturated soils"}),"\n",(0,n.jsx)(s.li,{children:"Solver for convection-diffusion-reaction in single variable"}),"\n",(0,n.jsx)(s.li,{children:"Stokes flow"}),"\n",(0,n.jsx)(s.li,{children:"Incompressible and Isothermal Navier-Stokes Flow"}),"\n",(0,n.jsx)(s.li,{children:"Space-Time Finite element methods"}),"\n"]}),"\n",(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsxs)("div",{className:"row row--no-gutters",children:[(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started/easifemClasses",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifemClasses"})}),(0,n.jsx)("div",{className:"col col--2"}),(0,n.jsx)("div",{className:"col col--5",children:(0,n.jsx)(a.Z,{to:"/guides/getting-started",className:"button button--lg button--outline button--block button--primary",children:"Get Started with easifem"})})]})}),"\n",(0,n.jsx)(s.h2,{id:"programming-paradigm",children:"Programming paradigm"}),"\n",(0,n.jsx)(s.p,{children:"EASIFEM manly follows two types of programming paradigm:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Object-oriented-programming (OOP)"}),"\n",(0,n.jsx)(s.li,{children:"Multi-dispatch programming."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,n.jsxs)(s.p,{children:["Before installing the EASIFEM, please make sure your system is up-to-date and have requirements mentioned ",(0,n.jsx)(s.a,{href:"/about/SystemRequirements",children:"here."})]}),"\n",(0,n.jsx)(s.h2,{id:"external-packages",children:"External packages"}),"\n",(0,n.jsxs)(s.p,{children:["Before installing the EASIFEM, make sure to install the external packages on your system by following the details given ",(0,n.jsx)(s.a,{href:"/about/SystemRequirements",children:"here."})]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},35570:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/what-is-easifem-494f1628346e1270c5eb869117294426.svg"},11151:(e,s,i)=>{i.d(s,{Z:()=>r,a:()=>l});var n=i(67294);const t={},a=n.createContext(t);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);