# LUTSolve

This routine solves the system `(LU)^T x = y`, given an LU decomposition of a matrix stored in (`ALU, JLU, JU`) modified sparse row format (MSR). This ALU, JLU, JU are created by calling ILUT methods described above

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Interface

<Tabs>
<TabItem value="interface" label="📝 See Interface" default>

```fortran

```

</TabItem>

<TabItem value="close" label="◉ Close">

```fortran
INTERFACE
MODULE SUBROUTINE LUTSOLVE(sol, rhs, alu, jlu, ju)
    REAL(DFP), INTENT(INOUT) :: sol(:)
    REAL(DFP), INTENT(IN) :: rhs(:)
    REAL(DFP), INTENT(IN) :: alu(:)
    INTEGER(I4B), INTENT(IN) :: jlu(:)
    INTEGER(I4B), INTENT(IN) :: ju(:)
END SUBROUTINE LUTSOLVE
END INTERFACE
```

</TabItem>

</Tabs>

## Example

TODO
