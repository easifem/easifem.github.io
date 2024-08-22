```fortran
PROGRAM main
USE GlobalData
USE RealVector_Method
USE BaseType, ONLY: RealVector_

IMPLICIT NONE

TYPE(RealVector_) :: obj

CALL Initiate(obj, 2, 10)
CALL Display(obj, "obj(a:b)=")

END PROGRAM main
```
