"use strict";(self.webpackChunkeasifem_docs=self.webpackChunkeasifem_docs||[]).push([[16685],{81772:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=l(85893),t=l(11151);const o={},a=void 0,s={id:"Mesh/test_Mesh",title:"test_Mesh",description:"",source:"@site/docs/docs-api/Mesh/test_Mesh.md",sourceDirName:"Mesh",slug:"/Mesh/test_Mesh",permalink:"/docs-api/Mesh/test_Mesh",draft:!1,unlisted:!1,editUrl:"https://github.com/vickysharma0812/vickysharma0812.github.io/tree/main/docs/docs-api/Mesh/test_Mesh.md",tags:[],version:"current",lastUpdatedAt:1701101849,formattedLastUpdatedAt:"Nov 27, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Size",permalink:"/docs-api/Mesh/Size"},next:{title:"MeshData",permalink:"/docs-api/MeshData/"}},r={},c=[];function m(e){const n={code:"code",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-fortran",children:"! This program is a part of EASIFEM library\n! Copyright (C) 2020-2021  Vikas Sharma, Ph.D\n!\n! This program is free software: you can redistribute it and/or modify\n! it under the terms of the GNU General Public License as published by\n! the Free Software Foundation, either version 3 of the License, or\n! (at your option) any later version.\n!\n! This program is distributed in the hope that it will be useful,\n! but WITHOUT ANY WARRANTY; without even the implied warranty of\n! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n! GNU General Public License for more details.\n!\n! You should have received a copy of the GNU General Public License\n! along with this program.  If not, see <https: //www.gnu.org/licenses/>\n!\n\nmodule test_m\nuse easifemBase\nuse easifemClasses\nimplicit none\nlogical( lgt ), save, private :: isMeshExported = .false.\ncontains\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test11\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  type( VTKFile_ ) :: vtkfile\n  real( DFP ), allocatable :: nodeCoord( :, : ), pressure( : )\n  call display( \"Testing ExportToVTK\" )\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" ); call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  call obj%getNodeCoord( nodeCoord=nodeCoord, hdf5=meshfile, &\n    & group=\"/nodeCoord\" )\n  call obj%ExportToVTK( vtkFile=vtkFile, nodeCoord=nodeCoord, &\n    & filename=\"./surfaceEntities_1.vtu\", OpenTag=.TRUE., &\n    & Content=.TRUE., CloseTag=.FALSE. )\n  !> writing node data\n  call vtkFile%WriteDataArray(location=String('node'), &\n    & action=String('open'))\n  call reallocate( pressure, obj%getTotalNodes() )\n  call random_number( pressure ); pressure = pressure * 10\n  call vtkFile%WriteDataArray( name=String(\"node_data\"), &\n    & x=pressure, numberOfComponents=1 )\n  call vtkFile%WriteDataArray( location=String('node'), &\n    & action=String('close') )\n  !> writing cell data\n  call vtkFile%WriteDataArray(location=String('cell'), &\n    & action=String('open'))\n  call reallocate( pressure, obj%getTotalElements() )\n  call random_number( pressure ); pressure = pressure * 10\n  call vtkFile%WriteDataArray( name=String(\"cell_data\"), &\n    & x=pressure, numberOfComponents=1 )\n  call vtkFile%WriteDataArray( location=String('cell'), &\n    & action=String('close') )\n  call vtkFile%WritePiece()\n  call vtkFile%Close( )\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-11 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test10\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('BOUNDARY ELEMENT DATA:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minElemNum,obj%maxElemNum\n    if( .NOT. obj%isElementPresent(ii ) ) cycle\n    if( obj%isBoundaryElement(ii) ) then\n      call display( obj%getBoundaryElementData( ii ), &\n      & \"element = \" // trim( string( ii ) ) &\n      & // ' is connected to global elements = ' )\n    end if\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-10 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test9\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('BOUNDARY AND INTERNAL NPTRS:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  call display( obj%getNptrs(), \"getNptrs = \")\n  call display( obj%getInternalNptrs(), \"getInternalNptrs = \")\n  call display( obj%getBoundaryNptrs(), \"getBoundaryNptrs = \")\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-9 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test8\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('ELEMENT TO ELEMENTS:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minElemNum, obj%maxElemNum\n    if( .not. obj%isElementPresent( ii ) ) cycle\n    call display( obj%getElementToElements( ii ), &\n      & \"element = \" // trim( string( ii ) ) &\n      & // ' is connected to global elements = ' )\n  end do\n  do ii = obj%minElemNum, obj%maxElemNum\n    if( .not. obj%isElementPresent( ii ) ) cycle\n    call display( obj%isBoundaryElement( ii ), &\n      & \"element = \" // trim( string( ii ) ) &\n      & // ' is a boundary element = ' )\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-8 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test7\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('NODE TO NODES:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minNptrs, obj%maxNptrs\n    if( .not. obj%isNodePresent( ii ) ) cycle\n    call display( obj%getNodeToNodes( ii, .true. ), &\n      & \"node = \" // trim( string( ii ) ) &\n      & // ' is connected to global nodes = ' )\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-7 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test6\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('NODE TO ELEMENTS:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minElemNum, obj%maxElemNum\n    if( .not. obj%isElementPresent( ii ) ) cycle\n  end do\n  do ii = obj%minNptrs, obj%maxNptrs\n    if( .not. obj%isNodePresent( ii ) ) cycle\n    call display( obj%getNodeToElements( ii ), \"node = \" // trim( string( ii ) ) // ' is connected to global elements = '  )\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-6 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test5\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii, jj\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('NODES LOOP:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minNptrs, obj%maxNptrs\n    if( .not. obj%isNodePresent( ii ) ) cycle\n    call display( obj%getNodeToElements( ii ), \"node = \" &\n      & // trim( string( ii ) ) // &\n      & ' is connected to global elements = '  )\n  end do\n  do ii = 1, obj%getTotalNodes()\n    jj = obj%getGlobalNodeNumber( ii )\n    call display( obj%getNodeToElements( jj ), &\n      & \"node = \" // trim( string( jj ) ) // &\n      & ' is connected to global elements = '  )\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-5 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test4\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr, ii, jj\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('ELEMENT LOOP:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/surfaceEntities_1\" )\n  do ii = obj%minElemNum, obj%maxElemNum\n    if( .not. obj%isElementPresent( ii ) ) cycle\n  end do\n  do ii = 1, obj%getTotalElements()\n    jj = obj%getGlobalElemNumber( ii )\n    if( .not. obj%isElementPresent( jj ) ) cycle\n  end do\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-4 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test3\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('INITIATE POINT ENTITIES:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/pointEntities_1\" )\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-3 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nsubroutine test2\n  type( mesh_ ) :: obj\n  integer( I4B ) :: ierr\n  type( HDF5File_ ) :: meshfile\n  call blanklines(); call equalline( )\n  call display( colorize('TEST:', color_fg='blue', style='underline_on') &\n    & // colorize('INITIATE CURVE ENTITIES:', color_fg='green', &\n    & style='underline_on') )\n  call equalline(); call blanklines()\n  call meshfile%initiate( filename=\"./mesh.h5\", mode=\"READ\" )\n  call meshfile%open()\n  call obj%initiate(hdf5=meshfile, group=\"/curveEntities_1\" )\n  call obj%Deallocate()\n  call meshfile%close()\n  call meshfile%Deallocate()\n  call display( \"test-2 [OK!]\")\nend subroutine\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nend module test_m\n\n!----------------------------------------------------------------------------\n!\n!----------------------------------------------------------------------------\n\nprogram main\nuse test_m\nimplicit none\ninteger :: ierr\ncall setDisplayProfile( displayProfileTerminal )\ncall exportMesh\n! call test1\n! call test2\n! call test3\n! call test4\n! call test5\n! call test6\n! call test7\n! call test8\n! call test9\n! call test10\ncall test11\nend program main\n"})})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>s,a:()=>a});var i=l(67294);const t={},o=i.createContext(t);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);