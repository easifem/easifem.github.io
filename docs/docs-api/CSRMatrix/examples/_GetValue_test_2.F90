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
TYPE(CSRMatrix_) :: obj1, obj
TYPE(DOF_) :: dofobj
REAL(DFP), ALLOCATABLE :: mat1(:, :), mat2(:, :)
INTEGER(I4B) :: nrow, ncol, nnz, ierr

CALL IMPORT(obj1, "./matrixMarket/small5.mtx", SPARSE_FMT_COO)

nrow = SIZE(obj1, 1)
ncol = SIZE(obj1, 2)

mat1 = obj1

CALL Initiate(obj=dofobj, tNodes=[nrow], names=['K'], &
  & spaceCompo=[2], timeCompo=[1], storageFMT=DOF_FMT)

CALL Initiate(obj=obj, ncol=ncol * 2, nrow=nrow * 2, idof=dofobj, jdof=dofobj)

CALL Setsparsity(obj, 1, [1, 3, 4])
CALL Setsparsity(obj, 2, [1, 2])
CALL Setsparsity(obj, 3, [2, 3])
CALL Setsparsity(obj, 4, [4, 5])
CALL Setsparsity(obj, 5, [1, 2, 5])
CALL SetSparsity(obj)

! from obj1 to obj2

CALL GetValue(obj1=obj1, obj2=obj, ispaceCompo2=1, jspaceCompo2=1)
mat2 = obj
CALL Display(mat2, "obj2: ", full=.TRUE.)

CALL GetValue(obj1=obj1, obj2=obj, ispaceCompo2=1, jspaceCompo2=2)
mat2 = obj
CALL Display(mat2, "obj2: ", full=.TRUE.)

CALL GetValue(obj1=obj1, obj2=obj, ispaceCompo2=2, jspaceCompo2=1)
mat2 = obj
CALL Display(mat2, "obj2: ", full=.TRUE.)

CALL GetValue(obj1=obj1, obj2=obj, ispaceCompo2=2, jspaceCompo2=2)
mat2 = obj
CALL Display(mat2, "obj2: ", full=.TRUE.)

CALL Display(mat1, "obj1: ")

END PROGRAM main
