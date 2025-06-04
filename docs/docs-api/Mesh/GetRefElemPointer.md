# GetRefElemPointer

This function returns a pointer to the reference element object associated with the mesh object.

## Interface

```fortran
MODULE FUNCTION getRefElemPointer(obj) RESULT(ans)
  CLASS(Mesh_), INTENT(IN) :: obj
  CLASS(ReferenceElement_), POINTER :: ans
END FUNCTION getRefElemPointer
```
