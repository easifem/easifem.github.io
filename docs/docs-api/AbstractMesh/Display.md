# Display

Displays comprehensive information about the AbstractMesh_ object including its properties, status flags, and data structures.

## Interface

```fortran
INTERFACE AbstractMeshDisplay
  MODULE SUBROUTINE obj_Display(obj, msg, unitno)
    CLASS(AbstractMesh_), INTENT(INOUT) :: obj
    !! mesh object
    CHARACTER(*), INTENT(IN) :: msg
    !! message on screen
    INTEGER(I4B), OPTIONAL, INTENT(IN) :: unitno
    !! unit number of ouput file
  END SUBROUTINE obj_Display
END INTERFACE AbstractMeshDisplay
```

### Arguments

- `obj`: The AbstractMesh_ object to be displayed
- `msg`: A message to display at the beginning of the output
- `unitno`: Optional output unit number (defaults to stdout if not provided)

### Description

This method displays all the properties of the AbstractMesh_ object, including:

- Initialization and status flags (isInitiated, showTime, readFromFile, etc.)
- Element topology information (number of elements by topology type)
- Mesh dimensions (nsd, xidim)
- Node and element counts (tNodes, tElements, tEdges, tFaces)
- Boundary information (minX, maxX, minY, maxY, minZ, maxZ)
- Centroid coordinates (X, Y, Z)
- Allocation status of various arrays (boundingEntity, local_elemNumber, etc.)
- Data structure sizes (nodeData, elementData, facetData)
- Status of KDTree data structures

The method first displays the provided message, then checks if the mesh is initialized before displaying the remaining information.
