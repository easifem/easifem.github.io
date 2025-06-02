# DisplayBoundaryFacetData

Displays information about boundary facet data in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayBoundaryFacetData(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayBoundaryFacetData
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing facet data to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method displays boundary facet data, specifically showing both regular boundary facets (`BOUNDARY_ELEMENT`) and domain boundary facets (`DOMAIN_BOUNDARY_ELEMENT`). For each facet, it uses `FacetData_Display_Filter` twice:

1. First to display facets of type `BOUNDARY_ELEMENT` (facets at mesh boundaries)
2. Then to display facets of type `DOMAIN_BOUNDARY_ELEMENT` (facets at domain boundaries)

This provides a comprehensive view of all boundary facets in the mesh, showing:

- Master cell information (boundary facets typically have only a master cell)
- Local facet ID within the cell
- Node connectivity
- Boundary conditions (if applicable)

A blank line is inserted between facet entries for better readability.
