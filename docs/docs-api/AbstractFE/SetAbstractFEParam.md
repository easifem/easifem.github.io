---
sidebar_positon: 3
---

# SetAbstractFEParam

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Set the parameters necessary for initiating an `AbstractFE_` or any of its children.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE SetFiniteElementParam
  MODULE SUBROUTINE SetAbstractFEParam( &
    & param, &
    & nsd, &
    & elemType, &
    & baseContinuity, &
    & baseInterpol, &
    & ipType, &
    & basisType, &
    & alpha, &
    & beta, &
    & lambda, &
    & order,  &
    & anisoOrder,  &
    & edgeOrder,  &
    & faceOrder,  &
    & cellOrder)
    TYPE(ParameterList_) :: param
    INTEGER(I4B), INTENT(IN) :: nsd
      !! Number of spatial dimension
    INTEGER(I4B), INTENT(IN) :: elemType
      !! Type of finite element
      !! Line, Triangle, Quadrangle, Tetrahedron, Prism, Pyramid,
      !! Hexahedron
    CHARACTER(*), INTENT(IN) :: baseContinuity
      !! Continuity or Conformity of basis function.
      !! This parameter is used to determine the nodal coordinates of
      !! reference element, when xij is not present.
      !! If xij is present then this parameter is ignored
      !! H1* (default), HDiv, HCurl, DG
    CHARACTER(*), INTENT(IN) :: baseInterpol
      !! Basis function family used for interpolation.
      !! This parameter is used to determine the nodal coordinates of
      !! reference element, when xij is not present.
      !! If xij is present then this parameter is ignored
      !! LagrangeInterpolation, LagrangePolynomial
      !! SerendipityInterpolation, SerendipityPolynomial
      !! HierarchyInterpolation, HierarchyPolynomial
      !! OrthogonalInterpolation, OrthogonalPolynomial
      !! HermitInterpolation, HermitPolynomial
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: ipType
      !! Interpolation point type, It is required when
      !! baseInterpol is LagrangePolynomial
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType(:)
      !! Basis type: Legendre, Lobatto, Ultraspherical,
      !! Jacobi, Monomial
    REAL(DFP), OPTIONAL, INTENT(IN) :: alpha(:)
      !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: beta(:)
      !! Jacobi parameter
    REAL(DFP), OPTIONAL, INTENT(IN) :: lambda(:)
      !! Ultraspherical parameters
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: order
      !! Isotropic Order of finite element
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: anisoOrder(:)
    !! Anisotropic order, order in x, y, and z directions
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: edgeOrder(:)
      !! Order of approximation along edges
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: faceOrder(:)
      !! Order of approximation along face
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: cellOrder(:)
      !! Order of approximation along cell
  END SUBROUTINE SetAbstractFEParam
END INTERFACE SetFiniteElementParam
```

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

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

## Finite elements on Triangle

H1 conforming Lagrange polynomials:

- `baseContinuity`: `H1`
- `baseInterpol`: `Lagrange`
- `basisType`: `Monomial`, `Hierarchy`, `Orthogonal`
- `ipType`: `Equidistance`, `LegendreLobatto`, `ChebyshevLobatto`, `UltrasphericalLobatto`, `JacobiLobatto`

H1 conforming Orthogonal polynomials:

- `baseContinuity`: `H1`
- `baseInterpol`: `Orthogonal`
- `baseType`: NA
- `ipType`: NA

H1 conforming Hierarchical polynomial:

- `baseContinuity`: `H1`
- `baseInterpol`: `Hierarchy`
- `basisType`: NA
- `ipType`: NA

## Finite elements on Quadrangle

H1 conforming Lagrange polynomials:

- `baseContinuity`: `H1`
- `baseInterpol`: `Lagrange`
- `basisType`: `Monomial`, `Hierarchy`, `Orthogonal`
- `ipType`: `Equidistance`, `LegendreLobatto`, `ChebyshevLobatto`, `UltrasphericalLobatto`, `JacobiLobatto`

H1 conforming Orthogonal polynomials:

- `baseContinuity`: `H1`
- `baseInterpol`: `Orthogonal`
- `baseType`: NA
- `ipType`: NA

H1 conforming Hierarchical polynomial:

- `baseContinuity`: `H1`
- `baseInterpol`: `Hierarchy`
- `basisType`: NA
- `ipType`: NA
