# GetNptrs_

The `GetNptrs_` method is a subroutine version of `GetNptrs` that retrieves node numbers without allocation. It can return all node numbers, those for a specific mesh ID, or those for specified elements.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNptrs1_(obj, ans, tsize)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(INOUT) :: ans(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
  END SUBROUTINE GetNptrs1_
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNptrs2_(obj, meshid, ans, tsize)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: meshid
    INTEGER(I4B), INTENT(INOUT) :: ans(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
  END SUBROUTINE GetNptrs2_
END INTERFACE

INTERFACE
  MODULE SUBROUTINE GetNptrs3_(obj, globalElement, ans, tsize, islocal)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(IN) :: globalElement(:)
    !! global or local element number
    INTEGER(I4B), INTENT(INOUT) :: ans(:)
    INTEGER(I4B), INTENT(OUT) :: tsize
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then globalElement is local
  END SUBROUTINE GetNptrs3_
END INTERFACE
```

## Syntax

```fortran
! Get all node numbers
CALL mesh%GetNptrs_(ans, tsize)

! Get node numbers for a specific mesh ID
CALL mesh%GetNptrs_(meshid, ans, tsize)

! Get node numbers for specified elements
CALL mesh%GetNptrs_(globalElement, ans, tsize, [islocal])
```

## Parameters

| Parameter       | Type                   | Intent          | Description                                           |
| --------------- | ---------------------- | --------------- | ----------------------------------------------------- |
| `obj`           | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                                       |
| `ans`           | `INTEGER(I4B)(:)`      | `INOUT`         | Array to store the node numbers                       |
| `tsize`         | `INTEGER(I4B)`         | `OUT`           | Number of node numbers stored in `ans`                |
| `meshid`        | `INTEGER(I4B)`         | `IN`            | Mesh ID to filter nodes by                            |
| `globalElement` | `INTEGER(I4B)(:)`      | `IN`            | Global or local element numbers to get nodes from     |
| `islocal`       | `LOGICAL(LGT)`         | `IN` (optional) | If true, globalElement contains local element numbers |

## Description

`GetNptrs_` retrieves node numbers without allocating new memory. The caller provides a pre-allocated array `ans` to store the results, and the method returns the actual number of nodes in `tsize`. This approach is more efficient for repeated operations because it avoids memory allocation overhead.

The method has three versions:

1. Get all node numbers in the mesh
2. Get node numbers for a specific mesh ID
3. Get node numbers for specified elements

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: maxNodes, actualNodes
INTEGER(I4B), ALLOCATABLE :: nodeBuffer(:)

! Initialize mesh...

! Allocate a buffer large enough for any possible result
maxNodes = mesh%GetMaxNodeNumber()
ALLOCATE (nodeBuffer(maxNodes))

! Get all node numbers
CALL mesh%GetNptrs_(nodeBuffer, actualNodes)
PRINT *, "Total nodes:", actualNodes

! Get nodes for a specific mesh ID
CALL mesh%GetNptrs_(meshid=2, ans=nodeBuffer, tsize=actualNodes)
PRINT *, "Nodes in subdomain 2:", actualNodes

! Process only the valid part of the buffer
DO i = 1, actualNodes
  ! Process nodeBuffer(i)
END DO
```
