PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
                           "../../Mesh/examples/meshdata/small_mesh.h5"
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=1, mesh=meshptr)
!CALL fedof%Display("FEDOF:")
found = obj%GetTotalDOF()
want = meshptr%GetTotalNodes()
CALL OK(found == want, "Total DOF (order=1): ")

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=2, mesh=meshptr)
found = obj%GetTotalDOF()
want = meshptr%GetTotalNodes() + meshptr%GetTotalFaces()
CALL OK(found == want, "Total DOF (order=2): ")

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=3, mesh=meshptr)
found = obj%GetTotalDOF()
want = meshptr%GetTotalNodes() + 2*meshptr%GetTotalFaces() + meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=3): ")

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=4, mesh=meshptr)
found = obj%GetTotalDOF()
want = meshptr%GetTotalNodes() + 3*meshptr%GetTotalFaces() + 3*meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=4): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
