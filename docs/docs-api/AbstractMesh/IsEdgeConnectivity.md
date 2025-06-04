# IsEdgeConnectivity

The `IsEdgeConnectivity` method checks if the edge connectivity information has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isEdgeConnectivity(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isEdgeConnectivity
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsEdgeConnectivity()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                        |
| -------------- | -------------------------------------------------- |
| `LOGICAL(LGT)` | True if the edge connectivity has been initialized |

## Description

`IsEdgeConnectivity` returns whether the edge connectivity information has been initialized in the mesh. Edge connectivity is essential for higher-order elements and certain numerical methods.

## Implementation Details

The method returns the value of the internal flag `isEdgeConnectivityInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if edge connectivity is available
IF (mesh%IsEdgeConnectivity()) THEN
  ! Use edge connectivity directly
ELSE
  ! Need to initialize edge connectivity first
  CALL mesh%InitiateEdgeConnectivity()
END IF
```
