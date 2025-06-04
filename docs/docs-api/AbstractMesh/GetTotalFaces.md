# GetTotalFaces

Returns the total number of faces in the mesh (obj%tFaces).

## Interface

```fortran
MODULE PURE FUNCTION GetTotalFaces(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetTotalFaces
```

## Description

This function returns the total number of unique faces in the mesh.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The total number of faces in the mesh.

## Example

```fortran
INTEGER(I4B) :: numFaces
numFaces = mesh%GetTotalFaces()
PRINT*, "Total number of faces:", numFaces
```
