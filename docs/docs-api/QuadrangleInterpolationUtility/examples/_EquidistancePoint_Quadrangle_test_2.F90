PROGRAM main
USE GlobalData
USE Display_Method
USE QuadrangleInterpolationUtility
USE ReallocateUtility
USE String_Class

IMPLICIT NONE
INTEGER(i4b) :: i1, i2, p, q, r
REAL(dfp), ALLOCATABLE :: x(:, :)

p = 1; q = 1
x = EquidistancePoint_Quadrangle(p=p, q=q)
CALL Display(TRANSPOSE(x), "xij (order="//tostring([p, q])//")=")
CALL blanklines(nol=2)

p = 2; q = 2
x = EquidistancePoint_Quadrangle(p=p, q=q)
CALL Display(TRANSPOSE(x), "xij (order="//tostring([p, q])//")=")
CALL Blanklines(nol=2)

p = 3; q = 3
x = EquidistancePoint_Quadrangle(p=p, q=q)
CALL Display(TRANSPOSE(x), "xij (order="//tostring([p, q])//")=")
CALL Blanklines(nol=2)
END PROGRAM main
