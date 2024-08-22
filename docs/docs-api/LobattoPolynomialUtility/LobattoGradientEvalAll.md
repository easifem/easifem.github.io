# LobattoGradientEvalAll

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Evaluate gradient of Lobatto polynomials upto order n.

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoGradientEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans(1:n + 1)
  END FUNCTION LobattoGradientEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE8 from "./examples/_LobattoGradientEvalAll_test_1.md";

<EXAMPLE8 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoGradientEvalAll(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x), 1:n + 1)
  END FUNCTION LobattoGradientEvalAll
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE32 from "./examples/_LobattoGradientEvalAll_test_2.md";

<EXAMPLE32 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
