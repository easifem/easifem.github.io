# GetMaxElemNumber

The `GetMaxElemNumber` method returns the maximum global element number present in the mesh. This is useful for determining the range of element numbers and for array sizing.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMaxElemNumber(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetMaxElemNumber
END INTERFACE
```

## Syntax

```fortran
maxElemNum = mesh%GetMaxElemNumber()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                               |
| -------------- | ----------------------------------------- |
| `INTEGER(I4B)` | Maximum global element number in the mesh |

## Description

`GetMaxElemNumber` returns the maximum global element number present in the mesh. This value is useful for determining the range of element numbers and for array sizing, especially when creating arrays indexed by global element numbers.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: minElem, maxElem
INTEGER(I4B), ALLOCATABLE :: elemData(:)

! Initialize mesh...

! Get the maximum element number
maxElem = mesh%GetMaxElemNumber()

! Allocate an array that can be indexed by global element numbers
ALLOCATE (elemData(maxElem))

! Use the array with global element numbers as indices
DO i = 1, mesh%SIZE()
  globalElem = mesh%GetElemNum_() [i]
  elemData(globalElem) = computeSomething(globalElem)
END DO
```
