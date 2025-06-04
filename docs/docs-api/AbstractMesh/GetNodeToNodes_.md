# GetNodeToNodes_

A memory-efficient version of GetNodeToNodes that allows reusing existing arrays.

## Interface

```fortran
! Version 1 - For a single node
MODULE SUBROUTINE GetNodeToNodes1_(obj, globalNode, includeSelf, ans, tsize, islocal)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode
  LOGICAL(LGT), INTENT(IN) :: includeSelf
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
END SUBROUTINE GetNodeToNodes1_

! Version 2 - For multiple nodes
MODULE SUBROUTINE GetNodeToNodes2_(obj, globalNode, includeSelf, ans, tsize, islocal)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalNode(:)
  LOGICAL(LGT), INTENT(IN) :: includeSelf
  INTEGER(I4B), INTENT(INOUT) :: ans(:)
  INTEGER(I4B), INTENT(OUT) :: tsize
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
END SUBROUTINE GetNodeToNodes2_
```

## Arguments

- `obj` (AbstractMesh_, input): The mesh object.
- `globalNode` (INTEGER, input): The global (or local) node number(s).
- `includeSelf` (LOGICAL, input): If true, the specified node(s) will be included in the result.
- `ans` (INTEGER array, output): Pre-allocated array to store connected node numbers.
- `tsize` (INTEGER, output): Actual size of data written to `ans`.
- `islocal` (LOGICAL, optional, input): If present and true, `globalNode` is treated as local. Default is false.

## Description

These subroutines retrieve node-to-node connectivity information without allocating new memory. They write the connected node numbers to a pre-allocated array and return the actual size of data written.

Version 1 finds nodes connected to a single node, while Version 2 finds nodes connected to any of multiple nodes.

## Example

```fortran
! For a single node
INTEGER(I4B) :: nodes(100), tsize
CALL mesh%GetNodeToNodes_(25, .TRUE., nodes, tsize)
! Now nodes(1:tsize) contains the connected nodes including node 25

! For multiple nodes
INTEGER(I4B) :: nodeList(3) = [10, 11, 12]
CALL mesh%GetNodeToNodes_(nodeList, .FALSE., nodes, tsize)
! Now nodes(1:tsize) contains the connected nodes excluding the input nodes
```
