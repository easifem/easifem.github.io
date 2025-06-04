# GetTotalBoundaryFacetElements

Returns the total number of boundary facet elements.

## Interface

```fortran
MODULE FUNCTION GetTotalBoundaryFacetElements(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalBoundaryFacetElements
```

## Description

This function returns the total number of boundary facet elements in the mesh. Boundary facet elements are facets that lie on the boundary of the mesh.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of boundary facet elements.

## Example

```fortran
INTEGER(I4B) :: numBoundaryFacets
numBoundaryFacets = mesh%GetTotalBoundaryFacetElements()
PRINT*, "Number of boundary facet elements:", numBoundaryFacets
```
