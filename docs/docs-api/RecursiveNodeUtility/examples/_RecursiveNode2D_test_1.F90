PROGRAM main
USE GlobalData
USE RecursiveNodesUtility
USE Test_Method
USE Display_Method
USE MdEncode_Method
USE String_Class

IMPLICIT NONE

REAL(DFP), ALLOCATABLE :: b(:, :)
INTEGER(i4b) :: iptype = Equidistance

b = RecursiveNode2D(order=0, ipType=ipType)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode2D(order=1, ipType=ipType)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode2D(order=2, ipType=ipType)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode2D(order=3, ipType=ipType)
CALL Display(MdEncode(TRANSPOSE(b)), "b=")
END PROGRAM main
