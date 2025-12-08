---
sidebar_positon: 3
---

# SetAbstractFEParam

Set the parameters necessary for initiating an `AbstractOneDimFE_` or any of its children.

## Interface

```fortran
SUBROUTINE SetAbstractOneDimFEParam(param, prefix, baseContinuity, 
  baseInterpolation, ipType, basisType, alpha, beta, lambda, order, fetype,
  quadratureType, quadratureOrder, quadratureNips, quadratureAlpha,
  quadratureBeta, quadratureLambda)
```

Sets up the parameter list with values needed to initialize an `AbstractOneDimFE_` object.

- `param` - ParameterList to be populated with element parameters
- `prefix` - Prefix for parameter names
- `baseContinuity` - Continuity type (H1, HDiv, HCurl, DG)
- `baseInterpolation` - Interpolation type
- `ipType` - Interpolation point type (optional)
- `basisType` - Type of basis functions (optional)
- `alpha` - Jacobi parameter (optional)
- `beta` - Jacobi parameter (optional)
- `lambda` - Ultraspherical parameter (optional)
- `order` - Element order
- `fetype` - Finite element type (optional)
- `quadratureType` - Type of quadrature rule (optional)
- `quadratureOrder` - Order of quadrature rule (optional)
- `quadratureNips` - Number of integration points (optional)
- `quadratureAlpha` - Quadrature Jacobi parameter (optional)
- `quadratureBeta` - Quadrature Jacobi parameter (optional)
- `quadratureLambda` - Quadrature Ultraspherical parameter (optional)

## Finite elements on Line

H1 conforming Lagrange polynomials on line:

- `baseContinuity`: `H1`
- `baseInterpol`: `Lagrange`
- `basisType`: `Monomial`, `Legendre`, `Lobatto`, `Jacobi`, `Ultraspherical`
- `ipType`: `Equidistance`, `LegendreLobatto`, `ChebyshevLobatto`, `UltrasphericalLobatto`, `JacobiLobatto`

H1 conforming Orthogonal polynomials on line:

- `baseContinuity`: `H1`
- `baseInterpol`: `Orthogonal`
- `baseType`: `Legendre`, `Lobatto`, `Jacobi`, `Ultraspherical`
- `ipType`: NA

H1 conforming Hierarchical polynomial on line:

- `baseContinuity`: `H1`
- `baseInterpol`: `Hierarchy`
- `basisType`: NA
- `ipType`: NA

- For `baseType=Jacobi`, `alpha` and `beta` should be specified.
- For `baseType=Ultraspherical`, `lambda` should be specified.

