# GetBoundingBox

Return the bounding box of the mesh.

## Interface

```fortran
! Version 1 - Get bounding box of the entire mesh
MODULE FUNCTION GetBoundingBox1(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  TYPE(BoundingBox_) :: ans
END FUNCTION GetBoundingBox1

! Version 2 - Get bounding box from specified nodes
MODULE FUNCTION GetBoundingBox2(obj, nodes, local_nptrs) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  REAL(DFP), INTENT(IN) :: nodes(:, :)
  !! Nodal coordinates in XiJ format
  INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_nptrs(:)
  TYPE(BoundingBox_) :: ans
END FUNCTION GetBoundingBox2
```

## Description

These functions return a bounding box object that encloses either the entire mesh (Version 1) or a specified set of nodes (Version 2). The bounding box contains the minimum and maximum coordinates in each dimension.

## Arguments

- `obj`: The abstract mesh object.
- `nodes` (Version 2): A 2D array containing nodal coordinates in XiJ format (rows are spatial dimensions, columns are nodes).
- `local_nptrs` (Version 2, optional): A mapping array for node numbers.

## Returns

- `ans`: A BoundingBox_ object containing the minimum and maximum coordinates in each dimension.

## Example

```fortran
! Get bounding box of the entire mesh
TYPE(BoundingBox_) :: bbox
bbox = mesh%GetBoundingBox()
PRINT*, "Mesh bounds: X min/max =", bbox%xmin, bbox%xmax

! Get bounding box of specific nodes
REAL(DFP), ALLOCATABLE :: nodeCoords(:,:)
TYPE(BoundingBox_) :: nodeBbox
! Assuming nodeCoords is filled with coordinates
nodeBbox = mesh%GetBoundingBox(nodeCoords)
```
