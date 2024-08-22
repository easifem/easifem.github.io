# LobattoStiffnessMatrix

Evaluates the Stiffness matrix for Lobatto polynomial.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoStiffnessMatrix(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(n + 1, n + 1)
  END FUNCTION LobattoStiffnessMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./examples/_LobattoStiffnessMatrix_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
