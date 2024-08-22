Testing for triangle mesh two regions.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
IMPLICIT NONE
TYPE(FEDomain_) :: dom
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_tri3_mesh_two_region.h5"

CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')
CALL dom%Display("domain:")

CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
```
