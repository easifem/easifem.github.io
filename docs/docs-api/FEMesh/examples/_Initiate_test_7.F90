PROGRAM main
USE FEMesh_Class
USE HDF5File_Class
USE GlobalData
USE Test_Method

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = "../../Mesh/examples/meshdata/big_mesh.h5"
INTEGER(I4B), PARAMETER :: nsd = 2

CALL meshfile%Initiate(FileName=filename, MODE="READ")

!Open the mesh file
CALL meshfile%OPEN()
CALL obj%SetShowTime(.TRUE.)

!Initiate an instance of `Mesh_`
CALL obj%Initiate(hdf5=meshfile, dim=nsd)

!Display the content of mesh.
CALL obj%DisplayMeshInfo(filename)

CALL ok(.TRUE., "Initiate_7")

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
