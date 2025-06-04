# DisplayInternalFacetData

Displays information specifically about internal facet data in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayInternalFacetData(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayInternalFacetData
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing facet data to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method displays only the internal facet data (facets between elements within the mesh). It filters the facet data using the `INTERNAL_ELEMENT` filter constant and calls `FacetData_Display_Filter` to display only facets of that type. For each internal facet, it shows:

- Master and slave cell information
- Local facet IDs within cells
- Node connectivity
- Other facet-specific properties

A blank line is inserted between facet entries for better readability.
