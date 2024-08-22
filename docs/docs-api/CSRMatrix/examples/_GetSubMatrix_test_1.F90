PROGRAM main
USE GlobalData
USE BaseType
USE CSRMatrix_Method
USE Display_Method
USE ReallocateUtility

IMPLICIT NONE

TYPE(CSRMatrix_) :: csrmat, submat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/small5.mtx"
INTEGER(I4B) :: info, ii, n
INTEGER(I4B), ALLOCATABLE :: subIndices(:)
REAL(DFP), ALLOCATABLE :: amat(:, :), avec(:), y(:), x(:)

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)

amat = csrmat
CALL Display(amat, "mat:  ")

CALL Display(SIZE(csrmat, 1), "nrow:  ")
CALL Display(SIZE(csrmat, 2), "ncol: ")
CALL Display(GetNNZ(csrmat), "nnz: ")

CALL GetSubMatrix(obj=csrmat, submat=submat, cols=[1, 4], &
                  subIndices=subIndices)
amat = submat
CALL Display(amat, "submat: ")
CALL Display(subIndices, "subIndices: ")

avec = Get(obj=csrmat, indx=[1, 3, 4, 8, 10])
CALL Display(avec, "avec: ")

CALL Reallocate(x, 5)
CALL Reallocate(y, 5)

x = 1.0

CALL Display(MATMUL(amat, x), "exact: ")
CALL matvec(obj=submat, y=y, x=x)

CALL Display(y, "compute: ")

CALL DEALLOCATE (csrmat)
END PROGRAM main
