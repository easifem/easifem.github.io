# GetTotalElements

The `GetTotalElements` method returns the total number of elements in the mesh, with options to filter by mesh ID.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION SIZE(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    !! mesh object
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE

INTERFACE
  MODULE FUNCTION GetTotalElements2(obj, meshid) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    !! mesh object
    INTEGER(I4B), INTENT(IN) :: meshid
    !! mesh id
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalElements2
END INTERFACE

INTERFACE
  MODULE FUNCTION GetTotalElements3(obj, meshid) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: meshid(:)
    INTEGER(I4B) :: ans
  END FUNCTION GetTotalElements3
END INTERFACE
```

## Syntax

```fortran
! Get total elements in the mesh
numElements = mesh%GetTotalElements()

! Get total elements for a specific mesh ID
numElements = mesh%GetTotalElements(meshid)

! Get total elements for multiple mesh IDs
numElements = mesh%GetTotalElements(meshidArray)
```

## Parameters

| Parameter | Type                                | Intent | Description                      |
| --------- | ----------------------------------- | ------ | -------------------------------- |
| `obj`     | `CLASS(AbstractMesh_)`              | `IN`   | The mesh object                  |
| `meshid`  | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN`   | Mesh ID(s) to filter elements by |

## Return Value

| Type           | Description                                    |
| -------------- | ---------------------------------------------- |
| `INTEGER(I4B)` | Total number of elements matching the criteria |

## Description

`GetTotalElements` returns the total number of elements in the mesh, with options to filter by mesh ID. The method has three versions:

1. Return total number of all elements in the mesh
2. Return total number of elements that belong to a specific mesh ID
3. Return total number of elements that belong to any of the specified mesh IDs

This is useful for determining sizes for array allocation and for mesh statistics.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: totalElements, subdomain1Elements, multiDomainElements
INTEGER(I4B) :: domains(2) = [1, 3]

! Initialize mesh...

! Get total elements in the mesh
totalElements = mesh%GetTotalElements()

! Get total elements in subdomain 1
subdomain1Elements = mesh%GetTotalElements(meshid=1)

! Get total elements in domains 1 and 3
multiDomainElements = mesh%GetTotalElements(meshid=domains)

PRINT *, "Total elements:", totalElements
PRINT *, "Subdomain 1 elements:", subdomain1Elements
PRINT *, "Elements in domains 1 and 3:", multiDomainElements
```
