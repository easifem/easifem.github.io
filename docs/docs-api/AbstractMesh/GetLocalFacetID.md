# GetLocalFacetID

Return the local facet id, so that we can get reference element of the facet element.

## Interface

```fortran
MODULE FUNCTION GetLocalFacetID(obj, facetElement, elementType, isMaster) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: facetElement
  INTEGER(I4B), INTENT(IN) :: elementType
  LOGICAL(LGT), INTENT(IN) :: isMaster
  INTEGER(I4B) :: ans
END FUNCTION GetLocalFacetID
```

## Description

This function returns the local facet ID within a cell for a given facet element. This ID can be used to get the reference element of the facet.

## Arguments

- `obj`: The abstract mesh object.
- `facetElement`: The local facet element number.
- `elementType`: The element type of the facet.
- `isMaster`: If true, returns the local facet ID in the master cell; otherwise, in the slave cell.

## Returns

- `ans`: The local facet ID.

## Example

```fortran
INTEGER(I4B) :: facetNum = 10, facetType = 3, localID

! Get local facet ID in the master cell
localID = mesh%GetLocalFacetID(facetNum, facetType, .TRUE.)
PRINT*, "Local facet ID in master cell:", localID
```
