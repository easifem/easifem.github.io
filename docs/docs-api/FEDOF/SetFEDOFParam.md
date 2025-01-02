---
sidebar_position: 3
---

# SetFEDOFParam

Set the parameters of the finite element degree of freedom.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetFEDOFParam(param, baseContinuity, baseInterpolation, &
                            orderFile, ipType, basisType, alpha, beta, lambda)
    TYPE(ParameterList_), INTENT(INOUT) :: param
    CHARACTER(*), INTENT(IN) :: baseContinuity
    !! continuity or conformity of basis defined on reference
    CHARACTER(*), INTENT(IN) :: baseInterpolation
    !! Type of basis functions used for interpolation on reference
    CHARACTER(*), INTENT(IN) :: orderFile
    !! file containing the order of each element
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
    !! interpolation point type
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType(:)
    !! basis type, in x, y, and z direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha(:)
    !! jacobian parameter in x, y, and z direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta(:)
    !! jacobian parameter in x, y, and z direction
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda(:)
    !! ultraspherical parameter in x, y, and z direction
  END SUBROUTINE SetFEDOFParam
END INTERFACE
```
