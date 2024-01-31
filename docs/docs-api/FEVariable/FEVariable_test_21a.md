This example shows the use of subtraction operator for scalar-nodal-variable.

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

!!! note "constant-constant"

```fortran
  obj = NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant ) &
      - NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "constant-constant")
```

```fortran
  obj = NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant ) &
      - 1.0_DFP 
  CALL Display(obj, "constant-constant")
```

!!! note "space-constant"

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace ) &
      - NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "space-constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpace ) &
      - 1.0_DFP
  CALL Display(obj, "space-constant")
```

!!! note "time-constant"

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime ) &
      - NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "time-constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( arange(1.0_DFP, 3.0_DFP), &
                      & typeFEVariableScalar, &
                      & typeFEVariableTime ) &
      - 1.0_DFP 
  CALL Display(obj, "time-constant")
```

!!! note "spacetime-constant"

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpaceTime ) &
      - NodalVariable( 1.0_DFP, &
                      & typeFEVariableScalar,    &
                      & typeFEVariableConstant )
  CALL Display(obj, "spacetime - constant")
```

```fortran
  call display("=================================")
  obj = NodalVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                      & typeFEVariableScalar, &
                      & typeFEVariableSpaceTime ) &
      - 1.0_DFP 
  CALL Display(obj, "spacetime - constant")
```

```fortran
END PROGRAM main
```