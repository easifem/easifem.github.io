---
title: FEVariable example 21c
author: Vikas Sharma, Ph. D.
date: 21 Nov 2021
update: 21 Nov 2021
tags:
  - FEVariable/NodalVariable
  - FEVariable/Display
---

# FEVariable example 21c

!!! note ""
This example tests subtraction operator. Scalar Quadrature

## Use association

- [[FEVariable_]]

## Usage

!!! note "Import modules and declare variable"

```fortran
PROGRAM main
  USE easifemBase
  IMPLICIT NONE
  TYPE(FEVariable_) :: obj
```

!!! note "constant-constant"

```fortran
obj = QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant ) &
    - QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant )
CALL Display(obj, "constant-constant")
```

```fortran
obj = QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant ) &
    - 1.0_DFP 
CALL Display(obj, "constant-constant")
```

!!! note "space-constant"

```fortran
call display("=================================")
obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpace ) &
    - QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant )
CALL Display(obj, "space-constant")
```

```fortran
call display("=================================")
obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpace ) &
    - 1.0_DFP
CALL Display(obj, "space-constant")
```

!!! note "time-constant"

```fortran
call display("=================================")
obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableTime ) &
    - QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant )
CALL Display(obj, "time-constant")
```

```fortran
call display("=================================")
obj = QuadratureVariable( arange(1.0_DFP, 3.0_DFP), &
                    & typeFEVariableScalar, &
                    & typeFEVariableTime ) &
    - 1.0_DFP 
CALL Display(obj, "time-constant")
```

!!! note "spacetime-constant"

```fortran
call display("=================================")
obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpaceTime ) &
    - QuadratureVariable( 1.0_DFP, &
                    & typeFEVariableScalar,    &
                    & typeFEVariableConstant )
CALL Display(obj, "spacetime - constant")
```

```fortran
call display("=================================")
obj = QuadratureVariable( reshape(arange(1.0_DFP, 6.0_DFP), [3,2]), &
                    & typeFEVariableScalar, &
                    & typeFEVariableSpaceTime ) &
    - 1.0_DFP 
CALL Display(obj, "spacetime - constant")
```

```fortran
END PROGRAM main
```
