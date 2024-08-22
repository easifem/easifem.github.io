PROGRAM main
USE easifemBase
IMPLICIT NONE

TYPE(BoundingBox_) :: obj
obj = boundingBox( &
      RESHAPE([0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP], [2, 3]))
CALL display(obj, "test5")

END PROGRAM main
