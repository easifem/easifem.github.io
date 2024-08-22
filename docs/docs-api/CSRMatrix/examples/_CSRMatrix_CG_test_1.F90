PROGRAM main
USE easifemBase
IMPLICIT NONE

!Declaring variables:

TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidapm33.mtx"
! CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap011.mtx"
REAL(DFP), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:), fpar(:), W(:)
INTEGER(I4B) :: ncol, nrow, nnz
INTEGER(I4B), ALLOCATABLE :: ipar(:)

!Import csrmatrix from matrix market.

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
nrow = SIZE(csrmat, 1)
CALL Display(nrow, "nrow of csrmat = ")
ncol = SIZE(csrmat, 2)
CALL Display(ncol, "ncol of csrmat = ")
nnz = GetNNZ(csrmat)
CALL Display(nnz, "nnz of csrmat = ")

CALL CSRMatrixLinSolveInitiate(ipar=ipar, fpar=fpar, W=W, n=nrow, solverName=LIS_CG, maxIter=-1)

!Allocate exact_sol, rhs and sol.

CALL Reallocate(rhs, nrow)
CALL Reallocate(sol, ncol)
CALL Reallocate(exact_sol, ncol)

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 10
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

!Calling CSRMatrix_CG

CALL CSRMatrix_CG(obj=csrmat, sol=sol, rhs=rhs, ipar=ipar, fpar=fpar, W=W)

! If info is zero then we have success, otherwise we have error.

CALL Display(NORM2(sol - exact_sol), "Error = ")

END PROGRAM main
