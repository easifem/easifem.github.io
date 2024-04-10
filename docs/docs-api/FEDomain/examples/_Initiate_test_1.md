This example show how to initiate an instance of `Domain_` from the `HDF5File_` mesh/domain file.

```fortran
PROGRAM main
USE easifemBase
USE easifemClasses
USE FEDomain_Class
IMPLICIT NONE
TYPE(Domain_) :: dom
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh_3d.h5"

CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
```
