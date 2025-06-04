# GetBoundaryNptrs

The `GetBoundaryNptrs` method returns the global node numbers of all boundary nodes in the mesh. Boundary nodes are nodes that lie on the boundary of the domain.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetBoundaryNptrs(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetBoundaryNptrs
END INTERFACE
```

## Syntax

```fortran
boundaryNodes = mesh%GetBoundaryNptrs()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type                           | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `INTEGER(I4B), ALLOCATABLE(:)` | Array of global node numbers for boundary nodes |

## Description

`GetBoundaryNptrs` returns an array of global node numbers for all boundary nodes in the mesh. Boundary nodes are those that lie on the boundary of the domain. Identifying boundary nodes is crucial for applying boundary conditions in numerical simulations.

The method allocates a new array to hold the result, with a size equal to the number of boundary nodes.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B), ALLOCATABLE :: boundaryNodes(:)

! Initialize mesh...

! Get all boundary nodes
boundaryNodes = mesh%GetBoundaryNptrs()

PRINT *, "Mesh has", SIZE(boundaryNodes), "boundary nodes"

! Apply boundary conditions
DO i = 1, SIZE(boundaryNodes)
  nodeNum = boundaryNodes(i)
  ! Apply boundary condition to this node
END DO
```
