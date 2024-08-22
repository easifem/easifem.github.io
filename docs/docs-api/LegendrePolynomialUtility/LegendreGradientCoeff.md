# LegendreGradientCoeff

This routine returns the coefficients of gradient of Legendre expansion.

Input is cofficients of Legendrepolynomials (modal values).

## Interface 1

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LegendreGradientCoeff(n, coeff) &
    & RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
      !! order of Jacobi polynomial
    REAL(DFP), INTENT(IN) :: coeff(0:n)
      !! coefficients $\tilde{u}_{n}$ obtained from LegendreTransform
    REAL(DFP) :: ans(0:n)
      !! coefficient of gradient
  END FUNCTION LegendreGradientCoeff
END INTERFACE
```

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE28 from "./examples/\_LegendreGradientCoeff_test_1.md";

<EXAMPLE28 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
