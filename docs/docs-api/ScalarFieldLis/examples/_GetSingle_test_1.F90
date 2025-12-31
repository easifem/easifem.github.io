!> author: Vikas Sharma, Ph. D.
! date: 2025-12-04
! summary: GetSingle
!
! INTERFACE
!   MODULE SUBROUTINE obj_GetSingle(obj, indx, VALUE)
!     CLASS(AbstractNodeField_), INTENT(IN) :: obj
!     INTEGER(I4B), INTENT(IN) :: indx
!     REAL(DFP), INTENT(OUT) :: VALUE
!   END SUBROUTINE obj_GetSingle
! END INTERFACE

PROGRAM main
USE AbstractField_Class
USE FEDomain_Class
USE GlobalData
USE ScalarField_Class
USE ScalarFieldLis_Class
USE FieldFactory, ONLY: ScalarFieldFactory
USE EngineOpt_Class, ONLY: TypeEngineOpt
USE FEDOF_Class
USE Display_Method
USE BaseType, ONLY: math => TypeMathOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE Test_Method
USE ApproxUtility

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./_GetSingle_test_1.toml", &
                           myName = "main", &
                           modName = "_GetSingle_test_1.F90", &
                           engine = "LIS_OMP"
TYPE(FEDomain_) :: dom
TYPE(FEDOF_) :: fedof, geofedof
CLASS(ScalarField_), POINTER :: u

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")

u => ScalarFieldFactory(engine)
CALL u%ImportFromToml( &
  fedof=fedof, geofedof=geofedof, dom=dom, fileName=tomlFileName, &
  tomlName="u")

CALL test1

CONTAINS

SUBROUTINE test1
  REAL(DFP) :: found, want
  LOGICAL(LGT) :: isok

  want = math%two
  CALL u%SetSingle(indx=1, VALUE=want)
  CALL u%GetSingle(indx=1, VALUE=found)
  isok = want.approxeq.found
  CALL OK(isok, myName)
END SUBROUTINE test1

END PROGRAM main
