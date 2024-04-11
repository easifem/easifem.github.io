PROGRAM main
USE BaseType, ONLY: BoundingBox_
USE BoundingBox_Method
USE GlobalData
USE Test_Method
IMPLICIT NONE

TYPE(BoundingBox_) :: obj
REAL(DFP) :: lim(6)

lim = [1, 2, 3, 4, 5, 6]
obj = BoundingBox(nsd=3, lim=lim)

CALL OK(IsInside(obj, [1.5_DFP]), "IsInside: ")
CALL OK(.NOT. IsInside(obj, [0.0_DFP]), "IsInside: ")
CALL OK(.NOT. IsInside(obj, [2.5_DFP]), "IsInside: ")

CALL OK(IsInside(obj, [1.5_DFP, 3.5_DFP]), "IsInside: ")
CALL OK(.NOT. IsInside(obj, [0.0_DFP, 3.5_DFP]), "IsInside: ")
CALL OK(.NOT. IsInside(obj, [2.5_DFP, 3.5_DFP]), "IsInside: ")

END PROGRAM main
