# InitiateKdTree

The `InitiateKdtree` method initializes a k-d tree data structure within an `AbstractMesh` object. This tree enables efficient spatial queries for tasks such as nearest neighbor searches, which are essential for many mesh-based operations.

## Purpose

The k-d tree is a space-partitioning data structure that organizes points in a k-dimensional space. It significantly accelerates spatial queries like finding the nearest nodes to a given point in space, which is useful for:

- Interpolation between meshes
- Finding elements containing a point
- Local refinement operations
- Contact detection
- General spatial proximity searches

## Interface

```fortran
MODULE SUBROUTINE InitiateKdTree(obj)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
END SUBROUTINE InitiateKdTree
```

- `obj` (INTENT(INOUT)) - The `AbstractMesh_` object in which to create the k-d tree

### Algorithm

1. First, it deallocates any existing k-d tree to prevent memory leaks
2. Gets the spatial dimension (NSD) of the mesh
3. Allocates memory for node coordinates
4. Retrieves all node coordinates from the mesh
5. Creates the k-d tree using the `Kdtree2_Create` function from the `Kdtree2_Module`
6. Allocates memory for storing search results in `obj%kdresult`

### Notes

- The method sets up the k-d tree with sorting disabled but rearrangement enabled, which is optimal for most spatial search operations
- The time taken for this operation can be monitored if `obj%showTime` is enabled
- The routine is protected with DEBUG directives that provide additional information during compilation with debug flags
- The tree uses only the first `nsd` components of node coordinates (ignoring higher dimensions if the coordinate array has them)

### Performance Considerations

This operation requires:
- Memory allocation for all node coordinates
- Building a balanced k-d tree (O(n log n) operation)

For large meshes, this can be an expensive operation, but it only needs to be performed once. Subsequent spatial queries will be much faster than brute-force approaches.

### Usage Example

```fortran
TYPE(FEMesh_) :: mesh
! ... Initialize mesh ...

! Create k-d tree for efficient spatial searches
CALL mesh%InitiateKdtree()

! Now we can perform efficient nearest node searches
CALL mesh%GetNearestNode(qv=[1.0, 2.0, 3.0], x=nodeCoord, globalNode=nodeNum)
```

