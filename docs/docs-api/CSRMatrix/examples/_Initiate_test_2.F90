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

CALL Initiate(obj=dofobj, tNodes=[4, 2], names=['V', 'P'], &
  & spaceCompo=[2, 1], timeCompo=[1, 1], storageFMT=FMT_DOF)

CALL Initiate(obj, &
  & ncol=.tnodes.dofobj, &
  & nrow=.tnodes.dofobj, &
  & idof=dofobj, jdof=dofobj)

m2 = obj
CALL Display(m2, "test2")

CALL DEALLOCATE (obj)
END PROGRAM main
