
! MODULE FUNCTION LegendreTransform3(n, f, quadType, x1, x2) RESULT(ans)

PROGRAM main
USE GlobalData
USE Display_Method
USE String_Class
USE Test_Method
USE LegendrePolynomialUtility
USE ReallocateUtility
USE ApproxUtility
USE BaseType

IMPLICIT NONE

CHARACTER(*), PARAMETER :: testname = "LegendreTransform:"
REAL(DFP), PARAMETER :: tol = 1.0E-10

INTEGER(I4B) :: n, tsize, quadType
REAL(DFP) :: fhat(100), exact(100), x1, x2
LOGICAL(LGT) :: isok
PROCEDURE(iface_1DFunction), POINTER :: fptr

! test 1
x1 = -1.0
x2 = 1.0
quadType = GaussLobatto
fptr => f1
n = 1
CALL LegendreTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                        ans=fhat, tsize=tsize)
exact = 0.0_DFP
exact(2) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat: ", full=.TRUE.)
  CALL Display(exact(1:tsize), "exact: ", full=.TRUE.)
END IF

! test 2
x1 = -1.0
x2 = 1.0
quadType = GaussLobatto
fptr => f2
n = 2
CALL LegendreTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                        ans=fhat, tsize=tsize)
exact = 0.0_DFP
exact(3) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat: ", full=.TRUE.)
  CALL Display(exact(1:tsize), "exact: ", full=.TRUE.)
END IF

! test 3
x1 = -1.0
x2 = 1.0
quadType = GaussLobatto
fptr => f3
n = 3
CALL LegendreTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                        ans=fhat, tsize=tsize)
exact = 0.0_DFP
exact(4) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat: ", full=.TRUE.)
  CALL Display(exact(1:tsize), "exact: ", full=.TRUE.)
END IF

! test 4
x1 = -1.0
x2 = 1.0
quadType = GaussLobatto
fptr => f4
n = 3
CALL LegendreTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                        ans=fhat, tsize=tsize)
exact = 0.0_DFP
exact(1:4) = [1.0, 2.0, 3.0, 4.0]
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat: ", full=.TRUE.)
  CALL Display(exact(1:tsize), "exact: ", full=.TRUE.)
END IF

CONTAINS
PURE FUNCTION f0(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = 1.0
END FUNCTION f0

PURE FUNCTION f1(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = x
END FUNCTION f1

PURE FUNCTION f2(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = 0.5 * (3.0 * x**2 - 1.0)
END FUNCTION f2

PURE FUNCTION f3(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = 0.5 * (5.0 * x**3 - 3.0 * x)
END FUNCTION f3

PURE FUNCTION f4(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = 1.0 * f0(x) + 2.0 * f1(x) + 3.0 * f2(x) + 4.0 * f3(x)
END FUNCTION f4

END PROGRAM main
