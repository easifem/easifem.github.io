PROGRAM main
USE GlobalData
USE IntegerUtility
USE Display_Method

IMPLICIT NONE

INTEGER(I4B), ALLOCATABLE :: indices(:, :)

indices = GetMultiIndices(3, 2)
CALL Display(indices, "indices: ")

CALL Display(SIZE(3, 2), "Number of col: ")

CALL BlankLines(nol=1)
indices = GetMultiIndices(4, 2)
CALL Display(indices, "indices: ")
CALL Display(SIZE(4, 2), "Number of col: ")
END PROGRAM main
