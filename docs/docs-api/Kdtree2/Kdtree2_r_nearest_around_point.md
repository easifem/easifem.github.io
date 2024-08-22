# Kdtree2_r_nearest_around_point

<!-- markdownlint-disable MD013 MD033 -->

Like `Kdtree2_r_nearest`, but around a point 'idxin' already existing in the data set.

:::note
Results are NOT sorted unless tree was created with sort option.
:::

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
SUBROUTINE Kdtree2_r_nearest_around_point(tp, idxin, correltime, r2, &
                                          nfound, nalloc, results)
  TYPE(Kdtree2_), POINTER :: tp
  INTEGER, INTENT(In) :: idxin, correltime, nalloc
  REAL(kdkind), INTENT(in) :: r2
  INTEGER, INTENT(out) :: nfound
  TYPE(Kdtree2Result_), TARGET :: results(:)
END SUBROUTINE Kdtree2_r_nearest_around_point
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE14 from "./examples/_r_nearest_around_point_test1.md";

<EXAMPLE14 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
