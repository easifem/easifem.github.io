## GetNodeConnectivity

Retrieves the global node numbers (vertex connectivity) for all elements in the mesh.

## Interface

```fortran
MODULE SUBROUTINE obj_GetNodeConnectivity(obj, VALUE)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(INOUT) :: VALUE(:, :)
  !! The number of columns are equal to the total number of elements
  !! in the mesh, the number of rows equal to the maximum number of
  !! nodes in the elements of mesh
END SUBROUTINE obj_GetNodeConnectivity
```

## Arguments

- `obj` (AbstractMesh_, input): The mesh object.
- `VALUE` (INTEGER, output): A 2D array to store the connectivity data. The array must have dimensions of at least (maxNNE, tElements), where maxNNE is the maximum number of nodes in any element and tElements is the total number of elements in the mesh.

## Description

This subroutine fills the provided 2D array with the global node numbers that define each element in the mesh. Each column represents an element, and each row contains a node number for that element.

## Example

```fortran
INTEGER(I4B), ALLOCATABLE :: nodeConn(:,:)
INTEGER(I4B) :: maxNodes, totalElements

maxNodes = mesh%GetMaxNNE()
totalElements = mesh%GetTotalElements()
ALLOCATE(nodeConn(maxNodes, totalElements))

CALL mesh%GetNodeConnectivity(nodeConn)
! Now nodeConn contains the global node numbers for each element
```
