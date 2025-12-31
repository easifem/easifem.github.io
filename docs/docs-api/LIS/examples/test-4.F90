PROGRAM main
USE GlobalData
USE BaseType
USE CSRMatrix_Method
USE Display_Method
USE ReallocateUtility

#include "lisf.h"

CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/examples/matrixMarket/small5.mtx"
CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/examples/matrixMarket/small5_rhs.mtx"
INTEGER :: ierr

LIS_MATRIX :: A_
LIS_VECTOR :: rhs_, sol_
LIS_SOLVER :: solver
TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: rhs(:)
REAL(DFP), ALLOCATABLE :: sol(:)
INTEGER(I4B), ALLOCATABLE :: ia(:)
INTEGER(I4B), ALLOCATABLE :: ja(:)
REAL(DFP), ALLOCATABLE :: a(:)
INTEGER(I4B) :: n
INTEGER(I4B) :: m
INTEGER(I4B) :: nnz
INTEGER(I4B) :: ii
INTEGER(I4B) :: unitno
CHARACTER(1024) :: astr

OPEN (NEWUNIT=unitno, file=rhs_name, action="READ", status="OLD")
READ (unitno, *) astr
READ (unitno, *) n, m
CALL Display(n, "n = ")
CALL Reallocate(rhs, n)
DO ii = 1, n
  READ (unitno, *) rhs(ii)
END DO
CLOSE (unitno)

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)

n = SIZE(csrmat, 1)
m = SIZE(csrmat, 2)
nnz = GetNNZ(csrmat)
CALL Display(n, "nrow = ")
CALL Display(m, "ncol = ")
CALL Display(nnz, "nnz = ")

CALL Reallocate(sol, n)

! lis

CALL lis_initialize(ierr)

ia = csrmat%csr%ia - 1
ja = csrmat%csr%ja - 1

CALL lis_matrix_create(0, A_, ierr)
CALL lis_matrix_set_size(A_, 0, n, ierr)
CALL lis_matrix_set_csr(nnz, ia, ja, csrmat%a, A_, ierr)
CALL lis_matrix_assemble(A_, ierr)
CALL chkerr(ierr)
CALL display("flag 1")

CALL lis_vector_create(0, sol_, ierr)
CALL lis_vector_set_size(sol_, 0, n, ierr)
CALL lis_vector_scatter(sol, sol_, ierr)

CALL lis_vector_create(0, rhs_, ierr)
CALL lis_vector_set_size(rhs_, 0, n, ierr)
CALL lis_vector_scatter(rhs, rhs_, ierr)
CALL chkerr(ierr)

CALL display("flag 2")

CALL lis_solver_create(solver, ierr)
astr = "-i gmres -p none"
CALL lis_solver_set_option(TRIM(astr), solver, ierr)
astr = "-tol 1.0e-15 -maxiter "//tostring(n)
CALL lis_solver_set_option(TRIM(astr), solver, ierr)
CALL chkerr(ierr)

CALL display("flag 3")

CALL lis_solve(A_, rhs_, sol_, solver, ierr)
CALL chkerr(ierr)

CALL display("flag 4")

CALL lis_vector_gather(sol_, sol, ierr)
CALL Display(sol(1:5), "solution = ")
CALL chkerr(ierr)

CALL display("flag 5")

CALL lis_solver_destroy(solver, ierr)
CALL lis_matrix_destroy(A_, ierr)
CALL lis_vector_destroy(rhs_, ierr)
CALL lis_vector_destroy(sol_, ierr)
CALL lis_finalize(ierr)
END PROGRAM main
