! This program is a part of EASIFEM library
! Expandable And Scalable Infrastructure for Finite Element Methods
! htttps://www.easifem.com
! Vikas Sharma, Ph.D., vickysharma0812@gmail.com
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

!> author: Vikas Sharma, Ph. D.
! date: 2024-05-29
! summary:

PROGRAM main
USE BaseType, ONLY: RealVector_, DOF_
USE GlobalData, ONLY: DFP, DOF_FMT
USE RealVector_Method, ONLY: Initiate, Set, Get
USE DOF_Method, ONLY: DOF_Initiate => Initiate
USE Test_Method, ONLY: OK
USE ArangeUtility, ONLY: arange
USE ApproxUtility, ONLY: OPERATOR(.APPROXEQ.)

IMPLICIT NONE

TYPE(RealVector_) :: obj
TYPE(DOF_) :: dofobj
REAL(DFP) :: ans, VALUE

! Initiate an instance of [DOF_](../DOF/DOF_.md)
CALL DOF_Initiate(obj=dofobj, &
                  tNodes=[4, 2], &
                  names=["V", "P"], &
                  spaceCompo=[2, 1], &
                  timeCompo=[2, 2], &
                  StorageFMT=DOF_FMT)

! Initiate an instance of [[RealVector_]]
CALL Initiate(obj, dofobj)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2, 3, 4], &
         VALUE=arange(1.0_DFP, 4.0_DFP), ivar=1, idof=1)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2, 3, 4], &
         VALUE=arange(11.0_DFP, 14.0_DFP), ivar=1, idof=2)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2, 3, 4], &
         VALUE=arange(21.0_DFP, 24.0_DFP), ivar=1, idof=3)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2, 3, 4], &
         VALUE=arange(31.0_DFP, 34.0_DFP), ivar=1, idof=4)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2], &
         VALUE=arange(41.0_DFP, 42.0_DFP), ivar=2, idof=1)

CALL Set(obj=obj, dofobj=dofobj, nodenum=[1, 2], &
         VALUE=arange(51.0_DFP, 52.0_DFP), ivar=2, idof=2)

VALUE = Get(obj, dofobj, 2, ivar=1, idof=1)
ans = 2
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

VALUE = Get(obj, dofobj, 2, ivar=1, idof=2)
ans = 12
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

VALUE = Get(obj, dofobj, 2, ivar=1, idof=3)
ans = 22
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

VALUE = Get(obj, dofobj, 2, ivar=1, idof=4)
ans = 32
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

VALUE = Get(obj, dofobj, 2, ivar=2, idof=1)
ans = 42
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

VALUE = Get(obj, dofobj, 2, ivar=2, idof=2)
ans = 52
CALL OK(VALUE.APPROXEQ.ANS, 'Get')

END PROGRAM main
