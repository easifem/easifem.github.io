# GetNearestNode

The `GetNearestNode` method finds the node(s) in the mesh that are closest to a given query point in space. It uses a k-d tree for efficient spatial searching.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNearestNode1(obj, qv, x, globalNode)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: qv(:)
    !! Query vector
    REAL(DFP), INTENT(INOUT) :: x(:)
    !! node coord of nearest node
    INTEGER(I4B), INTENT(OUT) :: globalNode
    !! globalNode number
  END SUBROUTINE GetNearestNode1
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNearestNode2(obj, qv, x, globalNode, nn)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: qv(:)
    !! Query vector
    REAL(DFP), INTENT(INOUT) :: x(:, :)
    !! node coord of nearest node
    !! the size(x, 2) should be atleast nn
    INTEGER(I4B), INTENT(INOUT) :: globalNode(:)
    !! globalNode number, size of globalNode should be atleast nn
    INTEGER(I4B), INTENT(IN) :: nn
    !! number of nearest points
  END SUBROUTINE GetNearestNode2
END INTERFACE
```

## Syntax

```fortran
! Find single nearest node
CALL mesh%GetNearestNode(qv, x, globalNode)

! Find multiple nearest nodes
CALL mesh%GetNearestNode(qv, x, globalNode, nn)
```

## Parameters

| Parameter    | Type                                | Intent           | Description                                   |
| ------------ | ----------------------------------- | ---------------- | --------------------------------------------- |
| `obj`        | `CLASS(AbstractMesh_)`              | `INOUT`          | The mesh object                               |
| `qv`         | `REAL(DFP)(:)`                      | `IN`             | Query point coordinates                       |
| `x`          | `REAL(DFP)(:)` or `REAL(DFP)(:,:)`  | `INOUT`          | Array to store coordinates of nearest node(s) |
| `globalNode` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `OUT` or `INOUT` | Global node number(s) of nearest node(s)      |
| `nn`         | `INTEGER(I4B)`                      | `IN`             | Number of nearest nodes to find               |

## Description

`GetNearestNode` finds the node(s) in the mesh that are closest to a specified query point in space. It uses a k-d tree for efficient spatial searching, initializing one if it doesn't already exist.

The method has two versions:

1. Find the single closest node to the query point
2. Find the `nn` closest nodes to the query point

This functionality is useful for point location, interpolation, and mesh refinement operations. It provides both the global node numbers and the coordinates of the found nodes.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
REAL(DFP) :: queryPoint(3), nearestCoord(3)
REAL(DFP) :: multiNearestCoord(3, 5)
INTEGER(I4B) :: nearestNode, multiNearestNodes(5)

! Initialize mesh...

! Set up query point
queryPoint = [1.0_DFP, 2.0_DFP, 3.0_DFP]

! Find single nearest node
CALL mesh%GetNearestNode(queryPoint, nearestCoord, nearestNode)
PRINT *, "Nearest node to query point is", nearestNode
PRINT *, "At coordinates:", nearestCoord

! Find 5 nearest nodes
CALL mesh%GetNearestNode(queryPoint, multiNearestCoord, multiNearestNodes, 5)
PRINT *, "5 nearest nodes:", multiNearestNodes

! Use for interpolation
DO i = 1, 5
  ! Perform distance-weighted interpolation using the 5 nearest nodes
END DO
```
