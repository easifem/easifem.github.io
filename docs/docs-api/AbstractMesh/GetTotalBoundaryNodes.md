# GetTotalBoundaryNodes

The `GetTotalBoundaryNodes` method returns the total number of boundary nodes in the mesh. Boundary nodes are nodes that lie on the boundary of the domain.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetTotalBoundaryNodes(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalBoundaryNodes
END INTERFACE
```

## Syntax

```fortran
numBoundaryNodes = mesh%GetTotalBoundaryNodes()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                |
| -------------- | ------------------------------------------ |
| `INTEGER(I4B)` | Total number of boundary nodes in the mesh |

## Description

`GetTotalBoundaryNodes` returns the count of all boundary nodes in the mesh. Boundary nodes are those that lie on the boundary of the domain. This information is important for applying boundary conditions and for mesh quality assessment.

The method calculates the number of boundary nodes by subtracting the number of internal nodes from the total number of nodes in the mesh.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: boundaryNodes, totalNodes
REAL(DFP) :: boundaryRatio

! Initialize mesh...

! Get node counts
boundaryNodes = mesh%GetTotalBoundaryNodes()
totalNodes = mesh%GetTotalNodes()

! Calculate boundary-to-total ratio
boundaryRatio = REAL(boundaryNodes, DFP) / REAL(totalNodes, DFP)

PRINT*, "Mesh has", boundaryNodes, "boundary nodes out of", totalNodes, "total nodes"
PRINT *, "Boundary-to-total ratio:", boundaryRatio

! High ratios might indicate a very fine mesh or unusual geometry
IF (boundaryRatio > 0.5_DFP) THEN
  PRINT *, "Note: High proportion of boundary nodes"
END IF
```

---
