# GetLocalNodeNumber

The `GetLocalNodeNumber` method converts global node numbers to local node numbers in the mesh. Local node numbers are used for internal mesh operations and array indexing.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION GetLocalNodeNumber1(obj, globalNode, islocal) &
    RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans(SIZE(globalNode))
  END FUNCTION GetLocalNodeNumber1
END INTERFACE

INTERFACE
  MODULE FUNCTION GetLocalNodeNumber2(obj, globalNode, islocal)  &
    & RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    INTEGER(I4B) :: ans
  END FUNCTION GetLocalNodeNumber2
END INTERFACE
```

## Syntax

```fortran
! Convert a single global node number
localNode = mesh%GetLocalNodeNumber(globalNode, [islocal])

! Convert multiple global node numbers
localNodes = mesh%GetLocalNodeNumber(globalNodeArray, [islocal])
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `IN` | The mesh object |
| `globalNode` | `INTEGER(I4B)` or `INTEGER(I4B)(:)` | `IN` | Global node number(s) to convert |
| `islocal` | `LOGICAL(LGT)` | `IN` (optional) | If true, input is already local and no conversion is needed |

## Return Value

| Version | Type | Description |
|---------|------|-------------|
| Single node | `INTEGER(I4B)` | Local node number |
| Multiple nodes | `INTEGER(I4B)(:)` | Array of local node numbers |

## Description

`GetLocalNodeNumber` converts global node numbers to local node numbers in the mesh. Local node numbers are consecutive integers starting from 1 that are used for internal mesh operations and array indexing.

The method has two versions:
1. Convert a single global node number to a local node number
2. Convert an array of global node numbers to an array of local node numbers

If the optional `islocal` parameter is set to true, the method simply returns the input values assuming they're already local node numbers.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: globalNode, localNode
INTEGER(I4B) :: globalNodes(3), localNodes(3)

! Initialize mesh...

! Convert a single global node number
globalNode = 1001
localNode = mesh%GetLocalNodeNumber(globalNode)

! Convert multiple global node numbers
globalNodes = [1001, 1005, 1010]
localNodes = mesh%GetLocalNodeNumber(globalNodes)

PRINT*, "Global node", globalNode, "is local node", localNode

! Use local node numbers for array indexing
DO i = 1, SIZE(localNodes)
  ! Access node data using local node number
  nodeCoord = nodeCoordArray(:, localNodes(i))
END DO
```

