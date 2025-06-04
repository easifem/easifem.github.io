# GetXiDimension

Return the xidimension of the mesh.

## Interface

```fortran
MODULE FUNCTION GetXidimension(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  INTEGER(I4B) :: ans
END FUNCTION GetXidimension
```

## Description

This function returns the xi-dimension (topological dimension) of the mesh elements:

- 0 for point elements
- 1 for line/curve elements
- 2 for surface elements
- 3 for volume elements

## Arguments

- `obj`: The abstract mesh object.

## Returns

- `ans`: The xi-dimension of the mesh.

## Example

```fortran
INTEGER(I4B) :: xidim
xidim = mesh%GetXidimension()

SELECT CASE(xidim)
CASE(0)
  PRINT*, "Point mesh"
CASE(1)
  PRINT*, "Line/curve mesh"
CASE(2)
  PRINT*, "Surface mesh"
CASE(3)
  PRINT*, "Volume mesh"
END SELECT
```
