# GetTotalBoundaryElements

Returns the total number of boundary elements.

## Interface

```fortran
MODULE FUNCTION GetTotalBoundaryElements(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalBoundaryElements
```

## Description

This function returns the total number of boundary elements in the mesh. A boundary element is an element that contains at least one boundary node.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of boundary elements.

## Example

```fortran
INTEGER(I4B) :: numBoundaryElems
numBoundaryElems = mesh%GetTotalBoundaryElements()
PRINT*, "Number of boundary elements:", numBoundaryElems
```
