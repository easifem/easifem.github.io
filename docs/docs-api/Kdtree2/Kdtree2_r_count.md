# Kdtree2_r_count

<!-- markdownlint-disable MD033 -->

Count the number of neighbors within square distance 'r2'.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
FUNCTION Kdtree2_r_count(tp, qv, r2) RESULT(nfound)
  TYPE(Kdtree2_), POINTER :: tp
  REAL(kdkind), TARGET, INTENT(In) :: qv(:)
  REAL(kdkind), INTENT(in) :: r2
  INTEGER :: nfound
END FUNCTION Kdtree2_r_count
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_r_count_test1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
