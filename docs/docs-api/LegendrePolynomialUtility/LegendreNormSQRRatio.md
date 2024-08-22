# LegendreNormSQRRatio

This function returns the ratio of Square norm of Legendre polynomial `n+1/n`

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreNormSQRRatio(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans
  END FUNCTION LegendreNormSQRRatio
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE7 from "./examples/\_LegendreNormSQRRatio_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
