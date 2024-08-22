PROGRAM main
USE RecursiveNodesUtility
USE GlobalData
USE Display_Method
USE String_Class
USE Test_Method
USE MdEncode_Method

REAL(DFP), ALLOCATABLE :: b(:, :)

b = RecursiveNode1D(order=0, ipType=Equidistance)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode1D(order=1, ipType=Equidistance)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode1D(order=2, ipType=Equidistance)
CALL Display(MdEncode(b), "b="//char_lf)

b = RecursiveNode1D(order=3, ipType=Equidistance)
CALL Display(MdEncode(b), "b="//char_lf)

END PROGRAM main
