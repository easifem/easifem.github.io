PROGRAM main
USE FEMesh_Class, only: FEMesh_
USE HDF5File_Class, only: HDF5File_
USE GlobalData, ONLY: I4B
USE Test_Method, ONLY: OK

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(LEN=*), PARAMETER :: filename = &
                       "../../Mesh/examples/meshdata/small_mesh_two_region.h5"
INTEGER(I4B), PARAMETER :: nsd = 2
INTEGER(I4B), PARAMETER :: entities(2) = [1, 2]

CALL meshfile%Initiate(FileName=filename, MODE="READ")

CALL meshfile%OPEN()

CALL obj%Initiate(hdf5=meshfile, dim=nsd, entities=entities)

CALL OK(.TRUE., "Initiate")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
