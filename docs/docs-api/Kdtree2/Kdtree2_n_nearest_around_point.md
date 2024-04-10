# Kdtree2_n_nearest_around_point

<!-- markdownlint-disable MD033 -->

Find the `nn` vectors in the tree nearest to point `idxin`,
with correlation window 'correltime', returing results in
`results(:)`, which must be pre-allocated upon entry.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
SUBROUTINE Kdtree2_n_nearest_around_point(tp, idxin, correltime, nn, results)
  TYPE(Kdtree2_), POINTER :: tp
  INTEGER, INTENT(In) :: idxin
  INTEGER, INTENT(In) :: correltime
  !! correlation window
  INTEGER, INTENT(In) :: nn
  TYPE(Kdtree2Result_), TARGET :: results(:)
END SUBROUTINE Kdtree2_n_nearest_around_point
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_n_nearest_around_point_test1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
