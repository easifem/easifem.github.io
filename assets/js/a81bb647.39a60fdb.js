"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[71205],{50066:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var n=s(85893),t=s(11151);const r={},l=void 0,a={id:"VectorMeshField/VectorMeshField_test_1",title:"VectorMeshField_test_1",description:"This example shows how to convert the mesh generated from Gmsh, MSHFile format, into the HDF5File format.",source:"@site/docs/docs-api/VectorMeshField/VectorMeshField_test_1.md",sourceDirName:"VectorMeshField",slug:"/VectorMeshField/VectorMeshField_test_1",permalink:"/docs-api/VectorMeshField/VectorMeshField_test_1",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorMeshField/VectorMeshField_test_1.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Structure",permalink:"/docs-api/VectorMeshField/VectorMeshField_"},next:{title:"VectorMeshField_test_2",permalink:"/docs-api/VectorMeshField/VectorMeshField_test_2"}},c={},o=[];function h(e){const i={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["This example shows how to convert the mesh generated from Gmsh, ",(0,n.jsx)(i.a,{href:"/docs-api/MSHFile/MSHFile_",children:"MSHFile_"})," format, into the ",(0,n.jsx)(i.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format."]}),"\n",(0,n.jsx)(i.p,{children:"The mesh is given below"}),"\n",(0,n.jsx)(i.p,{children:"![[mesh.png]]"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( MSHFile_ ) :: mshFile\n  TYPE( HDF5File_ ) :: hdf5file\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Initiate an instance of ",(0,n.jsx)(i.a,{href:"/docs-api/MSHFile/MSHFile_",children:"MSHFile_"})," which is created by Gmsh."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'  CALL mshFile%Initiate( filename="./mesh.msh", STATUS="OLD", ACTION="READ" )\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Open the mesh file ",(0,n.jsx)(i.a,{href:"/docs-api/MSHFile/MSHFile_",children:"MSHFile_"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"  CALL mshFile%Open()\n"})}),"\n",(0,n.jsx)(i.p,{children:"Read the mesh information from the file."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"  CALL mshFile%Read()\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Initiate an instance of ",(0,n.jsx)(i.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"}),", we will save mesh data in this file."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'  CALL hdf5file%Initiate( "./mesh.h5", MODE="NEW" )\n'})}),"\n",(0,n.jsxs)(i.p,{children:["Open the ",(0,n.jsx)(i.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," file so that we can write mesh data in this file."]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"  CALL hdf5file%Open()\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Exporting mesh from ",(0,n.jsx)(i.a,{href:"/docs-api/MSHFile/MSHFile_",children:"MSHFile_"})," file to ",(0,n.jsx)(i.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:'  CALL mshFile%Export( hdf5=hdf5file, group="" )\n'})}),"\n",(0,n.jsx)(i.p,{children:"Cleaning up"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-fortran",children:"  CALL mshFile%close()\n  CALL mshFile%Deallocate()\n  CALL hdf5file%close()\n  CALL hdf5file%Deallocate()\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>l});var n=s(67294);const t={},r=n.createContext(t);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);