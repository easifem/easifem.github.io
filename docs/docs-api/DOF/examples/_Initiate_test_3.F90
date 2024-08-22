!> author: Vikas Sharma, Ph. D.
! date: 2024-05-25
! summary: Initiate an instance of DOF, and then RealVector

PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_, RealVector_
USE DOF_Method
USE RealVector_Method, ONLY: Display, RealVector_Initiate => Initiate

IMPLICIT NONE

TYPE(DOF_) :: obj
TYPE(RealVector_), ALLOCATABLE :: val(:)

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

CALL RealVector_Initiate(dofobj=obj, obj=val)

CALL Display(val, "CALL Initiate( val=val, obj=obj ) : ")

CALL DEALLOCATE (obj)
END PROGRAM main
