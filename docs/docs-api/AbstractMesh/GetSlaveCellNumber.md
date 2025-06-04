# GetSlaveCellNumber

Returns the slave cell number of a facet element.

## Interface

```fortran
MODULE FUNCTION GetSlaveCellNumber(obj, facetElement, elementType) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: facetElement
  INTEGER(I4B), INTENT(IN) :: elementType
  INTEGER(I4B) :: ans
END FUNCTION GetSlaveCellNumber
```

## Description

This function returns the global element number of the slave cell associated with a facet element. The slave cell is the second cell that contains the facet (if any). For boundary facets, the slave cell number is typically 0.

## Arguments

- `obj`: The abstract mesh object.
- `facetElement`: The local facet element number.
- `elementType`: The element type of the facet.

## Returns

- `ans`: The global element number of the slave cell, or 0 if the facet is on a boundary.

## Example

```fortran
INTEGER(I4B) :: facetNum = 8, facetType = 3, slaveCell

slaveCell = mesh%GetSlaveCellNumber(facetNum, facetType)
IF (slaveCell > 0) THEN
  PRINT*, "Slave cell number:", slaveCell
ELSE
  PRINT*, "Facet is on a boundary (no slave cell)"
END IF
```
