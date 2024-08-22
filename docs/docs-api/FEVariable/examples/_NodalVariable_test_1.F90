! This example show how to use NodalVariable method to
! generate Scalar variables at node.

PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(FEVariable_) :: obj

! NodalVariable, scalar, constant

obj = NodalVariable(1.0_DFP, typeFEVariableScalar, typeFEVariableConstant)
CALL Display(obj, "NodalVariable, Scalar, Constant")

! NodalVariable, scalar, space

obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableSpace)
CALL Display(obj, "NodalVariable, scalar, space")

! NodalVariable, scalar, time

obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), typeFEVariableScalar, &
                    typeFEVariableTime)
CALL Display(obj, "NodalVariable, scalar, time")

! NodalVariable, scalar, space-time

obj = NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
                    typeFEVariableScalar, &
                    typeFEVariableSpaceTime)
CALL Display(obj, "NodalVariable, scalar, space-time")

END PROGRAM main
