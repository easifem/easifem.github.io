# IsNodeToElements

The `IsNodeToElements` method checks if the node-to-elements mapping has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isNodeToElements(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isNodeToElements
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsNodeToElements()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                               |
| -------------- | --------------------------------------------------------- |
| `LOGICAL(LGT)` | True if the node-to-elements mapping has been initialized |

## Description

`IsNodeToElements` returns whether the node-to-elements mapping has been initialized in the mesh. This mapping allows for finding all elements connected to a given node.

## Implementation Details

The method returns the value of the internal flag `isNodeToElementsInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if node-to-elements mapping is available
IF (mesh%IsNodeToElements()) THEN
  ! Use mapping directly
ELSE
  ! Need to initialize mapping first
  CALL mesh%InitiateNodeToElements()
END IF
```
