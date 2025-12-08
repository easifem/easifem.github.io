# GetQuadraturePoints

Generates quadrature points and weights for numerical integration on the one-dimensional element.

```fortran
SUBROUTINE obj_GetQuadraturePoints(obj, quad, quadratureType, order, alpha, beta, lambda)
```

## Interface

Computes and populates the quadrature points for the finite element based on the specified parameters.

```fortran
MODULE SUBROUTINE obj_GetQuadraturePoints(obj, quad, quadratureType, &
                                          order, alpha, beta, lambda)
  CLASS(AbstractOneDimFE_), INTENT(INOUT) :: obj
  TYPE(QuadraturePoint_), INTENT(INOUT) :: quad
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: quadratureType
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: order
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
  REAL(DFP), OPTIONAL, INTENT(IN) :: beta
  REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
END SUBROUTINE obj_GetQuadraturePoints
```

- `obj`: AbstractOneDimFE_ instance (inout)
- `quad`: Quadrature points to be populated (inout)
- `quadratureType`: Type of quadrature points (optional, input)
  - Options: GaussLegendre, GaussLegendreLobatto, GaussLegendreRadau, etc.
- `order`: Order of integrand (optional, input)
  - Either the order or the nips should be present
  - Both nips and order should not be present
- `alpha`: Jacobi parameter (optional, input)
- `beta`: Jacobi parameter (optional, input)
- `lambda`: Ultraspherical parameter (optional, input)

