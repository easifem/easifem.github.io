"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[70013],{40135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=t(85893),a=t(11151);const l={title:"VTKFile example 7",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKFile/InitiateVTKFile","VTKFile/WritePiece","VTKFile/WritePoints"]},s="VTKFile example 7",r={id:"VTKFile/VTKFile_test_7",title:"VTKFile example 7",description:"This example shows how to construct structuredGrid (ASCII) vtkfile. We make 2D planar grid. We also plot a function on this structuredGrid.",source:"@site/docs/docs-api/VTKFile/VTKFile_test_7.md",sourceDirName:"VTKFile",slug:"/VTKFile/VTKFile_test_7",permalink:"/docs-api/VTKFile/VTKFile_test_7",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/VTKFile/VTKFile_test_7.md",tags:[{label:"VTKFile/InitiateVTKFile",permalink:"/docs-api/tags/vtk-file-initiate-vtk-file"},{label:"VTKFile/WritePiece",permalink:"/docs-api/tags/vtk-file-write-piece"},{label:"VTKFile/WritePoints",permalink:"/docs-api/tags/vtk-file-write-points"}],version:"current",lastUpdatedAt:1701103026,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{title:"VTKFile example 7",author:"Vikas Sharma, Ph.D.",date:"5 July 2022",update:"5 July 2022",tags:["VTKFile/InitiateVTKFile","VTKFile/WritePiece","VTKFile/WritePoints"]},sidebar:"tutorialSidebar",previous:{title:"VTKFile example 6",permalink:"/docs-api/VTKFile/VTKFile_test_6"},next:{title:"VTKFile example 8",permalink:"/docs-api/VTKFile/VTKFile_test_8"}},o={},c=[{value:"Use association",id:"use-association",level:2},{value:"Usage",id:"usage",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"vtkfile-example-7",children:"VTKFile example 7"}),"\n",(0,i.jsxs)(n.p,{children:["This example shows how to construct ",(0,i.jsx)(n.code,{children:"structuredGrid"})," (ASCII) vtkfile. We make 2D planar grid. We also plot a function on this structuredGrid."]}),"\n",(0,i.jsx)(n.h2,{id:"use-association",children:"Use association"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[[VTKFile_]]"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"PROGRAM MAIN\n  USE easifemBase\n  USE easifemClasses\n  Implicit None\n  TYPE(VTKFile_) :: obj\n  REAL(DFP), ALLOCATABLE :: xv(:), yv(:), zv(:), x(:, :, :), &\n    & y(:, :, :), z(:, :, :), func(:,:,:)\n  INTEGER(I4B) :: nx1 = 0, nx2 = 9, ny1 = 0, ny2 = 5, nz1 = 0, nz2 = 0\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note ""\nLet us initiate a vtkfile for structured grid. We need to specify the WholeExtent.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%InitiateVTKFile( &\n    & filename="./example7.vts", &\n    & mode="NEW", &\n    & DataFormat=VTK_ASCII, &\n    & DataStructureType=VTK_StructuredGrid, &\n    & WholeExtent=[nx1, nx2, ny1, ny2, nz1, nz2])\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "Piece 1"\nIn the following we add a piece (portion of geometry defined by the extent). Note that we can specify as many piece as we want.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%WritePiece(extent=[nx1, nx2, ny1, ny2, nz1, nz2])\n  !!\n  xv = linspace(0.0_DFP, 1.0_DFP, (nx2 - nx1) + 1)\n  yv = linspace(0.0_DFP, 1.0_DFP, (ny2 - ny1) + 1)\n  zv = linspace(1.0_DFP, 1.0_DFP, (nz2 - nz1) + 1)\n  CALL MeshGrid(x=x, y=y, z=z, xgv=xv, ygv=yv, zgv=zv)\n  !!\n  CALL obj%WritePoints(x=x, y=y, z=z)\n  !!\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "PointData"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:'  CALL obj%WriteDataArray( &\n    & location=String("node"), &\n    & action=String("open") )\n  func = x**2 + y**2\n  CALL obj%WriteDataArray( &\n    & name=String("func"), &\n    & x=func, &\n    & numberOfComponents=1 )\n  CALL obj%WriteDataArray( &\n    & location=String("node"), &\n    & action=String("close") )\n'})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "Close Piece"'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"    CALL obj%WritePiece()\n"})}),"\n",(0,i.jsx)(n.p,{children:'!!! note "cleanup"\nClosing the file, a simple Deallocate is enough.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"  CALL obj%Deallocate()\nEND PROGRAM main\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(67294);const a={},l=i.createContext(a);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);