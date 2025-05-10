# GetTotalFacetElements

This function returns the total number of facet elements in the mesh.

## Interface

```fortran
  MODULE PURE FUNCTION getTotalFacetElements( obj ) RESULT( ans )
    CLASS(Mesh_), INTENT( IN ) :: obj
    INTEGER( I4B ) :: ans
  END FUNCTION getTotalFacetElements
```
