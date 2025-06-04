# IsBoundaryData

The `IsBoundaryData` method checks if the boundary data has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isBoundaryData(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isBoundaryData
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsBoundaryData()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                    |
| -------------- | ---------------------------------------------- |
| `LOGICAL(LGT)` | True if the boundary data has been initialized |

## Description

`IsBoundaryData` returns whether the boundary data has been initialized in the mesh. Boundary data is essential for imposing boundary conditions and handling domain boundaries.

## Implementation Details

The method returns the value of the internal flag `isBoundaryDataInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if boundary data is available
IF (mesh%IsBoundaryData()) THEN
  ! Use boundary data directly
ELSE
  ! Need to initialize boundary data first
  CALL mesh%InitiateBoundaryData()
END IF
```
