# IsFaceConnectivity

The `IsFaceConnectivity` method checks if the face connectivity information has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isFaceConnectivity(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isFaceConnectivity
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsFaceConnectivity()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                        |
| -------------- | -------------------------------------------------- |
| `LOGICAL(LGT)` | True if the face connectivity has been initialized |

## Description

`IsFaceConnectivity` returns whether the face connectivity information has been initialized in the mesh. Face connectivity is essential for 3D meshes and certain numerical methods.

## Implementation Details

The method returns the value of the internal flag `isFaceConnectivityInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if face connectivity is available
IF (mesh%IsFaceConnectivity()) THEN
  ! Use face connectivity directly
ELSE
  ! Need to initialize face connectivity first
  CALL mesh%InitiateFaceConnectivity()
END IF
```
