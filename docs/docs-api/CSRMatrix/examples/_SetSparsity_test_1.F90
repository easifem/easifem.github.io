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
TYPE(CSRMatrix_) :: obj
TYPE(DOF_) :: dofobj
REAL(DFP), ALLOCATABLE :: m2(:, :)
INTEGER(I4B) :: i, unitNo

CALL Initiate(obj=dofobj, tNodes=[5], names=['K'], &
  & spaceCompo=[1], timeCompo=[1], storageFMT=FMT_NODES)

CALL Initiate(obj, ncol=(.tnodes.dofobj), &
  & nrow=(.tnodes.dofobj), idof=dofobj, jdof=dofobj)

CALL Setsparsity(obj, 1, [1, 2, 3, 5])
CALL Setsparsity(obj, 2, [2, 1, 3])
CALL Setsparsity(obj, 3, [3, 1, 2, 4, 5])
CALL Setsparsity(obj, 4, [4, 3, 5])
CALL Setsparsity(obj, 5, [5, 1, 3, 4])
CALL SetSparsity(obj)

obj = 2.0_DFP

CALL Display(obj, "obj")
m2 = obj
CALL Display(m2, "test-4:")

CALL DEALLOCATE (obj)
END PROGRAM main
