PROGRAM main
USE FEMesh_Class
USE HDF5File_Class
USE GlobalData
USE Test_Method

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile

CHARACTER(LEN=*), PARAMETER :: filename = &
                    "../../Mesh/examples/meshdata/small_mesh_3d_two_region.h5"
INTEGER(I4B), PARAMETER :: nsd = 3

CALL meshfile%Initiate(FileName=filename, MODE="READ")

CALL meshfile%OPEN()

CALL obj%Initiate(hdf5=meshfile, dim=nsd)

CALL OK(.TRUE., "Initiate_4")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
