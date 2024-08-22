PROGRAM main
USE GlobalData
USE UserFunction_Class
USE FPL, ONLY: FPL_Init, FPL_Finalize, ParameterList_
USE BaseType, ONLY: varopt => TypeFEVariableOpt
USE Test_Method
USE ApproxUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(UserFunction_) :: obj
! REAL(DFP) :: val
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: testname = "Userfunction test 2"
REAL(DFP) :: want, found, args(10)
LOGICAL(LGT) :: isok

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_Init
CALL param%Initiate()

CALL SetUserFunctionParam(param=param, name="test", returnType=varopt%scalar,&
                          argType=varopt%constant, numArgs=0, numReturns=1)

CALL obj%Initiate(param)

want = 12.0_DFP
CALL obj%Set(scalarValue=want)

CALL obj%Get(val=found)
isok = found.approxeq.want
CALL OK(isok, testname)

CALL obj%Get(val=found, args=args)
isok = found.approxeq.want
CALL OK(isok, testname)

CALL FPL_Finalize
CALL param%DEALLOCATE()
END PROGRAM main
