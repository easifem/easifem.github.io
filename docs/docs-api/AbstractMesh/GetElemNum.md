# GetElemNum

The `GetElemNum` method retrieves the element numbers (global or local) present in the mesh. It can return either all element numbers or those belonging to a specific mesh ID.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetElemNum1(obj, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetElemNum1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetElemNum2(obj, meshid, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: meshid
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B), ALLOCATABLE :: ans(:)
  END FUNCTION GetElemNum2
END INTERFACE
```

## Syntax

```fortran
! Get all element numbers
elemNumbers = mesh%GetElemNum([islocal])

! Get element numbers for a specific mesh ID
elemNumbers = mesh%GetElemNum(meshid, [islocal])
```

## Parameters

| Parameter | Type                   | Intent          | Description                                             |
| --------- | ---------------------- | --------------- | ------------------------------------------------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                         |
| `islocal` | `LOGICAL(LGT)`         | `IN` (optional) | If true, return local element numbers instead of global |
| `meshid`  | `INTEGER(I4B)`         | `IN`            | Mesh ID to filter elements by                           |

## Return Value

| Type                           | Description              |
| ------------------------------ | ------------------------ |
| `INTEGER(I4B), ALLOCATABLE(:)` | Array of element numbers |

## Description

`GetElemNum` returns an array of element numbers present in the mesh. The method has two versions:

1. Return all element numbers in the mesh
2. Return only element numbers that belong to a specific mesh ID

The `islocal` parameter determines whether the returned numbers are global (default) or local element numbers.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B), ALLOCATABLE :: allElements(:), subdomainElements(:)

! Initialize mesh...

! Get all element numbers
allElements = mesh%GetElemNum()

! Get element numbers for a specific subdomain
subdomainElements = mesh%GetElemNum(meshid=2)

PRINT *, "Total elements:", SIZE(allElements)
PRINT *, "Subdomain elements:", SIZE(subdomainElements)
```
