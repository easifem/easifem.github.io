# LobattoMonomialExpansionAll

<!-- markdownlint-disable MD041 MD013 MD033 MD012 -->

Returns all the monomial expansion of all Lobatto polynomials.

## Interface

<Tabs>
<TabItem value="interface" label="܀ Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION LobattoMonomialExpansionAll(n) RESULT(ans)
    INTEGER(I4B), INTENT(IN) :: n
    REAL(DFP) :: ans(1:n + 1, 1:n + 1)
  END FUNCTION LobattoMonomialExpansionAll
END INTERFACE
```

- n : is the order of the polynomial
- ans(:,i) contains the coefficient of monomials for polynomial order=i-1

for example, n=5, we have the following structure of ans.

| P0 | P1 | P2   | P3   | P4    | P5    |
| -- | -- | ---- | ---- | ----- | ----- |
| 1  | 0  | -0.5 | -0   | 0.375 | 0     |
| 0  | 1  | 0    | -1.5 | -0    | 1.875 |
| 0  | 0  | 1.5  | 0    | -3.75 | -0    |
| 0  | 0  | 0    | 2.5  | 0     | -8.75 |
| 0  | 0  | 0    | 0    | 4.375 | 0     |
| 0  | 0  | 0    | 0    | 0     | 7.875 |

</TabItem>

<TabItem value="example" label="️܀ See example">

import EXAMPLE25 from "./examples/_LobattoMonomialExpansionAll_test_1.md";

<EXAMPLE25 />

</TabItem>

<TabItem value="close" label="↢ ">

</TabItem>
</Tabs>
