"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[41540],{94687:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(85893),s=r(11151);const o={},a="Import",i={id:"AbstractMeshField/Import",title:"Import",description:"Import data from HDF5 file.",source:"@site/docs/docs-api/AbstractMeshField/Import.md",sourceDirName:"AbstractMeshField",slug:"/AbstractMeshField/Import",permalink:"/docs-api/AbstractMeshField/Import",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractMeshField/Import.md",tags:[],version:"current",lastUpdatedAt:1702011327,formattedLastUpdatedAt:"Dec 8, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GetPrefix",permalink:"/docs-api/AbstractMeshField/GetPrefix"},next:{title:"Shape",permalink:"/docs-api/AbstractMeshField/Shape"}},c={},d=[{value:"Interface",id:"interface",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"import",children:"Import"}),"\n",(0,n.jsx)(t.p,{children:"Import data from HDF5 file."}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @IOMethods "}),"\n",(0,n.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Import(obj, hdf5, group, mesh)\n    CLASS(AbstractMeshField_), INTENT(INOUT) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n    CLASS(Mesh_), TARGET, OPTIONAL, INTENT(IN) :: mesh\n  END SUBROUTINE Import\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>a});var n=r(67294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);