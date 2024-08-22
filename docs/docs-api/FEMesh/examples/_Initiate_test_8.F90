PROGRAM main
USE FEMesh_Class
USE HDF5File_Class
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = "../../Mesh/examples/meshdata/big_big_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2

CALL e%SetQuietMode(.TRUE.)

CALL meshfile%Initiate(FileName=filename, MODE="READ")

!Open the mesh file
CALL meshfile%OPEN()
CALL obj%SetShowTime(.TRUE.)
!Initiate an instance of `Mesh_`
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")
!Display the content of mesh.
CALL obj%DisplayMeshInfo(filename)

CALL ok(.TRUE., "Initiate_8")
CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
