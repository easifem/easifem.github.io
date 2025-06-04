# GetTotalFacetElements

Returns the total number of facet elements in the mesh.

## Interface

```fortran
MODULE FUNCTION GetTotalFacetElements(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalFacetElements
```

## Description

This function returns the total number of facet elements in the mesh. Facet elements include both internal and boundary facets.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of facet elements.

## Example

```fortran
INTEGER(I4B) :: numFacets
numFacets = mesh%GetTotalFacetElements()
PRINT *, "Total number of facet elements:", numFacets
```
