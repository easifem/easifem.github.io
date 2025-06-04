!> author: Vikas Sharma, Ph. D.
! date: 2025-06-01
! summary:  InitiateDynamicDataStructure method is tested in this example.

PROGRAM main
USE FEMesh_Class
USE HDF5File_Class
USE ExceptionHandler_Class, ONLY: e
use GlobalData

IMPLICIT NONE

TYPE(FEMesh_) :: obj
TYPE(HDF5File_) :: meshfile
CHARACTER(*), PARAMETER :: filename = "./meshdata/small_mesh.h5"

CALL e%SetQuietMode(.TRUE.)
CALL meshfile%Initiate(FileName=filename, MODE="READ")
!Open the mesh file

CALL meshfile%OPEN()
CALL obj%SetShowTime(.TRUE.)

!Initiate an instance of `Mesh_`
CALL obj%Initiate(hdf5=meshfile, group="/surfaceEntities_1")
! Initiate dynamic data structure
CALL obj%InitiateDynamicDataStructure()
!Display the content of mesh.
CALL obj%DisplayMeshInfo(filename)
CALL obj%DEALLOCATE()
CALL meshfile%DEALLOCATE()
END PROGRAM main
