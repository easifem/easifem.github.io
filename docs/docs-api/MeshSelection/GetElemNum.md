# GetElemNum

This method returns the element numbers stored inside the mesh selection instance.

The GetElemNum method retrieves element numbers from a MeshSelection object. There are four different implementations:

1. **GetElemNum1**: Returns element numbers when isSelectionByElemNum is true for a specific dimension.
2. **GetElemNum2**: Returns element numbers for a specific dimension using both selection by element number and selection by mesh ID.
3. **GetElemNum3**: Returns all element numbers across all dimensions when isSelectionByElemNum is true.
4. **GetElemNum4**: Returns all element numbers across all dimensions using both selection by element number and selection by mesh ID.

:::note
Basically there are two interfaces one with `AbstractDomain_` and and one without it. When `AbstractDomain_` is not provided then the method will return element numbers when `isSelectionByElemNum` is true. When `AbstractDomain_` is provided then the method will return element numbers when `isSelectionByElemNum` or `isSelectionByMeshID` is true.
:::

### Dimension Mapping

- dim = 0: Elements from pointElemNum
- dim = 1: Elements from curveElemNum
- dim = 2: Elements from surfaceElemNum
- dim = 3: Elements from volumeElemNum

### Selection Methods Used

- ✅ isSelectionByMeshID (GetElemNum2, GetElemNum4)
- ✅ isSelectionByElemNum (all variants)
- ❌ isSelectionByNodeNum (not implemented)
- ❌ isSelectionByBox (not implemented)

## Interface1

The following interface returns element number if `isSelectionByElemNum` is true.

```fortran
MODULE SUBROUTINE GetElemNum1(obj, dim, ans, tsize)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: dim
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE GetElemNum1
```

Returns element numbers when isSelectionByElemNum is true for a specific dimension.

- **dim**: Dimension to retrieve elements from (0=point, 1=curve, 2=surface, 3=volume)
- **ans**: Array to store the element numbers
- **tsize**: Number of element numbers retrieved

Note: This method only works when isSelectionByElemNum is true.

## Interface2

The following interface returns element number when

- `IsSelectionByElemNum` is true
- or when `IsSelectionByMeshID` is true

TODO

- `IsSelectionByNodeNum`
- `IsSelectionByBox`

```fortran
MODULE SUBROUTINE GetElemNum2(obj, dim, dom, ans, tsize)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: dim
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE GetElemNum2
```

Returns element numbers for a specific dimension using both selection by element number and selection by mesh ID.

- **dim**: Dimension to retrieve elements from (0=point, 1=curve, 2=surface, 3=volume)
- **dom**: Abstract domain containing the meshes
- **ans**: Array to store the element numbers
- **tsize**: Number of element numbers retrieved

## Interface3

The following interface returns element of all dimensions.

```fortran
MODULE SUBROUTINE GetElemNum3(obj, ans, tsize)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE GetElemNum3
```

Returns all element numbers across all dimensions when isSelectionByElemNum is true, combining elements from pointElemNum, curveElemNum, surfaceElemNum, and volumeElemNum.

- **ans**: Array to store the element numbers
- **tsize**: Number of element numbers retrieved

## Interface4

```fortran
MODULE SUBROUTINE GetElemNum4(obj, dom, ans, tsize)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
END SUBROUTINE GetElemNum4
```

Returns all element numbers across all dimensions using both selection by element number and selection by mesh ID.

- **dom**: Abstract domain containing the meshes
- **ans**: Array to store the element numbers
- **tsize**: Number of element numbers retrieved

Note: This routine calls `GetElemNum2` for dim=0,1,2,3.
