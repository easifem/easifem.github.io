# HeirarchicalBasis_Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Evaluate all modal basis (heirarchical polynomial) on Triangle.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION HeirarchicalBasis_Triangle(order, pe1, pe2, pe3,&
    & xij, refTriangle) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order in the cell of triangle, it should be greater than 2
    INTEGER(I4B), INTENT(IN) :: pe1
    !! order of interpolation on edge e1
    INTEGER(I4B), INTENT(IN) :: pe2
    !! order of interpolation on edge e2
    INTEGER(I4B), INTENT(IN) :: pe3
    !! order of interpolation on edge e3
    REAL(DFP), INTENT(IN) :: xij(:, :)
    !! points of evaluation in xij format
    CHARACTER(*), INTENT(IN) :: refTriangle
    !! reference triangle
    REAL(DFP) :: ans( &
      & SIZE(xij, 2), &
      & pe1 + pe2 + pe3 + INT((order - 1) * (order - 2) / 2))
    !!
  END FUNCTION HeirarchicalBasis_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>

</Tabs>

## example 1

<details>
<summary>Example 1</summary>
<div>

import EXAMPLE41 from "./examples/_HeirarchicalBasis_Triangle_test_1.md";

<EXAMPLE41 />

</div>
</details>

## Example 2

<details>
<summary>Example 2</summary>
<div>

import EXAMPLE49 from "./examples/_HeirarchicalBasis_Triangle_test_2.md";

<EXAMPLE49 />

</div>
</details>

## Example 3

<details>
<summary>Example 3</summary>
<div>

import EXAMPLE57 from "./examples/_HeirarchicalBasis_Triangle_test_3.md";

<EXAMPLE57 />

</div>
</details>

## Example 4

<details>
<summary>Title</summary>
<div>

import EXAMPLE65 from "./examples/_HeirarchicalBasis_Triangle_test_4.md";

<EXAMPLE65 />

</div>
</details>
