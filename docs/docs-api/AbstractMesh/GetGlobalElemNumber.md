# GetGlobalElemNumber

The `GetGlobalElemNumber` method converts local element numbers to global element numbers in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetGlobalElemNumber1(obj, localElement) &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localElement(:)
    INTEGER(I4B) :: ans(SIZE(localElement))
  END FUNCTION GetGlobalElemNumber1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetGlobalElemNumber2(obj, localElement) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localElement
    INTEGER(I4B) :: ans
  END FUNCTION GetGlobalElemNumber2
END INTERFACE
```

## Syntax

```fortran
! Convert a single local element number
globalElem = mesh%GetGlobalElemNumber(localElement)

! Convert multiple local element numbers
globalElems = mesh%GetGlobalElemNumber(localElementArray)
```

## Parameters

| Parameter      | Type                                | Intent | Description                        |
| -------------- | ----------------------------------- | ------ | ---------------------------------- |
| `obj`          | `CLASS(AbstractMesh_)`              | `IN`   | The mesh object                    |
| `localElement` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN`   | Local element number(s) to convert |

## Return Value

| Version           | Type              | Description                     |
| ----------------- | ----------------- | ------------------------------- |
| Single element    | `INTEGER(I4B)`    | Global element number           |
| Multiple elements | `INTEGER(I4B)(:)` | Array of global element numbers |

## Description

`GetGlobalElemNumber` converts local element numbers to global element numbers. This is useful for operations that work with the internal (local) element numbering but need to report results using the global element numbers.

The method has two versions:

1. Convert a single local element number to a global element number
2. Convert an array of local element numbers to an array of global element numbers

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: localElem, globalElem
INTEGER(I4B) :: localElems(3), globalElems(3)

! Initialize mesh...

! Convert a single local element number
localElem = 5
globalElem = mesh%GetGlobalElemNumber(localElem)

! Convert multiple local element numbers
localElems = [1, 3, 5]
globalElems = mesh%GetGlobalElemNumber(localElems)

PRINT *, "Local element", localElem, "is global element", globalElem
```
