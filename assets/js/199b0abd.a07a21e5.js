"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[11311],{3901:(e,i,l)=>{l.r(i),l.d(i,{assets:()=>n,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=l(85893),t=l(11151);const o={tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import","BlockMatrixField/Export"]},r="BlockMatrixField example 8",c={id:"BlockMatrixField/BlockMatrixField_test_8",title:"BlockMatrixField example 8",description:"This example shows the use of BlockMatrixField",source:"@site/docs/docs-api/BlockMatrixField/BlockMatrixField_test_8.md",sourceDirName:"BlockMatrixField",slug:"/BlockMatrixField/BlockMatrixField_test_8",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/BlockMatrixField/BlockMatrixField_test_8.md",tags:[{label:"BlockMatrixField",permalink:"/docs-api/tags/block-matrix-field"},{label:"BlockMatrixField/SetBlockMatrixFieldParam",permalink:"/docs-api/tags/block-matrix-field-set-block-matrix-field-param"},{label:"BlockMatrixField/CheckEssentialParam",permalink:"/docs-api/tags/block-matrix-field-check-essential-param"},{label:"BlockMatrixField/Initiate",permalink:"/docs-api/tags/block-matrix-field-initiate"},{label:"BlockMatrixField/Display",permalink:"/docs-api/tags/block-matrix-field-display"},{label:"BlockMatrixField/Spy",permalink:"/docs-api/tags/block-matrix-field-spy"},{label:"BlockMatrixField/Deallocate",permalink:"/docs-api/tags/block-matrix-field-deallocate"},{label:"BlockMatrixField/Import",permalink:"/docs-api/tags/block-matrix-field-import"},{label:"BlockMatrixField/Export",permalink:"/docs-api/tags/block-matrix-field-export"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{tags:["BlockMatrixField","BlockMatrixField/SetBlockMatrixFieldParam","BlockMatrixField/CheckEssentialParam","BlockMatrixField/Initiate","BlockMatrixField/Display","BlockMatrixField/Spy","BlockMatrixField/Deallocate","BlockMatrixField/Import","BlockMatrixField/Export"]},sidebar:"tutorialSidebar",previous:{title:"BlockMatrixField example 7",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_7"},next:{title:"BlockMatrixField example 9",permalink:"/docs-api/BlockMatrixField/BlockMatrixField_test_9"}},n={},d=[{value:"Usage",id:"usage",level:2}];function s(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"blockmatrixfield-example-8",children:"BlockMatrixField example 8"}),"\n",(0,a.jsxs)(i.p,{children:["This example shows the use of ",(0,a.jsx)(i.a,{href:"/docs-api/BlockMatrixField/BlockMatrixField_",children:"BlockMatrixField"})]}),"\n",(0,a.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-fortran",children:'PROGRAM main\n  USE easifemBase\n  USE easifemClasses\n  IMPLICIT NONE\n  TYPE( BlockMatrixField_) :: obj\n  TYPE( Domain_ ) :: dom\n  TYPE( HDF5File_) :: meshfile\n  TYPE( HDF5File_ ) :: blockMatrixOutfile\n  CHARACTER( LEN = *), PARAMETER :: meshFilename="./mesh_tri3.h5"\n  CHARACTER( LEN =* ), PARAMETER :: blockMatrixOutfileName= &\n    & "./bmf_outfile_common_domain.h5"\n  !> main\n  ! #HDF5File/#Initiate\n  CALL meshfile%Initiate( FileName=meshFilename, MODE="READ" )\n  ! #HDF5File/#Open\n  CALL meshfile%Open()\n  ! #Domain/Initiate\n  CALL dom%Initiate( meshfile, "")\n  CALL blockMatrixOutfile%Initiate( blockMatrixOutfileName, "READWRITE" )\n  CALL blockMatrixOutfile%open()\n  CALL obj%Import(blockMatrixOutfile, "/BlockMatrixField", dom=dom)\n  CALL obj%Export(blockMatrixOutfile, "/BlockMatrixFieldState" )\n  CALL blockMatrixOutfile%Deallocate()\n  ! #BlockMatrixField/Deallocate\n  CALL obj%Deallocate( )\n  !> cleanup\n  CALL meshfile%Deallocate()\n  CALL dom%Deallocate()\n  CALL obj%Deallocate()\nEND PROGRAM main\n'})})]})}function x(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},11151:(e,i,l)=>{l.d(i,{Z:()=>c,a:()=>r});var a=l(67294);const t={},o=a.createContext(t);function r(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);