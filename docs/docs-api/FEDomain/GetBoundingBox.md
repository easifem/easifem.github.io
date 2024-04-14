# GetBoundingBox

<!-- markdownlint-disable MD041 MD013 MD033 -->

Returns the bounding box of the domain.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
MODULE FUNCTION obj_GetBoundingBox(obj, dim) RESULT(ans)
CLASS(AbstractDomain_), INTENT(IN) :: obj
INTEGER(I4B), OPTIONAL, INTENT(IN) :: dim
!! dimension of the mesh
!! if dim is not present then nodeCoord in domain is
!! used for computing the bounding box
TYPE(BoundingBox_) :: ans
END FUNCTION obj_GetBoundingBox
END INTERFACE
```

:::note `dim`
Default value of `dim` is same as the `obj%nsd`. If the `dim` is present then we get the bounding box of the mesh of `dim` dimesion.
:::

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE9 from "./examples/_GetBoundingBox_test_1.md";

<EXAMPLE9 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
