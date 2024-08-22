! This example show how to use Size method to

PROGRAM main
USE BaseType
USE FEVariable_Method
USE GlobalData
USE Display_Method
USE Test_Method
USE ArangeUtility
USE AppendUtility

IMPLICIT NONE

TYPE(FEVariable_) :: obj
INTEGER(I4B), ALLOCATABLE :: found(:), want(:)
LOGICAL(LGT) :: isok

! NodalVariable, scalar, constant

obj = NodalVariable(1.0_DFP, typeFEVariableScalar, typeFEVariableConstant)
found = SHAPE(obj)
want = [1]
isok = ALL(found == want)
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display(found.colconcat.want, "found, want = ")

! NodalVariable, scalar, space
obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableSpace)
found = SHAPE(obj)
want = [4]
isok = ALL(found == want)
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display(found.colconcat.want, "found, want = ")

! NodalVariable, scalar, time
obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableTime)
found = SHAPE(obj)
want = [4]
isok = ALL(found == want)
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display(found.colconcat.want, "found, want = ")

! NodalVariable, scalar, space-time
obj = NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
                    typeFEVariableScalar, &
                    typeFEVariableSpaceTime)
found = SHAPE(obj)
want = [3, 2]
isok = ALL(found == want)
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display(found.colconcat.want, "found, want = ")

END PROGRAM main
