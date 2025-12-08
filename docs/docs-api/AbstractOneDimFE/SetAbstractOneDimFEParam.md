# SetAbstractOneDimFEParam

Sets the parameters for initiating abstract finite element.

## Interface

```fortran
MODULE SUBROUTINE SetAbstractOneDimFEParam(param, prefix, baseContinuity, &
   baseInterpolation, ipType, basisType, alpha, beta, lambda, order, fetype, &
           quadratureType, quadratureOrder, quadratureNips, quadratureAlpha, &
                                           quadratureBeta, quadratureLambda)
```

## Parameters

- `param`: ParameterList to be populated (inout)
- `prefix`: String prefix for parameter names (input)
- `order`: Isotropic Order of finite element (input)
- `baseContinuity`: Continuity or Conformity of basis function (input)
  - Options: H1* (default), HDiv, HCurl, DG
  - Used to determine nodal coordinates of reference element when xij is not present
- `baseInterpolation`: Basis function family used for interpolation (input)
  - Options: LagrangeInterpolation, LagrangePolynomial, SerendipityInterpolation, etc.
  - Used to determine nodal coordinates of reference element when xij is not present
- `ipType`: Interpolation point type (optional, input)
  - Required when baseInterpol is LagrangePolynomial
  - Default is Equidistance
- `basisType`: Basis type: Legendre, Lobatto, Ultraspherical, Jacobi, Monomial (optional, input)
- `alpha`: Jacobi parameter (optional, input)
- `beta`: Jacobi parameter (optional, input)
- `lambda`: Ultraspherical parameters (optional, input)
- `fetype`: Finite element type (optional, input)
  - Default is Scalar, for HDiv and Hcurl it should be Vector
- `quadratureType`: Quadrature type (optional, input)
- `quadratureOrder`: Accuracy of quadrature rule (optional, input)
- `quadratureNips`: Number of integration points (optional, input)
- `quadratureAlpha`: Jacobi parameter for quadrature (optional, input)
- `quadratureBeta`: Jacobi parameter for quadrature (optional, input)
- `quadratureLambda`: Ultraspherical parameter for quadrature (optional, input)

## Description

This subroutine populates a ParameterList_with the required parameters for initializing an AbstractOneDimFE_ object.
