# GetNodeToNodes

Retrieves the global node numbers that are connected to a specified node or nodes.

## Interface 1

```fortran
MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode
  LOGICAL(LGT), INTENT(IN) :: IncludeSelf
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getNodeToNodes
```

## Interface 2

```fortran
MODULE PURE FUNCTION getNodeToNodes(obj, globalNode, IncludeSelf) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode( : )
  LOGICAL(LGT), INTENT(IN) :: IncludeSelf
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION getNodeToNodes
```

## Arguments

- `obj` (AbstractMesh_, input): The mesh object.
- `globalNode` (INTEGER, input): The global (or local) node number(s).
- `includeSelf` (LOGICAL, input): If true, the specified node(s) will be included in the result.
- `islocal` (LOGICAL, optional, input): If present and true, `globalNode` is treated as local node number(s). Default is false.

## Returns

- `ans` (INTEGER array): A 1D array containing the global node numbers connected to the specified node(s).

## Description

This function returns the global node numbers that are connected to the specified node or nodes through element connectivity.

In Version 1, a single node is specified, and all nodes connected to that node are returned.

In Version 2, multiple nodes are specified, and all nodes connected to any of those nodes are returned (without duplicates).

If a node is not present in the mesh, the returned array will have zero size.

## Example

```fortran
! Find all nodes connected to node 25, including node 25 itself
INTEGER(I4B), ALLOCATABLE :: connectedNodes(:)
connectedNodes = mesh%GetNodeToNodes(25, includeSelf=.TRUE.)

! Find all nodes connected to nodes 10, 11, and 12, excluding these nodes
INTEGER(I4B) :: nodes(3) = [10, 11, 12]
connectedNodes = mesh%GetNodeToNodes(nodes, includeSelf=.FALSE.)
```
