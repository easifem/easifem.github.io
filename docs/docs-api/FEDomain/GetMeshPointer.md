# GetMeshPointer

<!-- markdownlint-disable MD041 MD013 MD033 -->

This function returns the mesh pointer stored in the domain.

## Interface

<Tabs>
<TabItem value="interface" label="Interface" default>

```fortran
INTERFACE
 MODULE FUNCTION Domain_GetMeshPointer1(obj, dim, entityNum) RESULT(Ans)
   CLASS(Domain_), INTENT(IN) :: obj
   INTEGER(I4B), INTENT(IN) :: dim
   !! dimension of mesh entity
   INTEGER(I4B), INTENT(IN) :: entityNum
   !! entity number
   CLASS(Mesh_), POINTER :: ans
 END FUNCTION Domain_GetMeshPointer1
END INTERFACE
```

</TabItem>

<TabItem value="example" label="example">

import EXAMPLE10 from "./examples/_GetMeshPointer_test_1.md";

<EXAMPLE10 />

</TabItem>

<TabItem value="close" label="↢ close">

</TabItem>
</Tabs>
