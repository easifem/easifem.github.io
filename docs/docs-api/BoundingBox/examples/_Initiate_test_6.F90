
PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(BoundingBox_), POINTER :: obj
obj => BoundingBox_Pointer(2, [0.0_DFP, 1.0_DFP, 0.0_DFP, 1.0_DFP, 0.0_DFP, 0.0_DFP])
CALL display(obj, msg="test6")
END PROGRAM main
