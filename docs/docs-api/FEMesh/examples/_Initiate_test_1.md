This example shows how to convert a mesh from gmsh format to hdf5 format which is necessary to initiate the FEMesh object.

```fortran
PROGRAM main
USE MSHFile_Class
USE HDF5File_Class

IMPLICIT NONE

TYPE(MSHFile_) :: mshFile
TYPE(HDF5File_) :: hdf5file

CALL mshFile%Initiate( filename="./meshdata/small_mesh.msh", STATUS="OLD", ACTION="READ" )

CALL mshFile%OPEN()

CALL mshFile%READ()

CALL hdf5file%Initiate("./meshdata/small_mesh.h5", MODE="NEW")

CALL hdf5file%OPEN()

CALL mshFile%Export(hdf5=hdf5file, group="")

CALL mshFile%DEALLOCATE()
CALL hdf5file%DEALLOCATE()
END PROGRAM main
```
