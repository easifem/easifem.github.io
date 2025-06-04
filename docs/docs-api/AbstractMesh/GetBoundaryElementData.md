# GetBoundaryElementData

Returns boundary element data for a given element.

## Interface

```fortran
MODULE FUNCTION GetBoundaryElementData(obj, globalElement, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION GetBoundaryElementData
```

## Description

This function returns the boundary element data for a specified element. If the element is a boundary element, the function returns the local facet numbers that coincide with the mesh boundary. If the element is not a boundary element, an array of zero size is returned.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Returns

- `ans`: An array containing the local facet numbers that are on the boundary. If the element is not a boundary element, an array of size zero is returned.

## Example

```fortran
INTEGER(I4B), ALLOCATABLE :: boundaryFacets(:)
INTEGER(I4B) :: elemNum = 15

boundaryFacets = mesh%GetBoundaryElementData(elemNum)

IF (SIZE(boundaryFacets) > 0) THEN
  PRINT*, "Element has boundary facets:", boundaryFacets
ELSE
  PRINT*, "Element is not on the boundary"
END IF
```
