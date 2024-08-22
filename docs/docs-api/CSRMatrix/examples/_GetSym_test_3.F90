
program main
use easifemBase
implicit none

TYPE(CSRMatrix_) :: csrmat
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/small5.mtx"
REAL( DFP ), ALLOCATABLE :: dense(:,:)
INTEGER( I4B ) :: info

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")
dense=csrmat
CALL Display(dense, "dense = ")

CALL GetSym(obj=csrmat, from="U")
dense=csrmat
CALL Display(dense, "Sym CSR Mat=")

end program main
