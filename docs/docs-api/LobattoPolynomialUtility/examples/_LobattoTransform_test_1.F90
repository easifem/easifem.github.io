! Lobatto transform

PROGRAM main
USE GlobalData
USE Test_Method
USE ApproxUtility
USE LobattoPolynomialUtility
USE BaseType
USE Display_Method

IMPLICIT NONE

CHARACTER(*), PARAMETER :: testname = "LobattoTransform"
INTEGER(I4B) :: n, tsize, quadType
REAL(DFP) :: x1, x2, fhat(100), exact(100)
REAL(DFP), PARAMETER :: tol = 1.0E-8
PROCEDURE(iface_1DFunction), POINTER :: fptr
LOGICAL(LGT) :: isok

n = 4
x1 = -1.0
x2 = 1.0
quadType = Gauss
fptr => Lobatto4
CALL LobattoTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                       ans=fhat, tsize=tsize)
exact = 0.0
exact(n + 1) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat:")
  CALL Display(exact(1:tsize), "exact:")
END IF

n = 5
x1 = -1.0
x2 = 1.0
quadType = Gauss
fptr => Lobatto5
CALL LobattoTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                       ans=fhat, tsize=tsize)
exact = 0.0
exact(n + 1) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat:")
  CALL Display(exact(1:tsize), "exact:")
END IF

n = 5
x1 = -1.0
x2 = 1.0
quadType = Gauss
fptr => f1
CALL LobattoTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                       ans=fhat, tsize=tsize)
exact = 0.0
exact(1:n + 1) = 1.0
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat:")
  CALL Display(exact(1:tsize), "exact:")
END IF

n = 1
x1 = -1.0
x2 = 1.0
quadType = Gauss
fptr => f2
CALL LobattoTransform_(n=n, f=fptr, quadType=quadType, x1=x1, x2=x2, &
                       ans=fhat, tsize=tsize)
exact = 0.0
exact(1:2) = [0.0, 2.0]
isok = ALL(fhat(1:tsize) .APPROXEQ.exact(1:tsize))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(fhat(1:tsize), "fhat:")
  CALL Display(exact(1:tsize), "exact:")
END IF

CONTAINS
PURE FUNCTION f1(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = Lobatto0(x) + Lobatto1(x) + Lobatto2(x) + Lobatto3(x) + Lobatto4(x) + Lobatto5(x)
END FUNCTION f1

PURE FUNCTION f2(x) RESULT(y)
  REAL(DFP), INTENT(IN) :: x
  REAL(DFP) :: y
  y = 1.0 + x
END FUNCTION f2
END PROGRAM main
