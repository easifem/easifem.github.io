<!-- markdownlint-disable MD041 MD013 MD033 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj

CALL initiate(obj, nsd=2, &
              lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])

CALL OK(IsEmpty(obj) .EQV. .FALSE., "IsEmpty: ")

CALL initiate(obj, nsd=2, &
              lim=[0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP, 0.0_DFP])
CALL OK(IsEmpty(obj), msg="IsEmpty:  ")

END PROGRAM main
```
