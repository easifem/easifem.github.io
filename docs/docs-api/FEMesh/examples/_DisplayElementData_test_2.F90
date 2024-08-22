PROGRAM main
USE FEMesh_Class, ONLY: FEMesh_
USE HDF5File_Class, ONLY: HDF5File_
USE GlobalData, ONLY: I4B

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
INTEGER(I4B), ALLOCATABLE :: nptrs(:)
INTEGER(I4B) :: iel, ii
CHARACTER(LEN=*), PARAMETER :: filename = "../../Mesh/examples/meshdata/small_quad4_mesh.h5"

CALL meshfile%Initiate(FileName=filename, MODE="READ")
CALL meshfile%OPEN()
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")
CALL obj%DisplayElementData("element data:", globalElement=1, islocal=.TRUE.)

CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
