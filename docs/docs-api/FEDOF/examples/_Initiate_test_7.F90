!> author: Vikas Sharma, Ph. D.
! date: 2025-06-01
! summary:  Testing initiate methods for Hierarchical DOF

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
                           "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
CHARACTER(:), ALLOCATABLE :: testname

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=1, mesh=meshptr)
testname = "H1 Hierarchical order=1"

CALL obj%Display(testname)

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
