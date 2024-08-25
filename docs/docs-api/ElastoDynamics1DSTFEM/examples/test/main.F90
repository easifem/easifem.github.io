PROGRAM main
USE GlobalData
USE ElastoDynamics1DSTFEM_Class
USE FPL
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION
USE Display_Method

IMPLICIT NONE

TYPE(ElastoDynamics1DSTFEM_) :: obj
CHARACTER(*), PARAMETER :: testname = "dev test", &
                           tomlName = "kernel", &
                           filename = "config.toml"

CALL FPL_Init

CALL obj%ImportFromToml(tomlName=tomlName, filename=filename)

IF (obj%verbosity .EQ. 0) THEN
  CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)
END IF

CALL obj%Set()
CALL obj%Display(testname)
CALL obj%Run()

CALL FPL_Finalize

END PROGRAM main
