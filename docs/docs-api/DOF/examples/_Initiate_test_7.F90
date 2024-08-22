!> author: Vikas Sharma, Ph. D.
! date: 2024-05-25
! summary: This example show how to initiate an instance of DOF_
! and use it to create a vector of reals.

PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method

IMPLICIT NONE

TYPE(DOF_) :: obj
REAL(DFP), ALLOCATABLE :: val(:)

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

CALL Initiate(Val=val, obj=obj)

val(1:10) = 1; val(11:20) = 2; val(21:) = 3

CALL Display(Val, obj, "CALL Initiate( Val=val, obj=obj ) : ")

CALL DEALLOCATE (obj)

END PROGRAM main
