
PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method

IMPLICIT NONE
TYPE(DOF_) :: obj
REAL(DFP), ALLOCATABLE :: val(:)

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

! Initiate a real vector using `DOF_` object.

CALL Initiate(val=val, obj=obj)

CALL Display(obj, "CALL Initiate( val=val, obj=obj ) : ")

CALL DEALLOCATE (obj)
END PROGRAM main
