# LobattoLeadingCoeff

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns the leading coefficient of Lobatto polynomials.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoLeadingCoeff(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Lobatto polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION LobattoLeadingCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/_LobattoLeadingCoeff_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
