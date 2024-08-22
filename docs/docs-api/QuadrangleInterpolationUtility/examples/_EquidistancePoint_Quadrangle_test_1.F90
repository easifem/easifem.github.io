PROGRAM main
USE GlobalData
USE Display_Method
USE QuadrangleInterpolationUtility
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

INTEGER(i4b) :: i1, i2, order
REAL(DFP), ALLOCATABLE :: x(:, :)

order = 1
x = EquidistancePoint_Quadrangle(order=order)
CALL display(TRANSPOSE(x), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)

order = 2
x = EquidistancePoint_Quadrangle(order=order)
CALL display(mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)

order = 3
x = EquidistancePoint_Quadrangle(order=order)
CALL display(mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=")
CALL blanklines(nol=2)
END PROGRAM main
