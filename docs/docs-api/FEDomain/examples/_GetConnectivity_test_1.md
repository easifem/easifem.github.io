```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
  CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5" 

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()

CALL obj%Initiate(meshfile, '')

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(35))
  exact = [1, 7, 19]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(35, 2))
  exact = [1, 7, 19]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(77))
  exact = [37, 38, 40]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(77, 2))
  exact = [37, 38, 40]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(7, 1))
  exact = [1, 7]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: exact(:), val(:)
  val = sort(obj%GetConnectivity(11, 1))
  exact = [2, 10]
  CALL OK(ALL(val .EQ. exact), "GetConnectivity: ")
END BLOCK

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
