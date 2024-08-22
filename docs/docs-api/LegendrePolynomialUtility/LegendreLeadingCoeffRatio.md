# LegendreLeadingCoeffRatio

Ratio of Leading coefficient of Legendre polynomials.

## Examples

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreLeadingCoeffRatio(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION LegendreLeadingCoeffRatio
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE12 from "./examples/\_LegendreLeadingCoeffRatio_test_1.md";

<EXAMPLE12 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
