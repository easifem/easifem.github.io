"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[30093],{53202:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=t(85893),i=t(11151);const a={},o=void 0,r={id:"VectorMeshField/VectorMeshField_test_2",title:"VectorMeshField_test_2",description:"This example shows how to initiate an instance of Mesh by reading data from mesh file, which is in HDF5File format. It also showns how to construct an instance of VectorMeshField_",source:"@site/docs/docs-api/VectorMeshField/VectorMeshField_test_2.md",sourceDirName:"VectorMeshField",slug:"/VectorMeshField/VectorMeshField_test_2",permalink:"/docs-api/VectorMeshField/VectorMeshField_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VectorMeshField/VectorMeshField_test_2.md",tags:[],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VectorMeshField_test_1",permalink:"/docs-api/VectorMeshField/VectorMeshField_test_1"},next:{title:"XMLFile",permalink:"/docs-api/XMLFile/"}},c={},l=[];function h(e){const s={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["This example shows how to initiate an instance of ",(0,n.jsx)(s.a,{href:"/docs-api/Mesh/Mesh_",children:"Mesh_"})," by reading data from mesh file, which is in ",(0,n.jsx)(s.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format. It also showns how to construct an instance of VectorMeshField_"]}),"\n",(0,n.jsx)(s.p,{children:"The mesh is given below"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(249).Z+"",width:"612",height:"797"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( Mesh_ ) :: amesh\n  TYPE( VectorMeshField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Initiate and open the mesh file which is in ",(0,n.jsx)(s.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:'  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )\n  CALL meshfile%Open()\n  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )\n'})}),"\n",(0,n.jsx)(s.p,{children:"Initiate an instance of VectorMeshField_."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%initiate()\n  CALL setVectorMeshFieldParam( &\n    & param=param, &\n    & name='aVector', &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & engine='NATIVE_SERIAL', &\n    & defineOn=Quadrature, &\n    & spaceCompo=3, &\n    & nns=6 )\n  CALL obj%Initiate( param=param, mesh=amesh )\n  CALL obj%Display( 'obj: ' )\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL amesh%Deallocate()\n  CALL meshfile%Close()\n  CALL meshfile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},249:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/mesh-55f489ea84bf8e71cc3043bc11a36e32.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(67294);const i={},a=n.createContext(i);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);