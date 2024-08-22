PROGRAM main
USE LineInterpolationUtility
USE GlobalData
USE Display_Method
USE Test_Method

IMPLICIT NONE

INTEGER(i4b) :: order, tsize
REAL(DFP) :: ans(1000), x(2)

x = [-1.0_DP, 1.0_DP]
CALL EquidistancePoint_Line_(order=1, xij=x, ans=ans, tsize=tsize)
CALL display(ans(1:tsize), "x = ")

x = [-1.0_DP, 1.0_DP]
CALL EquidistancePoint_Line_(order=5, xij=x, ans=ans, tsize=tsize)
CALL display(ans(1:tsize), "x = ")

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
