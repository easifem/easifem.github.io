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
  INTEGER(I4B), ALLOCATABLE :: nptrs(:)
  CALL Reallocate(nptrs, obj%GetTotalNodes())
  CALL obj%GetNptrs_(nptrs=nptrs, dim=2)
  CALL HeapSort(nptrs)
  CALL OK(ALL(nptrs .EQ. arange(1, obj%GetTotalNodes())), "GetNptrs: ")
END BLOCK

BLOCK
  INTEGER(I4B), ALLOCATABLE :: nptrs(:)
  CALL Reallocate(nptrs, obj%GetTotalNodes(1))
  CALL obj%GetNptrs_(nptrs=nptrs, dim=1)
  CALL HeapSort(nptrs)
  CALL OK(ALL(nptrs .EQ. arange(1, obj%GetTotalNodes(1))), "GetNptrs: ")
END BLOCK

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
