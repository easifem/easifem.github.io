# IsFacetElement

This functions returns true if the facetElements are allocated in the Mesh object.

```fortran
INTERFACE
  MODULE FUNCTION obj_isFacetElement(obj) RESULT(ans)
    CLASS(Mesh_), INTENT(IN) :: obj
    LOGICAL(LGT) :: ans
  END FUNCTION obj_isFacetElement
END INTERFACE
```
