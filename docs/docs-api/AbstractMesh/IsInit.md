# IsInit

The `IsInit` method checks if the mesh object has been properly initialized.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isInit(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isInit
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsInit()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                           |
| -------------- | ------------------------------------- |
| `LOGICAL(LGT)` | True if the mesh has been initialized |

## Description

`IsInit` returns the initialization status of the mesh object. It provides a way to check if the mesh has been properly set up before performing operations on it.

## Implementation Details

The method simply returns the value of the internal flag `isInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Try to initialize mesh...

! Check if initialization was successful
IF (mesh%IsInit()) THEN
  PRINT *, "Mesh is ready for use"
ELSE
  PRINT *, "Mesh initialization failed"
END IF
```
