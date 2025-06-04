# DisplayNodeData

Displays detailed information about all node data in the mesh.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE mesh_DisplayNodeData(obj, msg, unitno)
    CLASS(Mesh_), INTENT(IN) :: obj
    CHARACTER(*), INTENT(IN) :: msg
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
  END SUBROUTINE mesh_DisplayNodeData
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing node data to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method iterates through all nodes in the mesh and displays their detailed information by calling the `nodeData_Display` method for each node. For each node, it displays:

- Local and global node numbers
- Node type (internal, boundary)
- Node coordinates
- Any associated element information

A blank line is inserted between node entries for better readability.
