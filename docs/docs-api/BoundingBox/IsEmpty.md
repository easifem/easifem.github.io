# IsEmpty

<!-- markdownlint-disable MD033 MD041 -->

This function returns True if the bounding box is empty.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
  MODULE PURE FUNCTION isEmpty(obj) RESULT(ans)
    CLASS(BoundingBox_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isEmpty
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE7 from "./examples/_IsEmpty_test_1.md";

<EXAMPLE7 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
