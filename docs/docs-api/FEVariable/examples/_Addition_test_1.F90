! This example tests addition (+) operator for scalar nodal-variable.

PROGRAM main
USE easifemBase
IMPLICIT NONE
TYPE(FEVariable_) :: obj
TYPE(FEVariable_) :: ans

! constant + constant

obj = NodalVariable(1.0_DFP, &
                    typeFEVariableScalar, &
                    typeFEVariableConstant) &
      + NodalVariable(2.0_DFP, &
                      typeFEVariableScalar, &
                      typeFEVariableConstant)
ans = NodalVariable(3.0_DFP, &
                    typeFEVariableScalar, &
                    typeFEVariableConstant)
CALL OK(obj .EQ. ans, 'constant+constant')

obj = NodalVariable( &
      1.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableConstant) &
      + 2.0_DFP
ans = NodalVariable( &
      3.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableConstant)
CALL OK(obj .EQ. ans, 'constant+constant')

! space + constant

obj = NodalVariable( &
      arange(1.0_DFP, 3.0_DFP), &
      typeFEVariableScalar, &
      typeFEVariableSpace) &
      + NodalVariable(10.0_DFP, &
                      typeFEVariableScalar, &
                      typeFEVariableConstant)
ans = NodalVariable( &
      arange(1.0_DFP, 3.0_DFP) + 10.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableSpace)
CALL OK(obj .EQ. ans, 'space+constant')

obj = NodalVariable( &
      arange(1.0_DFP, 3.0_DFP), &
      typeFEVariableScalar, &
      typeFEVariableSpace) &
      + 10.0_DFP
ans = NodalVariable( &
      arange(1.0_DFP, 3.0_DFP) + 10.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableSpace)
CALL OK(obj .EQ. ans, 'space+constant')

! time + constant

obj = NodalVariable( &
      arange(0.0_DFP, 3.0_DFP), &
      typeFEVariableScalar, &
      typeFEVariableTime) &
      + NodalVariable(10.0_DFP, &
                      typeFEVariableScalar, &
                      typeFEVariableConstant)
ans = NodalVariable( &
      arange(0.0_DFP, 3.0_DFP) + 10.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableTime)
CALL OK(obj .EQ. ans, 'time+constant')

obj = NodalVariable(arange(0.0_DFP, 3.0_DFP), &
                    typeFEVariableScalar, &
                    typeFEVariableTime) &
      + 10.0_DFP
ans = NodalVariable( &
      arange(0.0_DFP, 3.0_DFP) + 10.0_DFP, &
      typeFEVariableScalar, &
      typeFEVariableTime)
CALL OK(obj .EQ. ans, 'time+constant')

! spacetime + constant

obj = NodalVariable( &
      RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
      typeFEVariableScalar, &
      typeFEVariableSpaceTime) &
      + NodalVariable(10.0_DFP, &
                      typeFEVariableScalar, &
                      typeFEVariableConstant)
ans = NodalVariable( &
      RESHAPE(arange(1.0_DFP, 6.0_DFP) + 10.0_DFP, [3, 2]), &
      typeFEVariableScalar, &
      typeFEVariableSpaceTime)
CALL OK(obj .EQ. ans, 'spacetime+constant')

obj = NodalVariable(RESHAPE(arange(1.0_DFP, 6.0_DFP), [3, 2]), &
                    typeFEVariableScalar, &
                    typeFEVariableSpaceTime) &
      + 10.0_DFP
ans = NodalVariable( &
      RESHAPE(arange(1.0_DFP, 6.0_DFP) + 10.0_DFP, [3, 2]), &
      typeFEVariableScalar, &
      typeFEVariableSpaceTime)
CALL OK(obj .EQ. ans, 'spacetime+constant')

END PROGRAM main
