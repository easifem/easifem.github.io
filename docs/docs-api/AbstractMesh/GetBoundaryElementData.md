# GetBoundaryElementData

Returns the boundary element data.

## Interface

```fortran
MODULE PURE FUNCTION GetBoundaryElementData(obj, globalElement) &
  & RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  INTEGER(I4B), INTENT(IN) :: globalElement
  INTEGER(I4B), ALLOCATABLE :: ans(:)
END FUNCTION GetBoundaryElementData
```

