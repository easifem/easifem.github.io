# IsNodeToNodes

The `IsNodeToNodes` method checks if the node-to-nodes mapping has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_isNodeToNodes(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION obj_isNodeToNodes
END INTERFACE
```

## Syntax

```fortran
result = mesh%IsNodeToNodes()
```

## Parameters

| Parameter | Type | Intent | Description |
|-----------|------|--------|-------------|
| `obj` | `CLASS(AbstractMesh_)` | `IN` | The mesh object |

## Return Value

| Type | Description |
|------|-------------|
| `LOGICAL(LGT)` | True if the node-to-nodes mapping has been initialized |

## Description

`IsNodeToNodes` returns whether the node-to-nodes mapping has been initialized in the mesh. This mapping allows for finding all nodes connected to a given node.

## Implementation Details

The method returns the value of the internal flag `isNodeToNodesInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if node-to-nodes mapping is available
IF (mesh%IsNodeToNodes()) THEN
  ! Use mapping directly
ELSE
  ! Need to initialize mapping first
  CALL mesh%InitiateNodeToNodes()
END IF
```

