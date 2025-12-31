# SetParam

Sets various parameters of an `AbstractOneDimFE_` object.

## Interface

```fortran
SUBROUTINE obj_SetParam(obj, order, fetype, ipType, basisType, alpha, beta, lambda, 
refElemDomain, baseContinuity, baseInterpolation, firstCall,
quadratureType, quadratureOrder, quadratureNips, quadratureAlpha,
quadratureBeta, quadratureLambda)
```

- `obj` - The AbstractOneDimFE_ object
- `order` - Element order (optional)
- `fetype` - Finite element type (optional)
- `ipType` - Interpolation point type (optional)
- `basisType` - Basis function type (optional)
- `alpha` - Jacobi parameter (optional)
- `beta` - Jacobi parameter (optional)
- `lambda` - Ultraspherical parameter (optional)
- `baseContinuity` - Continuity type (optional)
- `baseInterpolation` - Interpolation type (optional)
- `refElemDomain` - Reference element domain (optional)
- `firstCall` - First call flag (optional)
- `quadratureType` - Quadrature type (optional)
- `quadratureOrder` - Quadrature order (optional)
- `quadratureNips` - Number of integration points (optional)
- `quadratureAlpha` - Quadrature Jacobi parameter (optional)
- `quadratureBeta` - Quadrature Jacobi parameter (optional)
- `quadratureLambda` - Quadrature Ultraspherical parameter (optional)


