PROGRAM main
USE GlobalData
USE IntegerUtility
USE Display_Method
USE Test_Method
USE ReallocateUtility

IMPLICIT NONE

CHARACTER(*), PARAMETER :: test_name = "GetMultiIndices test 3"
INTEGER(I4B), ALLOCATABLE :: found(:, :), want(:, :)
INTEGER(I4B) :: nrow, ncol, n, d
LOGICAL(LGT) :: isok

n = 3; d = 2
CALL test_me

n = 4; d = 2
CALL test_me

n = 5; d = 2
CALL test_me

n = 5; d = 3
CALL test_me

CONTAINS
SUBROUTINE test_me
  want = GetMultiIndices(n, d, .TRUE.)

  nrow = d + 1
  ncol = SIZE(n, d, .TRUE.)
  CALL Reallocate(found, nrow, ncol)
  CALL GetMultiIndices_(n, d, .TRUE., found, nrow, ncol)

  isok = ALL(found == want)
  CALL OK(isok, test_name)
END SUBROUTINE test_me

END PROGRAM main
