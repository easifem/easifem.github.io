PROGRAM main
USE GlobalData
USE UserFunction_Class
USE FPL, ONLY: FPL_Init, FPL_Finalize, ParameterList_
USE BaseType
USE BaseType, ONLY: varopt => TypeFEVariableOpt
USE Test_Method
USE ApproxUtility
USE ExceptionHandler_Class, ONLY: e, EXCEPTION_INFORMATION

IMPLICIT NONE

TYPE(UserFunction_) :: obj
! REAL(DFP) :: val
TYPE(ParameterList_) :: param
CHARACTER(*), PARAMETER :: testname = "Userfunction test 4"
REAL(DFP) :: want, found, args(10)
LOGICAL(LGT) :: isok
PROCEDURE(iface_ScalarFunction), POINTER :: fptr => NULL()

CALL e%setQuietMode(EXCEPTION_INFORMATION, .TRUE.)

CALL FPL_Init
CALL param%Initiate()

CALL SetUserFunctionParam(param=param, name="test", returnType=varopt%scalar,&
                          argType=varopt%spacetime, numArgs=4, numReturns=1)

CALL obj%Initiate(param)

fptr => f4
CALL obj%Set(scalarFunction=fptr)

args = 0.0_DFP
CALL obj%Get(val=found, args=args)
want = 0.0_DFP
isok = found.approxeq.want
CALL OK(isok, testname)

args = 1.0_DFP
CALL obj%Get(val=found, args=args)
want = 4.0_DFP
isok = found.approxeq.want
CALL OK(isok, testname)

fptr => f3
CALL obj%Set(scalarFunction=fptr)

args = 1.0_DFP
CALL obj%Get(val=found, args=args)
want = 3.0_DFP
isok = found.approxeq.want
CALL OK(isok, testname)

fptr => f2
CALL obj%Set(scalarFunction=fptr)
args = 1.0_DFP
CALL obj%Get(val=found, args=args)
want = 2.0_DFP
isok = found.approxeq.want
CALL OK(isok, testname)

CALL FPL_Finalize
CALL param%DEALLOCATE()

CONTAINS
PURE FUNCTION f4(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(in) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2 + x(2)**2 + x(3)**2 + x(4)**2
END FUNCTION f4

PURE FUNCTION f3(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(in) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2 + x(2)**2 + x(3)**2
END FUNCTION f3

PURE FUNCTION f2(x) RESULT(ans)
  REAL(DFP), OPTIONAL, INTENT(in) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2 + x(2)**2
END FUNCTION f2
END PROGRAM main
