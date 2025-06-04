# DisplayFacetElements

Displays information about facet elements in the mesh.

:::info
This method has been deprecated. Earlier this method was used to display FacetElements of reference element of the Mesh. In the current implementation Mesh architecture is changed and reference elements are not stored, therefore this methid is not functional anymore. Please use DisplayFacetData method instead.
:::

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayFacetElements(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayFacetElements
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing facet elements to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method is designed to display facet element information, but is currently under development. When called, it raises an error indicating that the routine is not fully implemented yet. Once implemented, it would display detailed information about the shape and properties of facet elements in the mesh.
