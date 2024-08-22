PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE ReallocateUtility

IMPLICIT NONE

TYPE(FEDOF_) :: fedof
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
  & "../../Mesh/examples/meshdata/small_mesh.h5"
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
INTEGER(I4B), ALLOCATABLE :: cellOrder(:)

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()
CALL Reallocate(cellOrder, meshptr%GetTotalCells())
cellOrder = 1

CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=cellOrder, mesh=meshptr)
!CALL fedof%Display("FEDOF:")
found = fedof%GetTotalDOF()
want = meshptr%GetTotalNodes()
CALL OK(found == want, "Total DOF (order=1): ")

cellOrder = 2
CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=cellOrder, mesh=meshptr)
found = fedof%GetTotalDOF()
want = meshptr%GetTotalNodes() + meshptr%GetTotalFaces()
CALL OK(found == want, "Total DOF (order=2): ")

cellOrder = 3
CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=cellOrder, mesh=meshptr)
found = fedof%GetTotalDOF()
want = meshptr%GetTotalNodes() + 2*meshptr%GetTotalFaces() + meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=3): ")

cellOrder = 4
CALL fedof%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                    order=cellOrder, mesh=meshptr)
found = fedof%GetTotalDOF()
want = meshptr%GetTotalNodes() + 3*meshptr%GetTotalFaces() + 3*meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=4): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
