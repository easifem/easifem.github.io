# GetTotalCells

The `GetTotalCells` method returns the total number of cells (elements) in the mesh. It is an alias for the `Size` method.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION SIZE(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION size
END INTERFACE
```

## Syntax

```fortran
numCells = mesh%GetTotalCells()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                  |
| -------------- | -------------------------------------------- |
| `INTEGER(I4B)` | Total number of cells (elements) in the mesh |

## Description

`GetTotalCells` returns the total number of cells (elements) in the mesh. This method is an alias for the `Size` method and provides a more descriptive name for the operation when thinking in terms of cells rather than elements.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: numCells

! Initialize mesh...

! Get the total number of cells
numCells = mesh%GetTotalCells()

PRINT *, "The mesh contains", numCells, "cells"
```
