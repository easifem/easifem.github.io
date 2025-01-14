```fortran
PROGRAM main
    USE easifemBase
    USE easifemClasses
    USE LinearStaticCDR_Class
    IMPLICIT NONE
    TYPE(HDF5File_) :: hdf5file
    TYPE(MSHFile_) :: meshfile
    CHARACTER(LEN=*), PARAMETER :: mshfilename = "./mesh.msh"
    CHARACTER(LEN=*), PARAMETER :: hdf5filename = "./mesh.h5"

!! Open [[MSHFile_]] mesh file.

    CALL meshfile%Initiate(mshfilename, STATUS="OLD", ACTION="READ")
    CALL meshfile%Open()
    CALL meshfile%Read()

!! Open  an [[HDF5File_]], then we will export meshfile data to it.

    CALL hdf5file%Initiate(hdf5filename, "NEW")
    CALL hdf5file%Open()

!! Export the mesh data from [[MSHFile_]] to [[HDF5File_]].

    CALL meshfile%Export(hdf5file, "")

    CALL hdf5file%Deallocate()
    CALL meshfile%Deallocate()
END PROGRAM main
```
