# GetOrder

This function returns the order of the reference element associated with the mesh object.

## Interface

```fortran
INTERFACE
  MODULE FUNCTION obj_GetOrder(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    INTEGER(I4B) :: ans
  END FUNCTION obj_GetOrder
END INTERFACE
```
