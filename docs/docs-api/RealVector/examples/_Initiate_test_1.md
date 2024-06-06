```fortran
PROGRAM main
USE BaseType, ONLY: RealVector_
USE GlobalData
USE RealVector_Method

IMPLICIT NONE

TYPE(RealVector_) :: obj

CALL ALLOCATE (obj, 10)
CALL Display(obj, "test1")

obj = RealVector(10)
CALL Display(obj, "test1")

CALL Initiate(obj, 10)
CALL Display(obj, "test1")

END PROGRAM main
```
