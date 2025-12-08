# GetParam

Retrieves various parameters from an `AbstractOneDimFE_` object.

```fortran
SUBROUTINE obj_GetParam(obj, order, fetype, ipType, basisType, alpha, beta, lambda, 
refElemDomain, baseContinuity, baseInterpolation, firstCall, isInitiated,
quadratureType, quadratureOrder, quadratureNips, quadratureAlpha,
quadratureBeta, quadratureLambda)
```

- `obj` - The AbstractOneDimFE_ object
- `order` - Element order (optional, output)
- `fetype` - Finite element type (optional, output)
- `ipType` - Interpolation point type (optional, output)
- `basisType` - Basis function type (optional, output)
- `alpha` - Jacobi parameter (optional, output)
- `beta` - Jacobi parameter (optional, output)
- `lambda` - Ultraspherical parameter (optional, output)
- `baseContinuity` - Continuity type (optional, output)
- `baseInterpolation` - Interpolation type (optional, output)
- `refElemDomain` - Reference element domain (optional, output)
- `firstCall` - First call flag (optional, output)
- `isInitiated` - Initialization status (optional, output)
- `quadratureType` - Quadrature type (optional, output)
- `quadratureOrder` - Quadrature order (optional, output)
- `quadratureNips` - Number of integration points (optional, output)
- `quadratureAlpha` - Quadrature Jacobi parameter (optional, output)
- `quadratureBeta` - Quadrature Jacobi parameter (optional, output)
- `quadratureLambda` - Quadrature Ultraspherical parameter (optional, output)
