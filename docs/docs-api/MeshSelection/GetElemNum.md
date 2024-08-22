# GetElemNum

This method returns the element numbers stored inside the mesh selection instance.

## Interface

The following interface returns element number if `isSelectionByElemNum` is true.

```fortran
INTERFACE
  MODULE FUNCTION meshSelect_getElemNum1(obj, dim) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getElemNum1
END INTERFACE
```

The following interface returns element number when

- `IsSelectionByElemNum` is true
- or when `IsSelectionByMeshID` is true

TODO

- `IsSelectionByNodeNum`
- `IsSelectionByBox`

```fortran
INTERFACE
  MODULE FUNCTION meshSelect_getElemNum2(obj, dim, domain) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: dim
    CLASS(Domain_), INTENT(IN) :: domain
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getElemNum2
END INTERFACE
```

The following interface returns element of all dimensions.

```fortran
INTERFACE
  MODULE FUNCTION meshSelect_getElemNum3(obj) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getElemNum3
END INTERFACE
```

```fortran
INTERFACE
  MODULE FUNCTION meshSelect_getElemNum4(obj, domain) RESULT(Ans)
    CLASS(MeshSelection_), INTENT(IN) :: obj
    CLASS(Domain_), INTENT(IN) :: domain
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION meshSelect_getElemNum4
END INTERFACE
```

## Example 1

<details>
<summary>Click here to see the example</summary>
<div>

import EXAMPLE67 from "./examples/_GetElemNum_test_1.md";

<EXAMPLE67 />

</div>
</details>
