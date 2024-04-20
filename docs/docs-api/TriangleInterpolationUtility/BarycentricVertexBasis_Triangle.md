# BarycentricVertexBasis

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the vertex basis functions on reference Triangle.

## Interface

```fortran
INTERFACE
  MODULE PURE FUNCTION BarycentricVertexBasis_Triangle(lambda) &
    & RESULT(ans)
    REAL(DFP), INTENT(IN) :: lambda(:, :)
    !! point of evaluation in terms of barycentrix coords
    REAL(DFP) :: ans(SIZE(lambda, 2), 3)
    !! ans(:,v1) basis function of vertex v1 at all points
  END FUNCTION BarycentricVertexBasis_Triangle
END INTERFACE
```

:::info `lambda`
Barycentric coordinates. The vertex basis function will be evaluated here. The number of rows in lambda is 3 and the number of columns is the number of points. The three rows of lambda dentoe the $\lambda_{i=1,2,3}$.
:::

:::info `ans`
The number of rows in `ans` is equal to the number of points of evaluation. The number of columns is 3. The three columns of `ans` denote the basis functions of vertex $v=1,2,3$ at all points.
:::

<details>
<summary>Example</summary>
<div>

import EXAMPLE29 from "./examples/_BarycentricVertexBasis_Triangle_test_1.md";

<EXAMPLE29 />

</div>
</details>
