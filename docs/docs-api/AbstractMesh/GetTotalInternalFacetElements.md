# GetTotalInternalFacetElements

Returns the total number of internal facet elements.

## Interface

```fortran
MODULE FUNCTION GetTotalInternalFacetElements(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalInternalFacetElements
```

## Description

This function returns the total number of internal facet elements in the mesh. Internal facet elements are facets that are shared by two elements and are not on the boundary.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of internal facet elements.

## Example

```fortran
INTEGER(I4B) :: numInternalFacets
numInternalFacets = mesh%GetTotalInternalFacetElements()
PRINT*, "Number of internal facet elements:", numInternalFacets
```
