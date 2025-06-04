# SetQuality

The `SetQuality` method calculates and sets quality measures for mesh elements. Currently, this method is under development.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE obj_SetQuality(obj, measures, max_measures, &
                                   min_measures, nodeCoord, local_nptrs)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: measures(:)
    REAL(DFP), INTENT(OUT) :: max_measures(:)
    REAL(DFP), INTENT(OUT) :: min_measures(:)
    REAL(DFP), INTENT(IN) :: nodeCoord(:, :)
    INTEGER(I4B), INTENT(IN) :: local_nptrs(:)
  END SUBROUTINE obj_SetQuality
END INTERFACE
```

## Syntax

```fortran
CALL obj%SetQuality(measures, max_measures, min_measures, nodeCoord, local_nptrs)
```

## Parameters

| Parameter      | Type                   | Intent  | Description                             |
| -------------- | ---------------------- | ------- | --------------------------------------- |
| `obj`          | `CLASS(AbstractMesh_)` | `INOUT` | The mesh object                         |
| `measures`     | `INTEGER(I4B)(:)`      | `IN`    | Array of quality measure identifiers    |
| `max_measures` | `REAL(DFP)(:)`         | `OUT`   | Maximum values for each quality measure |
| `min_measures` | `REAL(DFP)(:)`         | `OUT`   | Minimum values for each quality measure |
| `nodeCoord`    | `REAL(DFP)(:,:)`       | `IN`    | Node coordinates                        |
| `local_nptrs`  | `INTEGER(I4B)(:)`      | `IN`    | Local to global node number mapping     |

## Description

`SetQuality` is intended to calculate various quality measures for mesh elements, such as aspect ratio, skewness, etc. Currently, the method raises an error indicating it is under development.

## Implementation Notes

The current implementation only raises an error message indicating the method is under development.
