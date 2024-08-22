PROGRAM main
USE LineInterpolationUtility
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

INTEGER(i4b) :: i1, i2, order
REAL(dfp), ALLOCATABLE :: x1(:), x2(:), x(:, :), ans(:, :)
INTEGER(i4b), ALLOCATABLE :: degree(:, :)

x = EquidistancePoint_Line(order=1)
CALL display(x, "x = ")

x = EquidistancePoint_Line(order=2)
CALL display(x, "x = ")

x = EquidistancePoint_Line(order=3)
CALL display(x, "x = ")

END PROGRAM main

! ```bash title="results"
! x =
! ------------------
! -1.00000   1.00000
! x =
! ----------------------------
! -1.00000   1.00000   0.00000
! x =
! --------------------------------------
! -1.00000   1.00000  -0.33333   0.33333
! ```
