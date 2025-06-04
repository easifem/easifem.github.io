# GetMasterCellNumber

Returns the master cell number of a facet element.

## Interface

```fortran
MODULE FUNCTION GetMasterCellNumber(obj, facetElement, elementType) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: facetElement
  INTEGER(I4B), INTENT(IN) :: elementType
  INTEGER(I4B) :: ans
END FUNCTION GetMasterCellNumber
```

## Description

This function returns the global element number of the master cell associated with a facet element. The master cell is the first cell that contains the facet.

## Arguments

- `obj`: The abstract mesh object.
- `facetElement`: The local facet element number.
- `elementType`: The element type of the facet.

## Returns

- `ans`: The global element number of the master cell.

## Example

```fortran
INTEGER(I4B) :: facetNum = 8, facetType = 3, masterCell

masterCell = mesh%GetMasterCellNumber(facetNum, facetType)
PRINT*, "Master cell number:", masterCell
```
