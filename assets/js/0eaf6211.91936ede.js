"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[44283],{49302:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var o=t(85893),s=t(11151);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["This example shows how to USE ",(0,o.jsx)(n.code,{children:"MeshSelection"})," WITH ",(0,o.jsx)(n.code,{children:"meshSelectionByID"})," option, and export it to ",(0,o.jsx)(n.code,{children:"HDF5File_"})," format."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( MeshSelection_ ) :: obj\n  TYPE( HDF5File_ ) :: hdf5file\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Initiates an instance of ",(0,o.jsx)(n.code,{children:"MeshSelection_"})," WITH selection by mesh ID."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Initiate( isSelectionByMeshID=.TRUE. )\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let us now add NEW entries."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Add( dim=0, meshID=[1,2,3,4,5,6])\nCALL obj%Add( dim=1, meshID=[2,5,6,7])\nCALL obj%Add( dim=2, meshID=[1,3,5,6,8])\nCALL obj%Add( dim=3, meshID=[1,8])\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now that we are done setting the DATA in the instance, let us CALL ",(0,o.jsx)(n.code,{children:"set"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Set()\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we will OPEN a ",(0,o.jsx)(n.code,{children:"HDF5File_"})," so that we can WRITE DATA to it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:'CALL hdf5file%Initiate(filename="./TemplateMeshSelection.hdf5", &\n  & mode="NEW")\nCALL hdf5file%Open()\n'})}),"\n",(0,o.jsxs)(n.p,{children:["After opening the ",(0,o.jsx)(n.code,{children:"HDF5File_"})," we export the instance of ",(0,o.jsx)(n.code,{children:"MeshSelection_"})," to it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"CALL obj%Export(hdf5=hdf5file, group='')\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cleanup"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"  CALL hdf5file%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function r(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}const c={},a="Export",l={id:"MeshSelection/Export",title:"Export",description:"Export an instance of MeshSelection in HDF5File format.",source:"@site/docs/docs-api/MeshSelection/Export.md",sourceDirName:"MeshSelection",slug:"/MeshSelection/Export",permalink:"/docs-api/MeshSelection/Export",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/MeshSelection/Export.md",tags:[],version:"current",lastUpdatedAt:1706190023,formattedLastUpdatedAt:"Jan 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display",permalink:"/docs-api/MeshSelection/Display"},next:{title:"GetElemNum",permalink:"/docs-api/MeshSelection/GetElemNum"}},d={},h=[{value:"Interface",id:"interface",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{TabItem:t,Tabs:i}=n;return t||f("TabItem",!0),i||f("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"export",children:"Export"}),"\n",(0,o.jsxs)(n.p,{children:["Export an instance of ",(0,o.jsx)(n.code,{children:"MeshSelection"})," in ",(0,o.jsx)(n.code,{children:"HDF5File"})," format."]}),"\n",(0,o.jsx)(n.h2,{id:"interface",children:"Interface"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)(t,{value:"interface",label:"Interface",default:!0,children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-fortran",children:"INTERFACE\n  MODULE SUBROUTINE Export(obj, hdf5, group)\n    CLASS(MeshSelection_), INTENT(IN) :: obj\n    TYPE(HDF5File_), INTENT(INOUT) :: hdf5\n    CHARACTER(*), INTENT(IN) :: group\n  END SUBROUTINE Export\nEND INTERFACE\n"})})}),(0,o.jsx)(t,{value:"example",label:"example",children:(0,o.jsx)(r,{})}),(0,o.jsx)(t,{value:"close",label:"\u21a2 close"})]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var o=t(67294);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);