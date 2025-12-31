PROGRAM main
USE GlobalData
USE ProductUtility
USE Test_Method
USE ApproxUtility
USE ReallocateUtility
USE BaseType, ONLY: math => TypeMathOpt
USE Display_Method

IMPLICIT NONE

CHARACTER(*), PARAMETER :: testname = "OtimeTilda_test_1"
REAL(DFP), ALLOCATABLE :: a(:), b(:), ans(:)
INTEGER(I4B) :: tsize

a = [1, 2]
b = [3, 4, 5]

CALL Reallocate(ans, SIZE(a) * SIZE(b))
CALL OTimesTilda_(a, b, ans, tsize, math%zero, math%one)

CALL Display(ans, "OtimeTilda_test_1 ans")

END PROGRAM main
