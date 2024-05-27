This example shows the usage of assignment operator to construct an instance of `DOF`.

```fortran
PROGRAM main
USE GlobalData
USE BaseType, ONLY: DOF_
USE DOF_Method

IMPLICIT NONE

TYPE(DOF_) :: obj, anotherObj

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

anotherObj = obj

CALL Display(anotherObj, "anotherObj=obj : ")

CALL DEALLOCATE (obj)
CALL DEALLOCATE (anotherObj)

END PROGRAM main
```
