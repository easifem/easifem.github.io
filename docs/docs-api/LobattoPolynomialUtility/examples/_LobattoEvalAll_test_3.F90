PROGRAM main
USE GlobalData
USE Display_Method
USE LobattoPolynomialUtility

IMPLICIT NONE

INTEGER(I4B) :: n
REAL(DFP), ALLOCATABLE :: ans(:, :), x(:)
CHARACTER(*), PARAMETER :: testname = "Checking value at -1"

x = [-1.0]
n = 3; CALL callme

CONTAINS
SUBROUTINE callme
  ans = LobattoEvalAll(n=n, x=x)
  CALL display(ans, testname//" ans: ")
END SUBROUTINE callme
END PROGRAM main
