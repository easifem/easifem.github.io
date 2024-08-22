
PROGRAM main
USE TriangleInterpolationUtility
USE ReferenceTriangle_Method

USE GlobalData
USE Display_Method
USE Test_Method
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

INTEGER(I4B) :: i1, i2, order, ipType
REAL(DFP), ALLOCATABLE :: x(:, :), xij(:, :)
CHARACTER(20) :: layout

order = 5
xij = RefTriangleCoord("UNIT")
ipType = Equidistance
layout = "VEFC"

x = InterpolationPoint_Triangle(order=order, ipType=ipType, layout=layout, xij=xij)

CALL Display(Mdencode(TRANSPOSE(x)), "xij (order="//tostring(order)//")=")

END PROGRAM main
