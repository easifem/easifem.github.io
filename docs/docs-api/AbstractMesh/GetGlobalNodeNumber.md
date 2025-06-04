# GetGlobalNodeNumber

The `GetGlobalNodeNumber` method converts local node numbers to global node numbers in the mesh. Global node numbers are used for cross-mesh references and for output/visualization.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetGlobalNodeNumber1(obj, localNode) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localNode(:)
    INTEGER(I4B) :: ans(SIZE(localNode))
  END FUNCTION GetGlobalNodeNumber1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetGlobalNodeNumber2(obj, localNode) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: localNode
    INTEGER(I4B) :: ans
  END FUNCTION GetGlobalNodeNumber2
END INTERFACE
```

## Syntax

```fortran
! Convert a single local node number
globalNode = mesh%GetGlobalNodeNumber(localNode)

! Convert multiple local node numbers
globalNodes = mesh%GetGlobalNodeNumber(localNodeArray)
```

## Parameters

| Parameter   | Type                                | Intent | Description                     |
| ----------- | ----------------------------------- | ------ | ------------------------------- |
| `obj`       | `CLASS(AbstractMesh_)`              | `IN`   | The mesh object                 |
| `localNode` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN`   | Local node number(s) to convert |

## Return Value

| Version        | Type              | Description                  |
| -------------- | ----------------- | ---------------------------- |
| Single node    | `INTEGER(I4B)`    | Global node number           |
| Multiple nodes | `INTEGER(I4B)(:)` | Array of global node numbers |

## Description

`GetGlobalNodeNumber` converts local node numbers to global node numbers in the mesh. Local node numbers are consecutive integers starting from 1 that are used for internal mesh operations, while global node numbers are unique identifiers that may not be consecutive.

The method has two versions:

1. Convert a single local node number to a global node number
2. Convert an array of local node numbers to an array of global node numbers

This method is useful when working with multiple meshes or when exporting results to external formats that require global node numbering.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: localNode, globalNode
INTEGER(I4B) :: localNodes(3), globalNodes(3)

! Initialize mesh...

! Convert a single local node number
localNode = 5
globalNode = mesh%GetGlobalNodeNumber(localNode)

! Convert multiple local node numbers
localNodes = [1, 5, 10]
globalNodes = mesh%GetGlobalNodeNumber(localNodes)

PRINT *, "Local node", localNode, "is global node", globalNode

! Use global node numbers for output or visualization
DO i = 1, SIZE(globalNodes)
  WRITE (outputUnit, *) "Node", globalNodes(i), ":", nodeData(i)
END DO
```
