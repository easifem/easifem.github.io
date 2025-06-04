# GetElemType

The `GetElemType` method retrieves the type (name) of a specific element in the mesh. Element types define the geometric and interpolation properties of mesh elements.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetElemType(obj, globalElement, islocal) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION GetElemType
END INTERFACE
```

## Syntax

```fortran
elemType = mesh%GetElemType(globalElement, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                                 |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)`         | `IN`            | Global or local element number                              |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement is treated as a local element number |

## Return Value

| Type           | Description             |
| -------------- | ----------------------- |
| `INTEGER(I4B)` | Element type identifier |

## Description

`GetElemType` returns the type of a specified element in the mesh. The element type is an integer identifier that corresponds to a specific geometric and interpolation element type (such as hexahedron, tetrahedron, etc.).

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: elemNum, elemType

! Initialize mesh, elemNum...

! Get the element type
elemType = mesh%GetElemType(elemNum)

! Process based on element type
SELECT CASE (elemType)
CASE (HEXAHEDRON)
  PRINT *, "Element is a hexahedron"
CASE (TETRAHEDRON)
  PRINT *, "Element is a tetrahedron"
  ! Other cases...
END SELECT
```

---
