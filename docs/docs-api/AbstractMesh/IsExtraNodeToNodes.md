# IsExtraNodeToNodes

The `IsExtraNodeToNodes` method checks if the extra node-to-nodes mapping has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isExtraNodeToNodes(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isExtraNodeToNodes
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsExtraNodeToNodes()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| `LOGICAL(LGT)` | True if the extra node-to-nodes mapping has been initialized |

## Description

`IsExtraNodeToNodes` returns whether the extra node-to-nodes mapping has been initialized in the mesh. This extended mapping is useful for certain numerical methods like jump-based finite element methods.

## Implementation Details

The method returns the value of the internal flag `isExtraNodeToNodesInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if extra node-to-nodes mapping is available
IF (mesh%IsExtraNodeToNodes()) THEN
  ! Use mapping directly
ELSE
  ! Need to initialize mapping first
  CALL mesh%InitiateExtraNodeToNodes()
END IF
```
