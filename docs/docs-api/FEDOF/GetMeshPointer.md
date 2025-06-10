# GetMeshPointer

## Interface

```fortran
MODULE FUNCTION obj_GetMeshPointer(obj) RESULT(ans)
  CLASS(FEDOF_), INTENT(IN) :: obj
  CLASS(AbstractMesh_), POINTER :: ans
END FUNCTION obj_GetMeshPointer
```

## Description

The `GetMeshPointer` method returns a pointer to the mesh object associated with the FEDOF (Finite Element Degrees of Freedom) instance. This method provides access to the underlying mesh structure without transferring ownership.

### Parameters

- `obj` - Input, `CLASS(FEDOF_)`, FEDOF object instance
- `ans` - Output, `CLASS(AbstractMesh_), POINTER`, pointer to the mesh object

This allows client code to access the mesh for further operations without needing to duplicate the mesh data.

## Usage Example

```fortran
! Example to get the mesh pointer
CLASS(AbstractMesh_), POINTER :: meshPtr
TYPE(FEDOF_) :: myDOF

! Get the mesh pointer
meshPtr => myDOF%GetMeshPointer()

! Now use the mesh pointer for operations
IF (ASSOCIATED(meshPtr)) THEN
  numElements = meshPtr%GetTotalElements()
  ! Other mesh operations...
END IF
```

## Important Notes

1. The returned pointer should not be deallocated by the caller, as the FEDOF object maintains ownership of the mesh.
2. The pointer becomes invalid if the parent FEDOF object is deallocated.
3. This is a read-only operation that doesn't modify the FEDOF object (hence the `INTENT(IN)` for `obj`).

## Related Methods

- `GetConnectivity` - Uses the mesh to retrieve element connectivity
- `GetTotalDOF` - Often uses mesh information to calculate DOF counts
- `GetOrders` - Requires mesh information to map between local and global entities

The `GetMeshPointer` method is useful when operations need direct access to the underlying mesh structure for topological or geometric queries that the FEDOF object doesn't directly expose.
