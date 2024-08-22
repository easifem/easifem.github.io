! This example tests additional OPERATOR for scalar nodal values.

PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(FEVariable_) :: obj

! constant + space

CALL display("=================================")
obj = NodalVariable(10.0_DFP, &
  & typeFEVariableScalar,    &
  & typeFEVariableConstant) &
  + NodalVariable(arange(1.0_DFP, 3.0_DFP), &
  & typeFEVariableScalar, &
  & typeFEVariableSpace)
CALL Display(obj, "constnat+space")

! space + space

CALL display("=================================")
obj = NodalVariable(arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpace) &
    + NodalVariable(arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpace)
CALL Display(obj, "space+space")

! constant + time

CALL display("=================================")
obj = NodalVariable(10.0_DFP, &
  & typeFEVariableScalar,    &
  & typeFEVariableConstant) &
  + NodalVariable(arange(1.0_DFP, 3.0_DFP), &
  & typeFEVariableScalar, &
  & typeFEVariableTime)
CALL Display(obj, "constant+time")

! time + time

CALL display("=================================")
obj = NodalVariable(arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableTime) &
    + NodalVariable(arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableTime)
CALL Display(obj, "time+time")

! constant + spacetime

CALL display("=================================")
obj = NodalVariable(10.0_DFP, &
  & typeFEVariableScalar,    &
  & typeFEVariableConstant) &
  + NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
  & typeFEVariableScalar, &
  & typeFEVariableSpaceTime)
CALL Display(obj, "constant+spacetime")

! spacetime + spacetime

CALL display("=================================")
obj = NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
  & typeFEVariableScalar, &
  & typeFEVariableSpaceTime) &
  + NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
  & typeFEVariableScalar, &
  & typeFEVariableSpaceTime)
CALL Display(obj, "spacetime+spacetime")

END PROGRAM main
