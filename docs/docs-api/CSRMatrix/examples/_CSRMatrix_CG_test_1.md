```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

!Declaring variables:

TYPE(CSRMatrix_) :: csrmat
!CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidapm11.mtx"
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap011.mtx"
REAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:)
INTEGER( I4B ) :: info

!Import csrmatrix from matrix market.

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")

!Allocate exact_sol, rhs and sol.

CALL Reallocate(rhs, SIZE(csrmat, 1))
CALL Reallocate(sol, SIZE(csrmat, 2))
CALL Reallocate(exact_sol, SIZE(csrmat, 2))

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 10
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

!Calling SuperluLinSolve

CALL SuperluLinSolve(X=sol, A=csrmat, B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.FALSE., info=info)

!If info is zero then we have success, otherwise we have error.

IF(info .eq. 0) THEN
  CALL Display("Sucess in SuperluLinSolve")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
else
  CALL Display("Failure in SuperluLinSolve")
  CALL Display(info, "info = ")
END IF

!Let' solve `A*x=b` for another rhs.

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 50
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

!Calling SuperluLinSolve

CALL SuperluLinSolve(&
  & X=sol, &
  & A=csrmat, &
  & B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.TRUE., &
  & info=info)

!If info is zero then we have success, otherwise we have error.

IF(info .eq. 0) THEN
  CALL Display("Sucess in SuperluLinSolve")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
else
  CALL Display("Failure in SuperluLinSolve")
  CALL Display(info, "info = ")
END IF

END PROGRAM main
```
