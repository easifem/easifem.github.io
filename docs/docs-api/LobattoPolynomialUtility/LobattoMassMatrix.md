# LobattoMassMatrix

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the Mass matrix for Lobatto polynomials.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoMassMatrix(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(n + 1, n + 1)
  END FUNCTION LobattoMassMatrix
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./examples/_LobattoMassMatrix_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
