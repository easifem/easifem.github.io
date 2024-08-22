!> author: Vikas Sharma, Ph. D.
! date: 2024-05-25
! summary: This example show how to initiate an instance of `DOF_` by using
! the constructor function `DOF()` .

PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method

IMPLICIT NONE

TYPE(DOF_) :: obj

obj = DOF(tNodes=[10], names=["U"], spaceCompo=[3], &
          timeCompo=[1], storageFMT=FMT_DOF)

CALL Display(obj, "DOF() : ")

CALL DEALLOCATE (obj)
END PROGRAM main
