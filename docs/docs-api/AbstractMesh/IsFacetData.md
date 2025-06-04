# IsFacetData

The `IsFacetData` method checks if the facet data has been initialized in the mesh.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION isFacetData(obj) RESULT(ans)
    CLASS(AbstractMesh_), INTENT(in) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION isFacetData
END INTERFACE
```

## Syntax

```fortran
RESULT = mesh%IsFacetData()
```

## Parameters

| Parameter | Type                   | Intent | Description     |
| --------- | ---------------------- | ------ | --------------- |
| `obj`     | `CLASS(AbstractMesh_)` | `IN`   | The mesh object |

## Return Value

| Type           | Description                                 |
| -------------- | ------------------------------------------- |
| `LOGICAL(LGT)` | True if the facet data has been initialized |

## Description

`IsFacetData` returns whether the facet data has been initialized in the mesh. Facet data is important for handling interfaces between elements and domain boundaries.

## Implementation Details

The method returns the value of the internal flag `isFacetDataInitiated`.

## Example Usage

```fortran
TYPE(Mesh_) :: mesh

! Initialize mesh...

! Check if facet data is available
IF (mesh%IsFacetData()) THEN
  ! Use facet data directly
ELSE
  ! Need to initialize facet data first
  CALL mesh%InitiateFacetElements()
END IF
```
