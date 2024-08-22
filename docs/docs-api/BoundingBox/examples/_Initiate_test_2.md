<!-- markdownlint-disable MD041 MD013 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj, obj2

CALL initiate(obj, 2, &
              [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])

CALL initiate(obj2, obj)
CALL display(obj2, msg="test2")
END PROGRAM main
```
