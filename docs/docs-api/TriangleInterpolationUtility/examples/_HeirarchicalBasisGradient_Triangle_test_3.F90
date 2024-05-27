#define fun HeirarchicalBasis_Triangle

PROGRAM main
USE easifembase
IMPLICIT NONE

INTEGER(I4B) :: cnt, n
CHARACTER(*), PARAMETER :: refTriangle = "UNIT"

REAL(DFP), ALLOCATABLE :: found(:, :, :), want(:, :, :)
INTEGER(I4B) :: ii, order, pe1, pe2, pe3
LOGICAL(LGT) :: isok
REAL(DFP), PARAMETER :: dx = 1.0E-4, tol = 1.0E-3
REAL(DFP) :: x1(2, 1), x2(2, 1)

order = 3; pe1 = 2; pe2 = 1; pe3 = 3

!! check the derivative wrt x

! x1(:, 1) = [0.25_DFP, 0.25_DFP]
CALL Display("Enter x: ")
READ (*, *) x1(1, 1)
CALL Display("Enter y: ")
READ (*, *) x1(2, 1)

found = HeirarchicalBasisGradient_Triangle( &
        order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
        xij=x1, refTriangle=refTriangle)

want = found

DO ii = 1, 2
  x2 = x1; x2(ii, :) = x2(ii, :) + dx

  want(:, :, ii) = (fun(order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
                        xij=x2, refTriangle=refTriangle) &
                    - fun(order=order, pe1=pe1, pe2=pe2, pe3=pe3, &
                          xij=x1, refTriangle=refTriangle)) / dx
END DO

isok = ALL(softeq(found, want, tol))

CALL ok(isok, "Gradient wrt. x : ")

IF (.NOT. isok) THEN
  CALL Display(found - want, "error ")
END IF

END PROGRAM main
