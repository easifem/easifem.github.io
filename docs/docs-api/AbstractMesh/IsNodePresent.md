# IsNodePresent

The `IsNodePresent` method checks if specific node numbers exist in the mesh. It has two versions: one for checking a single node, and another for checking multiple nodes simultaneously.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isNodePresent1(obj, globalNode, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans
  END FUNCTION isNodePresent1
END INTERFACE

INTERFACE
  MODULE FUNCTION isNodePresent2(obj, globalNode, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    LOGICAL(LGT) :: ans(SIZE(globalNode))
  END FUNCTION isNodePresent2
END INTERFACE
```

## Syntax

```fortran
! For a single node
isPresent = mesh%IsNodePresent(globalNode, [islocal])

! For multiple nodes
arePresent = mesh%IsNodePresent(globalNodeArray, [islocal])
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `IN` | The mesh object |
| `globalNode` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN` | Global or local node number(s) to check |
| `islocal` | `LOGICAL(LGT)` | `IN` (optional) | If true, globalNode is treated as a local node number |

## Return Value

| Version | Type | Description |
|---------|------|-------------|
| Single node | `LOGICAL(LGT)` | True if the node is present in the mesh |
| Multiple nodes | `LOGICAL(LGT)(:)` | Array of logical values indicating presence of each node |

## Description

`IsNodePresent` determines whether specified node numbers exist in the mesh. The method can handle either a single node number or an array of node numbers. For a single node, it returns a scalar logical value; for multiple nodes, it returns an array of logical values.

## Implementation Details

For a single node, the method checks:
- If the node is being treated as local, it verifies it's within the valid range of local nodes
- If the node is global, it checks if it's within the valid range of global nodes and has a valid local mapping

For multiple nodes, it simply calls the single-node version for each element of the array.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: nodeNum
INTEGER(I4B), ALLOCATABLE :: nodeArray(:)
LOGICAL(LGT) :: isPresent
LOGICAL(LGT), ALLOCATABLE :: arePresent(:)

! Initialize mesh, nodeNum, nodeArray...

! Check if a single node exists
isPresent = mesh%IsNodePresent(nodeNum)
IF (isPresent) THEN
  PRINT*, "Node", nodeNum, "exists in the mesh"
ELSE
  PRINT*, "Node", nodeNum, "does not exist in the mesh"
END IF

! Check if multiple nodes exist
arePresent = mesh%IsNodePresent(nodeArray)
! Process results...
```

