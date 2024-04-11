<!-- markdownlint-disable MD041 MD013 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj

CALL initiate(obj, nsd=2, &
              lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
CALL display(obj, msg="test1")

END PROGRAM main
```
