MODULE myfunctions
USE GlobalData, ONLY: DFP, I4B, LGT

IMPLICIT NONE

PRIVATE

PUBLIC :: force_function, BottomBC, TopBC, LeftBC, RightBC

CONTAINS

FUNCTION force_function(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = 4.0_DFP
END FUNCTION force_function

PURE FUNCTION BottomBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2
END FUNCTION BottomBC

PURE FUNCTION TopBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(1)**2 + 2 * x(1)
END FUNCTION TopBC

PURE FUNCTION RightBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(2)**2 + 2 * x(2)
END FUNCTION RightBC

PURE FUNCTION LeftBC(x) RESULT(ans)
  REAL(DFP), INTENT(IN) :: x(:)
  REAL(DFP) :: ans
  ans = x(2)**2
END FUNCTION LeftBC

END MODULE myfunctions
