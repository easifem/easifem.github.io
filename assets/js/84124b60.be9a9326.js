"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[73114],{17664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=n(85893),l=n(11151);const i={},r="Import",c={id:"MeshSelection/Import",title:"Import",description:"Import an instance of MeshSelection_ from hdf5 file.",source:"@site/docs/docs-api/MeshSelection/Import.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/Import",permalink:"/docs-api/MeshSelection/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/MeshSelection/Import.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetQuery",permalink:"/docs-api/MeshSelection/GetQuery"},next:{title:"Initiate",permalink:"/docs-api/MeshSelection/Initiate"}},d={},o=[{value:"Interface",id:"interface",level:2}];function x(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,s.jsxs)(t.p,{children:["Import an instance of ",(0,s.jsx)(t.code,{children:"MeshSelection_"})," from hdf5 file."]}),"\n",(0,s.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Import(obj, hdf5, group, dom)\n    CLASS(MeshSelection_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    TYPE(Domain_), OPTIONAL, INTENT(IN) :: dom\n  END SUBROUTINE Import\nEND INTERFACE\n"})}),"\n",(0,s.jsx)(t.p,{children:"The template of HDF5File is given below."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Variable"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Data type"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"isSelectionByMeshID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,s.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it to true, if you want to select by supply ",(0,s.jsx)(t.code,{children:"meshID"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"isSelectionByElemID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,s.jsxs)(t.td,{style:{textAlign:"right"},children:["Optional. Set it to true, if you want to select by supply ",(0,s.jsx)(t.code,{children:"elemID"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"isSelectionByBox"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Bool"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"True or False"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Optional. Set it to true, if you want to select by supply bounding box"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"PointMeshID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CurveMeshID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SurfaceMeshID"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"PointElemNum"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"CurveElemNum"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"SurfaceElemNum"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"VolumeElemNum"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"right"}})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var s=n(67294);const l={},i=s.createContext(l);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);