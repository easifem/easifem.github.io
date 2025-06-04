# GetFacetParam

Get the parameters of facet elements.

## Interface

```fortran
MODULE SUBROUTINE GetFacetParam(obj, facetElement, elementType)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: facetElement
  INTEGER(I4B), OPTIONAL, INTENT(OUT) :: elementType
END SUBROUTINE GetFacetParam
```

## Description

This subroutine retrieves parameters of a specified facet element, such as the element type.

## Arguments

- `obj`: The abstract mesh object.
- `facetElement`: The local facet element number.
- `elementType` (optional, output): Returns the element type of the facet.

## Example

```fortran
INTEGER(I4B) :: facetNum = 12, facetType

CALL mesh%GetFacetParam(facetNum, facetType)
PRINT*, "Facet element type:", facetType
```
