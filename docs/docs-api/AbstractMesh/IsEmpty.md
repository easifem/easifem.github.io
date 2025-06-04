# IsEmpty

This method checks it the mesh is empty or not.

## Interface

```fortran
FUNCTION IsEmpty(obj) RESULT(ans)
  CLASS(AbstractMesh_), INTENT(IN) :: obj
  LOGICAL(LGT) :: ans
END FUNCTION IsEmpty
```
