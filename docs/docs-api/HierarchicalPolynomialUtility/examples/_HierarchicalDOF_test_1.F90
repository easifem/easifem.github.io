PROGRAM main
USE GlobalData
USE Display_Method
USE HierarchicalPolynomialUtility
USE Test_Method
USE ReallocateUtility

IMPLICIT NONE

INTEGER(I4B) :: found, want
LOGICAL(LGT) :: isok
CHARACTER(*), PARAMETER :: testname = "HierarchicalDOF"
INTEGER(I4B), ALLOCATABLE :: cellOrder(:), faceOrder(:, :), edgeOrder(:)

cellOrder = [1]
found = HierarchicalDOF(elemType=Line, cellOrder=[1])
want = 2
isok = found .EQ. want
CALL ok(isok, testname)

cellOrder = [2]
found = HierarchicalDOF(elemType=Line, cellOrder=[2])
want = 3
isok = found .EQ. want
CALL ok(isok, testname)

cellOrder = [1]
CALL Reallocate(faceOrder, 1, 3)
faceOrder(1, :) = [1, 1, 1]

found = HierarchicalDOF(elemType=Triangle, cellOrder=cellOrder, &
                        faceOrder=faceOrder)
want = 3
isok = found .EQ. want
CALL ok(isok, testname)

END PROGRAM main
