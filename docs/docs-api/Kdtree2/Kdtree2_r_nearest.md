# Kdtree2_r_nearest

<!-- markdownlint-disable MD033 -->

Find the nearest neighbors to point '`idxin`', within SQUARED
Euclidean distance '`r2`'. Upon ENTRY, `nalloc` must be the
size of memory allocated for `results(1:nalloc)`. Upon
EXIT, `nfound` is the number actually found within the ball.

Note that if `nfound .gt. nalloc` then more neighbors were found
than there were storage to store. The resulting list is NOT
the smallest ball inside norm $r^2$

Results are NOT sorted unless tree was created with sort option.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
SUBROUTINE Kdtree2_r_nearest(tp, qv, r2, nfound, nalloc, results)
  TYPE(Kdtree2_), POINTER :: tp
  REAL(kdkind), TARGET, INTENT(In) :: qv(:)
  REAL(kdkind), INTENT(in) :: r2
  INTEGER, INTENT(out) :: nfound
  INTEGER, INTENT(In) :: nalloc
  TYPE(Kdtree2Result_), TARGET :: results(:)
END SUBROUTINE Kdtree2_r_nearest
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE16 from "./examples/_r_nearest_test1.md";

<EXAMPLE16 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
