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

- `baseContinuity` is the continuity or conformity of the basis
- `baseInterpolation` denotes interpolation of the basis type
- `orderFile` file containing the order of each element
- `ipType` is the interpolation point type. It is needed in the case of Lagrange polynomials.
- `basisType` is the type of basis function in x, y, and z directions.
- `alpha` is the Jacobian parameter in x, y, and z directions.
- `beta` is the Jacobian parameter in x, y, and z directions.
- `lambda` is the Ultraspherical parameter in x, y, and z directions.
