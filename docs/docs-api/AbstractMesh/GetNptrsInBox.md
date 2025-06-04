# GetNptrsInBox

The `GetNptrsInBox` method retrieves the global node numbers of all nodes located within a specified bounding box in 3D space.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNptrsInBox(obj, box, nptrs, isStrict)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
      !! If Kdtree is not init then we init it
    INTEGER(I4B), ALLOCATABLE, INTENT(INOUT) :: nptrs(:)
    TYPE(BoundingBox_), INTENT(IN) :: box
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: isStrict
    !! Default is true
    !! If it is true the returned points are strictly inside or on the
    !! box, but not outside of it
    !! This is because we use radius of bounding box to find the points
    !! this is over estimation.
  END SUBROUTINE GetNptrsInBox
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetNptrsInBox(box, nptrs, [isStrict])
```

## Parameters

| Parameter  | Type                           | Intent          | Description                                                                 |
| ---------- | ------------------------------ | --------------- | --------------------------------------------------------------------------- |
| `obj`      | `CLASS(AbstractMesh_)`         | `INOUT`         | The mesh object                                                             |
| `box`      | `TYPE(BoundingBox_)`           | `IN`            | Bounding box to search within                                               |
| `nptrs`    | `INTEGER(I4B), ALLOCATABLE(:)` | `INOUT`         | Array to store the node numbers                                             |
| `isStrict` | `LOGICAL(LGT)`                 | `IN` (optional) | If true (default), only return nodes strictly inside or on the box boundary |

## Description

`GetNptrsInBox` finds all nodes that are located within a specified 3D bounding box and returns their global node numbers. This method uses a k-d tree for efficient spatial searching, initializing one if it doesn't already exist.

The `isStrict` parameter controls whether the method returns only nodes that are strictly inside or on the box boundary (true) or potentially includes some nodes slightly outside the box (false). The latter option may be faster but less precise.

This method is useful for operations that need to work with nodes in a specific spatial region, such as localized refinement, domain decomposition, or identifying nodes for boundary conditions.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
TYPE(BoundingBox_) :: searchBox
INTEGER(I4B), ALLOCATABLE :: nodesInBox(:)
REAL(DFP) :: min_coords(3), max_coords(3)

! Initialize mesh...

! Define a search box
min_coords = [0.0_DFP, 0.0_DFP, 0.0_DFP]
max_coords = [1.0_DFP, 1.0_DFP, 1.0_DFP]
CALL searchBox%Initiate(nsd=3, lim=[min_coords, max_coords])

! Find nodes in the box
CALL mesh%GetNptrsInBox(searchBox, nodesInBox)

PRINT *, "Found", SIZE(nodesInBox), "nodes in the specified box"
```
