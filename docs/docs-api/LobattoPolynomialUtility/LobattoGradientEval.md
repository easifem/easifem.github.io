# LobattoGradientEval

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Evaluate gradient of Lobatto polynomials.

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoGradientEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x
    REAL(DFP) :: ans
  END FUNCTION LobattoGradientEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE11 from "./examples/_LobattoGradientEval_test_1.md";

<EXAMPLE11 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>

## Interface 2

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoGradientEval(n, x) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP), INTENT(IN) :: x(:)
    REAL(DFP) :: ans(1:SIZE(x))
  END FUNCTION LobattoGradientEval
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE34 from "./examples/_LobattoEvalAll_test_2.md";

<EXAMPLE34 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
