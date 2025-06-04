# GetInternalNptrs_

The `GetInternalNptrs_` method retrieves the global node numbers of internal nodes without allocating new memory. The caller provides a pre-allocated array to store the results.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetInternalNptrs_(obj, nptrs)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B), INTENT(INOUT) :: nptrs(:)
  END SUBROUTINE GetInternalNptrs_
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetInternalNptrs_(nptrs)
```

## Parameters

| Parameter | Type                   | Intent  | Description                                            |
| --------- | ---------------------- | ------- | ------------------------------------------------------ |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`    | The mesh object                                        |
| `nptrs`   | `INTEGER(I4B)(:)`      | `INOUT` | Pre-allocated array to store the internal node numbers |

## Description

`GetInternalNptrs_` retrieves the global node numbers of all internal nodes in the mesh and stores them in a pre-allocated array. This version avoids memory allocation, making it more efficient for repeated operations.

The caller must ensure that the `nptrs` array is large enough to hold all internal nodes. The total number of internal nodes can be determined by calling `GetTotalInternalNodes()` before using this method.

Unlike the function version, this subroutine does not return the size of the data. It fills the array with internal node numbers in sequence.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: numInternalNodes
INTEGER(I4B), ALLOCATABLE :: nodeBuffer(:)

! Initialize mesh...

! Get the number of internal nodes
numInternalNodes = mesh%GetTotalInternalNodes()

! Allocate a buffer of the exact size needed
ALLOCATE (nodeBuffer(numInternalNodes))

! Get internal nodes without allocation
CALL mesh%GetInternalNptrs_(nodeBuffer)

PRINT *, "Mesh has", numInternalNodes, "internal nodes"

! Process all internal nodes
DO i = 1, numInternalNodes
  ! Process nodeBuffer(i)
END DO
```
