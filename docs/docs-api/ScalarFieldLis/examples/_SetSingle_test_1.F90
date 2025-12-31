!> author: Vikas Sharma, Ph. D.
! date: 2025-12-04
! summary: SetSingle
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetSingle(obj, indx, VALUE, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     INTEGER(I4B), INTENT(IN) :: indx
!     REAL(DFP), INTENT(IN) :: VALUE
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!   END SUBROUTINE obj_SetSingle
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

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./_SetSingle_test_1.toml", &
                           myName = "main", &
                           modName = "_Initiate_test_1.F90", &
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

!   MODULE SUBROUTINE obj_SetSingle(obj, indx, VALUE, scale, addContribution)
CALL u%SetSingle( &
  indx=1, VALUE=math%one, scale=math%two, addContribution=math%yes)

CALL u%Display(myName//" u: ")

END PROGRAM main
