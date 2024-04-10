PROGRAM main
USE easifemBase
TYPE(csrmatrix_) :: obj
REAL(DFP), ALLOCATABLE :: amat(:, :), x(:), y1(:), y2(:)
INTEGER(I4B) :: nrow, ncol
LOGICAL(LGT) :: isok

CALL IMPORT(obj, "./matrixMarket/small5.mtx", SPARSE_FMT_COO)

nrow = SIZE(obj, 1)
ncol = SIZE(obj, 2)
amat = obj
CALL Display(amat, "amat = ")

CALL Reallocate(x, ncol)
CALL RANDOM_NUMBER(x)
CALL Reallocate(y2, ncol)
CALL Reallocate(y1, ncol)

! test 1
y1 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, isTranspose=.FALSE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = Ax ")

! test 2
y1 = 2.0_DFP * MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, scale=2.0_DFP)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = Scale* Ax ")

! test 3
y1 = 2.0_DFP * MATMUL(amat, x)
y2 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, addContribution=.TRUE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = y+Ax ")

! test 4
y1 = 3.0_DFP * MATMUL(amat, x)
y2 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, addContribution=.TRUE., scale=2.0_DFP)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = y+ scale* Ax ")

! test 5
amat = TRANSPOSE(amat)
y1 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, isTranspose=.TRUE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = A'x ")

! test 6
y1 = 2.0_DFP * MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, scale=2.0_DFP, isTranspose=.TRUE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = Scale* A'x ")

! test 7
y1 = 2.0_DFP * MATMUL(amat, x)
y2 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, addContribution=.TRUE., isTranspose=.TRUE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = y+A'x ")

! test 8
y1 = 3.0_DFP * MATMUL(amat, x)
y2 = MATMUL(amat, x)
CALL MatVec(obj=obj, x=x, y=y2, addContribution=.TRUE., scale=2.0_DFP,  &
& isTranspose=.TRUE.)
isok = ALL(y1.approxeq.y2)
CALL OK(isok, "y = y+ scale* A'x ")

END PROGRAM main
