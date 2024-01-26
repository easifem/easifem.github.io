"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[56209],{91772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var s=n(85893),i=n(11151),r=n(52991);const c={sidebar_position:1,date:new Date("2023-02-12T00:00:00.000Z"),update:new Date("2023-02-12T00:00:00.000Z"),status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition"],tags:["AbstractBC","BoundaryCondition","easifemClasses"]},o="AbstractBC",a={id:"AbstractBC/index",title:"AbstractBC",description:"AbstractBC class handles the boundary condition in finite element methods. Currently, it has following subclasses.",source:"@site/docs/docs-api/AbstractBC/index.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/",permalink:"/docs-api/AbstractBC/",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/index.md",tags:[{label:"AbstractBC",permalink:"/docs-api/tags/abstract-bc"},{label:"BoundaryCondition",permalink:"/docs-api/tags/boundary-condition"},{label:"easifemClasses",permalink:"/docs-api/tags/easifem-classes"}],version:"current",lastUpdatedAt:1706191432,formattedLastUpdatedAt:"Jan 25, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,date:"2023-02-12T00:00:00.000Z",update:"2023-02-12T00:00:00.000Z",status:"stable",docs:"done",extpkgs:"none",category:["BoundaryCondition"],tags:["AbstractBC","BoundaryCondition","easifemClasses"]},sidebar:"tutorialSidebar",previous:{title:"SymSmallestEigenVal",permalink:"/docs-api/ARPACK/SymSmallestEigenval"},next:{title:"Structure",permalink:"/docs-api/AbstractBC/AbstractBC_"}},l={},d=[{value:"Construction methods",id:"construction-methods",level:2},{value:"Construction by paramters",id:"construction-by-paramters",level:3},{value:"Construction by <code>HDF5File</code>",id:"construction-by-hdf5file",level:3},{value:"Construction by <code>Toml</code> file",id:"construction-by-toml-file",level:3},{value:"All methods",id:"all-methods",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"abstractbc",children:"AbstractBC"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"AbstractBC"})," class handles the boundary condition in finite element methods. Currently, it has following subclasses."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/DirichletBC",children:"DirichletBC"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/NeumannBC",children:"NeumannBC"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs-api/NitscheBC",children:"NitscheBC"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"construction-methods",children:"Construction methods"}),"\n",(0,s.jsxs)(t.p,{children:["There are three methods for constructing an instance of ",(0,s.jsx)(t.code,{children:"AbstractBC"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Construction by ",(0,s.jsx)(t.code,{children:"Parameters"})]}),"\n",(0,s.jsxs)(t.li,{children:["Construction by importing data from ",(0,s.jsx)(t.code,{children:"HDF5File"})]}),"\n",(0,s.jsxs)(t.li,{children:["Construction by importing data from ",(0,s.jsx)(t.code,{children:"Toml"})," file."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"construction-by-paramters",children:"Construction by paramters"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The first step is to set the necessary Parameters by calling the method called ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBC/SetAbstractBCParam",children:"SetAbstractBCParam"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the second step, we define a boundary. To this end, we will use the ",(0,s.jsx)(t.a,{href:"/docs-api/MeshSelection",children:"MeshSelection"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the third step, we call ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBC/Initiate",children:"Initiate"})," method. To initiate an instance of ",(0,s.jsx)(t.code,{children:"AbstractBC"}),", we need to pass the boundary, paramters, and domain."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["In the fourth step, we call ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBC/Set",children:"Set"})," method to set the value of boundary condition."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h3,{id:"construction-by-hdf5file",children:["Construction by ",(0,s.jsx)(t.code,{children:"HDF5File"})]}),"\n",(0,s.jsxs)(t.p,{children:["We can also construct an instance of ",(0,s.jsx)(t.code,{children:"AbstractBC"})," by importing data from ",(0,s.jsx)(t.code,{children:"HDF5File"}),". See, ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBC/Import",children:"Import"})," method."]}),"\n",(0,s.jsxs)(t.h3,{id:"construction-by-toml-file",children:["Construction by ",(0,s.jsx)(t.code,{children:"Toml"})," file"]}),"\n",(0,s.jsxs)(t.p,{children:["We can also construct an instance of ",(0,s.jsx)(t.code,{children:"AbstractBC"})," by importing data from ",(0,s.jsx)(t.code,{children:"Toml"})," file. See, ",(0,s.jsx)(t.a,{href:"/docs-api/AbstractBC/ImportFromToml",children:"ImportFromToml"})," method."]}),"\n",(0,s.jsx)(t.h2,{id:"all-methods",children:"All methods"}),"\n","\n","\n",(0,s.jsx)(r.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>b});n(67294);var s=n(86010),i=n(53438),r=n(39960),c=n(13919),o=n(95999),a=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(r.Z,{href:t,className:(0,s.Z)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:i,description:r}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,s.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),r&&(0,d.jsx)("p",{className:(0,s.Z)("text--truncate",l.cardDescription),title:r,children:r})]})}function u(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,s.Z)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(67294);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);