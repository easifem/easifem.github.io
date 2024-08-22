# LegendreBeta

Recurrence coeff for Legendre polynomial.

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreBeta(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    !! order of Legendre polynomial
    REAL(DFP) :: ans
    !! answer
  END FUNCTION LegendreBeta
END INTERFACE
```

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE23 from "./examples/_LegendreAlpha_test_1.md";

<EXAMPLE23 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
