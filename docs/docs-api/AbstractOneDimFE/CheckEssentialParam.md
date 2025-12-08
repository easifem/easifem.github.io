# AbstractOneDimFECheckEssentialParam

Checks if all required parameters are present in the parameter list before element initialization.

```fortran
SUBROUTINE AbstractOneDimFECheckEssentialParam(obj, param)
```

- `obj` - The AbstractOneDimFE_ object
- `param` - The parameter list to check

## Interface

```fortran
MODULE SUBROUTINE obj_CheckEssentialParam(obj, param)
  CLASS(AbstractOneDimFE_), INTENT(IN) :: obj
  TYPE(ParameterList_), INTENT(IN) :: param
END SUBROUTINE obj_CheckEssentialParam
```

- `obj`: The AbstractOneDimFE_ instance (input)
- `param`: Parameter list to check (input)

## Description

This routine checks if all the required parameters are present in the parameter list for initializing the AbstractOneDimFE_ object. The essential parameters include:

- order
- fetype
- ipType
- refElemDomain
- baseContinuity
- baseInterpolation
- basisType
- alpha
- beta
- lambda
