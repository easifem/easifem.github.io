# LagrangeDOF

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the total number of degree of freedom for a Lagrange polynomial on triangle.

The total DOF is given by:

$$
\frac{1}{2}(n+1)(n+2)
$$

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeDOF_Triangle(order) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    INTEGER(I4B) :: ans
  END FUNCTION LagrangeDOF_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE26 from "./examples/_LagrangeDOF_Triangle_test_1.md";

<EXAMPLE26 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
