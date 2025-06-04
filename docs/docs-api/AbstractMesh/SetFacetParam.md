# SetFacetParam

The `SetFacetParam` method sets parameters for a facet element in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE SetFacetParam(obj, facetElement, elementType)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    INTEGER(I4B), INTENT(IN) :: facetElement
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: elementType
  END SUBROUTINE SetFacetParam
END INTERFACE
```

## Syntax

```fortran
CALL obj%SetFacetParam(facetElement, [elementType])
```

## Parameters

| Parameter      | Type                   | Intent          | Description                |
| -------------- | ---------------------- | --------------- | -------------------------- |
| `obj`          | `CLASS(AbstractMesh_)` | `INOUT`         | The mesh object            |
| `facetElement` | `INTEGER(I4B)`         | `IN`            | Facet element number       |
| `elementType`  | `INTEGER(I4B)`         | `IN` (optional) | Element type for the facet |

## Description

`SetFacetParam` sets parameters for a specific facet element in the mesh. Currently, it allows setting the element type of the facet.

## Implementation Notes

This method calls `FacetData_SetParam` to update the facet element's parameters.
