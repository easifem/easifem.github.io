<!-- markdownlint-disable MD041 MD013-->

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class

IMPLICIT NONE

TYPE(FEDomain_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = &
                  "../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"
INTEGER(I4B), ALLOCATABLE :: nptrs(:)
INTEGER(I4B) :: tnodes
TYPE(BoundingBox_) :: box

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

box = obj%GetBoundingBox()

CALL Reallocate(nptrs, obj%GetTotalNodes())
CALL obj%GetNptrsInBox_(nptrs=nptrs, tnodes=tnodes, box=box)

CALL OK(tnodes .EQ. SIZE(nptrs), "GetNptrsInBox_: ")

! CALL HeapSort(nptrs(1:tnodes))
! CALL OK(ALL(nptrs(1:tnodes) .EQ. arange(1, obj%GetTotalNodes())), "GetNptrsInBox_: ")

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
```
