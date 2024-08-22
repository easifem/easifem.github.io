This example show how to initiate an instance of `DOF`. Then we use it to create an instance of `RealVector`.

```fortran
PROGRAM main
USE BaseType, ONLY: DOF_
USE GlobalData
USE DOF_Method

IMPLICIT NONE
TYPE(DOF_) :: obj
TYPE(RealVector_) :: val

! Create an instance of[[DOF_]]

CALL Initiate(obj, tNodes=[10], names=["U"], spaceCompo=[3], &
              timeCompo=[1], storageFMT=FMT_DOF)

! Initiate a vector of REAL using an instance of[[DOF_]]

CALL Initiate(Val=val, obj=obj)

CALL Display(Val, "CALL Initiate( Val=val, obj=obj ) : ")

CALL DEALLOCATE (obj)
END PROGRAM main
```
