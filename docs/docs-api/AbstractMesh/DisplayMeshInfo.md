# DisplayMeshInfo

Displays concise summary information about the mesh.

## Interfac

```fortran
INTERFACE
  MODULE SUBROUTINE DisplayMeshInfo(obj, msg, unitno)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE DisplayMeshInfo
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object to display information about
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method provides a brief summary of the mesh's key statistics, including:

- Total number of nodes
- Total number of elements
- Total number of edges
- Total number of faces

The output is formatted with equal lines before and after the statistics for better readability. This method is useful for quickly getting an overview of the mesh size without the detailed information provided by other display methods.
