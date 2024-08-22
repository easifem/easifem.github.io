PROGRAM main

USE GlobalData
USE LineInterpolationUtility
USE ReferenceLine_Method
USE Test_Method
USE Display_Method
USE ZerosUtility
USE ApproxUtility

IMPLICIT NONE

INTEGER(I4B) :: order
REAL(dfp), PARAMETER :: tol = 1.0E-10
REAL(dfp), ALLOCATABLE :: x(:), coeff(:, :), ans(:), xij(:, :)
CHARACTER(len=*), PARAMETER :: layout = "VEFC"
INTEGER(i4b) :: ipType

!! "INCREASING"
x = [0, 1]
order = 4_I4B
iptype = Equidistance
xij = reshape(InterpolationPoint_Line(order=order, iptype=iptype, layout=layout, xij=x), [1, order+1])

! CALL display(xij, "xij: ")
coeff = zeros(order + 1, order + 1, 1.0_DFP)

ans = LagrangeEvalAll_Line(order, xij(1, 1), xij, coeff, firstCall=.TRUE.)
CALL ok(ans(1) .approxeq.1.0_DFP, "tests(1):")
CALL ok(ALL(ans(2:) .approxeq.0.0_DFP), "tests(2):")

ans = LagrangeEvalAll_Line(order, xij(1, 2), xij, coeff, firstCall=.FALSE.)
CALL ok(softeq(ans(1), 0.0_DFP, tol), "tests(3):")
CALL ok(softeq(ans(2), 1.0_DFP, tol), "tests(4):")

ans = LagrangeEvalAll_Line(order, xij(1, 3), xij, coeff, firstCall=.FALSE.)
CALL ok(ALL(softeq(ans(1:2), 0.0_DFP, tol)), "tests(5):")
CALL ok(softeq(ans(3), 1.0_DFP, tol), "tests(6):")

ans = LagrangeEvalAll_Line(order, xij(1, 4), xij, coeff, firstCall=.FALSE.)
CALL ok(ALL(softeq(ans(1:3), 0.0_DFP, tol)), "tests(7):")
CALL ok(softeq(ans(4), 1.0_DFP, tol), "tests(8):")
END PROGRAM main
