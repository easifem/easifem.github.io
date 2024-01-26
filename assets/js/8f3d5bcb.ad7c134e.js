"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[78001],{26484:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var t=i(85893),n=i(11151),o=i(52991);const a={sidebar_position:1,date:new Date("2023-08-05T00:00:00.000Z"),update:new Date("2023-08-05T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:["Gmsh"],category:["Gmsh","Mesh","Domain"],tags:["gmsh","mesh","domain","todo"]},r="GmshAPI",d={id:"GmshAPI/GmshAPI",title:"GmshAPI",description:"Introduction",source:"@site/docs/docs-api/GmshAPI/GmshAPI.md",sourceDirName:"GmshAPI",slug:"/GmshAPI/",permalink:"/docs-api/GmshAPI/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/GmshAPI/GmshAPI.md",tags:[{label:"gmsh",permalink:"/docs-api/tags/gmsh"},{label:"mesh",permalink:"/docs-api/tags/mesh"},{label:"domain",permalink:"/docs-api/tags/domain"},{label:"todo",permalink:"/docs-api/tags/todo"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-08-05T00:00:00.000Z",update:"2023-08-05T00:00:00.000Z",status:"stable",docs:"done",extpkgs:["Gmsh"],category:["Gmsh","Mesh","Domain"],tags:["gmsh","mesh","domain","todo"]},sidebar:"tutorialSidebar",previous:{title:"GlobalData",permalink:"/docs-api/GlobalData/"},next:{title:"GmshFLTK",permalink:"/docs-api/GmshAPI/GmshFLTK_"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",img:"img",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"gmshapi",children:"GmshAPI"}),"\n",(0,t.jsx)(s.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(s.p,{children:"The Gmsh application programming interface (API) allows to integrate the Gmsh library in external applications written in Fortran. By design, the Gmsh API is purely functional, and only uses elementary types from the target languages. See the tutorials/fortran directories from the Gmsh tutorial for examples. For other API examples, see the examples/api directory."}),"\n",(0,t.jsxs)(s.p,{children:["The top level class is [[Gmsh_]] class, which allows us to interact with the ",(0,t.jsx)(s.code,{children:"libgmsh"})," and GUI of gmsh. The structure of ",(0,t.jsx)(s.code,{children:"Gmsh_"})," class is given below."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:i(52691).Z+"",width:"721",height:"241"})}),"\n",(0,t.jsx)(s.p,{children:"The structure of the API reflects the underlying Gmsh data model (see also Source code structure):"}),"\n",(0,t.jsx)(s.p,{children:"There are two main data containers:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"models"})," which hold the geometrical and the mesh data"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"views"})," which hold post-processing data."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["These are manipulated by the API functions in the top-level namespaces ",(0,t.jsx)(s.code,{children:"gmsh/model"})," and ",(0,t.jsx)(s.code,{children:"gmsh/view"}),", respectively."]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/option"})," handles all options"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/plugin"})," handles extensions to core Gmsh functionality"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/graphics"})," handles drawing"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/fltk"})," handles the graphical user interface"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/parser"})," handles the Gmsh parser"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/onelab"})," handles ONELAB parameters and communications with external codes"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"gmsh/logger"})," handles information logging."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Geometrical data is made of model entities:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"points"}),", entities of dimension 0"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"curves"}),", entities of dimension 1"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"surfaces"})," entities of dimension 2"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"volumes"})," entities of dimension 3."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"Model"})," entities are stored using a boundary representation: a volume is bounded by a set of surfaces, a surface is bounded by a series of curves, and a curve is bounded by two end points."]}),"\n",(0,t.jsx)(s.p,{children:"Volumes and surfaces can also store embedded entities of lower dimension, to force a subsequent mesh to be conformal to internal features like a point in the middle of a surface."}),"\n",(0,t.jsxs)(s.p,{children:["Model entities are identified by a pair of integers: their dimension ",(0,t.jsx)(s.code,{children:"dim"})," (0, 1, 2 or 3) and their ",(0,t.jsx)(s.code,{children:"tag"}),", a strictly positive identification number."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Physical groups"})," are collections of model entities and are also identified by their dimension and by a tag."]}),"\n",(0,t.jsx)(s.p,{children:"Operations which do not directly reference a model are performed on the current model."}),"\n",(0,t.jsx)(s.p,{children:"Model entities can be either CAD entities (from the built-in geo kernel or from the OpenCASCADE occ kernel) or discrete entities (defined by a mesh)."}),"\n",(0,t.jsxs)(s.p,{children:["Operations on CAD entities are performed directly within their respective CAD kernels (i.e. using functions from the ",(0,t.jsx)(s.code,{children:"gmsh/model/geo"})," or ",(0,t.jsx)(s.code,{children:"gmsh/model/occ"})," namespaces, respectively), as Gmsh does not translate across CAD formats but rather directly accesses the native representation."]}),"\n",(0,t.jsxs)(s.p,{children:["CAD entities must be synchronized with the model in order to be meshed, or, more generally, for functions outside of ",(0,t.jsx)(s.code,{children:"gmsh/model/geo"})," or ",(0,t.jsx)(s.code,{children:"gmsh/model/occ"})," to manipulate them."]}),"\n",(0,t.jsx)(s.p,{children:"1D and 2D meshing algorithms use the parametrization of the underlying geometrical curve or surface to generate the mesh."}),"\n",(0,t.jsx)(s.p,{children:"Discrete entities can be remeshed provided that a parametrization is explicitly recomputed for them."}),"\n",(0,t.jsx)(s.p,{children:"Mesh data is made of elements (points, lines, triangles, quadrangles, tetrahedra, hexahedra, prisms, pyramids, ...), defined by an ordered list of their nodes."}),"\n",(0,t.jsx)(s.p,{children:"Elements and nodes are identified by tags (strictly positive identification numbers), and are stored (classified) in the model entity they discretize."}),"\n",(0,t.jsx)(s.p,{children:"Once meshed, a model entity of dimension 0 (a geometrical point) will thus contain a mesh element of type point (MSH type 15: cf. MSH file format), as well as a mesh node."}),"\n",(0,t.jsx)(s.p,{children:"A model curve will contain line elements (e.g. of MSH type 1 or 8 for first order or second order meshes, respectively) as well as its interior nodes, while its boundary nodes will be stored in the bounding model points."}),"\n",(0,t.jsx)(s.p,{children:"A model surface will contain triangular and/or quadrangular elements and all the nodes not classified on its boundary or on its embedded entities (curves and points)."}),"\n",(0,t.jsxs)(s.p,{children:["A model volume will contain tetrahedra, hexahedra, etc. and all the nodes not classified on its boundary or on its embedded entities (surfaces, curves and points). This data model allows to easily and efficiently handle the creation, modification and destruction of conformal meshes. All the mesh-related functions are provided in the ",(0,t.jsx)(s.code,{children:"gmsh/model/mesh"})," namespace."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Post-processing"})," data is made of views. Each view is identified by a tag, and can also be accessed by its index (which can change when views are sorted, added or deleted)."]}),"\n",(0,t.jsx)(s.p,{children:"A view stores both display options and data, unless the view is an alias of another view (in which case it only stores display options, and the data points to a reference view)."}),"\n",(0,t.jsx)(s.p,{children:"View data can contain several steps (e.g. to store time series) and can be either linked to one or more models (mesh-based data, as stored in MSH files: cf. MSH file format) or independent from any model (list-based data, as stored in parsed POS files: cf. Post-processing scripting commands). Various plugins exist to modify and create views."}),"\n",(0,t.jsx)(s.p,{children:"Status"}),"\n",(0,t.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","[[Gmsh_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","[[GmshModel_]], not all methods are tested"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","[[GmshModelGeo_]], not all methods are tested"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshModelGeoMesh_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshModelOcc_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshModelOccMesh_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshModelMesh_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshView_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshOption_]]"]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","[[GmshFLTK_]], not all methods are tested."]}),"\n",(0,t.jsxs)(s.li,{className:"task-list-item",children:[(0,t.jsx)(s.input,{type:"checkbox",disabled:!0})," ","[[GmshGraphics_]]"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n","\n","\n",(0,t.jsx)(o.Z,{})]})}function m(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},52991:(e,s,i)=>{i.d(s,{Z:()=>j});i(67294);var t=i(86010),n=i(53438),o=i(39960),a=i(13919),r=i(95999),d=i(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var c=i(85893);function h(e){let{href:s,children:i}=e;return(0,c.jsx)(o.Z,{href:s,className:(0,t.Z)("card padding--lg",l.cardContainer),children:i})}function m(e){let{href:s,icon:i,title:n,description:o}=e;return(0,c.jsxs)(h,{href:s,children:[(0,c.jsxs)(d.Z,{as:"h2",className:(0,t.Z)("text--truncate",l.cardTitle),title:n,children:[i," ",n]}),o&&(0,c.jsx)("p",{className:(0,t.Z)("text--truncate",l.cardDescription),title:o,children:o})]})}function p(e){let{item:s}=e;const i=(0,n.LM)(s);return i?(0,c.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,r.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function u(e){let{item:s}=e;const i=(0,a.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,n.xz)(s.docId??void 0);return(0,c.jsx)(m,{href:s.href,icon:i,title:s.label,description:s.description??t?.description})}function x(e){let{item:s}=e;switch(s.type){case"link":return(0,c.jsx)(u,{item:s});case"category":return(0,c.jsx)(p,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function f(e){let{className:s}=e;const i=(0,n.jA)();return(0,c.jsx)(j,{items:i.items,className:s})}function j(e){const{items:s,className:i}=e;if(!s)return(0,c.jsx)(f,{...e});const o=(0,n.MN)(s);return(0,c.jsx)("section",{className:(0,t.Z)("row",i),children:o.map(((e,s)=>(0,c.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,c.jsx)(x,{item:e})},s)))})}},52691:(e,s,i)=>{i.d(s,{Z:()=>t});const t=i.p+"assets/images/Gmsh_Class-25b9200daa2e429bef7f06fb0ba7e4ea.svg"},11151:(e,s,i)=>{i.d(s,{Z:()=>r,a:()=>a});var t=i(67294);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);