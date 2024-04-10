# Kdtree2_n_nearese

<!-- markdownlint-disable MD033 -->

Find the 'nn' vectors in the tree nearest to 'qv' in euclidean norm
returning their indexes and distances in 'indexes' and 'distances'
arrays already allocated passed to this subroutine.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
SUBROUTINE Kdtree2_n_nearest(tp, qv, nn, results)
  TYPE(Kdtree2_), POINTER :: tp
  REAL(kdkind), TARGET, INTENT(In) :: qv(:)
  INTEGER, INTENT(In) :: nn
  TYPE(Kdtree2Result_), TARGET :: results(:)
END SUBROUTINE Kdtree2_n_nearest
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_n_nearest_test1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
