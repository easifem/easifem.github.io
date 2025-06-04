# GetFacetElementType

Returns the facet element type of a given cell element number.

## Interface

```fortran
MODULE FUNCTION GetFacetElementType(obj, globalElement, islocal) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION GetFacetElementType
```

## Description

This function returns the facet element types for all facets of a specified element. The facet element type indicates whether a facet is an internal element, boundary element, or domain boundary element.

## Arguments

- `obj`: The abstract mesh object.
- `globalElement`: The global (or local) element number.
- `islocal`: If present and true, `globalElement` is treated as a local element number.

## Returns

- `ans`: An array containing the facet element types for each facet of the specified element.

## Example

```fortran
INTEGER(I4B), ALLOCATABLE :: facetTypes(:)
facetTypes = mesh%GetFacetElementType(15)

DO i = 1, SIZE(facetTypes)
  IF (facetTypes(i) == INTERNAL_ELEMENT) THEN
    PRINT*, "Facet", i, "is an internal facet"
  ELSE IF (facetTypes(i) == BOUNDARY_ELEMENT) THEN
    PRINT*, "Facet", i, "is a boundary facet"
  ELSE IF (facetTypes(i) == DOMAIN_BOUNDARY_ELEMENT) THEN
    PRINT*, "Facet", i, "is a domain boundary facet"
  END IF
END DO
```
