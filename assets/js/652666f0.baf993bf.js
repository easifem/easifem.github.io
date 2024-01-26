"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[62451],{75650:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=r(85893),s=r(11151);const o={},a="Export",c={id:"AbstractBC/Export",title:"Export",description:"Export AbstractBC to hdf5 file.",source:"@site/docs/docs-api/AbstractBC/Export.md",sourceDirName:"AbstractBC",slug:"/AbstractBC/Export",permalink:"/docs-api/AbstractBC/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/AbstractBC/Export.md",tags:[],version:"current",lastUpdatedAt:1701147514,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/AbstractBC/Display"},next:{title:"Get",permalink:"/docs-api/AbstractBC/Get"}},i={},d=[{value:"Interface",id:"interface",level:2}];function p(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"export",children:"Export"}),"\n",(0,n.jsxs)(e.p,{children:["Export ",(0,n.jsx)(e.a,{href:"/docs-api/AbstractBC/AbstractBC_",children:"AbstractBC_"})," to hdf5 file."]}),"\n",(0,n.jsx)("span",{class:"badge badge--secondary",children:" @ConstructorMethods "}),"\n",(0,n.jsx)(e.h2,{id:"interface",children:"Interface"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-fortran",children:"ABSTRACT INTERFACE\n  SUBROUTINE Export(obj, hdf5, group)\n    IMPORT :: AbstractBC_, HDF5File_\n    CLASS(AbstractBC_), INTENT(IN) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})]})}function l(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}},11151:(t,e,r)=>{r.d(e,{Z:()=>c,a:()=>a});var n=r(67294);const s={},o=n.createContext(s);function a(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);