```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename="../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"
REAL(DFP) :: ans(3, 4)

ans(:, 1) = [0, 0, 0]
ans(:, 2) = [1, 0, 0]
ans(:, 3) = [2, 0, 0]
ans(:, 4) = [0, 1, 0]

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

BLOCK
  REAL(DFP), ALLOCATABLE :: xij(:, :)
  CALL Reallocate(xij, 3, obj%GetTotalNodes())
  CALL obj%GetNodeCoord(xij)
  CALL OK(ALL(xij(1:3, 1:4) .approxeq.ans(1:3, 1:4)), "GetNodeCoord: ")
END BLOCK

BLOCK
  REAL(DFP), ALLOCATABLE :: xij(:, :)
  CALL Reallocate(xij, 2, obj%GetTotalNodes())
  CALL obj%GetNodeCoord(xij)
  CALL OK(ALL(xij(1:2, 1:4) .approxeq.ans(1:2, 1:4)), "GetNodeCoord: ")
END BLOCK

BLOCK
  REAL(DFP) :: xij(2, 4)

  CALL obj%GetNodeCoord(xij, [1, 2, 3, 4])
  CALL OK(ALL(xij(1:2, 1:4) .approxeq.ans(1:2, 1:4)), "GetNodeCoord: ")
END BLOCK

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
```
