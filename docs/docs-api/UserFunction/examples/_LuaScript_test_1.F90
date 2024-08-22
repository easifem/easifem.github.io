PROGRAM main
USE UserFunction_Class
USE FPL
USE GlobalData
USE Display_Method
USE Test_Method
USE ApproxUtility

IMPLICIT NONE

TYPE(UserFunction_) :: obj
TYPE(ParameterList_) :: param
REAL(DFP) :: want, found, args(10)
CHARACTER(*), PARAMETER :: luaScript = "Function1.lua"
CHARACTER(*), PARAMETER :: luaFunction = "Function1"
CHARACTER(*), PARAMETER :: testname = "luascript test 1"
LOGICAL(LGT) :: isok

CALL FPL_Init
CALL param%Initiate()

CALL SetUserFunctionParam(param=param, name="test", returnType=Scalar, &
            argType=Space, luaScript=luaScript, luaFunctionName=luaFunction, &
                          numArgs=1, numReturns=1)

CALL obj%Initiate(param)

CALL obj%Set(luaScript=luaScript, luaFunctionName=luaFunction)
CALL obj%Display(testname)

args(1) = 1.0_DFP
want = 20.0 * args(1)
CALL obj%Get(val=found, args=args)

isok = found.approxeq.want
CALL OK(isok, testname)

CALL param%DEALLOCATE()
CALL FPL_Finalize
END PROGRAM main
