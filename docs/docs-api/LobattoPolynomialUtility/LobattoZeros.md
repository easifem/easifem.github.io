# LobattoZeros

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the zeros of Lobatto polynomials.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE FUNCTION LobattoZeros(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Lobatto polynomial, should be greater than equal to 2
    REAL(DFP) :: ans(n)
    !!
  END FUNCTION LobattoZeros
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_LobattoZeros_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
