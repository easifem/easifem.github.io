!> author: Vikas Sharma, Ph. D.
! date: 2024-05-24
! summary: Lagrange polynomial is tested in this example

PROGRAM main
USE FEDOF_Class
USE FEDomain_Class
USE AbstractMesh_Class
USE HDF5File_Class
USE Display_Method
USE GlobalData
USE Test_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
use BaseType, only: poly=>TypePolynomialOpt

IMPLICIT NONE

TYPE(FEDOF_) :: fedof
TYPE(FEDomain_) :: dom
CLASS(AbstractMesh_), POINTER :: meshptr => NULL()
CHARACTER(*), PARAMETER :: filename = &
                           "../../FEMesh/examples/meshdata/small_tri3_mesh.h5"

TYPE(HDF5File_) :: meshfile
INTEGER(I4B) :: found, want
INTEGER(I4B), PARAMETER :: order = 2, ipType = poly%monomial
CHARACTER(*), PARAMETER :: baseContinuity = "H1"
CHARACTER(*), PARAMETER :: baseInterpolation = "Lagrange"

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')

meshptr => dom%GetMeshPointer()

CALL fedof%Initiate(baseContinuity=baseContinuity, ipType=ipType, &
               baseInterpolation=baseInterpolation, order=order, mesh=meshptr)
CALL fedof%Display("FEDOF:")
found = fedof%GetTotalDOF()
want = meshptr%GetTotalNodes()
CALL IS(found, want, "Total DOF (order=2): ")

!CALL dom%Display("domain:")
CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

END PROGRAM main
