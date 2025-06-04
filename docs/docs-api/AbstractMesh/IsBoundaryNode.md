# IsBoundaryNode

The `IsBoundaryNode` method checks if a specific node is a boundary node in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isBoundaryNode(obj, globalNode, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isBoundaryNode
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsBoundaryNode(globalNode, [islocal])
```

## Parameters

| Parameter    | Type                   | Intent          | Description                                           |
| ------------ | ---------------------- | --------------- | ----------------------------------------------------- |
| `obj`        | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                       |
| `globalNode` | `INTEGER(I4B)`         | `IN`            | Global or local node number to check                  |
| `islocal`    | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalNode is treated as a local node number |

## Return Value

| Type           | Description                         |
| -------------- | ----------------------------------- |
| `LOGICAL(LGT)` | True if the node is a boundary node |

## Description

`IsBoundaryNode` determines whether a specified node is a boundary node in the mesh. Boundary nodes are nodes that lie on the boundary of the domain.

## Implementation Details

The method:

1. Converts the global node number to a local node number if necessary
2. Gets the node type from the node data
3. Returns true if the node type is not an internal node

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: nodeNum
LOGICAL(LGT) :: isBoundary

! Initialize mesh, nodeNum...

! Check if a node is on the boundary
isBoundary = mesh%IsBoundaryNode(nodeNum)

IF (isBoundary) THEN
  PRINT *, "Node", nodeNum, "is on the boundary"
ELSE
  PRINT *, "Node", nodeNum, "is an internal node"
END IF
```
