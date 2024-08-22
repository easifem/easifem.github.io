
program main
use easifemBase
implicit none

TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap005.mtx"
REAL( DFP ), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:)
INTEGER( I4B ) :: info
REAL( DFP ) :: ev1

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")

ev1 = SymSmallestEigenVal(mat=csrmat, which="SM")
CALL Display(ev1, "ev1 = ")

end program main
