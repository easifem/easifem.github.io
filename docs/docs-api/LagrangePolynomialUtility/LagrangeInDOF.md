# LagrangeInDOF

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the number of internal dofs for lagrange polynomial.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LagrangeInDOF(order, elemType) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: order
    !! order
    INTEGER(I4B), INTENT(IN) :: elemType
    INTEGER(I4B) :: ans
    !! number of degree of freedom
  END FUNCTION LagrangeInDOF
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE10 from "./examples/_LagrangeInDOF_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
