"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[93130],{46920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(85893),o=t(11151);const a={},s="Export",i={id:"NeumannBC/Export",title:"Export",description:"Export NeumannBC to hdf5 file.",source:"@site/docs/docs-api/NeumannBC/Export.md",sourceDirName:"NeumannBC",slug:"/NeumannBC/Export",permalink:"/docs-api/NeumannBC/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/NeumannBC/Export.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/NeumannBC/Display"},next:{title:"Get",permalink:"/docs-api/NeumannBC/Get"}},c={},p=[{value:"Interface",id:"interface",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"export",children:"Export"}),"\n",(0,r.jsxs)(n.p,{children:["Export ",(0,r.jsx)(n.a,{href:"/docs-api/NeumannBC/NeumannBC_",children:"NeumannBC_"})," to hdf5 file."]}),"\n",(0,r.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  SUBROUTINE Export(obj, hdf5, group)\n    CLASS(NeumannBC_), INTENT(IN) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);