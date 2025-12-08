# GetTotalElemNum

Get the total number of elements in the mesh selection.

The GetTotalElemNum method retrieves the total number of elements in a MeshSelection object. There are four different implementations:

1. **GetTotalElemNum1**: Returns the total number of elements for a specific dimension when isSelectionByElemNum is true.
2. **GetTotalElemNum2**: Returns the total number of elements for a specific dimension using both selection by element number and selection by mesh ID.
3. **GetTotalElemNum3**: Returns the total number of elements across all dimensions when isSelectionByElemNum is true.
4. **GetTotalElemNum4**: Returns the total number of elements across all dimensions using both selection by element number and selection by mesh ID.

### Dimension Mapping

- dim = 0: Size of pointElemNum or elements in pointMeshID
- dim = 1: Size of curveElemNum or elements in curveMeshID
- dim = 2: Size of surfaceElemNum or elements in surfaceMeshID
- dim = 3: Size of volumeElemNum or elements in volumeMeshID

### Selection Methods Used

- ✅ isSelectionByMeshID (GetTotalElemNum2, GetTotalElemNum4)
- ✅ isSelectionByElemNum (all variants)
- ❌ isSelectionByNodeNum (not implemented)
- ❌ isSelectionByBox (not implemented)

## Interface Descriptions

### GetTotalElemNum1

```fortran
MODULE FUNCTION GetTotalElemNum1(obj, dim) RESULT(ans)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: dim
  INTEGER(I4B) :: ans
END FUNCTION GetTotalElemNum1
```

Returns the total number of elements for a specific dimension when isSelectionByElemNum is true.

- **dim**: Dimension to retrieve element count from (0=point, 1=curve, 2=surface, 3=volume)
- **ans**: Total number of elements in the specified dimension

Note: This method only works when isSelectionByElemNum is true.

### GetTotalElemNum2

```fortran
MODULE FUNCTION GetTotalElemNum2(obj, dim, dom) RESULT(ans)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: dim
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B) :: ans
END FUNCTION GetTotalElemNum2
```

Returns the total number of elements for a specific dimension using both selection by element number and selection by mesh ID.

- **dim**: Dimension to retrieve element count from (0=point, 1=curve, 2=surface, 3=volume)
- **dom**: Abstract domain containing the meshes
- **ans**: Total number of elements in the specified dimension

### GetTotalElemNum3

```fortran
MODULE FUNCTION GetTotalElemNum3(obj) RESULT(ans)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalElemNum3
```

Returns the total number of elements across all dimensions when isSelectionByElemNum is true. It sums the sizes of pointElemNum, curveElemNum, surfaceElemNum, and volumeElemNum.

- **ans**: Total number of elements across all dimensions

Note: This method only works when isSelectionByElemNum is true.

### GetTotalElemNum4

```fortran
MODULE FUNCTION GetTotalElemNum4(obj, dom) RESULT(ans)
  CLASS(MeshSelection_), INTENT(IN) :: obj
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B) :: ans
END FUNCTION GetTotalElemNum4
```

Returns the total number of elements across all dimensions using both selection by element number and selection by mesh ID.

- **dom**: Abstract domain containing the meshes
- **ans**: Total number of elements across all dimensions

Note: This function calls GetTotalElemNum2 for each dimension (0-3) and sums the results.
