# GetLocalElemNumber

The `GetLocalElemNumber` method converts global element numbers to local element numbers in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetLocalElemNumber1(obj, globalElement, islocal)  &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans(SIZE(globalElement))
  END FUNCTION GetLocalElemNumber1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetLocalElemNumber2(obj, globalElement, islocal)  &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION GetLocalElemNumber2
END INTERFACE
```

## Syntax

```fortran
! Convert a single global element number
localElem = mesh%GetLocalElemNumber(globalElement, [islocal])

! Convert multiple global element numbers
localElems = mesh%GetLocalElemNumber(globalElementArray, [islocal])
```

## Parameters

| Parameter       | Type                                | Intent          | Description                                                 |
| --------------- | ----------------------------------- | --------------- | ----------------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)`              | `IN`            | The mesh object                                             |
| `globalElement` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN`            | Global element number(s) to convert                         |
| `islocal`       | `LOGICAL(LGT)`                      | `IN` (optional) | If true, input is already local and no conversion is needed |

## Return Value

| Version           | Type              | Description                    |
| ----------------- | ----------------- | ------------------------------ |
| Single element    | `INTEGER(I4B)`    | Local element number           |
| Multiple elements | `INTEGER(I4B)(:)` | Array of local element numbers |

## Description

`GetLocalElemNumber` converts global element numbers to local element numbers. This is useful for operations that need to work with the internal (local) element numbering of the mesh.

The method has two versions:

1. Convert a single global element number to a local element number
2. Convert an array of global element numbers to an array of local element numbers

If the optional `islocal` parameter is set to true, the method simply returns the input values assuming they're already local element numbers.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: globalElem, localElem
INTEGER(I4B) :: globalElems(3), localElems(3)

! Initialize mesh...

! Convert a single global element number
globalElem = 1001
localElem = mesh%GetLocalElemNumber(globalElem)

! Convert multiple global element numbers
globalElems = [1001, 1005, 1010]
localElems = mesh%GetLocalElemNumber(globalElems)

PRINT *, "Global element", globalElem, "is local element", localElem
```
