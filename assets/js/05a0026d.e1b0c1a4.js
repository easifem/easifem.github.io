"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[55219],{47695:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=i(85893),a=i(11151);const l={title:"VTKFile example 8",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKFile/InitiateVTKFile","VTKFile/WritePiece","VTKFile/WritePoints"]},s="VTKFile example 8",r={id:"VTKFile/VTKFile_test_8",title:"VTKFile example 8",description:"This example shows how to construct structuredGrid (BINARY) vtkfile.",source:"@site/docs/docs-api/VTKFile/VTKFile_test_8.md",sourceDirName:"VTKFile",slug:"/VTKFile/VTKFile_test_8",permalink:"/docs-api/VTKFile/VTKFile_test_8",draft:!1,unlisted:!1,editUrl:"https://github.com/easifem-fortran/easifem-fortran.github.io/tree/main/docs/docs-api/VTKFile/VTKFile_test_8.md",tags:[{label:"VTKFile/InitiateVTKFile",permalink:"/docs-api/tags/vtk-file-initiate-vtk-file"},{label:"VTKFile/WritePiece",permalink:"/docs-api/tags/vtk-file-write-piece"},{label:"VTKFile/WritePoints",permalink:"/docs-api/tags/vtk-file-write-points"}],version:"current",lastUpdatedAt:1701057211,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"VTKFile example 8",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKFile/InitiateVTKFile","VTKFile/WritePiece","VTKFile/WritePoints"]},sidebar:"tutorialSidebar",previous:{title:"VTKFile example 7",permalink:"/docs-api/VTKFile/VTKFile_test_7"},next:{title:"VTKFile_test_9",permalink:"/docs-api/VTKFile/VTKFile_test_9"}},c={},o=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vtkfile-example-8",children:"VTKFile example 8"}),"\n",(0,t.jsxs)(n.p,{children:["This example shows how to construct ",(0,t.jsx)(n.code,{children:"structuredGrid"})," (BINARY) vtkfile."]}),"\n",(0,t.jsx)(n.h2,{id:"use-association",children:"Use association"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"[[VTKFile_]]"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'PROGRAM MAIN\n  USE easifemBase\n  USE easifemClasses\n  Implicit None\n  TYPE(VTKFile_) :: aVTKfile\n  REAL(DFP), ALLOCATABLE :: xv(:), yv(:), zv(:), x(:, :, :), &\n    & y(:, :, :), z(:, :, :)\n  INTEGER(I4B) :: nx1 = 0, nx2 = 9, ny1 = 0, ny2 = 5, nz1 = 0, nz2 = 5\n  CHARACTER( LEN = * ), PARAMETER :: filename="./example8.vts"\n'})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nLet us initiate a vtkfile for structured grid. We need to specify the WholeExtent.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:'  CALL aVTKfile%InitiateVTKFile( &\n    & filename=filename, &\n    & mode="NEW", &\n    & DataFormat=VTK_BINARY, &\n    & DataStructureType=VTK_StructuredGrid, &\n    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\n'})}),"\n",(0,t.jsx)(n.p,{children:'!!! note "Piece 1"\nIn the following we add a piece (portion of geometry defined by the extent). Note that we can specify as many piece as we want.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  CALL aVTKfile%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  xv = linspace(0.0_DFP, 1.0_DFP, (nx2 - nx1) + 1)\n  yv = linspace(0.0_DFP, 1.0_DFP, (ny2 - ny1) + 1)\n  zv = linspace(0.0_DFP, 1.0_DFP, (nz2 - nz1) + 1)\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nNow we create meshgrid'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  CALL MeshGrid(x=x, y=y, z=z, xgv=xv, ygv=yv, zgv=zv)\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  CALL aVTKfile%WritePoints(x=x, y=y, z=z)\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note ""\nClosing the piece.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  CALL aVTKfile%WritePiece()\n"})}),"\n",(0,t.jsx)(n.p,{children:'!!! note "cleanup"\nClosing the file, a simple Deallocate is enough.'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-fortran",children:"  CALL aVTKfile%Deallocate()\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var t=i(67294);const a={},l=t.createContext(a);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);