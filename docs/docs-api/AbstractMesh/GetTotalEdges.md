# GetTotalEdges

Returns the total number of edges in the mesh (obj%tEdges).

## Interface

```fortran
MODULE PURE FUNCTION GetTotalEdges(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalEdges
```

## Description

This function returns the total number of unique edges in the mesh.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of edges in the mesh.

## Example

```fortran
INTEGER(I4B) :: numEdges
numEdges = mesh%GetTotalEdges()
PRINT*, "Total number of edges:", numEdges
```
