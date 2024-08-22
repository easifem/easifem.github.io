<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj
REAL(DFP) :: lim(6)

lim = [1, 2, 3, 4, 5, 6]
obj = BoundingBox(nsd=3, lim=lim)

CALL Display(GetDiameter(obj), "GetDiameter: ")
CALL Display(GetDiameterSqr(obj), "GetDiameterSqr: ")
CALL Display(GetRadius(obj), "GetRadius: ")
CALL Display(GetRadiusSqr(obj), "GetRadiusSqr: ")

END PROGRAM main
```
