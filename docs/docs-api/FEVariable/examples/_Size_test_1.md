```fortran
! This example show how to use Size method to

PROGRAM main
USE BaseType
USE FEVariable_Method
USE GlobalData
USE Display_Method
USE Test_Method
USE ArangeUtility

IMPLICIT NONE

TYPE(FEVariable_) :: obj
INTEGER(I4B) :: found, want
LOGICAL(LGT) :: isok

! NodalVariable, scalar, constant

obj = NodalVariable(1.0_DFP, typeFEVariableScalar, typeFEVariableConstant)
found = SIZE(obj)
want = 1
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

obj = NodalVariable(1.0_DFP, typeFEVariableScalar, typeFEVariableConstant)
found = SIZE(obj, 1)
want = 1
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

! NodalVariable, scalar, space
obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableSpace)
found = SIZE(obj, 1)
want = 4
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

found = SIZE(obj)
want = 1
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

! NodalVariable, scalar, time
obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableTime)
found = SIZE(obj, 1)
want = 4
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

found = SIZE(obj)
want = 1
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

! NodalVariable, scalar, space-time
obj = NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
                    typeFEVariableScalar, &
                    typeFEVariableSpaceTime)
found = SIZE(obj, 1)
want = 3
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

found = SIZE(obj, 2)
want = 2
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

found = SIZE(obj)
want = 1
isok = found == want
CALL OK(isok, "Size: ")
IF (.NOT. isok) CALL Display([found, want], "found, want = ")

END PROGRAM main
```
