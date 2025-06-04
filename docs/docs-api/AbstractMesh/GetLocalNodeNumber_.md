# GetLocalNodeNumber_

The `GetLocalNodeNumber_` method converts global node numbers to local node numbers without allocating new memory. The caller provides a pre-allocated array to store the results.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetLocalNodeNumber1_(obj, globalNode, ans, islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalNode(:)
    INTEGER(I4B), INTENT(INOUT) :: ans(:)
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  END SUBROUTINE GetLocalNodeNumber1_
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetLocalNodeNumber_(globalNode, ans, [islocal])
```

## Parameters

| Parameter    | Type                   | Intent          | Description                                                 |
| ------------ | ---------------------- | --------------- | ----------------------------------------------------------- |
| `obj`        | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                             |
| `globalNode` | `INTEGER(I4B)(:)`      | `IN`            | Global node numbers to convert                              |
| `ans`        | `INTEGER(I4B)(:)`      | `INOUT`         | Pre-allocated array to store local node numbers             |
| `islocal`    | `LOGICAL(LGT)`         | `IN` (optional) | If true, input is already local and no conversion is needed |

## Description

`GetLocalNodeNumber_` converts global node numbers to local node numbers without allocating new memory. This subroutine version is more efficient for repeated operations because it avoids memory allocation overhead.

The caller must ensure that the `ans` array is large enough to hold all results. Typically, `ans` should have the same size as `globalNode`.

If the optional `islocal` parameter is set to true, the method simply copies the input values to the output array, assuming they're already local node numbers.

## Example Usage

```fortran
TYPE(FEMesh_) :: mesh
INTEGER(I4B) :: globalNodes(3), localNodes(3)

! Initialize mesh...

! Set up global node numbers
globalNodes = [1001, 1005, 1010]

! Convert to local node numbers without allocation
CALL mesh%GetLocalNodeNumber_(globalNodes, localNodes)

PRINT *, "Global nodes:", globalNodes
PRINT *, "Local nodes:", localNodes

! Use local node numbers for array indexing
DO i = 1, SIZE(localNodes)
  ! Access node data using local node number
  nodeCoord = nodeCoordArray(:, localNodes(i))
END DO
```
