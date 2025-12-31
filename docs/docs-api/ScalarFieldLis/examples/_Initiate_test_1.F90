!> author: Vikas Sharma, Ph. D.
! date: 2025-06-14
! summary: Testing import from toml
! In this example we will initiate the fedof outside the ScalarField

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
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./_Initiate_test_1.toml", &
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

CALL u%Display(myName//" u: ")
END PROGRAM main
