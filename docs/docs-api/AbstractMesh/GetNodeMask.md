# GetNodeMask

The `GetNodeMask` method creates a logical mask array indicating which global node numbers are present in the mesh. This is useful for quickly checking if nodes exist and for filtering operations.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE GetNodeMask(obj, mask, local_nptrs)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT), INTENT(INOUT) :: mask(:)
    !! the size of mask should be more than or equal to  the maxNptrs
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: local_nptrs(:)
    !! additional mapping
  END SUBROUTINE GetNodeMask
END INTERFACE
```

## Syntax

```fortran
CALL mesh%GetNodeMask(mask, [local_nptrs])
```

## Parameters

| Parameter     | Type                   | Intent          | Description                           |
| ------------- | ---------------------- | --------------- | ------------------------------------- |
| `obj`         | `CLASS(AbstractMesh_)` | `IN`            | The mesh object                       |
| `mask`        | `LOGICAL(LGT)(:)`      | `INOUT`         | Array to store the node presence mask |
| `local_nptrs` | `INTEGER(I4B)(:)`      | `IN` (optional) | Additional mapping for node numbers   |

## Description

`GetNodeMask` creates a logical mask array where each element indicates whether a corresponding global node number is present in the mesh. For each global node number that exists in the mesh, the corresponding position in the mask array is set to true.

The mask array must be pre-allocated with a size at least equal to the maximum node number in the mesh (`maxNptrs`).

The optional `local_nptrs` parameter allows for an additional level of mapping, which is useful when working with multiple meshes or when a custom node numbering scheme is in use.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
LOGICAL(LGT), ALLOCATABLE :: nodeMask(:)
INTEGER(I4B) :: maxNode, nodeToCheck

! Initialize mesh...

! Allocate mask array
maxNode = mesh%GetMaxNodeNumber()
ALLOCATE (nodeMask(maxNode))

! Get the node mask
CALL mesh%GetNodeMask(nodeMask)

! Check if specific nodes exist
nodeToCheck = 1001
IF (nodeMask(nodeToCheck)) THEN
  PRINT *, "Node", nodeToCheck, "exists in the mesh"
ELSE
  PRINT *, "Node", nodeToCheck, "does not exist in the mesh"
END IF

! Count total nodes (should match GetTotalNodes())
PRINT *, "Total nodes:", COUNT(nodeMask)

! Use mask for vector operations
! For example, only process values corresponding to existing nodes
WHERE (nodeMask)
  nodeValues = someCalculation()
END WHERE
```
