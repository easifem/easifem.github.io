# SetBoundingBox

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetBoundingBox1(obj, box)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    TYPE(BoundingBox_), INTENT(IN) :: box
  END SUBROUTINE SetBoundingBox1
END INTERFACE

INTERFACE
  MODULE SUBROUTINE SetBoundingBox2(obj, nodes, local_nptrs)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    REAL(DFP), INTENT(IN) :: nodes(:, :)
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_nptrs(:)
  END SUBROUTINE SetBoundingBox2
END INTERFACE
```

## Overview

The `SetBoundingBox` method sets the bounding box information in a mesh object, defining the spatial extent of the mesh. It has two versions: one accepting a `BoundingBox_` object, and another calculating the bounding box from node coordinates.

## Syntax

```fortran
! Version 1: From BoundingBox_ object
CALL obj%SetBoundingBox(box)

! Version 2: From node coordinates
CALL obj%SetBoundingBox(nodes, local_nptrs)
```

## Parameters

### Version 1

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object |
| `box` | `TYPE(BoundingBox_)` | `IN` | The bounding box to set for the mesh |

### Version 2

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object |
| `nodes` | `REAL(DFP)(:,:)` | `IN` | Node coordinates in XiJ format |
| `local_nptrs` | `INTEGER(I4B)(:)` | `IN` (optional) | Local to global node number mapping |

## Description

`SetBoundingBox` updates the bounding box information in the mesh object. This information is used for various mesh operations, including domain decomposition, visualization, and spatial queries.

Version 1 directly sets the bounding box from a `BoundingBox_` object, while Version 2 calculates the bounding box from node coordinates, optionally using a node mapping.

## Implementation Notes

:::note Version 1
Version 1 extracts the min/max coordinates from the provided bounding box using operators like `.Xmin.`, `.Ymin.`, etc.
:::

:::note Version 2
Version 2 calls `GetBoundingBox` to calculate the bounding box from node coordinates, then calls Version 1 to set it.
:::

