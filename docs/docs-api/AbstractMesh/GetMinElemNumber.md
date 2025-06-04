# GetMinElemNumber

The `GetMinElemNumber` method returns the minimum global element number present in the mesh. This is useful for determining the range of element numbers and for array indexing.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMinElemNumber(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetMinElemNumber
END INTERFACE
```

## Syntax

```fortran
minElemNum = mesh%GetMinElemNumber()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                               |
| -------------- | ----------------------------------------- |
| `INTEGER(I4B)` | Minimum global element number in the mesh |

## Description

`GetMinElemNumber` returns the minimum global element number present in the mesh. This value is useful for determining the range of element numbers and for array indexing, especially when working with global element numbers directly.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: minElem, maxElem, rangeSize

! Initialize mesh...

! Get the minimum and maximum element numbers
minElem = mesh%GetMinElemNumber()
maxElem = mesh%GetMaxElemNumber()
rangeSize = maxElem - minElem + 1

PRINT *, "Element numbers range from", minElem, "to", maxElem
PRINT *, "Range size:", rangeSize
```
