# GetTotalInternalNodes

The `GetTotalInternalNodes` method returns the total number of internal nodes in the mesh. Internal nodes are nodes that are not on the boundary of the domain.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetTotalInternalNodes(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalInternalNodes
END INTERFACE
```

## Syntax

```fortran
numInternalNodes = mesh%GetTotalInternalNodes()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                |
| -------------- | ------------------------------------------ |
| `INTEGER(I4B)` | Total number of internal nodes in the mesh |

## Description

`GetTotalInternalNodes` returns the count of all internal nodes in the mesh. Internal nodes are those that are not on the boundary of the domain. This information is useful for many numerical methods, as internal nodes often have different treatment than boundary nodes.

The method counts nodes by checking the node type for each node in the mesh and incrementing the counter for each internal node found.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: internalNodes, boundaryNodes, totalNodes

! Initialize mesh...

! Get node counts
internalNodes = mesh%GetTotalInternalNodes()
boundaryNodes = mesh%GetTotalBoundaryNodes()
totalNodes = mesh%GetTotalNodes()

PRINT *, "Mesh has", totalNodes, "total nodes"
PRINT *, "  -", internalNodes, "internal nodes"
PRINT *, "  -", boundaryNodes, "boundary nodes"

! Verify that the sum matches
IF (internalNodes + boundaryNodes /= totalNodes) THEN
  PRINT *, "Warning: Node count mismatch!"
END IF
```

---
