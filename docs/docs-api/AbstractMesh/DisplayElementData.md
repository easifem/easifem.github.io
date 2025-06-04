# DisplayElementData

Displays detailed information about element data in the mesh, either for a specific element or all elements.

## Interface

```fortran
INTERFACE
  MODULE SUBROUTINE DisplayElementData(obj, msg, unitno, globalElement, &
                                           islocal)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! object
    CHARACTER(*), INTENT(IN) :: msg
    !! message
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
    !! unit number
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: globalElement
    !! global element number
    LOGICAL(LGT), OPTIONAL, INTENT(IN) :: islocal
    !! if true then globalElement is local
  END SUBROUTINE DisplayElementData
END INTERFACE
```

### Arguments

- `obj`: The AbstractMesh_ object containing element data to display
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)
- `globalElement`: Optional global element number to display; if not provided, all elements are displayed
- `islocal`: Optional flag indicating if globalElement is a local element number

### Description

This method displays element data in two possible modes:

1. If `globalElement` is provided, it displays information for only that specific element
2. Otherwise, it iterates through all elements in the mesh and displays their data

For each element, it calls `elemData_Display` to show:

- Element number (local and global)
- Element type and properties
- Node connectivity
- Boundary information
- Material properties
- Any other element-specific data

A blank line is inserted between element entries for better readability.
