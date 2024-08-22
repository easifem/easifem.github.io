```fortran
PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method

IMPLICIT NONE

TYPE(DOF_), POINTER :: obj

obj => DOF_POINTER(tNodes=[10], names=["U"], spaceCompo=[3], &
                   timeCompo=[1], storageFMT=FMT_DOF)

CALL Display(obj, "DOF() : ")

CALL DEALLOCATE (obj)
END PROGRAM main
```
