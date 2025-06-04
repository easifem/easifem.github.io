# GetNptrsInBox_

The `GetNptrsInBox_` method retrieves the global node numbers of nodes within a specified bounding box without allocating new memory. The caller provides a pre-allocated array to store the results.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNptrsInBox_(obj, box, nptrs, tnodes, isStrict)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
      !! If Kdtree is not init then we init it
    TYPE(BoundingBox_), INTENT(IN) :: box
    INTEGER(I4B), INTENT(INOUT) :: nptrs(:)
    !! it should allocated, size of nptrs should be .ge. tnodes
    INTEGER(I4B), INTENT(INOUT) :: tnodes
    !! total nodes found
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isStrict
    !! Default is true
    !! If it is true the returned points are strictly inside or on the
    !! box, but not outside of it
    !! This is because we use radius of bounding box to find the points
    !! this is over estimation.
  END SUBROUTINE GetNptrsInBox_
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetNptrsInBox_(box, nptrs, tnodes, [isStrict])
```

## Parameters

| Parameter  | Type                   | Intent          | Description                                                                 |
| ---------- | ---------------------- | --------------- | --------------------------------------------------------------------------- |
| `obj`      | `CLASS(AbstractMesh_)` | `INOUT`         | The mesh object                                                             |
| `box`      | `TYPE(BoundingBox_)`   | `IN`            | Bounding box to search within                                               |
| `nptrs`    | `INTEGER(I4B)(:)`      | `INOUT`         | Pre-allocated array to store node numbers                                   |
| `tnodes`   | `INTEGER(I4B)`         | `INOUT`         | Number of nodes found and stored in `nptrs`                                 |
| `isStrict` | `LOGICAL(LGT)`         | `IN` (optional) | If true (default), only return nodes strictly inside or on the box boundary |

## Description

`GetNptrsInBox_` finds all nodes that are located within a specified 3D bounding box and stores their global node numbers in a pre-allocated array. This version avoids memory allocation, making it more efficient for repeated operations.

Like `GetNptrsInBox`, this method uses a k-d tree for efficient spatial searching and allows control over whether nodes must be strictly inside the box or not.

The caller must ensure that the `nptrs` array is large enough to hold all potential results. The actual number of nodes found is returned in `tnodes`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
TYPE(BoundingBox_) :: searchBox
INTEGER(I4B), ALLOCATABLE :: nodeBuffer(:)
INTEGER(I4B) :: nodesFound
REAL(DFP) :: min_coords(3), max_coords(3)

! Initialize mesh...

! Define a search box
min_coords = [0.0_DFP, 0.0_DFP, 0.0_DFP]
max_coords = [1.0_DFP, 1.0_DFP, 1.0_DFP]
CALL searchBox%Initiate(nsd=3, lim=[min_coords, max_coords])

! Allocate a buffer large enough for any possible result
ALLOCATE (nodeBuffer(mesh%GetTotalNodes()))

! Find nodes in the box without allocation
CALL mesh%GetNptrsInBox_(searchBox, nodeBuffer, nodesFound)

PRINT *, "Found", nodesFound, "nodes in the specified box"

! Process only the valid part of the buffer
DO i = 1, nodesFound
  ! Process nodeBuffer(i)
END DO
```
