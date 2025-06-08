!> author: Vikas Sharma, Ph. D.
! date: 2025-06-06
! summary: This method tests the COPY method for FEDOF class.

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

TYPE(FEDOF_) :: obj, obj2
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: &
  filename = "../../FEMesh/examples/meshdata/small_tri3_mesh.h5", &
  baseInterpolation = "Heirarchical", &
  baseContinuity = "H1"

TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=1, mesh=meshptr)
!CALL fedof%Display("FEDOF:")
CALL obj2%copy(obj)

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes()
CALL OK(found == want, "Total DOF (order=1): ")

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=2, mesh=meshptr)
obj2 = obj
found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + meshptr%GetTotalFaces()
CALL OK(found == want, "Total DOF (order=2): ")

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=3, mesh=meshptr)
CALL obj2%Copy(obj)

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + 2*meshptr%GetTotalFaces() + meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=3): ")

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, order=4, mesh=meshptr)
obj2 = obj

found = obj2%GetTotalDOF()
want = meshptr%GetTotalNodes() + 3*meshptr%GetTotalFaces() + 3*meshptr%GetTotalCells()
CALL OK(found == want, "Total DOF (order=4): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
