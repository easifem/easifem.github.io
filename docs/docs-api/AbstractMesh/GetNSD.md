# GetNSD

Return the NSD (Number of Spatial Dimensions).

## Interface

```fortran
MODULE FUNCTION GetNSD(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetNSD
```

## Description

This function returns the number of spatial dimensions (NSD) of the mesh.

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The number of spatial dimensions (typically 1, 2, or 3).

## Example

```fortran
INTEGER(I4B) :: nsd
nsd = mesh%GetNSD()
PRINT*, "Number of spatial dimensions:", nsd
```
