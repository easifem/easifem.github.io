```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"

! Initiates the [[HDF5File_]] and OPEN it.
CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()

! Initiates an instance of [[Domain_]].
CALL obj%Initiate(meshfile, '')

BLOCK
  INTEGER(I4B), PARAMETER :: globalnode = 28
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)

  val = SORT(obj%GetNodeToElements(globalnode))
  exact = [36, 37, 38, 43, 44, 45]
  CALL OK(ALL(val .EQ. exact), "GetNodeToElements: ")
END BLOCK

BLOCK
  INTEGER(I4B), PARAMETER :: globalnode = 3
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)

  val = SORT(obj%GetNodeToElements(globalnode))
  exact = [91, 92]
  CALL OK(ALL(val .EQ. exact), "GetNodeToElements: ")
END BLOCK

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
