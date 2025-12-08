# GetQuadraturePoints

The `GetQuadraturePoints` method generates quadrature points for numerical integration over a finite element.

## Interface 1

```fortran
MODULE SUBROUTINE obj_GetQuadraturePoints1(obj, quad, globalElement, &
                          quadratureType, order, alpha, beta, lambda, islocal)
  CLASS(FEDOF_), INTENT(INOUT) :: obj
  !! fedof object
  TYPE(QuadraturePoint_), INTENT(INOUT) :: quad
  !! quadrature points
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global element number
  INTEGER(I4B), INTENT(IN) :: quadratureType
  !! Type of quadrature points
  !! GaussLegendre ! GaussLegendreLobatto
  !! GaussLegendreRadau, GaussLegendreRadauLeft
  !! GaussLegendreRadauRight ! GaussChebyshev
  !! GaussChebyshevLobatto ! GaussChebyshevRadau, GaussChebyshevRadauLeft
  !! GaussChebyshevRadauRight
  INTEGER(I4B), INTENT(IN) :: order
  !! Order of integrand
  !! either the order or the nips should be present
  !! Both nips and order should not be present
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha
  !! Jacobi parameter
  REAL(DFP), OPTIONAL, INTENT(IN) :: beta
  !! Jacobi parameter
  REAL(DFP), OPTIONAL, INTENT(IN) :: lambda
  !! Ultraspherical parameter
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then global element is local element
END SUBROUTINE obj_GetQuadraturePoints1
```

## Interface 2

```fortran
MODULE SUBROUTINE obj_GetQuadraturePoints2(obj, quad, globalElement, &
         p, q, r, quadratureType1, quadratureType2, quadratureType3, alpha1, &
      beta1, lambda1, alpha2, beta2, lambda2, alpha3, beta3, lambda3, islocal)
  CLASS(FEDOF_), INTENT(INOUT) :: obj
  !! abstract finite element
  TYPE(QuadraturePoint_), INTENT(INOUT) :: quad
  !! quadrature point
  INTEGER(I4B), INTENT(IN) :: globalElement
  !! global element number
  INTEGER(I4B), INTENT(IN) :: p
  !! order of integrand in x
  INTEGER(I4B), INTENT(IN) :: q
  !! order of integrand in y
  INTEGER(I4B), INTENT(IN) :: r
  !! order of integrand in z direction
  INTEGER(I4B), INTENT(IN) :: quadratureType1
  !! Type of quadrature points ! GaussLegendre ! GaussLegendreLobatto
  !! GaussLegendreRadau ! GaussLegendreRadauLeft ! GaussLegendreRadauRight
  !! GaussChebyshev ! GaussChebyshevLobatto ! GaussChebyshevRadau
  !! GaussChebyshevRadauLeft ! GaussChebyshevRadauRight
  INTEGER(I4B), INTENT(IN) :: quadratureType2
  !! Type of quadrature points
  INTEGER(I4B), INTENT(IN) :: quadratureType3
  !! Type of quadrature points
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha1, beta1, lambda1
  !! Jacobi parameter and Ultraspherical parameters
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha2, beta2, lambda2
  !! Jacobi parameter and Ultraspherical parameters
  REAL(DFP), OPTIONAL, INTENT(IN) :: alpha3, beta3, lambda3
  !! Jacobi parameter and Ultraspherical parameters
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  !! if true then the global element is local element
END SUBROUTINE obj_GetQuadraturePoints2
```

## Description

The `GetQuadraturePoints` method generates quadrature points for numerical integration over a finite element. It provides two variants:

1. `GetQuadraturePoints1` - For isotropic integration (same order in all directions)
2. `GetQuadraturePoints2` - For anisotropic integration (different orders in different directions)

These quadrature points are essential for accurately evaluating integrals in the finite element formulation.

### Parameters for GetQuadraturePoints1 (Isotropic)

- `obj` - Input/Output, `CLASS(FEDOF_)`, FEDOF object instance
- `quad` - Output, `TYPE(QuadraturePoint_)`, quadrature points object
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `quadratureType` - Input, `INTEGER(I4B)`, type of quadrature rule (Gauss-Legendre, Gauss-Chebyshev, etc.)
- `order` - Input, `INTEGER(I4B)`, polynomial order of the integrand
- `alpha`, `beta` - Optional Input, `REAL(DFP)`, Jacobi polynomial parameters
- `lambda` - Optional Input, `REAL(DFP)`, Ultraspherical polynomial parameter
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element number

### Parameters for GetQuadraturePoints2 (Anisotropic)

- `obj` - Input/Output, `CLASS(FEDOF_)`, FEDOF object instance
- `quad` - Output, `TYPE(QuadraturePoint_)`, quadrature points object
- `globalElement` - Input, `INTEGER(I4B)`, global or local element number
- `p`, `q`, `r` - Input, `INTEGER(I4B)`, polynomial orders in x, y, and z directions
- `quadratureType1`, `quadratureType2`, `quadratureType3` - Input, `INTEGER(I4B)`, quadrature rule types for each direction
- `alpha1`, `beta1`, `lambda1`, etc. - Optional Input, `REAL(DFP)`, polynomial parameters for each direction
- `islocal` - Optional Input, `LOGICAL(LGT)`, if true, `globalElement` is treated as a local element number

### Implementation Details

Both methods determine the element topology and delegate to the appropriate finite element object:

```fortran
ii = obj%mesh%GetElemTopologyIndx(globalElement=globalElement, islocal=islocal)

CALL obj%fe(ii)%ptr%GetQuadraturePoints(quad=quad, order=order,
quadratureType = quadratureType, alpha = alpha, beta = beta, lambda = lambda)
```

For the anisotropic version:

```fortran
CALL obj%fe(ii)%ptr%GetQuadraturePoints(quad=quad, p=p, q=q, r=r,
quadratureType1 = quadratureType1, quadratureType2 = quadratureType2,
quadratureType3 = quadratureType3, alpha1 = alpha1, beta1 = beta1,
lambda1 = lambda1, alpha2 = alpha2, beta2 = beta2, lambda2 = lambda2,
alpha3 = alpha3, beta3 = beta3, lambda3 = lambda3)
```

## Usage Example

```fortran
! Example to get quadrature points for numerical integration
USE QuadraturePoint_Class
TYPE(QuadraturePoint_) :: myQuad
TYPE(FEDOF_) :: myDOF

! Isotropic quadrature (same order in all directions)
CALL myDOF%GetQuadraturePoints(quad=myQuad, globalElement=5, &
                               quadratureType=GaussLegendre, order=4)

! Anisotropic quadrature (different orders in different directions)
CALL myDOF%GetQuadraturePoints(quad=myQuad, globalElement=5, &
                               p=4, q=3, r=2, &
                               quadratureType1=GaussLegendre, &
                               quadratureType2=GaussLegendre, &
                               quadratureType3=GaussLegendre)

! Now use myQuad for numerical integration
! ...
```

## Important Notes

1. The `quadratureType` parameters should use predefined constants for different quadrature rules
2. The order should typically be at least twice the polynomial order of the element for accurate integration
3. Special parameters (alpha, beta, lambda) allow customization of certain quadrature rules
4. Different element types (triangles, tetrahedra, etc.) require appropriate quadrature rule selections

## Related Methods

- `GetLocalElemShapeData` - Uses quadrature points to evaluate shape functions
- `GetGlobalElemShapeData` - Maps quadrature points to the global coordinate system
- `GetCellOrder` - Can be used to determine appropriate integration order

The `GetQuadraturePoints` method is a fundamental component of finite element analysis, providing the integration points and weights necessary for accurately evaluating weak form integrals in the finite element method.

## Example 1

import EXAMPLE163 from "./examples/_GetQuadraturePoints_test_1.md";

<EXAMPLE163 />
