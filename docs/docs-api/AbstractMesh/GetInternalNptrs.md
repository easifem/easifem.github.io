# GetInternalNptrs

The `GetInternalNptrs` method returns the global node numbers of all internal nodes in the mesh. Internal nodes are nodes that are not on the boundary of the domain.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetInternalNptrs(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetInternalNptrs
END INTERFACE
```

## Syntax

```fortran
internalNodes = mesh%GetInternalNptrs()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type                           | Description                                     |
| ------------------------------ | ----------------------------------------------- |
| `INTEGER(I4B), ALLOCATABLE(:)` | Array of global node numbers for internal nodes |

## Description

`GetInternalNptrs` returns an array of global node numbers for all internal nodes in the mesh. Internal nodes are those that are not on the boundary of the domain. This distinction is important for many numerical methods, as boundary nodes often require special treatment for boundary conditions.

The method allocates a new array to hold the result, with a size equal to the number of internal nodes.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B), ALLOCATABLE :: internalNodes(:)

! Initialize mesh...

! Get all internal nodes
internalNodes = mesh%GetInternalNptrs()

PRINT *, "Mesh has", SIZE(internalNodes), "internal nodes"

! Apply some operation to internal nodes only
DO i = 1, SIZE(internalNodes)
  nodeNum = internalNodes(i)
  ! Process internal node
END DO
```

