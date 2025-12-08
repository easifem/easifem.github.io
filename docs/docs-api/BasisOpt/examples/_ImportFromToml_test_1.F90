!> author: Vikas Sharma, Ph. D.
! date: 2025-07-12
! summary:  testing import from toml

PROGRAM main

USE GlobalData
USE BasisOpt_Class
USE BaseType, ONLY: varopt => TypeFEVariableOpt, &
                    elemnameopt => TypeElemNameOpt, &
                    ipopt => TypeInterpolationOpt, &
                    polyopt => TypePolynomialOpt
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

! Internal variables
TYPE(BasisOpt_) :: obj
CHARACTER(*), PARAMETER :: toml_filename = "./toml/BasisOpt.toml"

! tests starts here
! CALL e%SetQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL test1

CONTAINS

SUBROUTINE test1
  CALL obj%ImportFromToml(filename=toml_filename, tomlName='test1')
  CALL obj%Display("BasisOpt: ")
END SUBROUTINE test1

END PROGRAM main

