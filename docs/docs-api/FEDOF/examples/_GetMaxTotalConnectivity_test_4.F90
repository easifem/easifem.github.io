!> author: Vikas Sharma, Ph. D.
! date: 2025-06-08
! summary:  Testing GetMaxTotalConnectivity method of FEDOF class

PROGRAM main
USE BaseType, ONLY: TypeQuadratureOpt
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
CHARACTER(*), PARAMETER :: &
  filename = "../../FEMesh/examples/meshdata/small_tri6_mesh.h5", &
  baseContinuity = "H1", &
  baseInterpolation = "Lagrange", &
  testname = baseContinuity//" "//baseInterpolation// &
  " GetMaxTotalConnectivity test"

INTEGER(I4B) :: order = 1

TYPE(HDF5File_) :: meshfile
LOGICAL(LGT) :: isok

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL meshfile%Initiate(filename, mode="READ")
CALL meshfile%OPEN()
CALL dom%Initiate(meshfile, '')
meshptr => dom%GetMeshPointer()

CALL test1
CALL test2
CALL test3

CALL dom%DEALLOCATE()
CALL meshfile%DEALLOCATE()

CONTAINS

SUBROUTINE test1
  INTEGER(I4B) :: found, want

  order = 1

  CALL obj%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=meshptr, &
                    ipType=TypeQuadratureOpt%equidistance)

  found = obj%GetMaxTotalConnectivity()
  want = 3
  isok = found .EQ. want

  CALL IS(found, want, testname//" test 1")
END SUBROUTINE test1

SUBROUTINE test2
  INTEGER(I4B) :: found, want

  order = 2
  CALL obj%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=meshptr, &
                    ipType=TypeQuadratureOpt%equidistance)

  found = obj%GetMaxTotalConnectivity()
  want = 6
  isok = found .EQ. want

  CALL IS(found, want, testname//" test 2")
END SUBROUTINE test2

SUBROUTINE test3
  INTEGER(I4B) :: found, want

  order = 3
  CALL obj%Initiate(baseContinuity=baseContinuity, &
                    baseInterpolation=baseInterpolation, &
                    order=order, mesh=meshptr, &
                    ipType=TypeQuadratureOpt%equidistance)

  found = obj%GetMaxTotalConnectivity()
  want = 10
  isok = found .EQ. want

  CALL IS(found, want, testname//" test 3")
END SUBROUTINE test3

END PROGRAM main
