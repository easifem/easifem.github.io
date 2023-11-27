"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[47627],{1767:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var n=s(85893),i=s(11151);const t={},r=void 0,l={id:"STScalarMeshField/STScalarMeshField_test_2",title:"STScalarMeshField_test_2",description:"This example shows how to initiate an instance of Mesh by reading data from mesh file, which is in HDF5File format. It also showns how to construct an instance of STScalarMeshField.",source:"@site/docs/docs-api/STScalarMeshField/STScalarMeshField_test_2.md",sourceDirName:"STScalarMeshField",slug:"/STScalarMeshField/STScalarMeshField_test_2",permalink:"/docs-api/STScalarMeshField/STScalarMeshField_test_2",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/STScalarMeshField/STScalarMeshField_test_2.md",tags:[],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"STScalarMeshField_test_1",permalink:"/docs-api/STScalarMeshField/STScalarMeshField_test_1"},next:{title:"STTensorMeshField",permalink:"/docs-api/STTensorMeshField/"}},c={},o=[];function h(e){const a={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["This example shows how to initiate an instance of ",(0,n.jsx)(a.a,{href:"/docs-api/Mesh/Mesh_",children:"Mesh_"})," by reading data from mesh file, which is in ",(0,n.jsx)(a.a,{href:"/docs-api/HDF5File/HDF5File_",children:"HDF5File_"})," format. It also showns how to construct an instance of STScalarMeshField.\nThe mesh is given below"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:s(32027).Z+"",width:"612",height:"797"})}),"\n",(0,n.jsx)(a.p,{children:"Import modules and declare variables"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( HDF5File_ ) :: meshfile\n  TYPE( Mesh_ ) :: amesh\n  TYPE( STScalarMeshField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n"})}),"\n",(0,n.jsx)(a.p,{children:"Initiate and open the mesh file which is in [[HDF5File_]] format."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:'  CALL meshfile%Initiate( FileName="./mesh.h5", MODE="READ" )\n  CALL meshfile%Open()\n  CALL amesh%Initiate(hdf5=meshfile, group="/surfaceEntities_1" )\n'})}),"\n",(0,n.jsx)(a.p,{children:"Initiate an instance of STScalarMeshField_."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  CALL FPL_INIT(); CALL param%initiate()\n  CALL setSTScalarMeshFieldParam( &\n    & param=param, &\n    & name='aScalar', &\n    & fieldType=FIELD_TYPE_NORMAL, &\n    & engine='NATIVE_SERIAL', &\n    & defineOn=Nodal, &\n    & nns=6, &\n    & nnt=3 )\n  CALL obj%Initiate( param=param, mesh=amesh )\n  CALL obj%Display( 'obj: ' )\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\n  CALL amesh%Deallocate()\n  CALL meshfile%Close()\n  CALL meshfile%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\nEND PROGRAM main\n"})})]})}function d(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},32027:(e,a,s)=>{s.d(a,{Z:()=>n});const n=s.p+"assets/images/mesh-55f489ea84bf8e71cc3043bc11a36e32.png"},11151:(e,a,s)=>{s.d(a,{Z:()=>l,a:()=>r});var n=s(67294);const i={},t=n.createContext(i);function r(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);