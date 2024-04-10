---
title: InitiateFaceConnectivity example 1
---

In this example we show the usage of `InitiateFaceConnectivity` method.

```fortran
PROGRAM main
  USE easifemBase
  USE easifemClasses
  IMPLICIT NONE
  TYPE( Mesh_ ) :: obj
  TYPE( HDF5File_ ) :: meshfile
  CHARACTER(*), PARAMETER :: filename="./meshdata/small_mesh_3d.h5"

  CALL e%SetQuietMode(.TRUE.)
  CALL meshfile%Initiate( FileName=filename, MODE="READ" )

  !Open the mesh file
  CALL meshfile%Open()

  CALL obj%SetShowTime(.TRUE.)

  !Initiate an instance of `Mesh_`
  CALL obj%Initiate(hdf5=meshfile, group="/volumeEntities_1" )

  !Initiate an edge connectivity 
  CALL obj%InitiateFaceConnectivity()

  !Display the content of mesh.
  CALL obj%DisplayMeshInfo(filename)

  CALL obj%DisplayElementData("ElementData:")

  CALL obj%Deallocate()
  CALL meshfile%Deallocate()
END PROGRAM main
```