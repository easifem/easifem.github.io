# JacobiJacobiLobattoMatrix

Jacobi Lobatto matrix for Jacobi polynomial.

```fortran
INTERFACE
  MODULE PURE SUBROUTINE JacobiJacobiLobattoMatrix(n, alpha, beta, D, &
    & E, alphaCoeff, betaCoeff)
    INTEGER(I4B), INTENT(IN) :: n
    !! n should be greater than or equal to 1
    REAL(DFP), INTENT(IN) :: alpha
    !! alpha of jacobu poly
    REAL(DFP), INTENT(IN) :: beta
    !! beta of jacobi poly
    REAL(DFP), INTENT(OUT) :: D(:)
    !! the size should be 1:n+2
    REAL(DFP), INTENT(OUT) :: E(:)
    !! the size should be 1:n+1
    REAL(DFP), OPTIONAL, INTENT(OUT) :: alphaCoeff(0:)
    REAL(DFP), OPTIONAL, INTENT(OUT) :: betaCoeff(0:)
  END SUBROUTINE JacobiJacobiLobattoMatrix
END INTERFACE
```

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="example" label="️܀ See example">

import EXAMPLE31 from "./_JacobiJacobiLobattoMatrix_test_1.md";

<EXAMPLE31 />

</TabItem>

<TabItem value="close" label="↢ " default>

</TabItem>
</Tabs>
