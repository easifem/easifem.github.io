PROGRAM main
USE BaseType, ONLY: CSRMatrix_
USE GlobalData, ONLY: DFP, I4B, LGT
USE Display_Method
USE CSRMatrix_Method
USE ReallocateUtility

#include "lisf.h"

CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/examples/matrixMarket/small5.mtx"
CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/examples/matrixMarket/small5_rhs.mtx"

INTEGER :: ierr
LIS_MATRIX :: A
TYPE(CSRMatrix_) :: csrmat
REAL(DFP), ALLOCATABLE :: rhs(:)
REAL(DFP), ALLOCATABLE :: sol(:)
INTEGER(I4B), ALLOCATABLE :: ia(:)
INTEGER(I4B), ALLOCATABLE :: ja(:)
INTEGER(I4B) :: n
INTEGER(I4B) :: m
INTEGER(I4B) :: nnz
INTEGER(I4B) :: ii
INTEGER(I4B) :: unitno
CHARACTER(1024) :: astr

OPEN (NEWUNIT=unitno, file=rhs_name, action="READ", status="OLD")
READ (unitno, *) astr
READ (unitno, *) n, m
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

CALL lis_matrix_create(0, A, ierr)
CALL lis_matrix_set_size(A, 0, n, ierr)
CALL lis_matrix_set_csr(nnz, ia, ja, csrmat%a, A, ierr)
CALL lis_matrix_assemble(A, ierr)

CALL Display(csrmat%a, "a before = ")

CALL lis_matrix_destroy(A, ierr)
CALL lis_finalize(ierr)
END PROGRAM main
