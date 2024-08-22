<!-- markdownlint-disable MD041 md013 -->

```fortran
PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj
TYPE(BoundingBox_), POINTER :: obj2

CALL initiate(obj, 2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
obj2 => BoundingBox_Pointer(obj)
CALL display(obj2, msg="test6")
END PROGRAM main
```
