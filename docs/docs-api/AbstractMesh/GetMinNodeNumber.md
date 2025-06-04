# GetMinNodeNumber

The `GetMinNodeNumber` method returns the minimum global node number present in the mesh. This is useful for determining the range of node numbers and for array indexing.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMinNodeNumber(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetMinNodeNumber
END INTERFACE
```

## Syntax

```fortran
minNodeNum = mesh%GetMinNodeNumber()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                            |
| -------------- | -------------------------------------- |
| `INTEGER(I4B)` | Minimum global node number in the mesh |

## Description

`GetMinNodeNumber` returns the minimum global node number present in the mesh. This value is useful for determining the range of node numbers and for array indexing, especially when working with global node numbers directly.

The minimum node number is stored in the mesh object as `minNptrs` and is typically determined during mesh construction or import.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: minNode, maxNode, rangeSize

! Initialize mesh...

! Get the minimum and maximum node numbers
minNode = mesh%GetMinNodeNumber()
maxNode = mesh%GetMaxNodeNumber()
rangeSize = maxNode - minNode + 1

PRINT *, "Node numbers range from", minNode, "to", maxNode
PRINT *, "Range size:", rangeSize

! Create an array indexed by global node number
IF (rangeSize < 1000000) THEN ! Avoid excessive memory use
  ALLOCATE (nodeData(minNode:maxNode))

  ! Now can access data by global node number directly
  nodeData(nodeNum) = someValue
END IF
```
