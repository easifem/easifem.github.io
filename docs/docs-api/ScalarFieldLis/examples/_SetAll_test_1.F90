!> author: Vikas Sharma, Ph. D.
! date: 2025-12-04
! summary: SetAll
!
! INTERFACE
!   MODULE SUBROUTINE obj_SetAll(obj, VALUE, scale, addContribution)
!     CLASS(ScalarFieldLis_), INTENT(INOUT) :: obj
!     REAL(DFP), INTENT(IN) :: VALUE
!     !! value to be set or add
!     REAL(DFP), OPTIONAL, INTENT(IN) :: scale
!     !! scale
!     LOGICAL(LGT), OPTIONAL, INTENT(IN) :: addContribution
!     !! add or set
!   END SUBROUTINE obj_SetAll
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

CHARACTER(*), PARAMETER :: tomlFileName = "./_SetAll_test_1.toml", &
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
CALL u%SetAll( &
  VALUE=math%one, scale=math%two, addContribution=math%yes)

CALL u%Display(myName//" u: ")

END PROGRAM main
