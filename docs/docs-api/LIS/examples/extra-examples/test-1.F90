PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(sparsematrix_) :: tanmat
REAL(dfp), ALLOCATABLE :: mat(:, :)

TYPE(lis_) :: obj
INTEGER(I4B) :: maxiter
REAL(DFP) :: tol

!<--- make tanmat
! make csr matrix
CALL display('flag1')
CALL initiate(obj=tanmat, tdof=1, tnodes=[10])
CALL setsparsity(obj=tanmat, row=1, col=[1, 2])
CALL setsparsity(obj=tanmat, row=2, col=[1, 2, 3])
CALL setsparsity(obj=tanmat, row=3, col=[2, 3, 4])
CALL setsparsity(obj=tanmat, row=4, col=[3, 4, 5])
CALL setsparsity(obj=tanmat, row=5, col=[4, 5, 6])
CALL setsparsity(obj=tanmat, row=6, col=[5, 6, 7])
CALL setsparsity(obj=tanmat, row=7, col=[6, 7, 8])
CALL setsparsity(obj=tanmat, row=8, col=[7, 8, 9])
CALL setsparsity(obj=tanmat, row=9, col=[8, 9, 10])
CALL setsparsity(obj=tanmat, row=10, col=[9, 10])
CALL display('flag2')
CALL setsparsity(tanmat)
CALL display('flag3')
ALLOCATE (mat(2, 2))
mat = RESHAPE([1, -1, -1, 1], [2, 2])
CALL addcontribution(tanmat, [1, 2], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [2, 3], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [3, 4], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [4, 5], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [5, 6], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [6, 7], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [7, 8], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [8, 9], mat, 1.0_DFP, NONE)
CALL addcontribution(tanmat, [9, 10], mat, 1.0_DFP, NONE)
CALL display('flag4')
CALL convert(from=tanmat, to=mat)
CALL display('flag5')
CALL display(mat, 'mat')
CALL display('flag6')
!<---
tol = 1.0E-5
maxiter = 10

CALL initiate( &
  & obj=obj, &
  & Solvername=lis_cg, &
  & Maxiter=maxiter, &
  & Tol=tol)

CALL display('flag7')

CALL setPrecondition( &
  & obj=obj, &
  & precondType=p_none)

CALL display('flag8')

CALL setsparsity(From=tanmat, To=obj)

CALL display('flag9')

END PROGRAM main
