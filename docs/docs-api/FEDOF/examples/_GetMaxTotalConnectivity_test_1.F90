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
                           "../../Mesh/examples/meshdata/small_mesh.h5", &
                           baseContinuity = "H1", &
                           baseInterpolation = "Heirarchical"
INTEGER(I4B), PARAMETER :: order = 1

TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
LOGICAL(LGT) :: isok

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity=baseContinuity, &
                  baseInterpolation=baseInterpolation, &
                  order=order, mesh=meshptr)
!CALL fedof%Display("FEDOF:")
found = obj%GetMaxTotalConnectivity()
want = 3
isok = found == want

CALL OK(isok, "GetMaxTotalConnectivity")
IF (.NOT. isok) THEN
  CALL Display(found, "found: ")
  CALL Display(want, "want: ")
END IF

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
