# DisplayFacetData

Displays information about all facet data in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE DisplayFacetData(obj, msg, unitno)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE DisplayFacetData
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing facet data to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method displays all facet data contained in the mesh. It first checks if the facetData array is allocated, then iterates through all facet elements to display their information using `FacetData_Display`. For each facet, it shows:

- Master and slave cell information
- Local facet IDs within cells
- Facet element type
- Node connectivity
- Other facet-specific properties

A blank line is inserted between facet entries for better readability.
