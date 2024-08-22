PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj, obj2

CALL initiate(obj, 2, &
              [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
obj2 = BoundingBox(obj)
CALL display(obj2, msg="test4")

END PROGRAM main
