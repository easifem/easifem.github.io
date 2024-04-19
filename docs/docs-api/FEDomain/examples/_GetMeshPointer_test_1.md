<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CLASS(AbstractMesh_), pointer :: meshptr => null()
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

meshptr => obj%GetMeshPointer(3)
CALL OK(.not. associated(meshptr) , "GetMeshPointer: ")

meshptr => obj%GetMeshPointer(2)
CALL OK(associated(meshptr) , "GetMeshPointer: ")

meshptr => obj%GetMeshPointer(1)
CALL OK(associated(meshptr) , "GetMeshPointer: ")

meshptr => obj%GetMeshPointer(0)
CALL OK(associated(meshptr) , "GetMeshPointer: ")

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
