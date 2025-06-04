# Size

The `Size` method returns the total number of elements in the mesh. This is equivalent to `GetTotalElements()` and is provided as an alternative naming for the same functionality.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION SIZE(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(IN) :: obj
    !! mesh object
    INTEGER(I4B) :: ans
  END FUNCTION Size
END INTERFACE
```

## Syntax

```fortran
numElements = mesh%SIZE()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                          |
| -------------- | ------------------------------------ |
| `INTEGER(I4B)` | Total number of elements in the mesh |

## Description

`Size` returns the total number of elements in the mesh. This method provides a convenient way to determine the mesh size for array allocation and iteration purposes. It is functionally equivalent to `GetTotalElements()`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh
INTEGER(I4B) :: numElements

! Initialize mesh...

! Get the total number of elements
numElements = mesh%SIZE()

PRINT *, "The mesh contains", numElements, "elements"
```
