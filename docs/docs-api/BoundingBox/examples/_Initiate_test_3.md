<!-- markdownlint-disable MD041 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj

obj = BoundingBox(nsd=2, &
                  lim=[0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
CALL display(obj, msg="test3")

END PROGRAM main
```
