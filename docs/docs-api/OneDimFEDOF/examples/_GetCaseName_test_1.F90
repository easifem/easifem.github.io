!> author: Vikas Sharma, Ph. D.
! date: 2025-06-07
! summary:  Get case name

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE BaseType, ONLY: TypeQuadratureOpt

IMPLICIT NONE

TYPE(FEDOF_) :: obj
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
                           "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"
TYPE(HDF5File_) :: meshfile
CHARACTER(6) :: found, want

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Heirarchical", &
                  order=1, mesh=meshptr)
found = obj%GetCaseName()
want = "H1HEIR"
CALL OK(found == want, "GetCaseName H1HEIR: ")

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Hierarchical", &
                  order=1, mesh=meshptr)
found = obj%GetCaseName()
want = "H1HIER"
CALL OK(found == want, "GetCaseName H1HIER: ")

CALL obj%Initiate(baseContinuity="H1", baseInterpolation="Lagrange", &
                 order=1, mesh=meshptr, ipType=TypeQuadratureOpt%equidistance)
found = obj%GetCaseName()
want = "H1LAGR"
CALL OK(found == want, "GetCaseName H1LAGR: ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
