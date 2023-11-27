"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[35186],{31579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(85893),a=n(11151);const o={},r="Initiate",s={id:"Domain/Initiate",title:"Initiate",description:"This method initiates an instance of domain by reading the mesh-file in HDF5File format.",source:"@site/docs/docs-api/Domain/Initiate.md",sourceDirName:"Domain",slug:"/Domain/Initiate",permalink:"/docs-api/Domain/Initiate",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Domain/Initiate.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/docs-api/Domain/Import"},next:{title:"InitiateBoundaryData",permalink:"/docs-api/Domain/InitiateBoundaryData"}},c={},d=[{value:"Interface",id:"interface",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"initiate",children:"Initiate"}),"\n",(0,i.jsxs)(t.p,{children:["This method initiates an instance of domain by reading the mesh-file in ",(0,i.jsx)(t.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format."]}),"\n",(0,i.jsx)(t.h2,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Domain_Initiate(obj, hdf5, group)\n    CLASS(Domain_), INTENT(INOUT) :: obj\n    !! DomainData object\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    !! HDF5 file\n    CHARACTER(*), INTENT(IN) :: group\n    !! Group name (directory name)\n  END SUBROUTINE Domain_Initiate\nEND INTERFACE\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var i=n(67294);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);