
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(CSRMatrix_) :: obj
TYPE(DOF_) :: dofobj
REAL(DFP), ALLOCATABLE :: m2(:, :)
INTEGER(I4B) :: i, unitNo

CALL Initiate(obj=dofobj, tNodes=[5], names=['K'], &
  & spaceCompo=[1], timeCompo=[1], storageFMT=FMT_NODES)

CALL Initiate(obj, ncol=(.tnodes.dofobj), &
  & nrow=(.tnodes.dofobj), idof=dofobj, jdof=dofobj)

CALL Setsparsity(obj, 1, [1, 2, 3, 5])
CALL Setsparsity(obj, 2, [2, 1, 3])
CALL Setsparsity(obj, 3, [3, 1, 2, 4, 5])
CALL Setsparsity(obj, 4, [4, 3, 5])
CALL Setsparsity(obj, 5, [5, 1, 3, 4])
CALL SetSparsity(obj)

obj = 2.0_DFP

CALL Display(obj, "obj")
m2 = obj
CALL Display(m2, "test-5:")
CALL SPY(obj, "test_5", ".svg")

CALL DEALLOCATE (obj)
END PROGRAM main
