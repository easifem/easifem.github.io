# EquidistanceInPoint_Triangle

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

This function returns the equidistance points in triangle.

:::note All points are inside the triangle
:::

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION EquidistanceInPoint_Triangle(order, xij) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
  !! order
    REAL(DFP), OPTIONAL, INTENT(IN) :: xij(:, :)
  !! coordinates of point 1 and point 2 in $x_{iJ}$ format
  !! number of rows = nsd
  !! number of cols = 3
    REAL(DFP), ALLOCATABLE :: ans(:, :)
  !! returned coordinates in $x_{iJ}$ format
  END FUNCTION EquidistanceInPoint_Triangle
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE35 from "./examples/_EquidistanceInPoint_Triangle_test_1.md";

<EXAMPLE35 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
