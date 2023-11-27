"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[45927],{60645:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>c});var l=a(85893),t=a(11151);const r={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Export"]},o="BlockMatrixField example 5",n={id:"BlockMatrixField/BlockMatrixField_test_5",title:"BlockMatrixField example 5",description:"This example shows the use of BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_5.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_5",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_5",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_5.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Spy",permalink:"/docs-api/tags/block-matrix-field-spy"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"BlockMatrixField/Export",permalink:"/docs-api/tags/block-matrix-field-export"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Export"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 4",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_4"},next:{title:"BlockMatrixField example 6",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_6"}},s={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h1,{id:"blockmatrixfield-example-5",children:"BlockMatrixField example 5"}),"\n",(0,l.jsxs)(i.p,{children:["This example shows the use of ",(0,l.jsx)(i.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,l.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:"PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:'  TYPE( BlockMatrixField_ ) :: obj\n  TYPE( ParameterList_ ) :: param\n  TYPE( Domain_ ), TARGET :: pressureDomain\n  TYPE( Domain_ ), TARGET :: velocityDomain\n  TYPE( DomainPointer_ ) :: domains( 2 )\n  TYPE( HDF5File_ ) :: pressureMeshFile\n  TYPE( HDF5File_ ) :: velocityMeshFile\n  TYPE( HDF5File_ ) :: blockMatrixOutfile\n  CHARACTER( LEN = * ), PARAMETER :: pressureMeshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN = * ), PARAMETER :: velocityMeshFilename="./mesh_tri6.h5"\n  CHARACTER( LEN = * ), PARAMETER :: blockMatrixOutfileName= &\n    & "./blockMatrixOutfile.h5"\n'})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:'  CALL FPL_INIT(); CALL param%Initiate()\n  CALL SetBlockMatrixFieldParam(param=param, name="K",  &\n    & physicalVarNames=["V", "P"], spaceCompo=[2, 1], &\n    & timeCompo=[1,1], fieldType=FIELD_TYPE_NORMAL,  &\n    & matrixProp="UNSYM" )\n'})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:'  CALL pressureMeshfile%Initiate( FileName=pressureMeshFilename, MODE="READ" )\n  CALL velocityMeshfile%Initiate( FileName=velocityMeshFilename, MODE="READ" )\n  CALL pressureMeshfile%Open()\n  CALL velocityMeshfile%Open()\n  CALL pressureDomain%Initiate( pressureMeshfile, "")\n  CALL velocityDomain%Initiate( velocityMeshfile, "")\n  CALL pressureMeshfile%Deallocate()\n  CALL velocityMeshfile%Deallocate()\n'})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:'  domains(1)%ptr => velocityDomain\n  domains(2)%ptr => pressureDomain\n  CALL obj%Initiate(param=param, dom=domains)\n  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "NEW" )\n  CALL blockMatrixOutfile%open()\n  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixField")\n'})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-fortran",children:"  CALL blockMatrixOutfile%Deallocate()\n  CALL obj%Deallocate()\n  CALL param%Deallocate(); CALL FPL_FINALIZE()\n  NULLIFY(domains(1)%ptr, domains(2)%ptr)\n  CALL pressureDomain%Deallocate()\n  CALL velocityDomain%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function m(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},11151:(e,i,a)=>{a.d(i,{Z:()=>n,a:()=>o});var l=a(67294);const t={},r=l.createContext(t);function o(e){const i=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function n(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),l.createElement(r.Provider,{value:i},e.children)}}}]);