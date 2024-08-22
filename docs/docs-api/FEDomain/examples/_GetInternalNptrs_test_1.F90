
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
  INTEGER(I4B), ALLOCATABLE :: nptrs(:), ans(:)
  nptrs = obj%GetInternalNptrs(2)
  CALL HeapSort(nptrs)
  ans = [22, 23, 24, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
  CALL OK(ALL(nptrs .EQ. ans), "GetInternalNptrs: ")
END BLOCK
CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()
END PROGRAM main
