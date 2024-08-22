# Kdtree2_r_count_around_point

<!-- markdownlint-disable MD033 -->

Count the number of neighbors within square distance 'r2'.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
FUNCTION Kdtree2_r_count_around_point(tp, idxin, correltime, r2) &
  RESULT(nfound)
  TYPE(Kdtree2_), POINTER :: tp
  INTEGER, INTENT(In) :: correltime, idxin
  REAL(kdkind), INTENT(in) :: r2
  INTEGER :: nfound
END FUNCTION Kdtree2_r_count_around_point
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_r_count_around_point_test1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
