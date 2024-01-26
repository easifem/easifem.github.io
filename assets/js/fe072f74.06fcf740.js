"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[50396],{37532:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(85893),s=i(11151);const o={},a=void 0,l={id:"MSHFile/MSHFile_test_2",title:"MSHFile_test_2",description:"",source:"@site/docs/docs-api/MSHFile/MSHFile_test_2.md",sourceDirName:"MSHFile",slug:"/MSHFile/MSHFile_test_2",permalink:"/docs-api/MSHFile/MSHFile_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MSHFile/MSHFile_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MSHFile_test_1",permalink:"/docs-api/MSHFile/MSHFile_test_1"},next:{title:"MSHFile_test_3",permalink:"/docs-api/MSHFile/MSHFile_test_3"}},r={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-fortran",children:'PROGRAM main\nUSE easifemBase\nUSE easifemClasses\nIMPLICIT NONE\nTYPE(MSHFile_) :: mshFile\nTYPE(HDF5File_) :: hdf5File\nINTEGER(I4B) :: error\nCALL mshFile%Initiate(filename="./mesh2D.msh", status="OLD", action="READ")\nCALL mshFile%OPEN()\nCALL mshFile%READ(error)\nCALL hdf5File%Initiate(filename="./mesh2D.h5", mode="NEW")\nCALL hdf5File%OPEN()\nCALL mshFile%Export(hdf5=hdf5File, group="")\nCALL hdf5File%CLOSE()\nCALL hdf5File%Deallocate()\nCALL mshFile%CLOSE()\nCALL mshFile%Deallocate()\nEND PROGRAM main\n'})})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>a});var n=i(67294);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);