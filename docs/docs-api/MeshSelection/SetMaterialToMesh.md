# SetMaterialToMesh

The SetMaterialToMesh methods assign material properties to mesh elements based on the mesh selection criteria. There are two implementations:

1. **SetMaterialToMesh1**: Sets material properties for mesh elements of a specific dimension.
2. **SetMaterialToMesh2**: Sets material properties for mesh elements across all dimensions (0-3).

Material Assignment Mechanisms:

- Elements selected by mesh IDs will have their material properties set at the entity level
- Elements selected by element numbers will have their material properties set at the individual element level

Selection Methods Used:

- ✅ isSelectionByMeshID
- ✅ isSelectionByElemNum
- ❌ isSelectionByNodeNum (not implemented)
- ❌ isSelectionByBox (not implemented)

## Interface 1

```fortran
MODULE SUBROUTINE SetMaterialToMesh1(obj, dom, dim, medium, material)
  CLASS(MeshSelection_), INTENT(INOUT) :: obj
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B), INTENT(IN) :: dim
  INTEGER(I4B), INTENT(IN) :: medium
  INTEGER(I4B), INTENT(IN) :: material
END SUBROUTINE SetMaterialToMesh1
```

Sets material properties for mesh elements of a specific dimension.

- **dom**: Abstract domain containing the meshes
- **dim**: Dimension of the mesh elements to set materials for (0=point, 1=curve, 2=surface, 3=volume)
- **medium**: Medium identifier
- **material**: Material identifier to assign

Implementation details:

1. Retrieves the mesh pointer for the specified dimension
2. For elements selected by mesh ID, sets the material at the entity level
3. For elements selected by element number, sets the material at the individual element level

## Interface 2

```fortran
MODULE SUBROUTINE SetMaterialToMesh2(obj, dom, medium, material)
  CLASS(MeshSelection_), INTENT(INOUT) :: obj
  CLASS(AbstractDomain_), INTENT(IN) :: dom
  INTEGER(I4B), INTENT(IN) :: medium
  INTEGER(I4B), INTENT(IN) :: material
END SUBROUTINE SetMaterialToMesh2
```

Sets material properties for mesh elements across all dimensions (0-3).

- **dom**: Abstract domain containing the meshes
- **medium**: Medium identifier
- **material**: Material identifier to assign

Implementation details:

1. Calls SetMaterialToMesh1 for each dimension from 0 to 3
2. This method allows for setting materials across all dimensionalities in a single call

Note: This method serves as a convenience wrapper around SetMaterialToMesh1, applying the same material and medium values to mesh elements of all dimensions selected in the MeshSelection object.
