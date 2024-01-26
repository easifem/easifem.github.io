"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[10737],{20895:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var o=t(85893),i=t(11151),l=t(21257);t(67294);const n=[{title:"Gmsh_Class",comment:"Interface to Gmsh library",category:"Mesh"},{title:"CommandLine_Method",comment:"Fortran library for making comand line applications.",category:"CLI"},{title:"ExceptionHandling_Class",comment:"Fortran library for error handling",category:"Utility"},{title:"FPL_Method",comment:"Fortran parameter list",category:"FEM"},{title:"Files",comment:"Collection of modules related to File IO.",category:"IO"},{title:"ElementFactory",comment:"Finite element factory",category:"FEM"},{title:"IntList_Class",comment:"Linked list of integers",category:"Container"},{title:"RealList_Class",comment:"Linked list of reals",category:"Container"},{title:"StringList_Class",comment:"Linked list of strings",category:"Container"},{title:"ElementList_Class",comment:"Linked list of finite elements",category:"FEM"},{title:"ElementPointerVector_Class",comment:"Dynamic vector of element pointers",category:"FEM"},{title:"Mesh_Class",comment:"Finite element mesh class",category:"FEM"},{title:"MeshPointerVector_Class",comment:"Dynamic vector of mesh pointers",category:"FEM"},{title:"Domain_Class",comment:"Domain class",category:"FEM"},{title:"DomainUtility",comment:"A module for additional methods on Domain.",category:"FEM"},{title:"DomainConnectivity_Class",comment:"Domain connectivity class",category:"FEM"},{title:"MeshSelection_Class",comment:"A class for selecting the region of domain.",category:"FEM"},{title:"MSHFile_Class",comment:"Class for Gmsh`s msh file",category:"FEM"},{title:"AbstractVector_Class",comment:"Abstract class for vectors.",category:"FEM"},{title:"Vector_Class",comment:"Concrete class for vectors.",category:"FEM"},{title:"Field",comment:"Collection of modules which defines classes for finite element fields.",category:"FEM"},{title:"FieldFactory",comment:"Factory for fields",category:"FEM"},{title:"AbstractLinSolver_Class",comment:"Abstract class for linear solver",category:"FEM"},{title:"LinSolver_Class",comment:"Native linear solver class.",category:"FEM"},{title:"LinSolver_Factory",comment:"Factory for linear solvers.",category:"FEM"},{title:"AbstractBC_Class",comment:"Abstract class for boundary conditions",category:"FEM"},{title:"DirichletBC_Class",comment:"Class for Dirichlet boundary conditions.",category:"FEM"},{title:"NeumannBC_Class",comment:"Class for Neumann boundary conditions.",category:"FEM"},{title:"NitscheBC_Class",comment:"Class for Nitsche boundary conditions.",category:"FEM"},{title:"PolynomialFactory",comment:"Factory of polynomials",category:"FEM"},{title:"UserFunction_Class",comment:"User function class",category:"FEM"},{title:"RefElementFactory",comment:"Factory of reference elements",category:"FEM"},{title:"FiniteElementFactory",comment:"Factory of finite elements.",category:"FEM"},{title:"Tree3R_Class",comment:"Tree data structure for 3 term recurrence relation.",category:"Math"},{title:"Plot_Method",comment:"Collection of methods for plotting.",category:"FEM"}],a=[{Header:"Module",accessor:"title",className:"pester-data-table left"},{Header:"Comment",accessor:"comment",className:"pester-data-table left"},{Header:"Category",accessor:"category",className:"pester-data-table"}],r={sidebar_position:6},c="easifemClasses",d={id:"easifemClasses",title:"easifemClasses",description:"The easifemClasses (henceforth, the Classes) library, forms the second level of EASIFEM library.",source:"@site/docs/about/easifemClasses.md",sourceDirName:".",slug:"/easifemClasses",permalink:"/about/easifemClasses",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/about/easifemClasses.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"easifemBase",permalink:"/about/easifemBase"},next:{title:"easifemKernels",permalink:"/about/easifemKernels"}},m={},h=[{value:"Use association",id:"use-association",level:2},{value:"Key features",id:"key-features",level:2},{value:"Structure",id:"structure",level:2},{value:"Modules",id:"modules",level:2}];function u(e){const s={admonition:"admonition",code:"code",h1:"h1",h2:"h2",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"easifemclasses",children:"easifemClasses"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"easifemClasses"})," (henceforth, the Classes) library, forms the second level of EASIFEM library.\nThis library contains many useful high-level objects, which are important for implementing FEM.\nThe main programming paradigm of Classes library is object-oriented programming."]}),"\n",(0,o.jsx)(s.h2,{id:"use-association",children:"Use association"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-fortran",children:"USE easifemClasses\n"})}),"\n",(0,o.jsx)(s.h2,{id:"key-features",children:"Key features"}),"\n",(0,o.jsx)(s.h2,{id:"structure",children:"Structure"}),"\n",(0,o.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,o.jsxs)(s.li,{className:"task-list-item",children:[(0,o.jsx)(s.input,{type:"checkbox",disabled:!0})," ","TODO add key-features to ",(0,o.jsx)(s.code,{children:" easifemClasses"})]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Similar to the Base library, the ",(0,o.jsx)(s.code,{children:"Classes"})," library has two directories in the ",(0,o.jsx)(s.code,{children:"src"})," directory:"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"modules"}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.code,{children:"submodules"})}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"modules"})," directory mainly contains following items:"]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Type definition including methods"}),"\n",(0,o.jsx)(s.li,{children:"Header and interface of methods"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["The \ud83d\udcc1",(0,o.jsx)(s.code,{children:"submodules"})," directory contains the implementation of the methods that are defined in the ",(0,o.jsx)(s.code,{children:"modules"})," directory."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["In addition, each class has its own subdirectory in the ",(0,o.jsx)(s.code,{children:"modules"})," and ",(0,o.jsx)(s.code,{children:"submodules"})," directory."]}),"\n",(0,o.jsxs)(s.li,{children:["For example, the directory of ",(0,o.jsx)(s.code,{children:"Domain_"})," class is ",(0,o.jsx)(s.code,{children:"Domain"}),", the directory of ",(0,o.jsx)(s.code,{children:"Mesh_"})," class is ",(0,o.jsx)(s.code,{children:"Mesh"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["In this way, ",(0,o.jsx)(s.code,{children:"modules/Domain"})," will define the ",(0,o.jsx)(s.code,{children:"Domain_"})," class and interface of methods, whereas ",(0,o.jsx)(s.code,{children:"submodules/Domain"})," will include the submodules that implementes the methods defined inside modules."]}),"\n",(0,o.jsxs)(s.li,{children:["The name of the module which defines ",(0,o.jsx)(s.code,{children:"Domain_"})," class is ",(0,o.jsx)(s.code,{children:"Domain_Classs"}),", and it is included in the file called ",(0,o.jsx)(s.code,{children:"Domain_Class.F90"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["The submodule, which defines methods (for example, constructor methods) will be included in ",(0,o.jsx)(s.code,{children:"Domain_Class@ConstructorMethods.F90"}),", ",(0,o.jsx)(s.code,{children:"Domain_Class@IOMethods"}),", etc."]}),"\n"]}),"\n",(0,o.jsxs)(s.admonition,{type:"info",children:[(0,o.jsxs)(s.p,{children:["If you want to implement a class called ",(0,o.jsx)(s.code,{children:"XXX_"}),", then perform following task:"]}),(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Make a subdirectory ",(0,o.jsx)(s.code,{children:"XXX"})," in ",(0,o.jsx)(s.code,{children:"src/modules"})," and ",(0,o.jsx)(s.code,{children:"src/submodules"})]}),"\n",(0,o.jsxs)(s.li,{children:["In both ",(0,o.jsx)(s.code,{children:"XXX"})," make a subdirectory ",(0,o.jsx)(s.code,{children:"XXX/src"})]}),"\n",(0,o.jsxs)(s.li,{children:["Create a file ",(0,o.jsx)(s.code,{children:"modules/XXX/src/XXX_Class.F90"})," and define a module called ",(0,o.jsx)(s.code,{children:"XXX_Class"}),":"]}),"\n",(0,o.jsxs)(s.li,{children:["Create submodules  in ",(0,o.jsx)(s.code,{children:"submodule/XXX/src/XXX_Class@CategoryofMethods.F90"})," and implement the methods."]}),"\n"]}),(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-fortran",children:"MODULE XXX_Class\n!! Use modules\nPRIVATE\n!!  Define class here\nEND MODULE XXX_Class \n"})})]}),"\n",(0,o.jsx)(s.h2,{id:"modules",children:"Modules"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.code,{children:"easifemClasses"})," currently contains following modules:"]}),"\n","\n","\n",(0,o.jsx)(l.J,{columns:a,data:n})]})}function f(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},21257:(e,s,t)=>{t.d(s,{J:()=>n});t(67294);var o=t(79521),i=t(85893);const l=()=>({}),n=e=>{let{columns:s,data:t,getHeaderProps:n=l,getColumnProps:a=l}=e;const{getTableProps:r,getTableBodyProps:c,headerGroups:d,rows:m,prepareRow:h}=(0,o.useTable)({columns:s,data:t},o.useSortBy);return(0,i.jsxs)("table",{...r(),children:[(0,i.jsx)("thead",{children:d.map((e=>(0,i.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>(0,i.jsxs)("th",{...e.getHeaderProps([{className:e.className},n(e),a(e),e.getSortByToggleProps()]),children:[e.render("Header"),(0,i.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \u25bc":" \u25b2":""})]})))})))}),(0,i.jsx)("tbody",{...c(),children:m.map(((e,s)=>(h(e),(0,i.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>(0,i.jsx)("td",{...e.getCellProps([{className:e.column.className,style:e.column.style},a(e.column)]),children:e.render("Cell")})))}))))})]})}}}]);