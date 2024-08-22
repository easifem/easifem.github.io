PROGRAM main
USE GlobalData
USE BaseType
USE CSRMatrix_Method
USE Display_Method
USE ReallocateUtility

IMPLICIT NONE

TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/small5.mtx"
REAL(DFP), ALLOCATABLE :: dense(:, :)
INTEGER(I4B) :: info, dbcptrs(2)

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")
dense = csrmat
CALL Display(dense, "dense = ")

dbcptrs = [1, 5]

CALL ApplyDBC(obj=csrmat, dbcptrs=dbcptrs)
dense = csrmat
CALL Display(dense, "After =")

END PROGRAM main
