PROGRAM main
USE GlobalData
USE Display_Method
USE QuadrangleInterpolationUtility
USE MdEncode_Method
USE String_Class

IMPLICIT NONE
INTEGER(i4b) :: i1, i2, order
INTEGER(i4b), ALLOCATABLE :: ans(:, :)

order = 1
ans = LagrangeDegree_Quadrangle(order=order)
CALL display(mdencode(ans), "ans (order="//tostring(order)//")=")
CALL blankLines(nol=2)

order = 2
ans = LagrangeDegree_Quadrangle(order=order)
CALL display(mdencode(ans), "ans (order="//tostring(order)//")=")
CALL blankLines(nol=2)

order = 3
ans = LagrangeDegree_Quadrangle(order=order)
CALL display(mdencode(ans), "ans (order="//tostring(order)//")=")
CALL blankLines(nol=2)
END PROGRAM main
