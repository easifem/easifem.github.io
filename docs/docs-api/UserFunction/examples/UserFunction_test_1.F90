PROGRAM main
USE GlobalData
USE UserFunction_Class
USE FPL, ONLY: FPL_Init, FPL_Finalize, ParameterList_
USE BaseType, ONLY: varopt => TypeFEVariableOpt

IMPLICIT NONE

TYPE(UserFunction_) :: obj
! REAL(DFP) :: val
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: testname = "Userfunction test 1"

CALL FPL_Init
CALL param%Initiate()

CALL SetUserFunctionParam(param=param, name="test", returnType=varopt%scalar,&
                          argType=varopt%space, numArgs=1, numReturns=1)

CALL obj%Initiate(param)

CALL obj%Display(testname)

CALL FPL_Finalize
CALL param%DEALLOCATE()
END PROGRAM main
