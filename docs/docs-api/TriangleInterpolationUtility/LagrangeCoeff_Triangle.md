# LagrangeCoeff_Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the coefficients for Lagrange polynomial.

This function returns the coefficient of basis functions.

$$
p_{n}(x,y) = \sum_{a=0}\sum_{b=0}{c_{a,b}x^{a}y^{b}}
$$

This routine returns $c_{a,b}$.

:::note
There are four interfaces for this function.
:::

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Triangle(order, i, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    INTEGER(I4B), INTENT(IN) :: i
    !! ith coefficients for lagrange polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2)
    REAL(DFP) :: ans(SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Triangle
END INTERFACE
```

:::info `order`
Order of Lagrange polynomial.
:::

:::info `i`
ith Lagrnage polynomial.
:::

:::info `xij`
Points in `xij` format, size(xij,2) denotes the number of points. These are actually the interpolation points.
:::

:::note

- This subroutine will use the monomial basis functions.
- Internally we compute the Vandermonde matrix and then solve it to get the coefficients.

:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE40 from "./examples/_LagrangeCoeff_Triangle_test_3.md";

<EXAMPLE40 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Triangle(order, i, v, isVandermonde) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(v,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! ith lagrange polynomial
    REAL(DFP), INTENT(IN) :: v(:, :)
    !! vandermonde matrix size should be (order+1,order+1)
    LOGICAL(LGT), INTENT(IN) :: isVandermonde
    !! This is just to resolve interface issue
    REAL(DFP) :: ans(SIZE(v, 1))
    !! coefficients of ith Lagrange polynomial
  END FUNCTION LagrangeCoeff_Triangle
END INTERFACE
```

:::info `order`
order of Lagrange polynomial, it should be equal to the SIZE(v,2)-1.
:::

:::info `i`
ith Lagrange polynomial.
:::

:::info `v`
Vandermonde matrix, The size should be at least (order+1,order+1).
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE78 from "./examples/_LagrangeCoeff_Triangle_test_4.md";

<EXAMPLE78 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 3

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Triangle(order, i, v, ipiv) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial, it should be SIZE(x,2)-1
    INTEGER(I4B), INTENT(IN) :: i
    !! ith lagrange polynomial
    REAL(DFP), INTENT(INOUT) :: v(:, :)
    !! LU decomposition of vandermonde matrix
    INTEGER(I4B), INTENT(IN) :: ipiv(:)
    !! inverse pivoting mapping, it is returned from LU decomposition
    REAL(DFP) :: ans(SIZE(v, 1))
    !! coefficients of ith Lagrange polynomial
  END FUNCTION LagrangeCoeff_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE115 from "./examples/_LagrangeCoeff_Triangle_test_5.md";

<EXAMPLE115 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 4

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LagrangeCoeff_Triangle(order, xij, basisType, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order of polynomial
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points in xij format, size(xij,2)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: basisType
    !! Monomials
    !! Jacobi
    !! Heirarchical
    CHARACTER(*), OPTIONAL, INTENT(IN) :: refTriangle
    REAL(DFP) :: ans(SIZE(xij, 2), SIZE(xij, 2))
    !! coefficients
  END FUNCTION LagrangeCoeff_Triangle
END INTERFACE
```

This is the master function, which allows us to specify the basis type and reference triangle.

:::info `basisType`

- Here, basis type is the type of basis functions we want to use for contructing the Lagrange polynomials. It can take following values:
  - `Monomials` (default)
  - Jacobi, Orthogonal, Legendre, Lobatto, Ultraspherical (in this case we call Dubiner functions)
  - `Heirarchical`

:::

:::info `ans`
It represents the coefficients of the Lagrange polynomial. `ans(:, i)` denotes the coefficients of ith Lagrange polynomial.
:::

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE138 from "./examples/_LagrangeCoeff_Triangle_test_1.md";

<EXAMPLE138 />

</TabItem>

<TabItem value="example2" label="Example 2">

import EXAMPLE146 from "./examples/_LagrangeCoeff_Triangle_test_2.md";

<EXAMPLE146 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
