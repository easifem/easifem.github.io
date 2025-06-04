# GetMaxNodeNumber

The `GetMaxNodeNumber` method returns the maximum global node number present in the mesh. This is useful for determining the range of node numbers and for array sizing.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetMaxNodeNumber(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION GetMaxNodeNumber
END INTERFACE
```

## Syntax

```fortran
maxNodeNum = mesh%GetMaxNodeNumber()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                            |
| -------------- | -------------------------------------- |
| `INTEGER(I4B)` | Maximum global node number in the mesh |

## Description

`GetMaxNodeNumber` returns the maximum global node number present in the mesh. This value is useful for determining the range of node numbers and for array sizing, especially when creating arrays indexed by global node numbers.

The maximum node number is stored in the mesh object as `maxNptrs` and is typically determined during mesh construction or import.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: minNode, maxNode, nodeRange
LOGICAL(LGT), ALLOCATABLE :: nodeExists(:)

! Initialize mesh...

! Get the maximum node number
maxNode = mesh%GetMaxNodeNumber()
minNode = mesh%GetMinNodeNumber()
nodeRange = maxNode - minNode + 1

! Create a mask for node existence
ALLOCATE (nodeExists(maxNode))
nodeExists = .FALSE.

! Mark existing nodes
DO i = 1, mesh%GetTotalNodes()
  globalNode = mesh%GetNptrs() (i)
  nodeExists(globalNode) = .TRUE.
END DO

PRINT *, "Highest node number in mesh:", maxNode
PRINT *, "Number of gaps in node numbering:", nodeRange - mesh%GetTotalNodes()
```
