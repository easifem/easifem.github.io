<!-- markdownlint-disable MD041 MD013 MD033 -->

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
REAL(DFP) :: lim(6)

CALL meshfile%Initiate(filename, "READ")
CALL meshfile%OPEN()
CALL obj%Initiate(meshfile, '')

box = obj%GetBoundingBox()

CALL Reallocate(nptrs, obj%GetTotalNodes())
CALL obj%GetNptrsInBox_(nptrs=nptrs, tnodes=tnodes, box=box, &
                        isStrict=.FALSE.)
CALL OK(tnodes .EQ. SIZE(nptrs), "GetNptrsInBox_: ")

lim = [0.49_DFP, 1.01_DFP, 0.0_DFP, 1.01_DFP, 0.0_DFP, 0.0_DFP]
box = BoundingBox(obj%GetNSD(), lim)
CALL obj%GetNptrsInBox_(nptrs=nptrs, tnodes=tnodes, box=box, &
                        isStrict=.TRUE.)
CALL OK(tnodes .EQ. 15, "GetNptrsInBox_: ")

lim = [0.5_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP]
box = BoundingBox(obj%GetNSD(), lim)
CALL obj%GetNptrsInBox_(nptrs=nptrs, tnodes=tnodes, box=box, &
                        isStrict=.TRUE.)
CALL OK(tnodes .NE. 15, "GetNptrsInBox_: ")

CALL meshfile%DEALLOCATE()
CALL obj%DEALLOCATE()

END PROGRAM main
```
