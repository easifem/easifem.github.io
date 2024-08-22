PROGRAM main
USE UserFunction_Class
USE GlobalData
USE FPL
USE Test_Method
USE ApproxUtility

IMPLICIT NONE

TYPE(UserFunction_) :: obj
! REAL(DFP) :: val
CHARACTER(*), PARAMETER :: tomlFileName = "./UserFunction.toml"
CHARACTER(*), PARAMETER :: tomlName = "userFunction_lua"
CHARACTER(*), PARAMETER :: testname = "import from toml"
REAL(DFP) :: args(10), found, want
LOGICAL(LGT) :: isok

CALL FPL_Init
CALL obj%ImportFromToml(filename=tomlFileName, tomlName=tomlName)
CALL obj%Display("ImportFromToml :")

args(1) = 1.0
want = 20 * args(1)
CALL obj%Get(val=found, args=args)

isok = found.approxeq.want
CALL OK(isok, testname)

! CALL Display(val, "val: ")

CALL FPL_Finalize
END PROGRAM main
