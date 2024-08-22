PROGRAM main

USE GlobalData
USE Display_Method
USE QuadrangleInterpolationUtility
USE ReallocateUtility

IMPLICIT NONE

INTEGER(i4b) :: i1, i2, order
REAL(dfp), ALLOCATABLE :: x(:, :)

order = 1
x = EquidistanceInPoint_Quadrangle(order=order)
CALL display(TRANSPOSE(x), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)

order = 2
x = EquidistanceInPoint_Quadrangle(order=order)
CALL display(TRANSPOSE(x), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)

order = 3
x = EquidistanceInPoint_Quadrangle(order=order)
CALL display(TRANSPOSE(x), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)

END PROGRAM main
