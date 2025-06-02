---
title: Creating structured mesh in 2D using EASIFEM
description: This post explains methods of creating 2D mesh in easifem.
authors:
  - vickysharma0812
  - shishiousan
tags: [mesh, gmsh, tutorial]
hide_table_of_contents: false
---

## Creating a structured mesh of quadrangles

To create a structured mesh of quadrangles in easifem, we will need following classes:

- GmshStructuredMesh_Class: This is high-level interface on top of Gmsh library to create structured meshes.
- Gmsh_Class: Interface to Gmsh library.
- MSHFile_Class: Reading gmsh files
- HDF5File_Class: Writing gmsh files to HDF5 file.

![Very small mesh of quadrangles](/img/blog/very_small_quad4_mesh.svg)

```fortran
PROGRAM main
USE GmshStructuredMesh_Class
USE Gmsh_Class
USE FPL
USE GlobalData
USE MSHFIle_Class
USE HDF5File_Class

IMPLICIT NONE

TYPE(GmshStructuredMesh_) :: obj
TYPE(Gmsh_) :: gmsh
TYPE(ParameterList_) :: param
! CHARACTER(*), PARAMETER :: title = "small_quad4_mesh"
CHARACTER(*), PARAMETER :: title = "very_small_quad4_mesh"
REAL(DFP), PARAMETER :: pointsOnAxis1(2) = [0.0, 1.0]
REAL(DFP), PARAMETER :: pointsOnAxis2(2) = [0.0, 1.0]

INTEGER(I4B), PARAMETER :: transfinitePointsOnAxis1(1) = [3]
INTEGER(I4B), PARAMETER :: transfinitePointsOnAxis2(1) = [3]

INTEGER(I4B) :: ierr

TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5file

CALL FPL_Init()
CALL param%Initiate()

CALL SetGmshStructuredMeshParam(param=param, &
                                filename=title//".msh", &
                                pointsOnAxis1=pointsOnAxis1, &
                                pointsOnAxis2=pointsOnAxis2, &
                          transfinitePointsOnAxis1=transfinitePointsOnAxis1, &
                          transfinitePointsOnAxis2=transfinitePointsOnAxis2, &
                                recombineAll=.TRUE.)

CALL obj%Initiate(param)

ierr = gmsh%initialize()
ierr = gmsh%model%add("GmshStructuredMesh2D")
CALL obj%Generate(gmsh)
! ierr = gmsh%fltk%run()
ierr = gmsh%finalize()

CALL param%DEALLOCATE()
CALL obj%DEALLOCATE()

CALL mshFile%Initiate(filename=title//'.msh', STATUS="OLD", ACTION="READ")
CALL mshFile%OPEN()
CALL mshFile%READ()
CALL hdf5file%Initiate(title//'.h5', MODE="NEW")
CALL hdf5file%OPEN()
CALL mshFile%Export(hdf5=hdf5file, group="")
CALL mshFile%DEALLOCATE()
CALL hdf5file%DEALLOCATE()

END PROGRAM main
```

## Creating a structured mesh of quadrangles with two regions

![Very small mesh of quadrangles with two regions](/img/blog/very_small_quad4_mesh_two_region.svg)

```fortran
PROGRAM main
USE GmshStructuredMesh_Class
USE Gmsh_Class
USE FPL
USE GlobalData
USE MSHFile_Class
USE HDF5File_Class

IMPLICIT NONE

TYPE(GmshStructuredMesh_) :: obj
TYPE(Gmsh_) :: gmsh
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: title = "very_small_quad4_mesh_two_region"
REAL(DFP), PARAMETER :: pointsOnAxis1(3) = [0.0, 1.0, 2.0]
REAL(DFP), PARAMETER :: pointsOnAxis2(2) = [0.0, 1.0]

INTEGER(I4B), PARAMETER :: transfinitePointsOnAxis1(2) = [3, 3]
INTEGER(I4B), PARAMETER :: transfinitePointsOnAxis2(1) = [2]

INTEGER(I4B) :: ierr

TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5file

CALL FPL_Init()
CALL param%Initiate()

CALL SetGmshStructuredMeshParam( &
  param=param, &
  filename=title//".msh", &
  pointsOnAxis1=pointsOnAxis1, &
  pointsOnAxis2=pointsOnAxis2, &
  transfinitePointsOnAxis1=transfinitePointsOnAxis1, &
  transfinitePointsOnAxis2=transfinitePointsOnAxis2, &
  recombineAll=.TRUE.)

CALL obj%Initiate(param)

ierr = gmsh%initialize()
ierr = gmsh%model%add("GmshStructuredMesh2D")
CALL obj%Generate(gmsh)
! ierr = gmsh%fltk%run()
ierr = gmsh%finalize()

CALL param%DEALLOCATE()
CALL obj%DEALLOCATE()

CALL mshFile%Initiate(filename=title//'.msh', STATUS="OLD", ACTION="READ")
CALL mshFile%OPEN()
CALL mshFile%READ()
CALL hdf5file%Initiate(title//'.h5', MODE="NEW")
CALL hdf5file%OPEN()
CALL mshFile%Export(hdf5=hdf5file, group="")
CALL mshFile%DEALLOCATE()
CALL hdf5file%DEALLOCATE()

END PROGRAM main
```

## Creating a structured mesh of triangles

![Small mesh of linear triangles](/img/blog/small_tri3_mesh.svg)

```fortran
PROGRAM main
USE easifemBase
USE Gmsh_Class
USE HDF5File_Class
USE MSHFile_Class

TYPE(Gmsh_) :: gmsh

CHARACTER(LEN=*), PARAMETER :: title = "small_tri3_mesh"
REAL(DFP), PARAMETER :: lx = 2.0
REAL(DFP), PARAMETER :: ly = 2.0
INTEGER(I4B), PARAMETER :: order = 1

REAL(DFP), PARAMETER :: meshSize = 1.0
REAL(DFP), PARAMETER :: corner(3) = 0.0_DFP
INTEGER(I4B) :: ierr
REAL(DFP) :: x, y, z, lc

TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5file

ierr = gmsh%Initialize()
ierr = gmsh%model%add(title)

x = corner(1); y = corner(2); z = corner(3); lc = meshSize
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=1)

x = x + lx; y = y; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=2)

x = x; y = y + ly; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=3)

x = corner(1); y = y; z = z; lc = lc
ierr = gmsh%model%geo%addPoint(x=x, y=y, z=z, meshSize=lc, tag=4)

ierr = gmsh%model%geo%addLine(1, 2, 1)
ierr = gmsh%model%geo%addLine(2, 3, 2)
ierr = gmsh%model%geo%addLine(3, 4, 3)
ierr = gmsh%model%geo%addLine(4, 1, 4)

ierr = gmsh%model%geo%addCurveLoop([1, 2, 3, 4], tag=1)

ierr = gmsh%model%geo%addPlaneSurface([1], 1)

ierr = gmsh%model%geo%synchronize()

ierr = gmsh%option%setNumber(VALUE=1, name="Mesh.SaveAll")
ierr = gmsh%model%mesh%generate(2)

ierr = gmsh%model%mesh%setOrder(order)

ierr = gmsh%WRITE(title//'.msh')

ierr = gmsh%Finalize()

CALL mshFile%Initiate(filename=title//'.msh', STATUS="OLD", ACTION="READ")
CALL mshFile%OPEN()
CALL mshFile%READ()
CALL hdf5file%Initiate(title//'.h5', MODE="NEW")
CALL hdf5file%OPEN()
CALL mshFile%Export(hdf5=hdf5file, group="")
CALL mshFile%DEALLOCATE()
CALL hdf5file%DEALLOCATE()

END PROGRAM main
```
