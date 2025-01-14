This example shows how to export mesh data from [[MSHFile_]] to [[HDF5File_]]

``` fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE StaticDiffusion_Class
    IMPLICIT NONE
    TYPE(HDF5File_) :: hdf5file
    TYPE(MSHFile_) :: meshfile
    CHARACTER(LEN=*), PARAMETER :: mshfilename = "./mesh.msh"
    CHARACTER(LEN=*), PARAMETER :: hdf5filename = "./mesh.h5"
```

!!! notes ""
    Open [[MSHFile_]] mesh file.

```fortran
    CALL meshfile%Initiate(mshfilename, STATUS="OLD", ACTION="READ")
    CALL meshfile%Open()
    CALL meshfile%Read()
```

!!! note ""
    Open an [[HDF5File_]], then we will export meshfile data to it.

```fortran
    CALL hdf5file%Initiate(hdf5filename, "NEW")
    CALL hdf5file%Open()
```

!!! notes ""
    Export the mesh data from [[MSHFile_]] to [[HDF5File_]].

```fortran
    CALL meshfile%Export(hdf5file, "")
```

!!! settings "Cleanup"

```fortran
    CALL hdf5file%Deallocate()
    CALL meshfile%Deallocate()
END PROGRAM main
```
