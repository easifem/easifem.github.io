PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(CSRMatrix_) :: obj1, obj2, obj3
REAL(DFP), ALLOCATABLE :: amat(:, :)
INTEGER(I4B) :: nnz

CALL Initiate(obj=obj1, ia=[1, 2, 2, 3, 4], ja=[2, 1, 1], ncol=3,  &
& A=arange(1.0_DFP, 3.0_DFP))
CALL Initiate(obj=obj2, ia=[1, 3, 5, 6, 7], ja=[1, 2, 2, 3, 3, 3], ncol=3,  &
& A=arange(1.0_DFP, 6.0_DFP))

CALL Initiate(obj=obj3, obj1=obj1, obj2=obj2, scale=1.0_DFP)

CALL Display("Success")

amat = obj1
CALL display(amat, "obj1 = ")

amat = obj2
CALL display(amat, "obj2 = ")

amat = obj3
CALL display(amat, "obj3 = obj1 + obj2 = ")

! CALL Display(obj3, "obj3: ")

END PROGRAM main
