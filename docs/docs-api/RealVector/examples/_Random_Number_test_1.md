```fortran
PROGRAM main
USE GlobalData
USE BaseType, ONLY: RealVector_
USE RealVector_Method

IMPLICIT NONE

TYPE(RealVector_) :: obj

CALL RANDOM_NUMBER(obj, 5)
CALL Display(obj, "obj: ")
END PROGRAM main
```
