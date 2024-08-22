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

MODULE testmod
USE easifemBase
IMPLICIT NONE

#include "lisf.h"
TYPE :: atype
  LIS_VECTOR :: avector
END TYPE atype
END MODULE testmod

PROGRAM main
USE easifemBase
#include "lisf.h"

CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/matrixMarket/small5.mtx"
CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/matrixMarket/small5_rhs.mtx"

! CHARACTER(*), PARAMETER :: matrix_name = "../../CSRMatrix/matrixMarket/e40r0000.mtx"
! CHARACTER(*), PARAMETER :: rhs_name = "../../CSRMatrix/matrixMarket/e40r0000_rhs1.mtx"
INTEGER :: ierr
LIS_MATRIX :: A_
LIS_VECTOR :: rhs_, sol_
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

CALL lis_vector_create(0, sol_, ierr)
CALL lis_vector_set_size(sol_, 0, n, ierr)
CALL lis_vector_scatter(sol, sol_, ierr)
CALL display("sol_ = ")
CALL lis_vector_print(sol_, ierr)

CALL lis_vector_create(0, rhs_, ierr)
CALL lis_vector_set_size(rhs_, 0, n, ierr)
CALL lis_vector_scatter(rhs, rhs_, ierr)
CALL chkerr(ierr)
CALL display("rhs_ = ")
CALL lis_vector_print(rhs_, ierr)

CALL lis_matvec(A_, rhs_, sol_, ierr)
CALL display("(before) matvec = ")
CALL lis_vector_print(sol_, ierr)

CALL Display(csrmat%a, "(before) a = ")
csrmat%a = 0.0_DFP
CALL lis_matvec(A_, rhs_, sol_, ierr)
CALL display("(after ) matvec = ")
CALL lis_vector_print(sol_, ierr)
CALL Display(csrmat%a, "(after) a = ")

CALL lis_matrix_destroy(A_, ierr)
CALL lis_vector_destroy(rhs_, ierr)
CALL lis_vector_destroy(sol_, ierr)
CALL lis_finalize(ierr)
END PROGRAM main
