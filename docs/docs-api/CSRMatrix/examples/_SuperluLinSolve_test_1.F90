! This program is a part of EASIFEM library
! Copyright (C) 2020-2021  Vikas Sharma, Ph.D
!
! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU General Public License for more details.
!
! You should have received a copy of the GNU General Public License
! along with this program.  If not, see <https: //www.gnu.org/licenses/>
!

PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(CSRMatrix_) :: csrmat
!CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidapm11.mtx"
CHARACTER(*), PARAMETER :: matrix_name = "./matrixMarket/fidap011.mtx"
REAL(DFP), ALLOCATABLE :: rhs(:), sol(:), exact_sol(:)
INTEGER(I4B) :: info

CALL IMPORT(csrmat, matrix_name, SPARSE_FMT_COO)
CALL Display(SIZE(csrmat, 1), "csrmat = ")
CALL Display(SIZE(csrmat, 2), "csrmat = ")
CALL Display(GetNNZ(csrmat), "GetNNZ = ")

CALL Reallocate(rhs, SIZE(csrmat, 1))
CALL Reallocate(sol, SIZE(csrmat, 2))
CALL Reallocate(exact_sol, SIZE(csrmat, 2))

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 10
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

CALL LinSolve(X=sol, A=csrmat, B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.FALSE., info=info)

IF (info .EQ. 0) THEN
  CALL Display("Sucess in SuperluLinSolve 1")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
ELSE
  CALL Display("Failure in SuperluLinSolve 1")
  CALL Display(info, "info = ")
END IF

CALL RANDOM_NUMBER(exact_sol)
exact_sol = exact_sol * 50
CALL MatVec(obj=csrmat, x=exact_sol, y=rhs)

CALL Display("Calling LinSolve 2")

CALL LinSolve(&
  & X=sol, &
  & A=csrmat, &
  & B=rhs, &
  & isTranspose=.FALSE., &
  & isFactored=.TRUE., &
  & info=info)

IF (info .EQ. 0) THEN
  CALL Display("Sucess in SuperluLinSolve 2")
  CALL Display(NORM2(sol - exact_sol), "Error = ")
ELSE
  CALL Display("Failure in SuperluLinSolve 2")
  CALL Display(info, "info = ")
END IF

END PROGRAM main
