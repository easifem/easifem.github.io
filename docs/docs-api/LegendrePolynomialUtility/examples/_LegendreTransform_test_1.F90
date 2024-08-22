! - This example shows the usage of `LegendreTransform` method.
! - This routine performs the forward Legendre transform.

PROGRAM main
USE GlobalData
USE Display_Method
USE String_Class
USE Test_Method
USE LegendrePolynomialUtility
USE UltrasphericalPolynomialUtility
USE ReallocateUtility
USE ApproxUtility

IMPLICIT NONE

INTEGER(I4B) :: n
REAL(DFP), ALLOCATABLE :: uhat(:), u(:), pt(:), &
                          wt(:), exact(:)

CHARACTER(*), PARAMETER :: testname = "LegendreTransform:"

REAL(DFP), PARAMETER :: tol = 1.0E-10

INTEGER(I4B), PARAMETER :: quadType = GaussLobatto

LOGICAL(LGT) :: isok

n = 10
CALL Reallocate(pt, n + 1, wt, n + 1)
CALL LegendreQuadrature(n=n + 1, pt=pt, wt=wt, quadType=quadType)
u = LegendreEval(n=5_I4B, x=pt)
uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
uhat(6) = uhat(6) - 1.0_DFP
isok = SOFTEQ(NORM2(uhat), 0.0_DFP, tol)
CALL OK(isok, testname)

n = 10
CALL Reallocate(pt, n + 1, wt, n + 1)
CALL LegendreQuadrature(n=n + 1, pt=pt, wt=wt, quadType=quadType)
u = SIN(4.0_DFP * pi * pt)
uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
exact = UltrasphericalTransform(n=n, lambda=0.5_DFP, coeff=u, x=pt, w=wt, &
                                quadType=quadType)
isok = ALL(SOFTEQ(uhat, exact, tol))
CALL OK(isok, testname)
IF (.NOT. isok) THEN
  CALL Display(uhat, "uhat: ", full=.TRUE.)
  CALL Display(exact, "exact: ", full=.TRUE.)
END IF

n = 3
CALL Reallocate(pt, n + 1, wt, n + 1)
CALL LegendreQuadrature(n=n + 1, pt=pt, wt=wt, quadType=quadType)
u = pt + pt**2 + pt**3

uhat = LegendreTransform(n=n, coeff=u, x=pt, w=wt, quadType=quadType)
CALL Display(uhat, "uhat: ", full=.TRUE.)

END PROGRAM main
