# GetNodeToElements

Retrieves the global element numbers that are connected to a specified node or nodes.

There are two interfaces to this method.

## Interface

```fortran
! Version 1 - For a single node
MODULE FUNCTION GetNodeToElements1(obj, globalNode, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode
  !! global node number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION GetNodeToElements1

! Version 2 - For multiple nodes
MODULE FUNCTION GetNodeToElements2(obj, globalNode, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(INOUT) :: obj
  !! mesh data
  INTEGER(I4B), INTENT(IN) :: globalNode(:)
  !! global node number
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B), ALLOCATABLE :: ans(:)
  !! A vector of local element number
END FUNCTION GetNodeToElements2
```

## Arguments

- `obj` (AbstractMesh_, input/output): The mesh object.
- `globalNode` (INTEGER, input): The global (or local) node number(s).
- `islocal` (LOGICAL, optional, input): If present and true, `globalNode` is treated as local node number(s). Default is false.

## Returns

- `ans` (INTEGER array): A 1D array containing the global element numbers connected to the specified node(s).

## Description

This function returns the global element numbers that are connected to the specified node or nodes.

In Version 1, a single node is specified, and all elements containing that node are returned.

In Version 2, multiple nodes are specified, and all elements containing any of those nodes are returned (without duplicates).

If a node is not present in the mesh, the returned array will have zero size.

## Example

```fortran
! Find all elements connected to node 25
INTEGER(I4B), ALLOCATABLE :: elems(:)
elems = mesh%GetNodeToElements(25)

! Find all elements connected to nodes 10, 11, and 12
INTEGER(I4B) :: nodes(3) = [10, 11, 12]
elems = mesh%GetNodeToElements(nodes)
```
