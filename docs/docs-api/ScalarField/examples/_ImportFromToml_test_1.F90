!> author: Vikas Sharma, Ph. D.
! date: 2025-06-14
! summary: Testing import from toml
! In this example we will initiate the fedof outside the ScalarField

PROGRAM main
USE AbstractField_Class
USE FEDomain_Class
USE GlobalData
USE ScalarField_Class
USE FEDOF_Class
USE Display_Method
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

CHARACTER(*), PARAMETER :: tomlFileName = "./ImportFromToml1.toml", &
                           myName = "main", &
                           modName = "_ImportFromToml_test_1.F90"

TYPE(FEDomain_) :: dom
TYPE(FEDOF_) :: fedof, geofedof
TYPE(ScalarField_) :: u

CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)
CALL dom%ImportFromToml(fileName=tomlFileName, tomlName="domain")
CALL u%ImportFromToml(fedof=fedof, geofedof=geofedof, dom=dom, &
                      fileName=tomlFileName, tomlName="u")

CALL u%Display(myName//" u: ")
END PROGRAM main
