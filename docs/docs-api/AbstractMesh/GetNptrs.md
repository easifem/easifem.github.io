# GetNptrs

The `GetNptrs` method retrieves the global node numbers present in the mesh. It can return either all node numbers or those belonging to a specific mesh ID.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetNptrs1(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans(obj%tNodes)
  END FUNCTION GetNptrs1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetNptrs2(obj, meshid) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: meshid
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetNptrs2
END INTERFACE
```

## Syntax

```fortran
! Get all node numbers in the mesh
nodeNumbers = mesh%GetNptrs()

! Get node numbers for a specific mesh ID
nodeNumbers = mesh%GetNptrs(meshid)
```

## Parameters

| Parameter | Type                   | Intent | Description                |
| --------- | ---------------------- | ------ | -------------------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object            |
| `meshid`  | `INTEGER(I4B)`         | `IN`   | Mesh ID to filter nodes by |

## Return Value

| Version   | Type                           | Description                                            |
| --------- | ------------------------------ | ------------------------------------------------------ |
| Version 1 | `INTEGER(I4B)(obj%tNodes)`     | Array of all global node numbers in the mesh           |
| Version 2 | `INTEGER(I4B), ALLOCATABLE(:)` | Array of global node numbers for the specified mesh ID |

## Description

`GetNptrs` returns an array of global node numbers present in the mesh. The method has two versions:

1. Return all node numbers in the mesh
2. Return only node numbers that belong to a specific mesh ID

This information is essential for operations that need to iterate over or reference specific nodes in the mesh.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: allNodes(mesh%GetTotalNodes())
INTEGER(I4B), ALLOCATABLE :: subdomainNodes(:)

! Initialize mesh...

! Get all node numbers
allNodes = mesh%GetNptrs()

! Get node numbers for a specific subdomain
subdomainNodes = mesh%GetNptrs(meshid=2)

PRINT *, "Total nodes:", SIZE(allNodes)
PRINT *, "Subdomain nodes:", SIZE(subdomainNodes)
```
