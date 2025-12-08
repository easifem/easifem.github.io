# Initiate

Initiates an instance of the finite element either from a parameter list or from direct parameters.

```fortran
SUBROUTINE AbstractOneDimFEInitiate(obj, param)
```

- `obj` - The AbstractOneDimFE_ object to initialize
- `param` - Parameter list containing element configuration

Alternative form:

```fortran
SUBROUTINE AbstractOneDimFEInitiate(obj, baseContinuity, baseInterpolation,
ipType, basisType, alpha, beta, lambda, order, fetype,
quadratureType, quadratureOrder, quadratureNips,
quadratureAlpha, quadratureBeta, quadratureLambda)
```

## Interface 1

```fortran
! Method 1: Initialize from parameter list
MODULE SUBROUTINE obj_Initiate1(obj, param)
  CLASS(AbstractOneDimFE_), INTENT(INOUT) :: obj
  TYPE(ParameterList_), INTENT(IN) :: param
END SUBROUTINE obj_Initiate1
```

- `obj`: Finite element object to initialize (inout)
- `param`: Parameter list containing initialization parameters (input)

## Interface 2

```fortran
! Method 2: Initialize from direct parameters
MODULE SUBROUTINE obj_Initiate2(obj, baseContinuity, baseInterpolation, &
                      ipType, basisType, alpha, beta, lambda, order, fetype, &
                            quadratureType, quadratureOrder, quadratureNips, &
                            quadratureAlpha, quadratureBeta, quadratureLambda)
  CLASS(AbstractOneDimFE_), INTENT(INOUT) :: obj
  CHARACTER(*), INTENT(IN) :: baseContinuity
  CHARACTER(*), INTENT(IN) :: baseInterpolation
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
  REAL(DFP), OPTIONAL, INTENT(IN) :: beta
  REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: order
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: fetype
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: quadratureType
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: quadratureOrder
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: quadratureNips(1)
  REAL(DFP), OPTIONAL, INTENT(IN) :: quadratureAlpha
  REAL(DFP), OPTIONAL, INTENT(IN) :: quadratureBeta
  REAL(DFP), OPTIONAL, INTENT(IN) :: quadratureLambda
END SUBROUTINE obj_Initiate2
```

- `obj`: Finite element object to initialize (inout)
- `baseContinuity`: Continuity or Conformity of basis function (input)
  - Options: H1* (default), HDiv, HCurl, DG
- `baseInterpolation`: Basis function family used for interpolation (input)
  - Options: LagrangeInterpolation, LagrangePolynomial, etc.
- `ipType`: Interpolation point type (optional, input)
- `basisType`: Basis type (optional, input)
- `alpha`: Jacobi parameter (optional, input)
- `beta`: Jacobi parameter (optional, input)
- `lambda`: Ultraspherical parameters (optional, input)
- `order`: Isotropic Order of finite element (optional, input)
- `fetype`: Finite element type (optional, input)
- `quadratureType`: Quadrature type (optional, input)
- `quadratureOrder`: Accuracy of quadrature rule (optional, input)
- `quadratureNips`: Number of integration points (optional, input)
- `quadratureAlpha`: Jacobi parameter for quadrature (optional, input)
- `quadratureBeta`: Jacobi parameter for quadrature (optional, input)
- `quadratureLambda`: Ultraspherical parameter for quadrature (optional, input)
